! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/", e(e.s = 55)
}([function(t, e, n) {
    "use strict";
    t.exports = n(13), t.exports.easing = n(82), t.exports.canvas = n(83), t.exports.options = n(84)
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = {
        _set: function(t, e) {
            return r.merge(this[t] || (this[t] = {}), e)
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n, r) {
        var o, a, u, l, s, c, f, d, h, p = Object.keys(n);
        for (o = 0, a = p.length; o < a; ++o)
            if (u = p[o], c = n[u], e.hasOwnProperty(u) || (e[u] = c), (l = e[u]) !== c && "_" !== u[0]) {
                if (t.hasOwnProperty(u) || (t[u] = l), s = t[u], (f = typeof c) === typeof s)
                    if ("string" === f) {
                        if (d = i(s), d.valid && (h = i(c), h.valid)) {
                            e[u] = h.mix(d, r).rgbString();
                            continue
                        }
                    } else if ("number" === f && isFinite(s) && isFinite(c)) {
                    e[u] = s + (c - s) * r;
                    continue
                }
                e[u] = c
            }
    }
    var i = n(36),
        o = n(0),
        a = function(t) {
            o.extend(this, t), this.initialize.apply(this, arguments)
        };
    o.extend(a.prototype, {
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            var t = this;
            return t._view || (t._view = o.clone(t._model)), t._start = {}, t
        },
        transition: function(t) {
            var e = this,
                n = e._model,
                i = e._start,
                o = e._view;
            return n && 1 !== t ? (o || (o = e._view = {}), i || (i = e._start = {}), r(i, o, n, t), e) : (e._view = n, e._start = null, e)
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return o.isNumber(this._model.x) && o.isNumber(this._model.y)
        }
    }), a.extend = o.inherits, t.exports = a
}, function(t, e, n) {
    var r = n(44),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    t.exports = {}, t.exports.Arc = n(90), t.exports.Line = n(91), t.exports.Point = n(92), t.exports.Rectangle = n(93)
}, function(t, e, n) {
    function r(t, e) {
        var n = o(t, e);
        return i(n) ? n : void 0
    }
    var i = n(138),
        o = n(143);
    t.exports = r
}, function(t, e, n) {
    "use strict";
    t.exports = n(62)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return o.where(t, function(t) {
            return t.position === e
        })
    }

    function i(t, e) {
        t.forEach(function(t, e) {
            return t._tmpIndex_ = e, t
        }), t.sort(function(t, n) {
            var r = e ? n : t,
                i = e ? t : n;
            return r.weight === i.weight ? r._tmpIndex_ - i._tmpIndex_ : r.weight - i.weight
        }), t.forEach(function(t) {
            delete t._tmpIndex_
        })
    }
    var o = n(0);
    t.exports = {
        defaults: {},
        addBox: function(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
        },
        removeBox: function(t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
        },
        configure: function(t, e, n) {
            for (var r, i = ["fullWidth", "position", "weight"], o = i.length, a = 0; a < o; ++a) r = i[a], n.hasOwnProperty(r) && (e[r] = n[r])
        },
        update: function(t, e, n) {
            function a(t) {
                var e, n = t.isHorizontal();
                n ? (e = t.update(t.fullWidth ? x : T, M), D -= e.height) : (e = t.update(C, D), T -= e.width), P.push({
                    horizontal: n,
                    minSize: e,
                    box: t
                })
            }

            function u(t) {
                var e = o.findNextWhere(P, function(e) {
                    return e.box === t
                });
                if (e)
                    if (t.isHorizontal()) {
                        var n = {
                            left: Math.max(R, O),
                            right: Math.max(F, E),
                            top: 0,
                            bottom: 0
                        };
                        t.update(t.fullWidth ? x : T, w / 2, n)
                    } else t.update(e.minSize.width, D)
            }

            function l(t) {
                var e = o.findNextWhere(P, function(e) {
                        return e.box === t
                    }),
                    n = {
                        left: 0,
                        right: 0,
                        top: N,
                        bottom: L
                    };
                e && t.update(e.minSize.width, D, n)
            }

            function s(t) {
                t.isHorizontal() ? (t.left = t.fullWidth ? d : R, t.right = t.fullWidth ? e - h : R + T, t.top = Y, t.bottom = Y + t.height, Y = t.bottom) : (t.left = U, t.right = U + t.width, t.top = N, t.bottom = N + D, U = t.right)
            }
            if (t) {
                var c = t.options.layout || {},
                    f = o.options.toPadding(c.padding),
                    d = f.left,
                    h = f.right,
                    p = f.top,
                    g = f.bottom,
                    v = r(t.boxes, "left"),
                    m = r(t.boxes, "right"),
                    y = r(t.boxes, "top"),
                    b = r(t.boxes, "bottom"),
                    _ = r(t.boxes, "chartArea");
                i(v, !0), i(m, !1), i(y, !0), i(b, !1);
                var x = e - d - h,
                    w = n - p - g,
                    k = x / 2,
                    S = w / 2,
                    C = (e - k) / (v.length + m.length),
                    M = (n - S) / (y.length + b.length),
                    T = x,
                    D = w,
                    P = [];
                o.each(v.concat(m, y, b), a);
                var O = 0,
                    E = 0,
                    A = 0,
                    I = 0;
                o.each(y.concat(b), function(t) {
                    if (t.getPadding) {
                        var e = t.getPadding();
                        O = Math.max(O, e.left), E = Math.max(E, e.right)
                    }
                }), o.each(v.concat(m), function(t) {
                    if (t.getPadding) {
                        var e = t.getPadding();
                        A = Math.max(A, e.top), I = Math.max(I, e.bottom)
                    }
                });
                var R = d,
                    F = h,
                    N = p,
                    L = g;
                o.each(v.concat(m), u), o.each(v, function(t) {
                    R += t.width
                }), o.each(m, function(t) {
                    F += t.width
                }), o.each(y.concat(b), u), o.each(y, function(t) {
                    N += t.height
                }), o.each(b, function(t) {
                    L += t.height
                }), o.each(v.concat(m), l), R = d, F = h, N = p, L = g, o.each(v, function(t) {
                    R += t.width
                }), o.each(m, function(t) {
                    F += t.width
                }), o.each(y, function(t) {
                    N += t.height
                }), o.each(b, function(t) {
                    L += t.height
                });
                var z = Math.max(O - R, 0);
                R += z, F += Math.max(E - F, 0);
                var j = Math.max(A - N, 0);
                N += j, L += Math.max(I - L, 0);
                var W = n - N - L,
                    B = e - R - F;
                B === T && W === D || (o.each(v, function(t) {
                    t.height = W
                }), o.each(m, function(t) {
                    t.height = W
                }), o.each(y, function(t) {
                    t.fullWidth || (t.width = B)
                }), o.each(b, function(t) {
                    t.fullWidth || (t.width = B)
                }), D = W, T = B);
                var U = d + z,
                    Y = p + j;
                o.each(v.concat(y), s), U += T, Y += D, o.each(m, s), o.each(b, s), t.chartArea = {
                    left: R,
                    top: N,
                    right: R + T,
                    bottom: N + D
                }, o.each(_, function(e) {
                    e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(T, D)
                })
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = {
        formatters: {
            values: function(t) {
                return r.isArray(t) ? t : "" + t
            },
            linear: function(t, e, n) {
                var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                var o = r.log10(Math.abs(i)),
                    a = "";
                if (0 !== t) {
                    var u = -1 * Math.floor(o);
                    u = Math.max(Math.min(u, 20), 0), a = t.toFixed(u)
                } else a = "0";
                return a
            },
            logarithmic: function(t, e, n) {
                var i = t / Math.pow(10, Math.floor(r.log10(t)));
                return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
            }
        }
    }
}, function(t, e, n) {
    function r(t) {
        return null == t ? void 0 === t ? l : u : s && s in Object(t) ? o(t) : a(t)
    }
    var i = n(16),
        o = n(139),
        a = n(140),
        u = "[object Null]",
        l = "[object Undefined]",
        s = i ? i.toStringTag : void 0;
    t.exports = r
}, function(t, e) {
    function n(t) {
        return null != t && "object" == typeof t
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    "use strict";
    var r = {
        noop: function() {},
        uid: function() {
            var t = 0;
            return function() {
                return t++
            }
        }(),
        isNullOrUndef: function(t) {
            return null === t || "undefined" === typeof t
        },
        isArray: Array.isArray ? Array.isArray : function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        isObject: function(t) {
            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
        },
        valueOrDefault: function(t, e) {
            return "undefined" === typeof t ? e : t
        },
        valueAtIndexOrDefault: function(t, e, n) {
            return r.valueOrDefault(r.isArray(t) ? t[e] : t, n)
        },
        callback: function(t, e, n) {
            if (t && "function" === typeof t.call) return t.apply(n, e)
        },
        each: function(t, e, n, i) {
            var o, a, u;
            if (r.isArray(t))
                if (a = t.length, i)
                    for (o = a - 1; o >= 0; o--) e.call(n, t[o], o);
                else
                    for (o = 0; o < a; o++) e.call(n, t[o], o);
            else if (r.isObject(t))
                for (u = Object.keys(t), a = u.length, o = 0; o < a; o++) e.call(n, t[u[o]], u[o])
        },
        arrayEquals: function(t, e) {
            var n, i, o, a;
            if (!t || !e || t.length !== e.length) return !1;
            for (n = 0, i = t.length; n < i; ++n)
                if (o = t[n], a = e[n], o instanceof Array && a instanceof Array) {
                    if (!r.arrayEquals(o, a)) return !1
                } else if (o !== a) return !1;
            return !0
        },
        clone: function(t) {
            if (r.isArray(t)) return t.map(r.clone);
            if (r.isObject(t)) {
                for (var e = {}, n = Object.keys(t), i = n.length, o = 0; o < i; ++o) e[n[o]] = r.clone(t[n[o]]);
                return e
            }
            return t
        },
        _merger: function(t, e, n, i) {
            var o = e[t],
                a = n[t];
            r.isObject(o) && r.isObject(a) ? r.merge(o, a, i) : e[t] = r.clone(a)
        },
        _mergerIf: function(t, e, n) {
            var i = e[t],
                o = n[t];
            r.isObject(i) && r.isObject(o) ? r.mergeIf(i, o) : e.hasOwnProperty(t) || (e[t] = r.clone(o))
        },
        merge: function(t, e, n) {
            var i, o, a, u, l, s = r.isArray(e) ? e : [e],
                c = s.length;
            if (!r.isObject(t)) return t;
            for (n = n || {}, i = n.merger || r._merger, o = 0; o < c; ++o)
                if (e = s[o], r.isObject(e))
                    for (a = Object.keys(e), l = 0, u = a.length; l < u; ++l) i(a[l], t, e, n);
            return t
        },
        mergeIf: function(t, e) {
            return r.merge(t, e, {
                merger: r._mergerIf
            })
        },
        extend: function(t) {
            for (var e = function(e, n) {
                    t[n] = e
                }, n = 1, i = arguments.length; n < i; ++n) r.each(arguments[n], e);
            return t
        },
        inherits: function(t) {
            var e = this,
                n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    return e.apply(this, arguments)
                },
                i = function() {
                    this.constructor = n
                };
            return i.prototype = e.prototype, n.prototype = new i, n.extend = r.inherits, t && r.extend(n.prototype, t), n.__super__ = e.prototype, n
        }
    };
    t.exports = r, r.callCallback = r.callback, r.indexOf = function(t, e, n) {
        return Array.prototype.indexOf.call(t, e, n)
    }, r.getValueOrDefault = r.valueOrDefault, r.getValueAtIndexOrDefault = r.valueAtIndexOrDefault
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var i = n(128),
        o = n(129),
        a = n(130),
        u = n(131),
        l = n(132);
    r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = l, t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        for (var n = t.length; n--;)
            if (i(t[n][0], e)) return n;
        return -1
    }
    var i = n(42);
    t.exports = r
}, function(t, e, n) {
    var r = n(3),
        i = r.Symbol;
    t.exports = i
}, function(t, e) {
    function n(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(6),
        i = r(Object, "create");
    t.exports = i
}, function(t, e, n) {
    function r(t, e) {
        var n = t.__data__;
        return i(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
    var i = n(152);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return a(t) ? i(t) : o(t)
    }
    var i = n(172),
        o = n(179),
        a = n(29);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return "symbol" == typeof t || o(t) && i(t) == a
    }
    var i = n(10),
        o = n(11),
        a = "[object Symbol]";
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        if ("string" == typeof t || i(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -o ? "-0" : e
    }
    var i = n(21),
        o = 1 / 0;
    t.exports = r
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function r(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    var i = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
    t.exports = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var n, u, l = r(t), s = 1; s < arguments.length; s++) {
            n = Object(arguments[s]);
            for (var c in n) o.call(n, c) && (l[c] = n[c]);
            if (i) {
                u = i(n);
                for (var f = 0; f < u.length; f++) a.call(n, u[f]) && (l[u[f]] = n[u[f]])
            }
        }
        return l
    }
}, function(t, e, n) {
    function r(t, e, n, a, u) {
        return t === e || (null == t || null == e || !o(t) && !o(e) ? t !== t && e !== e : i(t, e, n, a, r, u))
    }
    var i = n(127),
        o = n(11);
    t.exports = r
}, function(t, e, n) {
    var r = n(6),
        i = n(3),
        o = r(i, "Map");
    t.exports = o
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var i = n(144),
        o = n(151),
        a = n(153),
        u = n(154),
        l = n(155);
    r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = l, t.exports = r
}, function(t, e) {
    function n(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }
    var r = 9007199254740991;
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return null != t && o(t.length) && !i(t)
    }
    var i = n(43),
        o = n(28);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? u(t) ? o(t[0], t[1]) : i(t) : l(t)
    }
    var i = n(190),
        o = n(193),
        a = n(204),
        u = n(4),
        l = n(205);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        if (i(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || (u.test(t) || !a.test(t) || null != e && t in Object(e))
    }
    var i = n(4),
        o = n(21),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        u = /^\w*$/;
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r() {}

    function i(t) {
        try {
            return t.then
        } catch (t) {
            return m = t, y
        }
    }

    function o(t, e) {
        try {
            return t(e)
        } catch (t) {
            return m = t, y
        }
    }

    function a(t, e, n) {
        try {
            t(e, n)
        } catch (t) {
            return m = t, y
        }
    }

    function u(t) {
        if ("object" !== typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof t) throw new TypeError("Promise constructor's argument is not a function");
        this._75 = 0, this._83 = 0, this._18 = null, this._38 = null, t !== r && g(t, this)
    }

    function l(t, e, n) {
        return new t.constructor(function(i, o) {
            var a = new u(r);
            a.then(i, o), s(t, new p(e, n, a))
        })
    }

    function s(t, e) {
        for (; 3 === t._83;) t = t._18;
        if (u._47 && u._47(t), 0 === t._83) return 0 === t._75 ? (t._75 = 1, void(t._38 = e)) : 1 === t._75 ? (t._75 = 2, void(t._38 = [t._38, e])) : void t._38.push(e);
        c(t, e)
    }

    function c(t, e) {
        v(function() {
            var n = 1 === t._83 ? e.onFulfilled : e.onRejected;
            if (null === n) return void(1 === t._83 ? f(e.promise, t._18) : d(e.promise, t._18));
            var r = o(n, t._18);
            r === y ? d(e.promise, m) : f(e.promise, r)
        })
    }

    function f(t, e) {
        if (e === t) return d(t, new TypeError("A promise cannot be resolved with itself."));
        if (e && ("object" === typeof e || "function" === typeof e)) {
            var n = i(e);
            if (n === y) return d(t, m);
            if (n === t.then && e instanceof u) return t._83 = 3, t._18 = e, void h(t);
            if ("function" === typeof n) return void g(n.bind(e), t)
        }
        t._83 = 1, t._18 = e, h(t)
    }

    function d(t, e) {
        t._83 = 2, t._18 = e, u._71 && u._71(t, e), h(t)
    }

    function h(t) {
        if (1 === t._75 && (s(t, t._38), t._38 = null), 2 === t._75) {
            for (var e = 0; e < t._38.length; e++) s(t, t._38[e]);
            t._38 = null
        }
    }

    function p(t, e, n) {
        this.onFulfilled = "function" === typeof t ? t : null, this.onRejected = "function" === typeof e ? e : null, this.promise = n
    }

    function g(t, e) {
        var n = !1,
            r = a(t, function(t) {
                n || (n = !0, f(e, t))
            }, function(t) {
                n || (n = !0, d(e, t))
            });
        n || r !== y || (n = !0, d(e, m))
    }
    var v = n(58),
        m = null,
        y = {};
    t.exports = u, u._47 = null, u._71 = null, u._44 = r, u.prototype.then = function(t, e) {
        if (this.constructor !== u) return l(this, t, e);
        var n = new u(r);
        return s(this, new p(t, e, n)), n
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n, r, o, a, u, l) {
        if (i(e), !t) {
            var s;
            if (void 0 === e) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, r, o, a, u, l],
                    f = 0;
                s = new Error(e.replace(/%s/g, function() {
                    return c[f++]
                })), s.name = "Invariant Violation"
            }
            throw s.framesToPop = 1, s
        }
    }
    var i = function(t) {};
    t.exports = r
}, function(t, e, n) {
    "use strict";
    var r = {};
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return function() {
            return t
        }
    }
    var i = function() {};
    i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function() {
        return this
    }, i.thatReturnsArgument = function(t) {
        return t
    }, t.exports = i
}, function(t, e, n) {
    var r = n(86),
        i = n(88),
        o = function(t) {
            if (t instanceof o) return t;
            if (!(this instanceof o)) return new o(t);
            this.valid = !1, this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1
            };
            var e;
            "string" === typeof t ? (e = i.getRgba(t), e ? this.setValues("rgb", e) : (e = i.getHsla(t)) ? this.setValues("hsl", e) : (e = i.getHwb(t)) && this.setValues("hwb", e)) : "object" === typeof t && (e = t, void 0 !== e.r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e))
        };
    o.prototype = {
        isValid: function() {
            return this.valid
        },
        rgb: function() {
            return this.setSpace("rgb", arguments)
        },
        hsl: function() {
            return this.setSpace("hsl", arguments)
        },
        hsv: function() {
            return this.setSpace("hsv", arguments)
        },
        hwb: function() {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
            return this.values.rgb
        },
        hslArray: function() {
            return this.values.hsl
        },
        hsvArray: function() {
            return this.values.hsv
        },
        hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
            return this.values.cmyk
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
            return t && (t %= 360, t = t < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
            return i.hexString(this.values.rgb)
        },
        rgbString: function() {
            return i.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return i.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return i.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return i.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return i.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return i.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return i.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                var r = t[n] / 255;
                e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
            var e = this.luminosity(),
                n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
            var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
            var e = this.values.hsl,
                n = (e[0] + t) % 360;
            return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
            var n = this,
                r = t,
                i = void 0 === e ? .5 : e,
                o = 2 * i - 1,
                a = n.alpha() - r.alpha(),
                u = ((o * a === -1 ? o : (o + a) / (1 + o * a)) + 1) / 2,
                l = 1 - u;
            return this.rgb(u * n.red() + l * r.red(), u * n.green() + l * r.green(), u * n.blue() + l * r.blue()).alpha(n.alpha() * i + r.alpha() * (1 - i))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var t, e, n = new o,
                r = this.values,
                i = n.values;
            for (var a in r) r.hasOwnProperty(a) && (t = r[a], e = {}.toString.call(t), "[object Array]" === e ? i[a] = t.slice(0) : "[object Number]" === e ? i[a] = t : console.error("unexpected color value:", t));
            return n
        }
    }, o.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, o.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, o.prototype.getValues = function(t) {
        for (var e = this.values, n = {}, r = 0; r < t.length; r++) n[t.charAt(r)] = e[t][r];
        return 1 !== e.alpha && (n.a = e.alpha), n
    }, o.prototype.setValues = function(t, e) {
        var n, i = this.values,
            o = this.spaces,
            a = this.maxes,
            u = 1;
        if (this.valid = !0, "alpha" === t) u = e;
        else if (e.length) i[t] = e.slice(0, t.length), u = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) i[t][n] = e[t.charAt(n)];
            u = e.a
        } else if (void 0 !== e[o[t][0]]) {
            var l = o[t];
            for (n = 0; n < t.length; n++) i[t][n] = e[l[n]];
            u = e.alpha
        }
        if (i.alpha = Math.max(0, Math.min(1, void 0 === u ? i.alpha : u)), "alpha" === t) return !1;
        var s;
        for (n = 0; n < t.length; n++) s = Math.max(0, Math.min(a[t][n], i[t][n])), i[t][n] = Math.round(s);
        for (var c in o) c !== t && (i[c] = r[t][c](i[t]));
        return !0
    }, o.prototype.setSpace = function(t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" === typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
    }, o.prototype.setChannel = function(t, e, n) {
        var r = this.values[t];
        return void 0 === n ? r[e] : n === r[e] ? this : (r[e] = n, this.setValues(t, r), this)
    }, "undefined" !== typeof window && (window.Color = o), t.exports = o
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : s.getRelativePosition(t, e)
    }

    function i(t, e) {
        var n, r, i, o, a, u = t.data.datasets;
        for (r = 0, o = u.length; r < o; ++r)
            if (t.isDatasetVisible(r))
                for (n = t.getDatasetMeta(r), i = 0, a = n.data.length; i < a; ++i) {
                    var l = n.data[i];
                    l._view.skip || e(l)
                }
    }

    function o(t, e) {
        var n = [];
        return i(t, function(t) {
            t.inRange(e.x, e.y) && n.push(t)
        }), n
    }

    function a(t, e, n, r) {
        var o = Number.POSITIVE_INFINITY,
            a = [];
        return i(t, function(t) {
            if (!n || t.inRange(e.x, e.y)) {
                var i = t.getCenterPoint(),
                    u = r(e, i);
                u < o ? (a = [t], o = u) : u === o && a.push(t)
            }
        }), a
    }

    function u(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function(t, r) {
            var i = e ? Math.abs(t.x - r.x) : 0,
                o = n ? Math.abs(t.y - r.y) : 0;
            return Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2))
        }
    }

    function l(t, e, n) {
        var i = r(e, t);
        n.axis = n.axis || "x";
        var l = u(n.axis),
            s = n.intersect ? o(t, i) : a(t, i, !1, l),
            c = [];
        return s.length ? (t.data.datasets.forEach(function(e, n) {
            if (t.isDatasetVisible(n)) {
                var r = t.getDatasetMeta(n),
                    i = r.data[s[0]._index];
                i && !i._view.skip && c.push(i)
            }
        }), c) : []
    }
    var s = n(0);
    t.exports = {
        modes: {
            single: function(t, e) {
                var n = r(e, t),
                    o = [];
                return i(t, function(t) {
                    if (t.inRange(n.x, n.y)) return o.push(t), o
                }), o.slice(0, 1)
            },
            label: l,
            index: l,
            dataset: function(t, e, n) {
                var i = r(e, t);
                n.axis = n.axis || "xy";
                var l = u(n.axis),
                    s = n.intersect ? o(t, i) : a(t, i, !1, l);
                return s.length > 0 && (s = t.getDatasetMeta(s[0]._datasetIndex).data), s
            },
            "x-axis": function(t, e) {
                return l(t, e, {
                    intersect: !1
                })
            },
            point: function(t, e) {
                return o(t, r(e, t))
            },
            nearest: function(t, e, n) {
                var i = r(e, t);
                n.axis = n.axis || "xy";
                var o = u(n.axis),
                    l = a(t, i, n.intersect, o);
                return l.length > 1 && l.sort(function(t, e) {
                    var n = t.getArea(),
                        r = e.getArea(),
                        i = n - r;
                    return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
                }), l.slice(0, 1)
            },
            x: function(t, e, n) {
                var o = r(e, t),
                    a = [],
                    u = !1;
                return i(t, function(t) {
                    t.inXRange(o.x) && a.push(t), t.inRange(o.x, o.y) && (u = !0)
                }), n.intersect && !u && (a = []), a
            },
            y: function(t, e, n) {
                var o = r(e, t),
                    a = [],
                    u = !1;
                return i(t, function(t) {
                    t.inYRange(o.y) && a.push(t), t.inRange(o.x, o.y) && (u = !0)
                }), n.intersect && !u && (a = []), a
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(94),
        o = n(95),
        a = o._enabled ? o : i;
    t.exports = r.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
    }, a)
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0);
    r._set("global", {
        plugins: {}
    }), t.exports = {
        _plugins: [],
        _cacheId: 0,
        register: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
                -1 === e.indexOf(t) && e.push(t)
            }), this._cacheId++
        },
        unregister: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
                var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
            }), this._cacheId++
        },
        clear: function() {
            this._plugins = [], this._cacheId++
        },
        count: function() {
            return this._plugins.length
        },
        getAll: function() {
            return this._plugins
        },
        notify: function(t, e, n) {
            var r, i, o, a, u, l = this.descriptors(t),
                s = l.length;
            for (r = 0; r < s; ++r)
                if (i = l[r], o = i.plugin, "function" === typeof(u = o[e]) && (a = [t].concat(n || []), a.push(i.options), !1 === u.apply(o, a))) return !1;
            return !0
        },
        descriptors: function(t) {
            var e = t.$plugins || (t.$plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var n = [],
                o = [],
                a = t && t.config || {},
                u = a.options && a.options.plugins || {};
            return this._plugins.concat(a.plugins || []).forEach(function(t) {
                if (-1 === n.indexOf(t)) {
                    var e = t.id,
                        a = u[e];
                    !1 !== a && (!0 === a && (a = i.clone(r.global.plugins[e])), n.push(t), o.push({
                        plugin: t,
                        options: a || {}
                    }))
                }
            }), e.descriptors = o, e.id = this._cacheId, o
        },
        _invalidate: function(t) {
            delete t.$plugins
        }
    }
}, function(t, e, n) {
    (function(t) {
        ! function(e, n) {
            t.exports = n()
        }(0, function() {
            "use strict";

            function e() {
                return Tr.apply(null, arguments)
            }

            function n(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function r(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function i(t) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }

            function o(t) {
                return void 0 === t
            }

            function a(t) {
                return "number" === typeof t || "[object Number]" === Object.prototype.toString.call(t)
            }

            function u(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function l(t, e) {
                var n, r = [];
                for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
                return r
            }

            function s(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function c(t, e) {
                for (var n in e) s(e, n) && (t[n] = e[n]);
                return s(e, "toString") && (t.toString = e.toString), s(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function f(t, e, n, r) {
                return Se(t, e, n, r, !0).utc()
            }

            function d() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }

            function h(t) {
                return null == t._pf && (t._pf = d()), t._pf
            }

            function p(t) {
                if (null == t._isValid) {
                    var e = h(t),
                        n = Dr.call(e.parsedDateParts, function(t) {
                            return null != t
                        }),
                        r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                    if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return r;
                    t._isValid = r
                }
                return t._isValid
            }

            function g(t) {
                var e = f(NaN);
                return null != t ? c(h(e), t) : h(e).userInvalidated = !0, e
            }

            function v(t, e) {
                var n, r, i;
                if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = h(e)), o(e._locale) || (t._locale = e._locale), Pr.length > 0)
                    for (n = 0; n < Pr.length; n++) r = Pr[n], i = e[r], o(i) || (t[r] = i);
                return t
            }

            function m(t) {
                v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Or && (Or = !0, e.updateOffset(this), Or = !1)
            }

            function y(t) {
                return t instanceof m || null != t && null != t._isAMomentObject
            }

            function b(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }

            function _(t) {
                var e = +t,
                    n = 0;
                return 0 !== e && isFinite(e) && (n = b(e)), n
            }

            function x(t, e, n) {
                var r, i = Math.min(t.length, e.length),
                    o = Math.abs(t.length - e.length),
                    a = 0;
                for (r = 0; r < i; r++)(n && t[r] !== e[r] || !n && _(t[r]) !== _(e[r])) && a++;
                return a + o
            }

            function w(t) {
                !1 === e.suppressDeprecationWarnings && "undefined" !== typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function k(t, n) {
                var r = !0;
                return c(function() {
                    if (null != e.deprecationHandler && e.deprecationHandler(null, t), r) {
                        for (var i, o = [], a = 0; a < arguments.length; a++) {
                            if (i = "", "object" === typeof arguments[a]) {
                                i += "\n[" + a + "] ";
                                for (var u in arguments[0]) i += u + ": " + arguments[0][u] + ", ";
                                i = i.slice(0, -2)
                            } else i = arguments[a];
                            o.push(i)
                        }
                        w(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), r = !1
                    }
                    return n.apply(this, arguments)
                }, n)
            }

            function S(t, n) {
                null != e.deprecationHandler && e.deprecationHandler(t, n), Er[t] || (w(n), Er[t] = !0)
            }

            function C(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function M(t) {
                var e, n;
                for (n in t) e = t[n], C(e) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }

            function T(t, e) {
                var n, i = c({}, t);
                for (n in e) s(e, n) && (r(t[n]) && r(e[n]) ? (i[n] = {}, c(i[n], t[n]), c(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                for (n in t) s(t, n) && !s(e, n) && r(t[n]) && (i[n] = c({}, i[n]));
                return i
            }

            function D(t) {
                null != t && this.set(t)
            }

            function P(t, e, n) {
                var r = this._calendar[t] || this._calendar.sameElse;
                return C(r) ? r.call(e, n) : r
            }

            function O(t) {
                var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }

            function E() {
                return this._invalidDate
            }

            function A(t) {
                return this._ordinal.replace("%d", t)
            }

            function I(t, e, n, r) {
                var i = this._relativeTime[n];
                return C(i) ? i(t, e, n, r) : i.replace(/%d/i, t)
            }

            function R(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return C(n) ? n(e) : n.replace(/%s/i, e)
            }

            function F(t, e) {
                var n = t.toLowerCase();
                Lr[n] = Lr[n + "s"] = Lr[e] = t
            }

            function N(t) {
                return "string" === typeof t ? Lr[t] || Lr[t.toLowerCase()] : void 0
            }

            function L(t) {
                var e, n, r = {};
                for (n in t) s(t, n) && (e = N(n)) && (r[e] = t[n]);
                return r
            }

            function z(t, e) {
                zr[t] = e
            }

            function j(t) {
                var e = [];
                for (var n in t) e.push({
                    unit: n,
                    priority: zr[n]
                });
                return e.sort(function(t, e) {
                    return t.priority - e.priority
                }), e
            }

            function W(t, e, n) {
                var r = "" + Math.abs(t),
                    i = e - r.length;
                return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
            }

            function B(t, e, n, r) {
                var i = r;
                "string" === typeof r && (i = function() {
                    return this[r]()
                }), t && (Ur[t] = i), e && (Ur[e[0]] = function() {
                    return W(i.apply(this, arguments), e[1], e[2])
                }), n && (Ur[n] = function() {
                    return this.localeData().ordinal(i.apply(this, arguments), t)
                })
            }

            function U(t) {
                return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
            }

            function Y(t) {
                var e, n, r = t.match(jr);
                for (e = 0, n = r.length; e < n; e++) Ur[r[e]] ? r[e] = Ur[r[e]] : r[e] = U(r[e]);
                return function(e) {
                    var i, o = "";
                    for (i = 0; i < n; i++) o += C(r[i]) ? r[i].call(e, t) : r[i];
                    return o
                }
            }

            function H(t, e) {
                return t.isValid() ? (e = V(e, t.localeData()), Br[e] = Br[e] || Y(e), Br[e](t)) : t.localeData().invalidDate()
            }

            function V(t, e) {
                function n(t) {
                    return e.longDateFormat(t) || t
                }
                var r = 5;
                for (Wr.lastIndex = 0; r >= 0 && Wr.test(t);) t = t.replace(Wr, n), Wr.lastIndex = 0, r -= 1;
                return t
            }

            function G(t, e, n) {
                ai[t] = C(e) ? e : function(t, r) {
                    return t && n ? n : e
                }
            }

            function q(t, e) {
                return s(ai, t) ? ai[t](e._strict, e._locale) : new RegExp(K(t))
            }

            function K(t) {
                return $(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, i) {
                    return e || n || r || i
                }))
            }

            function $(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function Z(t, e) {
                var n, r = e;
                for ("string" === typeof t && (t = [t]), a(e) && (r = function(t, n) {
                        n[e] = _(t)
                    }), n = 0; n < t.length; n++) ui[t[n]] = r
            }

            function Q(t, e) {
                Z(t, function(t, n, r, i) {
                    r._w = r._w || {}, e(t, r._w, r, i)
                })
            }

            function X(t, e, n) {
                null != e && s(ui, t) && ui[t](e, n._a, n, t)
            }

            function J(t) {
                return tt(t) ? 366 : 365
            }

            function tt(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }

            function et() {
                return tt(this.year())
            }

            function nt(t, n) {
                return function(r) {
                    return null != r ? (it(this, t, r), e.updateOffset(this, n), this) : rt(this, t)
                }
            }

            function rt(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function it(t, e, n) {
                t.isValid() && !isNaN(n) && ("FullYear" === e && tt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), lt(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
            }

            function ot(t) {
                return t = N(t), C(this[t]) ? this[t]() : this
            }

            function at(t, e) {
                if ("object" === typeof t) {
                    t = L(t);
                    for (var n = j(t), r = 0; r < n.length; r++) this[n[r].unit](t[n[r].unit])
                } else if (t = N(t), C(this[t])) return this[t](e);
                return this
            }

            function ut(t, e) {
                return (t % e + e) % e
            }

            function lt(t, e) {
                if (isNaN(t) || isNaN(e)) return NaN;
                var n = ut(e, 12);
                return t += (e - n) / 12, 1 === n ? tt(t) ? 29 : 28 : 31 - n % 7 % 2
            }

            function st(t, e) {
                return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || bi).test(e) ? "format" : "standalone"][t.month()] : n(this._months) ? this._months : this._months.standalone
            }

            function ct(t, e) {
                return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[bi.test(e) ? "format" : "standalone"][t.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }

            function ft(t, e, n) {
                var r, i, o, a = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) o = f([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
                return n ? "MMM" === e ? (i = mi.call(this._shortMonthsParse, a), -1 !== i ? i : null) : (i = mi.call(this._longMonthsParse, a), -1 !== i ? i : null) : "MMM" === e ? -1 !== (i = mi.call(this._shortMonthsParse, a)) ? i : (i = mi.call(this._longMonthsParse, a), -1 !== i ? i : null) : -1 !== (i = mi.call(this._longMonthsParse, a)) ? i : (i = mi.call(this._shortMonthsParse, a), -1 !== i ? i : null)
            }

            function dt(t, e, n) {
                var r, i, o;
                if (this._monthsParseExact) return ft.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                    if (i = f([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
                    if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
                    if (!n && this._monthsParse[r].test(t)) return r
                }
            }

            function ht(t, e) {
                var n;
                if (!t.isValid()) return t;
                if ("string" === typeof e)
                    if (/^\d+$/.test(e)) e = _(e);
                    else if (e = t.localeData().monthsParse(e), !a(e)) return t;
                return n = Math.min(t.date(), lt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }

            function pt(t) {
                return null != t ? (ht(this, t), e.updateOffset(this, !0), this) : rt(this, "Month")
            }

            function gt() {
                return lt(this.year(), this.month())
            }

            function vt(t) {
                return this._monthsParseExact ? (s(this, "_monthsRegex") || yt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = wi), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function mt(t) {
                return this._monthsParseExact ? (s(this, "_monthsRegex") || yt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = ki), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }

            function yt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, r = [],
                    i = [],
                    o = [];
                for (e = 0; e < 12; e++) n = f([2e3, e]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
                for (r.sort(t), i.sort(t), o.sort(t), e = 0; e < 12; e++) r[e] = $(r[e]), i[e] = $(i[e]);
                for (e = 0; e < 24; e++) o[e] = $(o[e]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function bt(t, e, n, r, i, o, a) {
                var u = new Date(t, e, n, r, i, o, a);
                return t < 100 && t >= 0 && isFinite(u.getFullYear()) && u.setFullYear(t), u
            }

            function _t(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
            }

            function xt(t, e, n) {
                var r = 7 + e - n;
                return -(7 + _t(t, 0, r).getUTCDay() - e) % 7 + r - 1
            }

            function wt(t, e, n, r, i) {
                var o, a, u = (7 + n - r) % 7,
                    l = xt(t, r, i),
                    s = 1 + 7 * (e - 1) + u + l;
                return s <= 0 ? (o = t - 1, a = J(o) + s) : s > J(t) ? (o = t + 1, a = s - J(t)) : (o = t, a = s), {
                    year: o,
                    dayOfYear: a
                }
            }

            function kt(t, e, n) {
                var r, i, o = xt(t.year(), e, n),
                    a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                return a < 1 ? (i = t.year() - 1, r = a + St(i, e, n)) : a > St(t.year(), e, n) ? (r = a - St(t.year(), e, n), i = t.year() + 1) : (i = t.year(), r = a), {
                    week: r,
                    year: i
                }
            }

            function St(t, e, n) {
                var r = xt(t, e, n),
                    i = xt(t + 1, e, n);
                return (J(t) - r + i) / 7
            }

            function Ct(t) {
                return kt(t, this._week.dow, this._week.doy).week
            }

            function Mt() {
                return this._week.dow
            }

            function Tt() {
                return this._week.doy
            }

            function Dt(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function Pt(t) {
                var e = kt(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function Ot(t, e) {
                return "string" !== typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" === typeof t ? t : null) : parseInt(t, 10)
            }

            function Et(t, e) {
                return "string" === typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
            }

            function At(t, e) {
                return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }

            function It(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }

            function Rt(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }

            function Ft(t, e, n) {
                var r, i, o, a = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = f([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
                return n ? "dddd" === e ? (i = mi.call(this._weekdaysParse, a), -1 !== i ? i : null) : "ddd" === e ? (i = mi.call(this._shortWeekdaysParse, a), -1 !== i ? i : null) : (i = mi.call(this._minWeekdaysParse, a), -1 !== i ? i : null) : "dddd" === e ? -1 !== (i = mi.call(this._weekdaysParse, a)) ? i : -1 !== (i = mi.call(this._shortWeekdaysParse, a)) ? i : (i = mi.call(this._minWeekdaysParse, a), -1 !== i ? i : null) : "ddd" === e ? -1 !== (i = mi.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = mi.call(this._weekdaysParse, a)) ? i : (i = mi.call(this._minWeekdaysParse, a), -1 !== i ? i : null) : -1 !== (i = mi.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = mi.call(this._weekdaysParse, a)) ? i : (i = mi.call(this._shortWeekdaysParse, a), -1 !== i ? i : null)
            }

            function Nt(t, e, n) {
                var r, i, o;
                if (this._weekdaysParseExact) return Ft.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                    if (i = f([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r;
                    if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r;
                    if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r;
                    if (!n && this._weekdaysParse[r].test(t)) return r
                }
            }

            function Lt(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = Ot(t, this.localeData()), this.add(t - e, "d")) : e
            }

            function zt(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }

            function jt(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                    var e = Et(t, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }

            function Wt(t) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Yt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Di), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function Bt(t) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Yt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Pi), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function Ut(t) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Yt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Oi), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function Yt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, r, i, o, a = [],
                    u = [],
                    l = [],
                    s = [];
                for (e = 0; e < 7; e++) n = f([2e3, 1]).day(e), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), a.push(r), u.push(i), l.push(o), s.push(r), s.push(i), s.push(o);
                for (a.sort(t), u.sort(t), l.sort(t), s.sort(t), e = 0; e < 7; e++) u[e] = $(u[e]), l[e] = $(l[e]), s[e] = $(s[e]);
                this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
            }

            function Ht() {
                return this.hours() % 12 || 12
            }

            function Vt() {
                return this.hours() || 24
            }

            function Gt(t, e) {
                B(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function qt(t, e) {
                return e._meridiemParse
            }

            function Kt(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }

            function $t(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function Zt(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function Qt(t) {
                for (var e, n, r, i, o = 0; o < t.length;) {
                    for (i = Zt(t[o]).split("-"), e = i.length, n = Zt(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                        if (r = Xt(i.slice(0, e).join("-"))) return r;
                        if (n && n.length >= e && x(i, n, !0) >= e - 1) break;
                        e--
                    }
                    o++
                }
                return Ei
            }

            function Xt(e) {
                var n = null;
                if (!Fi[e] && "undefined" !== typeof t && t && t.exports) try {
                    n = Ei._abbr;
                    ! function() {
                        var t = new Error('Cannot find module "./locale"');
                        throw t.code = "MODULE_NOT_FOUND", t
                    }(), Jt(n)
                } catch (t) {}
                return Fi[e]
            }

            function Jt(t, e) {
                var n;
                return t && (n = o(e) ? ne(t) : te(t, e), n ? Ei = n : "undefined" !== typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Ei._abbr
            }

            function te(t, e) {
                if (null !== e) {
                    var n, r = Ri;
                    if (e.abbr = t, null != Fi[t]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = Fi[t]._config;
                    else if (null != e.parentLocale)
                        if (null != Fi[e.parentLocale]) r = Fi[e.parentLocale]._config;
                        else {
                            if (null == (n = Xt(e.parentLocale))) return Ni[e.parentLocale] || (Ni[e.parentLocale] = []), Ni[e.parentLocale].push({
                                name: t,
                                config: e
                            }), null;
                            r = n._config
                        }
                    return Fi[t] = new D(T(r, e)), Ni[t] && Ni[t].forEach(function(t) {
                        te(t.name, t.config)
                    }), Jt(t), Fi[t]
                }
                return delete Fi[t], null
            }

            function ee(t, e) {
                if (null != e) {
                    var n, r, i = Ri;
                    r = Xt(t), null != r && (i = r._config), e = T(i, e), n = new D(e), n.parentLocale = Fi[t], Fi[t] = n, Jt(t)
                } else null != Fi[t] && (null != Fi[t].parentLocale ? Fi[t] = Fi[t].parentLocale : null != Fi[t] && delete Fi[t]);
                return Fi[t]
            }

            function ne(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ei;
                if (!n(t)) {
                    if (e = Xt(t)) return e;
                    t = [t]
                }
                return Qt(t)
            }

            function re() {
                return Ar(Fi)
            }

            function ie(t) {
                var e, n = t._a;
                return n && -2 === h(t).overflow && (e = n[si] < 0 || n[si] > 11 ? si : n[ci] < 1 || n[ci] > lt(n[li], n[si]) ? ci : n[fi] < 0 || n[fi] > 24 || 24 === n[fi] && (0 !== n[di] || 0 !== n[hi] || 0 !== n[pi]) ? fi : n[di] < 0 || n[di] > 59 ? di : n[hi] < 0 || n[hi] > 59 ? hi : n[pi] < 0 || n[pi] > 999 ? pi : -1, h(t)._overflowDayOfYear && (e < li || e > ci) && (e = ci), h(t)._overflowWeeks && -1 === e && (e = gi), h(t)._overflowWeekday && -1 === e && (e = vi), h(t).overflow = e), t
            }

            function oe(t, e, n) {
                return null != t ? t : null != e ? e : n
            }

            function ae(t) {
                var n = new Date(e.now());
                return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
            }

            function ue(t) {
                var e, n, r, i, o, a = [];
                if (!t._d) {
                    for (r = ae(t), t._w && null == t._a[ci] && null == t._a[si] && le(t), null != t._dayOfYear && (o = oe(t._a[li], r[li]), (t._dayOfYear > J(o) || 0 === t._dayOfYear) && (h(t)._overflowDayOfYear = !0), n = _t(o, 0, t._dayOfYear), t._a[si] = n.getUTCMonth(), t._a[ci] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = r[e];
                    for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[fi] && 0 === t._a[di] && 0 === t._a[hi] && 0 === t._a[pi] && (t._nextDay = !0, t._a[fi] = 0), t._d = (t._useUTC ? _t : bt).apply(null, a), i = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[fi] = 24), t._w && "undefined" !== typeof t._w.d && t._w.d !== i && (h(t).weekdayMismatch = !0)
                }
            }

            function le(t) {
                var e, n, r, i, o, a, u, l;
                if (e = t._w, null != e.GG || null != e.W || null != e.E) o = 1, a = 4, n = oe(e.GG, t._a[li], kt(Ce(), 1, 4).year), r = oe(e.W, 1), ((i = oe(e.E, 1)) < 1 || i > 7) && (l = !0);
                else {
                    o = t._locale._week.dow, a = t._locale._week.doy;
                    var s = kt(Ce(), o, a);
                    n = oe(e.gg, t._a[li], s.year), r = oe(e.w, s.week), null != e.d ? ((i = e.d) < 0 || i > 6) && (l = !0) : null != e.e ? (i = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : i = o
                }
                r < 1 || r > St(n, o, a) ? h(t)._overflowWeeks = !0 : null != l ? h(t)._overflowWeekday = !0 : (u = wt(n, r, i, o, a), t._a[li] = u.year, t._dayOfYear = u.dayOfYear)
            }

            function se(t) {
                var e, n, r, i, o, a, u = t._i,
                    l = Li.exec(u) || zi.exec(u);
                if (l) {
                    for (h(t).iso = !0, e = 0, n = Wi.length; e < n; e++)
                        if (Wi[e][1].exec(l[1])) {
                            i = Wi[e][0], r = !1 !== Wi[e][2];
                            break
                        }
                    if (null == i) return void(t._isValid = !1);
                    if (l[3]) {
                        for (e = 0, n = Bi.length; e < n; e++)
                            if (Bi[e][1].exec(l[3])) {
                                o = (l[2] || " ") + Bi[e][0];
                                break
                            }
                        if (null == o) return void(t._isValid = !1)
                    }
                    if (!r && null != o) return void(t._isValid = !1);
                    if (l[4]) {
                        if (!ji.exec(l[4])) return void(t._isValid = !1);
                        a = "Z"
                    }
                    t._f = i + (o || "") + (a || ""), me(t)
                } else t._isValid = !1
            }

            function ce(t, e, n, r, i, o) {
                var a = [fe(t), xi.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
                return o && a.push(parseInt(o, 10)), a
            }

            function fe(t) {
                var e = parseInt(t, 10);
                return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
            }

            function de(t) {
                return t.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }

            function he(t, e, n) {
                if (t) {
                    if (Mi.indexOf(t) !== new Date(e[0], e[1], e[2]).getDay()) return h(n).weekdayMismatch = !0, n._isValid = !1, !1
                }
                return !0
            }

            function pe(t, e, n) {
                if (t) return Hi[t];
                if (e) return 0;
                var r = parseInt(n, 10),
                    i = r % 100;
                return (r - i) / 100 * 60 + i
            }

            function ge(t) {
                var e = Yi.exec(de(t._i));
                if (e) {
                    var n = ce(e[4], e[3], e[2], e[5], e[6], e[7]);
                    if (!he(e[1], n, t)) return;
                    t._a = n, t._tzm = pe(e[8], e[9], e[10]), t._d = _t.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), h(t).rfc2822 = !0
                } else t._isValid = !1
            }

            function ve(t) {
                var n = Ui.exec(t._i);
                if (null !== n) return void(t._d = new Date(+n[1]));
                se(t), !1 === t._isValid && (delete t._isValid, ge(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))
            }

            function me(t) {
                if (t._f === e.ISO_8601) return void se(t);
                if (t._f === e.RFC_2822) return void ge(t);
                t._a = [], h(t).empty = !0;
                var n, r, i, o, a, u = "" + t._i,
                    l = u.length,
                    s = 0;
                for (i = V(t._f, t._locale).match(jr) || [], n = 0; n < i.length; n++) o = i[n], r = (u.match(q(o, t)) || [])[0], r && (a = u.substr(0, u.indexOf(r)), a.length > 0 && h(t).unusedInput.push(a), u = u.slice(u.indexOf(r) + r.length), s += r.length), Ur[o] ? (r ? h(t).empty = !1 : h(t).unusedTokens.push(o), X(o, r, t)) : t._strict && !r && h(t).unusedTokens.push(o);
                h(t).charsLeftOver = l - s, u.length > 0 && h(t).unusedInput.push(u), t._a[fi] <= 12 && !0 === h(t).bigHour && t._a[fi] > 0 && (h(t).bigHour = void 0), h(t).parsedDateParts = t._a.slice(0), h(t).meridiem = t._meridiem, t._a[fi] = ye(t._locale, t._a[fi], t._meridiem), ue(t), ie(t)
            }

            function ye(t, e, n) {
                var r;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (r = t.isPM(n), r && e < 12 && (e += 12), r || 12 !== e || (e = 0), e) : e
            }

            function be(t) {
                var e, n, r, i, o;
                if (0 === t._f.length) return h(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (i = 0; i < t._f.length; i++) o = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[i], me(e), p(e) && (o += h(e).charsLeftOver, o += 10 * h(e).unusedTokens.length, h(e).score = o, (null == r || o < r) && (r = o, n = e));
                c(t, n || e)
            }

            function _e(t) {
                if (!t._d) {
                    var e = L(t._i);
                    t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                        return t && parseInt(t, 10)
                    }), ue(t)
                }
            }

            function xe(t) {
                var e = new m(ie(we(t)));
                return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
            }

            function we(t) {
                var e = t._i,
                    r = t._f;
                return t._locale = t._locale || ne(t._l), null === e || void 0 === r && "" === e ? g({
                    nullInput: !0
                }) : ("string" === typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new m(ie(e)) : (u(e) ? t._d = e : n(r) ? be(t) : r ? me(t) : ke(t), p(t) || (t._d = null), t))
            }

            function ke(t) {
                var i = t._i;
                o(i) ? t._d = new Date(e.now()) : u(i) ? t._d = new Date(i.valueOf()) : "string" === typeof i ? ve(t) : n(i) ? (t._a = l(i.slice(0), function(t) {
                    return parseInt(t, 10)
                }), ue(t)) : r(i) ? _e(t) : a(i) ? t._d = new Date(i) : e.createFromInputFallback(t)
            }

            function Se(t, e, o, a, u) {
                var l = {};
                return !0 !== o && !1 !== o || (a = o, o = void 0), (r(t) && i(t) || n(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = u, l._l = o, l._i = t, l._f = e, l._strict = a, xe(l)
            }

            function Ce(t, e, n, r) {
                return Se(t, e, n, r, !1)
            }

            function Me(t, e) {
                var r, i;
                if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return Ce();
                for (r = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](r) || (r = e[i]);
                return r
            }

            function Te() {
                return Me("isBefore", [].slice.call(arguments, 0))
            }

            function De() {
                return Me("isAfter", [].slice.call(arguments, 0))
            }

            function Pe(t) {
                for (var e in t)
                    if (-1 === mi.call(Ki, e) || null != t[e] && isNaN(t[e])) return !1;
                for (var n = !1, r = 0; r < Ki.length; ++r)
                    if (t[Ki[r]]) {
                        if (n) return !1;
                        parseFloat(t[Ki[r]]) !== _(t[Ki[r]]) && (n = !0)
                    }
                return !0
            }

            function Oe() {
                return this._isValid
            }

            function Ee() {
                return Ze(NaN)
            }

            function Ae(t) {
                var e = L(t),
                    n = e.year || 0,
                    r = e.quarter || 0,
                    i = e.month || 0,
                    o = e.week || 0,
                    a = e.day || 0,
                    u = e.hour || 0,
                    l = e.minute || 0,
                    s = e.second || 0,
                    c = e.millisecond || 0;
                this._isValid = Pe(e), this._milliseconds = +c + 1e3 * s + 6e4 * l + 1e3 * u * 60 * 60, this._days = +a + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = ne(), this._bubble()
            }

            function Ie(t) {
                return t instanceof Ae
            }

            function Re(t) {
                return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
            }

            function Fe(t, e) {
                B(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        n = "+";
                    return t < 0 && (t = -t, n = "-"), n + W(~~(t / 60), 2) + e + W(~~t % 60, 2)
                })
            }

            function Ne(t, e) {
                var n = (e || "").match(t);
                if (null === n) return null;
                var r = n[n.length - 1] || [],
                    i = (r + "").match($i) || ["-", 0, 0],
                    o = 60 * i[1] + _(i[2]);
                return 0 === o ? 0 : "+" === i[0] ? o : -o
            }

            function Le(t, n) {
                var r, i;
                return n._isUTC ? (r = n.clone(), i = (y(t) || u(t) ? t.valueOf() : Ce(t).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + i), e.updateOffset(r, !1), r) : Ce(t).local()
            }

            function ze(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function je(t, n, r) {
                var i, o = this._offset || 0;
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                    if ("string" === typeof t) {
                        if (null === (t = Ne(ri, t))) return this
                    } else Math.abs(t) < 16 && !r && (t *= 60);
                    return !this._isUTC && n && (i = ze(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), o !== t && (!n || this._changeInProgress ? en(this, Ze(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? o : ze(this)
            }

            function We(t, e) {
                return null != t ? ("string" !== typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }

            function Be(t) {
                return this.utcOffset(0, t)
            }

            function Ue(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(ze(this), "m")), this
            }

            function Ye() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" === typeof this._i) {
                    var t = Ne(ni, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                }
                return this
            }

            function He(t) {
                return !!this.isValid() && (t = t ? Ce(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
            }

            function Ve() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Ge() {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (v(t, this), t = we(t), t._a) {
                    var e = t._isUTC ? f(t._a) : Ce(t._a);
                    this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function qe() {
                return !!this.isValid() && !this._isUTC
            }

            function Ke() {
                return !!this.isValid() && this._isUTC
            }

            function $e() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function Ze(t, e) {
                var n, r, i, o = t,
                    u = null;
                return Ie(t) ? o = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : a(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (u = Zi.exec(t)) ? (n = "-" === u[1] ? -1 : 1, o = {
                    y: 0,
                    d: _(u[ci]) * n,
                    h: _(u[fi]) * n,
                    m: _(u[di]) * n,
                    s: _(u[hi]) * n,
                    ms: _(Re(1e3 * u[pi])) * n
                }) : (u = Qi.exec(t)) ? (n = "-" === u[1] ? -1 : (u[1], 1), o = {
                    y: Qe(u[2], n),
                    M: Qe(u[3], n),
                    w: Qe(u[4], n),
                    d: Qe(u[5], n),
                    h: Qe(u[6], n),
                    m: Qe(u[7], n),
                    s: Qe(u[8], n)
                }) : null == o ? o = {} : "object" === typeof o && ("from" in o || "to" in o) && (i = Je(Ce(o.from), Ce(o.to)), o = {}, o.ms = i.milliseconds, o.M = i.months), r = new Ae(o), Ie(t) && s(t, "_locale") && (r._locale = t._locale), r
            }

            function Qe(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }

            function Xe(t, e) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
            }

            function Je(t, e) {
                var n;
                return t.isValid() && e.isValid() ? (e = Le(e, t), t.isBefore(e) ? n = Xe(t, e) : (n = Xe(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function tn(t, e) {
                return function(n, r) {
                    var i, o;
                    return null === r || isNaN(+r) || (S(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = r, r = o), n = "string" === typeof n ? +n : n, i = Ze(n, r), en(this, i, t), this
                }
            }

            function en(t, n, r, i) {
                var o = n._milliseconds,
                    a = Re(n._days),
                    u = Re(n._months);
                t.isValid() && (i = null == i || i, u && ht(t, rt(t, "Month") + u * r), a && it(t, "Date", rt(t, "Date") + a * r), o && t._d.setTime(t._d.valueOf() + o * r), i && e.updateOffset(t, a || u))
            }

            function nn(t, e) {
                var n = t.diff(e, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }

            function rn(t, n) {
                var r = t || Ce(),
                    i = Le(r, this).startOf("day"),
                    o = e.calendarFormat(this, i) || "sameElse",
                    a = n && (C(n[o]) ? n[o].call(this, r) : n[o]);
                return this.format(a || this.localeData().calendar(o, this, Ce(r)))
            }

            function on() {
                return new m(this)
            }

            function an(t, e) {
                var n = y(t) ? t : Ce(t);
                return !(!this.isValid() || !n.isValid()) && (e = N(o(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
            }

            function un(t, e) {
                var n = y(t) ? t : Ce(t);
                return !(!this.isValid() || !n.isValid()) && (e = N(o(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
            }

            function ln(t, e, n, r) {
                return r = r || "()", ("(" === r[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === r[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
            }

            function sn(t, e) {
                var n, r = y(t) ? t : Ce(t);
                return !(!this.isValid() || !r.isValid()) && (e = N(e || "millisecond"), "millisecond" === e ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
            }

            function cn(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }

            function fn(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }

            function dn(t, e, n) {
                var r, i, o;
                if (!this.isValid()) return NaN;
                if (r = Le(t, this), !r.isValid()) return NaN;
                switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), e = N(e)) {
                    case "year":
                        o = hn(this, r) / 12;
                        break;
                    case "month":
                        o = hn(this, r);
                        break;
                    case "quarter":
                        o = hn(this, r) / 3;
                        break;
                    case "second":
                        o = (this - r) / 1e3;
                        break;
                    case "minute":
                        o = (this - r) / 6e4;
                        break;
                    case "hour":
                        o = (this - r) / 36e5;
                        break;
                    case "day":
                        o = (this - r - i) / 864e5;
                        break;
                    case "week":
                        o = (this - r - i) / 6048e5;
                        break;
                    default:
                        o = this - r
                }
                return n ? o : b(o)
            }

            function hn(t, e) {
                var n, r, i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    o = t.clone().add(i, "months");
                return e - o < 0 ? (n = t.clone().add(i - 1, "months"), r = (e - o) / (o - n)) : (n = t.clone().add(i + 1, "months"), r = (e - o) / (n - o)), -(i + r) || 0
            }

            function pn() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function gn(t) {
                if (!this.isValid()) return null;
                var e = !0 !== t,
                    n = e ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? H(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", H(n, "Z")) : H(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }

            function vn() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var t = "moment",
                    e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                var n = "[" + t + '("]',
                    r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    i = e + '[")]';
                return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i)
            }

            function mn(t) {
                t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
                var n = H(this, t);
                return this.localeData().postformat(n)
            }

            function yn(t, e) {
                return this.isValid() && (y(t) && t.isValid() || Ce(t).isValid()) ? Ze({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function bn(t) {
                return this.from(Ce(), t)
            }

            function _n(t, e) {
                return this.isValid() && (y(t) && t.isValid() || Ce(t).isValid()) ? Ze({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function xn(t) {
                return this.to(Ce(), t)
            }

            function wn(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (e = ne(t), null != e && (this._locale = e), this)
            }

            function kn() {
                return this._locale
            }

            function Sn(t) {
                switch (t = N(t)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function Cn(t) {
                return void 0 === (t = N(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }

            function Mn() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function Tn() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function Dn() {
                return new Date(this.valueOf())
            }

            function Pn() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }

            function On() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }

            function En() {
                return this.isValid() ? this.toISOString() : null
            }

            function An() {
                return p(this)
            }

            function In() {
                return c({}, h(this))
            }

            function Rn() {
                return h(this).overflow
            }

            function Fn() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }

            function Nn(t, e) {
                B(0, [t, t.length], 0, e)
            }

            function Ln(t) {
                return Bn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function zn(t) {
                return Bn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function jn() {
                return St(this.year(), 1, 4)
            }

            function Wn() {
                var t = this.localeData()._week;
                return St(this.year(), t.dow, t.doy)
            }

            function Bn(t, e, n, r, i) {
                var o;
                return null == t ? kt(this, r, i).year : (o = St(t, r, i), e > o && (e = o), Un.call(this, t, e, n, r, i))
            }

            function Un(t, e, n, r, i) {
                var o = wt(t, e, n, r, i),
                    a = _t(o.year, 0, o.dayOfYear);
                return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
            }

            function Yn(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }

            function Hn(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }

            function Vn(t, e) {
                e[pi] = _(1e3 * ("0." + t))
            }

            function Gn() {
                return this._isUTC ? "UTC" : ""
            }

            function qn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Kn(t) {
                return Ce(1e3 * t)
            }

            function $n() {
                return Ce.apply(null, arguments).parseZone()
            }

            function Zn(t) {
                return t
            }

            function Qn(t, e, n, r) {
                var i = ne(),
                    o = f().set(r, e);
                return i[n](o, t)
            }

            function Xn(t, e, n) {
                if (a(t) && (e = t, t = void 0), t = t || "", null != e) return Qn(t, e, n, "month");
                var r, i = [];
                for (r = 0; r < 12; r++) i[r] = Qn(t, r, n, "month");
                return i
            }

            function Jn(t, e, n, r) {
                "boolean" === typeof t ? (a(e) && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, a(e) && (n = e, e = void 0), e = e || "");
                var i = ne(),
                    o = t ? i._week.dow : 0;
                if (null != n) return Qn(e, (n + o) % 7, r, "day");
                var u, l = [];
                for (u = 0; u < 7; u++) l[u] = Qn(e, (u + o) % 7, r, "day");
                return l
            }

            function tr(t, e) {
                return Xn(t, e, "months")
            }

            function er(t, e) {
                return Xn(t, e, "monthsShort")
            }

            function nr(t, e, n) {
                return Jn(t, e, n, "weekdays")
            }

            function rr(t, e, n) {
                return Jn(t, e, n, "weekdaysShort")
            }

            function ir(t, e, n) {
                return Jn(t, e, n, "weekdaysMin")
            }

            function or() {
                var t = this._data;
                return this._milliseconds = lo(this._milliseconds), this._days = lo(this._days), this._months = lo(this._months), t.milliseconds = lo(t.milliseconds), t.seconds = lo(t.seconds), t.minutes = lo(t.minutes), t.hours = lo(t.hours), t.months = lo(t.months), t.years = lo(t.years), this
            }

            function ar(t, e, n, r) {
                var i = Ze(e, n);
                return t._milliseconds += r * i._milliseconds, t._days += r * i._days, t._months += r * i._months, t._bubble()
            }

            function ur(t, e) {
                return ar(this, t, e, 1)
            }

            function lr(t, e) {
                return ar(this, t, e, -1)
            }

            function sr(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }

            function cr() {
                var t, e, n, r, i, o = this._milliseconds,
                    a = this._days,
                    u = this._months,
                    l = this._data;
                return o >= 0 && a >= 0 && u >= 0 || o <= 0 && a <= 0 && u <= 0 || (o += 864e5 * sr(dr(u) + a), a = 0, u = 0), l.milliseconds = o % 1e3, t = b(o / 1e3), l.seconds = t % 60, e = b(t / 60), l.minutes = e % 60, n = b(e / 60), l.hours = n % 24, a += b(n / 24), i = b(fr(a)), u += i, a -= sr(dr(i)), r = b(u / 12), u %= 12, l.days = a, l.months = u, l.years = r, this
            }

            function fr(t) {
                return 4800 * t / 146097
            }

            function dr(t) {
                return 146097 * t / 4800
            }

            function hr(t) {
                if (!this.isValid()) return NaN;
                var e, n, r = this._milliseconds;
                if ("month" === (t = N(t)) || "year" === t) return e = this._days + r / 864e5, n = this._months + fr(e), "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(dr(this._months)), t) {
                    case "week":
                        return e / 7 + r / 6048e5;
                    case "day":
                        return e + r / 864e5;
                    case "hour":
                        return 24 * e + r / 36e5;
                    case "minute":
                        return 1440 * e + r / 6e4;
                    case "second":
                        return 86400 * e + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + r;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }

            function pr() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12) : NaN
            }

            function gr(t) {
                return function() {
                    return this.as(t)
                }
            }

            function vr() {
                return Ze(this)
            }

            function mr(t) {
                return t = N(t), this.isValid() ? this[t + "s"]() : NaN
            }

            function yr(t) {
                return function() {
                    return this.isValid() ? this._data[t] : NaN
                }
            }

            function br() {
                return b(this.days() / 7)
            }

            function _r(t, e, n, r, i) {
                return i.relativeTime(e || 1, !!n, t, r)
            }

            function xr(t, e, n) {
                var r = Ze(t).abs(),
                    i = Co(r.as("s")),
                    o = Co(r.as("m")),
                    a = Co(r.as("h")),
                    u = Co(r.as("d")),
                    l = Co(r.as("M")),
                    s = Co(r.as("y")),
                    c = i <= Mo.ss && ["s", i] || i < Mo.s && ["ss", i] || o <= 1 && ["m"] || o < Mo.m && ["mm", o] || a <= 1 && ["h"] || a < Mo.h && ["hh", a] || u <= 1 && ["d"] || u < Mo.d && ["dd", u] || l <= 1 && ["M"] || l < Mo.M && ["MM", l] || s <= 1 && ["y"] || ["yy", s];
                return c[2] = e, c[3] = +t > 0, c[4] = n, _r.apply(null, c)
            }

            function wr(t) {
                return void 0 === t ? Co : "function" === typeof t && (Co = t, !0)
            }

            function kr(t, e) {
                return void 0 !== Mo[t] && (void 0 === e ? Mo[t] : (Mo[t] = e, "s" === t && (Mo.ss = e - 1), !0))
            }

            function Sr(t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e = this.localeData(),
                    n = xr(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }

            function Cr(t) {
                return (t > 0) - (t < 0) || +t
            }

            function Mr() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t, e, n, r = To(this._milliseconds) / 1e3,
                    i = To(this._days),
                    o = To(this._months);
                t = b(r / 60), e = b(t / 60), r %= 60, t %= 60, n = b(o / 12), o %= 12;
                var a = n,
                    u = o,
                    l = i,
                    s = e,
                    c = t,
                    f = r ? r.toFixed(3).replace(/\.?0+$/, "") : "",
                    d = this.asSeconds();
                if (!d) return "P0D";
                var h = d < 0 ? "-" : "",
                    p = Cr(this._months) !== Cr(d) ? "-" : "",
                    g = Cr(this._days) !== Cr(d) ? "-" : "",
                    v = Cr(this._milliseconds) !== Cr(d) ? "-" : "";
                return h + "P" + (a ? p + a + "Y" : "") + (u ? p + u + "M" : "") + (l ? g + l + "D" : "") + (s || c || f ? "T" : "") + (s ? v + s + "H" : "") + (c ? v + c + "M" : "") + (f ? v + f + "S" : "")
            }
            var Tr, Dr;
            Dr = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), n = e.length >>> 0, r = 0; r < n; r++)
                    if (r in e && t.call(this, e[r], r, e)) return !0;
                return !1
            };
            var Pr = e.momentProperties = [],
                Or = !1,
                Er = {};
            e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
            var Ar;
            Ar = Object.keys ? Object.keys : function(t) {
                var e, n = [];
                for (e in t) s(t, e) && n.push(e);
                return n
            };
            var Ir = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                Rr = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                Fr = /\d{1,2}/,
                Nr = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Lr = {},
                zr = {},
                jr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                Wr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Br = {},
                Ur = {},
                Yr = /\d/,
                Hr = /\d\d/,
                Vr = /\d{3}/,
                Gr = /\d{4}/,
                qr = /[+-]?\d{6}/,
                Kr = /\d\d?/,
                $r = /\d\d\d\d?/,
                Zr = /\d\d\d\d\d\d?/,
                Qr = /\d{1,3}/,
                Xr = /\d{1,4}/,
                Jr = /[+-]?\d{1,6}/,
                ti = /\d+/,
                ei = /[+-]?\d+/,
                ni = /Z|[+-]\d\d:?\d\d/gi,
                ri = /Z|[+-]\d\d(?::?\d\d)?/gi,
                ii = /[+-]?\d+(\.\d{1,3})?/,
                oi = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                ai = {},
                ui = {},
                li = 0,
                si = 1,
                ci = 2,
                fi = 3,
                di = 4,
                hi = 5,
                pi = 6,
                gi = 7,
                vi = 8;
            B("Y", 0, 0, function() {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), B(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), z("year", 1), G("Y", ei), G("YY", Kr, Hr), G("YYYY", Xr, Gr), G("YYYYY", Jr, qr), G("YYYYYY", Jr, qr), Z(["YYYYY", "YYYYYY"], li), Z("YYYY", function(t, n) {
                n[li] = 2 === t.length ? e.parseTwoDigitYear(t) : _(t)
            }), Z("YY", function(t, n) {
                n[li] = e.parseTwoDigitYear(t)
            }), Z("Y", function(t, e) {
                e[li] = parseInt(t, 10)
            }), e.parseTwoDigitYear = function(t) {
                return _(t) + (_(t) > 68 ? 1900 : 2e3)
            };
            var mi, yi = nt("FullYear", !0);
            mi = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, B("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), B("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }), B("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }), F("month", "M"), z("month", 8), G("M", Kr), G("MM", Kr, Hr), G("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }), G("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }), Z(["M", "MM"], function(t, e) {
                e[si] = _(t) - 1
            }), Z(["MMM", "MMMM"], function(t, e, n, r) {
                var i = n._locale.monthsParse(t, r, n._strict);
                null != i ? e[si] = i : h(n).invalidMonth = t
            });
            var bi = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                _i = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                xi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                wi = oi,
                ki = oi;
            B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), z("week", 5), z("isoWeek", 5), G("w", Kr), G("ww", Kr, Hr), G("W", Kr), G("WW", Kr, Hr), Q(["w", "ww", "W", "WW"], function(t, e, n, r) {
                e[r.substr(0, 1)] = _(t)
            });
            var Si = {
                dow: 0,
                doy: 6
            };
            B("d", 0, "do", "day"), B("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }), B("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }), B("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), z("day", 11), z("weekday", 11), z("isoWeekday", 11), G("d", Kr), G("e", Kr), G("E", Kr), G("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }), G("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }), G("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }), Q(["dd", "ddd", "dddd"], function(t, e, n, r) {
                var i = n._locale.weekdaysParse(t, r, n._strict);
                null != i ? e.d = i : h(n).invalidWeekday = t
            }), Q(["d", "e", "E"], function(t, e, n, r) {
                e[r] = _(t)
            });
            var Ci = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Mi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ti = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Di = oi,
                Pi = oi,
                Oi = oi;
            B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, Ht), B("k", ["kk", 2], 0, Vt), B("hmm", 0, 0, function() {
                return "" + Ht.apply(this) + W(this.minutes(), 2)
            }), B("hmmss", 0, 0, function() {
                return "" + Ht.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2)
            }), B("Hmm", 0, 0, function() {
                return "" + this.hours() + W(this.minutes(), 2)
            }), B("Hmmss", 0, 0, function() {
                return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2)
            }), Gt("a", !0), Gt("A", !1), F("hour", "h"), z("hour", 13), G("a", qt), G("A", qt), G("H", Kr), G("h", Kr), G("k", Kr), G("HH", Kr, Hr), G("hh", Kr, Hr), G("kk", Kr, Hr), G("hmm", $r), G("hmmss", Zr), G("Hmm", $r), G("Hmmss", Zr), Z(["H", "HH"], fi), Z(["k", "kk"], function(t, e, n) {
                var r = _(t);
                e[fi] = 24 === r ? 0 : r
            }), Z(["a", "A"], function(t, e, n) {
                n._isPm = n._locale.isPM(t), n._meridiem = t
            }), Z(["h", "hh"], function(t, e, n) {
                e[fi] = _(t), h(n).bigHour = !0
            }), Z("hmm", function(t, e, n) {
                var r = t.length - 2;
                e[fi] = _(t.substr(0, r)), e[di] = _(t.substr(r)), h(n).bigHour = !0
            }), Z("hmmss", function(t, e, n) {
                var r = t.length - 4,
                    i = t.length - 2;
                e[fi] = _(t.substr(0, r)), e[di] = _(t.substr(r, 2)), e[hi] = _(t.substr(i)), h(n).bigHour = !0
            }), Z("Hmm", function(t, e, n) {
                var r = t.length - 2;
                e[fi] = _(t.substr(0, r)), e[di] = _(t.substr(r))
            }), Z("Hmmss", function(t, e, n) {
                var r = t.length - 4,
                    i = t.length - 2;
                e[fi] = _(t.substr(0, r)), e[di] = _(t.substr(r, 2)), e[hi] = _(t.substr(i))
            });
            var Ei, Ai = /[ap]\.?m?\.?/i,
                Ii = nt("Hours", !0),
                Ri = {
                    calendar: Ir,
                    longDateFormat: Rr,
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: Fr,
                    relativeTime: Nr,
                    months: _i,
                    monthsShort: xi,
                    week: Si,
                    weekdays: Ci,
                    weekdaysMin: Ti,
                    weekdaysShort: Mi,
                    meridiemParse: Ai
                },
                Fi = {},
                Ni = {},
                Li = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                zi = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ji = /Z|[+-]\d\d(?::?\d\d)?/,
                Wi = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                Bi = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Ui = /^\/?Date\((\-?\d+)/i,
                Yi = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Hi = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
            e.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), e.ISO_8601 = function() {}, e.RFC_2822 = function() {};
            var Vi = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = Ce.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : g()
                }),
                Gi = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = Ce.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t > this ? this : t : g()
                }),
                qi = function() {
                    return Date.now ? Date.now() : +new Date
                },
                Ki = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            Fe("Z", ":"), Fe("ZZ", ""), G("Z", ri), G("ZZ", ri), Z(["Z", "ZZ"], function(t, e, n) {
                n._useUTC = !0, n._tzm = Ne(ri, t)
            });
            var $i = /([\+\-]|\d\d)/gi;
            e.updateOffset = function() {};
            var Zi = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Qi = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            Ze.fn = Ae.prototype, Ze.invalid = Ee;
            var Xi = tn(1, "add"),
                Ji = tn(-1, "subtract");
            e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var to = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });
            B(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), B(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), Nn("gggg", "weekYear"), Nn("ggggg", "weekYear"), Nn("GGGG", "isoWeekYear"), Nn("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), z("weekYear", 1), z("isoWeekYear", 1), G("G", ei), G("g", ei), G("GG", Kr, Hr), G("gg", Kr, Hr), G("GGGG", Xr, Gr), G("gggg", Xr, Gr), G("GGGGG", Jr, qr), G("ggggg", Jr, qr), Q(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, r) {
                e[r.substr(0, 2)] = _(t)
            }), Q(["gg", "GG"], function(t, n, r, i) {
                n[i] = e.parseTwoDigitYear(t)
            }), B("Q", 0, "Qo", "quarter"), F("quarter", "Q"), z("quarter", 7), G("Q", Yr), Z("Q", function(t, e) {
                e[si] = 3 * (_(t) - 1)
            }), B("D", ["DD", 2], "Do", "date"), F("date", "D"), z("date", 9), G("D", Kr), G("DD", Kr, Hr), G("Do", function(t, e) {
                return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
            }), Z(["D", "DD"], ci), Z("Do", function(t, e) {
                e[ci] = _(t.match(Kr)[0])
            });
            var eo = nt("Date", !0);
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), z("dayOfYear", 4), G("DDD", Qr), G("DDDD", Vr), Z(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = _(t)
            }), B("m", ["mm", 2], 0, "minute"), F("minute", "m"), z("minute", 14), G("m", Kr), G("mm", Kr, Hr), Z(["m", "mm"], di);
            var no = nt("Minutes", !1);
            B("s", ["ss", 2], 0, "second"), F("second", "s"), z("second", 15), G("s", Kr), G("ss", Kr, Hr), Z(["s", "ss"], hi);
            var ro = nt("Seconds", !1);
            B("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), B(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), B(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), B(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), B(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), B(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), B(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), F("millisecond", "ms"), z("millisecond", 16), G("S", Qr, Yr), G("SS", Qr, Hr), G("SSS", Qr, Vr);
            var io;
            for (io = "SSSS"; io.length <= 9; io += "S") G(io, ti);
            for (io = "S"; io.length <= 9; io += "S") Z(io, Vn);
            var oo = nt("Milliseconds", !1);
            B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
            var ao = m.prototype;
            ao.add = Xi, ao.calendar = rn, ao.clone = on, ao.diff = dn, ao.endOf = Cn, ao.format = mn, ao.from = yn, ao.fromNow = bn, ao.to = _n, ao.toNow = xn, ao.get = ot, ao.invalidAt = Rn, ao.isAfter = an, ao.isBefore = un, ao.isBetween = ln, ao.isSame = sn, ao.isSameOrAfter = cn, ao.isSameOrBefore = fn, ao.isValid = An, ao.lang = to, ao.locale = wn, ao.localeData = kn, ao.max = Gi, ao.min = Vi, ao.parsingFlags = In, ao.set = at, ao.startOf = Sn, ao.subtract = Ji, ao.toArray = Pn, ao.toObject = On, ao.toDate = Dn, ao.toISOString = gn, ao.inspect = vn, ao.toJSON = En, ao.toString = pn, ao.unix = Tn, ao.valueOf = Mn, ao.creationData = Fn, ao.year = yi, ao.isLeapYear = et, ao.weekYear = Ln, ao.isoWeekYear = zn, ao.quarter = ao.quarters = Yn, ao.month = pt, ao.daysInMonth = gt, ao.week = ao.weeks = Dt, ao.isoWeek = ao.isoWeeks = Pt, ao.weeksInYear = Wn, ao.isoWeeksInYear = jn, ao.date = eo, ao.day = ao.days = Lt, ao.weekday = zt, ao.isoWeekday = jt, ao.dayOfYear = Hn, ao.hour = ao.hours = Ii, ao.minute = ao.minutes = no, ao.second = ao.seconds = ro, ao.millisecond = ao.milliseconds = oo, ao.utcOffset = je, ao.utc = Be, ao.local = Ue, ao.parseZone = Ye, ao.hasAlignedHourOffset = He, ao.isDST = Ve, ao.isLocal = qe, ao.isUtcOffset = Ke, ao.isUtc = $e, ao.isUTC = $e, ao.zoneAbbr = Gn, ao.zoneName = qn, ao.dates = k("dates accessor is deprecated. Use date instead.", eo), ao.months = k("months accessor is deprecated. Use month instead", pt), ao.years = k("years accessor is deprecated. Use year instead", yi), ao.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", We), ao.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ge);
            var uo = D.prototype;
            uo.calendar = P, uo.longDateFormat = O, uo.invalidDate = E, uo.ordinal = A, uo.preparse = Zn, uo.postformat = Zn, uo.relativeTime = I, uo.pastFuture = R, uo.set = M, uo.months = st, uo.monthsShort = ct, uo.monthsParse = dt, uo.monthsRegex = mt, uo.monthsShortRegex = vt, uo.week = Ct, uo.firstDayOfYear = Tt, uo.firstDayOfWeek = Mt, uo.weekdays = At, uo.weekdaysMin = Rt, uo.weekdaysShort = It, uo.weekdaysParse = Nt, uo.weekdaysRegex = Wt, uo.weekdaysShortRegex = Bt, uo.weekdaysMinRegex = Ut, uo.isPM = Kt, uo.meridiem = $t, Jt("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10;
                    return t + (1 === _(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
                }
            }), e.lang = k("moment.lang is deprecated. Use moment.locale instead.", Jt), e.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ne);
            var lo = Math.abs,
                so = gr("ms"),
                co = gr("s"),
                fo = gr("m"),
                ho = gr("h"),
                po = gr("d"),
                go = gr("w"),
                vo = gr("M"),
                mo = gr("y"),
                yo = yr("milliseconds"),
                bo = yr("seconds"),
                _o = yr("minutes"),
                xo = yr("hours"),
                wo = yr("days"),
                ko = yr("months"),
                So = yr("years"),
                Co = Math.round,
                Mo = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                To = Math.abs,
                Do = Ae.prototype;
            return Do.isValid = Oe, Do.abs = or, Do.add = ur, Do.subtract = lr, Do.as = hr, Do.asMilliseconds = so, Do.asSeconds = co, Do.asMinutes = fo, Do.asHours = ho, Do.asDays = po, Do.asWeeks = go, Do.asMonths = vo, Do.asYears = mo, Do.valueOf = pr, Do._bubble = cr, Do.clone = vr, Do.get = mr, Do.milliseconds = yo, Do.seconds = bo, Do.minutes = _o, Do.hours = xo, Do.days = wo, Do.weeks = br, Do.months = ko, Do.years = So, Do.humanize = Sr, Do.toISOString = Mr, Do.toString = Mr, Do.toJSON = Mr, Do.locale = wn, Do.localeData = kn, Do.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Mr), Do.lang = to, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), G("x", ei), G("X", ii), Z("X", function(t, e, n) {
                    n._d = new Date(1e3 * parseFloat(t, 10))
                }), Z("x", function(t, e, n) {
                    n._d = new Date(_(t))
                }), e.version = "2.22.2",
                function(t) {
                    Tr = t
                }(Ce), e.fn = ao, e.min = Te, e.max = De, e.now = qi, e.utc = f, e.unix = Kn, e.months = tr, e.isDate = u, e.locale = Jt, e.invalid = g, e.duration = Ze, e.isMoment = y, e.weekdays = nr, e.parseZone = $n, e.localeData = ne, e.isDuration = Ie, e.monthsShort = er, e.weekdaysMin = ir, e.defineLocale = te, e.updateLocale = ee, e.locales = re, e.weekdaysShort = rr, e.normalizeUnits = N, e.relativeTimeRounding = wr, e.relativeTimeThreshold = kr, e.calendarFormat = nn, e.prototype = ao, e.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "YYYY-[W]WW",
                    MONTH: "YYYY-MM"
                }, e
        })
    }).call(e, n(12)(t))
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__ = new i(t);
        this.size = e.size
    }
    var i = n(14),
        o = n(133),
        a = n(134),
        u = n(135),
        l = n(136),
        s = n(137);
    r.prototype.clear = o, r.prototype.delete = a, r.prototype.get = u, r.prototype.has = l, r.prototype.set = s, t.exports = r
}, function(t, e) {
    function n(t, e) {
        return t === e || t !== t && e !== e
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        if (!o(t)) return !1;
        var e = i(t);
        return e == u || e == l || e == a || e == s
    }
    var i = n(10),
        o = n(17),
        a = "[object AsyncFunction]",
        u = "[object Function]",
        l = "[object GeneratorFunction]",
        s = "[object Proxy]";
    t.exports = r
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(e, n(23))
}, function(t, e) {
    function n(t) {
        if (null != t) {
            try {
                return i.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
    var r = Function.prototype,
        i = r.toString;
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, r, s, c) {
        var f = n & u,
            d = t.length,
            h = e.length;
        if (d != h && !(f && h > d)) return !1;
        var p = c.get(t);
        if (p && c.get(e)) return p == e;
        var g = -1,
            v = !0,
            m = n & l ? new i : void 0;
        for (c.set(t, e), c.set(e, t); ++g < d;) {
            var y = t[g],
                b = e[g];
            if (r) var _ = f ? r(b, y, g, e, t, c) : r(y, b, g, t, e, c);
            if (void 0 !== _) {
                if (_) continue;
                v = !1;
                break
            }
            if (m) {
                if (!o(e, function(t, e) {
                        if (!a(m, e) && (y === t || s(y, t, n, r, c))) return m.push(e)
                    })) {
                    v = !1;
                    break
                }
            } else if (y !== b && !s(y, b, n, r, c)) {
                v = !1;
                break
            }
        }
        return c.delete(t), c.delete(e), v
    }
    var i = n(156),
        o = n(159),
        a = n(160),
        u = 1,
        l = 2;
    t.exports = r
}, function(t, e, n) {
    var r = n(174),
        i = n(11),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        l = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = l
}, function(t, e, n) {
    (function(t) {
        var r = n(3),
            i = n(175),
            o = "object" == typeof e && e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o,
            l = u ? r.Buffer : void 0,
            s = l ? l.isBuffer : void 0,
            c = s || i;
        t.exports = c
    }).call(e, n(12)(t))
}, function(t, e) {
    function n(t, e) {
        var n = typeof t;
        return !!(e = null == e ? r : e) && ("number" == n || "symbol" != n && i.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var r = 9007199254740991,
        i = /^(?:0|[1-9]\d*)$/;
    t.exports = n
}, function(t, e, n) {
    var r = n(176),
        i = n(177),
        o = n(178),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function(t, e, n) {
    function r(t) {
        return t === t && !i(t)
    }
    var i = n(17);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        return function(n) {
            return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
        }
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        e = i(e, t);
        for (var n = 0, r = e.length; null != t && n < r;) t = t[o(e[n++])];
        return n && n == r ? t : void 0
    }
    var i = n(54),
        o = n(22);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        return i(t) ? t : o(t, e) ? [t] : a(u(t))
    }
    var i = n(4),
        o = n(31),
        a = n(195),
        u = n(198);
    t.exports = r
}, function(t, e, n) {
    n(56), t.exports = n(61)
}, function(t, e, n) {
    "use strict";
    "undefined" === typeof Promise && (n(57).enable(), window.Promise = n(59)), n(60), Object.assign = n(24)
}, function(t, e, n) {
    "use strict";

    function r() {
        s = !1, u._47 = null, u._71 = null
    }

    function i(t) {
        function e(e) {
            (t.allRejections || a(f[e].error, t.whitelist || l)) && (f[e].displayId = c++, t.onUnhandled ? (f[e].logged = !0, t.onUnhandled(f[e].displayId, f[e].error)) : (f[e].logged = !0, o(f[e].displayId, f[e].error)))
        }

        function n(e) {
            f[e].logged && (t.onHandled ? t.onHandled(f[e].displayId, f[e].error) : f[e].onUnhandled || (console.warn("Promise Rejection Handled (id: " + f[e].displayId + "):"), console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' + f[e].displayId + ".")))
        }
        t = t || {}, s && r(), s = !0;
        var i = 0,
            c = 0,
            f = {};
        u._47 = function(t) {
            2 === t._83 && f[t._56] && (f[t._56].logged ? n(t._56) : clearTimeout(f[t._56].timeout), delete f[t._56])
        }, u._71 = function(t, n) {
            0 === t._75 && (t._56 = i++, f[t._56] = {
                displayId: null,
                error: n,
                timeout: setTimeout(e.bind(null, t._56), a(n, l) ? 100 : 2e3),
                logged: !1
            })
        }
    }

    function o(t, e) {
        console.warn("Possible Unhandled Promise Rejection (id: " + t + "):"), ((e && (e.stack || e)) + "").split("\n").forEach(function(t) {
            console.warn("  " + t)
        })
    }

    function a(t, e) {
        return e.some(function(e) {
            return t instanceof e
        })
    }
    var u = n(32),
        l = [ReferenceError, TypeError, RangeError],
        s = !1;
    e.disable = r, e.enable = i
}, function(t, e, n) {
    "use strict";
    (function(e) {
        function n(t) {
            a.length || (o(), u = !0), a[a.length] = t
        }

        function r() {
            for (; l < a.length;) {
                var t = l;
                if (l += 1, a[t].call(), l > s) {
                    for (var e = 0, n = a.length - l; e < n; e++) a[e] = a[e + l];
                    a.length -= l, l = 0
                }
            }
            a.length = 0, l = 0, u = !1
        }

        function i(t) {
            return function() {
                function e() {
                    clearTimeout(n), clearInterval(r), t()
                }
                var n = setTimeout(e, 0),
                    r = setInterval(e, 50)
            }
        }
        t.exports = n;
        var o, a = [],
            u = !1,
            l = 0,
            s = 1024,
            c = "undefined" !== typeof e ? e : self,
            f = c.MutationObserver || c.WebKitMutationObserver;
        o = "function" === typeof f ? function(t) {
            var e = 1,
                n = new f(t),
                r = document.createTextNode("");
            return n.observe(r, {
                    characterData: !0
                }),
                function() {
                    e = -e, r.data = e
                }
        }(r) : i(r), n.requestFlush = o, n.makeRequestCallFromTimer = i
    }).call(e, n(23))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = new i(i._44);
        return e._83 = 1, e._18 = t, e
    }
    var i = n(32);
    t.exports = i;
    var o = r(!0),
        a = r(!1),
        u = r(null),
        l = r(void 0),
        s = r(0),
        c = r("");
    i.resolve = function(t) {
        if (t instanceof i) return t;
        if (null === t) return u;
        if (void 0 === t) return l;
        if (!0 === t) return o;
        if (!1 === t) return a;
        if (0 === t) return s;
        if ("" === t) return c;
        if ("object" === typeof t || "function" === typeof t) try {
            var e = t.then;
            if ("function" === typeof e) return new i(e.bind(t))
        } catch (t) {
            return new i(function(e, n) {
                n(t)
            })
        }
        return r(t)
    }, i.all = function(t) {
        var e = Array.prototype.slice.call(t);
        return new i(function(t, n) {
            function r(a, u) {
                if (u && ("object" === typeof u || "function" === typeof u)) {
                    if (u instanceof i && u.then === i.prototype.then) {
                        for (; 3 === u._83;) u = u._18;
                        return 1 === u._83 ? r(a, u._18) : (2 === u._83 && n(u._18), void u.then(function(t) {
                            r(a, t)
                        }, n))
                    }
                    var l = u.then;
                    if ("function" === typeof l) {
                        return void new i(l.bind(u)).then(function(t) {
                            r(a, t)
                        }, n)
                    }
                }
                e[a] = u, 0 === --o && t(e)
            }
            if (0 === e.length) return t([]);
            for (var o = e.length, a = 0; a < e.length; a++) r(a, e[a])
        })
    }, i.reject = function(t) {
        return new i(function(e, n) {
            n(t)
        })
    }, i.race = function(t) {
        return new i(function(e, n) {
            t.forEach(function(t) {
                i.resolve(t).then(e, n)
            })
        })
    }, i.prototype.catch = function(t) {
        return this.then(null, t)
    }
}, function(t, e) {
    ! function(t) {
        "use strict";

        function e(t) {
            if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function n(t) {
            return "string" !== typeof t && (t = String(t)), t
        }

        function r(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return m.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function i(t) {
            this.map = {}, t instanceof i ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function o(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function a(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    n(t.error)
                }
            })
        }

        function u(t) {
            var e = new FileReader,
                n = a(e);
            return e.readAsArrayBuffer(t), n
        }

        function l(t) {
            var e = new FileReader,
                n = a(e);
            return e.readAsText(t), n
        }

        function s(t) {
            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
            return n.join("")
        }

        function c(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function f() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" === typeof t) this._bodyText = t;
                    else if (m.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (m.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (m.arrayBuffer && m.blob && b(t)) this._bodyArrayBuffer = c(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !_(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = c(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, m.blob && (this.blob = function() {
                var t = o(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? o(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(u)
            }), this.text = function() {
                var t = o(this);
                if (t) return t;
                if (this._bodyBlob) return l(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(s(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, m.formData && (this.formData = function() {
                return this.text().then(p)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function d(t) {
            var e = t.toUpperCase();
            return x.indexOf(e) > -1 ? e : t
        }

        function h(t, e) {
            e = e || {};
            var n = e.body;
            if (t instanceof h) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new i(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new i(e.headers)), this.method = d(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }

        function p(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        i = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(i))
                }
            }), e
        }

        function g(t) {
            var e = new i;
            return t.split(/\r?\n/).forEach(function(t) {
                var n = t.split(":"),
                    r = n.shift().trim();
                if (r) {
                    var i = n.join(":").trim();
                    e.append(r, i)
                }
            }), e
        }

        function v(t, e) {
            e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new i(e.headers), this.url = e.url || "", this._initBody(t)
        }
        if (!t.fetch) {
            var m = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (m.arrayBuffer) var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                b = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                _ = ArrayBuffer.isView || function(t) {
                    return t && y.indexOf(Object.prototype.toString.call(t)) > -1
                };
            i.prototype.append = function(t, r) {
                t = e(t), r = n(r);
                var i = this.map[t];
                this.map[t] = i ? i + "," + r : r
            }, i.prototype.delete = function(t) {
                delete this.map[e(t)]
            }, i.prototype.get = function(t) {
                return t = e(t), this.has(t) ? this.map[t] : null
            }, i.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }, i.prototype.set = function(t, r) {
                this.map[e(t)] = n(r)
            }, i.prototype.forEach = function(t, e) {
                for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            }, i.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push(n)
                }), r(t)
            }, i.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), r(t)
            }, i.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push([n, e])
                }), r(t)
            }, m.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            h.prototype.clone = function() {
                return new h(this, {
                    body: this._bodyInit
                })
            }, f.call(h.prototype), f.call(v.prototype), v.prototype.clone = function() {
                return new v(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                })
            }, v.error = function() {
                var t = new v(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var w = [301, 302, 303, 307, 308];
            v.redirect = function(t, e) {
                if (-1 === w.indexOf(e)) throw new RangeError("Invalid status code");
                return new v(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = i, t.Request = h, t.Response = v, t.fetch = function(t, e) {
                return new Promise(function(n, r) {
                    var i = new h(t, e),
                        o = new XMLHttpRequest;
                    o.onload = function() {
                        var t = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: g(o.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL" in o ? o.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in o ? o.response : o.responseText;
                        n(new v(e, t))
                    }, o.onerror = function() {
                        r(new TypeError("Network request failed"))
                    }, o.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    }, o.open(i.method, i.url, !0), "include" === i.credentials && (o.withCredentials = !0), "responseType" in o && m.blob && (o.responseType = "blob"), i.headers.forEach(function(t, e) {
                        o.setRequestHeader(e, t)
                    }), o.send("undefined" === typeof i._bodyInit ? null : i._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }
    }("undefined" !== typeof self ? self : this)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(7),
        i = n.n(r),
        o = n(63),
        a = n.n(o),
        u = n(71),
        l = n(225);
    a.a.render(i.a.createElement(u.a, null), document.getElementById("root")), Object(l.a)()
}, function(t, e, n) {
    "use strict";

    function r(t) {
        for (var e = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        y(!1, "Minified React error #" + t + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }

    function i(t, e, n) {
        this.props = t, this.context = e, this.refs = b, this.updater = n || A
    }

    function o() {}

    function a(t, e, n) {
        this.props = t, this.context = e, this.refs = b, this.updater = n || A
    }

    function u(t, e, n) {
        var r = void 0,
            i = {},
            o = null,
            a = null;
        if (null != e)
            for (r in void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (o = "" + e.key), e) F.call(e, r) && !N.hasOwnProperty(r) && (i[r] = e[r]);
        var u = arguments.length - 2;
        if (1 === u) i.children = n;
        else if (1 < u) {
            for (var l = Array(u), s = 0; s < u; s++) l[s] = arguments[s + 2];
            i.children = l
        }
        if (t && t.defaultProps)
            for (r in u = t.defaultProps) void 0 === i[r] && (i[r] = u[r]);
        return {
            $$typeof: w,
            type: t,
            key: o,
            ref: a,
            props: i,
            _owner: R.current
        }
    }

    function l(t) {
        return "object" === typeof t && null !== t && t.$$typeof === w
    }

    function s(t) {
        var e = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + t).replace(/[=:]/g, function(t) {
            return e[t]
        })
    }

    function c(t, e, n, r) {
        if (z.length) {
            var i = z.pop();
            return i.result = t, i.keyPrefix = e, i.func = n, i.context = r, i.count = 0, i
        }
        return {
            result: t,
            keyPrefix: e,
            func: n,
            context: r,
            count: 0
        }
    }

    function f(t) {
        t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > z.length && z.push(t)
    }

    function d(t, e, n, i) {
        var o = typeof t;
        "undefined" !== o && "boolean" !== o || (t = null);
        var a = !1;
        if (null === t) a = !0;
        else switch (o) {
            case "string":
            case "number":
                a = !0;
                break;
            case "object":
                switch (t.$$typeof) {
                    case w:
                    case k:
                        a = !0
                }
        }
        if (a) return n(i, t, "" === e ? "." + h(t, 0) : e), 1;
        if (a = 0, e = "" === e ? "." : e + ":", Array.isArray(t))
            for (var u = 0; u < t.length; u++) {
                o = t[u];
                var l = e + h(o, u);
                a += d(o, l, n, i)
            } else if (null === t || "undefined" === typeof t ? l = null : (l = E && t[E] || t["@@iterator"], l = "function" === typeof l ? l : null), "function" === typeof l)
                for (t = l.call(t), u = 0; !(o = t.next()).done;) o = o.value, l = e + h(o, u++), a += d(o, l, n, i);
            else "object" === o && (n = "" + t, r("31", "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
        return a
    }

    function h(t, e) {
        return "object" === typeof t && null !== t && null != t.key ? s(t.key) : e.toString(36)
    }

    function p(t, e) {
        t.func.call(t.context, e, t.count++)
    }

    function g(t, e, n) {
        var r = t.result,
            i = t.keyPrefix;
        t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? v(t, r, n, _.thatReturnsArgument) : null != t && (l(t) && (e = i + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(L, "$&/") + "/") + n, t = {
            $$typeof: w,
            type: t.type,
            key: e,
            ref: t.ref,
            props: t.props,
            _owner: t._owner
        }), r.push(t))
    }

    function v(t, e, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(L, "$&/") + "/"), e = c(e, o, r, i), null == t || d(t, "", g, e), f(e)
    }
    var m = n(24),
        y = n(33),
        b = n(34),
        _ = n(35),
        x = "function" === typeof Symbol && Symbol.for,
        w = x ? Symbol.for("react.element") : 60103,
        k = x ? Symbol.for("react.portal") : 60106,
        S = x ? Symbol.for("react.fragment") : 60107,
        C = x ? Symbol.for("react.strict_mode") : 60108,
        M = x ? Symbol.for("react.profiler") : 60114,
        T = x ? Symbol.for("react.provider") : 60109,
        D = x ? Symbol.for("react.context") : 60110,
        P = x ? Symbol.for("react.async_mode") : 60111,
        O = x ? Symbol.for("react.forward_ref") : 60112;
    x && Symbol.for("react.timeout");
    var E = "function" === typeof Symbol && Symbol.iterator,
        A = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        };
    i.prototype.isReactComponent = {}, i.prototype.setState = function(t, e) {
        "object" !== typeof t && "function" !== typeof t && null != t && r("85"), this.updater.enqueueSetState(this, t, e, "setState")
    }, i.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate")
    }, o.prototype = i.prototype;
    var I = a.prototype = new o;
    I.constructor = a, m(I, i.prototype), I.isPureReactComponent = !0;
    var R = {
            current: null
        },
        F = Object.prototype.hasOwnProperty,
        N = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        L = /\/+/g,
        z = [],
        j = {
            Children: {
                map: function(t, e, n) {
                    if (null == t) return t;
                    var r = [];
                    return v(t, r, null, e, n), r
                },
                forEach: function(t, e, n) {
                    if (null == t) return t;
                    e = c(null, null, e, n), null == t || d(t, "", p, e), f(e)
                },
                count: function(t) {
                    return null == t ? 0 : d(t, "", _.thatReturnsNull, null)
                },
                toArray: function(t) {
                    var e = [];
                    return v(t, e, null, _.thatReturnsArgument), e
                },
                only: function(t) {
                    return l(t) || r("143"), t
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: i,
            PureComponent: a,
            createContext: function(t, e) {
                return void 0 === e && (e = null), t = {
                    $$typeof: D,
                    _calculateChangedBits: e,
                    _defaultValue: t,
                    _currentValue: t,
                    _currentValue2: t,
                    _changedBits: 0,
                    _changedBits2: 0,
                    Provider: null,
                    Consumer: null
                }, t.Provider = {
                    $$typeof: T,
                    _context: t
                }, t.Consumer = t
            },
            forwardRef: function(t) {
                return {
                    $$typeof: O,
                    render: t
                }
            },
            Fragment: S,
            StrictMode: C,
            unstable_AsyncMode: P,
            unstable_Profiler: M,
            createElement: u,
            cloneElement: function(t, e, n) {
                (null === t || void 0 === t) && r("267", t);
                var i = void 0,
                    o = m({}, t.props),
                    a = t.key,
                    u = t.ref,
                    l = t._owner;
                if (null != e) {
                    void 0 !== e.ref && (u = e.ref, l = R.current), void 0 !== e.key && (a = "" + e.key);
                    var s = void 0;
                    t.type && t.type.defaultProps && (s = t.type.defaultProps);
                    for (i in e) F.call(e, i) && !N.hasOwnProperty(i) && (o[i] = void 0 === e[i] && void 0 !== s ? s[i] : e[i])
                }
                if (1 === (i = arguments.length - 2)) o.children = n;
                else if (1 < i) {
                    s = Array(i);
                    for (var c = 0; c < i; c++) s[c] = arguments[c + 2];
                    o.children = s
                }
                return {
                    $$typeof: w,
                    type: t.type,
                    key: a,
                    ref: u,
                    props: o,
                    _owner: l
                }
            },
            createFactory: function(t) {
                var e = u.bind(null, t);
                return e.type = t, e
            },
            isValidElement: l,
            version: "16.4.2",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentOwner: R,
                assign: m
            }
        },
        W = {
            default: j
        },
        B = W && j || W;
    t.exports = B.default ? B.default : B
}, function(t, e, n) {
    "use strict";

    function r() {
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
        } catch (t) {
            console.error(t)
        }
    }
    r(), t.exports = n(64)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        for (var e = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        Rr(!1, "Minified React error #" + t + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }

    function i(t, e, n, r, i, o, a, u, l) {
        this._hasCaughtError = !1, this._caughtError = null;
        var s = Array.prototype.slice.call(arguments, 3);
        try {
            e.apply(n, s)
        } catch (t) {
            this._caughtError = t, this._hasCaughtError = !0
        }
    }

    function o() {
        if (Yr._hasRethrowError) {
            var t = Yr._rethrowError;
            throw Yr._rethrowError = null, Yr._hasRethrowError = !1, t
        }
    }

    function a() {
        if (Hr)
            for (var t in Vr) {
                var e = Vr[t],
                    n = Hr.indexOf(t);
                if (-1 < n || r("96", t), !Gr[n]) {
                    e.extractEvents || r("97", t), Gr[n] = e, n = e.eventTypes;
                    for (var i in n) {
                        var o = void 0,
                            a = n[i],
                            l = e,
                            s = i;
                        qr.hasOwnProperty(s) && r("99", s), qr[s] = a;
                        var c = a.phasedRegistrationNames;
                        if (c) {
                            for (o in c) c.hasOwnProperty(o) && u(c[o], l, s);
                            o = !0
                        } else a.registrationName ? (u(a.registrationName, l, s), o = !0) : o = !1;
                        o || r("98", i, t)
                    }
                }
            }
    }

    function u(t, e, n) {
        Kr[t] && r("100", t), Kr[t] = e, $r[t] = e.eventTypes[n].dependencies
    }

    function l(t) {
        Hr && r("101"), Hr = Array.prototype.slice.call(t), a()
    }

    function s(t) {
        var e, n = !1;
        for (e in t)
            if (t.hasOwnProperty(e)) {
                var i = t[e];
                Vr.hasOwnProperty(e) && Vr[e] === i || (Vr[e] && r("102", e), Vr[e] = i, n = !0)
            }
        n && a()
    }

    function c(t, e, n, r) {
        e = t.type || "unknown-event", t.currentTarget = Jr(r), Yr.invokeGuardedCallbackAndCatchFirstError(e, n, void 0, t), t.currentTarget = null
    }

    function f(t, e) {
        return null == e && r("30"), null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e]
    }

    function d(t, e, n) {
        Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
    }

    function h(t, e) {
        if (t) {
            var n = t._dispatchListeners,
                r = t._dispatchInstances;
            if (Array.isArray(n))
                for (var i = 0; i < n.length && !t.isPropagationStopped(); i++) c(t, e, n[i], r[i]);
            else n && c(t, e, n, r);
            t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t)
        }
    }

    function p(t) {
        return h(t, !0)
    }

    function g(t) {
        return h(t, !1)
    }

    function v(t, e) {
        var n = t.stateNode;
        if (!n) return null;
        var i = Qr(n);
        if (!i) return null;
        n = i[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                (i = !i.disabled) || (t = t.type, i = !("button" === t || "input" === t || "select" === t || "textarea" === t)), t = !i;
                break t;
            default:
                t = !1
        }
        return t ? null : (n && "function" !== typeof n && r("231", e, typeof n), n)
    }

    function m(t, e) {
        null !== t && (ti = f(ti, t)), t = ti, ti = null, t && (e ? d(t, p) : d(t, g), ti && r("95"), Yr.rethrowCaughtError())
    }

    function y(t, e, n, r) {
        for (var i = null, o = 0; o < Gr.length; o++) {
            var a = Gr[o];
            a && (a = a.extractEvents(t, e, n, r)) && (i = f(i, a))
        }
        m(i, !1)
    }

    function b(t) {
        if (t[ii]) return t[ii];
        for (; !t[ii];) {
            if (!t.parentNode) return null;
            t = t.parentNode
        }
        return t = t[ii], 5 === t.tag || 6 === t.tag ? t : null
    }

    function _(t) {
        if (5 === t.tag || 6 === t.tag) return t.stateNode;
        r("33")
    }

    function x(t) {
        return t[oi] || null
    }

    function w(t) {
        do {
            t = t.return
        } while (t && 5 !== t.tag);
        return t || null
    }

    function k(t, e, n) {
        for (var r = []; t;) r.push(t), t = w(t);
        for (t = r.length; 0 < t--;) e(r[t], "captured", n);
        for (t = 0; t < r.length; t++) e(r[t], "bubbled", n)
    }

    function S(t, e, n) {
        (e = v(t, n.dispatchConfig.phasedRegistrationNames[e])) && (n._dispatchListeners = f(n._dispatchListeners, e), n._dispatchInstances = f(n._dispatchInstances, t))
    }

    function C(t) {
        t && t.dispatchConfig.phasedRegistrationNames && k(t._targetInst, S, t)
    }

    function M(t) {
        if (t && t.dispatchConfig.phasedRegistrationNames) {
            var e = t._targetInst;
            e = e ? w(e) : null, k(e, S, t)
        }
    }

    function T(t, e, n) {
        t && n && n.dispatchConfig.registrationName && (e = v(t, n.dispatchConfig.registrationName)) && (n._dispatchListeners = f(n._dispatchListeners, e), n._dispatchInstances = f(n._dispatchInstances, t))
    }

    function D(t) {
        t && t.dispatchConfig.registrationName && T(t._targetInst, null, t)
    }

    function P(t) {
        d(t, C)
    }

    function O(t, e, n, r) {
        if (n && r) t: {
            for (var i = n, o = r, a = 0, u = i; u; u = w(u)) a++;u = 0;
            for (var l = o; l; l = w(l)) u++;
            for (; 0 < a - u;) i = w(i),
            a--;
            for (; 0 < u - a;) o = w(o),
            u--;
            for (; a--;) {
                if (i === o || i === o.alternate) break t;
                i = w(i), o = w(o)
            }
            i = null
        }
        else i = null;
        for (o = i, i = []; n && n !== o && (null === (a = n.alternate) || a !== o);) i.push(n), n = w(n);
        for (n = []; r && r !== o && (null === (a = r.alternate) || a !== o);) n.push(r), r = w(r);
        for (r = 0; r < i.length; r++) T(i[r], "bubbled", t);
        for (t = n.length; 0 < t--;) T(n[t], "captured", e)
    }

    function E(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n["ms" + t] = "MS" + e, n["O" + t] = "o" + e.toLowerCase(), n
    }

    function A(t) {
        if (si[t]) return si[t];
        if (!li[t]) return t;
        var e, n = li[t];
        for (e in n)
            if (n.hasOwnProperty(e) && e in ci) return si[t] = n[e];
        return t
    }

    function I() {
        return !vi && Nr.canUseDOM && (vi = "textContent" in document.documentElement ? "textContent" : "innerText"), vi
    }

    function R() {
        if (mi._fallbackText) return mi._fallbackText;
        var t, e, n = mi._startText,
            r = n.length,
            i = F(),
            o = i.length;
        for (t = 0; t < r && n[t] === i[t]; t++);
        var a = r - t;
        for (e = 1; e <= a && n[r - e] === i[o - e]; e++);
        return mi._fallbackText = i.slice(t, 1 < e ? 1 - e : void 0), mi._fallbackText
    }

    function F() {
        return "value" in mi._root ? mi._root.value : mi._root[I()]
    }

    function N(t, e, n, r) {
        this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = n, t = this.constructor.Interface;
        for (var i in t) t.hasOwnProperty(i) && ((e = t[i]) ? this[i] = e(n) : "target" === i ? this.target = r : this[i] = n[i]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? zr.thatReturnsTrue : zr.thatReturnsFalse, this.isPropagationStopped = zr.thatReturnsFalse, this
    }

    function L(t, e, n, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, t, e, n, r), i
        }
        return new this(t, e, n, r)
    }

    function z(t) {
        t instanceof this || r("223"), t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t)
    }

    function j(t) {
        t.eventPool = [], t.getPooled = L, t.release = z
    }

    function W(t, e) {
        switch (t) {
            case "keyup":
                return -1 !== wi.indexOf(e.keyCode);
            case "keydown":
                return 229 !== e.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function B(t) {
        return t = t.detail, "object" === typeof t && "data" in t ? t.data : null
    }

    function U(t, e) {
        switch (t) {
            case "compositionend":
                return B(e);
            case "keypress":
                return 32 !== e.which ? null : (Pi = !0, Ti);
            case "textInput":
                return t = e.data, t === Ti && Pi ? null : t;
            default:
                return null
        }
    }

    function Y(t, e) {
        if (Oi) return "compositionend" === t || !ki && W(t, e) ? (t = R(), mi._root = null, mi._startText = null, mi._fallbackText = null, Oi = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return Mi ? null : e.data;
            default:
                return null
        }
    }

    function H(t) {
        if (t = Xr(t)) {
            Ai && "function" === typeof Ai.restoreControlledState || r("194");
            var e = Qr(t.stateNode);
            Ai.restoreControlledState(t.stateNode, t.type, e)
        }
    }

    function V(t) {
        Ri ? Fi ? Fi.push(t) : Fi = [t] : Ri = t
    }

    function G() {
        return null !== Ri || null !== Fi
    }

    function q() {
        if (Ri) {
            var t = Ri,
                e = Fi;
            if (Fi = Ri = null, H(t), e)
                for (t = 0; t < e.length; t++) H(e[t])
        }
    }

    function K(t, e) {
        return t(e)
    }

    function $(t, e, n) {
        return t(e, n)
    }

    function Z() {}

    function Q(t, e) {
        if (Li) return t(e);
        Li = !0;
        try {
            return K(t, e)
        } finally {
            Li = !1, G() && (Z(), q())
        }
    }

    function X(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return "input" === e ? !!zi[t.type] : "textarea" === e
    }

    function J(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
    }

    function tt(t, e) {
        return !(!Nr.canUseDOM || e && !("addEventListener" in document)) && (t = "on" + t, e = t in document, e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = "function" === typeof e[t]), e)
    }

    function et(t) {
        var e = t.type;
        return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
    }

    function nt(t) {
        var e = et(t) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            r = "" + t[e];
        if (!t.hasOwnProperty(e) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
            var i = n.get,
                o = n.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(t) {
                    r = "" + t, o.call(this, t)
                }
            }), Object.defineProperty(t, e, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(t) {
                    r = "" + t
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function rt(t) {
        t._valueTracker || (t._valueTracker = nt(t))
    }

    function it(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var n = e.getValue(),
            r = "";
        return t && (r = et(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== n && (e.setValue(t), !0)
    }

    function ot(t) {
        return null === t || "undefined" === typeof t ? null : (t = Qi && t[Qi] || t["@@iterator"], "function" === typeof t ? t : null)
    }

    function at(t) {
        var e = t.type;
        if ("function" === typeof e) return e.displayName || e.name;
        if ("string" === typeof e) return e;
        switch (e) {
            case Ki:
                return "AsyncMode";
            case qi:
                return "Context.Consumer";
            case Yi:
                return "ReactFragment";
            case Ui:
                return "ReactPortal";
            case Vi:
                return "Profiler(" + t.pendingProps.id + ")";
            case Gi:
                return "Context.Provider";
            case Hi:
                return "StrictMode";
            case Zi:
                return "Timeout"
        }
        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
            case $i:
                return t = e.render.displayName || e.render.name || "", "" !== t ? "ForwardRef(" + t + ")" : "ForwardRef"
        }
        return null
    }

    function ut(t) {
        var e = "";
        do {
            t: switch (t.tag) {
                case 0:
                case 1:
                case 2:
                case 5:
                    var n = t._debugOwner,
                        r = t._debugSource,
                        i = at(t),
                        o = null;
                    n && (o = at(n)), n = r, i = "\n    in " + (i || "Unknown") + (n ? " (at " + n.fileName.replace(/^.*[\\\/]/, "") + ":" + n.lineNumber + ")" : o ? " (created by " + o + ")" : "");
                    break t;
                default:
                    i = ""
            }
            e += i,
            t = t.return
        } while (t);
        return e
    }

    function lt(t) {
        return !!Ji.call(eo, t) || !Ji.call(to, t) && (Xi.test(t) ? eo[t] = !0 : (to[t] = !0, !1))
    }

    function st(t, e, n, r) {
        if (null !== n && 0 === n.type) return !1;
        switch (typeof e) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
            default:
                return !1
        }
    }

    function ct(t, e, n, r) {
        if (null === e || "undefined" === typeof e || st(t, e, n, r)) return !0;
        if (r) return !1;
        if (null !== n) switch (n.type) {
            case 3:
                return !e;
            case 4:
                return !1 === e;
            case 5:
                return isNaN(e);
            case 6:
                return isNaN(e) || 1 > e
        }
        return !1
    }

    function ft(t, e, n, r, i) {
        this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e
    }

    function dt(t) {
        return t[1].toUpperCase()
    }

    function ht(t, e, n, r) {
        var i = no.hasOwnProperty(e) ? no[e] : null;
        (null !== i ? 0 === i.type : !r && (2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]))) || (ct(e, n, i, r) && (n = null), r || null === i ? lt(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = null === n ? 3 !== i.type && "" : n : (e = i.attributeName, r = i.attributeNamespace, null === n ? t.removeAttribute(e) : (i = i.type, n = 3 === i || 4 === i && !0 === n ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
    }

    function pt(t, e) {
        var n = e.checked;
        return Lr({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : t._wrapperState.initialChecked
        })
    }

    function gt(t, e) {
        var n = null == e.defaultValue ? "" : e.defaultValue,
            r = null != e.checked ? e.checked : e.defaultChecked;
        n = _t(null != e.value ? e.value : n), t._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
        }
    }

    function vt(t, e) {
        null != (e = e.checked) && ht(t, "checked", e, !1)
    }

    function mt(t, e) {
        vt(t, e);
        var n = _t(e.value);
        null != n && ("number" === e.type ? (0 === n && "" === t.value || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n)), e.hasOwnProperty("value") ? bt(t, e.type, n) : e.hasOwnProperty("defaultValue") && bt(t, e.type, _t(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
    }

    function yt(t, e, n) {
        if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
            e = "" + t._wrapperState.initialValue;
            var r = t.value;
            n || e === r || (t.value = e), t.defaultValue = e
        }
        n = t.name, "" !== n && (t.name = ""), t.defaultChecked = !t.defaultChecked, t.defaultChecked = !t.defaultChecked, "" !== n && (t.name = n)
    }

    function bt(t, e, n) {
        "number" === e && t.ownerDocument.activeElement === t || (null == n ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
    }

    function _t(t) {
        switch (typeof t) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return t;
            default:
                return ""
        }
    }

    function xt(t, e, n) {
        return t = N.getPooled(io.change, t, e, n), t.type = "change", V(n), P(t), t
    }

    function wt(t) {
        m(t, !1)
    }

    function kt(t) {
        if (it(_(t))) return t
    }

    function St(t, e) {
        if ("change" === t) return e
    }

    function Ct() {
        oo && (oo.detachEvent("onpropertychange", Mt), ao = oo = null)
    }

    function Mt(t) {
        "value" === t.propertyName && kt(ao) && (t = xt(ao, t, J(t)), Q(wt, t))
    }

    function Tt(t, e, n) {
        "focus" === t ? (Ct(), oo = e, ao = n, oo.attachEvent("onpropertychange", Mt)) : "blur" === t && Ct()
    }

    function Dt(t) {
        if ("selectionchange" === t || "keyup" === t || "keydown" === t) return kt(ao)
    }

    function Pt(t, e) {
        if ("click" === t) return kt(e)
    }

    function Ot(t, e) {
        if ("input" === t || "change" === t) return kt(e)
    }

    function Et(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : !!(t = co[t]) && !!e[t]
    }

    function At() {
        return Et
    }

    function It(t) {
        var e = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            if (0 !== (2 & e.effectTag)) return 1;
            for (; e.return;)
                if (e = e.return, 0 !== (2 & e.effectTag)) return 1
        }
        return 3 === e.tag ? 2 : 3
    }

    function Rt(t) {
        2 !== It(t) && r("188")
    }

    function Ft(t) {
        var e = t.alternate;
        if (!e) return e = It(t), 3 === e && r("188"), 1 === e ? null : t;
        for (var n = t, i = e;;) {
            var o = n.return,
                a = o ? o.alternate : null;
            if (!o || !a) break;
            if (o.child === a.child) {
                for (var u = o.child; u;) {
                    if (u === n) return Rt(o), t;
                    if (u === i) return Rt(o), e;
                    u = u.sibling
                }
                r("188")
            }
            if (n.return !== i.return) n = o, i = a;
            else {
                u = !1;
                for (var l = o.child; l;) {
                    if (l === n) {
                        u = !0, n = o, i = a;
                        break
                    }
                    if (l === i) {
                        u = !0, i = o, n = a;
                        break
                    }
                    l = l.sibling
                }
                if (!u) {
                    for (l = a.child; l;) {
                        if (l === n) {
                            u = !0, n = a, i = o;
                            break
                        }
                        if (l === i) {
                            u = !0, i = a, n = o;
                            break
                        }
                        l = l.sibling
                    }
                    u || r("189")
                }
            }
            n.alternate !== i && r("190")
        }
        return 3 !== n.tag && r("188"), n.stateNode.current === n ? t : e
    }

    function Nt(t) {
        if (!(t = Ft(t))) return null;
        for (var e = t;;) {
            if (5 === e.tag || 6 === e.tag) return e;
            if (e.child) e.child.return = e, e = e.child;
            else {
                if (e === t) break;
                for (; !e.sibling;) {
                    if (!e.return || e.return === t) return null;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return null
    }

    function Lt(t) {
        if (!(t = Ft(t))) return null;
        for (var e = t;;) {
            if (5 === e.tag || 6 === e.tag) return e;
            if (e.child && 4 !== e.tag) e.child.return = e, e = e.child;
            else {
                if (e === t) break;
                for (; !e.sibling;) {
                    if (!e.return || e.return === t) return null;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return null
    }

    function zt(t) {
        var e = t.keyCode;
        return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
    }

    function jt(t, e) {
        var n = t[0];
        t = t[1];
        var r = "on" + (t[0].toUpperCase() + t.slice(1));
        e = {
            phasedRegistrationNames: {
                bubbled: r,
                captured: r + "Capture"
            },
            dependencies: [n],
            isInteractive: e
        }, To[t] = e, Do[n] = e
    }

    function Wt(t) {
        var e = t.targetInst;
        do {
            if (!e) {
                t.ancestors.push(e);
                break
            }
            var n;
            for (n = e; n.return;) n = n.return;
            if (!(n = 3 !== n.tag ? null : n.stateNode.containerInfo)) break;
            t.ancestors.push(e), e = b(n)
        } while (e);
        for (n = 0; n < t.ancestors.length; n++) e = t.ancestors[n], y(t.topLevelType, e, t.nativeEvent, J(t.nativeEvent))
    }

    function Bt(t) {
        Ao = !!t
    }

    function Ut(t, e) {
        if (!e) return null;
        var n = (Oo(t) ? Ht : Vt).bind(null, t);
        e.addEventListener(t, n, !1)
    }

    function Yt(t, e) {
        if (!e) return null;
        var n = (Oo(t) ? Ht : Vt).bind(null, t);
        e.addEventListener(t, n, !0)
    }

    function Ht(t, e) {
        $(Vt, t, e)
    }

    function Vt(t, e) {
        if (Ao) {
            var n = J(e);
            if (n = b(n), null === n || "number" !== typeof n.tag || 2 === It(n) || (n = null), Eo.length) {
                var r = Eo.pop();
                r.topLevelType = t, r.nativeEvent = e, r.targetInst = n, t = r
            } else t = {
                topLevelType: t,
                nativeEvent: e,
                targetInst: n,
                ancestors: []
            };
            try {
                Q(Wt, t)
            } finally {
                t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, 10 > Eo.length && Eo.push(t)
            }
        }
    }

    function Gt(t) {
        return Object.prototype.hasOwnProperty.call(t, No) || (t[No] = Fo++, Ro[t[No]] = {}), Ro[t[No]]
    }

    function qt(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function Kt(t, e) {
        var n = qt(t);
        t = 0;
        for (var r; n;) {
            if (3 === n.nodeType) {
                if (r = t + n.textContent.length, t <= e && r >= e) return {
                    node: n,
                    offset: e - t
                };
                t = r
            }
            t: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = qt(n)
        }
    }

    function $t(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
    }

    function Zt(t, e) {
        if (Uo || null == jo || jo !== jr()) return null;
        var n = jo;
        return "selectionStart" in n && $t(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : window.getSelection ? (n = window.getSelection(), n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }) : n = void 0, Bo && Wr(Bo, n) ? null : (Bo = n, t = N.getPooled(zo.select, Wo, t, e), t.type = "select", t.target = jo, P(t), t)
    }

    function Qt(t) {
        var e = "";
        return Fr.Children.forEach(t, function(t) {
            null == t || "string" !== typeof t && "number" !== typeof t || (e += t)
        }), e
    }

    function Xt(t, e) {
        return t = Lr({
            children: void 0
        }, e), (e = Qt(e.children)) && (t.children = e), t
    }

    function Jt(t, e, n, r) {
        if (t = t.options, e) {
            e = {};
            for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
            for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + n, e = null, i = 0; i < t.length; i++) {
                if (t[i].value === n) return t[i].selected = !0, void(r && (t[i].defaultSelected = !0));
                null !== e || t[i].disabled || (e = t[i])
            }
            null !== e && (e.selected = !0)
        }
    }

    function te(t, e) {
        var n = e.value;
        t._wrapperState = {
            initialValue: null != n ? n : e.defaultValue,
            wasMultiple: !!e.multiple
        }
    }

    function ee(t, e) {
        return null != e.dangerouslySetInnerHTML && r("91"), Lr({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }

    function ne(t, e) {
        var n = e.value;
        null == n && (n = e.defaultValue, e = e.children, null != e && (null != n && r("92"), Array.isArray(e) && (1 >= e.length || r("93"), e = e[0]), n = "" + e), null == n && (n = "")), t._wrapperState = {
            initialValue: "" + n
        }
    }

    function re(t, e) {
        var n = e.value;
        null != n && (n = "" + n, n !== t.value && (t.value = n), null == e.defaultValue && (t.defaultValue = n)), null != e.defaultValue && (t.defaultValue = e.defaultValue)
    }

    function ie(t) {
        var e = t.textContent;
        e === t._wrapperState.initialValue && (t.value = e)
    }

    function oe(t) {
        switch (t) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function ae(t, e) {
        return null == t || "http://www.w3.org/1999/xhtml" === t ? oe(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
    }

    function ue(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && 3 === n.nodeType) return void(n.nodeValue = e)
        }
        t.textContent = e
    }

    function le(t, e) {
        t = t.style;
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"),
                    i = n,
                    o = e[n];
                i = null == o || "boolean" === typeof o || "" === o ? "" : r || "number" !== typeof o || 0 === o || ga.hasOwnProperty(i) && ga[i] ? ("" + o).trim() : o + "px", "float" === n && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i
            }
    }

    function se(t, e, n) {
        e && (ma[t] && (null != e.children || null != e.dangerouslySetInnerHTML) && r("137", t, n()), null != e.dangerouslySetInnerHTML && (null != e.children && r("60"), "object" === typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML || r("61")), null != e.style && "object" !== typeof e.style && r("62", n()))
    }

    function ce(t, e) {
        if (-1 === t.indexOf("-")) return "string" === typeof e.is;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function fe(t, e) {
        t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument;
        var n = Gt(t);
        e = $r[e];
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            if (!n.hasOwnProperty(i) || !n[i]) {
                switch (i) {
                    case "scroll":
                        Yt("scroll", t);
                        break;
                    case "focus":
                    case "blur":
                        Yt("focus", t), Yt("blur", t), n.blur = !0, n.focus = !0;
                        break;
                    case "cancel":
                    case "close":
                        tt(i, !0) && Yt(i, t);
                        break;
                    case "invalid":
                    case "submit":
                    case "reset":
                        break;
                    default:
                        -1 === gi.indexOf(i) && Ut(i, t)
                }
                n[i] = !0
            }
        }
    }

    function de(t, e, n, r) {
        return n = 9 === n.nodeType ? n : n.ownerDocument, r === da.html && (r = oe(t)), r === da.html ? "script" === t ? (t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : t = "string" === typeof e.is ? n.createElement(t, {
            is: e.is
        }) : n.createElement(t) : t = n.createElementNS(r, t), t
    }

    function he(t, e) {
        return (9 === e.nodeType ? e : e.ownerDocument).createTextNode(t)
    }

    function pe(t, e, n, r) {
        var i = ce(e, n);
        switch (e) {
            case "iframe":
            case "object":
                Ut("load", t);
                var o = n;
                break;
            case "video":
            case "audio":
                for (o = 0; o < gi.length; o++) Ut(gi[o], t);
                o = n;
                break;
            case "source":
                Ut("error", t), o = n;
                break;
            case "img":
            case "image":
            case "link":
                Ut("error", t), Ut("load", t), o = n;
                break;
            case "form":
                Ut("reset", t), Ut("submit", t), o = n;
                break;
            case "details":
                Ut("toggle", t), o = n;
                break;
            case "input":
                gt(t, n), o = pt(t, n), Ut("invalid", t), fe(r, "onChange");
                break;
            case "option":
                o = Xt(t, n);
                break;
            case "select":
                te(t, n), o = Lr({}, n, {
                    value: void 0
                }), Ut("invalid", t), fe(r, "onChange");
                break;
            case "textarea":
                ne(t, n), o = ee(t, n), Ut("invalid", t), fe(r, "onChange");
                break;
            default:
                o = n
        }
        se(e, o, ya);
        var a, u = o;
        for (a in u)
            if (u.hasOwnProperty(a)) {
                var l = u[a];
                "style" === a ? le(t, l, ya) : "dangerouslySetInnerHTML" === a ? null != (l = l ? l.__html : void 0) && pa(t, l) : "children" === a ? "string" === typeof l ? ("textarea" !== e || "" !== l) && ue(t, l) : "number" === typeof l && ue(t, "" + l) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (Kr.hasOwnProperty(a) ? null != l && fe(r, a) : null != l && ht(t, a, l, i))
            }
        switch (e) {
            case "input":
                rt(t), yt(t, n, !1);
                break;
            case "textarea":
                rt(t), ie(t, n);
                break;
            case "option":
                null != n.value && t.setAttribute("value", n.value);
                break;
            case "select":
                t.multiple = !!n.multiple, e = n.value, null != e ? Jt(t, !!n.multiple, e, !1) : null != n.defaultValue && Jt(t, !!n.multiple, n.defaultValue, !0);
                break;
            default:
                "function" === typeof o.onClick && (t.onclick = zr)
        }
    }

    function ge(t, e, n, r, i) {
        var o = null;
        switch (e) {
            case "input":
                n = pt(t, n), r = pt(t, r), o = [];
                break;
            case "option":
                n = Xt(t, n), r = Xt(t, r), o = [];
                break;
            case "select":
                n = Lr({}, n, {
                    value: void 0
                }), r = Lr({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                n = ee(t, n), r = ee(t, r), o = [];
                break;
            default:
                "function" !== typeof n.onClick && "function" === typeof r.onClick && (t.onclick = zr)
        }
        se(e, r, ya), e = t = void 0;
        var a = null;
        for (t in n)
            if (!r.hasOwnProperty(t) && n.hasOwnProperty(t) && null != n[t])
                if ("style" === t) {
                    var u = n[t];
                    for (e in u) u.hasOwnProperty(e) && (a || (a = {}), a[e] = "")
                } else "dangerouslySetInnerHTML" !== t && "children" !== t && "suppressContentEditableWarning" !== t && "suppressHydrationWarning" !== t && "autoFocus" !== t && (Kr.hasOwnProperty(t) ? o || (o = []) : (o = o || []).push(t, null));
        for (t in r) {
            var l = r[t];
            if (u = null != n ? n[t] : void 0, r.hasOwnProperty(t) && l !== u && (null != l || null != u))
                if ("style" === t)
                    if (u) {
                        for (e in u) !u.hasOwnProperty(e) || l && l.hasOwnProperty(e) || (a || (a = {}), a[e] = "");
                        for (e in l) l.hasOwnProperty(e) && u[e] !== l[e] && (a || (a = {}), a[e] = l[e])
                    } else a || (o || (o = []), o.push(t, a)), a = l;
            else "dangerouslySetInnerHTML" === t ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, null != l && u !== l && (o = o || []).push(t, "" + l)) : "children" === t ? u === l || "string" !== typeof l && "number" !== typeof l || (o = o || []).push(t, "" + l) : "suppressContentEditableWarning" !== t && "suppressHydrationWarning" !== t && (Kr.hasOwnProperty(t) ? (null != l && fe(i, t), o || u === l || (o = [])) : (o = o || []).push(t, l))
        }
        return a && (o = o || []).push("style", a), o
    }

    function ve(t, e, n, r, i) {
        "input" === n && "radio" === i.type && null != i.name && vt(t, i), ce(n, r), r = ce(n, i);
        for (var o = 0; o < e.length; o += 2) {
            var a = e[o],
                u = e[o + 1];
            "style" === a ? le(t, u, ya) : "dangerouslySetInnerHTML" === a ? pa(t, u) : "children" === a ? ue(t, u) : ht(t, a, u, r)
        }
        switch (n) {
            case "input":
                mt(t, i);
                break;
            case "textarea":
                re(t, i);
                break;
            case "select":
                t._wrapperState.initialValue = void 0, e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!i.multiple, n = i.value, null != n ? Jt(t, !!i.multiple, n, !1) : e !== !!i.multiple && (null != i.defaultValue ? Jt(t, !!i.multiple, i.defaultValue, !0) : Jt(t, !!i.multiple, i.multiple ? [] : "", !1))
        }
    }

    function me(t, e, n, r, i) {
        switch (e) {
            case "iframe":
            case "object":
                Ut("load", t);
                break;
            case "video":
            case "audio":
                for (r = 0; r < gi.length; r++) Ut(gi[r], t);
                break;
            case "source":
                Ut("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Ut("error", t), Ut("load", t);
                break;
            case "form":
                Ut("reset", t), Ut("submit", t);
                break;
            case "details":
                Ut("toggle", t);
                break;
            case "input":
                gt(t, n), Ut("invalid", t), fe(i, "onChange");
                break;
            case "select":
                te(t, n), Ut("invalid", t), fe(i, "onChange");
                break;
            case "textarea":
                ne(t, n), Ut("invalid", t), fe(i, "onChange")
        }
        se(e, n, ya), r = null;
        for (var o in n)
            if (n.hasOwnProperty(o)) {
                var a = n[o];
                "children" === o ? "string" === typeof a ? t.textContent !== a && (r = ["children", a]) : "number" === typeof a && t.textContent !== "" + a && (r = ["children", "" + a]) : Kr.hasOwnProperty(o) && null != a && fe(i, o)
            }
        switch (e) {
            case "input":
                rt(t), yt(t, n, !0);
                break;
            case "textarea":
                rt(t), ie(t, n);
                break;
            case "select":
            case "option":
                break;
            default:
                "function" === typeof n.onClick && (t.onclick = zr)
        }
        return r
    }

    function ye(t, e) {
        return t.nodeValue !== e
    }

    function be(t, e) {
        switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!e.autoFocus
        }
        return !1
    }

    function _e(t, e) {
        return "textarea" === t || "string" === typeof e.children || "number" === typeof e.children || "object" === typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && "string" === typeof e.dangerouslySetInnerHTML.__html
    }

    function xe(t) {
        for (t = t.nextSibling; t && 1 !== t.nodeType && 3 !== t.nodeType;) t = t.nextSibling;
        return t
    }

    function we(t) {
        for (t = t.firstChild; t && 1 !== t.nodeType && 3 !== t.nodeType;) t = t.nextSibling;
        return t
    }

    function ke(t) {
        return {
            current: t
        }
    }

    function Se(t) {
        0 > Ma || (t.current = Ca[Ma], Ca[Ma] = null, Ma--)
    }

    function Ce(t, e) {
        Ma++, Ca[Ma] = t.current, t.current = e
    }

    function Me(t) {
        return De(t) ? Pa : Ta.current
    }

    function Te(t, e) {
        var n = t.type.contextTypes;
        if (!n) return Ur;
        var r = t.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
        var i, o = {};
        for (i in n) o[i] = e[i];
        return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function De(t) {
        return 2 === t.tag && null != t.type.childContextTypes
    }

    function Pe(t) {
        De(t) && (Se(Da, t), Se(Ta, t))
    }

    function Oe(t) {
        Se(Da, t), Se(Ta, t)
    }

    function Ee(t, e, n) {
        Ta.current !== Ur && r("168"), Ce(Ta, e, t), Ce(Da, n, t)
    }

    function Ae(t, e) {
        var n = t.stateNode,
            i = t.type.childContextTypes;
        if ("function" !== typeof n.getChildContext) return e;
        n = n.getChildContext();
        for (var o in n) o in i || r("108", at(t) || "Unknown", o);
        return Lr({}, e, n)
    }

    function Ie(t) {
        if (!De(t)) return !1;
        var e = t.stateNode;
        return e = e && e.__reactInternalMemoizedMergedChildContext || Ur, Pa = Ta.current, Ce(Ta, e, t), Ce(Da, Da.current, t), !0
    }

    function Re(t, e) {
        var n = t.stateNode;
        if (n || r("169"), e) {
            var i = Ae(t, Pa);
            n.__reactInternalMemoizedMergedChildContext = i, Se(Da, t), Se(Ta, t), Ce(Ta, i, t)
        } else Se(Da, t);
        Ce(Da, e, t)
    }

    function Fe(t, e, n, r) {
        this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = null, this.index = 0, this.ref = null, this.pendingProps = e, this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.expirationTime = 0, this.alternate = null
    }

    function Ne(t, e, n) {
        var r = t.alternate;
        return null === r ? (r = new Fe(t.tag, e, t.key, t.mode), r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = e, r.effectTag = 0, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null), r.expirationTime = n, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r
    }

    function Le(t, e, n) {
        var i = t.type,
            o = t.key;
        if (t = t.props, "function" === typeof i) var a = i.prototype && i.prototype.isReactComponent ? 2 : 0;
        else if ("string" === typeof i) a = 5;
        else switch (i) {
            case Yi:
                return ze(t.children, e, n, o);
            case Ki:
                a = 11, e |= 3;
                break;
            case Hi:
                a = 11, e |= 2;
                break;
            case Vi:
                return i = new Fe(15, t, o, 4 | e), i.type = Vi, i.expirationTime = n, i;
            case Zi:
                a = 16, e |= 2;
                break;
            default:
                t: {
                    switch ("object" === typeof i && null !== i ? i.$$typeof : null) {
                        case Gi:
                            a = 13;
                            break t;
                        case qi:
                            a = 12;
                            break t;
                        case $i:
                            a = 14;
                            break t;
                        default:
                            r("130", null == i ? i : typeof i, "")
                    }
                    a = void 0
                }
        }
        return e = new Fe(a, t, o, e), e.type = i, e.expirationTime = n, e
    }

    function ze(t, e, n, r) {
        return t = new Fe(10, t, r, e), t.expirationTime = n, t
    }

    function je(t, e, n) {
        return t = new Fe(6, t, null, e), t.expirationTime = n, t
    }

    function We(t, e, n) {
        return e = new Fe(4, null !== t.children ? t.children : [], t.key, e), e.expirationTime = n, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }

    function Be(t, e, n) {
        return e = new Fe(3, null, null, e ? 3 : 0), t = {
            current: e,
            containerInfo: t,
            pendingChildren: null,
            earliestPendingTime: 0,
            latestPendingTime: 0,
            earliestSuspendedTime: 0,
            latestSuspendedTime: 0,
            latestPingedTime: 0,
            pendingCommitExpirationTime: 0,
            finishedWork: null,
            context: null,
            pendingContext: null,
            hydrate: n,
            remainingExpirationTime: 0,
            firstBatch: null,
            nextScheduledRoot: null
        }, e.stateNode = t
    }

    function Ue(t) {
        return function(e) {
            try {
                return t(e)
            } catch (t) {}
        }
    }

    function Ye(t) {
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (e.isDisabled || !e.supportsFiber) return !0;
        try {
            var n = e.inject(t);
            Oa = Ue(function(t) {
                return e.onCommitFiberRoot(n, t)
            }), Ea = Ue(function(t) {
                return e.onCommitFiberUnmount(n, t)
            })
        } catch (t) {}
        return !0
    }

    function He(t) {
        "function" === typeof Oa && Oa(t)
    }

    function Ve(t) {
        "function" === typeof Ea && Ea(t)
    }

    function Ge(t) {
        return {
            expirationTime: 0,
            baseState: t,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function qe(t) {
        return {
            expirationTime: t.expirationTime,
            baseState: t.baseState,
            firstUpdate: t.firstUpdate,
            lastUpdate: t.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Ke(t) {
        return {
            expirationTime: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function $e(t, e, n) {
        null === t.lastUpdate ? t.firstUpdate = t.lastUpdate = e : (t.lastUpdate.next = e, t.lastUpdate = e), (0 === t.expirationTime || t.expirationTime > n) && (t.expirationTime = n)
    }

    function Ze(t, e, n) {
        var r = t.alternate;
        if (null === r) {
            var i = t.updateQueue,
                o = null;
            null === i && (i = t.updateQueue = Ge(t.memoizedState))
        } else i = t.updateQueue, o = r.updateQueue, null === i ? null === o ? (i = t.updateQueue = Ge(t.memoizedState), o = r.updateQueue = Ge(r.memoizedState)) : i = t.updateQueue = qe(o) : null === o && (o = r.updateQueue = qe(i));
        null === o || i === o ? $e(i, e, n) : null === i.lastUpdate || null === o.lastUpdate ? ($e(i, e, n), $e(o, e, n)) : ($e(i, e, n), o.lastUpdate = e)
    }

    function Qe(t, e, n) {
        var r = t.updateQueue;
        r = null === r ? t.updateQueue = Ge(t.memoizedState) : Xe(t, r), null === r.lastCapturedUpdate ? r.firstCapturedUpdate = r.lastCapturedUpdate = e : (r.lastCapturedUpdate.next = e, r.lastCapturedUpdate = e), (0 === r.expirationTime || r.expirationTime > n) && (r.expirationTime = n)
    }

    function Xe(t, e) {
        var n = t.alternate;
        return null !== n && e === n.updateQueue && (e = t.updateQueue = qe(e)), e
    }

    function Je(t, e, n, r, i, o) {
        switch (n.tag) {
            case 1:
                return t = n.payload, "function" === typeof t ? t.call(o, r, i) : t;
            case 3:
                t.effectTag = -1025 & t.effectTag | 64;
            case 0:
                if (t = n.payload, null === (i = "function" === typeof t ? t.call(o, r, i) : t) || void 0 === i) break;
                return Lr({}, r, i);
            case 2:
                Aa = !0
        }
        return r
    }

    function tn(t, e, n, r, i) {
        if (Aa = !1, !(0 === e.expirationTime || e.expirationTime > i)) {
            e = Xe(t, e);
            for (var o = e.baseState, a = null, u = 0, l = e.firstUpdate, s = o; null !== l;) {
                var c = l.expirationTime;
                c > i ? (null === a && (a = l, o = s), (0 === u || u > c) && (u = c)) : (s = Je(t, e, l, s, n, r), null !== l.callback && (t.effectTag |= 32, l.nextEffect = null, null === e.lastEffect ? e.firstEffect = e.lastEffect = l : (e.lastEffect.nextEffect = l, e.lastEffect = l))), l = l.next
            }
            for (c = null, l = e.firstCapturedUpdate; null !== l;) {
                var f = l.expirationTime;
                f > i ? (null === c && (c = l, null === a && (o = s)), (0 === u || u > f) && (u = f)) : (s = Je(t, e, l, s, n, r), null !== l.callback && (t.effectTag |= 32, l.nextEffect = null, null === e.lastCapturedEffect ? e.firstCapturedEffect = e.lastCapturedEffect = l : (e.lastCapturedEffect.nextEffect = l, e.lastCapturedEffect = l))), l = l.next
            }
            null === a && (e.lastUpdate = null), null === c ? e.lastCapturedUpdate = null : t.effectTag |= 32, null === a && null === c && (o = s), e.baseState = o, e.firstUpdate = a, e.firstCapturedUpdate = c, e.expirationTime = u, t.memoizedState = s
        }
    }

    function en(t, e) {
        "function" !== typeof t && r("191", t), t.call(e)
    }

    function nn(t, e, n) {
        for (null !== e.firstCapturedUpdate && (null !== e.lastUpdate && (e.lastUpdate.next = e.firstCapturedUpdate, e.lastUpdate = e.lastCapturedUpdate), e.firstCapturedUpdate = e.lastCapturedUpdate = null), t = e.firstEffect, e.firstEffect = e.lastEffect = null; null !== t;) {
            var r = t.callback;
            null !== r && (t.callback = null, en(r, n)), t = t.nextEffect
        }
        for (t = e.firstCapturedEffect, e.firstCapturedEffect = e.lastCapturedEffect = null; null !== t;) e = t.callback, null !== e && (t.callback = null, en(e, n)), t = t.nextEffect
    }

    function rn(t, e) {
        return {
            value: t,
            source: e,
            stack: ut(e)
        }
    }

    function on(t) {
        var e = t.type._context;
        Ce(Fa, e._changedBits, t), Ce(Ra, e._currentValue, t), Ce(Ia, t, t), e._currentValue = t.pendingProps.value, e._changedBits = t.stateNode
    }

    function an(t) {
        var e = Fa.current,
            n = Ra.current;
        Se(Ia, t), Se(Ra, t), Se(Fa, t), t = t.type._context, t._currentValue = n, t._changedBits = e
    }

    function un(t) {
        return t === Na && r("174"), t
    }

    function ln(t, e) {
        Ce(ja, e, t), Ce(za, t, t), Ce(La, Na, t);
        var n = e.nodeType;
        switch (n) {
            case 9:
            case 11:
                e = (e = e.documentElement) ? e.namespaceURI : ae(null, "");
                break;
            default:
                n = 8 === n ? e.parentNode : e, e = n.namespaceURI || null, n = n.tagName, e = ae(e, n)
        }
        Se(La, t), Ce(La, e, t)
    }

    function sn(t) {
        Se(La, t), Se(za, t), Se(ja, t)
    }

    function cn(t) {
        za.current === t && (Se(La, t), Se(za, t))
    }

    function fn(t, e, n) {
        var r = t.memoizedState;
        e = e(n, r), r = null === e || void 0 === e ? r : Lr({}, r, e), t.memoizedState = r, null !== (t = t.updateQueue) && 0 === t.expirationTime && (t.baseState = r)
    }

    function dn(t, e, n, r, i, o) {
        var a = t.stateNode;
        return t = t.type, "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(n, i, o) : !t.prototype || !t.prototype.isPureReactComponent || (!Wr(e, n) || !Wr(r, i))
    }

    function hn(t, e, n, r) {
        t = e.state, "function" === typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, r), "function" === typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && Wa.enqueueReplaceState(e, e.state, null)
    }

    function pn(t, e) {
        var n = t.type,
            r = t.stateNode,
            i = t.pendingProps,
            o = Me(t);
        r.props = i, r.state = t.memoizedState, r.refs = Ur, r.context = Te(t, o), o = t.updateQueue, null !== o && (tn(t, o, i, r, e), r.state = t.memoizedState), o = t.type.getDerivedStateFromProps, "function" === typeof o && (fn(t, o, i), r.state = t.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof r.getSnapshotBeforeUpdate || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || (n = r.state, "function" === typeof r.componentWillMount && r.componentWillMount(), "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), n !== r.state && Wa.enqueueReplaceState(r, r.state, null), null !== (o = t.updateQueue) && (tn(t, o, i, r, e), r.state = t.memoizedState)), "function" === typeof r.componentDidMount && (t.effectTag |= 4)
    }

    function gn(t, e, n) {
        if (null !== (t = n.ref) && "function" !== typeof t && "object" !== typeof t) {
            if (n._owner) {
                n = n._owner;
                var i = void 0;
                n && (2 !== n.tag && r("110"), i = n.stateNode), i || r("147", t);
                var o = "" + t;
                return null !== e && null !== e.ref && "function" === typeof e.ref && e.ref._stringRef === o ? e.ref : (e = function(t) {
                    var e = i.refs === Ur ? i.refs = {} : i.refs;
                    null === t ? delete e[o] : e[o] = t
                }, e._stringRef = o, e)
            }
            "string" !== typeof t && r("148"), n._owner || r("254", t)
        }
        return t
    }

    function vn(t, e) {
        "textarea" !== t.type && r("31", "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, "")
    }

    function mn(t) {
        function e(e, n) {
            if (t) {
                var r = e.lastEffect;
                null !== r ? (r.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, r) {
            if (!t) return null;
            for (; null !== r;) e(n, r), r = r.sibling;
            return null
        }

        function i(t, e) {
            for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
            return t
        }

        function o(t, e, n) {
            return t = Ne(t, e, n), t.index = 0, t.sibling = null, t
        }

        function a(e, n, r) {
            return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index, r < n ? (e.effectTag = 2, n) : r) : (e.effectTag = 2, n) : n
        }

        function u(e) {
            return t && null === e.alternate && (e.effectTag = 2), e
        }

        function l(t, e, n, r) {
            return null === e || 6 !== e.tag ? (e = je(n, t.mode, r), e.return = t, e) : (e = o(e, n, r), e.return = t, e)
        }

        function s(t, e, n, r) {
            return null !== e && e.type === n.type ? (r = o(e, n.props, r), r.ref = gn(t, e, n), r.return = t, r) : (r = Le(n, t.mode, r), r.ref = gn(t, e, n), r.return = t, r)
        }

        function c(t, e, n, r) {
            return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? (e = We(n, t.mode, r), e.return = t, e) : (e = o(e, n.children || [], r), e.return = t, e)
        }

        function f(t, e, n, r, i) {
            return null === e || 10 !== e.tag ? (e = ze(n, t.mode, r, i), e.return = t, e) : (e = o(e, n, r), e.return = t, e)
        }

        function d(t, e, n) {
            if ("string" === typeof e || "number" === typeof e) return e = je("" + e, t.mode, n), e.return = t, e;
            if ("object" === typeof e && null !== e) {
                switch (e.$$typeof) {
                    case Bi:
                        return n = Le(e, t.mode, n), n.ref = gn(t, null, e), n.return = t, n;
                    case Ui:
                        return e = We(e, t.mode, n), e.return = t, e
                }
                if (Ba(e) || ot(e)) return e = ze(e, t.mode, n, null), e.return = t, e;
                vn(t, e)
            }
            return null
        }

        function h(t, e, n, r) {
            var i = null !== e ? e.key : null;
            if ("string" === typeof n || "number" === typeof n) return null !== i ? null : l(t, e, "" + n, r);
            if ("object" === typeof n && null !== n) {
                switch (n.$$typeof) {
                    case Bi:
                        return n.key === i ? n.type === Yi ? f(t, e, n.props.children, r, i) : s(t, e, n, r) : null;
                    case Ui:
                        return n.key === i ? c(t, e, n, r) : null
                }
                if (Ba(n) || ot(n)) return null !== i ? null : f(t, e, n, r, null);
                vn(t, n)
            }
            return null
        }

        function p(t, e, n, r, i) {
            if ("string" === typeof r || "number" === typeof r) return t = t.get(n) || null, l(e, t, "" + r, i);
            if ("object" === typeof r && null !== r) {
                switch (r.$$typeof) {
                    case Bi:
                        return t = t.get(null === r.key ? n : r.key) || null, r.type === Yi ? f(e, t, r.props.children, i, r.key) : s(e, t, r, i);
                    case Ui:
                        return t = t.get(null === r.key ? n : r.key) || null, c(e, t, r, i)
                }
                if (Ba(r) || ot(r)) return t = t.get(n) || null, f(e, t, r, i, null);
                vn(e, r)
            }
            return null
        }

        function g(r, o, u, l) {
            for (var s = null, c = null, f = o, g = o = 0, v = null; null !== f && g < u.length; g++) {
                f.index > g ? (v = f, f = null) : v = f.sibling;
                var m = h(r, f, u[g], l);
                if (null === m) {
                    null === f && (f = v);
                    break
                }
                t && f && null === m.alternate && e(r, f), o = a(m, o, g), null === c ? s = m : c.sibling = m, c = m, f = v
            }
            if (g === u.length) return n(r, f), s;
            if (null === f) {
                for (; g < u.length; g++)(f = d(r, u[g], l)) && (o = a(f, o, g), null === c ? s = f : c.sibling = f, c = f);
                return s
            }
            for (f = i(r, f); g < u.length; g++)(v = p(f, r, g, u[g], l)) && (t && null !== v.alternate && f.delete(null === v.key ? g : v.key), o = a(v, o, g), null === c ? s = v : c.sibling = v, c = v);
            return t && f.forEach(function(t) {
                return e(r, t)
            }), s
        }

        function v(o, u, l, s) {
            var c = ot(l);
            "function" !== typeof c && r("150"), null == (l = c.call(l)) && r("151");
            for (var f = c = null, g = u, v = u = 0, m = null, y = l.next(); null !== g && !y.done; v++, y = l.next()) {
                g.index > v ? (m = g, g = null) : m = g.sibling;
                var b = h(o, g, y.value, s);
                if (null === b) {
                    g || (g = m);
                    break
                }
                t && g && null === b.alternate && e(o, g), u = a(b, u, v), null === f ? c = b : f.sibling = b, f = b, g = m
            }
            if (y.done) return n(o, g), c;
            if (null === g) {
                for (; !y.done; v++, y = l.next()) null !== (y = d(o, y.value, s)) && (u = a(y, u, v), null === f ? c = y : f.sibling = y, f = y);
                return c
            }
            for (g = i(o, g); !y.done; v++, y = l.next()) null !== (y = p(g, o, v, y.value, s)) && (t && null !== y.alternate && g.delete(null === y.key ? v : y.key), u = a(y, u, v), null === f ? c = y : f.sibling = y, f = y);
            return t && g.forEach(function(t) {
                return e(o, t)
            }), c
        }
        return function(t, i, a, l) {
            var s = "object" === typeof a && null !== a && a.type === Yi && null === a.key;
            s && (a = a.props.children);
            var c = "object" === typeof a && null !== a;
            if (c) switch (a.$$typeof) {
                case Bi:
                    t: {
                        for (c = a.key, s = i; null !== s;) {
                            if (s.key === c) {
                                if (10 === s.tag ? a.type === Yi : s.type === a.type) {
                                    n(t, s.sibling), i = o(s, a.type === Yi ? a.props.children : a.props, l), i.ref = gn(t, s, a), i.return = t, t = i;
                                    break t
                                }
                                n(t, s);
                                break
                            }
                            e(t, s), s = s.sibling
                        }
                        a.type === Yi ? (i = ze(a.props.children, t.mode, l, a.key), i.return = t, t = i) : (l = Le(a, t.mode, l), l.ref = gn(t, i, a), l.return = t, t = l)
                    }
                    return u(t);
                case Ui:
                    t: {
                        for (s = a.key; null !== i;) {
                            if (i.key === s) {
                                if (4 === i.tag && i.stateNode.containerInfo === a.containerInfo && i.stateNode.implementation === a.implementation) {
                                    n(t, i.sibling), i = o(i, a.children || [], l), i.return = t, t = i;
                                    break t
                                }
                                n(t, i);
                                break
                            }
                            e(t, i), i = i.sibling
                        }
                        i = We(a, t.mode, l),
                        i.return = t,
                        t = i
                    }
                    return u(t)
            }
            if ("string" === typeof a || "number" === typeof a) return a = "" + a, null !== i && 6 === i.tag ? (n(t, i.sibling), i = o(i, a, l), i.return = t, t = i) : (n(t, i), i = je(a, t.mode, l), i.return = t, t = i), u(t);
            if (Ba(a)) return g(t, i, a, l);
            if (ot(a)) return v(t, i, a, l);
            if (c && vn(t, a), "undefined" === typeof a && !s) switch (t.tag) {
                case 2:
                case 1:
                    l = t.type, r("152", l.displayName || l.name || "Component")
            }
            return n(t, i)
        }
    }

    function yn(t, e) {
        var n = new Fe(5, null, null, 0);
        n.type = "DELETED", n.stateNode = e, n.return = t, n.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
    }

    function bn(t, e) {
        switch (t.tag) {
            case 5:
                var n = t.type;
                return null !== (e = 1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, !0);
            case 6:
                return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, !0);
            default:
                return !1
        }
    }

    function _n(t) {
        if (Ga) {
            var e = Va;
            if (e) {
                var n = e;
                if (!bn(t, e)) {
                    if (!(e = xe(n)) || !bn(t, e)) return t.effectTag |= 2, Ga = !1, void(Ha = t);
                    yn(Ha, n)
                }
                Ha = t, Va = we(e)
            } else t.effectTag |= 2, Ga = !1, Ha = t
        }
    }

    function xn(t) {
        for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag;) t = t.return;
        Ha = t
    }

    function wn(t) {
        if (t !== Ha) return !1;
        if (!Ga) return xn(t), Ga = !0, !1;
        var e = t.type;
        if (5 !== t.tag || "head" !== e && "body" !== e && !_e(e, t.memoizedProps))
            for (e = Va; e;) yn(t, e), e = xe(e);
        return xn(t), Va = Ha ? xe(t.stateNode) : null, !0
    }

    function kn() {
        Va = Ha = null, Ga = !1
    }

    function Sn(t, e, n) {
        Cn(t, e, n, e.expirationTime)
    }

    function Cn(t, e, n, r) {
        e.child = null === t ? Ya(e, null, n, r) : Ua(e, t.child, n, r)
    }

    function Mn(t, e) {
        var n = e.ref;
        (null === t && null !== n || null !== t && t.ref !== n) && (e.effectTag |= 128)
    }

    function Tn(t, e, n, r, i) {
        Mn(t, e);
        var o = 0 !== (64 & e.effectTag);
        if (!n && !o) return r && Re(e, !1), En(t, e);
        n = e.stateNode, ji.current = e;
        var a = o ? null : n.render();
        return e.effectTag |= 1, o && (Cn(t, e, null, i), e.child = null), Cn(t, e, a, i), e.memoizedState = n.state, e.memoizedProps = n.props, r && Re(e, !0), e.child
    }

    function Dn(t) {
        var e = t.stateNode;
        e.pendingContext ? Ee(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Ee(t, e.context, !1), ln(t, e.containerInfo)
    }

    function Pn(t, e, n, r) {
        var i = t.child;
        for (null !== i && (i.return = t); null !== i;) {
            switch (i.tag) {
                case 12:
                    var o = 0 | i.stateNode;
                    if (i.type === e && 0 !== (o & n)) {
                        for (o = i; null !== o;) {
                            var a = o.alternate;
                            if (0 === o.expirationTime || o.expirationTime > r) o.expirationTime = r, null !== a && (0 === a.expirationTime || a.expirationTime > r) && (a.expirationTime = r);
                            else {
                                if (null === a || !(0 === a.expirationTime || a.expirationTime > r)) break;
                                a.expirationTime = r
                            }
                            o = o.return
                        }
                        o = null
                    } else o = i.child;
                    break;
                case 13:
                    o = i.type === t.type ? null : i.child;
                    break;
                default:
                    o = i.child
            }
            if (null !== o) o.return = i;
            else
                for (o = i; null !== o;) {
                    if (o === t) {
                        o = null;
                        break
                    }
                    if (null !== (i = o.sibling)) {
                        i.return = o.return, o = i;
                        break
                    }
                    o = o.return
                }
            i = o
        }
    }

    function On(t, e, n) {
        var r = e.type._context,
            i = e.pendingProps,
            o = e.memoizedProps,
            a = !0;
        if (Da.current) a = !1;
        else if (o === i) return e.stateNode = 0, on(e), En(t, e);
        var u = i.value;
        if (e.memoizedProps = i, null === o) u = 1073741823;
        else if (o.value === i.value) {
            if (o.children === i.children && a) return e.stateNode = 0, on(e), En(t, e);
            u = 0
        } else {
            var l = o.value;
            if (l === u && (0 !== l || 1 / l === 1 / u) || l !== l && u !== u) {
                if (o.children === i.children && a) return e.stateNode = 0, on(e), En(t, e);
                u = 0
            } else if (u = "function" === typeof r._calculateChangedBits ? r._calculateChangedBits(l, u) : 1073741823, 0 === (u |= 0)) {
                if (o.children === i.children && a) return e.stateNode = 0, on(e), En(t, e)
            } else Pn(e, r, u, n)
        }
        return e.stateNode = u, on(e), Sn(t, e, i.children), e.child
    }

    function En(t, e) {
        if (null !== t && e.child !== t.child && r("153"), null !== e.child) {
            t = e.child;
            var n = Ne(t, t.pendingProps, t.expirationTime);
            for (e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, n = n.sibling = Ne(t, t.pendingProps, t.expirationTime), n.return = e;
            n.sibling = null
        }
        return e.child
    }

    function An(t, e, n) {
        if (0 === e.expirationTime || e.expirationTime > n) {
            switch (e.tag) {
                case 3:
                    Dn(e);
                    break;
                case 2:
                    Ie(e);
                    break;
                case 4:
                    ln(e, e.stateNode.containerInfo);
                    break;
                case 13:
                    on(e)
            }
            return null
        }
        switch (e.tag) {
            case 0:
                null !== t && r("155");
                var i = e.type,
                    o = e.pendingProps,
                    a = Me(e);
                return a = Te(e, a), i = i(o, a), e.effectTag |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof ? (a = e.type, e.tag = 2, e.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, a = a.getDerivedStateFromProps, "function" === typeof a && fn(e, a, o), o = Ie(e), i.updater = Wa, e.stateNode = i, i._reactInternalFiber = e, pn(e, n), t = Tn(t, e, !0, o, n)) : (e.tag = 1, Sn(t, e, i), e.memoizedProps = o, t = e.child), t;
            case 1:
                return o = e.type, n = e.pendingProps, Da.current || e.memoizedProps !== n ? (i = Me(e), i = Te(e, i), o = o(n, i), e.effectTag |= 1, Sn(t, e, o), e.memoizedProps = n, t = e.child) : t = En(t, e), t;
            case 2:
                if (o = Ie(e), null === t)
                    if (null === e.stateNode) {
                        var u = e.pendingProps,
                            l = e.type;
                        i = Me(e);
                        var s = 2 === e.tag && null != e.type.contextTypes;
                        a = s ? Te(e, i) : Ur, u = new l(u, a), e.memoizedState = null !== u.state && void 0 !== u.state ? u.state : null, u.updater = Wa, e.stateNode = u, u._reactInternalFiber = e, s && (s = e.stateNode, s.__reactInternalMemoizedUnmaskedChildContext = i, s.__reactInternalMemoizedMaskedChildContext = a), pn(e, n), i = !0
                    } else {
                        l = e.type, i = e.stateNode, s = e.memoizedProps, a = e.pendingProps, i.props = s;
                        var c = i.context;
                        u = Me(e), u = Te(e, u);
                        var f = l.getDerivedStateFromProps;
                        (l = "function" === typeof f || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (s !== a || c !== u) && hn(e, i, a, u), Aa = !1;
                        var d = e.memoizedState;
                        c = i.state = d;
                        var h = e.updateQueue;
                        null !== h && (tn(e, h, a, i, n), c = e.memoizedState), s !== a || d !== c || Da.current || Aa ? ("function" === typeof f && (fn(e, f, a), c = e.memoizedState), (s = Aa || dn(e, s, a, d, c, u)) ? (l || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (e.effectTag |= 4)) : ("function" === typeof i.componentDidMount && (e.effectTag |= 4), e.memoizedProps = a, e.memoizedState = c), i.props = a, i.state = c, i.context = u, i = s) : ("function" === typeof i.componentDidMount && (e.effectTag |= 4), i = !1)
                    }
                else l = e.type, i = e.stateNode, a = e.memoizedProps, s = e.pendingProps, i.props = a, c = i.context, u = Me(e), u = Te(e, u), f = l.getDerivedStateFromProps, (l = "function" === typeof f || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (a !== s || c !== u) && hn(e, i, s, u), Aa = !1, c = e.memoizedState, d = i.state = c, h = e.updateQueue, null !== h && (tn(e, h, s, i, n), d = e.memoizedState), a !== s || c !== d || Da.current || Aa ? ("function" === typeof f && (fn(e, f, s), d = e.memoizedState), (f = Aa || dn(e, a, s, c, d, u)) ? (l || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(s, d, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(s, d, u)), "function" === typeof i.componentDidUpdate && (e.effectTag |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (e.effectTag |= 256)) : ("function" !== typeof i.componentDidUpdate || a === t.memoizedProps && c === t.memoizedState || (e.effectTag |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || a === t.memoizedProps && c === t.memoizedState || (e.effectTag |= 256), e.memoizedProps = s, e.memoizedState = d), i.props = s, i.state = d, i.context = u, i = f) : ("function" !== typeof i.componentDidUpdate || a === t.memoizedProps && c === t.memoizedState || (e.effectTag |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || a === t.memoizedProps && c === t.memoizedState || (e.effectTag |= 256), i = !1);
                return Tn(t, e, i, o, n);
            case 3:
                return Dn(e), o = e.updateQueue, null !== o ? (i = e.memoizedState, i = null !== i ? i.element : null, tn(e, o, e.pendingProps, null, n), (o = e.memoizedState.element) === i ? (kn(), t = En(t, e)) : (i = e.stateNode, (i = (null === t || null === t.child) && i.hydrate) && (Va = we(e.stateNode.containerInfo), Ha = e, i = Ga = !0), i ? (e.effectTag |= 2, e.child = Ya(e, null, o, n)) : (kn(), Sn(t, e, o)), t = e.child)) : (kn(), t = En(t, e)), t;
            case 5:
                return un(ja.current), o = un(La.current), i = ae(o, e.type), o !== i && (Ce(za, e, e), Ce(La, i, e)), null === t && _n(e), o = e.type, s = e.memoizedProps, i = e.pendingProps, a = null !== t ? t.memoizedProps : null, Da.current || s !== i || ((s = 1 & e.mode && !!i.hidden) && (e.expirationTime = 1073741823), s && 1073741823 === n) ? (s = i.children, _e(o, i) ? s = null : a && _e(o, a) && (e.effectTag |= 16), Mn(t, e), 1073741823 !== n && 1 & e.mode && i.hidden ? (e.expirationTime = 1073741823, e.memoizedProps = i, t = null) : (Sn(t, e, s), e.memoizedProps = i, t = e.child)) : t = En(t, e), t;
            case 6:
                return null === t && _n(e), e.memoizedProps = e.pendingProps, null;
            case 16:
                return null;
            case 4:
                return ln(e, e.stateNode.containerInfo), o = e.pendingProps, Da.current || e.memoizedProps !== o ? (null === t ? e.child = Ua(e, null, o, n) : Sn(t, e, o), e.memoizedProps = o, t = e.child) : t = En(t, e), t;
            case 14:
                return o = e.type.render, n = e.pendingProps, i = e.ref, Da.current || e.memoizedProps !== n || i !== (null !== t ? t.ref : null) ? (o = o(n, i), Sn(t, e, o), e.memoizedProps = n, t = e.child) : t = En(t, e), t;
            case 10:
                return n = e.pendingProps, Da.current || e.memoizedProps !== n ? (Sn(t, e, n), e.memoizedProps = n, t = e.child) : t = En(t, e), t;
            case 11:
                return n = e.pendingProps.children, Da.current || null !== n && e.memoizedProps !== n ? (Sn(t, e, n), e.memoizedProps = n, t = e.child) : t = En(t, e), t;
            case 15:
                return n = e.pendingProps, e.memoizedProps === n ? t = En(t, e) : (Sn(t, e, n.children), e.memoizedProps = n, t = e.child), t;
            case 13:
                return On(t, e, n);
            case 12:
                t: if (i = e.type, a = e.pendingProps, s = e.memoizedProps, o = i._currentValue, u = i._changedBits, Da.current || 0 !== u || s !== a) {
                    if (e.memoizedProps = a, l = a.unstable_observedBits, void 0 !== l && null !== l || (l = 1073741823), e.stateNode = l, 0 !== (u & l)) Pn(e, i, u, n);
                    else if (s === a) {
                        t = En(t, e);
                        break t
                    }
                    n = a.children, n = n(o), e.effectTag |= 1, Sn(t, e, n), t = e.child
                } else t = En(t, e);
                return t;
            default:
                r("156")
        }
    }

    function In(t) {
        t.effectTag |= 4
    }

    function Rn(t, e) {
        var n = e.pendingProps;
        switch (e.tag) {
            case 1:
                return null;
            case 2:
                return Pe(e), null;
            case 3:
                sn(e), Oe(e);
                var i = e.stateNode;
                return i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), null !== t && null !== t.child || (wn(e), e.effectTag &= -3), qa(e), null;
            case 5:
                cn(e), i = un(ja.current);
                var o = e.type;
                if (null !== t && null != e.stateNode) {
                    var a = t.memoizedProps,
                        u = e.stateNode,
                        l = un(La.current);
                    u = ge(u, o, a, n, i), Ka(t, e, u, o, a, n, i, l), t.ref !== e.ref && (e.effectTag |= 128)
                } else {
                    if (!n) return null === e.stateNode && r("166"), null;
                    if (t = un(La.current), wn(e)) n = e.stateNode, o = e.type, a = e.memoizedProps, n[ii] = e, n[oi] = a, i = me(n, o, a, t, i), e.updateQueue = i, null !== i && In(e);
                    else {
                        t = de(o, n, i, t), t[ii] = e, t[oi] = n;
                        t: for (a = e.child; null !== a;) {
                            if (5 === a.tag || 6 === a.tag) t.appendChild(a.stateNode);
                            else if (4 !== a.tag && null !== a.child) {
                                a.child.return = a, a = a.child;
                                continue
                            }
                            if (a === e) break;
                            for (; null === a.sibling;) {
                                if (null === a.return || a.return === e) break t;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                        pe(t, o, n, i), be(o, n) && In(e), e.stateNode = t
                    }
                    null !== e.ref && (e.effectTag |= 128)
                }
                return null;
            case 6:
                if (t && null != e.stateNode) $a(t, e, t.memoizedProps, n);
                else {
                    if ("string" !== typeof n) return null === e.stateNode && r("166"), null;
                    i = un(ja.current), un(La.current), wn(e) ? (i = e.stateNode, n = e.memoizedProps, i[ii] = e, ye(i, n) && In(e)) : (i = he(n, i), i[ii] = e, e.stateNode = i)
                }
                return null;
            case 14:
            case 16:
            case 10:
            case 11:
            case 15:
                return null;
            case 4:
                return sn(e), qa(e), null;
            case 13:
                return an(e), null;
            case 12:
                return null;
            case 0:
                r("167");
            default:
                r("156")
        }
    }

    function Fn(t, e) {
        var n = e.source;
        null === e.stack && null !== n && ut(n), null !== n && at(n), e = e.value, null !== t && 2 === t.tag && at(t);
        try {
            e && e.suppressReactErrorLogging || console.error(e)
        } catch (t) {
            t && t.suppressReactErrorLogging || console.error(t)
        }
    }

    function Nn(t) {
        var e = t.ref;
        if (null !== e)
            if ("function" === typeof e) try {
                e(null)
            } catch (e) {
                Zn(t, e)
            } else e.current = null
    }

    function Ln(t) {
        switch ("function" === typeof Ve && Ve(t), t.tag) {
            case 2:
                Nn(t);
                var e = t.stateNode;
                if ("function" === typeof e.componentWillUnmount) try {
                    e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                } catch (e) {
                    Zn(t, e)
                }
                break;
            case 5:
                Nn(t);
                break;
            case 4:
                Wn(t)
        }
    }

    function zn(t) {
        return 5 === t.tag || 3 === t.tag || 4 === t.tag
    }

    function jn(t) {
        t: {
            for (var e = t.return; null !== e;) {
                if (zn(e)) {
                    var n = e;
                    break t
                }
                e = e.return
            }
            r("160"),
            n = void 0
        }
        var i = e = void 0;
        switch (n.tag) {
            case 5:
                e = n.stateNode, i = !1;
                break;
            case 3:
            case 4:
                e = n.stateNode.containerInfo, i = !0;
                break;
            default:
                r("161")
        }
        16 & n.effectTag && (ue(e, ""), n.effectTag &= -17);t: e: for (n = t;;) {
            for (; null === n.sibling;) {
                if (null === n.return || zn(n.return)) {
                    n = null;
                    break t
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag;) {
                if (2 & n.effectTag) continue e;
                if (null === n.child || 4 === n.tag) continue e;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break t
            }
        }
        for (var o = t;;) {
            if (5 === o.tag || 6 === o.tag)
                if (n)
                    if (i) {
                        var a = e,
                            u = o.stateNode,
                            l = n;
                        8 === a.nodeType ? a.parentNode.insertBefore(u, l) : a.insertBefore(u, l)
                    } else e.insertBefore(o.stateNode, n);
            else i ? (a = e, u = o.stateNode, 8 === a.nodeType ? a.parentNode.insertBefore(u, a) : a.appendChild(u)) : e.appendChild(o.stateNode);
            else if (4 !== o.tag && null !== o.child) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === t) break;
            for (; null === o.sibling;) {
                if (null === o.return || o.return === t) return;
                o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }

    function Wn(t) {
        for (var e = t, n = !1, i = void 0, o = void 0;;) {
            if (!n) {
                n = e.return;
                t: for (;;) {
                    switch (null === n && r("160"), n.tag) {
                        case 5:
                            i = n.stateNode, o = !1;
                            break t;
                        case 3:
                        case 4:
                            i = n.stateNode.containerInfo, o = !0;
                            break t
                    }
                    n = n.return
                }
                n = !0
            }
            if (5 === e.tag || 6 === e.tag) {
                t: for (var a = e, u = a;;)
                    if (Ln(u), null !== u.child && 4 !== u.tag) u.child.return = u, u = u.child;
                    else {
                        if (u === a) break;
                        for (; null === u.sibling;) {
                            if (null === u.return || u.return === a) break t;
                            u = u.return
                        }
                        u.sibling.return = u.return, u = u.sibling
                    }o ? (a = i, u = e.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(u) : a.removeChild(u)) : i.removeChild(e.stateNode)
            }
            else if (4 === e.tag ? i = e.stateNode.containerInfo : Ln(e), null !== e.child) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) return;
                e = e.return, 4 === e.tag && (n = !1)
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }

    function Bn(t, e) {
        switch (e.tag) {
            case 2:
                break;
            case 5:
                var n = e.stateNode;
                if (null != n) {
                    var i = e.memoizedProps;
                    t = null !== t ? t.memoizedProps : i;
                    var o = e.type,
                        a = e.updateQueue;
                    e.updateQueue = null, null !== a && (n[oi] = i, ve(n, a, o, t, i))
                }
                break;
            case 6:
                null === e.stateNode && r("162"), e.stateNode.nodeValue = e.memoizedProps;
                break;
            case 3:
            case 15:
            case 16:
                break;
            default:
                r("163")
        }
    }

    function Un(t, e, n) {
        n = Ke(n), n.tag = 3, n.payload = {
            element: null
        };
        var r = e.value;
        return n.callback = function() {
            pr(r), Fn(t, e)
        }, n
    }

    function Yn(t, e, n) {
        n = Ke(n), n.tag = 3;
        var r = t.stateNode;
        return null !== r && "function" === typeof r.componentDidCatch && (n.callback = function() {
            null === cu ? cu = new Set([this]) : cu.add(this);
            var n = e.value,
                r = e.stack;
            Fn(t, e), this.componentDidCatch(n, {
                componentStack: null !== r ? r : ""
            })
        }), n
    }

    function Hn(t, e, n, r, i, o) {
        n.effectTag |= 512, n.firstEffect = n.lastEffect = null, r = rn(r, n), t = e;
        do {
            switch (t.tag) {
                case 3:
                    return t.effectTag |= 1024, r = Un(t, r, o), void Qe(t, r, o);
                case 2:
                    if (e = r, n = t.stateNode, 0 === (64 & t.effectTag) && null !== n && "function" === typeof n.componentDidCatch && (null === cu || !cu.has(n))) return t.effectTag |= 1024, r = Yn(t, e, o), void Qe(t, r, o)
            }
            t = t.return
        } while (null !== t)
    }

    function Vn(t) {
        switch (t.tag) {
            case 2:
                Pe(t);
                var e = t.effectTag;
                return 1024 & e ? (t.effectTag = -1025 & e | 64, t) : null;
            case 3:
                return sn(t), Oe(t), e = t.effectTag, 1024 & e ? (t.effectTag = -1025 & e | 64, t) : null;
            case 5:
                return cn(t), null;
            case 16:
                return e = t.effectTag, 1024 & e ? (t.effectTag = -1025 & e | 64, t) : null;
            case 4:
                return sn(t), null;
            case 13:
                return an(t), null;
            default:
                return null
        }
    }

    function Gn() {
        if (null !== nu)
            for (var t = nu.return; null !== t;) {
                var e = t;
                switch (e.tag) {
                    case 2:
                        Pe(e);
                        break;
                    case 3:
                        sn(e), Oe(e);
                        break;
                    case 5:
                        cn(e);
                        break;
                    case 4:
                        sn(e);
                        break;
                    case 13:
                        an(e)
                }
                t = t.return
            }
        ru = null, iu = 0, ou = -1, au = !1, nu = null, su = !1
    }

    function qn(t) {
        for (;;) {
            var e = t.alternate,
                n = t.return,
                r = t.sibling;
            if (0 === (512 & t.effectTag)) {
                e = Rn(e, t, iu);
                var i = t;
                if (1073741823 === iu || 1073741823 !== i.expirationTime) {
                    var o = 0;
                    switch (i.tag) {
                        case 3:
                        case 2:
                            var a = i.updateQueue;
                            null !== a && (o = a.expirationTime)
                    }
                    for (a = i.child; null !== a;) 0 !== a.expirationTime && (0 === o || o > a.expirationTime) && (o = a.expirationTime), a = a.sibling;
                    i.expirationTime = o
                }
                if (null !== e) return e;
                if (null !== n && 0 === (512 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = t.firstEffect), n.lastEffect = t.lastEffect), 1 < t.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = t : n.firstEffect = t, n.lastEffect = t)), null !== r) return r;
                if (null === n) {
                    su = !0;
                    break
                }
                t = n
            } else {
                if (null !== (t = Vn(t, au, iu))) return t.effectTag &= 511, t;
                if (null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 512), null !== r) return r;
                if (null === n) break;
                t = n
            }
        }
        return null
    }

    function Kn(t) {
        var e = An(t.alternate, t, iu);
        return null === e && (e = qn(t)), ji.current = null, e
    }

    function $n(t, e, n) {
        eu && r("243"), eu = !0, e === iu && t === ru && null !== nu || (Gn(), ru = t, iu = e, ou = -1, nu = Ne(ru.current, null, iu), t.pendingCommitExpirationTime = 0);
        var i = !1;
        for (au = !n || iu <= Qa;;) {
            try {
                if (n)
                    for (; null !== nu && !hr();) nu = Kn(nu);
                else
                    for (; null !== nu;) nu = Kn(nu)
            } catch (e) {
                if (null === nu) i = !0, pr(e);
                else {
                    null === nu && r("271"), n = nu;
                    var o = n.return;
                    if (null === o) {
                        i = !0, pr(e);
                        break
                    }
                    Hn(t, o, n, e, au, iu, Xa), nu = qn(n)
                }
            }
            break
        }
        if (eu = !1, i) return null;
        if (null === nu) {
            if (su) return t.pendingCommitExpirationTime = e, t.current.alternate;
            au && r("262"), 0 <= ou && setTimeout(function() {
                var e = t.current.expirationTime;
                0 !== e && (0 === t.remainingExpirationTime || t.remainingExpirationTime < e) && ir(t, e)
            }, ou), gr(t.current.expirationTime)
        }
        return null
    }

    function Zn(t, e) {
        var n;
        t: {
            for (eu && !lu && r("263"), n = t.return; null !== n;) {
                switch (n.tag) {
                    case 2:
                        var i = n.stateNode;
                        if ("function" === typeof n.type.getDerivedStateFromCatch || "function" === typeof i.componentDidCatch && (null === cu || !cu.has(i))) {
                            t = rn(e, t), t = Yn(n, t, 1), Ze(n, t, 1), Jn(n, 1), n = void 0;
                            break t
                        }
                        break;
                    case 3:
                        t = rn(e, t), t = Un(n, t, 1), Ze(n, t, 1), Jn(n, 1), n = void 0;
                        break t
                }
                n = n.return
            }
            3 === t.tag && (n = rn(e, t), n = Un(t, n, 1), Ze(t, n, 1), Jn(t, 1)),
            n = void 0
        }
        return n
    }

    function Qn() {
        var t = 2 + 25 * (1 + ((tr() - 2 + 500) / 25 | 0));
        return t <= Ja && (t = Ja + 1), Ja = t
    }

    function Xn(t, e) {
        return t = 0 !== tu ? tu : eu ? lu ? 1 : iu : 1 & e.mode ? Cu ? 2 + 10 * (1 + ((t - 2 + 15) / 10 | 0)) : 2 + 25 * (1 + ((t - 2 + 500) / 25 | 0)) : 1, Cu && (0 === yu || t > yu) && (yu = t), t
    }

    function Jn(t, e) {
        for (; null !== t;) {
            if ((0 === t.expirationTime || t.expirationTime > e) && (t.expirationTime = e), null !== t.alternate && (0 === t.alternate.expirationTime || t.alternate.expirationTime > e) && (t.alternate.expirationTime = e), null === t.return) {
                if (3 !== t.tag) break;
                var n = t.stateNode;
                !eu && 0 !== iu && e < iu && Gn();
                var i = n.current.expirationTime;
                eu && !lu && ru === n || ir(n, i), Du > Tu && r("185")
            }
            t = t.return
        }
    }

    function tr() {
        return Xa = wa() - Za, Qa = 2 + (Xa / 10 | 0)
    }

    function er(t) {
        var e = tu;
        tu = 2 + 25 * (1 + ((tr() - 2 + 500) / 25 | 0));
        try {
            return t()
        } finally {
            tu = e
        }
    }

    function nr(t, e, n, r, i) {
        var o = tu;
        tu = 1;
        try {
            return t(e, n, r, i)
        } finally {
            tu = o
        }
    }

    function rr(t) {
        if (0 !== hu) {
            if (t > hu) return;
            null !== pu && Sa(pu)
        }
        var e = wa() - Za;
        hu = t, pu = ka(ar, {
            timeout: 10 * (t - 2) - e
        })
    }

    function ir(t, e) {
        if (null === t.nextScheduledRoot) t.remainingExpirationTime = e, null === du ? (fu = du = t, t.nextScheduledRoot = t) : (du = du.nextScheduledRoot = t, du.nextScheduledRoot = fu);
        else {
            var n = t.remainingExpirationTime;
            (0 === n || e < n) && (t.remainingExpirationTime = e)
        }
        gu || (ku ? Su && (vu = t, mu = 1, fr(t, 1, !1)) : 1 === e ? ur() : rr(e))
    }

    function or() {
        var t = 0,
            e = null;
        if (null !== du)
            for (var n = du, i = fu; null !== i;) {
                var o = i.remainingExpirationTime;
                if (0 === o) {
                    if ((null === n || null === du) && r("244"), i === i.nextScheduledRoot) {
                        fu = du = i.nextScheduledRoot = null;
                        break
                    }
                    if (i === fu) fu = o = i.nextScheduledRoot, du.nextScheduledRoot = o, i.nextScheduledRoot = null;
                    else {
                        if (i === du) {
                            du = n, du.nextScheduledRoot = fu, i.nextScheduledRoot = null;
                            break
                        }
                        n.nextScheduledRoot = i.nextScheduledRoot, i.nextScheduledRoot = null
                    }
                    i = n.nextScheduledRoot
                } else {
                    if ((0 === t || o < t) && (t = o, e = i), i === du) break;
                    n = i, i = i.nextScheduledRoot
                }
            }
        n = vu, null !== n && n === e && 1 === t ? Du++ : Du = 0, vu = e, mu = t
    }

    function ar(t) {
        lr(0, !0, t)
    }

    function ur() {
        lr(1, !1, null)
    }

    function lr(t, e, n) {
        if (wu = n, or(), e)
            for (; null !== vu && 0 !== mu && (0 === t || t >= mu) && (!bu || tr() >= mu);) tr(), fr(vu, mu, !bu), or();
        else
            for (; null !== vu && 0 !== mu && (0 === t || t >= mu);) fr(vu, mu, !1), or();
        null !== wu && (hu = 0, pu = null), 0 !== mu && rr(mu), wu = null, bu = !1, cr()
    }

    function sr(t, e) {
        gu && r("253"), vu = t, mu = e, fr(t, e, !1), ur(), cr()
    }

    function cr() {
        if (Du = 0, null !== Mu) {
            var t = Mu;
            Mu = null;
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                try {
                    n._onComplete()
                } catch (t) {
                    _u || (_u = !0, xu = t)
                }
            }
        }
        if (_u) throw t = xu, xu = null, _u = !1, t
    }

    function fr(t, e, n) {
        gu && r("245"), gu = !0, n ? (n = t.finishedWork, null !== n ? dr(t, n, e) : null !== (n = $n(t, e, !0)) && (hr() ? t.finishedWork = n : dr(t, n, e))) : (n = t.finishedWork, null !== n ? dr(t, n, e) : null !== (n = $n(t, e, !1)) && dr(t, n, e)), gu = !1
    }

    function dr(t, e, n) {
        var i = t.firstBatch;
        if (null !== i && i._expirationTime <= n && (null === Mu ? Mu = [i] : Mu.push(i), i._defer)) return t.finishedWork = e, void(t.remainingExpirationTime = 0);
        if (t.finishedWork = null, lu = eu = !0, n = e.stateNode, n.current === e && r("177"), i = n.pendingCommitExpirationTime, 0 === i && r("261"), n.pendingCommitExpirationTime = 0, tr(), ji.current = null, 1 < e.effectTag)
            if (null !== e.lastEffect) {
                e.lastEffect.nextEffect = e;
                var o = e.firstEffect
            } else o = e;
        else o = e.firstEffect;
        _a = Ao;
        var a = jr();
        if ($t(a)) {
            if ("selectionStart" in a) var u = {
                start: a.selectionStart,
                end: a.selectionEnd
            };
            else t: {
                var l = window.getSelection && window.getSelection();
                if (l && 0 !== l.rangeCount) {
                    u = l.anchorNode;
                    var s = l.anchorOffset,
                        c = l.focusNode;
                    l = l.focusOffset;
                    try {
                        u.nodeType, c.nodeType
                    } catch (t) {
                        u = null;
                        break t
                    }
                    var f = 0,
                        d = -1,
                        h = -1,
                        p = 0,
                        g = 0,
                        v = a,
                        m = null;
                    e: for (;;) {
                        for (var y; v !== u || 0 !== s && 3 !== v.nodeType || (d = f + s), v !== c || 0 !== l && 3 !== v.nodeType || (h = f + l), 3 === v.nodeType && (f += v.nodeValue.length), null !== (y = v.firstChild);) m = v, v = y;
                        for (;;) {
                            if (v === a) break e;
                            if (m === u && ++p === s && (d = f), m === c && ++g === l && (h = f), null !== (y = v.nextSibling)) break;
                            v = m, m = v.parentNode
                        }
                        v = y
                    }
                    u = -1 === d || -1 === h ? null : {
                        start: d,
                        end: h
                    }
                } else u = null
            }
            u = u || {
                start: 0,
                end: 0
            }
        } else u = null;
        for (xa = {
                focusedElem: a,
                selectionRange: u
            }, Bt(!1), uu = o; null !== uu;) {
            a = !1, u = void 0;
            try {
                for (; null !== uu;) {
                    if (256 & uu.effectTag) {
                        var b = uu.alternate;
                        switch (s = uu, s.tag) {
                            case 2:
                                if (256 & s.effectTag && null !== b) {
                                    var _ = b.memoizedProps,
                                        x = b.memoizedState,
                                        w = s.stateNode;
                                    w.props = s.memoizedProps, w.state = s.memoizedState;
                                    var k = w.getSnapshotBeforeUpdate(_, x);
                                    w.__reactInternalSnapshotBeforeUpdate = k
                                }
                                break;
                            case 3:
                            case 5:
                            case 6:
                            case 4:
                                break;
                            default:
                                r("163")
                        }
                    }
                    uu = uu.nextEffect
                }
            } catch (t) {
                a = !0, u = t
            }
            a && (null === uu && r("178"), Zn(uu, u), null !== uu && (uu = uu.nextEffect))
        }
        for (uu = o; null !== uu;) {
            b = !1, _ = void 0;
            try {
                for (; null !== uu;) {
                    var S = uu.effectTag;
                    if (16 & S && ue(uu.stateNode, ""), 128 & S) {
                        var C = uu.alternate;
                        if (null !== C) {
                            var M = C.ref;
                            null !== M && ("function" === typeof M ? M(null) : M.current = null)
                        }
                    }
                    switch (14 & S) {
                        case 2:
                            jn(uu), uu.effectTag &= -3;
                            break;
                        case 6:
                            jn(uu), uu.effectTag &= -3, Bn(uu.alternate, uu);
                            break;
                        case 4:
                            Bn(uu.alternate, uu);
                            break;
                        case 8:
                            x = uu, Wn(x), x.return = null, x.child = null, x.alternate && (x.alternate.child = null, x.alternate.return = null)
                    }
                    uu = uu.nextEffect
                }
            } catch (t) {
                b = !0, _ = t
            }
            b && (null === uu && r("178"), Zn(uu, _), null !== uu && (uu = uu.nextEffect))
        }
        if (M = xa, C = jr(), S = M.focusedElem, b = M.selectionRange, C !== S && Br(document.documentElement, S)) {
            null !== b && $t(S) && (C = b.start, M = b.end, void 0 === M && (M = C), "selectionStart" in S ? (S.selectionStart = C, S.selectionEnd = Math.min(M, S.value.length)) : window.getSelection && (C = window.getSelection(), _ = S[I()].length, M = Math.min(b.start, _), b = void 0 === b.end ? M : Math.min(b.end, _), !C.extend && M > b && (_ = b, b = M, M = _), _ = Kt(S, M), x = Kt(S, b), _ && x && (1 !== C.rangeCount || C.anchorNode !== _.node || C.anchorOffset !== _.offset || C.focusNode !== x.node || C.focusOffset !== x.offset) && (w = document.createRange(), w.setStart(_.node, _.offset), C.removeAllRanges(), M > b ? (C.addRange(w), C.extend(x.node, x.offset)) : (w.setEnd(x.node, x.offset), C.addRange(w))))), C = [];
            for (M = S; M = M.parentNode;) 1 === M.nodeType && C.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
            });
            for ("function" === typeof S.focus && S.focus(), S = 0; S < C.length; S++) M = C[S], M.element.scrollLeft = M.left, M.element.scrollTop = M.top
        }
        for (xa = null, Bt(_a), _a = null, n.current = e, uu = o; null !== uu;) {
            o = !1, S = void 0;
            try {
                for (C = i; null !== uu;) {
                    var T = uu.effectTag;
                    if (36 & T) {
                        var D = uu.alternate;
                        switch (M = uu, b = C, M.tag) {
                            case 2:
                                var P = M.stateNode;
                                if (4 & M.effectTag)
                                    if (null === D) P.props = M.memoizedProps, P.state = M.memoizedState, P.componentDidMount();
                                    else {
                                        var O = D.memoizedProps,
                                            E = D.memoizedState;
                                        P.props = M.memoizedProps, P.state = M.memoizedState, P.componentDidUpdate(O, E, P.__reactInternalSnapshotBeforeUpdate)
                                    }
                                var A = M.updateQueue;
                                null !== A && (P.props = M.memoizedProps, P.state = M.memoizedState, nn(M, A, P, b));
                                break;
                            case 3:
                                var R = M.updateQueue;
                                if (null !== R) {
                                    if (_ = null, null !== M.child) switch (M.child.tag) {
                                        case 5:
                                            _ = M.child.stateNode;
                                            break;
                                        case 2:
                                            _ = M.child.stateNode
                                    }
                                    nn(M, R, _, b)
                                }
                                break;
                            case 5:
                                var F = M.stateNode;
                                null === D && 4 & M.effectTag && be(M.type, M.memoizedProps) && F.focus();
                                break;
                            case 6:
                            case 4:
                            case 15:
                            case 16:
                                break;
                            default:
                                r("163")
                        }
                    }
                    if (128 & T) {
                        M = void 0;
                        var N = uu.ref;
                        if (null !== N) {
                            var L = uu.stateNode;
                            switch (uu.tag) {
                                case 5:
                                    M = L;
                                    break;
                                default:
                                    M = L
                            }
                            "function" === typeof N ? N(M) : N.current = M
                        }
                    }
                    var z = uu.nextEffect;
                    uu.nextEffect = null, uu = z
                }
            } catch (t) {
                o = !0, S = t
            }
            o && (null === uu && r("178"), Zn(uu, S), null !== uu && (uu = uu.nextEffect))
        }
        eu = lu = !1, "function" === typeof He && He(e.stateNode), e = n.current.expirationTime, 0 === e && (cu = null), t.remainingExpirationTime = e
    }

    function hr() {
        return !(null === wu || wu.timeRemaining() > Pu) && (bu = !0)
    }

    function pr(t) {
        null === vu && r("246"), vu.remainingExpirationTime = 0, _u || (_u = !0, xu = t)
    }

    function gr(t) {
        null === vu && r("246"), vu.remainingExpirationTime = t
    }

    function vr(t, e) {
        var n = ku;
        ku = !0;
        try {
            return t(e)
        } finally {
            (ku = n) || gu || ur()
        }
    }

    function mr(t, e) {
        if (ku && !Su) {
            Su = !0;
            try {
                return t(e)
            } finally {
                Su = !1
            }
        }
        return t(e)
    }

    function yr(t, e) {
        gu && r("187");
        var n = ku;
        ku = !0;
        try {
            return nr(t, e)
        } finally {
            ku = n, ur()
        }
    }

    function br(t, e, n) {
        if (Cu) return t(e, n);
        ku || gu || 0 === yu || (lr(yu, !1, null), yu = 0);
        var r = Cu,
            i = ku;
        ku = Cu = !0;
        try {
            return t(e, n)
        } finally {
            Cu = r, (ku = i) || gu || ur()
        }
    }

    function _r(t) {
        var e = ku;
        ku = !0;
        try {
            nr(t)
        } finally {
            (ku = e) || gu || lr(1, !1, null)
        }
    }

    function xr(t, e, n, i, o) {
        var a = e.current;
        if (n) {
            n = n._reactInternalFiber;
            var u;
            t: {
                for (2 === It(n) && 2 === n.tag || r("170"), u = n; 3 !== u.tag;) {
                    if (De(u)) {
                        u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                        break t
                    }(u = u.return) || r("171")
                }
                u = u.stateNode.context
            }
            n = De(n) ? Ae(n, u) : u
        } else n = Ur;
        return null === e.context ? e.context = n : e.pendingContext = n, e = o, o = Ke(i), o.payload = {
            element: t
        }, e = void 0 === e ? null : e, null !== e && (o.callback = e), Ze(a, o, i), Jn(a, i), i
    }

    function wr(t) {
        var e = t._reactInternalFiber;
        return void 0 === e && ("function" === typeof t.render ? r("188") : r("268", Object.keys(t))), t = Nt(e), null === t ? null : t.stateNode
    }

    function kr(t, e, n, r) {
        var i = e.current;
        return i = Xn(tr(), i), xr(t, e, n, i, r)
    }

    function Sr(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
            case 5:
            default:
                return t.child.stateNode
        }
    }

    function Cr(t) {
        var e = t.findFiberByHostInstance;
        return Ye(Lr({}, t, {
            findHostInstanceByFiber: function(t) {
                return t = Nt(t), null === t ? null : t.stateNode
            },
            findFiberByHostInstance: function(t) {
                return e ? e(t) : null
            }
        }))
    }

    function Mr(t, e, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: Ui,
            key: null == r ? null : "" + r,
            children: t,
            containerInfo: e,
            implementation: n
        }
    }

    function Tr(t) {
        this._expirationTime = Qn(), this._root = t, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
    }

    function Dr() {
        this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
    }

    function Pr(t, e, n) {
        this._internalRoot = Be(t, e, n)
    }

    function Or(t) {
        return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
    }

    function Er(t, e) {
        if (e || (e = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null, e = !(!e || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e)
            for (var n; n = t.lastChild;) t.removeChild(n);
        return new Pr(t, !1, e)
    }

    function Ar(t, e, n, i, o) {
        Or(n) || r("200");
        var a = n._reactRootContainer;
        if (a) {
            if ("function" === typeof o) {
                var u = o;
                o = function() {
                    var t = Sr(a._internalRoot);
                    u.call(t)
                }
            }
            null != t ? a.legacy_renderSubtreeIntoContainer(t, e, o) : a.render(e, o)
        } else {
            if (a = n._reactRootContainer = Er(n, i), "function" === typeof o) {
                var l = o;
                o = function() {
                    var t = Sr(a._internalRoot);
                    l.call(t)
                }
            }
            mr(function() {
                null != t ? a.legacy_renderSubtreeIntoContainer(t, e, o) : a.render(e, o)
            })
        }
        return Sr(a._internalRoot)
    }

    function Ir(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return Or(e) || r("200"), Mr(t, e, null, n)
    }
    var Rr = n(33),
        Fr = n(7),
        Nr = n(65),
        Lr = n(24),
        zr = n(35),
        jr = n(66),
        Wr = n(67),
        Br = n(68),
        Ur = n(34);
    Fr || r("227");
    var Yr = {
            _caughtError: null,
            _hasCaughtError: !1,
            _rethrowError: null,
            _hasRethrowError: !1,
            invokeGuardedCallback: function(t, e, n, r, o, a, u, l, s) {
                i.apply(Yr, arguments)
            },
            invokeGuardedCallbackAndCatchFirstError: function(t, e, n, r, i, o, a, u, l) {
                if (Yr.invokeGuardedCallback.apply(this, arguments), Yr.hasCaughtError()) {
                    var s = Yr.clearCaughtError();
                    Yr._hasRethrowError || (Yr._hasRethrowError = !0, Yr._rethrowError = s)
                }
            },
            rethrowCaughtError: function() {
                return o.apply(Yr, arguments)
            },
            hasCaughtError: function() {
                return Yr._hasCaughtError
            },
            clearCaughtError: function() {
                if (Yr._hasCaughtError) {
                    var t = Yr._caughtError;
                    return Yr._caughtError = null, Yr._hasCaughtError = !1, t
                }
                r("198")
            }
        },
        Hr = null,
        Vr = {},
        Gr = [],
        qr = {},
        Kr = {},
        $r = {},
        Zr = {
            plugins: Gr,
            eventNameDispatchConfigs: qr,
            registrationNameModules: Kr,
            registrationNameDependencies: $r,
            possibleRegistrationNames: null,
            injectEventPluginOrder: l,
            injectEventPluginsByName: s
        },
        Qr = null,
        Xr = null,
        Jr = null,
        ti = null,
        ei = {
            injectEventPluginOrder: l,
            injectEventPluginsByName: s
        },
        ni = {
            injection: ei,
            getListener: v,
            runEventsInBatch: m,
            runExtractedEventsInBatch: y
        },
        ri = Math.random().toString(36).slice(2),
        ii = "__reactInternalInstance$" + ri,
        oi = "__reactEventHandlers$" + ri,
        ai = {
            precacheFiberNode: function(t, e) {
                e[ii] = t
            },
            getClosestInstanceFromNode: b,
            getInstanceFromNode: function(t) {
                return t = t[ii], !t || 5 !== t.tag && 6 !== t.tag ? null : t
            },
            getNodeFromInstance: _,
            getFiberCurrentPropsFromNode: x,
            updateFiberProps: function(t, e) {
                t[oi] = e
            }
        },
        ui = {
            accumulateTwoPhaseDispatches: P,
            accumulateTwoPhaseDispatchesSkipTarget: function(t) {
                d(t, M)
            },
            accumulateEnterLeaveDispatches: O,
            accumulateDirectDispatches: function(t) {
                d(t, D)
            }
        },
        li = {
            animationend: E("Animation", "AnimationEnd"),
            animationiteration: E("Animation", "AnimationIteration"),
            animationstart: E("Animation", "AnimationStart"),
            transitionend: E("Transition", "TransitionEnd")
        },
        si = {},
        ci = {};
    Nr.canUseDOM && (ci = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);
    var fi = A("animationend"),
        di = A("animationiteration"),
        hi = A("animationstart"),
        pi = A("transitionend"),
        gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        vi = null,
        mi = {
            _root: null,
            _startText: null,
            _fallbackText: null
        },
        yi = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
        bi = {
            type: null,
            target: null,
            currentTarget: zr.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    Lr(N.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : "unknown" !== typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = zr.thatReturnsTrue)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : "unknown" !== typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = zr.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = zr.thatReturnsTrue
        },
        isPersistent: zr.thatReturnsFalse,
        destructor: function() {
            var t, e = this.constructor.Interface;
            for (t in e) this[t] = null;
            for (e = 0; e < yi.length; e++) this[yi[e]] = null
        }
    }), N.Interface = bi, N.extend = function(t) {
        function e() {}

        function n() {
            return r.apply(this, arguments)
        }
        var r = this;
        e.prototype = r.prototype;
        var i = new e;
        return Lr(i, n.prototype), n.prototype = i, n.prototype.constructor = n, n.Interface = Lr({}, r.Interface, t), n.extend = r.extend, j(n), n
    }, j(N);
    var _i = N.extend({
            data: null
        }),
        xi = N.extend({
            data: null
        }),
        wi = [9, 13, 27, 32],
        ki = Nr.canUseDOM && "CompositionEvent" in window,
        Si = null;
    Nr.canUseDOM && "documentMode" in document && (Si = document.documentMode);
    var Ci = Nr.canUseDOM && "TextEvent" in window && !Si,
        Mi = Nr.canUseDOM && (!ki || Si && 8 < Si && 11 >= Si),
        Ti = String.fromCharCode(32),
        Di = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        Pi = !1,
        Oi = !1,
        Ei = {
            eventTypes: Di,
            extractEvents: function(t, e, n, r) {
                var i = void 0,
                    o = void 0;
                if (ki) t: {
                    switch (t) {
                        case "compositionstart":
                            i = Di.compositionStart;
                            break t;
                        case "compositionend":
                            i = Di.compositionEnd;
                            break t;
                        case "compositionupdate":
                            i = Di.compositionUpdate;
                            break t
                    }
                    i = void 0
                }
                else Oi ? W(t, n) && (i = Di.compositionEnd) : "keydown" === t && 229 === n.keyCode && (i = Di.compositionStart);
                return i ? (Mi && (Oi || i !== Di.compositionStart ? i === Di.compositionEnd && Oi && (o = R()) : (mi._root = r, mi._startText = F(), Oi = !0)), i = _i.getPooled(i, e, n, r), o ? i.data = o : null !== (o = B(n)) && (i.data = o), P(i), o = i) : o = null, (t = Ci ? U(t, n) : Y(t, n)) ? (e = xi.getPooled(Di.beforeInput, e, n, r), e.data = t, P(e)) : e = null, null === o ? e : null === e ? o : [o, e]
            }
        },
        Ai = null,
        Ii = {
            injectFiberControlledHostComponent: function(t) {
                Ai = t
            }
        },
        Ri = null,
        Fi = null,
        Ni = {
            injection: Ii,
            enqueueStateRestore: V,
            needsStateRestore: G,
            restoreStateIfNeeded: q
        },
        Li = !1,
        zi = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        },
        ji = Fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        Wi = "function" === typeof Symbol && Symbol.for,
        Bi = Wi ? Symbol.for("react.element") : 60103,
        Ui = Wi ? Symbol.for("react.portal") : 60106,
        Yi = Wi ? Symbol.for("react.fragment") : 60107,
        Hi = Wi ? Symbol.for("react.strict_mode") : 60108,
        Vi = Wi ? Symbol.for("react.profiler") : 60114,
        Gi = Wi ? Symbol.for("react.provider") : 60109,
        qi = Wi ? Symbol.for("react.context") : 60110,
        Ki = Wi ? Symbol.for("react.async_mode") : 60111,
        $i = Wi ? Symbol.for("react.forward_ref") : 60112,
        Zi = Wi ? Symbol.for("react.timeout") : 60113,
        Qi = "function" === typeof Symbol && Symbol.iterator,
        Xi = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        Ji = Object.prototype.hasOwnProperty,
        to = {},
        eo = {},
        no = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
        no[t] = new ft(t, 0, !1, t, null)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(t) {
        var e = t[0];
        no[e] = new ft(e, 1, !1, t[1], null)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
        no[t] = new ft(t, 2, !1, t.toLowerCase(), null)
    }), ["autoReverse", "externalResourcesRequired", "preserveAlpha"].forEach(function(t) {
        no[t] = new ft(t, 2, !1, t, null)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
        no[t] = new ft(t, 3, !1, t.toLowerCase(), null)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
        no[t] = new ft(t, 3, !0, t.toLowerCase(), null)
    }), ["capture", "download"].forEach(function(t) {
        no[t] = new ft(t, 4, !1, t.toLowerCase(), null)
    }), ["cols", "rows", "size", "span"].forEach(function(t) {
        no[t] = new ft(t, 6, !1, t.toLowerCase(), null)
    }), ["rowSpan", "start"].forEach(function(t) {
        no[t] = new ft(t, 5, !1, t.toLowerCase(), null)
    });
    var ro = /[\-:]([a-z])/g;
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
        var e = t.replace(ro, dt);
        no[e] = new ft(e, 1, !1, t, null)
    }), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
        var e = t.replace(ro, dt);
        no[e] = new ft(e, 1, !1, t, "http://www.w3.org/1999/xlink")
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
        var e = t.replace(ro, dt);
        no[e] = new ft(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace")
    }), no.tabIndex = new ft("tabIndex", 1, !1, "tabindex", null);
    var io = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
            }
        },
        oo = null,
        ao = null,
        uo = !1;
    Nr.canUseDOM && (uo = tt("input") && (!document.documentMode || 9 < document.documentMode));
    var lo = {
            eventTypes: io,
            _isInputEventSupported: uo,
            extractEvents: function(t, e, n, r) {
                var i = e ? _(e) : window,
                    o = void 0,
                    a = void 0,
                    u = i.nodeName && i.nodeName.toLowerCase();
                if ("select" === u || "input" === u && "file" === i.type ? o = St : X(i) ? uo ? o = Ot : (o = Dt, a = Tt) : (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (o = Pt), o && (o = o(t, e))) return xt(o, n, r);
                a && a(t, i, e), "blur" === t && (t = i._wrapperState) && t.controlled && "number" === i.type && bt(i, "number", i.value)
            }
        },
        so = N.extend({
            view: null,
            detail: null
        }),
        co = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        },
        fo = so.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: At,
            button: null,
            buttons: null,
            relatedTarget: function(t) {
                return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
            }
        }),
        ho = fo.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tiltX: null,
            tiltY: null,
            pointerType: null,
            isPrimary: null
        }),
        po = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        go = {
            eventTypes: po,
            extractEvents: function(t, e, n, r) {
                var i = "mouseover" === t || "pointerover" === t,
                    o = "mouseout" === t || "pointerout" === t;
                if (i && (n.relatedTarget || n.fromElement) || !o && !i) return null;
                if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window, o ? (o = e, e = (e = n.relatedTarget || n.toElement) ? b(e) : null) : o = null, o === e) return null;
                var a = void 0,
                    u = void 0,
                    l = void 0,
                    s = void 0;
                return "mouseout" === t || "mouseover" === t ? (a = fo, u = po.mouseLeave, l = po.mouseEnter, s = "mouse") : "pointerout" !== t && "pointerover" !== t || (a = ho, u = po.pointerLeave, l = po.pointerEnter, s = "pointer"), t = null == o ? i : _(o), i = null == e ? i : _(e), u = a.getPooled(u, o, n, r), u.type = s + "leave", u.target = t, u.relatedTarget = i, n = a.getPooled(l, e, n, r), n.type = s + "enter", n.target = i, n.relatedTarget = t, O(u, n, o, e), [u, n]
            }
        },
        vo = N.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        mo = N.extend({
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        yo = so.extend({
            relatedTarget: null
        }),
        bo = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        _o = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        xo = so.extend({
            key: function(t) {
                if (t.key) {
                    var e = bo[t.key] || t.key;
                    if ("Unidentified" !== e) return e
                }
                return "keypress" === t.type ? (t = zt(t), 13 === t ? "Enter" : String.fromCharCode(t)) : "keydown" === t.type || "keyup" === t.type ? _o[t.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: At,
            charCode: function(t) {
                return "keypress" === t.type ? zt(t) : 0
            },
            keyCode: function(t) {
                return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            },
            which: function(t) {
                return "keypress" === t.type ? zt(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            }
        }),
        wo = fo.extend({
            dataTransfer: null
        }),
        ko = so.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: At
        }),
        So = N.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        Co = fo.extend({
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }),
        Mo = [
            ["abort", "abort"],
            [fi, "animationEnd"],
            [di, "animationIteration"],
            [hi, "animationStart"],
            ["canplay", "canPlay"],
            ["canplaythrough", "canPlayThrough"],
            ["drag", "drag"],
            ["dragenter", "dragEnter"],
            ["dragexit", "dragExit"],
            ["dragleave", "dragLeave"],
            ["dragover", "dragOver"],
            ["durationchange", "durationChange"],
            ["emptied", "emptied"],
            ["encrypted", "encrypted"],
            ["ended", "ended"],
            ["error", "error"],
            ["gotpointercapture", "gotPointerCapture"],
            ["load", "load"],
            ["loadeddata", "loadedData"],
            ["loadedmetadata", "loadedMetadata"],
            ["loadstart", "loadStart"],
            ["lostpointercapture", "lostPointerCapture"],
            ["mousemove", "mouseMove"],
            ["mouseout", "mouseOut"],
            ["mouseover", "mouseOver"],
            ["playing", "playing"],
            ["pointermove", "pointerMove"],
            ["pointerout", "pointerOut"],
            ["pointerover", "pointerOver"],
            ["progress", "progress"],
            ["scroll", "scroll"],
            ["seeking", "seeking"],
            ["stalled", "stalled"],
            ["suspend", "suspend"],
            ["timeupdate", "timeUpdate"],
            ["toggle", "toggle"],
            ["touchmove", "touchMove"],
            [pi, "transitionEnd"],
            ["waiting", "waiting"],
            ["wheel", "wheel"]
        ],
        To = {},
        Do = {};
    [
        ["blur", "blur"],
        ["cancel", "cancel"],
        ["click", "click"],
        ["close", "close"],
        ["contextmenu", "contextMenu"],
        ["copy", "copy"],
        ["cut", "cut"],
        ["dblclick", "doubleClick"],
        ["dragend", "dragEnd"],
        ["dragstart", "dragStart"],
        ["drop", "drop"],
        ["focus", "focus"],
        ["input", "input"],
        ["invalid", "invalid"],
        ["keydown", "keyDown"],
        ["keypress", "keyPress"],
        ["keyup", "keyUp"],
        ["mousedown", "mouseDown"],
        ["mouseup", "mouseUp"],
        ["paste", "paste"],
        ["pause", "pause"],
        ["play", "play"],
        ["pointercancel", "pointerCancel"],
        ["pointerdown", "pointerDown"],
        ["pointerup", "pointerUp"],
        ["ratechange", "rateChange"],
        ["reset", "reset"],
        ["seeked", "seeked"],
        ["submit", "submit"],
        ["touchcancel", "touchCancel"],
        ["touchend", "touchEnd"],
        ["touchstart", "touchStart"],
        ["volumechange", "volumeChange"]
    ].forEach(function(t) {
        jt(t, !0)
    }), Mo.forEach(function(t) {
        jt(t, !1)
    });
    var Po = {
            eventTypes: To,
            isInteractiveTopLevelEventType: function(t) {
                return void 0 !== (t = Do[t]) && !0 === t.isInteractive
            },
            extractEvents: function(t, e, n, r) {
                var i = Do[t];
                if (!i) return null;
                switch (t) {
                    case "keypress":
                        if (0 === zt(n)) return null;
                    case "keydown":
                    case "keyup":
                        t = xo;
                        break;
                    case "blur":
                    case "focus":
                        t = yo;
                        break;
                    case "click":
                        if (2 === n.button) return null;
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        t = fo;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        t = wo;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        t = ko;
                        break;
                    case fi:
                    case di:
                    case hi:
                        t = vo;
                        break;
                    case pi:
                        t = So;
                        break;
                    case "scroll":
                        t = so;
                        break;
                    case "wheel":
                        t = Co;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        t = mo;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        t = ho;
                        break;
                    default:
                        t = N
                }
                return e = t.getPooled(i, e, n, r), P(e), e
            }
        },
        Oo = Po.isInteractiveTopLevelEventType,
        Eo = [],
        Ao = !0,
        Io = {
            get _enabled() {
                return Ao
            },
            setEnabled: Bt,
            isEnabled: function() {
                return Ao
            },
            trapBubbledEvent: Ut,
            trapCapturedEvent: Yt,
            dispatchEvent: Vt
        },
        Ro = {},
        Fo = 0,
        No = "_reactListenersID" + ("" + Math.random()).slice(2),
        Lo = Nr.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
        zo = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        jo = null,
        Wo = null,
        Bo = null,
        Uo = !1,
        Yo = {
            eventTypes: zo,
            extractEvents: function(t, e, n, r) {
                var i, o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
                if (!(i = !o)) {
                    t: {
                        o = Gt(o),
                        i = $r.onSelect;
                        for (var a = 0; a < i.length; a++) {
                            var u = i[a];
                            if (!o.hasOwnProperty(u) || !o[u]) {
                                o = !1;
                                break t
                            }
                        }
                        o = !0
                    }
                    i = !o
                }
                if (i) return null;
                switch (o = e ? _(e) : window, t) {
                    case "focus":
                        (X(o) || "true" === o.contentEditable) && (jo = o, Wo = e, Bo = null);
                        break;
                    case "blur":
                        Bo = Wo = jo = null;
                        break;
                    case "mousedown":
                        Uo = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                        return Uo = !1, Zt(n, r);
                    case "selectionchange":
                        if (Lo) break;
                    case "keydown":
                    case "keyup":
                        return Zt(n, r)
                }
                return null
            }
        };
    ei.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), Qr = ai.getFiberCurrentPropsFromNode, Xr = ai.getInstanceFromNode, Jr = ai.getNodeFromInstance, ei.injectEventPluginsByName({
        SimpleEventPlugin: Po,
        EnterLeaveEventPlugin: go,
        ChangeEventPlugin: lo,
        SelectEventPlugin: Yo,
        BeforeInputEventPlugin: Ei
    });
    var Ho = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
        Vo = Date,
        Go = setTimeout,
        qo = clearTimeout,
        Ko = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var $o = performance;
        Ko = function() {
            return $o.now()
        }
    } else Ko = function() {
        return Vo.now()
    };
    var Zo = void 0,
        Qo = void 0;
    if (Nr.canUseDOM) {
        var Xo = "function" === typeof Ho ? Ho : function() {
                r("276")
            },
            Jo = null,
            ta = null,
            ea = -1,
            na = !1,
            ra = !1,
            ia = 0,
            oa = 33,
            aa = 33,
            ua = {
                didTimeout: !1,
                timeRemaining: function() {
                    var t = ia - Ko();
                    return 0 < t ? t : 0
                }
            },
            la = function(t, e) {
                var n = t.scheduledCallback,
                    r = !1;
                try {
                    n(e), r = !0
                } finally {
                    Qo(t), r || (na = !0, window.postMessage(sa, "*"))
                }
            },
            sa = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
        window.addEventListener("message", function(t) {
            if (t.source === window && t.data === sa && (na = !1, null !== Jo)) {
                if (null !== Jo) {
                    var e = Ko();
                    if (!(-1 === ea || ea > e)) {
                        t = -1;
                        for (var n = [], r = Jo; null !== r;) {
                            var i = r.timeoutTime; - 1 !== i && i <= e ? n.push(r) : -1 !== i && (-1 === t || i < t) && (t = i), r = r.next
                        }
                        if (0 < n.length)
                            for (ua.didTimeout = !0, e = 0, r = n.length; e < r; e++) la(n[e], ua);
                        ea = t
                    }
                }
                for (t = Ko(); 0 < ia - t && null !== Jo;) t = Jo, ua.didTimeout = !1, la(t, ua), t = Ko();
                null === Jo || ra || (ra = !0, Xo(ca))
            }
        }, !1);
        var ca = function(t) {
            ra = !1;
            var e = t - ia + aa;
            e < aa && oa < aa ? (8 > e && (e = 8), aa = e < oa ? oa : e) : oa = e, ia = t + aa, na || (na = !0, window.postMessage(sa, "*"))
        };
        Zo = function(t, e) {
            var n = -1;
            return null != e && "number" === typeof e.timeout && (n = Ko() + e.timeout), (-1 === ea || -1 !== n && n < ea) && (ea = n), t = {
                scheduledCallback: t,
                timeoutTime: n,
                prev: null,
                next: null
            }, null === Jo ? Jo = t : null !== (e = t.prev = ta) && (e.next = t), ta = t, ra || (ra = !0, Xo(ca)), t
        }, Qo = function(t) {
            if (null !== t.prev || Jo === t) {
                var e = t.next,
                    n = t.prev;
                t.next = null, t.prev = null, null !== e ? null !== n ? (n.next = e, e.prev = n) : (e.prev = null, Jo = e) : null !== n ? (n.next = null, ta = n) : ta = Jo = null
            }
        }
    } else {
        var fa = new Map;
        Zo = function(t) {
            var e = {
                    scheduledCallback: t,
                    timeoutTime: 0,
                    next: null,
                    prev: null
                },
                n = Go(function() {
                    t({
                        timeRemaining: function() {
                            return 1 / 0
                        },
                        didTimeout: !1
                    })
                });
            return fa.set(t, n), e
        }, Qo = function(t) {
            var e = fa.get(t.scheduledCallback);
            fa.delete(t), qo(e)
        }
    }
    var da = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        },
        ha = void 0,
        pa = function(t) {
            return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
                MSApp.execUnsafeLocalFunction(function() {
                    return t(e, n)
                })
            } : t
        }(function(t, e) {
            if (t.namespaceURI !== da.svg || "innerHTML" in t) t.innerHTML = e;
            else {
                for (ha = ha || document.createElement("div"), ha.innerHTML = "<svg>" + e + "</svg>", e = ha.firstChild; t.firstChild;) t.removeChild(t.firstChild);
                for (; e.firstChild;) t.appendChild(e.firstChild)
            }
        }),
        ga = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        va = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ga).forEach(function(t) {
        va.forEach(function(e) {
            e = e + t.charAt(0).toUpperCase() + t.substring(1), ga[e] = ga[t]
        })
    });
    var ma = Lr({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }),
        ya = zr.thatReturns(""),
        ba = {
            createElement: de,
            createTextNode: he,
            setInitialProperties: pe,
            diffProperties: ge,
            updateProperties: ve,
            diffHydratedProperties: me,
            diffHydratedText: ye,
            warnForUnmatchedText: function() {},
            warnForDeletedHydratableElement: function() {},
            warnForDeletedHydratableText: function() {},
            warnForInsertedHydratedElement: function() {},
            warnForInsertedHydratedText: function() {},
            restoreControlledState: function(t, e, n) {
                switch (e) {
                    case "input":
                        if (mt(t, n), e = n.name, "radio" === n.type && null != e) {
                            for (n = t; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                                var i = n[e];
                                if (i !== t && i.form === t.form) {
                                    var o = x(i);
                                    o || r("90"), it(i), mt(i, o)
                                }
                            }
                        }
                        break;
                    case "textarea":
                        re(t, n);
                        break;
                    case "select":
                        null != (e = n.value) && Jt(t, !!n.multiple, e, !1)
                }
            }
        },
        _a = null,
        xa = null,
        wa = Ko,
        ka = Zo,
        Sa = Qo;
    new Set;
    var Ca = [],
        Ma = -1,
        Ta = ke(Ur),
        Da = ke(!1),
        Pa = Ur,
        Oa = null,
        Ea = null,
        Aa = !1,
        Ia = ke(null),
        Ra = ke(null),
        Fa = ke(0),
        Na = {},
        La = ke(Na),
        za = ke(Na),
        ja = ke(Na),
        Wa = {
            isMounted: function(t) {
                return !!(t = t._reactInternalFiber) && 2 === It(t)
            },
            enqueueSetState: function(t, e, n) {
                t = t._reactInternalFiber;
                var r = tr();
                r = Xn(r, t);
                var i = Ke(r);
                i.payload = e, void 0 !== n && null !== n && (i.callback = n), Ze(t, i, r), Jn(t, r)
            },
            enqueueReplaceState: function(t, e, n) {
                t = t._reactInternalFiber;
                var r = tr();
                r = Xn(r, t);
                var i = Ke(r);
                i.tag = 1, i.payload = e, void 0 !== n && null !== n && (i.callback = n), Ze(t, i, r), Jn(t, r)
            },
            enqueueForceUpdate: function(t, e) {
                t = t._reactInternalFiber;
                var n = tr();
                n = Xn(n, t);
                var r = Ke(n);
                r.tag = 2, void 0 !== e && null !== e && (r.callback = e), Ze(t, r, n), Jn(t, n)
            }
        },
        Ba = Array.isArray,
        Ua = mn(!0),
        Ya = mn(!1),
        Ha = null,
        Va = null,
        Ga = !1,
        qa = void 0,
        Ka = void 0,
        $a = void 0;
    qa = function() {}, Ka = function(t, e, n) {
        (e.updateQueue = n) && In(e)
    }, $a = function(t, e, n, r) {
        n !== r && In(e)
    };
    var Za = wa(),
        Qa = 2,
        Xa = Za,
        Ja = 0,
        tu = 0,
        eu = !1,
        nu = null,
        ru = null,
        iu = 0,
        ou = -1,
        au = !1,
        uu = null,
        lu = !1,
        su = !1,
        cu = null,
        fu = null,
        du = null,
        hu = 0,
        pu = void 0,
        gu = !1,
        vu = null,
        mu = 0,
        yu = 0,
        bu = !1,
        _u = !1,
        xu = null,
        wu = null,
        ku = !1,
        Su = !1,
        Cu = !1,
        Mu = null,
        Tu = 1e3,
        Du = 0,
        Pu = 1,
        Ou = {
            updateContainerAtExpirationTime: xr,
            createContainer: function(t, e, n) {
                return Be(t, e, n)
            },
            updateContainer: kr,
            flushRoot: sr,
            requestWork: ir,
            computeUniqueAsyncExpiration: Qn,
            batchedUpdates: vr,
            unbatchedUpdates: mr,
            deferredUpdates: er,
            syncUpdates: nr,
            interactiveUpdates: br,
            flushInteractiveUpdates: function() {
                gu || 0 === yu || (lr(yu, !1, null), yu = 0)
            },
            flushControlled: _r,
            flushSync: yr,
            getPublicRootInstance: Sr,
            findHostInstance: wr,
            findHostInstanceWithNoPortals: function(t) {
                return t = Lt(t), null === t ? null : t.stateNode
            },
            injectIntoDevTools: Cr
        };
    Ii.injectFiberControlledHostComponent(ba), Tr.prototype.render = function(t) {
        this._defer || r("250"), this._hasChildren = !0, this._children = t;
        var e = this._root._internalRoot,
            n = this._expirationTime,
            i = new Dr;
        return xr(t, e, null, n, i._onCommit), i
    }, Tr.prototype.then = function(t) {
        if (this._didComplete) t();
        else {
            var e = this._callbacks;
            null === e && (e = this._callbacks = []), e.push(t)
        }
    }, Tr.prototype.commit = function() {
        var t = this._root._internalRoot,
            e = t.firstBatch;
        if (this._defer && null !== e || r("251"), this._hasChildren) {
            var n = this._expirationTime;
            if (e !== this) {
                this._hasChildren && (n = this._expirationTime = e._expirationTime, this.render(this._children));
                for (var i = null, o = e; o !== this;) i = o, o = o._next;
                null === i && r("251"), i._next = o._next, this._next = e, t.firstBatch = this
            }
            this._defer = !1, sr(t, n), e = this._next, this._next = null, e = t.firstBatch = e, null !== e && e._hasChildren && e.render(e._children)
        } else this._next = null, this._defer = !1
    }, Tr.prototype._onComplete = function() {
        if (!this._didComplete) {
            this._didComplete = !0;
            var t = this._callbacks;
            if (null !== t)
                for (var e = 0; e < t.length; e++)(0, t[e])()
        }
    }, Dr.prototype.then = function(t) {
        if (this._didCommit) t();
        else {
            var e = this._callbacks;
            null === e && (e = this._callbacks = []), e.push(t)
        }
    }, Dr.prototype._onCommit = function() {
        if (!this._didCommit) {
            this._didCommit = !0;
            var t = this._callbacks;
            if (null !== t)
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    "function" !== typeof n && r("191", n), n()
                }
        }
    }, Pr.prototype.render = function(t, e) {
        var n = this._internalRoot,
            r = new Dr;
        return e = void 0 === e ? null : e, null !== e && r.then(e), kr(t, n, null, r._onCommit), r
    }, Pr.prototype.unmount = function(t) {
        var e = this._internalRoot,
            n = new Dr;
        return t = void 0 === t ? null : t, null !== t && n.then(t), kr(null, e, null, n._onCommit), n
    }, Pr.prototype.legacy_renderSubtreeIntoContainer = function(t, e, n) {
        var r = this._internalRoot,
            i = new Dr;
        return n = void 0 === n ? null : n, null !== n && i.then(n), kr(e, r, t, i._onCommit), i
    }, Pr.prototype.createBatch = function() {
        var t = new Tr(this),
            e = t._expirationTime,
            n = this._internalRoot,
            r = n.firstBatch;
        if (null === r) n.firstBatch = t, t._next = null;
        else {
            for (n = null; null !== r && r._expirationTime <= e;) n = r, r = r._next;
            t._next = r, null !== n && (n._next = t)
        }
        return t
    }, K = Ou.batchedUpdates, $ = Ou.interactiveUpdates, Z = Ou.flushInteractiveUpdates;
    var Eu = {
        createPortal: Ir,
        findDOMNode: function(t) {
            return null == t ? null : 1 === t.nodeType ? t : wr(t)
        },
        hydrate: function(t, e, n) {
            return Ar(null, t, e, !0, n)
        },
        render: function(t, e, n) {
            return Ar(null, t, e, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(t, e, n, i) {
            return (null == t || void 0 === t._reactInternalFiber) && r("38"), Ar(t, e, n, !1, i)
        },
        unmountComponentAtNode: function(t) {
            return Or(t) || r("40"), !!t._reactRootContainer && (mr(function() {
                Ar(null, null, t, !1, function() {
                    t._reactRootContainer = null
                })
            }), !0)
        },
        unstable_createPortal: function() {
            return Ir.apply(void 0, arguments)
        },
        unstable_batchedUpdates: vr,
        unstable_deferredUpdates: er,
        unstable_interactiveUpdates: br,
        flushSync: yr,
        unstable_flushControlled: _r,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            EventPluginHub: ni,
            EventPluginRegistry: Zr,
            EventPropagators: ui,
            ReactControlledComponent: Ni,
            ReactDOMComponentTree: ai,
            ReactDOMEventListener: Io
        },
        unstable_createRoot: function(t, e) {
            return new Pr(t, !0, null != e && !0 === e.hydrate)
        }
    };
    Cr({
        findFiberByHostInstance: b,
        bundleType: 0,
        version: "16.4.2",
        rendererPackageName: "react-dom"
    });
    var Au = {
            default: Eu
        },
        Iu = Au && Eu || Au;
    t.exports = Iu.default ? Iu.default : Iu
}, function(t, e, n) {
    "use strict";
    var r = !("undefined" === typeof window || !window.document || !window.document.createElement),
        i = {
            canUseDOM: r,
            canUseWorkers: "undefined" !== typeof Worker,
            canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
            isInWorker: !r
        };
    t.exports = i
}, function(t, e, n) {
    "use strict";

    function r(t) {
        if ("undefined" === typeof(t = t || ("undefined" !== typeof document ? document : void 0))) return null;
        try {
            return t.activeElement || t.body
        } catch (e) {
            return t.body
        }
    }
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t === 1 / e : t !== t && e !== e
    }

    function i(t, e) {
        if (r(t, e)) return !0;
        if ("object" !== typeof t || null === t || "object" !== typeof e || null === e) return !1;
        var n = Object.keys(t),
            i = Object.keys(e);
        if (n.length !== i.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!o.call(e, n[a]) || !r(t[n[a]], e[n[a]])) return !1;
        return !0
    }
    var o = Object.prototype.hasOwnProperty;
    t.exports = i
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return !(!t || !e) && (t === e || !i(t) && (i(e) ? r(t, e.parentNode) : "contains" in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
    }
    var i = n(69);
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return i(t) && 3 == t.nodeType
    }
    var i = n(70);
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = t ? t.ownerDocument || t : document,
            n = e.defaultView || window;
        return !(!t || !("function" === typeof n.Node ? t instanceof n.Node : "object" === typeof t && "number" === typeof t.nodeType && "string" === typeof t.nodeName))
    }
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== typeof e && "function" !== typeof e ? t : e
    }

    function o(t, e) {
        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(7),
        u = n.n(a),
        l = n(72),
        s = n(73),
        c = (n.n(s), n(74)),
        f = n.n(c),
        d = n(75),
        h = n(40),
        p = n.n(h),
        g = n(224),
        v = n.n(g),
        m = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
    console.log(v.a);
    var y = function(t) {
        function e(t) {
            r(this, e);
            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return d.a.defaults.global.defaultFontColor = "#000", d.a.defaults.global.defaultFontSize = 16, n.state = {
                historicalData: null,
                currency: "PHP"
            }, n.onCurrencySelect = n.onCurrencySelect.bind(n), n
        }
        return o(e, t), m(e, [{
            key: "componentDidMount",
            value: function() {
                this.getBitcoinData()
            }
        }, {
            key: "getBitcoinData",
            value: function() {
                var t = this;
                fetch("https://api.coindesk.com/v1/bpi/historical/close.json?currency=" + this.state.currency).then(function(t) {
                    return t.json()
                }).then(function(e) {
                    return t.setState({
                        historicalData: e
                    })
                }).catch(function(t) {
                    return t
                })
            }
        }, {
            key: "formatChartData",
            value: function() {
                var t = this.state.historicalData.bpi;
                return {
                    labels: f.a.map(f.a.keys(t), function(t) {
                        return p()(t).format("ll")
                    }),
                    datasets: [{
                        label: "Bitcoin",
                        fill: !0,
                        lineTension: .1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: f.a.values(t)
                    }]
                }
            }
        }, {
            key: "setCurrency",
            value: function(t) {
                this.setState({
                    currency: t
                }, this.getBitcoinData)
            }
        }, {
            key: "onCurrencySelect",
            value: function(t) {
                this.setCurrency(t.target.value)
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return this.state.historicalData ? u.a.createElement("div", {
                    className: "app"
                }, u.a.createElement(l.a, {
                    title: "BITCOIN PRICE INDEX"
                }), u.a.createElement("div", {
                    className: "select-container"
                }, u.a.createElement("span", {
                    style: {
                        fontSize: 18,
                        fontFamily: "Bungee"
                    }
                }, " Select your currency: "), u.a.createElement("select", {
                    value: this.state.currency,
                    onChange: this.onCurrencySelect
                }, v.a.map(function(t, e) {
                    return u.a.createElement("option", {
                        key: e + "-" + t.country,
                        value: t.currency
                    }, " ", t.currency, " ")
                })), "PHP" !== this.state.currency && u.a.createElement("div", null, u.a.createElement("a", {
                    href: "#",
                    className: "link",
                    onClick: function() {
                        return t.setCurrency("PHP")
                    },
                    style: {
                        color: "black",
                        fontSize: 16,
                        fontFamily: "Bungee"
                    }
                }, " [CLICK HERE TO RESET] "))), u.a.createElement("div", {
                    style: {
                        marginTop: 10
                    }
                }, u.a.createElement(d.b, {
                    data: this.formatChartData(),
                    height: 250
                }))) : null
            }
        }]), e
    }(a.Component);
    e.a = y
}, function(t, e, n) {
    "use strict";
    var r = n(7),
        i = n.n(r),
        o = function(t) {
            return i.a.createElement("header", {
                style: {
                    marginBottom: 10
                }
            }, i.a.createElement("div", null, i.a.createElement("span", {
                className: "header"
            }, " ", t.title, " ")), i.a.createElement("div", {
                className: "subheader-body"
            }, i.a.createElement("span", {
                className: "subheader"
            }, " Written by ", i.a.createElement("a", {
                className: "link",
                href: "https://markjoelchavez.com"
            }, "@markisundefined"), ". "), i.a.createElement("span", {
                className: "subheader"
            }, " Powered by ", i.a.createElement("a", {
                className: "link",
                target: "_blank",
                href: "https://www.coindesk.com/price/"
            }, "CoinDesk"), ". ")))
        };
    e.a = o
}, function(t, e) {}, function(t, e, n) {
    (function(t, r) {
        var i;
        (function() {
            function o(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }

            function a(t, e, n, r) {
                for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
                    var a = t[i];
                    e(r, a, n(a), t)
                }
                return r
            }

            function u(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
                return t
            }

            function l(t, e) {
                for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t););
                return t
            }

            function s(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (!e(t[n], n, t)) return !1;
                return !0
            }

            function c(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                    var a = t[n];
                    e(a, n, t) && (o[i++] = a)
                }
                return o
            }

            function f(t, e) {
                return !!(null == t ? 0 : t.length) && w(t, e, 0) > -1
            }

            function d(t, e, n) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                    if (n(e, t[r])) return !0;
                return !1
            }

            function h(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
                return i
            }

            function p(t, e) {
                for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                return t
            }

            function g(t, e, n, r) {
                var i = -1,
                    o = null == t ? 0 : t.length;
                for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                return n
            }

            function v(t, e, n, r) {
                var i = null == t ? 0 : t.length;
                for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
                return n
            }

            function m(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (e(t[n], n, t)) return !0;
                return !1
            }

            function y(t) {
                return t.split("")
            }

            function b(t) {
                return t.match(ze) || []
            }

            function _(t, e, n) {
                var r;
                return n(t, function(t, n, i) {
                    if (e(t, n, i)) return r = n, !1
                }), r
            }

            function x(t, e, n, r) {
                for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                    if (e(t[o], o, t)) return o;
                return -1
            }

            function w(t, e, n) {
                return e === e ? Z(t, e, n) : x(t, S, n)
            }

            function k(t, e, n, r) {
                for (var i = n - 1, o = t.length; ++i < o;)
                    if (r(t[i], e)) return i;
                return -1
            }

            function S(t) {
                return t !== t
            }

            function C(t, e) {
                var n = null == t ? 0 : t.length;
                return n ? O(t, e) / n : Rt
            }

            function M(t) {
                return function(e) {
                    return null == e ? rt : e[t]
                }
            }

            function T(t) {
                return function(e) {
                    return null == t ? rt : t[e]
                }
            }

            function D(t, e, n, r, i) {
                return i(t, function(t, i, o) {
                    n = r ? (r = !1, t) : e(n, t, i, o)
                }), n
            }

            function P(t, e) {
                var n = t.length;
                for (t.sort(e); n--;) t[n] = t[n].value;
                return t
            }

            function O(t, e) {
                for (var n, r = -1, i = t.length; ++r < i;) {
                    var o = e(t[r]);
                    o !== rt && (n = n === rt ? o : n + o)
                }
                return n
            }

            function E(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }

            function A(t, e) {
                return h(e, function(e) {
                    return [e, t[e]]
                })
            }

            function I(t) {
                return function(e) {
                    return t(e)
                }
            }

            function R(t, e) {
                return h(e, function(e) {
                    return t[e]
                })
            }

            function F(t, e) {
                return t.has(e)
            }

            function N(t, e) {
                for (var n = -1, r = t.length; ++n < r && w(e, t[n], 0) > -1;);
                return n
            }

            function L(t, e) {
                for (var n = t.length; n-- && w(e, t[n], 0) > -1;);
                return n
            }

            function z(t, e) {
                for (var n = t.length, r = 0; n--;) t[n] === e && ++r;
                return r
            }

            function j(t) {
                return "\\" + Mn[t]
            }

            function W(t, e) {
                return null == t ? rt : t[e]
            }

            function B(t) {
                return mn.test(t)
            }

            function U(t) {
                return yn.test(t)
            }

            function Y(t) {
                for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                return n
            }

            function H(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t, r) {
                    n[++e] = [r, t]
                }), n
            }

            function V(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }

            function G(t, e) {
                for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                    var a = t[n];
                    a !== e && a !== st || (t[n] = st, o[i++] = n)
                }
                return o
            }

            function q(t, e) {
                return "__proto__" == e ? rt : t[e]
            }

            function K(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t) {
                    n[++e] = t
                }), n
            }

            function $(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t) {
                    n[++e] = [t, t]
                }), n
            }

            function Z(t, e, n) {
                for (var r = n - 1, i = t.length; ++r < i;)
                    if (t[r] === e) return r;
                return -1
            }

            function Q(t, e, n) {
                for (var r = n + 1; r--;)
                    if (t[r] === e) return r;
                return r
            }

            function X(t) {
                return B(t) ? tt(t) : Yn(t)
            }

            function J(t) {
                return B(t) ? et(t) : y(t)
            }

            function tt(t) {
                for (var e = gn.lastIndex = 0; gn.test(t);) ++e;
                return e
            }

            function et(t) {
                return t.match(gn) || []
            }

            function nt(t) {
                return t.match(vn) || []
            }
            var rt, it = 200,
                ot = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                at = "Expected a function",
                ut = "__lodash_hash_undefined__",
                lt = 500,
                st = "__lodash_placeholder__",
                ct = 1,
                ft = 2,
                dt = 4,
                ht = 1,
                pt = 2,
                gt = 1,
                vt = 2,
                mt = 4,
                yt = 8,
                bt = 16,
                _t = 32,
                xt = 64,
                wt = 128,
                kt = 256,
                St = 512,
                Ct = 30,
                Mt = "...",
                Tt = 800,
                Dt = 16,
                Pt = 1,
                Ot = 2,
                Et = 1 / 0,
                At = 9007199254740991,
                It = 1.7976931348623157e308,
                Rt = NaN,
                Ft = 4294967295,
                Nt = Ft - 1,
                Lt = Ft >>> 1,
                zt = [
                    ["ary", wt],
                    ["bind", gt],
                    ["bindKey", vt],
                    ["curry", yt],
                    ["curryRight", bt],
                    ["flip", St],
                    ["partial", _t],
                    ["partialRight", xt],
                    ["rearg", kt]
                ],
                jt = "[object Arguments]",
                Wt = "[object Array]",
                Bt = "[object AsyncFunction]",
                Ut = "[object Boolean]",
                Yt = "[object Date]",
                Ht = "[object DOMException]",
                Vt = "[object Error]",
                Gt = "[object Function]",
                qt = "[object GeneratorFunction]",
                Kt = "[object Map]",
                $t = "[object Number]",
                Zt = "[object Null]",
                Qt = "[object Object]",
                Xt = "[object Proxy]",
                Jt = "[object RegExp]",
                te = "[object Set]",
                ee = "[object String]",
                ne = "[object Symbol]",
                re = "[object Undefined]",
                ie = "[object WeakMap]",
                oe = "[object WeakSet]",
                ae = "[object ArrayBuffer]",
                ue = "[object DataView]",
                le = "[object Float32Array]",
                se = "[object Float64Array]",
                ce = "[object Int8Array]",
                fe = "[object Int16Array]",
                de = "[object Int32Array]",
                he = "[object Uint8Array]",
                pe = "[object Uint8ClampedArray]",
                ge = "[object Uint16Array]",
                ve = "[object Uint32Array]",
                me = /\b__p \+= '';/g,
                ye = /\b(__p \+=) '' \+/g,
                be = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                _e = /&(?:amp|lt|gt|quot|#39);/g,
                xe = /[&<>"']/g,
                we = RegExp(_e.source),
                ke = RegExp(xe.source),
                Se = /<%-([\s\S]+?)%>/g,
                Ce = /<%([\s\S]+?)%>/g,
                Me = /<%=([\s\S]+?)%>/g,
                Te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                De = /^\w*$/,
                Pe = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Oe = /[\\^$.*+?()[\]{}|]/g,
                Ee = RegExp(Oe.source),
                Ae = /^\s+|\s+$/g,
                Ie = /^\s+/,
                Re = /\s+$/,
                Fe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Ne = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Le = /,? & /,
                ze = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                je = /\\(\\)?/g,
                We = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Be = /\w*$/,
                Ue = /^[-+]0x[0-9a-f]+$/i,
                Ye = /^0b[01]+$/i,
                He = /^\[object .+?Constructor\]$/,
                Ve = /^0o[0-7]+$/i,
                Ge = /^(?:0|[1-9]\d*)$/,
                qe = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Ke = /($^)/,
                $e = /['\n\r\u2028\u2029\\]/g,
                Ze = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                Qe = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Xe = "[" + Qe + "]",
                Je = "[" + Ze + "]",
                tn = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                en = "[^\\ud800-\\udfff" + Qe + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                nn = "\\ud83c[\\udffb-\\udfff]",
                rn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                on = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                an = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                un = "(?:" + tn + "|" + en + ")",
                ln = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                sn = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", rn, on].join("|") + ")[\\ufe0e\\ufe0f]?" + ln + ")*",
                cn = "[\\ufe0e\\ufe0f]?" + ln + sn,
                fn = "(?:" + ["[\\u2700-\\u27bf]", rn, on].join("|") + ")" + cn,
                dn = "(?:" + ["[^\\ud800-\\udfff]" + Je + "?", Je, rn, on, "[\\ud800-\\udfff]"].join("|") + ")",
                hn = RegExp("['\u2019]", "g"),
                pn = RegExp(Je, "g"),
                gn = RegExp(nn + "(?=" + nn + ")|" + dn + cn, "g"),
                vn = RegExp([an + "?" + tn + "+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=" + [Xe, an, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=" + [Xe, an + un, "$"].join("|") + ")", an + "?" + un + "+(?:['\u2019](?:d|ll|m|re|s|t|ve))?", an + "+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", fn].join("|"), "g"),
                mn = RegExp("[\\u200d\\ud800-\\udfff" + Ze + "\\ufe0e\\ufe0f]"),
                yn = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                bn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                _n = -1,
                xn = {};
            xn[le] = xn[se] = xn[ce] = xn[fe] = xn[de] = xn[he] = xn[pe] = xn[ge] = xn[ve] = !0, xn[jt] = xn[Wt] = xn[ae] = xn[Ut] = xn[ue] = xn[Yt] = xn[Vt] = xn[Gt] = xn[Kt] = xn[$t] = xn[Qt] = xn[Jt] = xn[te] = xn[ee] = xn[ie] = !1;
            var wn = {};
            wn[jt] = wn[Wt] = wn[ae] = wn[ue] = wn[Ut] = wn[Yt] = wn[le] = wn[se] = wn[ce] = wn[fe] = wn[de] = wn[Kt] = wn[$t] = wn[Qt] = wn[Jt] = wn[te] = wn[ee] = wn[ne] = wn[he] = wn[pe] = wn[ge] = wn[ve] = !0, wn[Vt] = wn[Gt] = wn[ie] = !1;
            var kn = {
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\xc3": "A",
                    "\xc4": "A",
                    "\xc5": "A",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\xe3": "a",
                    "\xe4": "a",
                    "\xe5": "a",
                    "\xc7": "C",
                    "\xe7": "c",
                    "\xd0": "D",
                    "\xf0": "d",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\xcb": "E",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\xeb": "e",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\xcf": "I",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\xef": "i",
                    "\xd1": "N",
                    "\xf1": "n",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\xd5": "O",
                    "\xd6": "O",
                    "\xd8": "O",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\xf5": "o",
                    "\xf6": "o",
                    "\xf8": "o",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\xdc": "U",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\xfc": "u",
                    "\xdd": "Y",
                    "\xfd": "y",
                    "\xff": "y",
                    "\xc6": "Ae",
                    "\xe6": "ae",
                    "\xde": "Th",
                    "\xfe": "th",
                    "\xdf": "ss",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u0104": "A",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u0105": "a",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\u010e": "D",
                    "\u0110": "D",
                    "\u010f": "d",
                    "\u0111": "d",
                    "\u0112": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\u0118": "E",
                    "\u011a": "E",
                    "\u0113": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\u0119": "e",
                    "\u011b": "e",
                    "\u011c": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u0122": "G",
                    "\u011d": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u0123": "g",
                    "\u0124": "H",
                    "\u0126": "H",
                    "\u0125": "h",
                    "\u0127": "h",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u012e": "I",
                    "\u0130": "I",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\u012f": "i",
                    "\u0131": "i",
                    "\u0134": "J",
                    "\u0135": "j",
                    "\u0136": "K",
                    "\u0137": "k",
                    "\u0138": "k",
                    "\u0139": "L",
                    "\u013b": "L",
                    "\u013d": "L",
                    "\u013f": "L",
                    "\u0141": "L",
                    "\u013a": "l",
                    "\u013c": "l",
                    "\u013e": "l",
                    "\u0140": "l",
                    "\u0142": "l",
                    "\u0143": "N",
                    "\u0145": "N",
                    "\u0147": "N",
                    "\u014a": "N",
                    "\u0144": "n",
                    "\u0146": "n",
                    "\u0148": "n",
                    "\u014b": "n",
                    "\u014c": "O",
                    "\u014e": "O",
                    "\u0150": "O",
                    "\u014d": "o",
                    "\u014f": "o",
                    "\u0151": "o",
                    "\u0154": "R",
                    "\u0156": "R",
                    "\u0158": "R",
                    "\u0155": "r",
                    "\u0157": "r",
                    "\u0159": "r",
                    "\u015a": "S",
                    "\u015c": "S",
                    "\u015e": "S",
                    "\u0160": "S",
                    "\u015b": "s",
                    "\u015d": "s",
                    "\u015f": "s",
                    "\u0161": "s",
                    "\u0162": "T",
                    "\u0164": "T",
                    "\u0166": "T",
                    "\u0163": "t",
                    "\u0165": "t",
                    "\u0167": "t",
                    "\u0168": "U",
                    "\u016a": "U",
                    "\u016c": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u0172": "U",
                    "\u0169": "u",
                    "\u016b": "u",
                    "\u016d": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u0173": "u",
                    "\u0174": "W",
                    "\u0175": "w",
                    "\u0176": "Y",
                    "\u0177": "y",
                    "\u0178": "Y",
                    "\u0179": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u017a": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u0132": "IJ",
                    "\u0133": "ij",
                    "\u0152": "Oe",
                    "\u0153": "oe",
                    "\u0149": "'n",
                    "\u017f": "s"
                },
                Sn = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                Cn = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                Mn = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Tn = parseFloat,
                Dn = parseInt,
                Pn = "object" == typeof t && t && t.Object === Object && t,
                On = "object" == typeof self && self && self.Object === Object && self,
                En = Pn || On || Function("return this")(),
                An = "object" == typeof e && e && !e.nodeType && e,
                In = An && "object" == typeof r && r && !r.nodeType && r,
                Rn = In && In.exports === An,
                Fn = Rn && Pn.process,
                Nn = function() {
                    try {
                        var t = In && In.require && In.require("util").types;
                        return t || Fn && Fn.binding && Fn.binding("util")
                    } catch (t) {}
                }(),
                Ln = Nn && Nn.isArrayBuffer,
                zn = Nn && Nn.isDate,
                jn = Nn && Nn.isMap,
                Wn = Nn && Nn.isRegExp,
                Bn = Nn && Nn.isSet,
                Un = Nn && Nn.isTypedArray,
                Yn = M("length"),
                Hn = T(kn),
                Vn = T(Sn),
                Gn = T(Cn),
                qn = function t(e) {
                    function n(t) {
                        if (el(t) && !hd(t) && !(t instanceof y)) {
                            if (t instanceof i) return t;
                            if (dc.call(t, "__wrapped__")) return Xo(t)
                        }
                        return new i(t)
                    }

                    function r() {}

                    function i(t, e) {
                        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = rt
                    }

                    function y(t) {
                        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ft, this.__views__ = []
                    }

                    function T() {
                        var t = new y(this.__wrapped__);
                        return t.__actions__ = Ii(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ii(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ii(this.__views__), t
                    }

                    function Z() {
                        if (this.__filtered__) {
                            var t = new y(this);
                            t.__dir__ = -1, t.__filtered__ = !0
                        } else t = this.clone(), t.__dir__ *= -1;
                        return t
                    }

                    function tt() {
                        var t = this.__wrapped__.value(),
                            e = this.__dir__,
                            n = hd(t),
                            r = e < 0,
                            i = n ? t.length : 0,
                            o = ko(0, i, this.__views__),
                            a = o.start,
                            u = o.end,
                            l = u - a,
                            s = r ? u : a - 1,
                            c = this.__iteratees__,
                            f = c.length,
                            d = 0,
                            h = Uc(l, this.__takeCount__);
                        if (!n || !r && i == l && h == l) return vi(t, this.__actions__);
                        var p = [];
                        t: for (; l-- && d < h;) {
                            s += e;
                            for (var g = -1, v = t[s]; ++g < f;) {
                                var m = c[g],
                                    y = m.iteratee,
                                    b = m.type,
                                    _ = y(v);
                                if (b == Ot) v = _;
                                else if (!_) {
                                    if (b == Pt) continue t;
                                    break t
                                }
                            }
                            p[d++] = v
                        }
                        return p
                    }

                    function et(t) {
                        var e = -1,
                            n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function ze() {
                        this.__data__ = Xc ? Xc(null) : {}, this.size = 0
                    }

                    function Ze(t) {
                        var e = this.has(t) && delete this.__data__[t];
                        return this.size -= e ? 1 : 0, e
                    }

                    function Qe(t) {
                        var e = this.__data__;
                        if (Xc) {
                            var n = e[t];
                            return n === ut ? rt : n
                        }
                        return dc.call(e, t) ? e[t] : rt
                    }

                    function Xe(t) {
                        var e = this.__data__;
                        return Xc ? e[t] !== rt : dc.call(e, t)
                    }

                    function Je(t, e) {
                        var n = this.__data__;
                        return this.size += this.has(t) ? 0 : 1, n[t] = Xc && e === rt ? ut : e, this
                    }

                    function tn(t) {
                        var e = -1,
                            n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function en() {
                        this.__data__ = [], this.size = 0
                    }

                    function nn(t) {
                        var e = this.__data__,
                            n = Kn(e, t);
                        return !(n < 0) && (n == e.length - 1 ? e.pop() : Mc.call(e, n, 1), --this.size, !0)
                    }

                    function rn(t) {
                        var e = this.__data__,
                            n = Kn(e, t);
                        return n < 0 ? rt : e[n][1]
                    }

                    function on(t) {
                        return Kn(this.__data__, t) > -1
                    }

                    function an(t, e) {
                        var n = this.__data__,
                            r = Kn(n, t);
                        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                    }

                    function un(t) {
                        var e = -1,
                            n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function ln() {
                        this.size = 0, this.__data__ = {
                            hash: new et,
                            map: new(Kc || tn),
                            string: new et
                        }
                    }

                    function sn(t) {
                        var e = bo(this, t).delete(t);
                        return this.size -= e ? 1 : 0, e
                    }

                    function cn(t) {
                        return bo(this, t).get(t)
                    }

                    function fn(t) {
                        return bo(this, t).has(t)
                    }

                    function dn(t, e) {
                        var n = bo(this, t),
                            r = n.size;
                        return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                    }

                    function gn(t) {
                        var e = -1,
                            n = null == t ? 0 : t.length;
                        for (this.__data__ = new un; ++e < n;) this.add(t[e])
                    }

                    function vn(t) {
                        return this.__data__.set(t, ut), this
                    }

                    function mn(t) {
                        return this.__data__.has(t)
                    }

                    function yn(t) {
                        var e = this.__data__ = new tn(t);
                        this.size = e.size
                    }

                    function kn() {
                        this.__data__ = new tn, this.size = 0
                    }

                    function Sn(t) {
                        var e = this.__data__,
                            n = e.delete(t);
                        return this.size = e.size, n
                    }

                    function Cn(t) {
                        return this.__data__.get(t)
                    }

                    function Mn(t) {
                        return this.__data__.has(t)
                    }

                    function Pn(t, e) {
                        var n = this.__data__;
                        if (n instanceof tn) {
                            var r = n.__data__;
                            if (!Kc || r.length < it - 1) return r.push([t, e]), this.size = ++n.size, this;
                            n = this.__data__ = new un(r)
                        }
                        return n.set(t, e), this.size = n.size, this
                    }

                    function On(t, e) {
                        var n = hd(t),
                            r = !n && dd(t),
                            i = !n && !r && gd(t),
                            o = !n && !r && !i && _d(t),
                            a = n || r || i || o,
                            u = a ? E(t.length, oc) : [],
                            l = u.length;
                        for (var s in t) !e && !dc.call(t, s) || a && ("length" == s || i && ("offset" == s || "parent" == s) || o && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || Eo(s, l)) || u.push(s);
                        return u
                    }

                    function An(t) {
                        var e = t.length;
                        return e ? t[Qr(0, e - 1)] : rt
                    }

                    function In(t, e) {
                        return Ko(Ii(t), tr(e, 0, t.length))
                    }

                    function Fn(t) {
                        return Ko(Ii(t))
                    }

                    function Nn(t, e, n) {
                        (n === rt || Bu(t[e], n)) && (n !== rt || e in t) || Xn(t, e, n)
                    }

                    function Yn(t, e, n) {
                        var r = t[e];
                        dc.call(t, e) && Bu(r, n) && (n !== rt || e in t) || Xn(t, e, n)
                    }

                    function Kn(t, e) {
                        for (var n = t.length; n--;)
                            if (Bu(t[n][0], e)) return n;
                        return -1
                    }

                    function $n(t, e, n, r) {
                        return ff(t, function(t, i, o) {
                            e(r, t, n(t), o)
                        }), r
                    }

                    function Zn(t, e) {
                        return t && Ri(e, Nl(e), t)
                    }

                    function Qn(t, e) {
                        return t && Ri(e, Ll(e), t)
                    }

                    function Xn(t, e, n) {
                        "__proto__" == e && Oc ? Oc(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        }) : t[e] = n
                    }

                    function Jn(t, e) {
                        for (var n = -1, r = e.length, i = Xs(r), o = null == t; ++n < r;) i[n] = o ? rt : Il(t, e[n]);
                        return i
                    }

                    function tr(t, e, n) {
                        return t === t && (n !== rt && (t = t <= n ? t : n), e !== rt && (t = t >= e ? t : e)), t
                    }

                    function er(t, e, n, r, i, o) {
                        var a, l = e & ct,
                            s = e & ft,
                            c = e & dt;
                        if (n && (a = i ? n(t, r, i, o) : n(t)), a !== rt) return a;
                        if (!tl(t)) return t;
                        var f = hd(t);
                        if (f) {
                            if (a = Mo(t), !l) return Ii(t, a)
                        } else {
                            var d = kf(t),
                                h = d == Gt || d == qt;
                            if (gd(t)) return ki(t, l);
                            if (d == Qt || d == jt || h && !i) {
                                if (a = s || h ? {} : To(t), !l) return s ? Ni(t, Qn(a, t)) : Fi(t, Zn(a, t))
                            } else {
                                if (!wn[d]) return i ? t : {};
                                a = Do(t, d, l)
                            }
                        }
                        o || (o = new yn);
                        var p = o.get(t);
                        if (p) return p;
                        if (o.set(t, a), bd(t)) return t.forEach(function(r) {
                            a.add(er(r, e, n, r, t, o))
                        }), a;
                        if (md(t)) return t.forEach(function(r, i) {
                            a.set(i, er(r, e, n, i, t, o))
                        }), a;
                        var g = c ? s ? go : po : s ? Ll : Nl,
                            v = f ? rt : g(t);
                        return u(v || t, function(r, i) {
                            v && (i = r, r = t[i]), Yn(a, i, er(r, e, n, i, t, o))
                        }), a
                    }

                    function nr(t) {
                        var e = Nl(t);
                        return function(n) {
                            return rr(n, t, e)
                        }
                    }

                    function rr(t, e, n) {
                        var r = n.length;
                        if (null == t) return !r;
                        for (t = rc(t); r--;) {
                            var i = n[r],
                                o = e[i],
                                a = t[i];
                            if (a === rt && !(i in t) || !o(a)) return !1
                        }
                        return !0
                    }

                    function ir(t, e, n) {
                        if ("function" != typeof t) throw new ac(at);
                        return Mf(function() {
                            t.apply(rt, n)
                        }, e)
                    }

                    function or(t, e, n, r) {
                        var i = -1,
                            o = f,
                            a = !0,
                            u = t.length,
                            l = [],
                            s = e.length;
                        if (!u) return l;
                        n && (e = h(e, I(n))), r ? (o = d, a = !1) : e.length >= it && (o = F, a = !1, e = new gn(e));
                        t: for (; ++i < u;) {
                            var c = t[i],
                                p = null == n ? c : n(c);
                            if (c = r || 0 !== c ? c : 0, a && p === p) {
                                for (var g = s; g--;)
                                    if (e[g] === p) continue t;
                                l.push(c)
                            } else o(e, p, r) || l.push(c)
                        }
                        return l
                    }

                    function ar(t, e) {
                        var n = !0;
                        return ff(t, function(t, r, i) {
                            return n = !!e(t, r, i)
                        }), n
                    }

                    function ur(t, e, n) {
                        for (var r = -1, i = t.length; ++r < i;) {
                            var o = t[r],
                                a = e(o);
                            if (null != a && (u === rt ? a === a && !dl(a) : n(a, u))) var u = a,
                                l = o
                        }
                        return l
                    }

                    function lr(t, e, n, r) {
                        var i = t.length;
                        for (n = yl(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === rt || r > i ? i : yl(r), r < 0 && (r += i), r = n > r ? 0 : bl(r); n < r;) t[n++] = e;
                        return t
                    }

                    function sr(t, e) {
                        var n = [];
                        return ff(t, function(t, r, i) {
                            e(t, r, i) && n.push(t)
                        }), n
                    }

                    function cr(t, e, n, r, i) {
                        var o = -1,
                            a = t.length;
                        for (n || (n = Oo), i || (i = []); ++o < a;) {
                            var u = t[o];
                            e > 0 && n(u) ? e > 1 ? cr(u, e - 1, n, r, i) : p(i, u) : r || (i[i.length] = u)
                        }
                        return i
                    }

                    function fr(t, e) {
                        return t && hf(t, e, Nl)
                    }

                    function dr(t, e) {
                        return t && pf(t, e, Nl)
                    }

                    function hr(t, e) {
                        return c(e, function(e) {
                            return Qu(t[e])
                        })
                    }

                    function pr(t, e) {
                        e = xi(e, t);
                        for (var n = 0, r = e.length; null != t && n < r;) t = t[$o(e[n++])];
                        return n && n == r ? t : rt
                    }

                    function gr(t, e, n) {
                        var r = e(t);
                        return hd(t) ? r : p(r, n(t))
                    }

                    function vr(t) {
                        return null == t ? t === rt ? re : Zt : Pc && Pc in rc(t) ? wo(t) : Uo(t)
                    }

                    function mr(t, e) {
                        return t > e
                    }

                    function yr(t, e) {
                        return null != t && dc.call(t, e)
                    }

                    function br(t, e) {
                        return null != t && e in rc(t)
                    }

                    function _r(t, e, n) {
                        return t >= Uc(e, n) && t < Bc(e, n)
                    }

                    function xr(t, e, n) {
                        for (var r = n ? d : f, i = t[0].length, o = t.length, a = o, u = Xs(o), l = 1 / 0, s = []; a--;) {
                            var c = t[a];
                            a && e && (c = h(c, I(e))), l = Uc(c.length, l), u[a] = !n && (e || i >= 120 && c.length >= 120) ? new gn(a && c) : rt
                        }
                        c = t[0];
                        var p = -1,
                            g = u[0];
                        t: for (; ++p < i && s.length < l;) {
                            var v = c[p],
                                m = e ? e(v) : v;
                            if (v = n || 0 !== v ? v : 0, !(g ? F(g, m) : r(s, m, n))) {
                                for (a = o; --a;) {
                                    var y = u[a];
                                    if (!(y ? F(y, m) : r(t[a], m, n))) continue t
                                }
                                g && g.push(m), s.push(v)
                            }
                        }
                        return s
                    }

                    function wr(t, e, n, r) {
                        return fr(t, function(t, i, o) {
                            e(r, n(t), i, o)
                        }), r
                    }

                    function kr(t, e, n) {
                        e = xi(e, t), t = Ho(t, e);
                        var r = null == t ? t : t[$o(ma(e))];
                        return null == r ? rt : o(r, t, n)
                    }

                    function Sr(t) {
                        return el(t) && vr(t) == jt
                    }

                    function Cr(t) {
                        return el(t) && vr(t) == ae
                    }

                    function Mr(t) {
                        return el(t) && vr(t) == Yt
                    }

                    function Tr(t, e, n, r, i) {
                        return t === e || (null == t || null == e || !el(t) && !el(e) ? t !== t && e !== e : Dr(t, e, n, r, Tr, i))
                    }

                    function Dr(t, e, n, r, i, o) {
                        var a = hd(t),
                            u = hd(e),
                            l = a ? Wt : kf(t),
                            s = u ? Wt : kf(e);
                        l = l == jt ? Qt : l, s = s == jt ? Qt : s;
                        var c = l == Qt,
                            f = s == Qt,
                            d = l == s;
                        if (d && gd(t)) {
                            if (!gd(e)) return !1;
                            a = !0, c = !1
                        }
                        if (d && !c) return o || (o = new yn), a || _d(t) ? so(t, e, n, r, i, o) : co(t, e, l, n, r, i, o);
                        if (!(n & ht)) {
                            var h = c && dc.call(t, "__wrapped__"),
                                p = f && dc.call(e, "__wrapped__");
                            if (h || p) {
                                var g = h ? t.value() : t,
                                    v = p ? e.value() : e;
                                return o || (o = new yn), i(g, v, n, r, o)
                            }
                        }
                        return !!d && (o || (o = new yn), fo(t, e, n, r, i, o))
                    }

                    function Pr(t) {
                        return el(t) && kf(t) == Kt
                    }

                    function Or(t, e, n, r) {
                        var i = n.length,
                            o = i,
                            a = !r;
                        if (null == t) return !o;
                        for (t = rc(t); i--;) {
                            var u = n[i];
                            if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
                        }
                        for (; ++i < o;) {
                            u = n[i];
                            var l = u[0],
                                s = t[l],
                                c = u[1];
                            if (a && u[2]) {
                                if (s === rt && !(l in t)) return !1
                            } else {
                                var f = new yn;
                                if (r) var d = r(s, c, l, t, e, f);
                                if (!(d === rt ? Tr(c, s, ht | pt, r, f) : d)) return !1
                            }
                        }
                        return !0
                    }

                    function Er(t) {
                        return !(!tl(t) || No(t)) && (Qu(t) ? yc : He).test(Zo(t))
                    }

                    function Ar(t) {
                        return el(t) && vr(t) == Jt
                    }

                    function Ir(t) {
                        return el(t) && kf(t) == te
                    }

                    function Rr(t) {
                        return el(t) && Ju(t.length) && !!xn[vr(t)]
                    }

                    function Fr(t) {
                        return "function" == typeof t ? t : null == t ? Ms : "object" == typeof t ? hd(t) ? Br(t[0], t[1]) : Wr(t) : Rs(t)
                    }

                    function Nr(t) {
                        if (!Lo(t)) return Wc(t);
                        var e = [];
                        for (var n in rc(t)) dc.call(t, n) && "constructor" != n && e.push(n);
                        return e
                    }

                    function Lr(t) {
                        if (!tl(t)) return Bo(t);
                        var e = Lo(t),
                            n = [];
                        for (var r in t)("constructor" != r || !e && dc.call(t, r)) && n.push(r);
                        return n
                    }

                    function zr(t, e) {
                        return t < e
                    }

                    function jr(t, e) {
                        var n = -1,
                            r = Uu(t) ? Xs(t.length) : [];
                        return ff(t, function(t, i, o) {
                            r[++n] = e(t, i, o)
                        }), r
                    }

                    function Wr(t) {
                        var e = _o(t);
                        return 1 == e.length && e[0][2] ? jo(e[0][0], e[0][1]) : function(n) {
                            return n === t || Or(n, t, e)
                        }
                    }

                    function Br(t, e) {
                        return Io(t) && zo(e) ? jo($o(t), e) : function(n) {
                            var r = Il(n, t);
                            return r === rt && r === e ? Fl(n, t) : Tr(e, r, ht | pt)
                        }
                    }

                    function Ur(t, e, n, r, i) {
                        t !== e && hf(e, function(o, a) {
                            if (tl(o)) i || (i = new yn), Yr(t, e, a, n, Ur, r, i);
                            else {
                                var u = r ? r(q(t, a), o, a + "", t, e, i) : rt;
                                u === rt && (u = o), Nn(t, a, u)
                            }
                        }, Ll)
                    }

                    function Yr(t, e, n, r, i, o, a) {
                        var u = q(t, n),
                            l = q(e, n),
                            s = a.get(l);
                        if (s) return void Nn(t, n, s);
                        var c = o ? o(u, l, n + "", t, e, a) : rt,
                            f = c === rt;
                        if (f) {
                            var d = hd(l),
                                h = !d && gd(l),
                                p = !d && !h && _d(l);
                            c = l, d || h || p ? hd(u) ? c = u : Yu(u) ? c = Ii(u) : h ? (f = !1, c = ki(l, !0)) : p ? (f = !1, c = Di(l, !0)) : c = [] : sl(l) || dd(l) ? (c = u, dd(u) ? c = xl(u) : (!tl(u) || r && Qu(u)) && (c = To(l))) : f = !1
                        }
                        f && (a.set(l, c), i(c, l, r, o, a), a.delete(l)), Nn(t, n, c)
                    }

                    function Hr(t, e) {
                        var n = t.length;
                        if (n) return e += e < 0 ? n : 0, Eo(e, n) ? t[e] : rt
                    }

                    function Vr(t, e, n) {
                        var r = -1;
                        return e = h(e.length ? e : [Ms], I(yo())), P(jr(t, function(t, n, i) {
                            return {
                                criteria: h(e, function(e) {
                                    return e(t)
                                }),
                                index: ++r,
                                value: t
                            }
                        }), function(t, e) {
                            return Oi(t, e, n)
                        })
                    }

                    function Gr(t, e) {
                        return qr(t, e, function(e, n) {
                            return Fl(t, n)
                        })
                    }

                    function qr(t, e, n) {
                        for (var r = -1, i = e.length, o = {}; ++r < i;) {
                            var a = e[r],
                                u = pr(t, a);
                            n(u, a) && ri(o, xi(a, t), u)
                        }
                        return o
                    }

                    function Kr(t) {
                        return function(e) {
                            return pr(e, t)
                        }
                    }

                    function $r(t, e, n, r) {
                        var i = r ? k : w,
                            o = -1,
                            a = e.length,
                            u = t;
                        for (t === e && (e = Ii(e)), n && (u = h(t, I(n))); ++o < a;)
                            for (var l = 0, s = e[o], c = n ? n(s) : s;
                                (l = i(u, c, l, r)) > -1;) u !== t && Mc.call(u, l, 1), Mc.call(t, l, 1);
                        return t
                    }

                    function Zr(t, e) {
                        for (var n = t ? e.length : 0, r = n - 1; n--;) {
                            var i = e[n];
                            if (n == r || i !== o) {
                                var o = i;
                                Eo(i) ? Mc.call(t, i, 1) : hi(t, i)
                            }
                        }
                        return t
                    }

                    function Qr(t, e) {
                        return t + Fc(Vc() * (e - t + 1))
                    }

                    function Xr(t, e, n, r) {
                        for (var i = -1, o = Bc(Rc((e - t) / (n || 1)), 0), a = Xs(o); o--;) a[r ? o : ++i] = t, t += n;
                        return a
                    }

                    function Jr(t, e) {
                        var n = "";
                        if (!t || e < 1 || e > At) return n;
                        do {
                            e % 2 && (n += t), (e = Fc(e / 2)) && (t += t)
                        } while (e);
                        return n
                    }

                    function ti(t, e) {
                        return Tf(Yo(t, e, Ms), t + "")
                    }

                    function ei(t) {
                        return An($l(t))
                    }

                    function ni(t, e) {
                        var n = $l(t);
                        return Ko(n, tr(e, 0, n.length))
                    }

                    function ri(t, e, n, r) {
                        if (!tl(t)) return t;
                        e = xi(e, t);
                        for (var i = -1, o = e.length, a = o - 1, u = t; null != u && ++i < o;) {
                            var l = $o(e[i]),
                                s = n;
                            if (i != a) {
                                var c = u[l];
                                s = r ? r(c, l, u) : rt, s === rt && (s = tl(c) ? c : Eo(e[i + 1]) ? [] : {})
                            }
                            Yn(u, l, s), u = u[l]
                        }
                        return t
                    }

                    function ii(t) {
                        return Ko($l(t))
                    }

                    function oi(t, e, n) {
                        var r = -1,
                            i = t.length;
                        e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
                        for (var o = Xs(i); ++r < i;) o[r] = t[r + e];
                        return o
                    }

                    function ai(t, e) {
                        var n;
                        return ff(t, function(t, r, i) {
                            return !(n = e(t, r, i))
                        }), !!n
                    }

                    function ui(t, e, n) {
                        var r = 0,
                            i = null == t ? r : t.length;
                        if ("number" == typeof e && e === e && i <= Lt) {
                            for (; r < i;) {
                                var o = r + i >>> 1,
                                    a = t[o];
                                null !== a && !dl(a) && (n ? a <= e : a < e) ? r = o + 1 : i = o
                            }
                            return i
                        }
                        return li(t, e, Ms, n)
                    }

                    function li(t, e, n, r) {
                        e = n(e);
                        for (var i = 0, o = null == t ? 0 : t.length, a = e !== e, u = null === e, l = dl(e), s = e === rt; i < o;) {
                            var c = Fc((i + o) / 2),
                                f = n(t[c]),
                                d = f !== rt,
                                h = null === f,
                                p = f === f,
                                g = dl(f);
                            if (a) var v = r || p;
                            else v = s ? p && (r || d) : u ? p && d && (r || !h) : l ? p && d && !h && (r || !g) : !h && !g && (r ? f <= e : f < e);
                            v ? i = c + 1 : o = c
                        }
                        return Uc(o, Nt)
                    }

                    function si(t, e) {
                        for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                            var a = t[n],
                                u = e ? e(a) : a;
                            if (!n || !Bu(u, l)) {
                                var l = u;
                                o[i++] = 0 === a ? 0 : a
                            }
                        }
                        return o
                    }

                    function ci(t) {
                        return "number" == typeof t ? t : dl(t) ? Rt : +t
                    }

                    function fi(t) {
                        if ("string" == typeof t) return t;
                        if (hd(t)) return h(t, fi) + "";
                        if (dl(t)) return sf ? sf.call(t) : "";
                        var e = t + "";
                        return "0" == e && 1 / t == -Et ? "-0" : e
                    }

                    function di(t, e, n) {
                        var r = -1,
                            i = f,
                            o = t.length,
                            a = !0,
                            u = [],
                            l = u;
                        if (n) a = !1, i = d;
                        else if (o >= it) {
                            var s = e ? null : bf(t);
                            if (s) return K(s);
                            a = !1, i = F, l = new gn
                        } else l = e ? [] : u;
                        t: for (; ++r < o;) {
                            var c = t[r],
                                h = e ? e(c) : c;
                            if (c = n || 0 !== c ? c : 0, a && h === h) {
                                for (var p = l.length; p--;)
                                    if (l[p] === h) continue t;
                                e && l.push(h), u.push(c)
                            } else i(l, h, n) || (l !== u && l.push(h), u.push(c))
                        }
                        return u
                    }

                    function hi(t, e) {
                        return e = xi(e, t), null == (t = Ho(t, e)) || delete t[$o(ma(e))]
                    }

                    function pi(t, e, n, r) {
                        return ri(t, e, n(pr(t, e)), r)
                    }

                    function gi(t, e, n, r) {
                        for (var i = t.length, o = r ? i : -1;
                            (r ? o-- : ++o < i) && e(t[o], o, t););
                        return n ? oi(t, r ? 0 : o, r ? o + 1 : i) : oi(t, r ? o + 1 : 0, r ? i : o)
                    }

                    function vi(t, e) {
                        var n = t;
                        return n instanceof y && (n = n.value()), g(e, function(t, e) {
                            return e.func.apply(e.thisArg, p([t], e.args))
                        }, n)
                    }

                    function mi(t, e, n) {
                        var r = t.length;
                        if (r < 2) return r ? di(t[0]) : [];
                        for (var i = -1, o = Xs(r); ++i < r;)
                            for (var a = t[i], u = -1; ++u < r;) u != i && (o[i] = or(o[i] || a, t[u], e, n));
                        return di(cr(o, 1), e, n)
                    }

                    function yi(t, e, n) {
                        for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
                            var u = r < o ? e[r] : rt;
                            n(a, t[r], u)
                        }
                        return a
                    }

                    function bi(t) {
                        return Yu(t) ? t : []
                    }

                    function _i(t) {
                        return "function" == typeof t ? t : Ms
                    }

                    function xi(t, e) {
                        return hd(t) ? t : Io(t, e) ? [t] : Df(kl(t))
                    }

                    function wi(t, e, n) {
                        var r = t.length;
                        return n = n === rt ? r : n, !e && n >= r ? t : oi(t, e, n)
                    }

                    function ki(t, e) {
                        if (e) return t.slice();
                        var n = t.length,
                            r = wc ? wc(n) : new t.constructor(n);
                        return t.copy(r), r
                    }

                    function Si(t) {
                        var e = new t.constructor(t.byteLength);
                        return new xc(e).set(new xc(t)), e
                    }

                    function Ci(t, e) {
                        var n = e ? Si(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.byteLength)
                    }

                    function Mi(t) {
                        var e = new t.constructor(t.source, Be.exec(t));
                        return e.lastIndex = t.lastIndex, e
                    }

                    function Ti(t) {
                        return lf ? rc(lf.call(t)) : {}
                    }

                    function Di(t, e) {
                        var n = e ? Si(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.length)
                    }

                    function Pi(t, e) {
                        if (t !== e) {
                            var n = t !== rt,
                                r = null === t,
                                i = t === t,
                                o = dl(t),
                                a = e !== rt,
                                u = null === e,
                                l = e === e,
                                s = dl(e);
                            if (!u && !s && !o && t > e || o && a && l && !u && !s || r && a && l || !n && l || !i) return 1;
                            if (!r && !o && !s && t < e || s && n && i && !r && !o || u && n && i || !a && i || !l) return -1
                        }
                        return 0
                    }

                    function Oi(t, e, n) {
                        for (var r = -1, i = t.criteria, o = e.criteria, a = i.length, u = n.length; ++r < a;) {
                            var l = Pi(i[r], o[r]);
                            if (l) {
                                if (r >= u) return l;
                                return l * ("desc" == n[r] ? -1 : 1)
                            }
                        }
                        return t.index - e.index
                    }

                    function Ei(t, e, n, r) {
                        for (var i = -1, o = t.length, a = n.length, u = -1, l = e.length, s = Bc(o - a, 0), c = Xs(l + s), f = !r; ++u < l;) c[u] = e[u];
                        for (; ++i < a;)(f || i < o) && (c[n[i]] = t[i]);
                        for (; s--;) c[u++] = t[i++];
                        return c
                    }

                    function Ai(t, e, n, r) {
                        for (var i = -1, o = t.length, a = -1, u = n.length, l = -1, s = e.length, c = Bc(o - u, 0), f = Xs(c + s), d = !r; ++i < c;) f[i] = t[i];
                        for (var h = i; ++l < s;) f[h + l] = e[l];
                        for (; ++a < u;)(d || i < o) && (f[h + n[a]] = t[i++]);
                        return f
                    }

                    function Ii(t, e) {
                        var n = -1,
                            r = t.length;
                        for (e || (e = Xs(r)); ++n < r;) e[n] = t[n];
                        return e
                    }

                    function Ri(t, e, n, r) {
                        var i = !n;
                        n || (n = {});
                        for (var o = -1, a = e.length; ++o < a;) {
                            var u = e[o],
                                l = r ? r(n[u], t[u], u, n, t) : rt;
                            l === rt && (l = t[u]), i ? Xn(n, u, l) : Yn(n, u, l)
                        }
                        return n
                    }

                    function Fi(t, e) {
                        return Ri(t, xf(t), e)
                    }

                    function Ni(t, e) {
                        return Ri(t, wf(t), e)
                    }

                    function Li(t, e) {
                        return function(n, r) {
                            var i = hd(n) ? a : $n,
                                o = e ? e() : {};
                            return i(n, t, yo(r, 2), o)
                        }
                    }

                    function zi(t) {
                        return ti(function(e, n) {
                            var r = -1,
                                i = n.length,
                                o = i > 1 ? n[i - 1] : rt,
                                a = i > 2 ? n[2] : rt;
                            for (o = t.length > 3 && "function" == typeof o ? (i--, o) : rt, a && Ao(n[0], n[1], a) && (o = i < 3 ? rt : o, i = 1), e = rc(e); ++r < i;) {
                                var u = n[r];
                                u && t(e, u, r, o)
                            }
                            return e
                        })
                    }

                    function ji(t, e) {
                        return function(n, r) {
                            if (null == n) return n;
                            if (!Uu(n)) return t(n, r);
                            for (var i = n.length, o = e ? i : -1, a = rc(n);
                                (e ? o-- : ++o < i) && !1 !== r(a[o], o, a););
                            return n
                        }
                    }

                    function Wi(t) {
                        return function(e, n, r) {
                            for (var i = -1, o = rc(e), a = r(e), u = a.length; u--;) {
                                var l = a[t ? u : ++i];
                                if (!1 === n(o[l], l, o)) break
                            }
                            return e
                        }
                    }

                    function Bi(t, e, n) {
                        function r() {
                            return (this && this !== En && this instanceof r ? o : t).apply(i ? n : this, arguments)
                        }
                        var i = e & gt,
                            o = Hi(t);
                        return r
                    }

                    function Ui(t) {
                        return function(e) {
                            e = kl(e);
                            var n = B(e) ? J(e) : rt,
                                r = n ? n[0] : e.charAt(0),
                                i = n ? wi(n, 1).join("") : e.slice(1);
                            return r[t]() + i
                        }
                    }

                    function Yi(t) {
                        return function(e) {
                            return g(xs(es(e).replace(hn, "")), t, "")
                        }
                    }

                    function Hi(t) {
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e[0]);
                                case 2:
                                    return new t(e[0], e[1]);
                                case 3:
                                    return new t(e[0], e[1], e[2]);
                                case 4:
                                    return new t(e[0], e[1], e[2], e[3]);
                                case 5:
                                    return new t(e[0], e[1], e[2], e[3], e[4]);
                                case 6:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                case 7:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                            }
                            var n = cf(t.prototype),
                                r = t.apply(n, e);
                            return tl(r) ? r : n
                        }
                    }

                    function Vi(t, e, n) {
                        function r() {
                            for (var a = arguments.length, u = Xs(a), l = a, s = mo(r); l--;) u[l] = arguments[l];
                            var c = a < 3 && u[0] !== s && u[a - 1] !== s ? [] : G(u, s);
                            return (a -= c.length) < n ? no(t, e, Ki, r.placeholder, rt, u, c, rt, rt, n - a) : o(this && this !== En && this instanceof r ? i : t, this, u)
                        }
                        var i = Hi(t);
                        return r
                    }

                    function Gi(t) {
                        return function(e, n, r) {
                            var i = rc(e);
                            if (!Uu(e)) {
                                var o = yo(n, 3);
                                e = Nl(e), n = function(t) {
                                    return o(i[t], t, i)
                                }
                            }
                            var a = t(e, n, r);
                            return a > -1 ? i[o ? e[a] : a] : rt
                        }
                    }

                    function qi(t) {
                        return ho(function(e) {
                            var n = e.length,
                                r = n,
                                o = i.prototype.thru;
                            for (t && e.reverse(); r--;) {
                                var a = e[r];
                                if ("function" != typeof a) throw new ac(at);
                                if (o && !u && "wrapper" == vo(a)) var u = new i([], !0)
                            }
                            for (r = u ? r : n; ++r < n;) {
                                a = e[r];
                                var l = vo(a),
                                    s = "wrapper" == l ? _f(a) : rt;
                                u = s && Fo(s[0]) && s[1] == (wt | yt | _t | kt) && !s[4].length && 1 == s[9] ? u[vo(s[0])].apply(u, s[3]) : 1 == a.length && Fo(a) ? u[l]() : u.thru(a)
                            }
                            return function() {
                                var t = arguments,
                                    r = t[0];
                                if (u && 1 == t.length && hd(r)) return u.plant(r).value();
                                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                                return o
                            }
                        })
                    }

                    function Ki(t, e, n, r, i, o, a, u, l, s) {
                        function c() {
                            for (var m = arguments.length, y = Xs(m), b = m; b--;) y[b] = arguments[b];
                            if (p) var _ = mo(c),
                                x = z(y, _);
                            if (r && (y = Ei(y, r, i, p)), o && (y = Ai(y, o, a, p)), m -= x, p && m < s) {
                                var w = G(y, _);
                                return no(t, e, Ki, c.placeholder, n, y, w, u, l, s - m)
                            }
                            var k = d ? n : this,
                                S = h ? k[t] : t;
                            return m = y.length, u ? y = Vo(y, u) : g && m > 1 && y.reverse(), f && l < m && (y.length = l), this && this !== En && this instanceof c && (S = v || Hi(S)), S.apply(k, y)
                        }
                        var f = e & wt,
                            d = e & gt,
                            h = e & vt,
                            p = e & (yt | bt),
                            g = e & St,
                            v = h ? rt : Hi(t);
                        return c
                    }

                    function $i(t, e) {
                        return function(n, r) {
                            return wr(n, t, e(r), {})
                        }
                    }

                    function Zi(t, e) {
                        return function(n, r) {
                            var i;
                            if (n === rt && r === rt) return e;
                            if (n !== rt && (i = n), r !== rt) {
                                if (i === rt) return r;
                                "string" == typeof n || "string" == typeof r ? (n = fi(n), r = fi(r)) : (n = ci(n), r = ci(r)), i = t(n, r)
                            }
                            return i
                        }
                    }

                    function Qi(t) {
                        return ho(function(e) {
                            return e = h(e, I(yo())), ti(function(n) {
                                var r = this;
                                return t(e, function(t) {
                                    return o(t, r, n)
                                })
                            })
                        })
                    }

                    function Xi(t, e) {
                        e = e === rt ? " " : fi(e);
                        var n = e.length;
                        if (n < 2) return n ? Jr(e, t) : e;
                        var r = Jr(e, Rc(t / X(e)));
                        return B(e) ? wi(J(r), 0, t).join("") : r.slice(0, t)
                    }

                    function Ji(t, e, n, r) {
                        function i() {
                            for (var e = -1, l = arguments.length, s = -1, c = r.length, f = Xs(c + l), d = this && this !== En && this instanceof i ? u : t; ++s < c;) f[s] = r[s];
                            for (; l--;) f[s++] = arguments[++e];
                            return o(d, a ? n : this, f)
                        }
                        var a = e & gt,
                            u = Hi(t);
                        return i
                    }

                    function to(t) {
                        return function(e, n, r) {
                            return r && "number" != typeof r && Ao(e, n, r) && (n = r = rt), e = ml(e), n === rt ? (n = e, e = 0) : n = ml(n), r = r === rt ? e < n ? 1 : -1 : ml(r), Xr(e, n, r, t)
                        }
                    }

                    function eo(t) {
                        return function(e, n) {
                            return "string" == typeof e && "string" == typeof n || (e = _l(e), n = _l(n)), t(e, n)
                        }
                    }

                    function no(t, e, n, r, i, o, a, u, l, s) {
                        var c = e & yt,
                            f = c ? a : rt,
                            d = c ? rt : a,
                            h = c ? o : rt,
                            p = c ? rt : o;
                        e |= c ? _t : xt, (e &= ~(c ? xt : _t)) & mt || (e &= ~(gt | vt));
                        var g = [t, e, i, h, f, p, d, u, l, s],
                            v = n.apply(rt, g);
                        return Fo(t) && Cf(v, g), v.placeholder = r, Go(v, t, e)
                    }

                    function ro(t) {
                        var e = nc[t];
                        return function(t, n) {
                            if (t = _l(t), n = null == n ? 0 : Uc(yl(n), 292)) {
                                var r = (kl(t) + "e").split("e");
                                return r = (kl(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
                            }
                            return e(t)
                        }
                    }

                    function io(t) {
                        return function(e) {
                            var n = kf(e);
                            return n == Kt ? H(e) : n == te ? $(e) : A(e, t(e))
                        }
                    }

                    function oo(t, e, n, r, i, o, a, u) {
                        var l = e & vt;
                        if (!l && "function" != typeof t) throw new ac(at);
                        var s = r ? r.length : 0;
                        if (s || (e &= ~(_t | xt), r = i = rt), a = a === rt ? a : Bc(yl(a), 0), u = u === rt ? u : yl(u), s -= i ? i.length : 0, e & xt) {
                            var c = r,
                                f = i;
                            r = i = rt
                        }
                        var d = l ? rt : _f(t),
                            h = [t, e, n, r, i, c, f, o, a, u];
                        if (d && Wo(h, d), t = h[0], e = h[1], n = h[2], r = h[3], i = h[4], u = h[9] = h[9] === rt ? l ? 0 : t.length : Bc(h[9] - s, 0), !u && e & (yt | bt) && (e &= ~(yt | bt)), e && e != gt) p = e == yt || e == bt ? Vi(t, e, u) : e != _t && e != (gt | _t) || i.length ? Ki.apply(rt, h) : Ji(t, e, n, r);
                        else var p = Bi(t, e, n);
                        return Go((d ? gf : Cf)(p, h), t, e)
                    }

                    function ao(t, e, n, r) {
                        return t === rt || Bu(t, sc[n]) && !dc.call(r, n) ? e : t
                    }

                    function uo(t, e, n, r, i, o) {
                        return tl(t) && tl(e) && (o.set(e, t), Ur(t, e, rt, uo, o), o.delete(e)), t
                    }

                    function lo(t) {
                        return sl(t) ? rt : t
                    }

                    function so(t, e, n, r, i, o) {
                        var a = n & ht,
                            u = t.length,
                            l = e.length;
                        if (u != l && !(a && l > u)) return !1;
                        var s = o.get(t);
                        if (s && o.get(e)) return s == e;
                        var c = -1,
                            f = !0,
                            d = n & pt ? new gn : rt;
                        for (o.set(t, e), o.set(e, t); ++c < u;) {
                            var h = t[c],
                                p = e[c];
                            if (r) var g = a ? r(p, h, c, e, t, o) : r(h, p, c, t, e, o);
                            if (g !== rt) {
                                if (g) continue;
                                f = !1;
                                break
                            }
                            if (d) {
                                if (!m(e, function(t, e) {
                                        if (!F(d, e) && (h === t || i(h, t, n, r, o))) return d.push(e)
                                    })) {
                                    f = !1;
                                    break
                                }
                            } else if (h !== p && !i(h, p, n, r, o)) {
                                f = !1;
                                break
                            }
                        }
                        return o.delete(t), o.delete(e), f
                    }

                    function co(t, e, n, r, i, o, a) {
                        switch (n) {
                            case ue:
                                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                t = t.buffer, e = e.buffer;
                            case ae:
                                return !(t.byteLength != e.byteLength || !o(new xc(t), new xc(e)));
                            case Ut:
                            case Yt:
                            case $t:
                                return Bu(+t, +e);
                            case Vt:
                                return t.name == e.name && t.message == e.message;
                            case Jt:
                            case ee:
                                return t == e + "";
                            case Kt:
                                var u = H;
                            case te:
                                var l = r & ht;
                                if (u || (u = K), t.size != e.size && !l) return !1;
                                var s = a.get(t);
                                if (s) return s == e;
                                r |= pt, a.set(t, e);
                                var c = so(u(t), u(e), r, i, o, a);
                                return a.delete(t), c;
                            case ne:
                                if (lf) return lf.call(t) == lf.call(e)
                        }
                        return !1
                    }

                    function fo(t, e, n, r, i, o) {
                        var a = n & ht,
                            u = po(t),
                            l = u.length;
                        if (l != po(e).length && !a) return !1;
                        for (var s = l; s--;) {
                            var c = u[s];
                            if (!(a ? c in e : dc.call(e, c))) return !1
                        }
                        var f = o.get(t);
                        if (f && o.get(e)) return f == e;
                        var d = !0;
                        o.set(t, e), o.set(e, t);
                        for (var h = a; ++s < l;) {
                            c = u[s];
                            var p = t[c],
                                g = e[c];
                            if (r) var v = a ? r(g, p, c, e, t, o) : r(p, g, c, t, e, o);
                            if (!(v === rt ? p === g || i(p, g, n, r, o) : v)) {
                                d = !1;
                                break
                            }
                            h || (h = "constructor" == c)
                        }
                        if (d && !h) {
                            var m = t.constructor,
                                y = e.constructor;
                            m != y && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof y && y instanceof y) && (d = !1)
                        }
                        return o.delete(t), o.delete(e), d
                    }

                    function ho(t) {
                        return Tf(Yo(t, rt, sa), t + "")
                    }

                    function po(t) {
                        return gr(t, Nl, xf)
                    }

                    function go(t) {
                        return gr(t, Ll, wf)
                    }

                    function vo(t) {
                        for (var e = t.name + "", n = tf[e], r = dc.call(tf, e) ? n.length : 0; r--;) {
                            var i = n[r],
                                o = i.func;
                            if (null == o || o == t) return i.name
                        }
                        return e
                    }

                    function mo(t) {
                        return (dc.call(n, "placeholder") ? n : t).placeholder
                    }

                    function yo() {
                        var t = n.iteratee || Ts;
                        return t = t === Ts ? Fr : t, arguments.length ? t(arguments[0], arguments[1]) : t
                    }

                    function bo(t, e) {
                        var n = t.__data__;
                        return Ro(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                    }

                    function _o(t) {
                        for (var e = Nl(t), n = e.length; n--;) {
                            var r = e[n],
                                i = t[r];
                            e[n] = [r, i, zo(i)]
                        }
                        return e
                    }

                    function xo(t, e) {
                        var n = W(t, e);
                        return Er(n) ? n : rt
                    }

                    function wo(t) {
                        var e = dc.call(t, Pc),
                            n = t[Pc];
                        try {
                            t[Pc] = rt;
                            var r = !0
                        } catch (t) {}
                        var i = gc.call(t);
                        return r && (e ? t[Pc] = n : delete t[Pc]), i
                    }

                    function ko(t, e, n) {
                        for (var r = -1, i = n.length; ++r < i;) {
                            var o = n[r],
                                a = o.size;
                            switch (o.type) {
                                case "drop":
                                    t += a;
                                    break;
                                case "dropRight":
                                    e -= a;
                                    break;
                                case "take":
                                    e = Uc(e, t + a);
                                    break;
                                case "takeRight":
                                    t = Bc(t, e - a)
                            }
                        }
                        return {
                            start: t,
                            end: e
                        }
                    }

                    function So(t) {
                        var e = t.match(Ne);
                        return e ? e[1].split(Le) : []
                    }

                    function Co(t, e, n) {
                        e = xi(e, t);
                        for (var r = -1, i = e.length, o = !1; ++r < i;) {
                            var a = $o(e[r]);
                            if (!(o = null != t && n(t, a))) break;
                            t = t[a]
                        }
                        return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && Ju(i) && Eo(a, i) && (hd(t) || dd(t))
                    }

                    function Mo(t) {
                        var e = t.length,
                            n = new t.constructor(e);
                        return e && "string" == typeof t[0] && dc.call(t, "index") && (n.index = t.index, n.input = t.input), n
                    }

                    function To(t) {
                        return "function" != typeof t.constructor || Lo(t) ? {} : cf(kc(t))
                    }

                    function Do(t, e, n) {
                        var r = t.constructor;
                        switch (e) {
                            case ae:
                                return Si(t);
                            case Ut:
                            case Yt:
                                return new r(+t);
                            case ue:
                                return Ci(t, n);
                            case le:
                            case se:
                            case ce:
                            case fe:
                            case de:
                            case he:
                            case pe:
                            case ge:
                            case ve:
                                return Di(t, n);
                            case Kt:
                                return new r;
                            case $t:
                            case ee:
                                return new r(t);
                            case Jt:
                                return Mi(t);
                            case te:
                                return new r;
                            case ne:
                                return Ti(t)
                        }
                    }

                    function Po(t, e) {
                        var n = e.length;
                        if (!n) return t;
                        var r = n - 1;
                        return e[r] = (n > 1 ? "& " : "") + e[r], e = e.join(n > 2 ? ", " : " "), t.replace(Fe, "{\n/* [wrapped with " + e + "] */\n")
                    }

                    function Oo(t) {
                        return hd(t) || dd(t) || !!(Tc && t && t[Tc])
                    }

                    function Eo(t, e) {
                        var n = typeof t;
                        return !!(e = null == e ? At : e) && ("number" == n || "symbol" != n && Ge.test(t)) && t > -1 && t % 1 == 0 && t < e
                    }

                    function Ao(t, e, n) {
                        if (!tl(n)) return !1;
                        var r = typeof e;
                        return !!("number" == r ? Uu(n) && Eo(e, n.length) : "string" == r && e in n) && Bu(n[e], t)
                    }

                    function Io(t, e) {
                        if (hd(t)) return !1;
                        var n = typeof t;
                        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !dl(t)) || (De.test(t) || !Te.test(t) || null != e && t in rc(e))
                    }

                    function Ro(t) {
                        var e = typeof t;
                        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                    }

                    function Fo(t) {
                        var e = vo(t),
                            r = n[e];
                        if ("function" != typeof r || !(e in y.prototype)) return !1;
                        if (t === r) return !0;
                        var i = _f(r);
                        return !!i && t === i[0]
                    }

                    function No(t) {
                        return !!pc && pc in t
                    }

                    function Lo(t) {
                        var e = t && t.constructor;
                        return t === ("function" == typeof e && e.prototype || sc)
                    }

                    function zo(t) {
                        return t === t && !tl(t)
                    }

                    function jo(t, e) {
                        return function(n) {
                            return null != n && (n[t] === e && (e !== rt || t in rc(n)))
                        }
                    }

                    function Wo(t, e) {
                        var n = t[1],
                            r = e[1],
                            i = n | r,
                            o = i < (gt | vt | wt),
                            a = r == wt && n == yt || r == wt && n == kt && t[7].length <= e[8] || r == (wt | kt) && e[7].length <= e[8] && n == yt;
                        if (!o && !a) return t;
                        r & gt && (t[2] = e[2], i |= n & gt ? 0 : mt);
                        var u = e[3];
                        if (u) {
                            var l = t[3];
                            t[3] = l ? Ei(l, u, e[4]) : u, t[4] = l ? G(t[3], st) : e[4]
                        }
                        return u = e[5], u && (l = t[5], t[5] = l ? Ai(l, u, e[6]) : u, t[6] = l ? G(t[5], st) : e[6]), u = e[7], u && (t[7] = u), r & wt && (t[8] = null == t[8] ? e[8] : Uc(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
                    }

                    function Bo(t) {
                        var e = [];
                        if (null != t)
                            for (var n in rc(t)) e.push(n);
                        return e
                    }

                    function Uo(t) {
                        return gc.call(t)
                    }

                    function Yo(t, e, n) {
                        return e = Bc(e === rt ? t.length - 1 : e, 0),
                            function() {
                                for (var r = arguments, i = -1, a = Bc(r.length - e, 0), u = Xs(a); ++i < a;) u[i] = r[e + i];
                                i = -1;
                                for (var l = Xs(e + 1); ++i < e;) l[i] = r[i];
                                return l[e] = n(u), o(t, this, l)
                            }
                    }

                    function Ho(t, e) {
                        return e.length < 2 ? t : pr(t, oi(e, 0, -1))
                    }

                    function Vo(t, e) {
                        for (var n = t.length, r = Uc(e.length, n), i = Ii(t); r--;) {
                            var o = e[r];
                            t[r] = Eo(o, n) ? i[o] : rt
                        }
                        return t
                    }

                    function Go(t, e, n) {
                        var r = e + "";
                        return Tf(t, Po(r, Qo(So(r), n)))
                    }

                    function qo(t) {
                        var e = 0,
                            n = 0;
                        return function() {
                            var r = Yc(),
                                i = Dt - (r - n);
                            if (n = r, i > 0) {
                                if (++e >= Tt) return arguments[0]
                            } else e = 0;
                            return t.apply(rt, arguments)
                        }
                    }

                    function Ko(t, e) {
                        var n = -1,
                            r = t.length,
                            i = r - 1;
                        for (e = e === rt ? r : e; ++n < e;) {
                            var o = Qr(n, i),
                                a = t[o];
                            t[o] = t[n], t[n] = a
                        }
                        return t.length = e, t
                    }

                    function $o(t) {
                        if ("string" == typeof t || dl(t)) return t;
                        var e = t + "";
                        return "0" == e && 1 / t == -Et ? "-0" : e
                    }

                    function Zo(t) {
                        if (null != t) {
                            try {
                                return fc.call(t)
                            } catch (t) {}
                            try {
                                return t + ""
                            } catch (t) {}
                        }
                        return ""
                    }

                    function Qo(t, e) {
                        return u(zt, function(n) {
                            var r = "_." + n[0];
                            e & n[1] && !f(t, r) && t.push(r)
                        }), t.sort()
                    }

                    function Xo(t) {
                        if (t instanceof y) return t.clone();
                        var e = new i(t.__wrapped__, t.__chain__);
                        return e.__actions__ = Ii(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                    }

                    function Jo(t, e, n) {
                        e = (n ? Ao(t, e, n) : e === rt) ? 1 : Bc(yl(e), 0);
                        var r = null == t ? 0 : t.length;
                        if (!r || e < 1) return [];
                        for (var i = 0, o = 0, a = Xs(Rc(r / e)); i < r;) a[o++] = oi(t, i, i += e);
                        return a
                    }

                    function ta(t) {
                        for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n;) {
                            var o = t[e];
                            o && (i[r++] = o)
                        }
                        return i
                    }

                    function ea() {
                        var t = arguments.length;
                        if (!t) return [];
                        for (var e = Xs(t - 1), n = arguments[0], r = t; r--;) e[r - 1] = arguments[r];
                        return p(hd(n) ? Ii(n) : [n], cr(e, 1))
                    }

                    function na(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (e = n || e === rt ? 1 : yl(e), oi(t, e < 0 ? 0 : e, r)) : []
                    }

                    function ra(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (e = n || e === rt ? 1 : yl(e), e = r - e, oi(t, 0, e < 0 ? 0 : e)) : []
                    }

                    function ia(t, e) {
                        return t && t.length ? gi(t, yo(e, 3), !0, !0) : []
                    }

                    function oa(t, e) {
                        return t && t.length ? gi(t, yo(e, 3), !0) : []
                    }

                    function aa(t, e, n, r) {
                        var i = null == t ? 0 : t.length;
                        return i ? (n && "number" != typeof n && Ao(t, e, n) && (n = 0, r = i), lr(t, e, n, r)) : []
                    }

                    function ua(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r) return -1;
                        var i = null == n ? 0 : yl(n);
                        return i < 0 && (i = Bc(r + i, 0)), x(t, yo(e, 3), i)
                    }

                    function la(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r) return -1;
                        var i = r - 1;
                        return n !== rt && (i = yl(n), i = n < 0 ? Bc(r + i, 0) : Uc(i, r - 1)), x(t, yo(e, 3), i, !0)
                    }

                    function sa(t) {
                        return (null == t ? 0 : t.length) ? cr(t, 1) : []
                    }

                    function ca(t) {
                        return (null == t ? 0 : t.length) ? cr(t, Et) : []
                    }

                    function fa(t, e) {
                        return (null == t ? 0 : t.length) ? (e = e === rt ? 1 : yl(e), cr(t, e)) : []
                    }

                    function da(t) {
                        for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n;) {
                            var i = t[e];
                            r[i[0]] = i[1]
                        }
                        return r
                    }

                    function ha(t) {
                        return t && t.length ? t[0] : rt
                    }

                    function pa(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r) return -1;
                        var i = null == n ? 0 : yl(n);
                        return i < 0 && (i = Bc(r + i, 0)), w(t, e, i)
                    }

                    function ga(t) {
                        return (null == t ? 0 : t.length) ? oi(t, 0, -1) : []
                    }

                    function va(t, e) {
                        return null == t ? "" : jc.call(t, e)
                    }

                    function ma(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? t[e - 1] : rt
                    }

                    function ya(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r) return -1;
                        var i = r;
                        return n !== rt && (i = yl(n), i = i < 0 ? Bc(r + i, 0) : Uc(i, r - 1)), e === e ? Q(t, e, i) : x(t, S, i, !0)
                    }

                    function ba(t, e) {
                        return t && t.length ? Hr(t, yl(e)) : rt
                    }

                    function _a(t, e) {
                        return t && t.length && e && e.length ? $r(t, e) : t
                    }

                    function xa(t, e, n) {
                        return t && t.length && e && e.length ? $r(t, e, yo(n, 2)) : t
                    }

                    function wa(t, e, n) {
                        return t && t.length && e && e.length ? $r(t, e, rt, n) : t
                    }

                    function ka(t, e) {
                        var n = [];
                        if (!t || !t.length) return n;
                        var r = -1,
                            i = [],
                            o = t.length;
                        for (e = yo(e, 3); ++r < o;) {
                            var a = t[r];
                            e(a, r, t) && (n.push(a), i.push(r))
                        }
                        return Zr(t, i), n
                    }

                    function Sa(t) {
                        return null == t ? t : Gc.call(t)
                    }

                    function Ca(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (n && "number" != typeof n && Ao(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : yl(e), n = n === rt ? r : yl(n)), oi(t, e, n)) : []
                    }

                    function Ma(t, e) {
                        return ui(t, e)
                    }

                    function Ta(t, e, n) {
                        return li(t, e, yo(n, 2))
                    }

                    function Da(t, e) {
                        var n = null == t ? 0 : t.length;
                        if (n) {
                            var r = ui(t, e);
                            if (r < n && Bu(t[r], e)) return r
                        }
                        return -1
                    }

                    function Pa(t, e) {
                        return ui(t, e, !0)
                    }

                    function Oa(t, e, n) {
                        return li(t, e, yo(n, 2), !0)
                    }

                    function Ea(t, e) {
                        if (null == t ? 0 : t.length) {
                            var n = ui(t, e, !0) - 1;
                            if (Bu(t[n], e)) return n
                        }
                        return -1
                    }

                    function Aa(t) {
                        return t && t.length ? si(t) : []
                    }

                    function Ia(t, e) {
                        return t && t.length ? si(t, yo(e, 2)) : []
                    }

                    function Ra(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? oi(t, 1, e) : []
                    }

                    function Fa(t, e, n) {
                        return t && t.length ? (e = n || e === rt ? 1 : yl(e), oi(t, 0, e < 0 ? 0 : e)) : []
                    }

                    function Na(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (e = n || e === rt ? 1 : yl(e), e = r - e, oi(t, e < 0 ? 0 : e, r)) : []
                    }

                    function La(t, e) {
                        return t && t.length ? gi(t, yo(e, 3), !1, !0) : []
                    }

                    function za(t, e) {
                        return t && t.length ? gi(t, yo(e, 3)) : []
                    }

                    function ja(t) {
                        return t && t.length ? di(t) : []
                    }

                    function Wa(t, e) {
                        return t && t.length ? di(t, yo(e, 2)) : []
                    }

                    function Ba(t, e) {
                        return e = "function" == typeof e ? e : rt, t && t.length ? di(t, rt, e) : []
                    }

                    function Ua(t) {
                        if (!t || !t.length) return [];
                        var e = 0;
                        return t = c(t, function(t) {
                            if (Yu(t)) return e = Bc(t.length, e), !0
                        }), E(e, function(e) {
                            return h(t, M(e))
                        })
                    }

                    function Ya(t, e) {
                        if (!t || !t.length) return [];
                        var n = Ua(t);
                        return null == e ? n : h(n, function(t) {
                            return o(e, rt, t)
                        })
                    }

                    function Ha(t, e) {
                        return yi(t || [], e || [], Yn)
                    }

                    function Va(t, e) {
                        return yi(t || [], e || [], ri)
                    }

                    function Ga(t) {
                        var e = n(t);
                        return e.__chain__ = !0, e
                    }

                    function qa(t, e) {
                        return e(t), t
                    }

                    function Ka(t, e) {
                        return e(t)
                    }

                    function $a() {
                        return Ga(this)
                    }

                    function Za() {
                        return new i(this.value(), this.__chain__)
                    }

                    function Qa() {
                        this.__values__ === rt && (this.__values__ = vl(this.value()));
                        var t = this.__index__ >= this.__values__.length;
                        return {
                            done: t,
                            value: t ? rt : this.__values__[this.__index__++]
                        }
                    }

                    function Xa() {
                        return this
                    }

                    function Ja(t) {
                        for (var e, n = this; n instanceof r;) {
                            var i = Xo(n);
                            i.__index__ = 0, i.__values__ = rt, e ? o.__wrapped__ = i : e = i;
                            var o = i;
                            n = n.__wrapped__
                        }
                        return o.__wrapped__ = t, e
                    }

                    function tu() {
                        var t = this.__wrapped__;
                        if (t instanceof y) {
                            var e = t;
                            return this.__actions__.length && (e = new y(this)), e = e.reverse(), e.__actions__.push({
                                func: Ka,
                                args: [Sa],
                                thisArg: rt
                            }), new i(e, this.__chain__)
                        }
                        return this.thru(Sa)
                    }

                    function eu() {
                        return vi(this.__wrapped__, this.__actions__)
                    }

                    function nu(t, e, n) {
                        var r = hd(t) ? s : ar;
                        return n && Ao(t, e, n) && (e = rt), r(t, yo(e, 3))
                    }

                    function ru(t, e) {
                        return (hd(t) ? c : sr)(t, yo(e, 3))
                    }

                    function iu(t, e) {
                        return cr(cu(t, e), 1)
                    }

                    function ou(t, e) {
                        return cr(cu(t, e), Et)
                    }

                    function au(t, e, n) {
                        return n = n === rt ? 1 : yl(n), cr(cu(t, e), n)
                    }

                    function uu(t, e) {
                        return (hd(t) ? u : ff)(t, yo(e, 3))
                    }

                    function lu(t, e) {
                        return (hd(t) ? l : df)(t, yo(e, 3))
                    }

                    function su(t, e, n, r) {
                        t = Uu(t) ? t : $l(t), n = n && !r ? yl(n) : 0;
                        var i = t.length;
                        return n < 0 && (n = Bc(i + n, 0)), fl(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && w(t, e, n) > -1
                    }

                    function cu(t, e) {
                        return (hd(t) ? h : jr)(t, yo(e, 3))
                    }

                    function fu(t, e, n, r) {
                        return null == t ? [] : (hd(e) || (e = null == e ? [] : [e]), n = r ? rt : n, hd(n) || (n = null == n ? [] : [n]), Vr(t, e, n))
                    }

                    function du(t, e, n) {
                        var r = hd(t) ? g : D,
                            i = arguments.length < 3;
                        return r(t, yo(e, 4), n, i, ff)
                    }

                    function hu(t, e, n) {
                        var r = hd(t) ? v : D,
                            i = arguments.length < 3;
                        return r(t, yo(e, 4), n, i, df)
                    }

                    function pu(t, e) {
                        return (hd(t) ? c : sr)(t, Du(yo(e, 3)))
                    }

                    function gu(t) {
                        return (hd(t) ? An : ei)(t)
                    }

                    function vu(t, e, n) {
                        return e = (n ? Ao(t, e, n) : e === rt) ? 1 : yl(e), (hd(t) ? In : ni)(t, e)
                    }

                    function mu(t) {
                        return (hd(t) ? Fn : ii)(t)
                    }

                    function yu(t) {
                        if (null == t) return 0;
                        if (Uu(t)) return fl(t) ? X(t) : t.length;
                        var e = kf(t);
                        return e == Kt || e == te ? t.size : Nr(t).length
                    }

                    function bu(t, e, n) {
                        var r = hd(t) ? m : ai;
                        return n && Ao(t, e, n) && (e = rt), r(t, yo(e, 3))
                    }

                    function _u(t, e) {
                        if ("function" != typeof e) throw new ac(at);
                        return t = yl(t),
                            function() {
                                if (--t < 1) return e.apply(this, arguments)
                            }
                    }

                    function xu(t, e, n) {
                        return e = n ? rt : e, e = t && null == e ? t.length : e, oo(t, wt, rt, rt, rt, rt, e)
                    }

                    function wu(t, e) {
                        var n;
                        if ("function" != typeof e) throw new ac(at);
                        return t = yl(t),
                            function() {
                                return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = rt), n
                            }
                    }

                    function ku(t, e, n) {
                        e = n ? rt : e;
                        var r = oo(t, yt, rt, rt, rt, rt, rt, e);
                        return r.placeholder = ku.placeholder, r
                    }

                    function Su(t, e, n) {
                        e = n ? rt : e;
                        var r = oo(t, bt, rt, rt, rt, rt, rt, e);
                        return r.placeholder = Su.placeholder, r
                    }

                    function Cu(t, e, n) {
                        function r(e) {
                            var n = d,
                                r = h;
                            return d = h = rt, y = e, g = t.apply(r, n)
                        }

                        function i(t) {
                            return y = t, v = Mf(u, e), b ? r(t) : g
                        }

                        function o(t) {
                            var n = t - m,
                                r = t - y,
                                i = e - n;
                            return _ ? Uc(i, p - r) : i
                        }

                        function a(t) {
                            var n = t - m,
                                r = t - y;
                            return m === rt || n >= e || n < 0 || _ && r >= p
                        }

                        function u() {
                            var t = ed();
                            if (a(t)) return l(t);
                            v = Mf(u, o(t))
                        }

                        function l(t) {
                            return v = rt, x && d ? r(t) : (d = h = rt, g)
                        }

                        function s() {
                            v !== rt && yf(v), y = 0, d = m = h = v = rt
                        }

                        function c() {
                            return v === rt ? g : l(ed())
                        }

                        function f() {
                            var t = ed(),
                                n = a(t);
                            if (d = arguments, h = this, m = t, n) {
                                if (v === rt) return i(m);
                                if (_) return v = Mf(u, e), r(m)
                            }
                            return v === rt && (v = Mf(u, e)), g
                        }
                        var d, h, p, g, v, m, y = 0,
                            b = !1,
                            _ = !1,
                            x = !0;
                        if ("function" != typeof t) throw new ac(at);
                        return e = _l(e) || 0, tl(n) && (b = !!n.leading, _ = "maxWait" in n, p = _ ? Bc(_l(n.maxWait) || 0, e) : p, x = "trailing" in n ? !!n.trailing : x), f.cancel = s, f.flush = c, f
                    }

                    function Mu(t) {
                        return oo(t, St)
                    }

                    function Tu(t, e) {
                        if ("function" != typeof t || null != e && "function" != typeof e) throw new ac(at);
                        var n = function() {
                            var r = arguments,
                                i = e ? e.apply(this, r) : r[0],
                                o = n.cache;
                            if (o.has(i)) return o.get(i);
                            var a = t.apply(this, r);
                            return n.cache = o.set(i, a) || o, a
                        };
                        return n.cache = new(Tu.Cache || un), n
                    }

                    function Du(t) {
                        if ("function" != typeof t) throw new ac(at);
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                                case 0:
                                    return !t.call(this);
                                case 1:
                                    return !t.call(this, e[0]);
                                case 2:
                                    return !t.call(this, e[0], e[1]);
                                case 3:
                                    return !t.call(this, e[0], e[1], e[2])
                            }
                            return !t.apply(this, e)
                        }
                    }

                    function Pu(t) {
                        return wu(2, t)
                    }

                    function Ou(t, e) {
                        if ("function" != typeof t) throw new ac(at);
                        return e = e === rt ? e : yl(e), ti(t, e)
                    }

                    function Eu(t, e) {
                        if ("function" != typeof t) throw new ac(at);
                        return e = null == e ? 0 : Bc(yl(e), 0), ti(function(n) {
                            var r = n[e],
                                i = wi(n, 0, e);
                            return r && p(i, r), o(t, this, i)
                        })
                    }

                    function Au(t, e, n) {
                        var r = !0,
                            i = !0;
                        if ("function" != typeof t) throw new ac(at);
                        return tl(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Cu(t, e, {
                            leading: r,
                            maxWait: e,
                            trailing: i
                        })
                    }

                    function Iu(t) {
                        return xu(t, 1)
                    }

                    function Ru(t, e) {
                        return ud(_i(e), t)
                    }

                    function Fu() {
                        if (!arguments.length) return [];
                        var t = arguments[0];
                        return hd(t) ? t : [t]
                    }

                    function Nu(t) {
                        return er(t, dt)
                    }

                    function Lu(t, e) {
                        return e = "function" == typeof e ? e : rt, er(t, dt, e)
                    }

                    function zu(t) {
                        return er(t, ct | dt)
                    }

                    function ju(t, e) {
                        return e = "function" == typeof e ? e : rt, er(t, ct | dt, e)
                    }

                    function Wu(t, e) {
                        return null == e || rr(t, e, Nl(e))
                    }

                    function Bu(t, e) {
                        return t === e || t !== t && e !== e
                    }

                    function Uu(t) {
                        return null != t && Ju(t.length) && !Qu(t)
                    }

                    function Yu(t) {
                        return el(t) && Uu(t)
                    }

                    function Hu(t) {
                        return !0 === t || !1 === t || el(t) && vr(t) == Ut
                    }

                    function Vu(t) {
                        return el(t) && 1 === t.nodeType && !sl(t)
                    }

                    function Gu(t) {
                        if (null == t) return !0;
                        if (Uu(t) && (hd(t) || "string" == typeof t || "function" == typeof t.splice || gd(t) || _d(t) || dd(t))) return !t.length;
                        var e = kf(t);
                        if (e == Kt || e == te) return !t.size;
                        if (Lo(t)) return !Nr(t).length;
                        for (var n in t)
                            if (dc.call(t, n)) return !1;
                        return !0
                    }

                    function qu(t, e) {
                        return Tr(t, e)
                    }

                    function Ku(t, e, n) {
                        n = "function" == typeof n ? n : rt;
                        var r = n ? n(t, e) : rt;
                        return r === rt ? Tr(t, e, rt, n) : !!r
                    }

                    function $u(t) {
                        if (!el(t)) return !1;
                        var e = vr(t);
                        return e == Vt || e == Ht || "string" == typeof t.message && "string" == typeof t.name && !sl(t)
                    }

                    function Zu(t) {
                        return "number" == typeof t && zc(t)
                    }

                    function Qu(t) {
                        if (!tl(t)) return !1;
                        var e = vr(t);
                        return e == Gt || e == qt || e == Bt || e == Xt
                    }

                    function Xu(t) {
                        return "number" == typeof t && t == yl(t)
                    }

                    function Ju(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= At
                    }

                    function tl(t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e)
                    }

                    function el(t) {
                        return null != t && "object" == typeof t
                    }

                    function nl(t, e) {
                        return t === e || Or(t, e, _o(e))
                    }

                    function rl(t, e, n) {
                        return n = "function" == typeof n ? n : rt, Or(t, e, _o(e), n)
                    }

                    function il(t) {
                        return ll(t) && t != +t
                    }

                    function ol(t) {
                        if (Sf(t)) throw new tc(ot);
                        return Er(t)
                    }

                    function al(t) {
                        return null === t
                    }

                    function ul(t) {
                        return null == t
                    }

                    function ll(t) {
                        return "number" == typeof t || el(t) && vr(t) == $t
                    }

                    function sl(t) {
                        if (!el(t) || vr(t) != Qt) return !1;
                        var e = kc(t);
                        if (null === e) return !0;
                        var n = dc.call(e, "constructor") && e.constructor;
                        return "function" == typeof n && n instanceof n && fc.call(n) == vc
                    }

                    function cl(t) {
                        return Xu(t) && t >= -At && t <= At
                    }

                    function fl(t) {
                        return "string" == typeof t || !hd(t) && el(t) && vr(t) == ee
                    }

                    function dl(t) {
                        return "symbol" == typeof t || el(t) && vr(t) == ne
                    }

                    function hl(t) {
                        return t === rt
                    }

                    function pl(t) {
                        return el(t) && kf(t) == ie
                    }

                    function gl(t) {
                        return el(t) && vr(t) == oe
                    }

                    function vl(t) {
                        if (!t) return [];
                        if (Uu(t)) return fl(t) ? J(t) : Ii(t);
                        if (Dc && t[Dc]) return Y(t[Dc]());
                        var e = kf(t);
                        return (e == Kt ? H : e == te ? K : $l)(t)
                    }

                    function ml(t) {
                        if (!t) return 0 === t ? t : 0;
                        if ((t = _l(t)) === Et || t === -Et) {
                            return (t < 0 ? -1 : 1) * It
                        }
                        return t === t ? t : 0
                    }

                    function yl(t) {
                        var e = ml(t),
                            n = e % 1;
                        return e === e ? n ? e - n : e : 0
                    }

                    function bl(t) {
                        return t ? tr(yl(t), 0, Ft) : 0
                    }

                    function _l(t) {
                        if ("number" == typeof t) return t;
                        if (dl(t)) return Rt;
                        if (tl(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = tl(e) ? e + "" : e
                        }
                        if ("string" != typeof t) return 0 === t ? t : +t;
                        t = t.replace(Ae, "");
                        var n = Ye.test(t);
                        return n || Ve.test(t) ? Dn(t.slice(2), n ? 2 : 8) : Ue.test(t) ? Rt : +t
                    }

                    function xl(t) {
                        return Ri(t, Ll(t))
                    }

                    function wl(t) {
                        return t ? tr(yl(t), -At, At) : 0 === t ? t : 0
                    }

                    function kl(t) {
                        return null == t ? "" : fi(t)
                    }

                    function Sl(t, e) {
                        var n = cf(t);
                        return null == e ? n : Zn(n, e)
                    }

                    function Cl(t, e) {
                        return _(t, yo(e, 3), fr)
                    }

                    function Ml(t, e) {
                        return _(t, yo(e, 3), dr)
                    }

                    function Tl(t, e) {
                        return null == t ? t : hf(t, yo(e, 3), Ll)
                    }

                    function Dl(t, e) {
                        return null == t ? t : pf(t, yo(e, 3), Ll)
                    }

                    function Pl(t, e) {
                        return t && fr(t, yo(e, 3))
                    }

                    function Ol(t, e) {
                        return t && dr(t, yo(e, 3))
                    }

                    function El(t) {
                        return null == t ? [] : hr(t, Nl(t))
                    }

                    function Al(t) {
                        return null == t ? [] : hr(t, Ll(t))
                    }

                    function Il(t, e, n) {
                        var r = null == t ? rt : pr(t, e);
                        return r === rt ? n : r
                    }

                    function Rl(t, e) {
                        return null != t && Co(t, e, yr)
                    }

                    function Fl(t, e) {
                        return null != t && Co(t, e, br)
                    }

                    function Nl(t) {
                        return Uu(t) ? On(t) : Nr(t)
                    }

                    function Ll(t) {
                        return Uu(t) ? On(t, !0) : Lr(t)
                    }

                    function zl(t, e) {
                        var n = {};
                        return e = yo(e, 3), fr(t, function(t, r, i) {
                            Xn(n, e(t, r, i), t)
                        }), n
                    }

                    function jl(t, e) {
                        var n = {};
                        return e = yo(e, 3), fr(t, function(t, r, i) {
                            Xn(n, r, e(t, r, i))
                        }), n
                    }

                    function Wl(t, e) {
                        return Bl(t, Du(yo(e)))
                    }

                    function Bl(t, e) {
                        if (null == t) return {};
                        var n = h(go(t), function(t) {
                            return [t]
                        });
                        return e = yo(e), qr(t, n, function(t, n) {
                            return e(t, n[0])
                        })
                    }

                    function Ul(t, e, n) {
                        e = xi(e, t);
                        var r = -1,
                            i = e.length;
                        for (i || (i = 1, t = rt); ++r < i;) {
                            var o = null == t ? rt : t[$o(e[r])];
                            o === rt && (r = i, o = n), t = Qu(o) ? o.call(t) : o
                        }
                        return t
                    }

                    function Yl(t, e, n) {
                        return null == t ? t : ri(t, e, n)
                    }

                    function Hl(t, e, n, r) {
                        return r = "function" == typeof r ? r : rt, null == t ? t : ri(t, e, n, r)
                    }

                    function Vl(t, e, n) {
                        var r = hd(t),
                            i = r || gd(t) || _d(t);
                        if (e = yo(e, 4), null == n) {
                            var o = t && t.constructor;
                            n = i ? r ? new o : [] : tl(t) && Qu(o) ? cf(kc(t)) : {}
                        }
                        return (i ? u : fr)(t, function(t, r, i) {
                            return e(n, t, r, i)
                        }), n
                    }

                    function Gl(t, e) {
                        return null == t || hi(t, e)
                    }

                    function ql(t, e, n) {
                        return null == t ? t : pi(t, e, _i(n))
                    }

                    function Kl(t, e, n, r) {
                        return r = "function" == typeof r ? r : rt, null == t ? t : pi(t, e, _i(n), r)
                    }

                    function $l(t) {
                        return null == t ? [] : R(t, Nl(t))
                    }

                    function Zl(t) {
                        return null == t ? [] : R(t, Ll(t))
                    }

                    function Ql(t, e, n) {
                        return n === rt && (n = e, e = rt), n !== rt && (n = _l(n), n = n === n ? n : 0), e !== rt && (e = _l(e), e = e === e ? e : 0), tr(_l(t), e, n)
                    }

                    function Xl(t, e, n) {
                        return e = ml(e), n === rt ? (n = e, e = 0) : n = ml(n), t = _l(t), _r(t, e, n)
                    }

                    function Jl(t, e, n) {
                        if (n && "boolean" != typeof n && Ao(t, e, n) && (e = n = rt), n === rt && ("boolean" == typeof e ? (n = e, e = rt) : "boolean" == typeof t && (n = t, t = rt)), t === rt && e === rt ? (t = 0, e = 1) : (t = ml(t), e === rt ? (e = t, t = 0) : e = ml(e)), t > e) {
                            var r = t;
                            t = e, e = r
                        }
                        if (n || t % 1 || e % 1) {
                            var i = Vc();
                            return Uc(t + i * (e - t + Tn("1e-" + ((i + "").length - 1))), e)
                        }
                        return Qr(t, e)
                    }

                    function ts(t) {
                        return Gd(kl(t).toLowerCase())
                    }

                    function es(t) {
                        return (t = kl(t)) && t.replace(qe, Hn).replace(pn, "")
                    }

                    function ns(t, e, n) {
                        t = kl(t), e = fi(e);
                        var r = t.length;
                        n = n === rt ? r : tr(yl(n), 0, r);
                        var i = n;
                        return (n -= e.length) >= 0 && t.slice(n, i) == e
                    }

                    function rs(t) {
                        return t = kl(t), t && ke.test(t) ? t.replace(xe, Vn) : t
                    }

                    function is(t) {
                        return t = kl(t), t && Ee.test(t) ? t.replace(Oe, "\\$&") : t
                    }

                    function os(t, e, n) {
                        t = kl(t), e = yl(e);
                        var r = e ? X(t) : 0;
                        if (!e || r >= e) return t;
                        var i = (e - r) / 2;
                        return Xi(Fc(i), n) + t + Xi(Rc(i), n)
                    }

                    function as(t, e, n) {
                        t = kl(t), e = yl(e);
                        var r = e ? X(t) : 0;
                        return e && r < e ? t + Xi(e - r, n) : t
                    }

                    function us(t, e, n) {
                        t = kl(t), e = yl(e);
                        var r = e ? X(t) : 0;
                        return e && r < e ? Xi(e - r, n) + t : t
                    }

                    function ls(t, e, n) {
                        return n || null == e ? e = 0 : e && (e = +e), Hc(kl(t).replace(Ie, ""), e || 0)
                    }

                    function ss(t, e, n) {
                        return e = (n ? Ao(t, e, n) : e === rt) ? 1 : yl(e), Jr(kl(t), e)
                    }

                    function cs() {
                        var t = arguments,
                            e = kl(t[0]);
                        return t.length < 3 ? e : e.replace(t[1], t[2])
                    }

                    function fs(t, e, n) {
                        return n && "number" != typeof n && Ao(t, e, n) && (e = n = rt), (n = n === rt ? Ft : n >>> 0) ? (t = kl(t), t && ("string" == typeof e || null != e && !yd(e)) && !(e = fi(e)) && B(t) ? wi(J(t), 0, n) : t.split(e, n)) : []
                    }

                    function ds(t, e, n) {
                        return t = kl(t), n = null == n ? 0 : tr(yl(n), 0, t.length), e = fi(e), t.slice(n, n + e.length) == e
                    }

                    function hs(t, e, r) {
                        var i = n.templateSettings;
                        r && Ao(t, e, r) && (e = rt), t = kl(t), e = Cd({}, e, i, ao);
                        var o, a, u = Cd({}, e.imports, i.imports, ao),
                            l = Nl(u),
                            s = R(u, l),
                            c = 0,
                            f = e.interpolate || Ke,
                            d = "__p += '",
                            h = ic((e.escape || Ke).source + "|" + f.source + "|" + (f === Me ? We : Ke).source + "|" + (e.evaluate || Ke).source + "|$", "g"),
                            p = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++_n + "]") + "\n";
                        t.replace(h, function(e, n, r, i, u, l) {
                            return r || (r = i), d += t.slice(c, l).replace($e, j), n && (o = !0, d += "' +\n__e(" + n + ") +\n'"), u && (a = !0, d += "';\n" + u + ";\n__p += '"), r && (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = l + e.length, e
                        }), d += "';\n";
                        var g = e.variable;
                        g || (d = "with (obj) {\n" + d + "\n}\n"), d = (a ? d.replace(me, "") : d).replace(ye, "$1").replace(be, "$1;"), d = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                        var v = qd(function() {
                            return ec(l, p + "return " + d).apply(rt, s)
                        });
                        if (v.source = d, $u(v)) throw v;
                        return v
                    }

                    function ps(t) {
                        return kl(t).toLowerCase()
                    }

                    function gs(t) {
                        return kl(t).toUpperCase()
                    }

                    function vs(t, e, n) {
                        if ((t = kl(t)) && (n || e === rt)) return t.replace(Ae, "");
                        if (!t || !(e = fi(e))) return t;
                        var r = J(t),
                            i = J(e);
                        return wi(r, N(r, i), L(r, i) + 1).join("")
                    }

                    function ms(t, e, n) {
                        if ((t = kl(t)) && (n || e === rt)) return t.replace(Re, "");
                        if (!t || !(e = fi(e))) return t;
                        var r = J(t);
                        return wi(r, 0, L(r, J(e)) + 1).join("")
                    }

                    function ys(t, e, n) {
                        if ((t = kl(t)) && (n || e === rt)) return t.replace(Ie, "");
                        if (!t || !(e = fi(e))) return t;
                        var r = J(t);
                        return wi(r, N(r, J(e))).join("")
                    }

                    function bs(t, e) {
                        var n = Ct,
                            r = Mt;
                        if (tl(e)) {
                            var i = "separator" in e ? e.separator : i;
                            n = "length" in e ? yl(e.length) : n, r = "omission" in e ? fi(e.omission) : r
                        }
                        t = kl(t);
                        var o = t.length;
                        if (B(t)) {
                            var a = J(t);
                            o = a.length
                        }
                        if (n >= o) return t;
                        var u = n - X(r);
                        if (u < 1) return r;
                        var l = a ? wi(a, 0, u).join("") : t.slice(0, u);
                        if (i === rt) return l + r;
                        if (a && (u += l.length - u), yd(i)) {
                            if (t.slice(u).search(i)) {
                                var s, c = l;
                                for (i.global || (i = ic(i.source, kl(Be.exec(i)) + "g")), i.lastIndex = 0; s = i.exec(c);) var f = s.index;
                                l = l.slice(0, f === rt ? u : f)
                            }
                        } else if (t.indexOf(fi(i), u) != u) {
                            var d = l.lastIndexOf(i);
                            d > -1 && (l = l.slice(0, d))
                        }
                        return l + r
                    }

                    function _s(t) {
                        return t = kl(t), t && we.test(t) ? t.replace(_e, Gn) : t
                    }

                    function xs(t, e, n) {
                        return t = kl(t), e = n ? rt : e, e === rt ? U(t) ? nt(t) : b(t) : t.match(e) || []
                    }

                    function ws(t) {
                        var e = null == t ? 0 : t.length,
                            n = yo();
                        return t = e ? h(t, function(t) {
                            if ("function" != typeof t[1]) throw new ac(at);
                            return [n(t[0]), t[1]]
                        }) : [], ti(function(n) {
                            for (var r = -1; ++r < e;) {
                                var i = t[r];
                                if (o(i[0], this, n)) return o(i[1], this, n)
                            }
                        })
                    }

                    function ks(t) {
                        return nr(er(t, ct))
                    }

                    function Ss(t) {
                        return function() {
                            return t
                        }
                    }

                    function Cs(t, e) {
                        return null == t || t !== t ? e : t
                    }

                    function Ms(t) {
                        return t
                    }

                    function Ts(t) {
                        return Fr("function" == typeof t ? t : er(t, ct))
                    }

                    function Ds(t) {
                        return Wr(er(t, ct))
                    }

                    function Ps(t, e) {
                        return Br(t, er(e, ct))
                    }

                    function Os(t, e, n) {
                        var r = Nl(e),
                            i = hr(e, r);
                        null != n || tl(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = hr(e, Nl(e)));
                        var o = !(tl(n) && "chain" in n) || !!n.chain,
                            a = Qu(t);
                        return u(i, function(n) {
                            var r = e[n];
                            t[n] = r, a && (t.prototype[n] = function() {
                                var e = this.__chain__;
                                if (o || e) {
                                    var n = t(this.__wrapped__);
                                    return (n.__actions__ = Ii(this.__actions__)).push({
                                        func: r,
                                        args: arguments,
                                        thisArg: t
                                    }), n.__chain__ = e, n
                                }
                                return r.apply(t, p([this.value()], arguments))
                            })
                        }), t
                    }

                    function Es() {
                        return En._ === this && (En._ = mc), this
                    }

                    function As() {}

                    function Is(t) {
                        return t = yl(t), ti(function(e) {
                            return Hr(e, t)
                        })
                    }

                    function Rs(t) {
                        return Io(t) ? M($o(t)) : Kr(t)
                    }

                    function Fs(t) {
                        return function(e) {
                            return null == t ? rt : pr(t, e)
                        }
                    }

                    function Ns() {
                        return []
                    }

                    function Ls() {
                        return !1
                    }

                    function zs() {
                        return {}
                    }

                    function js() {
                        return ""
                    }

                    function Ws() {
                        return !0
                    }

                    function Bs(t, e) {
                        if ((t = yl(t)) < 1 || t > At) return [];
                        var n = Ft,
                            r = Uc(t, Ft);
                        e = yo(e), t -= Ft;
                        for (var i = E(r, e); ++n < t;) e(n);
                        return i
                    }

                    function Us(t) {
                        return hd(t) ? h(t, $o) : dl(t) ? [t] : Ii(Df(kl(t)))
                    }

                    function Ys(t) {
                        var e = ++hc;
                        return kl(t) + e
                    }

                    function Hs(t) {
                        return t && t.length ? ur(t, Ms, mr) : rt
                    }

                    function Vs(t, e) {
                        return t && t.length ? ur(t, yo(e, 2), mr) : rt
                    }

                    function Gs(t) {
                        return C(t, Ms)
                    }

                    function qs(t, e) {
                        return C(t, yo(e, 2))
                    }

                    function Ks(t) {
                        return t && t.length ? ur(t, Ms, zr) : rt
                    }

                    function $s(t, e) {
                        return t && t.length ? ur(t, yo(e, 2), zr) : rt
                    }

                    function Zs(t) {
                        return t && t.length ? O(t, Ms) : 0
                    }

                    function Qs(t, e) {
                        return t && t.length ? O(t, yo(e, 2)) : 0
                    }
                    e = null == e ? En : qn.defaults(En.Object(), e, qn.pick(En, bn));
                    var Xs = e.Array,
                        Js = e.Date,
                        tc = e.Error,
                        ec = e.Function,
                        nc = e.Math,
                        rc = e.Object,
                        ic = e.RegExp,
                        oc = e.String,
                        ac = e.TypeError,
                        uc = Xs.prototype,
                        lc = ec.prototype,
                        sc = rc.prototype,
                        cc = e["__core-js_shared__"],
                        fc = lc.toString,
                        dc = sc.hasOwnProperty,
                        hc = 0,
                        pc = function() {
                            var t = /[^.]+$/.exec(cc && cc.keys && cc.keys.IE_PROTO || "");
                            return t ? "Symbol(src)_1." + t : ""
                        }(),
                        gc = sc.toString,
                        vc = fc.call(rc),
                        mc = En._,
                        yc = ic("^" + fc.call(dc).replace(Oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        bc = Rn ? e.Buffer : rt,
                        _c = e.Symbol,
                        xc = e.Uint8Array,
                        wc = bc ? bc.allocUnsafe : rt,
                        kc = V(rc.getPrototypeOf, rc),
                        Sc = rc.create,
                        Cc = sc.propertyIsEnumerable,
                        Mc = uc.splice,
                        Tc = _c ? _c.isConcatSpreadable : rt,
                        Dc = _c ? _c.iterator : rt,
                        Pc = _c ? _c.toStringTag : rt,
                        Oc = function() {
                            try {
                                var t = xo(rc, "defineProperty");
                                return t({}, "", {}), t
                            } catch (t) {}
                        }(),
                        Ec = e.clearTimeout !== En.clearTimeout && e.clearTimeout,
                        Ac = Js && Js.now !== En.Date.now && Js.now,
                        Ic = e.setTimeout !== En.setTimeout && e.setTimeout,
                        Rc = nc.ceil,
                        Fc = nc.floor,
                        Nc = rc.getOwnPropertySymbols,
                        Lc = bc ? bc.isBuffer : rt,
                        zc = e.isFinite,
                        jc = uc.join,
                        Wc = V(rc.keys, rc),
                        Bc = nc.max,
                        Uc = nc.min,
                        Yc = Js.now,
                        Hc = e.parseInt,
                        Vc = nc.random,
                        Gc = uc.reverse,
                        qc = xo(e, "DataView"),
                        Kc = xo(e, "Map"),
                        $c = xo(e, "Promise"),
                        Zc = xo(e, "Set"),
                        Qc = xo(e, "WeakMap"),
                        Xc = xo(rc, "create"),
                        Jc = Qc && new Qc,
                        tf = {},
                        ef = Zo(qc),
                        nf = Zo(Kc),
                        rf = Zo($c),
                        of = Zo(Zc),
                        af = Zo(Qc),
                        uf = _c ? _c.prototype : rt,
                        lf = uf ? uf.valueOf : rt,
                        sf = uf ? uf.toString : rt,
                        cf = function() {
                            function t() {}
                            return function(e) {
                                if (!tl(e)) return {};
                                if (Sc) return Sc(e);
                                t.prototype = e;
                                var n = new t;
                                return t.prototype = rt, n
                            }
                        }();
                    n.templateSettings = {
                        escape: Se,
                        evaluate: Ce,
                        interpolate: Me,
                        variable: "",
                        imports: {
                            _: n
                        }
                    }, n.prototype = r.prototype, n.prototype.constructor = n, i.prototype = cf(r.prototype), i.prototype.constructor = i, y.prototype = cf(r.prototype), y.prototype.constructor = y, et.prototype.clear = ze, et.prototype.delete = Ze, et.prototype.get = Qe, et.prototype.has = Xe, et.prototype.set = Je, tn.prototype.clear = en, tn.prototype.delete = nn, tn.prototype.get = rn, tn.prototype.has = on, tn.prototype.set = an, un.prototype.clear = ln, un.prototype.delete = sn, un.prototype.get = cn, un.prototype.has = fn, un.prototype.set = dn, gn.prototype.add = gn.prototype.push = vn, gn.prototype.has = mn, yn.prototype.clear = kn, yn.prototype.delete = Sn, yn.prototype.get = Cn, yn.prototype.has = Mn, yn.prototype.set = Pn;
                    var ff = ji(fr),
                        df = ji(dr, !0),
                        hf = Wi(),
                        pf = Wi(!0),
                        gf = Jc ? function(t, e) {
                            return Jc.set(t, e), t
                        } : Ms,
                        vf = Oc ? function(t, e) {
                            return Oc(t, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: Ss(e),
                                writable: !0
                            })
                        } : Ms,
                        mf = ti,
                        yf = Ec || function(t) {
                            return En.clearTimeout(t)
                        },
                        bf = Zc && 1 / K(new Zc([, -0]))[1] == Et ? function(t) {
                            return new Zc(t)
                        } : As,
                        _f = Jc ? function(t) {
                            return Jc.get(t)
                        } : As,
                        xf = Nc ? function(t) {
                            return null == t ? [] : (t = rc(t), c(Nc(t), function(e) {
                                return Cc.call(t, e)
                            }))
                        } : Ns,
                        wf = Nc ? function(t) {
                            for (var e = []; t;) p(e, xf(t)), t = kc(t);
                            return e
                        } : Ns,
                        kf = vr;
                    (qc && kf(new qc(new ArrayBuffer(1))) != ue || Kc && kf(new Kc) != Kt || $c && "[object Promise]" != kf($c.resolve()) || Zc && kf(new Zc) != te || Qc && kf(new Qc) != ie) && (kf = function(t) {
                        var e = vr(t),
                            n = e == Qt ? t.constructor : rt,
                            r = n ? Zo(n) : "";
                        if (r) switch (r) {
                            case ef:
                                return ue;
                            case nf:
                                return Kt;
                            case rf:
                                return "[object Promise]";
                            case of:
                                return te;
                            case af:
                                return ie
                        }
                        return e
                    });
                    var Sf = cc ? Qu : Ls,
                        Cf = qo(gf),
                        Mf = Ic || function(t, e) {
                            return En.setTimeout(t, e)
                        },
                        Tf = qo(vf),
                        Df = function(t) {
                            var e = Tu(t, function(t) {
                                    return n.size === lt && n.clear(), t
                                }),
                                n = e.cache;
                            return e
                        }(function(t) {
                            var e = [];
                            return 46 === t.charCodeAt(0) && e.push(""), t.replace(Pe, function(t, n, r, i) {
                                e.push(r ? i.replace(je, "$1") : n || t)
                            }), e
                        }),
                        Pf = ti(function(t, e) {
                            return Yu(t) ? or(t, cr(e, 1, Yu, !0)) : []
                        }),
                        Of = ti(function(t, e) {
                            var n = ma(e);
                            return Yu(n) && (n = rt), Yu(t) ? or(t, cr(e, 1, Yu, !0), yo(n, 2)) : []
                        }),
                        Ef = ti(function(t, e) {
                            var n = ma(e);
                            return Yu(n) && (n = rt), Yu(t) ? or(t, cr(e, 1, Yu, !0), rt, n) : []
                        }),
                        Af = ti(function(t) {
                            var e = h(t, bi);
                            return e.length && e[0] === t[0] ? xr(e) : []
                        }),
                        If = ti(function(t) {
                            var e = ma(t),
                                n = h(t, bi);
                            return e === ma(n) ? e = rt : n.pop(), n.length && n[0] === t[0] ? xr(n, yo(e, 2)) : []
                        }),
                        Rf = ti(function(t) {
                            var e = ma(t),
                                n = h(t, bi);
                            return e = "function" == typeof e ? e : rt, e && n.pop(), n.length && n[0] === t[0] ? xr(n, rt, e) : []
                        }),
                        Ff = ti(_a),
                        Nf = ho(function(t, e) {
                            var n = null == t ? 0 : t.length,
                                r = Jn(t, e);
                            return Zr(t, h(e, function(t) {
                                return Eo(t, n) ? +t : t
                            }).sort(Pi)), r
                        }),
                        Lf = ti(function(t) {
                            return di(cr(t, 1, Yu, !0))
                        }),
                        zf = ti(function(t) {
                            var e = ma(t);
                            return Yu(e) && (e = rt), di(cr(t, 1, Yu, !0), yo(e, 2))
                        }),
                        jf = ti(function(t) {
                            var e = ma(t);
                            return e = "function" == typeof e ? e : rt, di(cr(t, 1, Yu, !0), rt, e)
                        }),
                        Wf = ti(function(t, e) {
                            return Yu(t) ? or(t, e) : []
                        }),
                        Bf = ti(function(t) {
                            return mi(c(t, Yu))
                        }),
                        Uf = ti(function(t) {
                            var e = ma(t);
                            return Yu(e) && (e = rt), mi(c(t, Yu), yo(e, 2))
                        }),
                        Yf = ti(function(t) {
                            var e = ma(t);
                            return e = "function" == typeof e ? e : rt, mi(c(t, Yu), rt, e)
                        }),
                        Hf = ti(Ua),
                        Vf = ti(function(t) {
                            var e = t.length,
                                n = e > 1 ? t[e - 1] : rt;
                            return n = "function" == typeof n ? (t.pop(), n) : rt, Ya(t, n)
                        }),
                        Gf = ho(function(t) {
                            var e = t.length,
                                n = e ? t[0] : 0,
                                r = this.__wrapped__,
                                o = function(e) {
                                    return Jn(e, t)
                                };
                            return !(e > 1 || this.__actions__.length) && r instanceof y && Eo(n) ? (r = r.slice(n, +n + (e ? 1 : 0)), r.__actions__.push({
                                func: Ka,
                                args: [o],
                                thisArg: rt
                            }), new i(r, this.__chain__).thru(function(t) {
                                return e && !t.length && t.push(rt), t
                            })) : this.thru(o)
                        }),
                        qf = Li(function(t, e, n) {
                            dc.call(t, n) ? ++t[n] : Xn(t, n, 1)
                        }),
                        Kf = Gi(ua),
                        $f = Gi(la),
                        Zf = Li(function(t, e, n) {
                            dc.call(t, n) ? t[n].push(e) : Xn(t, n, [e])
                        }),
                        Qf = ti(function(t, e, n) {
                            var r = -1,
                                i = "function" == typeof e,
                                a = Uu(t) ? Xs(t.length) : [];
                            return ff(t, function(t) {
                                a[++r] = i ? o(e, t, n) : kr(t, e, n)
                            }), a
                        }),
                        Xf = Li(function(t, e, n) {
                            Xn(t, n, e)
                        }),
                        Jf = Li(function(t, e, n) {
                            t[n ? 0 : 1].push(e)
                        }, function() {
                            return [
                                [],
                                []
                            ]
                        }),
                        td = ti(function(t, e) {
                            if (null == t) return [];
                            var n = e.length;
                            return n > 1 && Ao(t, e[0], e[1]) ? e = [] : n > 2 && Ao(e[0], e[1], e[2]) && (e = [e[0]]), Vr(t, cr(e, 1), [])
                        }),
                        ed = Ac || function() {
                            return En.Date.now()
                        },
                        nd = ti(function(t, e, n) {
                            var r = gt;
                            if (n.length) {
                                var i = G(n, mo(nd));
                                r |= _t
                            }
                            return oo(t, r, e, n, i)
                        }),
                        rd = ti(function(t, e, n) {
                            var r = gt | vt;
                            if (n.length) {
                                var i = G(n, mo(rd));
                                r |= _t
                            }
                            return oo(e, r, t, n, i)
                        }),
                        id = ti(function(t, e) {
                            return ir(t, 1, e)
                        }),
                        od = ti(function(t, e, n) {
                            return ir(t, _l(e) || 0, n)
                        });
                    Tu.Cache = un;
                    var ad = mf(function(t, e) {
                            e = 1 == e.length && hd(e[0]) ? h(e[0], I(yo())) : h(cr(e, 1), I(yo()));
                            var n = e.length;
                            return ti(function(r) {
                                for (var i = -1, a = Uc(r.length, n); ++i < a;) r[i] = e[i].call(this, r[i]);
                                return o(t, this, r)
                            })
                        }),
                        ud = ti(function(t, e) {
                            var n = G(e, mo(ud));
                            return oo(t, _t, rt, e, n)
                        }),
                        ld = ti(function(t, e) {
                            var n = G(e, mo(ld));
                            return oo(t, xt, rt, e, n)
                        }),
                        sd = ho(function(t, e) {
                            return oo(t, kt, rt, rt, rt, e)
                        }),
                        cd = eo(mr),
                        fd = eo(function(t, e) {
                            return t >= e
                        }),
                        dd = Sr(function() {
                            return arguments
                        }()) ? Sr : function(t) {
                            return el(t) && dc.call(t, "callee") && !Cc.call(t, "callee")
                        },
                        hd = Xs.isArray,
                        pd = Ln ? I(Ln) : Cr,
                        gd = Lc || Ls,
                        vd = zn ? I(zn) : Mr,
                        md = jn ? I(jn) : Pr,
                        yd = Wn ? I(Wn) : Ar,
                        bd = Bn ? I(Bn) : Ir,
                        _d = Un ? I(Un) : Rr,
                        xd = eo(zr),
                        wd = eo(function(t, e) {
                            return t <= e
                        }),
                        kd = zi(function(t, e) {
                            if (Lo(e) || Uu(e)) return void Ri(e, Nl(e), t);
                            for (var n in e) dc.call(e, n) && Yn(t, n, e[n])
                        }),
                        Sd = zi(function(t, e) {
                            Ri(e, Ll(e), t)
                        }),
                        Cd = zi(function(t, e, n, r) {
                            Ri(e, Ll(e), t, r)
                        }),
                        Md = zi(function(t, e, n, r) {
                            Ri(e, Nl(e), t, r)
                        }),
                        Td = ho(Jn),
                        Dd = ti(function(t, e) {
                            t = rc(t);
                            var n = -1,
                                r = e.length,
                                i = r > 2 ? e[2] : rt;
                            for (i && Ao(e[0], e[1], i) && (r = 1); ++n < r;)
                                for (var o = e[n], a = Ll(o), u = -1, l = a.length; ++u < l;) {
                                    var s = a[u],
                                        c = t[s];
                                    (c === rt || Bu(c, sc[s]) && !dc.call(t, s)) && (t[s] = o[s])
                                }
                            return t
                        }),
                        Pd = ti(function(t) {
                            return t.push(rt, uo), o(Rd, rt, t)
                        }),
                        Od = $i(function(t, e, n) {
                            null != e && "function" != typeof e.toString && (e = gc.call(e)), t[e] = n
                        }, Ss(Ms)),
                        Ed = $i(function(t, e, n) {
                            null != e && "function" != typeof e.toString && (e = gc.call(e)), dc.call(t, e) ? t[e].push(n) : t[e] = [n]
                        }, yo),
                        Ad = ti(kr),
                        Id = zi(function(t, e, n) {
                            Ur(t, e, n)
                        }),
                        Rd = zi(function(t, e, n, r) {
                            Ur(t, e, n, r)
                        }),
                        Fd = ho(function(t, e) {
                            var n = {};
                            if (null == t) return n;
                            var r = !1;
                            e = h(e, function(e) {
                                return e = xi(e, t), r || (r = e.length > 1), e
                            }), Ri(t, go(t), n), r && (n = er(n, ct | ft | dt, lo));
                            for (var i = e.length; i--;) hi(n, e[i]);
                            return n
                        }),
                        Nd = ho(function(t, e) {
                            return null == t ? {} : Gr(t, e)
                        }),
                        Ld = io(Nl),
                        zd = io(Ll),
                        jd = Yi(function(t, e, n) {
                            return e = e.toLowerCase(), t + (n ? ts(e) : e)
                        }),
                        Wd = Yi(function(t, e, n) {
                            return t + (n ? "-" : "") + e.toLowerCase()
                        }),
                        Bd = Yi(function(t, e, n) {
                            return t + (n ? " " : "") + e.toLowerCase()
                        }),
                        Ud = Ui("toLowerCase"),
                        Yd = Yi(function(t, e, n) {
                            return t + (n ? "_" : "") + e.toLowerCase()
                        }),
                        Hd = Yi(function(t, e, n) {
                            return t + (n ? " " : "") + Gd(e)
                        }),
                        Vd = Yi(function(t, e, n) {
                            return t + (n ? " " : "") + e.toUpperCase()
                        }),
                        Gd = Ui("toUpperCase"),
                        qd = ti(function(t, e) {
                            try {
                                return o(t, rt, e)
                            } catch (t) {
                                return $u(t) ? t : new tc(t)
                            }
                        }),
                        Kd = ho(function(t, e) {
                            return u(e, function(e) {
                                e = $o(e), Xn(t, e, nd(t[e], t))
                            }), t
                        }),
                        $d = qi(),
                        Zd = qi(!0),
                        Qd = ti(function(t, e) {
                            return function(n) {
                                return kr(n, t, e)
                            }
                        }),
                        Xd = ti(function(t, e) {
                            return function(n) {
                                return kr(t, n, e)
                            }
                        }),
                        Jd = Qi(h),
                        th = Qi(s),
                        eh = Qi(m),
                        nh = to(),
                        rh = to(!0),
                        ih = Zi(function(t, e) {
                            return t + e
                        }, 0),
                        oh = ro("ceil"),
                        ah = Zi(function(t, e) {
                            return t / e
                        }, 1),
                        uh = ro("floor"),
                        lh = Zi(function(t, e) {
                            return t * e
                        }, 1),
                        sh = ro("round"),
                        ch = Zi(function(t, e) {
                            return t - e
                        }, 0);
                    return n.after = _u, n.ary = xu, n.assign = kd, n.assignIn = Sd, n.assignInWith = Cd, n.assignWith = Md, n.at = Td, n.before = wu, n.bind = nd, n.bindAll = Kd, n.bindKey = rd, n.castArray = Fu, n.chain = Ga, n.chunk = Jo, n.compact = ta, n.concat = ea, n.cond = ws, n.conforms = ks, n.constant = Ss, n.countBy = qf, n.create = Sl, n.curry = ku, n.curryRight = Su, n.debounce = Cu, n.defaults = Dd, n.defaultsDeep = Pd, n.defer = id, n.delay = od, n.difference = Pf, n.differenceBy = Of, n.differenceWith = Ef, n.drop = na, n.dropRight = ra, n.dropRightWhile = ia, n.dropWhile = oa, n.fill = aa, n.filter = ru, n.flatMap = iu, n.flatMapDeep = ou, n.flatMapDepth = au, n.flatten = sa, n.flattenDeep = ca, n.flattenDepth = fa, n.flip = Mu, n.flow = $d, n.flowRight = Zd, n.fromPairs = da, n.functions = El, n.functionsIn = Al, n.groupBy = Zf, n.initial = ga, n.intersection = Af, n.intersectionBy = If, n.intersectionWith = Rf, n.invert = Od, n.invertBy = Ed, n.invokeMap = Qf, n.iteratee = Ts, n.keyBy = Xf, n.keys = Nl, n.keysIn = Ll, n.map = cu, n.mapKeys = zl, n.mapValues = jl, n.matches = Ds, n.matchesProperty = Ps, n.memoize = Tu, n.merge = Id, n.mergeWith = Rd, n.method = Qd, n.methodOf = Xd, n.mixin = Os, n.negate = Du, n.nthArg = Is, n.omit = Fd, n.omitBy = Wl, n.once = Pu, n.orderBy = fu, n.over = Jd, n.overArgs = ad, n.overEvery = th, n.overSome = eh, n.partial = ud, n.partialRight = ld, n.partition = Jf, n.pick = Nd, n.pickBy = Bl, n.property = Rs, n.propertyOf = Fs, n.pull = Ff, n.pullAll = _a, n.pullAllBy = xa, n.pullAllWith = wa, n.pullAt = Nf, n.range = nh, n.rangeRight = rh, n.rearg = sd, n.reject = pu, n.remove = ka, n.rest = Ou, n.reverse = Sa, n.sampleSize = vu, n.set = Yl, n.setWith = Hl, n.shuffle = mu, n.slice = Ca, n.sortBy = td, n.sortedUniq = Aa, n.sortedUniqBy = Ia, n.split = fs, n.spread = Eu, n.tail = Ra, n.take = Fa, n.takeRight = Na, n.takeRightWhile = La, n.takeWhile = za, n.tap = qa, n.throttle = Au, n.thru = Ka, n.toArray = vl, n.toPairs = Ld, n.toPairsIn = zd, n.toPath = Us, n.toPlainObject = xl, n.transform = Vl, n.unary = Iu, n.union = Lf, n.unionBy = zf, n.unionWith = jf, n.uniq = ja, n.uniqBy = Wa, n.uniqWith = Ba, n.unset = Gl, n.unzip = Ua, n.unzipWith = Ya, n.update = ql, n.updateWith = Kl, n.values = $l, n.valuesIn = Zl, n.without = Wf, n.words = xs, n.wrap = Ru, n.xor = Bf, n.xorBy = Uf, n.xorWith = Yf, n.zip = Hf, n.zipObject = Ha, n.zipObjectDeep = Va, n.zipWith = Vf, n.entries = Ld, n.entriesIn = zd, n.extend = Sd, n.extendWith = Cd, Os(n, n), n.add = ih, n.attempt = qd, n.camelCase = jd, n.capitalize = ts, n.ceil = oh, n.clamp = Ql, n.clone = Nu, n.cloneDeep = zu, n.cloneDeepWith = ju, n.cloneWith = Lu, n.conformsTo = Wu, n.deburr = es, n.defaultTo = Cs, n.divide = ah, n.endsWith = ns, n.eq = Bu, n.escape = rs, n.escapeRegExp = is, n.every = nu, n.find = Kf, n.findIndex = ua, n.findKey = Cl, n.findLast = $f, n.findLastIndex = la, n.findLastKey = Ml, n.floor = uh, n.forEach = uu, n.forEachRight = lu, n.forIn = Tl, n.forInRight = Dl, n.forOwn = Pl, n.forOwnRight = Ol, n.get = Il, n.gt = cd, n.gte = fd, n.has = Rl, n.hasIn = Fl, n.head = ha, n.identity = Ms, n.includes = su, n.indexOf = pa, n.inRange = Xl, n.invoke = Ad, n.isArguments = dd, n.isArray = hd, n.isArrayBuffer = pd, n.isArrayLike = Uu, n.isArrayLikeObject = Yu, n.isBoolean = Hu, n.isBuffer = gd, n.isDate = vd, n.isElement = Vu, n.isEmpty = Gu, n.isEqual = qu, n.isEqualWith = Ku, n.isError = $u, n.isFinite = Zu, n.isFunction = Qu, n.isInteger = Xu, n.isLength = Ju, n.isMap = md, n.isMatch = nl, n.isMatchWith = rl, n.isNaN = il, n.isNative = ol, n.isNil = ul, n.isNull = al, n.isNumber = ll, n.isObject = tl, n.isObjectLike = el, n.isPlainObject = sl, n.isRegExp = yd, n.isSafeInteger = cl, n.isSet = bd, n.isString = fl, n.isSymbol = dl, n.isTypedArray = _d, n.isUndefined = hl, n.isWeakMap = pl, n.isWeakSet = gl, n.join = va, n.kebabCase = Wd, n.last = ma, n.lastIndexOf = ya, n.lowerCase = Bd, n.lowerFirst = Ud, n.lt = xd, n.lte = wd, n.max = Hs, n.maxBy = Vs, n.mean = Gs, n.meanBy = qs, n.min = Ks, n.minBy = $s, n.stubArray = Ns, n.stubFalse = Ls, n.stubObject = zs, n.stubString = js, n.stubTrue = Ws, n.multiply = lh, n.nth = ba, n.noConflict = Es, n.noop = As, n.now = ed, n.pad = os, n.padEnd = as, n.padStart = us, n.parseInt = ls, n.random = Jl, n.reduce = du, n.reduceRight = hu, n.repeat = ss, n.replace = cs, n.result = Ul, n.round = sh, n.runInContext = t, n.sample = gu, n.size = yu, n.snakeCase = Yd, n.some = bu, n.sortedIndex = Ma, n.sortedIndexBy = Ta, n.sortedIndexOf = Da, n.sortedLastIndex = Pa, n.sortedLastIndexBy = Oa, n.sortedLastIndexOf = Ea, n.startCase = Hd, n.startsWith = ds, n.subtract = ch, n.sum = Zs, n.sumBy = Qs, n.template = hs, n.times = Bs, n.toFinite = ml, n.toInteger = yl, n.toLength = bl, n.toLower = ps, n.toNumber = _l, n.toSafeInteger = wl, n.toString = kl, n.toUpper = gs, n.trim = vs, n.trimEnd = ms, n.trimStart = ys, n.truncate = bs, n.unescape = _s, n.uniqueId = Ys, n.upperCase = Vd, n.upperFirst = Gd, n.each = uu, n.eachRight = lu, n.first = ha, Os(n, function() {
                        var t = {};
                        return fr(n, function(e, r) {
                            dc.call(n.prototype, r) || (t[r] = e)
                        }), t
                    }(), {
                        chain: !1
                    }), n.VERSION = "4.17.10", u(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                        n[t].placeholder = n
                    }), u(["drop", "take"], function(t, e) {
                        y.prototype[t] = function(n) {
                            n = n === rt ? 1 : Bc(yl(n), 0);
                            var r = this.__filtered__ && !e ? new y(this) : this.clone();
                            return r.__filtered__ ? r.__takeCount__ = Uc(n, r.__takeCount__) : r.__views__.push({
                                size: Uc(n, Ft),
                                type: t + (r.__dir__ < 0 ? "Right" : "")
                            }), r
                        }, y.prototype[t + "Right"] = function(e) {
                            return this.reverse()[t](e).reverse()
                        }
                    }), u(["filter", "map", "takeWhile"], function(t, e) {
                        var n = e + 1,
                            r = n == Pt || 3 == n;
                        y.prototype[t] = function(t) {
                            var e = this.clone();
                            return e.__iteratees__.push({
                                iteratee: yo(t, 3),
                                type: n
                            }), e.__filtered__ = e.__filtered__ || r, e
                        }
                    }), u(["head", "last"], function(t, e) {
                        var n = "take" + (e ? "Right" : "");
                        y.prototype[t] = function() {
                            return this[n](1).value()[0]
                        }
                    }), u(["initial", "tail"], function(t, e) {
                        var n = "drop" + (e ? "" : "Right");
                        y.prototype[t] = function() {
                            return this.__filtered__ ? new y(this) : this[n](1)
                        }
                    }), y.prototype.compact = function() {
                        return this.filter(Ms)
                    }, y.prototype.find = function(t) {
                        return this.filter(t).head()
                    }, y.prototype.findLast = function(t) {
                        return this.reverse().find(t)
                    }, y.prototype.invokeMap = ti(function(t, e) {
                        return "function" == typeof t ? new y(this) : this.map(function(n) {
                            return kr(n, t, e)
                        })
                    }), y.prototype.reject = function(t) {
                        return this.filter(Du(yo(t)))
                    }, y.prototype.slice = function(t, e) {
                        t = yl(t);
                        var n = this;
                        return n.__filtered__ && (t > 0 || e < 0) ? new y(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== rt && (e = yl(e), n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n)
                    }, y.prototype.takeRightWhile = function(t) {
                        return this.reverse().takeWhile(t).reverse()
                    }, y.prototype.toArray = function() {
                        return this.take(Ft)
                    }, fr(y.prototype, function(t, e) {
                        var r = /^(?:filter|find|map|reject)|While$/.test(e),
                            o = /^(?:head|last)$/.test(e),
                            a = n[o ? "take" + ("last" == e ? "Right" : "") : e],
                            u = o || /^find/.test(e);
                        a && (n.prototype[e] = function() {
                            var e = this.__wrapped__,
                                l = o ? [1] : arguments,
                                s = e instanceof y,
                                c = l[0],
                                f = s || hd(e),
                                d = function(t) {
                                    var e = a.apply(n, p([t], l));
                                    return o && h ? e[0] : e
                                };
                            f && r && "function" == typeof c && 1 != c.length && (s = f = !1);
                            var h = this.__chain__,
                                g = !!this.__actions__.length,
                                v = u && !h,
                                m = s && !g;
                            if (!u && f) {
                                e = m ? e : new y(this);
                                var b = t.apply(e, l);
                                return b.__actions__.push({
                                    func: Ka,
                                    args: [d],
                                    thisArg: rt
                                }), new i(b, h)
                            }
                            return v && m ? t.apply(this, l) : (b = this.thru(d), v ? o ? b.value()[0] : b.value() : b)
                        })
                    }), u(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
                        var e = uc[t],
                            r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                            i = /^(?:pop|shift)$/.test(t);
                        n.prototype[t] = function() {
                            var t = arguments;
                            if (i && !this.__chain__) {
                                var n = this.value();
                                return e.apply(hd(n) ? n : [], t)
                            }
                            return this[r](function(n) {
                                return e.apply(hd(n) ? n : [], t)
                            })
                        }
                    }), fr(y.prototype, function(t, e) {
                        var r = n[e];
                        if (r) {
                            var i = r.name + "";
                            (tf[i] || (tf[i] = [])).push({
                                name: e,
                                func: r
                            })
                        }
                    }), tf[Ki(rt, vt).name] = [{
                        name: "wrapper",
                        func: rt
                    }], y.prototype.clone = T, y.prototype.reverse = Z, y.prototype.value = tt, n.prototype.at = Gf, n.prototype.chain = $a, n.prototype.commit = Za, n.prototype.next = Qa, n.prototype.plant = Ja, n.prototype.reverse = tu, n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = eu, n.prototype.first = n.prototype.head, Dc && (n.prototype[Dc] = Xa), n
                }();
            En._ = qn, (i = function() {
                return qn
            }.call(e, n, e, r)) !== rt && (r.exports = i)
        }).call(this)
    }).call(e, n(23), n(12)(t))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function r(t, e) {
            var n = {};
            for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== typeof e && "function" !== typeof e ? t : e
        }

        function a(t, e) {
            if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        n.d(e, "b", function() {
            return x
        });
        var u = n(7),
            l = n.n(u),
            s = n(77),
            c = n.n(s),
            f = n(80),
            d = n.n(f),
            h = n(126),
            p = n.n(h),
            g = n(188),
            v = (n.n(g), n(213)),
            m = n.n(v);
        n.d(e, "a", function() {
            return d.a
        });
        var y = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            b = "undefined" !== typeof t && Object({
                NODE_ENV: "production",
                PUBLIC_URL: ""
            }) && "production",
            _ = function(t) {
                function e() {
                    var n, r, a;
                    i(this, e);
                    for (var u = arguments.length, l = Array(u), s = 0; s < u; s++) l[s] = arguments[s];
                    return n = r = o(this, t.call.apply(t, [this].concat(l))), r.handleOnClick = function(t) {
                        var e = r.chartInstance,
                            n = r.props,
                            i = n.getDatasetAtEvent,
                            o = n.getElementAtEvent,
                            a = n.getElementsAtEvent,
                            u = n.onElementsClick;
                        i && i(e.getDatasetAtEvent(t), t), o && o(e.getElementAtEvent(t), t), a && a(e.getElementsAtEvent(t), t), u && u(e.getElementsAtEvent(t), t)
                    }, r.ref = function(t) {
                        r.element = t
                    }, a = n, o(r, a)
                }
                return a(e, t), e.prototype.componentWillMount = function() {
                    this.chartInstance = void 0
                }, e.prototype.componentDidMount = function() {
                    this.renderChart()
                }, e.prototype.componentDidUpdate = function() {
                    if (this.props.redraw) return this.chartInstance.destroy(), void this.renderChart();
                    this.updateChart()
                }, e.prototype.shouldComponentUpdate = function(t) {
                    var e = this.props,
                        n = (e.redraw, e.type),
                        r = e.options,
                        i = e.plugins,
                        o = e.legend,
                        a = e.height,
                        u = e.width;
                    if (!0 === t.redraw) return !0;
                    if (a !== t.height || u !== t.width) return !0;
                    if (n !== t.type) return !0;
                    if (!p()(o, t.legend)) return !0;
                    if (!p()(r, t.options)) return !0;
                    var l = this.transformDataProp(t);
                    return !p()(this.shadowDataProp, l) || !p()(i, t.plugins)
                }, e.prototype.componentWillUnmount = function() {
                    this.chartInstance.destroy()
                }, e.prototype.transformDataProp = function(t) {
                    var e = t.data;
                    if ("function" == typeof e) {
                        return e(this.element)
                    }
                    return e
                }, e.prototype.memoizeDataProps = function() {
                    if (this.props.data) {
                        var t = this.transformDataProp(this.props);
                        return this.shadowDataProp = y({}, t, {
                            datasets: t.datasets && t.datasets.map(function(t) {
                                return y({}, t)
                            })
                        }), t
                    }
                }, e.prototype.checkDatasets = function(t) {
                    var n = "production" !== b && "prod" !== b,
                        r = this.props.datasetKeyProvider !== e.getLabelAsKey,
                        i = t.length > 1;
                    if (n && i && !r) {
                        var o = !1;
                        t.forEach(function(t) {
                            t.label || (o = !0)
                        }), o && console.error('[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.')
                    }
                }, e.prototype.updateChart = function() {
                    var t = this,
                        e = this.props.options,
                        n = this.memoizeDataProps(this.props);
                    if (this.chartInstance) {
                        e && (this.chartInstance.options = d.a.helpers.configMerge(this.chartInstance.options, e));
                        var i = this.chartInstance.config.data && this.chartInstance.config.data.datasets || [],
                            o = n.datasets || [];
                        this.checkDatasets(i);
                        var a = m()(i, this.props.datasetKeyProvider);
                        this.chartInstance.config.data.datasets = o.map(function(e) {
                            var n = a[t.props.datasetKeyProvider(e)];
                            if (n && n.type === e.type) {
                                n.data.splice(e.data.length), e.data.forEach(function(t, r) {
                                    n.data[r] = e.data[r]
                                });
                                var i = (e.data, r(e, ["data"]));
                                return y({}, n, i)
                            }
                            return e
                        });
                        var u = (n.datasets, r(n, ["datasets"]));
                        this.chartInstance.config.data = y({}, this.chartInstance.config.data, u), this.chartInstance.update()
                    }
                }, e.prototype.renderChart = function() {
                    var t = this.props,
                        n = t.options,
                        r = t.legend,
                        i = t.type,
                        o = (t.redraw, t.plugins),
                        a = this.element,
                        u = this.memoizeDataProps();
                    "undefined" === typeof r || p()(e.defaultProps.legend, r) || (n.legend = r), this.chartInstance = new d.a(a, {
                        type: i,
                        data: u,
                        options: n,
                        plugins: o
                    })
                }, e.prototype.render = function() {
                    var t = this.props,
                        e = t.height,
                        n = t.width,
                        r = (t.onElementsClick, t.id);
                    return l.a.createElement("canvas", {
                        ref: this.ref,
                        height: e,
                        width: n,
                        id: r,
                        onClick: this.handleOnClick
                    })
                }, e
            }(l.a.Component);
        _.getLabelAsKey = function(t) {
            return t.label
        }, _.propTypes = {
            data: c.a.oneOfType([c.a.object, c.a.func]).isRequired,
            getDatasetAtEvent: c.a.func,
            getElementAtEvent: c.a.func,
            getElementsAtEvent: c.a.func,
            height: c.a.number,
            legend: c.a.object,
            onElementsClick: c.a.func,
            options: c.a.object,
            plugins: c.a.arrayOf(c.a.object),
            redraw: c.a.bool,
            type: function(t, e, n) {
                if (!d.a.controllers[t[e]]) return new Error("Invalid chart type `" + t[e] + "` supplied to `" + n + "`.")
            },
            width: c.a.number,
            datasetKeyProvider: c.a.func
        }, _.defaultProps = {
            legend: {
                display: !0,
                position: "bottom"
            },
            type: "doughnut",
            height: 150,
            width: 300,
            redraw: !1,
            options: {},
            datasetKeyProvider: _.getLabelAsKey
        };
        var x = (function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "doughnut"
                }))
            }
        }(l.a.Component), function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "pie"
                }))
            }
        }(l.a.Component), function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            return a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "line"
                }))
            }, e
        }(l.a.Component));
        (function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "bar"
                }))
            }
        })(l.a.Component),
        function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "horizontalBar"
                }))
            }
        }(l.a.Component),
        function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "radar"
                }))
            }
        }(l.a.Component),
        function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "polarArea"
                }))
            }
        }(l.a.Component),
        function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "bubble"
                }))
            }
        }(l.a.Component),
        function(t) {
            function e() {
                return i(this, e), o(this, t.apply(this, arguments))
            }
            a(e, t), e.prototype.render = function() {
                var t = this;
                return l.a.createElement(_, y({}, this.props, {
                    ref: function(e) {
                        return t.chartInstance = e && e.chartInstance
                    },
                    type: "scatter"
                }))
            }
        }(l.a.Component), d.a.defaults
    }).call(e, n(76))
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
        try {
            return c(t, 0)
        } catch (e) {
            try {
                return c.call(null, t, 0)
            } catch (e) {
                return c.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
        try {
            return f(t)
        } catch (e) {
            try {
                return f.call(null, t)
            } catch (e) {
                return f.call(this, t)
            }
        }
    }

    function a() {
        g && h && (g = !1, h.length ? p = h.concat(p) : v = -1, p.length && u())
    }

    function u() {
        if (!g) {
            var t = i(a);
            g = !0;
            for (var e = p.length; e;) {
                for (h = p, p = []; ++v < e;) h && h[v].run();
                v = -1, e = p.length
            }
            h = null, g = !1, o(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function s() {}
    var c, f, d = t.exports = {};
    ! function() {
        try {
            c = "function" === typeof setTimeout ? setTimeout : n
        } catch (t) {
            c = n
        }
        try {
            f = "function" === typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            f = r
        }
    }();
    var h, p = [],
        g = !1,
        v = -1;
    d.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new l(t, e)), 1 !== p.length || g || i(u)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = s, d.addListener = s, d.once = s, d.off = s, d.removeListener = s, d.removeAllListeners = s, d.emit = s, d.prependListener = s, d.prependOnceListener = s, d.listeners = function(t) {
        return []
    }, d.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function() {
        return "/"
    }, d.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function() {
        return 0
    }
}, function(t, e, n) {
    t.exports = n(78)()
}, function(t, e, n) {
    "use strict";

    function r() {}
    var i = n(79);
    t.exports = function() {
        function t(t, e, n, r, o, a) {
            if (a !== i) {
                var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw u.name = "Invariant Violation", u
            }
        }

        function e() {
            return t
        }
        t.isRequired = t;
        var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e
        };
        return n.checkPropTypes = r, n.PropTypes = n, n
    }
}, function(t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(t, e, n) {
    var r = n(81)();
    r.helpers = n(0), n(85)(r), r.defaults = n(1), r.Element = n(2), r.elements = n(5), r.Interaction = n(37), r.layouts = n(8), r.platform = n(38), r.plugins = n(39), r.Ticks = n(9), n(96)(r), n(97)(r), n(98)(r), n(99)(r), n(100)(r), n(101)(r), n(102)(r), n(103)(r), n(104)(r), n(105)(r), n(106)(r), n(107)(r), n(108)(r), n(109)(r), n(110)(r), n(111)(r), n(112)(r), n(113)(r), n(114)(r), n(115)(r), n(116)(r), n(117)(r), n(118)(r), n(119)(r), n(120)(r), n(121)(r);
    var i = n(122);
    for (var o in i) i.hasOwnProperty(o) && r.plugins.register(i[o]);
    r.platform.initialize(), t.exports = r, "undefined" !== typeof window && (window.Chart = r), r.Legend = i.legend._element, r.Title = i.title._element, r.pluginService = r.plugins, r.PluginBase = r.Element.extend({}), r.canvasHelpers = r.helpers.canvas, r.layoutService = r.layouts
}, function(t, e, n) {
    "use strict";
    n(1)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    }), t.exports = function() {
        var t = function(t, e) {
            return this.construct(t, e), this
        };
        return t.Chart = t, t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(13),
        i = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return t * t * t * t * t
            },
            easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    r = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    r = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    r = 1;
                return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = .45), r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - i.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function(t) {
                return t < .5 ? .5 * i.easeInBounce(2 * t) : .5 * i.easeOutBounce(2 * t - 1) + .5
            }
        };
    t.exports = {
        effects: i
    }, r.easingEffects = i
}, function(t, e, n) {
    "use strict";
    var r = n(13),
        e = t.exports = {
            clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            roundedRect: function(t, e, n, r, i, o) {
                if (o) {
                    var a = Math.min(o, r / 2),
                        u = Math.min(o, i / 2);
                    t.moveTo(e + a, n), t.lineTo(e + r - a, n), t.quadraticCurveTo(e + r, n, e + r, n + u), t.lineTo(e + r, n + i - u), t.quadraticCurveTo(e + r, n + i, e + r - a, n + i), t.lineTo(e + a, n + i), t.quadraticCurveTo(e, n + i, e, n + i - u), t.lineTo(e, n + u), t.quadraticCurveTo(e, n, e + a, n)
                } else t.rect(e, n, r, i)
            },
            drawPoint: function(t, e, n, r, i) {
                var o, a, u, l, s, c;
                if (e && "object" === typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o)) return void t.drawImage(e, r - e.width / 2, i - e.height / 2, e.width, e.height);
                if (!(isNaN(n) || n <= 0)) {
                    switch (e) {
                        default: t.beginPath(),
                        t.arc(r, i, n, 0, 2 * Math.PI),
                        t.closePath(),
                        t.fill();
                        break;
                        case "triangle":
                                t.beginPath(),
                            a = 3 * n / Math.sqrt(3),
                            s = a * Math.sqrt(3) / 2,
                            t.moveTo(r - a / 2, i + s / 3),
                            t.lineTo(r + a / 2, i + s / 3),
                            t.lineTo(r, i - 2 * s / 3),
                            t.closePath(),
                            t.fill();
                            break;
                        case "rect":
                                c = 1 / Math.SQRT2 * n,
                            t.beginPath(),
                            t.fillRect(r - c, i - c, 2 * c, 2 * c),
                            t.strokeRect(r - c, i - c, 2 * c, 2 * c);
                            break;
                        case "rectRounded":
                                var f = n / Math.SQRT2,
                                d = r - f,
                                h = i - f,
                                p = Math.SQRT2 * n;t.beginPath(),
                            this.roundedRect(t, d, h, p, p, n / 2),
                            t.closePath(),
                            t.fill();
                            break;
                        case "rectRot":
                                c = 1 / Math.SQRT2 * n,
                            t.beginPath(),
                            t.moveTo(r - c, i),
                            t.lineTo(r, i + c),
                            t.lineTo(r + c, i),
                            t.lineTo(r, i - c),
                            t.closePath(),
                            t.fill();
                            break;
                        case "cross":
                                t.beginPath(),
                            t.moveTo(r, i + n),
                            t.lineTo(r, i - n),
                            t.moveTo(r - n, i),
                            t.lineTo(r + n, i),
                            t.closePath();
                            break;
                        case "crossRot":
                                t.beginPath(),
                            u = Math.cos(Math.PI / 4) * n,
                            l = Math.sin(Math.PI / 4) * n,
                            t.moveTo(r - u, i - l),
                            t.lineTo(r + u, i + l),
                            t.moveTo(r - u, i + l),
                            t.lineTo(r + u, i - l),
                            t.closePath();
                            break;
                        case "star":
                                t.beginPath(),
                            t.moveTo(r, i + n),
                            t.lineTo(r, i - n),
                            t.moveTo(r - n, i),
                            t.lineTo(r + n, i),
                            u = Math.cos(Math.PI / 4) * n,
                            l = Math.sin(Math.PI / 4) * n,
                            t.moveTo(r - u, i - l),
                            t.lineTo(r + u, i + l),
                            t.moveTo(r - u, i + l),
                            t.lineTo(r + u, i - l),
                            t.closePath();
                            break;
                        case "line":
                                t.beginPath(),
                            t.moveTo(r - n, i),
                            t.lineTo(r + n, i),
                            t.closePath();
                            break;
                        case "dash":
                                t.beginPath(),
                            t.moveTo(r, i),
                            t.lineTo(r + n, i),
                            t.closePath()
                    }
                    t.stroke()
                }
            },
            clipArea: function(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            },
            unclipArea: function(t) {
                t.restore()
            },
            lineTo: function(t, e, n, r) {
                return n.steppedLine ? ("after" === n.steppedLine && !r || "after" !== n.steppedLine && r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y)) : n.tension ? void t.bezierCurveTo(r ? e.controlPointPreviousX : e.controlPointNextX, r ? e.controlPointPreviousY : e.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : void t.lineTo(n.x, n.y)
            }
        };
    r.clear = e.clear, r.drawRoundedRectangle = function(t) {
        t.beginPath(), e.roundedRect.apply(e, arguments), t.closePath()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(13);
    t.exports = {
        toLineHeight: function(t, e) {
            var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!n || "normal" === n[1]) return 1.2 * e;
            switch (t = +n[2], n[3]) {
                case "px":
                    return t;
                case "%":
                    t /= 100
            }
            return e * t
        },
        toPadding: function(t) {
            var e, n, i, o;
            return r.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, o = +t.left || 0) : e = n = i = o = +t || 0, {
                top: e,
                right: n,
                bottom: i,
                left: o,
                height: e + i,
                width: o + n
            }
        },
        resolve: function(t, e, n) {
            var i, o, a;
            for (i = 0, o = t.length; i < o; ++i)
                if (void 0 !== (a = t[i]) && (void 0 !== e && "function" === typeof a && (a = a(e)), void 0 !== n && r.isArray(a) && (a = a[n]), void 0 !== a)) return a
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(36),
        i = n(1),
        o = n(0);
    t.exports = function(t) {
        function e(t, e, n) {
            var r;
            return "string" === typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n])) : r = t, r
        }

        function n(t) {
            return void 0 !== t && null !== t && "none" !== t
        }

        function a(t, r, i) {
            var o = document.defaultView,
                a = t.parentNode,
                u = o.getComputedStyle(t)[r],
                l = o.getComputedStyle(a)[r],
                s = n(u),
                c = n(l),
                f = Number.POSITIVE_INFINITY;
            return s || c ? Math.min(s ? e(u, t, i) : f, c ? e(l, a, i) : f) : "none"
        }
        o.configMerge = function() {
            return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                merger: function(e, n, r, i) {
                    var a = n[e] || {},
                        u = r[e];
                    "scales" === e ? n[e] = o.scaleMerge(a, u) : "scale" === e ? n[e] = o.merge(a, [t.scaleService.getScaleDefaults(u.type), u]) : o._merger(e, n, r, i)
                }
            })
        }, o.scaleMerge = function() {
            return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                merger: function(e, n, r, i) {
                    if ("xAxes" === e || "yAxes" === e) {
                        var a, u, l, s = r[e].length;
                        for (n[e] || (n[e] = []), a = 0; a < s; ++a) l = r[e][a], u = o.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), a >= n[e].length && n[e].push({}), !n[e][a].type || l.type && l.type !== n[e][a].type ? o.merge(n[e][a], [t.scaleService.getScaleDefaults(u), l]) : o.merge(n[e][a], l)
                    } else o._merger(e, n, r, i)
                }
            })
        }, o.where = function(t, e) {
            if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
            var n = [];
            return o.each(t, function(t) {
                e(t) && n.push(t)
            }), n
        }, o.findIndex = Array.prototype.findIndex ? function(t, e, n) {
            return t.findIndex(e, n)
        } : function(t, e, n) {
            n = void 0 === n ? t : n;
            for (var r = 0, i = t.length; r < i; ++r)
                if (e.call(n, t[r], r, t)) return r;
            return -1
        }, o.findNextWhere = function(t, e, n) {
            o.isNullOrUndef(n) && (n = -1);
            for (var r = n + 1; r < t.length; r++) {
                var i = t[r];
                if (e(i)) return i
            }
        }, o.findPreviousWhere = function(t, e, n) {
            o.isNullOrUndef(n) && (n = t.length);
            for (var r = n - 1; r >= 0; r--) {
                var i = t[r];
                if (e(i)) return i
            }
        }, o.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, o.almostEquals = function(t, e, n) {
            return Math.abs(t - e) < n
        }, o.almostWhole = function(t, e) {
            var n = Math.round(t);
            return n - e < t && n + e > t
        }, o.max = function(t) {
            return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.max(t, e)
            }, Number.NEGATIVE_INFINITY)
        }, o.min = function(t) {
            return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.min(t, e)
            }, Number.POSITIVE_INFINITY)
        }, o.sign = Math.sign ? function(t) {
            return Math.sign(t)
        } : function(t) {
            return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
        }, o.log10 = Math.log10 ? function(t) {
            return Math.log10(t)
        } : function(t) {
            var e = Math.log(t) * Math.LOG10E,
                n = Math.round(e);
            return t === Math.pow(10, n) ? n : e
        }, o.toRadians = function(t) {
            return t * (Math.PI / 180)
        }, o.toDegrees = function(t) {
            return t * (180 / Math.PI)
        }, o.getAngleFromPoint = function(t, e) {
            var n = e.x - t.x,
                r = e.y - t.y,
                i = Math.sqrt(n * n + r * r),
                o = Math.atan2(r, n);
            return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                angle: o,
                distance: i
            }
        }, o.distanceBetweenPoints = function(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }, o.aliasPixel = function(t) {
            return t % 2 === 0 ? 0 : .5
        }, o.splineCurve = function(t, e, n, r) {
            var i = t.skip ? e : t,
                o = e,
                a = n.skip ? e : n,
                u = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2)),
                l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                s = u / (u + l),
                c = l / (u + l);
            s = isNaN(s) ? 0 : s, c = isNaN(c) ? 0 : c;
            var f = r * s,
                d = r * c;
            return {
                previous: {
                    x: o.x - f * (a.x - i.x),
                    y: o.y - f * (a.y - i.y)
                },
                next: {
                    x: o.x + d * (a.x - i.x),
                    y: o.y + d * (a.y - i.y)
                }
            }
        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function(t) {
            var e, n, r, i, a = (t || []).map(function(t) {
                    return {
                        model: t._model,
                        deltaK: 0,
                        mK: 0
                    }
                }),
                u = a.length;
            for (e = 0; e < u; ++e)
                if (r = a[e], !r.model.skip) {
                    if (n = e > 0 ? a[e - 1] : null, (i = e < u - 1 ? a[e + 1] : null) && !i.model.skip) {
                        var l = i.model.x - r.model.x;
                        r.deltaK = 0 !== l ? (i.model.y - r.model.y) / l : 0
                    }!n || n.model.skip ? r.mK = r.deltaK : !i || i.model.skip ? r.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(r.deltaK) ? r.mK = 0 : r.mK = (n.deltaK + r.deltaK) / 2
                }
            var s, c, f, d;
            for (e = 0; e < u - 1; ++e) r = a[e], i = a[e + 1], r.model.skip || i.model.skip || (o.almostEquals(r.deltaK, 0, this.EPSILON) ? r.mK = i.mK = 0 : (s = r.mK / r.deltaK, c = i.mK / r.deltaK, (d = Math.pow(s, 2) + Math.pow(c, 2)) <= 9 || (f = 3 / Math.sqrt(d), r.mK = s * f * r.deltaK, i.mK = c * f * r.deltaK)));
            var h;
            for (e = 0; e < u; ++e) r = a[e], r.model.skip || (n = e > 0 ? a[e - 1] : null, i = e < u - 1 ? a[e + 1] : null, n && !n.model.skip && (h = (r.model.x - n.model.x) / 3, r.model.controlPointPreviousX = r.model.x - h, r.model.controlPointPreviousY = r.model.y - h * r.mK), i && !i.model.skip && (h = (i.model.x - r.model.x) / 3, r.model.controlPointNextX = r.model.x + h, r.model.controlPointNextY = r.model.y + h * r.mK))
        }, o.nextItem = function(t, e, n) {
            return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
        }, o.previousItem = function(t, e, n) {
            return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
        }, o.niceNum = function(t, e) {
            var n = Math.floor(o.log10(t)),
                r = t / Math.pow(10, n);
            return (e ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n)
        }, o.requestAnimFrame = function() {
            return "undefined" === typeof window ? function(t) {
                t()
            } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            }
        }(), o.getRelativePosition = function(t, e) {
            var n, r, i = t.originalEvent || t,
                a = t.currentTarget || t.srcElement,
                u = a.getBoundingClientRect(),
                l = i.touches;
            l && l.length > 0 ? (n = l[0].clientX, r = l[0].clientY) : (n = i.clientX, r = i.clientY);
            var s = parseFloat(o.getStyle(a, "padding-left")),
                c = parseFloat(o.getStyle(a, "padding-top")),
                f = parseFloat(o.getStyle(a, "padding-right")),
                d = parseFloat(o.getStyle(a, "padding-bottom")),
                h = u.right - u.left - s - f,
                p = u.bottom - u.top - c - d;
            return n = Math.round((n - u.left - s) / h * a.width / e.currentDevicePixelRatio), r = Math.round((r - u.top - c) / p * a.height / e.currentDevicePixelRatio), {
                x: n,
                y: r
            }
        }, o.getConstraintWidth = function(t) {
            return a(t, "max-width", "clientWidth")
        }, o.getConstraintHeight = function(t) {
            return a(t, "max-height", "clientHeight")
        }, o.getMaximumWidth = function(t) {
            var e = t.parentNode;
            if (!e) return t.clientWidth;
            var n = parseInt(o.getStyle(e, "padding-left"), 10),
                r = parseInt(o.getStyle(e, "padding-right"), 10),
                i = e.clientWidth - n - r,
                a = o.getConstraintWidth(t);
            return isNaN(a) ? i : Math.min(i, a)
        }, o.getMaximumHeight = function(t) {
            var e = t.parentNode;
            if (!e) return t.clientHeight;
            var n = parseInt(o.getStyle(e, "padding-top"), 10),
                r = parseInt(o.getStyle(e, "padding-bottom"), 10),
                i = e.clientHeight - n - r,
                a = o.getConstraintHeight(t);
            return isNaN(a) ? i : Math.min(i, a)
        }, o.getStyle = function(t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
        }, o.retinaScale = function(t, e) {
            var n = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
            if (1 !== n) {
                var r = t.canvas,
                    i = t.height,
                    o = t.width;
                r.height = i * n, r.width = o * n, t.ctx.scale(n, n), r.style.height || r.style.width || (r.style.height = i + "px", r.style.width = o + "px")
            }
        }, o.fontString = function(t, e, n) {
            return e + " " + t + "px " + n
        }, o.longestText = function(t, e, n, r) {
            r = r || {};
            var i = r.data = r.data || {},
                a = r.garbageCollect = r.garbageCollect || [];
            r.font !== e && (i = r.data = {}, a = r.garbageCollect = [], r.font = e), t.font = e;
            var u = 0;
            o.each(n, function(e) {
                void 0 !== e && null !== e && !0 !== o.isArray(e) ? u = o.measureText(t, i, a, u, e) : o.isArray(e) && o.each(e, function(e) {
                    void 0 === e || null === e || o.isArray(e) || (u = o.measureText(t, i, a, u, e))
                })
            });
            var l = a.length / 2;
            if (l > n.length) {
                for (var s = 0; s < l; s++) delete i[a[s]];
                a.splice(0, l)
            }
            return u
        }, o.measureText = function(t, e, n, r, i) {
            var o = e[i];
            return o || (o = e[i] = t.measureText(i).width, n.push(i)), o > r && (r = o), r
        }, o.numberOfLabelLines = function(t) {
            var e = 1;
            return o.each(t, function(t) {
                o.isArray(t) && t.length > e && (e = t.length)
            }), e
        }, o.color = r ? function(t) {
            return t instanceof CanvasGradient && (t = i.global.defaultColor), r(t)
        } : function(t) {
            return console.error("Color.js not found!"), t
        }, o.getHoverColor = function(t) {
            return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
        }
    }
}, function(t, e, n) {
    var r = n(87),
        i = function() {
            return new s
        };
    for (var o in r) {
        i[o + "Raw"] = function(t) {
            return function(e) {
                return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), r[t](e)
            }
        }(o);
        var a = /(\w+)2(\w+)/.exec(o),
            u = a[1],
            l = a[2];
        i[u] = i[u] || {}, i[u][l] = i[o] = function(t) {
            return function(e) {
                "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                var n = r[t](e);
                if ("string" == typeof n || void 0 === n) return n;
                for (var i = 0; i < n.length; i++) n[i] = Math.round(n[i]);
                return n
            }
        }(o)
    }
    var s = function() {
        this.convs = {}
    };
    s.prototype.routeSpace = function(t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
    }, s.prototype.setValues = function(t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this
    }, s.prototype.getValues = function(t) {
        var e = this.convs[t];
        if (!e) {
            var n = this.space,
                r = this.convs[n];
            e = i[n][t](r), this.convs[t] = e
        }
        return e
    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
        s.prototype[t] = function(e) {
            return this.routeSpace(t, arguments)
        }
    }), t.exports = i
}, function(t, e) {
    function n(t) {
        var e, n, r, i = t[0] / 255,
            o = t[1] / 255,
            a = t[2] / 255,
            u = Math.min(i, o, a),
            l = Math.max(i, o, a),
            s = l - u;
        return l == u ? e = 0 : i == l ? e = (o - a) / s : o == l ? e = 2 + (a - i) / s : a == l && (e = 4 + (i - o) / s), e = Math.min(60 * e, 360), e < 0 && (e += 360), r = (u + l) / 2, n = l == u ? 0 : r <= .5 ? s / (l + u) : s / (2 - l - u), [e, 100 * n, 100 * r]
    }

    function i(t) {
        var e, n, r, i = t[0],
            o = t[1],
            a = t[2],
            u = Math.min(i, o, a),
            l = Math.max(i, o, a),
            s = l - u;
        return n = 0 == l ? 0 : s / l * 1e3 / 10, l == u ? e = 0 : i == l ? e = (o - a) / s : o == l ? e = 2 + (a - i) / s : a == l && (e = 4 + (i - o) / s), e = Math.min(60 * e, 360), e < 0 && (e += 360), r = l / 255 * 1e3 / 10, [e, n, r]
    }

    function o(t) {
        var e = t[0],
            r = t[1],
            i = t[2],
            o = n(t)[0],
            a = 1 / 255 * Math.min(e, Math.min(r, i)),
            i = 1 - 1 / 255 * Math.max(e, Math.max(r, i));
        return [o, 100 * a, 100 * i]
    }

    function a(t) {
        var e, n, r, i, o = t[0] / 255,
            a = t[1] / 255,
            u = t[2] / 255;
        return i = Math.min(1 - o, 1 - a, 1 - u), e = (1 - o - i) / (1 - i) || 0, n = (1 - a - i) / (1 - i) || 0, r = (1 - u - i) / (1 - i) || 0, [100 * e, 100 * n, 100 * r, 100 * i]
    }

    function u(t) {
        return Z[JSON.stringify(t)]
    }

    function l(t) {
        var e = t[0] / 255,
            n = t[1] / 255,
            r = t[2] / 255;
        return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92, [100 * (.4124 * e + .3576 * n + .1805 * r), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
    }

    function s(t) {
        var e, n, r, i = l(t),
            o = i[0],
            a = i[1],
            u = i[2];
        return o /= 95.047, a /= 100, u /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, e = 116 * a - 16, n = 500 * (o - a), r = 200 * (a - u), [e, n, r]
    }

    function c(t) {
        return L(s(t))
    }

    function f(t) {
        var e, n, r, i, o, a = t[0] / 360,
            u = t[1] / 100,
            l = t[2] / 100;
        if (0 == u) return o = 255 * l, [o, o, o];
        n = l < .5 ? l * (1 + u) : l + u - l * u, e = 2 * l - n, i = [0, 0, 0];
        for (var s = 0; s < 3; s++) r = a + 1 / 3 * -(s - 1), r < 0 && r++, r > 1 && r--, o = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e, i[s] = 255 * o;
        return i
    }

    function d(t) {
        var e, n, r = t[0],
            i = t[1] / 100,
            o = t[2] / 100;
        return 0 === o ? [0, 0, 0] : (o *= 2, i *= o <= 1 ? o : 2 - o, n = (o + i) / 2, e = 2 * i / (o + i), [r, 100 * e, 100 * n])
    }

    function h(t) {
        return o(f(t))
    }

    function p(t) {
        return a(f(t))
    }

    function v(t) {
        return u(f(t))
    }

    function m(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            r = t[2] / 100,
            i = Math.floor(e) % 6,
            o = e - Math.floor(e),
            a = 255 * r * (1 - n),
            u = 255 * r * (1 - n * o),
            l = 255 * r * (1 - n * (1 - o)),
            r = 255 * r;
        switch (i) {
            case 0:
                return [r, l, a];
            case 1:
                return [u, r, a];
            case 2:
                return [a, r, l];
            case 3:
                return [a, u, r];
            case 4:
                return [l, a, r];
            case 5:
                return [r, a, u]
        }
    }

    function y(t) {
        var e, n, r = t[0],
            i = t[1] / 100,
            o = t[2] / 100;
        return n = (2 - i) * o, e = i * o, e /= n <= 1 ? n : 2 - n, e = e || 0, n /= 2, [r, 100 * e, 100 * n]
    }

    function _(t) {
        return o(m(t))
    }

    function x(t) {
        return a(m(t))
    }

    function w(t) {
        return u(m(t))
    }

    function k(t) {
        var e, n, i, o, a = t[0] / 360,
            u = t[1] / 100,
            l = t[2] / 100,
            s = u + l;
        switch (s > 1 && (u /= s, l /= s), e = Math.floor(6 * a), n = 1 - l, i = 6 * a - e, 0 != (1 & e) && (i = 1 - i), o = u + i * (n - u), e) {
            default:
                case 6:
                case 0:
                r = n,
            g = o,
            b = u;
            break;
            case 1:
                    r = o,
                g = n,
                b = u;
                break;
            case 2:
                    r = u,
                g = n,
                b = o;
                break;
            case 3:
                    r = u,
                g = o,
                b = n;
                break;
            case 4:
                    r = o,
                g = u,
                b = n;
                break;
            case 5:
                    r = n,
                g = u,
                b = o
        }
        return [255 * r, 255 * g, 255 * b]
    }

    function S(t) {
        return n(k(t))
    }

    function C(t) {
        return i(k(t))
    }

    function M(t) {
        return a(k(t))
    }

    function T(t) {
        return u(k(t))
    }

    function D(t) {
        var e, n, r, i = t[0] / 100,
            o = t[1] / 100,
            a = t[2] / 100,
            u = t[3] / 100;
        return e = 1 - Math.min(1, i * (1 - u) + u), n = 1 - Math.min(1, o * (1 - u) + u), r = 1 - Math.min(1, a * (1 - u) + u), [255 * e, 255 * n, 255 * r]
    }

    function P(t) {
        return n(D(t))
    }

    function O(t) {
        return i(D(t))
    }

    function E(t) {
        return o(D(t))
    }

    function A(t) {
        return u(D(t))
    }

    function I(t) {
        var e, n, r, i = t[0] / 100,
            o = t[1] / 100,
            a = t[2] / 100;
        return e = 3.2406 * i + -1.5372 * o + -.4986 * a, n = -.9689 * i + 1.8758 * o + .0415 * a, r = .0557 * i + -.204 * o + 1.057 * a, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : r *= 12.92, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), r = Math.min(Math.max(0, r), 1), [255 * e, 255 * n, 255 * r]
    }

    function R(t) {
        var e, n, r, i = t[0],
            o = t[1],
            a = t[2];
        return i /= 95.047, o /= 100, a /= 108.883, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, e = 116 * o - 16, n = 500 * (i - o), r = 200 * (o - a), [e, n, r]
    }

    function F(t) {
        return L(R(t))
    }

    function N(t) {
        var e, n, r, i, o = t[0],
            a = t[1],
            u = t[2];
        return o <= 8 ? (n = 100 * o / 903.3, i = n / 100 * 7.787 + 16 / 116) : (n = 100 * Math.pow((o + 16) / 116, 3), i = Math.pow(n / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + i - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + i, 3), r = r / 108.883 <= .008859 ? r = 108.883 * (i - u / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i - u / 200, 3), [e, n, r]
    }

    function L(t) {
        var e, n, r, i = t[0],
            o = t[1],
            a = t[2];
        return e = Math.atan2(a, o), n = 360 * e / 2 / Math.PI, n < 0 && (n += 360), r = Math.sqrt(o * o + a * a), [i, r, n]
    }

    function z(t) {
        return I(N(t))
    }

    function j(t) {
        var e, n, r, i = t[0],
            o = t[1],
            a = t[2];
        return r = a / 360 * 2 * Math.PI, e = o * Math.cos(r), n = o * Math.sin(r), [i, e, n]
    }

    function W(t) {
        return N(j(t))
    }

    function B(t) {
        return z(j(t))
    }

    function U(t) {
        return $[t]
    }

    function Y(t) {
        return n(U(t))
    }

    function H(t) {
        return i(U(t))
    }

    function V(t) {
        return o(U(t))
    }

    function G(t) {
        return a(U(t))
    }

    function q(t) {
        return s(U(t))
    }

    function K(t) {
        return l(U(t))
    }
    t.exports = {
        rgb2hsl: n,
        rgb2hsv: i,
        rgb2hwb: o,
        rgb2cmyk: a,
        rgb2keyword: u,
        rgb2xyz: l,
        rgb2lab: s,
        rgb2lch: c,
        hsl2rgb: f,
        hsl2hsv: d,
        hsl2hwb: h,
        hsl2cmyk: p,
        hsl2keyword: v,
        hsv2rgb: m,
        hsv2hsl: y,
        hsv2hwb: _,
        hsv2cmyk: x,
        hsv2keyword: w,
        hwb2rgb: k,
        hwb2hsl: S,
        hwb2hsv: C,
        hwb2cmyk: M,
        hwb2keyword: T,
        cmyk2rgb: D,
        cmyk2hsl: P,
        cmyk2hsv: O,
        cmyk2hwb: E,
        cmyk2keyword: A,
        keyword2rgb: U,
        keyword2hsl: Y,
        keyword2hsv: H,
        keyword2hwb: V,
        keyword2cmyk: G,
        keyword2lab: q,
        keyword2xyz: K,
        xyz2rgb: I,
        xyz2lab: R,
        xyz2lch: F,
        lab2xyz: N,
        lab2rgb: z,
        lab2lch: L,
        lch2lab: j,
        lch2xyz: W,
        lch2rgb: B
    };
    var $ = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        Z = {};
    for (var Q in $) Z[JSON.stringify($[Q])] = Q
}, function(t, e, n) {
    function r(t) {
        if (t) {
            var e = /^#([a-fA-F0-9]{3})$/i,
                n = /^#([a-fA-F0-9]{6})$/i,
                r = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                i = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                o = /(\w+)/,
                a = [0, 0, 0],
                u = 1,
                l = t.match(e);
            if (l) {
                l = l[1];
                for (var s = 0; s < a.length; s++) a[s] = parseInt(l[s] + l[s], 16)
            } else if (l = t.match(n)) {
                l = l[1];
                for (var s = 0; s < a.length; s++) a[s] = parseInt(l.slice(2 * s, 2 * s + 2), 16)
            } else if (l = t.match(r)) {
                for (var s = 0; s < a.length; s++) a[s] = parseInt(l[s + 1]);
                u = parseFloat(l[4])
            } else if (l = t.match(i)) {
                for (var s = 0; s < a.length; s++) a[s] = Math.round(2.55 * parseFloat(l[s + 1]));
                u = parseFloat(l[4])
            } else if (l = t.match(o)) {
                if ("transparent" == l[1]) return [0, 0, 0, 0];
                if (!(a = _[l[1]])) return
            }
            for (var s = 0; s < a.length; s++) a[s] = y(a[s], 0, 255);
            return u = u || 0 == u ? y(u, 0, 1) : 1, a[3] = u, a
        }
    }

    function i(t) {
        if (t) {
            var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                n = t.match(e);
            if (n) {
                var r = parseFloat(n[4]);
                return [y(parseInt(n[1]), 0, 360), y(parseFloat(n[2]), 0, 100), y(parseFloat(n[3]), 0, 100), y(isNaN(r) ? 1 : r, 0, 1)]
            }
        }
    }

    function o(t) {
        if (t) {
            var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                n = t.match(e);
            if (n) {
                var r = parseFloat(n[4]);
                return [y(parseInt(n[1]), 0, 360), y(parseFloat(n[2]), 0, 100), y(parseFloat(n[3]), 0, 100), y(isNaN(r) ? 1 : r, 0, 1)]
            }
        }
    }

    function a(t) {
        var e = r(t);
        return e && e.slice(0, 3)
    }

    function u(t) {
        var e = i(t);
        return e && e.slice(0, 3)
    }

    function l(t) {
        var e = r(t);
        return e ? e[3] : (e = i(t)) ? e[3] : (e = o(t)) ? e[3] : void 0
    }

    function s(t) {
        return "#" + b(t[0]) + b(t[1]) + b(t[2])
    }

    function c(t, e) {
        return e < 1 || t[3] && t[3] < 1 ? f(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
    }

    function f(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function d(t, e) {
        return e < 1 || t[3] && t[3] < 1 ? h(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
    }

    function h(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function p(t, e) {
        return e < 1 || t[3] && t[3] < 1 ? g(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
    }

    function g(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function v(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
    }

    function m(t) {
        return x[t.slice(0, 3)]
    }

    function y(t, e, n) {
        return Math.min(Math.max(e, t), n)
    }

    function b(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var _ = n(89);
    t.exports = {
        getRgba: r,
        getHsla: i,
        getRgb: a,
        getHsl: u,
        getHwb: o,
        getAlpha: l,
        hexString: s,
        rgbString: c,
        rgbaString: f,
        percentString: d,
        percentaString: h,
        hslString: p,
        hslaString: g,
        hwbString: v,
        keyword: m
    };
    var x = {};
    for (var w in _) x[_[w]] = w
}, function(t, e, n) {
    "use strict";
    t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(2),
        o = n(0);
    r._set("global", {
        elements: {
            arc: {
                backgroundColor: r.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2
            }
        }
    }), t.exports = i.extend({
        inLabelRange: function(t) {
            var e = this._view;
            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
        },
        inRange: function(t, e) {
            var n = this._view;
            if (n) {
                for (var r = o.getAngleFromPoint(n, {
                        x: t,
                        y: e
                    }), i = r.angle, a = r.distance, u = n.startAngle, l = n.endAngle; l < u;) l += 2 * Math.PI;
                for (; i > l;) i -= 2 * Math.PI;
                for (; i < u;) i += 2 * Math.PI;
                var s = i >= u && i <= l,
                    c = a >= n.innerRadius && a <= n.outerRadius;
                return s && c
            }
            return !1
        },
        getCenterPoint: function() {
            var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                n = (t.innerRadius + t.outerRadius) / 2;
            return {
                x: t.x + Math.cos(e) * n,
                y: t.y + Math.sin(e) * n
            }
        },
        getArea: function() {
            var t = this._view;
            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
        },
        tooltipPosition: function() {
            var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return {
                x: t.x + Math.cos(e) * n,
                y: t.y + Math.sin(e) * n
            }
        },
        draw: function() {
            var t = this._chart.ctx,
                e = this._view,
                n = e.startAngle,
                r = e.endAngle;
            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, r), t.arc(e.x, e.y, e.innerRadius, r, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(2),
        o = n(0),
        a = r.global;
    r._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: a.defaultColor,
                borderWidth: 3,
                borderColor: a.defaultColor,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    }), t.exports = i.extend({
        draw: function() {
            var t, e, n, r, i = this,
                u = i._view,
                l = i._chart.ctx,
                s = u.spanGaps,
                c = i._children.slice(),
                f = a.elements.line,
                d = -1;
            for (i._loop && c.length && c.push(c[0]), l.save(), l.lineCap = u.borderCapStyle || f.borderCapStyle, l.setLineDash && l.setLineDash(u.borderDash || f.borderDash), l.lineDashOffset = u.borderDashOffset || f.borderDashOffset, l.lineJoin = u.borderJoinStyle || f.borderJoinStyle, l.lineWidth = u.borderWidth || f.borderWidth, l.strokeStyle = u.borderColor || a.defaultColor, l.beginPath(), d = -1, t = 0; t < c.length; ++t) e = c[t], n = o.previousItem(c, t), r = e._view, 0 === t ? r.skip || (l.moveTo(r.x, r.y), d = t) : (n = -1 === d ? n : c[d], r.skip || (d !== t - 1 && !s || -1 === d ? l.moveTo(r.x, r.y) : o.canvas.lineTo(l, n._view, e._view), d = t));
            l.stroke(), l.restore()
        }
    })
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }

    function i(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
    }
    var o = n(1),
        a = n(2),
        u = n(0),
        l = o.global.defaultColor;
    o._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: l,
                borderColor: l,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    }), t.exports = a.extend({
        inRange: function(t, e) {
            var n = this._view;
            return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
        },
        inLabelRange: r,
        inXRange: r,
        inYRange: i,
        getCenterPoint: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y
            }
        },
        getArea: function() {
            return Math.PI * Math.pow(this._view.radius, 2)
        },
        tooltipPosition: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y,
                padding: t.radius + t.borderWidth
            }
        },
        draw: function(t) {
            var e = this._view,
                n = this._model,
                r = this._chart.ctx,
                i = e.pointStyle,
                a = e.radius,
                s = e.x,
                c = e.y,
                f = u.color,
                d = 0;
            e.skip || (r.strokeStyle = e.borderColor || l, r.lineWidth = u.valueOrDefault(e.borderWidth, o.global.elements.point.borderWidth), r.fillStyle = e.backgroundColor || l, void 0 !== t && (n.x < t.left || 1.01 * t.right < n.x || n.y < t.top || 1.01 * t.bottom < n.y) && (n.x < t.left ? d = (s - n.x) / (t.left - n.x) : 1.01 * t.right < n.x ? d = (n.x - s) / (n.x - t.right) : n.y < t.top ? d = (c - n.y) / (t.top - n.y) : 1.01 * t.bottom < n.y && (d = (n.y - c) / (n.y - t.bottom)), d = Math.round(100 * d) / 100, r.strokeStyle = f(r.strokeStyle).alpha(d).rgbString(), r.fillStyle = f(r.fillStyle).alpha(d).rgbString()), u.canvas.drawPoint(r, i, a, s, c))
        }
    })
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return void 0 !== t._view.width
    }

    function i(t) {
        var e, n, i, o, a = t._view;
        if (r(t)) {
            var u = a.width / 2;
            e = a.x - u, n = a.x + u, i = Math.min(a.y, a.base), o = Math.max(a.y, a.base)
        } else {
            var l = a.height / 2;
            e = Math.min(a.x, a.base), n = Math.max(a.x, a.base), i = a.y - l, o = a.y + l
        }
        return {
            left: e,
            top: i,
            right: n,
            bottom: o
        }
    }
    var o = n(1),
        a = n(2);
    o._set("global", {
        elements: {
            rectangle: {
                backgroundColor: o.global.defaultColor,
                borderColor: o.global.defaultColor,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    }), t.exports = a.extend({
        draw: function() {
            function t(t) {
                return m[(b + t) % 4]
            }
            var e, n, r, i, o, a, u, l = this._chart.ctx,
                s = this._view,
                c = s.borderWidth;
            if (s.horizontal ? (e = s.base, n = s.x, r = s.y - s.height / 2, i = s.y + s.height / 2, o = n > e ? 1 : -1, a = 1, u = s.borderSkipped || "left") : (e = s.x - s.width / 2, n = s.x + s.width / 2, r = s.y, i = s.base, o = 1, a = i > r ? 1 : -1, u = s.borderSkipped || "bottom"), c) {
                var f = Math.min(Math.abs(e - n), Math.abs(r - i));
                c = c > f ? f : c;
                var d = c / 2,
                    h = e + ("left" !== u ? d * o : 0),
                    p = n + ("right" !== u ? -d * o : 0),
                    g = r + ("top" !== u ? d * a : 0),
                    v = i + ("bottom" !== u ? -d * a : 0);
                h !== p && (r = g, i = v), g !== v && (e = h, n = p)
            }
            l.beginPath(), l.fillStyle = s.backgroundColor, l.strokeStyle = s.borderColor, l.lineWidth = c;
            var m = [
                    [e, i],
                    [e, r],
                    [n, r],
                    [n, i]
                ],
                y = ["bottom", "left", "top", "right"],
                b = y.indexOf(u, 0); - 1 === b && (b = 0);
            var _ = t(0);
            l.moveTo(_[0], _[1]);
            for (var x = 1; x < 4; x++) _ = t(x), l.lineTo(_[0], _[1]);
            l.fill(), c && l.stroke()
        },
        height: function() {
            var t = this._view;
            return t.base - t.y
        },
        inRange: function(t, e) {
            var n = !1;
            if (this._view) {
                var r = i(this);
                n = t >= r.left && t <= r.right && e >= r.top && e <= r.bottom
            }
            return n
        },
        inLabelRange: function(t, e) {
            var n = this;
            if (!n._view) return !1;
            var o = i(n);
            return r(n) ? t >= o.left && t <= o.right : e >= o.top && e <= o.bottom
        },
        inXRange: function(t) {
            var e = i(this);
            return t >= e.left && t <= e.right
        },
        inYRange: function(t) {
            var e = i(this);
            return t >= e.top && t <= e.bottom
        },
        getCenterPoint: function() {
            var t, e, n = this._view;
            return r(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                x: t,
                y: e
            }
        },
        getArea: function() {
            var t = this._view;
            return t.width * Math.abs(t.y - t.base)
        },
        tooltipPosition: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y
            }
        }
    })
}, function(t, e) {
    t.exports = {
        acquireContext: function(t) {
            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = v.getStyle(t, e),
            r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? Number(r[1]) : void 0
    }

    function i(t, e) {
        var n = t.style,
            i = t.getAttribute("height"),
            o = t.getAttribute("width");
        if (t[m] = {
                initial: {
                    height: i,
                    width: o,
                    style: {
                        display: n.display,
                        height: n.height,
                        width: n.width
                    }
                }
            }, n.display = n.display || "block", null === o || "" === o) {
            var a = r(t, "width");
            void 0 !== a && (t.width = a)
        }
        if (null === i || "" === i)
            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
            else {
                var u = r(t, "height");
                void 0 !== a && (t.height = u)
            }
        return t
    }

    function o(t, e, n) {
        t.addEventListener(e, n, S)
    }

    function a(t, e, n) {
        t.removeEventListener(e, n, S)
    }

    function u(t, e, n, r, i) {
        return {
            type: t,
            chart: e,
            native: i || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== r ? r : null
        }
    }

    function l(t, e) {
        var n = w[t.type] || t.type,
            r = v.getRelativePosition(t, e);
        return u(n, e, r.x, r.y, t)
    }

    function s(t, e) {
        var n = !1,
            r = [];
        return function() {
            r = Array.prototype.slice.call(arguments), e = e || this, n || (n = !0, v.requestAnimFrame.call(window, function() {
                n = !1, t.apply(e, r)
            }))
        }
    }

    function c(t) {
        var e = document.createElement("div"),
            n = y + "size-monitor",
            r = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
        e.style.cssText = r, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + r + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + r + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
        var i = e.childNodes[0],
            a = e.childNodes[1];
        e._reset = function() {
            i.scrollLeft = 1e6, i.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
        };
        var u = function() {
            e._reset(), t()
        };
        return o(i, "scroll", u.bind(i, "expand")), o(a, "scroll", u.bind(a, "shrink")), e
    }

    function f(t, e) {
        var n = t[m] || (t[m] = {}),
            r = n.renderProxy = function(t) {
                t.animationName === _ && e()
            };
        v.each(x, function(e) {
            o(t, e, r)
        }), n.reflow = !!t.offsetParent, t.classList.add(b)
    }

    function d(t) {
        var e = t[m] || {},
            n = e.renderProxy;
        n && (v.each(x, function(e) {
            a(t, e, n)
        }), delete e.renderProxy), t.classList.remove(b)
    }

    function h(t, e, n) {
        var r = t[m] || (t[m] = {}),
            i = r.resizer = c(s(function() {
                if (r.resizer) return e(u("resize", n))
            }));
        f(t, function() {
            if (r.resizer) {
                var e = t.parentNode;
                e && e !== i.parentNode && e.insertBefore(i, e.firstChild), i._reset()
            }
        })
    }

    function p(t) {
        var e = t[m] || {},
            n = e.resizer;
        delete e.resizer, d(t), n && n.parentNode && n.parentNode.removeChild(n)
    }

    function g(t, e) {
        var n = t._style || document.createElement("style");
        t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))
    }
    var v = n(0),
        m = "$chartjs",
        y = "chartjs-",
        b = y + "render-monitor",
        _ = y + "render-animation",
        x = ["animationstart", "webkitAnimationStart"],
        w = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        },
        k = function() {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function() {
                        t = !0
                    }
                });
                window.addEventListener("e", null, e)
            } catch (t) {}
            return t
        }(),
        S = !!k && {
            passive: !0
        };
    t.exports = {
        _enabled: "undefined" !== typeof window && "undefined" !== typeof document,
        initialize: function() {
            var t = "from{opacity:0.99}to{opacity:1}";
            g(this, "@-webkit-keyframes " + _ + "{" + t + "}@keyframes " + _ + "{" + t + "}." + b + "{-webkit-animation:" + _ + " 0.001s;animation:" + _ + " 0.001s;}")
        },
        acquireContext: function(t, e) {
            "string" === typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t ? (i(t, e), n) : null
        },
        releaseContext: function(t) {
            var e = t.canvas;
            if (e[m]) {
                var n = e[m].initial;
                ["height", "width"].forEach(function(t) {
                    var r = n[t];
                    v.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                }), v.each(n.style || {}, function(t, n) {
                    e.style[n] = t
                }), e.width = e.width, delete e[m]
            }
        },
        addEventListener: function(t, e, n) {
            var r = t.canvas;
            if ("resize" === e) return void h(r, n, t);
            var i = n[m] || (n[m] = {});
            o(r, e, (i.proxies || (i.proxies = {}))[t.id + "_" + e] = function(e) {
                n(l(e, t))
            })
        },
        removeEventListener: function(t, e, n) {
            var r = t.canvas;
            if ("resize" === e) return void p(r);
            var i = n[m] || {},
                o = i.proxies || {},
                u = o[t.id + "_" + e];
            u && a(r, e, u)
        }
    }, v.addEvent = o, v.removeEvent = a
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(2),
        o = n(0);
    r._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: o.noop,
            onComplete: o.noop
        }
    }), t.exports = function(t) {
        t.Animation = i.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }), t.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            request: null,
            addAnimation: function(t, e, n, r) {
                var i, o, a = this.animations;
                for (e.chart = t, r || (t.animating = !0), i = 0, o = a.length; i < o; ++i)
                    if (a[i].chart === t) return void(a[i] = e);
                a.push(e), 1 === a.length && this.requestAnimationFrame()
            },
            cancelAnimation: function(t) {
                var e = o.findIndex(this.animations, function(e) {
                    return e.chart === t
                }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
            },
            requestAnimationFrame: function() {
                var t = this;
                null === t.request && (t.request = o.requestAnimFrame.call(window, function() {
                    t.request = null, t.startDigest()
                }))
            },
            startDigest: function() {
                var t = this,
                    e = Date.now(),
                    n = 0;
                t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                var r = Date.now();
                t.dropFrames += (r - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
            },
            advance: function(t) {
                for (var e, n, r = this.animations, i = 0; i < r.length;) e = r[i], n = e.chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [n, e], n), o.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], n), n.animating = !1, r.splice(i, 1)) : ++i
            }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
            get: function() {
                return this
            }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
            get: function() {
                return this.chart
            },
            set: function(t) {
                this.chart = t
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0),
        o = n(37),
        a = n(8),
        u = n(38),
        l = n(39);
    t.exports = function(t) {
        function e(t) {
            t = t || {};
            var e = t.data = t.data || {};
            return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = i.configMerge(r.global, r[t.type], t.options || {}), t
        }

        function n(e) {
            var n = e.options;
            i.each(e.scales, function(t) {
                a.removeBox(e, t)
            }), n = i.configMerge(t.defaults.global, t.defaults[e.config.type], n), e.options = e.config.options = n, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = n.tooltips, e.tooltip.initialize()
        }

        function s(t) {
            return "top" === t || "bottom" === t
        }
        t.types = {}, t.instances = {}, t.controllers = {}, i.extend(t.prototype, {
            construct: function(n, r) {
                var o = this;
                r = e(r);
                var a = u.acquireContext(n, r),
                    l = a && a.canvas,
                    s = l && l.height,
                    c = l && l.width;
                if (o.id = i.uid(), o.ctx = a, o.canvas = l, o.config = r, o.width = c, o.height = s, o.aspectRatio = s ? c / s : null, o.options = r.options, o._bufferedRender = !1, o.chart = o, o.controller = o, t.instances[o.id] = o, Object.defineProperty(o, "data", {
                        get: function() {
                            return o.config.data
                        },
                        set: function(t) {
                            o.config.data = t
                        }
                    }), !a || !l) return void console.error("Failed to create chart: can't acquire context from the given item");
                o.initialize(), o.update()
            },
            initialize: function() {
                var t = this;
                return l.notify(t, "beforeInit"), i.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t
            },
            clear: function() {
                return i.canvas.clear(this), this
            },
            stop: function() {
                return t.animationService.cancelAnimation(this), this
            },
            resize: function(t) {
                var e = this,
                    n = e.options,
                    r = e.canvas,
                    o = n.maintainAspectRatio && e.aspectRatio || null,
                    a = Math.max(0, Math.floor(i.getMaximumWidth(r))),
                    u = Math.max(0, Math.floor(o ? a / o : i.getMaximumHeight(r)));
                if ((e.width !== a || e.height !== u) && (r.width = e.width = a, r.height = e.height = u, r.style.width = a + "px", r.style.height = u + "px", i.retinaScale(e, n.devicePixelRatio), !t)) {
                    var s = {
                        width: a,
                        height: u
                    };
                    l.notify(e, "resize", [s]), e.options.onResize && e.options.onResize(e, s), e.stop(), e.update(e.options.responsiveAnimationDuration)
                }
            },
            ensureScalesHaveIDs: function() {
                var t = this.options,
                    e = t.scales || {},
                    n = t.scale;
                i.each(e.xAxes, function(t, e) {
                    t.id = t.id || "x-axis-" + e
                }), i.each(e.yAxes, function(t, e) {
                    t.id = t.id || "y-axis-" + e
                }), n && (n.id = n.id || "scale")
            },
            buildOrUpdateScales: function() {
                var e = this,
                    n = e.options,
                    r = e.scales || {},
                    o = [],
                    a = Object.keys(r).reduce(function(t, e) {
                        return t[e] = !1, t
                    }, {});
                n.scales && (o = o.concat((n.scales.xAxes || []).map(function(t) {
                    return {
                        options: t,
                        dtype: "category",
                        dposition: "bottom"
                    }
                }), (n.scales.yAxes || []).map(function(t) {
                    return {
                        options: t,
                        dtype: "linear",
                        dposition: "left"
                    }
                }))), n.scale && o.push({
                    options: n.scale,
                    dtype: "radialLinear",
                    isDefault: !0,
                    dposition: "chartArea"
                }), i.each(o, function(n) {
                    var o = n.options,
                        u = o.id,
                        l = i.valueOrDefault(o.type, n.dtype);
                    s(o.position) !== s(n.dposition) && (o.position = n.dposition), a[u] = !0;
                    var c = null;
                    if (u in r && r[u].type === l) c = r[u], c.options = o, c.ctx = e.ctx, c.chart = e;
                    else {
                        var f = t.scaleService.getScaleConstructor(l);
                        if (!f) return;
                        c = new f({
                            id: u,
                            type: l,
                            options: o,
                            ctx: e.ctx,
                            chart: e
                        }), r[c.id] = c
                    }
                    c.mergeTicksOptions(), n.isDefault && (e.scale = c)
                }), i.each(a, function(t, e) {
                    t || delete r[e]
                }), e.scales = r, t.scaleService.addScalesToLayout(this)
            },
            buildOrUpdateControllers: function() {
                var e = this,
                    n = [],
                    r = [];
                return i.each(e.data.datasets, function(i, o) {
                    var a = e.getDatasetMeta(o),
                        u = i.type || e.config.type;
                    if (a.type && a.type !== u && (e.destroyDatasetMeta(o), a = e.getDatasetMeta(o)), a.type = u, n.push(a.type), a.controller) a.controller.updateIndex(o), a.controller.linkScales();
                    else {
                        var l = t.controllers[a.type];
                        if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                        a.controller = new l(e, o), r.push(a.controller)
                    }
                }, e), r
            },
            resetElements: function() {
                var t = this;
                i.each(t.data.datasets, function(e, n) {
                    t.getDatasetMeta(n).controller.reset()
                }, t)
            },
            reset: function() {
                this.resetElements(), this.tooltip.initialize()
            },
            update: function(t) {
                var e = this;
                if (t && "object" === typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    }), n(e), l._invalidate(e), !1 !== l.notify(e, "beforeUpdate")) {
                    e.tooltip._data = e.data;
                    var r = e.buildOrUpdateControllers();
                    i.each(e.data.datasets, function(t, n) {
                        e.getDatasetMeta(n).controller.buildOrUpdateElements()
                    }, e), e.updateLayout(), e.options.animation && e.options.animation.duration && i.each(r, function(t) {
                        t.reset()
                    }), e.updateDatasets(), e.tooltip.initialize(), e.lastActive = [], l.notify(e, "afterUpdate"), e._bufferedRender ? e._bufferedRequest = {
                        duration: t.duration,
                        easing: t.easing,
                        lazy: t.lazy
                    } : e.render(t)
                }
            },
            updateLayout: function() {
                var t = this;
                !1 !== l.notify(t, "beforeLayout") && (a.update(this, this.width, this.height), l.notify(t, "afterScaleUpdate"), l.notify(t, "afterLayout"))
            },
            updateDatasets: function() {
                var t = this;
                if (!1 !== l.notify(t, "beforeDatasetsUpdate")) {
                    for (var e = 0, n = t.data.datasets.length; e < n; ++e) t.updateDataset(e);
                    l.notify(t, "afterDatasetsUpdate")
                }
            },
            updateDataset: function(t) {
                var e = this,
                    n = e.getDatasetMeta(t),
                    r = {
                        meta: n,
                        index: t
                    };
                !1 !== l.notify(e, "beforeDatasetUpdate", [r]) && (n.controller.update(), l.notify(e, "afterDatasetUpdate", [r]))
            },
            render: function(e) {
                var n = this;
                e && "object" === typeof e || (e = {
                    duration: e,
                    lazy: arguments[1]
                });
                var r = e.duration,
                    o = e.lazy;
                if (!1 !== l.notify(n, "beforeRender")) {
                    var a = n.options.animation,
                        u = function(t) {
                            l.notify(n, "afterRender"), i.callback(a && a.onComplete, [t], n)
                        };
                    if (a && ("undefined" !== typeof r && 0 !== r || "undefined" === typeof r && 0 !== a.duration)) {
                        var s = new t.Animation({
                            numSteps: (r || a.duration) / 16.66,
                            easing: e.easing || a.easing,
                            render: function(t, e) {
                                var n = i.easing.effects[e.easing],
                                    r = e.currentStep,
                                    o = r / e.numSteps;
                                t.draw(n(o), o, r)
                            },
                            onAnimationProgress: a.onProgress,
                            onAnimationComplete: u
                        });
                        t.animationService.addAnimation(n, s, r, o)
                    } else n.draw(), u(new t.Animation({
                        numSteps: 0,
                        chart: n
                    }));
                    return n
                }
            },
            draw: function(t) {
                var e = this;
                e.clear(), i.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (i.each(e.boxes, function(t) {
                    t.draw(e.chartArea)
                }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]))
            },
            transition: function(t) {
                for (var e = this, n = 0, r = (e.data.datasets || []).length; n < r; ++n) e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
                e.tooltip.transition(t)
            },
            drawDatasets: function(t) {
                var e = this;
                if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
                    for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                    l.notify(e, "afterDatasetsDraw", [t])
                }
            },
            drawDataset: function(t, e) {
                var n = this,
                    r = n.getDatasetMeta(t),
                    i = {
                        meta: r,
                        index: t,
                        easingValue: e
                    };
                !1 !== l.notify(n, "beforeDatasetDraw", [i]) && (r.controller.draw(e), l.notify(n, "afterDatasetDraw", [i]))
            },
            _drawTooltip: function(t) {
                var e = this,
                    n = e.tooltip,
                    r = {
                        tooltip: n,
                        easingValue: t
                    };
                !1 !== l.notify(e, "beforeTooltipDraw", [r]) && (n.draw(), l.notify(e, "afterTooltipDraw", [r]))
            },
            getElementAtEvent: function(t) {
                return o.modes.single(this, t)
            },
            getElementsAtEvent: function(t) {
                return o.modes.label(this, t, {
                    intersect: !0
                })
            },
            getElementsAtXAxis: function(t) {
                return o.modes["x-axis"](this, t, {
                    intersect: !0
                })
            },
            getElementsAtEventForMode: function(t, e, n) {
                var r = o.modes[e];
                return "function" === typeof r ? r(this, t, n) : []
            },
            getDatasetAtEvent: function(t) {
                return o.modes.dataset(this, t, {
                    intersect: !0
                })
            },
            getDatasetMeta: function(t) {
                var e = this,
                    n = e.data.datasets[t];
                n._meta || (n._meta = {});
                var r = n._meta[e.id];
                return r || (r = n._meta[e.id] = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null
                }), r
            },
            getVisibleDatasetCount: function() {
                for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                return t
            },
            isDatasetVisible: function(t) {
                var e = this.getDatasetMeta(t);
                return "boolean" === typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
            },
            generateLegend: function() {
                return this.options.legendCallback(this)
            },
            destroyDatasetMeta: function(t) {
                var e = this.id,
                    n = this.data.datasets[t],
                    r = n._meta && n._meta[e];
                r && (r.controller.destroy(), delete n._meta[e])
            },
            destroy: function() {
                var e, n, r = this,
                    o = r.canvas;
                for (r.stop(), e = 0, n = r.data.datasets.length; e < n; ++e) r.destroyDatasetMeta(e);
                o && (r.unbindEvents(), i.canvas.clear(r), u.releaseContext(r.ctx), r.canvas = null, r.ctx = null), l.notify(r, "destroy"), delete t.instances[r.id]
            },
            toBase64Image: function() {
                return this.canvas.toDataURL.apply(this.canvas, arguments)
            },
            initToolTip: function() {
                var e = this;
                e.tooltip = new t.Tooltip({
                    _chart: e,
                    _chartInstance: e,
                    _data: e.data,
                    _options: e.options.tooltips
                }, e)
            },
            bindEvents: function() {
                var t = this,
                    e = t._listeners = {},
                    n = function() {
                        t.eventHandler.apply(t, arguments)
                    };
                i.each(t.options.events, function(r) {
                    u.addEventListener(t, r, n), e[r] = n
                }), t.options.responsive && (n = function() {
                    t.resize()
                }, u.addEventListener(t, "resize", n), e.resize = n)
            },
            unbindEvents: function() {
                var t = this,
                    e = t._listeners;
                e && (delete t._listeners, i.each(e, function(e, n) {
                    u.removeEventListener(t, n, e)
                }))
            },
            updateHoverStyle: function(t, e, n) {
                var r, i, o, a = n ? "setHoverStyle" : "removeHoverStyle";
                for (i = 0, o = t.length; i < o; ++i)(r = t[i]) && this.getDatasetMeta(r._datasetIndex).controller[a](r)
            },
            eventHandler: function(t) {
                var e = this,
                    n = e.tooltip;
                if (!1 !== l.notify(e, "beforeEvent", [t])) {
                    e._bufferedRender = !0, e._bufferedRequest = null;
                    var r = e.handleEvent(t);
                    n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)), l.notify(e, "afterEvent", [t]);
                    var i = e._bufferedRequest;
                    return i ? e.render(i) : r && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                }
            },
            handleEvent: function(t) {
                var e = this,
                    n = e.options || {},
                    r = n.hover,
                    o = !1;
                return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, r.mode, r), i.callback(n.onHover || n.hover.onHover, [t.native, e.active], e), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, r.mode, !1), e.active.length && r.mode && e.updateHoverStyle(e.active, r.mode, !0), o = !i.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, o
            }
        }), t.Controller = t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function(t) {
        function e(t, e) {
            if (t._chartjs) return void t._chartjs.listeners.push(e);
            Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [e]
                }
            }), i.forEach(function(e) {
                var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                    i = t[e];
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: function() {
                        var e = Array.prototype.slice.call(arguments),
                            o = i.apply(this, e);
                        return r.each(t._chartjs.listeners, function(t) {
                            "function" === typeof t[n] && t[n].apply(t, e)
                        }), o
                    }
                })
            })
        }

        function n(t, e) {
            var n = t._chartjs;
            if (n) {
                var r = n.listeners,
                    o = r.indexOf(e); - 1 !== o && r.splice(o, 1), r.length > 0 || (i.forEach(function(e) {
                    delete t[e]
                }), delete t._chartjs)
            }
        }
        var i = ["push", "pop", "shift", "splice", "unshift"];
        t.DatasetController = function(t, e) {
            this.initialize(t, e)
        }, r.extend(t.DatasetController.prototype, {
            datasetElementType: null,
            dataElementType: null,
            initialize: function(t, e) {
                var n = this;
                n.chart = t, n.index = e, n.linkScales(), n.addElements()
            },
            updateIndex: function(t) {
                this.index = t
            },
            linkScales: function() {
                var t = this,
                    e = t.getMeta(),
                    n = t.getDataset();
                null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
            },
            getDataset: function() {
                return this.chart.data.datasets[this.index]
            },
            getMeta: function() {
                return this.chart.getDatasetMeta(this.index)
            },
            getScaleForId: function(t) {
                return this.chart.scales[t]
            },
            reset: function() {
                this.update(!0)
            },
            destroy: function() {
                this._data && n(this._data, this)
            },
            createMetaDataset: function() {
                var t = this,
                    e = t.datasetElementType;
                return e && new e({
                    _chart: t.chart,
                    _datasetIndex: t.index
                })
            },
            createMetaData: function(t) {
                var e = this,
                    n = e.dataElementType;
                return n && new n({
                    _chart: e.chart,
                    _datasetIndex: e.index,
                    _index: t
                })
            },
            addElements: function() {
                var t, e, n = this,
                    r = n.getMeta(),
                    i = n.getDataset().data || [],
                    o = r.data;
                for (t = 0, e = i.length; t < e; ++t) o[t] = o[t] || n.createMetaData(t);
                r.dataset = r.dataset || n.createMetaDataset()
            },
            addElementAndReset: function(t) {
                var e = this.createMetaData(t);
                this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
            },
            buildOrUpdateElements: function() {
                var t = this,
                    r = t.getDataset(),
                    i = r.data || (r.data = []);
                t._data !== i && (t._data && n(t._data, t), e(i, t), t._data = i), t.resyncElements()
            },
            update: r.noop,
            transition: function(t) {
                for (var e = this.getMeta(), n = e.data || [], r = n.length, i = 0; i < r; ++i) n[i].transition(t);
                e.dataset && e.dataset.transition(t)
            },
            draw: function() {
                var t = this.getMeta(),
                    e = t.data || [],
                    n = e.length,
                    r = 0;
                for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw()
            },
            removeHoverStyle: function(t, e) {
                var n = this.chart.data.datasets[t._datasetIndex],
                    i = t._index,
                    o = t.custom || {},
                    a = r.valueAtIndexOrDefault,
                    u = t._model;
                u.backgroundColor = o.backgroundColor ? o.backgroundColor : a(n.backgroundColor, i, e.backgroundColor), u.borderColor = o.borderColor ? o.borderColor : a(n.borderColor, i, e.borderColor), u.borderWidth = o.borderWidth ? o.borderWidth : a(n.borderWidth, i, e.borderWidth)
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    i = t.custom || {},
                    o = r.valueAtIndexOrDefault,
                    a = r.getHoverColor,
                    u = t._model;
                u.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o(e.hoverBackgroundColor, n, a(u.backgroundColor)), u.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o(e.hoverBorderColor, n, a(u.borderColor)), u.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o(e.hoverBorderWidth, n, u.borderWidth)
            },
            resyncElements: function() {
                var t = this,
                    e = t.getMeta(),
                    n = t.getDataset().data,
                    r = e.data.length,
                    i = n.length;
                i < r ? e.data.splice(i, r - i) : i > r && t.insertElements(r, i - r)
            },
            insertElements: function(t, e) {
                for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
            },
            onDataPush: function() {
                this.insertElements(this.getDataset().data.length - 1, arguments.length)
            },
            onDataPop: function() {
                this.getMeta().data.pop()
            },
            onDataShift: function() {
                this.getMeta().data.shift()
            },
            onDataSplice: function(t, e) {
                this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
            },
            onDataUnshift: function() {
                this.insertElements(0, arguments.length)
            }
        }), t.DatasetController.extend = r.inherits
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0),
        o = n(8);
    t.exports = function(t) {
        t.scaleService = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, n) {
                this.constructors[t] = e, this.defaults[t] = i.clone(n)
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? i.merge({}, [r.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function(t, e) {
                var n = this;
                n.defaults.hasOwnProperty(t) && (n.defaults[t] = i.extend(n.defaults[t], e))
            },
            addScalesToLayout: function(t) {
                i.each(t.scales, function(e) {
                    e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e)
                })
            }
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n, r = [];
        for (e = 0, n = t.length; e < n; ++e) r.push(t[e].label);
        return r
    }

    function i(t, e, n) {
        var r = t.getPixelForTick(e);
        return n && (r -= 0 === e ? (t.getPixelForTick(1) - r) / 2 : (r - t.getPixelForTick(e - 1)) / 2), r
    }
    var o = n(1),
        a = n(2),
        u = n(0),
        l = n(9);
    o._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            lineHeight: 1.2,
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: l.formatters.values,
            minor: {},
            major: {}
        }
    }), t.exports = function(t) {
        function e(t, e, n) {
            return u.isArray(e) ? u.longestText(t, n, e) : t.measureText(e).width
        }

        function n(t) {
            var e = u.valueOrDefault,
                n = o.global,
                r = e(t.fontSize, n.defaultFontSize),
                i = e(t.fontStyle, n.defaultFontStyle),
                a = e(t.fontFamily, n.defaultFontFamily);
            return {
                size: r,
                style: i,
                family: a,
                font: u.fontString(r, i, a)
            }
        }

        function l(t) {
            return u.options.toLineHeight(u.valueOrDefault(t.lineHeight, 1.2), u.valueOrDefault(t.fontSize, o.global.defaultFontSize))
        }
        t.Scale = a.extend({
            getPadding: function() {
                var t = this;
                return {
                    left: t.paddingLeft || 0,
                    top: t.paddingTop || 0,
                    right: t.paddingRight || 0,
                    bottom: t.paddingBottom || 0
                }
            },
            getTicks: function() {
                return this._ticks
            },
            mergeTicksOptions: function() {
                var t = this.options.ticks;
                !1 === t.minor && (t.minor = {
                    display: !1
                }), !1 === t.major && (t.major = {
                    display: !1
                });
                for (var e in t) "major" !== e && "minor" !== e && ("undefined" === typeof t.minor[e] && (t.minor[e] = t[e]), "undefined" === typeof t.major[e] && (t.major[e] = t[e]))
            },
            beforeUpdate: function() {
                u.callback(this.options.beforeUpdate, [this])
            },
            update: function(t, e, n) {
                var r, i, o, a, l, s, c = this;
                for (c.beforeUpdate(), c.maxWidth = t, c.maxHeight = e, c.margins = u.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, n), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), c.beforeBuildTicks(), l = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), o = c.convertTicksToLabels(l) || c.ticks, c.afterTickToLabelConversion(), c.ticks = o, r = 0, i = o.length; r < i; ++r) a = o[r], s = l[r], s ? s.label = a : l.push(s = {
                    label: a,
                    major: !1
                });
                return c._ticks = l, c.beforeCalculateTickRotation(), c.calculateTickRotation(), c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), c.minSize
            },
            afterUpdate: function() {
                u.callback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function() {
                u.callback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function() {
                var t = this;
                t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
            },
            afterSetDimensions: function() {
                u.callback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function() {
                u.callback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: u.noop,
            afterDataLimits: function() {
                u.callback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function() {
                u.callback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: u.noop,
            afterBuildTicks: function() {
                u.callback(this.options.afterBuildTicks, [this])
            },
            beforeTickToLabelConversion: function() {
                u.callback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function() {
                var t = this,
                    e = t.options.ticks;
                t.ticks = t.ticks.map(e.userCallback || e.callback, this)
            },
            afterTickToLabelConversion: function() {
                u.callback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function() {
                u.callback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function() {
                var t = this,
                    e = t.ctx,
                    i = t.options.ticks,
                    o = r(t._ticks),
                    a = n(i);
                e.font = a.font;
                var l = i.minRotation || 0;
                if (o.length && t.options.display && t.isHorizontal())
                    for (var s, c = u.longestText(e, a.font, o, t.longestTextCache), f = c, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; f > d && l < i.maxRotation;) {
                        var h = u.toRadians(l);
                        if (s = Math.cos(h), Math.sin(h) * c > t.maxHeight) {
                            l--;
                            break
                        }
                        l++, f = s * c
                    }
                t.labelRotation = l
            },
            afterCalculateTickRotation: function() {
                u.callback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function() {
                u.callback(this.options.beforeFit, [this])
            },
            fit: function() {
                var t = this,
                    i = t.minSize = {
                        width: 0,
                        height: 0
                    },
                    o = r(t._ticks),
                    a = t.options,
                    s = a.ticks,
                    c = a.scaleLabel,
                    f = a.gridLines,
                    d = a.display,
                    h = t.isHorizontal(),
                    p = n(s),
                    g = a.gridLines.tickMarkLength;
                if (i.width = h ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : d && f.drawTicks ? g : 0, i.height = h ? d && f.drawTicks ? g : 0 : t.maxHeight, c.display && d) {
                    var v = l(c),
                        m = u.options.toPadding(c.padding),
                        y = v + m.height;
                    h ? i.height += y : i.width += y
                }
                if (s.display && d) {
                    var b = u.longestText(t.ctx, p.font, o, t.longestTextCache),
                        _ = u.numberOfLabelLines(o),
                        x = .5 * p.size,
                        w = t.options.ticks.padding;
                    if (h) {
                        t.longestLabelWidth = b;
                        var k = u.toRadians(t.labelRotation),
                            S = Math.cos(k),
                            C = Math.sin(k),
                            M = C * b + p.size * _ + x * (_ - 1) + x;
                        i.height = Math.min(t.maxHeight, i.height + M + w), t.ctx.font = p.font;
                        var T = e(t.ctx, o[0], p.font),
                            D = e(t.ctx, o[o.length - 1], p.font);
                        0 !== t.labelRotation ? (t.paddingLeft = "bottom" === a.position ? S * T + 3 : S * x + 3, t.paddingRight = "bottom" === a.position ? S * x + 3 : S * D + 3) : (t.paddingLeft = T / 2 + 3, t.paddingRight = D / 2 + 3)
                    } else s.mirror ? b = 0 : b += w + x, i.width = Math.min(t.maxWidth, i.width + b), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2
                }
                t.handleMargins(), t.width = i.width, t.height = i.height
            },
            handleMargins: function() {
                var t = this;
                t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
            },
            afterFit: function() {
                u.callback(this.options.afterFit, [this])
            },
            isHorizontal: function() {
                return "top" === this.options.position || "bottom" === this.options.position
            },
            isFullWidth: function() {
                return this.options.fullWidth
            },
            getRightValue: function(t) {
                if (u.isNullOrUndef(t)) return NaN;
                if ("number" === typeof t && !isFinite(t)) return NaN;
                if (t)
                    if (this.isHorizontal()) {
                        if (void 0 !== t.x) return this.getRightValue(t.x)
                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                return t
            },
            getLabelForIndex: u.noop,
            getPixelForValue: u.noop,
            getValueForPixel: u.noop,
            getPixelForTick: function(t) {
                var e = this,
                    n = e.options.offset;
                if (e.isHorizontal()) {
                    var r = e.width - (e.paddingLeft + e.paddingRight),
                        i = r / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                        o = i * t + e.paddingLeft;
                    n && (o += i / 2);
                    var a = e.left + Math.round(o);
                    return a += e.isFullWidth() ? e.margins.left : 0
                }
                var u = e.height - (e.paddingTop + e.paddingBottom);
                return e.top + t * (u / (e._ticks.length - 1))
            },
            getPixelForDecimal: function(t) {
                var e = this;
                if (e.isHorizontal()) {
                    var n = e.width - (e.paddingLeft + e.paddingRight),
                        r = n * t + e.paddingLeft,
                        i = e.left + Math.round(r);
                    return i += e.isFullWidth() ? e.margins.left : 0
                }
                return e.top + t * e.height
            },
            getBasePixel: function() {
                return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function() {
                var t = this,
                    e = t.min,
                    n = t.max;
                return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
            },
            _autoSkip: function(t) {
                var e, n, r, i, o, a = this,
                    l = a.isHorizontal(),
                    s = a.options.ticks.minor,
                    c = t.length,
                    f = u.toRadians(a.labelRotation),
                    d = Math.cos(f),
                    h = a.longestLabelWidth * d,
                    p = [];
                for (s.maxTicksLimit && (o = s.maxTicksLimit), l && (e = !1, (h + s.autoSkipPadding) * c > a.width - (a.paddingLeft + a.paddingRight) && (e = 1 + Math.floor((h + s.autoSkipPadding) * c / (a.width - (a.paddingLeft + a.paddingRight)))), o && c > o && (e = Math.max(e, Math.floor(c / o)))), n = 0; n < c; n++) r = t[n], i = e > 1 && n % e > 0 || n % e === 0 && n + e >= c, i && n !== c - 1 && delete r.label, p.push(r);
                return p
            },
            draw: function(t) {
                var e = this,
                    r = e.options;
                if (r.display) {
                    var a = e.ctx,
                        s = o.global,
                        c = r.ticks.minor,
                        f = r.ticks.major || c,
                        d = r.gridLines,
                        h = r.scaleLabel,
                        p = 0 !== e.labelRotation,
                        g = e.isHorizontal(),
                        v = c.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                        m = u.valueOrDefault(c.fontColor, s.defaultFontColor),
                        y = n(c),
                        b = u.valueOrDefault(f.fontColor, s.defaultFontColor),
                        _ = n(f),
                        x = d.drawTicks ? d.tickMarkLength : 0,
                        w = u.valueOrDefault(h.fontColor, s.defaultFontColor),
                        k = n(h),
                        S = u.options.toPadding(h.padding),
                        C = u.toRadians(e.labelRotation),
                        M = [],
                        T = e.options.gridLines.lineWidth,
                        D = "right" === r.position ? e.right : e.right - T - x,
                        P = "right" === r.position ? e.right + x : e.right,
                        O = "bottom" === r.position ? e.top + T : e.bottom - x - T,
                        E = "bottom" === r.position ? e.top + T + x : e.bottom + T;
                    if (u.each(v, function(n, o) {
                            if (!u.isNullOrUndef(n.label)) {
                                var a, l, f, h, m = n.label;
                                o === e.zeroLineIndex && r.offset === d.offsetGridLines ? (a = d.zeroLineWidth, l = d.zeroLineColor, f = d.zeroLineBorderDash, h = d.zeroLineBorderDashOffset) : (a = u.valueAtIndexOrDefault(d.lineWidth, o), l = u.valueAtIndexOrDefault(d.color, o), f = u.valueOrDefault(d.borderDash, s.borderDash), h = u.valueOrDefault(d.borderDashOffset, s.borderDashOffset));
                                var y, b, _, w, k, S, A, I, R, F, N = "middle",
                                    L = "middle",
                                    z = c.padding;
                                if (g) {
                                    var j = x + z;
                                    "bottom" === r.position ? (L = p ? "middle" : "top", N = p ? "right" : "center", F = e.top + j) : (L = p ? "middle" : "bottom", N = p ? "left" : "center", F = e.bottom - j);
                                    var W = i(e, o, d.offsetGridLines && v.length > 1);
                                    W < e.left && (l = "rgba(0,0,0,0)"), W += u.aliasPixel(a), R = e.getPixelForTick(o) + c.labelOffset, y = _ = k = A = W, b = O, w = E, S = t.top, I = t.bottom + T
                                } else {
                                    var B, U = "left" === r.position;
                                    c.mirror ? (N = U ? "left" : "right", B = z) : (N = U ? "right" : "left", B = x + z), R = U ? e.right - B : e.left + B;
                                    var Y = i(e, o, d.offsetGridLines && v.length > 1);
                                    Y < e.top && (l = "rgba(0,0,0,0)"), Y += u.aliasPixel(a), F = e.getPixelForTick(o) + c.labelOffset, y = D, _ = P, k = t.left, A = t.right + T, b = w = S = I = Y
                                }
                                M.push({
                                    tx1: y,
                                    ty1: b,
                                    tx2: _,
                                    ty2: w,
                                    x1: k,
                                    y1: S,
                                    x2: A,
                                    y2: I,
                                    labelX: R,
                                    labelY: F,
                                    glWidth: a,
                                    glColor: l,
                                    glBorderDash: f,
                                    glBorderDashOffset: h,
                                    rotation: -1 * C,
                                    label: m,
                                    major: n.major,
                                    textBaseline: L,
                                    textAlign: N
                                })
                            }
                        }), u.each(M, function(t) {
                            if (d.display && (a.save(), a.lineWidth = t.glWidth, a.strokeStyle = t.glColor, a.setLineDash && (a.setLineDash(t.glBorderDash), a.lineDashOffset = t.glBorderDashOffset), a.beginPath(), d.drawTicks && (a.moveTo(t.tx1, t.ty1), a.lineTo(t.tx2, t.ty2)), d.drawOnChartArea && (a.moveTo(t.x1, t.y1), a.lineTo(t.x2, t.y2)), a.stroke(), a.restore()), c.display) {
                                a.save(), a.translate(t.labelX, t.labelY), a.rotate(t.rotation), a.font = t.major ? _.font : y.font, a.fillStyle = t.major ? b : m, a.textBaseline = t.textBaseline, a.textAlign = t.textAlign;
                                var n = t.label;
                                if (u.isArray(n))
                                    for (var r = n.length, i = 1.5 * y.size, o = e.isHorizontal() ? 0 : -i * (r - 1) / 2, l = 0; l < r; ++l) a.fillText("" + n[l], 0, o), o += i;
                                else a.fillText(n, 0, 0);
                                a.restore()
                            }
                        }), h.display) {
                        var A, I, R = 0,
                            F = l(h) / 2;
                        if (g) A = e.left + (e.right - e.left) / 2, I = "bottom" === r.position ? e.bottom - F - S.bottom : e.top + F + S.top;
                        else {
                            var N = "left" === r.position;
                            A = N ? e.left + F + S.top : e.right - F - S.top, I = e.top + (e.bottom - e.top) / 2, R = N ? -.5 * Math.PI : .5 * Math.PI
                        }
                        a.save(), a.translate(A, I), a.rotate(R), a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = w, a.font = k.font, a.fillText(h.labelString, 0, 0), a.restore()
                    }
                    if (d.drawBorder) {
                        a.lineWidth = u.valueAtIndexOrDefault(d.lineWidth, 0), a.strokeStyle = u.valueAtIndexOrDefault(d.color, 0);
                        var L = e.left,
                            z = e.right + T,
                            j = e.top,
                            W = e.bottom + T,
                            B = u.aliasPixel(a.lineWidth);
                        g ? (j = W = "top" === r.position ? e.bottom : e.top, j += B, W += B) : (L = z = "left" === r.position ? e.right : e.left, L += B, z += B), a.beginPath(), a.moveTo(L, j), a.lineTo(z, W), a.stroke()
                    }
                }
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(2),
        o = n(0);
    r._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: o.noop,
                title: function(t, e) {
                    var n = "",
                        r = e.labels,
                        i = r ? r.length : 0;
                    if (t.length > 0) {
                        var o = t[0];
                        o.xLabel ? n = o.xLabel : i > 0 && o.index < i && (n = r[o.index])
                    }
                    return n
                },
                afterTitle: o.noop,
                beforeBody: o.noop,
                beforeLabel: o.noop,
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "";
                    return n && (n += ": "), n += t.yLabel
                },
                labelColor: function(t, e) {
                    var n = e.getDatasetMeta(t.datasetIndex),
                        r = n.data[t.index],
                        i = r._view;
                    return {
                        borderColor: i.borderColor,
                        backgroundColor: i.backgroundColor
                    }
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor
                },
                afterLabel: o.noop,
                afterBody: o.noop,
                beforeFooter: o.noop,
                footer: o.noop,
                afterFooter: o.noop
            }
        }
    }), t.exports = function(t) {
        function e(t, e) {
            var n = o.color(t);
            return n.alpha(e * n.alpha()).rgbaString()
        }

        function n(t, e) {
            return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        }

        function a(t) {
            var e = t._xScale,
                n = t._yScale || t._scale,
                r = t._index,
                i = t._datasetIndex;
            return {
                xLabel: e ? e.getLabelForIndex(r, i) : "",
                yLabel: n ? n.getLabelForIndex(r, i) : "",
                index: r,
                datasetIndex: i,
                x: t._model.x,
                y: t._model.y
            }
        }

        function u(t) {
            var e = r.global,
                n = o.valueOrDefault;
            return {
                xPadding: t.xPadding,
                yPadding: t.yPadding,
                xAlign: t.xAlign,
                yAlign: t.yAlign,
                bodyFontColor: t.bodyFontColor,
                _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                _bodyAlign: t.bodyAlign,
                bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                bodySpacing: t.bodySpacing,
                titleFontColor: t.titleFontColor,
                _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                _titleAlign: t.titleAlign,
                titleSpacing: t.titleSpacing,
                titleMarginBottom: t.titleMarginBottom,
                footerFontColor: t.footerFontColor,
                _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                footerFontSize: n(t.footerFontSize, e.defaultFontSize),
                _footerAlign: t.footerAlign,
                footerSpacing: t.footerSpacing,
                footerMarginTop: t.footerMarginTop,
                caretSize: t.caretSize,
                cornerRadius: t.cornerRadius,
                backgroundColor: t.backgroundColor,
                opacity: 0,
                legendColorBackground: t.multiKeyBackground,
                displayColors: t.displayColors,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth
            }
        }

        function l(t, e) {
            var n = t._chart.ctx,
                r = 2 * e.yPadding,
                i = 0,
                a = e.body,
                u = a.reduce(function(t, e) {
                    return t + e.before.length + e.lines.length + e.after.length
                }, 0);
            u += e.beforeBody.length + e.afterBody.length;
            var l = e.title.length,
                s = e.footer.length,
                c = e.titleFontSize,
                f = e.bodyFontSize,
                d = e.footerFontSize;
            r += l * c, r += l ? (l - 1) * e.titleSpacing : 0, r += l ? e.titleMarginBottom : 0, r += u * f, r += u ? (u - 1) * e.bodySpacing : 0, r += s ? e.footerMarginTop : 0, r += s * d, r += s ? (s - 1) * e.footerSpacing : 0;
            var h = 0,
                p = function(t) {
                    i = Math.max(i, n.measureText(t).width + h)
                };
            return n.font = o.fontString(c, e._titleFontStyle, e._titleFontFamily), o.each(e.title, p), n.font = o.fontString(f, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), p), h = e.displayColors ? f + 2 : 0, o.each(a, function(t) {
                o.each(t.before, p), o.each(t.lines, p), o.each(t.after, p)
            }), h = 0, n.font = o.fontString(d, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, p), i += 2 * e.xPadding, {
                width: i,
                height: r
            }
        }

        function s(t, e) {
            var n = t._model,
                r = t._chart,
                i = t._chart.chartArea,
                o = "center",
                a = "center";
            n.y < e.height ? a = "top" : n.y > r.height - e.height && (a = "bottom");
            var u, l, s, c, f, d = (i.left + i.right) / 2,
                h = (i.top + i.bottom) / 2;
            "center" === a ? (u = function(t) {
                return t <= d
            }, l = function(t) {
                return t > d
            }) : (u = function(t) {
                return t <= e.width / 2
            }, l = function(t) {
                return t >= r.width - e.width / 2
            }), s = function(t) {
                return t + e.width + n.caretSize + n.caretPadding > r.width
            }, c = function(t) {
                return t - e.width - n.caretSize - n.caretPadding < 0
            }, f = function(t) {
                return t <= h ? "top" : "bottom"
            }, u(n.x) ? (o = "left", s(n.x) && (o = "center", a = f(n.y))) : l(n.x) && (o = "right", c(n.x) && (o = "center", a = f(n.y)));
            var p = t._options;
            return {
                xAlign: p.xAlign ? p.xAlign : o,
                yAlign: p.yAlign ? p.yAlign : a
            }
        }

        function c(t, e, n, r) {
            var i = t.x,
                o = t.y,
                a = t.caretSize,
                u = t.caretPadding,
                l = t.cornerRadius,
                s = n.xAlign,
                c = n.yAlign,
                f = a + u,
                d = l + u;
            return "right" === s ? i -= e.width : "center" === s && (i -= e.width / 2, i + e.width > r.width && (i = r.width - e.width), i < 0 && (i = 0)), "top" === c ? o += f : o -= "bottom" === c ? e.height + f : e.height / 2, "center" === c ? "left" === s ? i += f : "right" === s && (i -= f) : "left" === s ? i -= d : "right" === s && (i += d), {
                x: i,
                y: o
            }
        }
        t.Tooltip = i.extend({
            initialize: function() {
                this._model = u(this._options), this._lastActive = []
            },
            getTitle: function() {
                var t = this,
                    e = t._options,
                    r = e.callbacks,
                    i = r.beforeTitle.apply(t, arguments),
                    o = r.title.apply(t, arguments),
                    a = r.afterTitle.apply(t, arguments),
                    u = [];
                return u = n(u, i), u = n(u, o), u = n(u, a)
            },
            getBeforeBody: function() {
                var t = this._options.callbacks.beforeBody.apply(this, arguments);
                return o.isArray(t) ? t : void 0 !== t ? [t] : []
            },
            getBody: function(t, e) {
                var r = this,
                    i = r._options.callbacks,
                    a = [];
                return o.each(t, function(t) {
                    var o = {
                        before: [],
                        lines: [],
                        after: []
                    };
                    n(o.before, i.beforeLabel.call(r, t, e)), n(o.lines, i.label.call(r, t, e)), n(o.after, i.afterLabel.call(r, t, e)), a.push(o)
                }), a
            },
            getAfterBody: function() {
                var t = this._options.callbacks.afterBody.apply(this, arguments);
                return o.isArray(t) ? t : void 0 !== t ? [t] : []
            },
            getFooter: function() {
                var t = this,
                    e = t._options.callbacks,
                    r = e.beforeFooter.apply(t, arguments),
                    i = e.footer.apply(t, arguments),
                    o = e.afterFooter.apply(t, arguments),
                    a = [];
                return a = n(a, r), a = n(a, i), a = n(a, o)
            },
            update: function(e) {
                var n, r, i = this,
                    f = i._options,
                    d = i._model,
                    h = i._model = u(f),
                    p = i._active,
                    g = i._data,
                    v = {
                        xAlign: d.xAlign,
                        yAlign: d.yAlign
                    },
                    m = {
                        x: d.x,
                        y: d.y
                    },
                    y = {
                        width: d.width,
                        height: d.height
                    },
                    b = {
                        x: d.caretX,
                        y: d.caretY
                    };
                if (p.length) {
                    h.opacity = 1;
                    var _ = [],
                        x = [];
                    b = t.Tooltip.positioners[f.position].call(i, p, i._eventPosition);
                    var w = [];
                    for (n = 0, r = p.length; n < r; ++n) w.push(a(p[n]));
                    f.filter && (w = w.filter(function(t) {
                        return f.filter(t, g)
                    })), f.itemSort && (w = w.sort(function(t, e) {
                        return f.itemSort(t, e, g)
                    })), o.each(w, function(t) {
                        _.push(f.callbacks.labelColor.call(i, t, i._chart)), x.push(f.callbacks.labelTextColor.call(i, t, i._chart))
                    }), h.title = i.getTitle(w, g), h.beforeBody = i.getBeforeBody(w, g), h.body = i.getBody(w, g), h.afterBody = i.getAfterBody(w, g), h.footer = i.getFooter(w, g), h.x = Math.round(b.x), h.y = Math.round(b.y), h.caretPadding = f.caretPadding, h.labelColors = _, h.labelTextColors = x, h.dataPoints = w, y = l(this, h), v = s(this, y), m = c(h, y, v, i._chart)
                } else h.opacity = 0;
                return h.xAlign = v.xAlign, h.yAlign = v.yAlign, h.x = m.x, h.y = m.y, h.width = y.width, h.height = y.height, h.caretX = b.x, h.caretY = b.y, i._model = h, e && f.custom && f.custom.call(i, h), i
            },
            drawCaret: function(t, e) {
                var n = this._chart.ctx,
                    r = this._view,
                    i = this.getCaretPosition(t, e, r);
                n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3)
            },
            getCaretPosition: function(t, e, n) {
                var r, i, o, a, u, l, s = n.caretSize,
                    c = n.cornerRadius,
                    f = n.xAlign,
                    d = n.yAlign,
                    h = t.x,
                    p = t.y,
                    g = e.width,
                    v = e.height;
                if ("center" === d) u = p + v / 2, "left" === f ? (r = h, i = r - s, o = r, a = u + s, l = u - s) : (r = h + g, i = r + s, o = r, a = u - s, l = u + s);
                else if ("left" === f ? (i = h + c + s, r = i - s, o = i + s) : "right" === f ? (i = h + g - c - s, r = i - s, o = i + s) : (i = n.caretX, r = i - s, o = i + s), "top" === d) a = p, u = a - s, l = a;
                else {
                    a = p + v, u = a + s, l = a;
                    var m = o;
                    o = r, r = m
                }
                return {
                    x1: r,
                    x2: i,
                    x3: o,
                    y1: a,
                    y2: u,
                    y3: l
                }
            },
            drawTitle: function(t, n, r, i) {
                var a = n.title;
                if (a.length) {
                    r.textAlign = n._titleAlign, r.textBaseline = "top";
                    var u = n.titleFontSize,
                        l = n.titleSpacing;
                    r.fillStyle = e(n.titleFontColor, i), r.font = o.fontString(u, n._titleFontStyle, n._titleFontFamily);
                    var s, c;
                    for (s = 0, c = a.length; s < c; ++s) r.fillText(a[s], t.x, t.y), t.y += u + l, s + 1 === a.length && (t.y += n.titleMarginBottom - l)
                }
            },
            drawBody: function(t, n, r, i) {
                var a = n.bodyFontSize,
                    u = n.bodySpacing,
                    l = n.body;
                r.textAlign = n._bodyAlign, r.textBaseline = "top", r.font = o.fontString(a, n._bodyFontStyle, n._bodyFontFamily);
                var s = 0,
                    c = function(e) {
                        r.fillText(e, t.x + s, t.y), t.y += a + u
                    };
                r.fillStyle = e(n.bodyFontColor, i), o.each(n.beforeBody, c);
                var f = n.displayColors;
                s = f ? a + 2 : 0, o.each(l, function(u, l) {
                    var s = e(n.labelTextColors[l], i);
                    r.fillStyle = s, o.each(u.before, c), o.each(u.lines, function(o) {
                        f && (r.fillStyle = e(n.legendColorBackground, i), r.fillRect(t.x, t.y, a, a), r.lineWidth = 1, r.strokeStyle = e(n.labelColors[l].borderColor, i), r.strokeRect(t.x, t.y, a, a), r.fillStyle = e(n.labelColors[l].backgroundColor, i), r.fillRect(t.x + 1, t.y + 1, a - 2, a - 2), r.fillStyle = s), c(o)
                    }), o.each(u.after, c)
                }), s = 0, o.each(n.afterBody, c), t.y -= u
            },
            drawFooter: function(t, n, r, i) {
                var a = n.footer;
                a.length && (t.y += n.footerMarginTop, r.textAlign = n._footerAlign, r.textBaseline = "top", r.fillStyle = e(n.footerFontColor, i), r.font = o.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), o.each(a, function(e) {
                    r.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing
                }))
            },
            drawBackground: function(t, n, r, i, o) {
                r.fillStyle = e(n.backgroundColor, o), r.strokeStyle = e(n.borderColor, o), r.lineWidth = n.borderWidth;
                var a = n.xAlign,
                    u = n.yAlign,
                    l = t.x,
                    s = t.y,
                    c = i.width,
                    f = i.height,
                    d = n.cornerRadius;
                r.beginPath(), r.moveTo(l + d, s), "top" === u && this.drawCaret(t, i), r.lineTo(l + c - d, s), r.quadraticCurveTo(l + c, s, l + c, s + d), "center" === u && "right" === a && this.drawCaret(t, i), r.lineTo(l + c, s + f - d), r.quadraticCurveTo(l + c, s + f, l + c - d, s + f), "bottom" === u && this.drawCaret(t, i), r.lineTo(l + d, s + f), r.quadraticCurveTo(l, s + f, l, s + f - d), "center" === u && "left" === a && this.drawCaret(t, i), r.lineTo(l, s + d), r.quadraticCurveTo(l, s, l + d, s), r.closePath(), r.fill(), n.borderWidth > 0 && r.stroke()
            },
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view;
                if (0 !== e.opacity) {
                    var n = {
                            width: e.width,
                            height: e.height
                        },
                        r = {
                            x: e.x,
                            y: e.y
                        },
                        i = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                        o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled && o && (this.drawBackground(r, e, t, n, i), r.x += e.xPadding, r.y += e.yPadding, this.drawTitle(r, e, t, i), this.drawBody(r, e, t, i), this.drawFooter(r, e, t, i))
                }
            },
            handleEvent: function(t) {
                var e = this,
                    n = e._options,
                    r = !1;
                return e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), r = !o.arrayEquals(e._active, e._lastActive), r && (e._lastActive = e._active, (n.enabled || n.custom) && (e._eventPosition = {
                    x: t.x,
                    y: t.y
                }, e.update(!0), e.pivot())), r
            }
        }), t.Tooltip.positioners = {
            average: function(t) {
                if (!t.length) return !1;
                var e, n, r = 0,
                    i = 0,
                    o = 0;
                for (e = 0, n = t.length; e < n; ++e) {
                    var a = t[e];
                    if (a && a.hasValue()) {
                        var u = a.tooltipPosition();
                        r += u.x, i += u.y, ++o
                    }
                }
                return {
                    x: Math.round(r / o),
                    y: Math.round(i / o)
                }
            },
            nearest: function(t, e) {
                var n, r, i, a = e.x,
                    u = e.y,
                    l = Number.POSITIVE_INFINITY;
                for (n = 0, r = t.length; n < r; ++n) {
                    var s = t[n];
                    if (s && s.hasValue()) {
                        var c = s.getCenterPoint(),
                            f = o.distanceBetweenPoints(e, c);
                        f < l && (l = f, i = s)
                    }
                }
                if (i) {
                    var d = i.tooltipPosition();
                    a = d.x, u = d.y
                }
                return {
                    x: a,
                    y: u
                }
            }
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n, r = [];
        if (t.stepSize && t.stepSize > 0) n = t.stepSize;
        else {
            var o = i.niceNum(e.max - e.min, !1);
            n = i.niceNum(o / (t.maxTicks - 1), !0)
        }
        var a = Math.floor(e.min / n) * n,
            u = Math.ceil(e.max / n) * n;
        t.min && t.max && t.stepSize && i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (a = t.min, u = t.max);
        var l = (u - a) / n;
        l = i.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l);
        var s = 1;
        n < 1 && (s = Math.pow(10, n.toString().length - 2), a = Math.round(a * s) / s, u = Math.round(u * s) / s), r.push(void 0 !== t.min ? t.min : a);
        for (var c = 1; c < l; ++c) r.push(Math.round((a + c * n) * s) / s);
        return r.push(void 0 !== t.max ? t.max : u), r
    }
    var i = n(0);
    t.exports = function(t) {
        var e = i.noop;
        t.LinearScaleBase = t.Scale.extend({
            getRightValue: function(e) {
                return "string" === typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e)
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options,
                    n = e.ticks;
                if (n.beginAtZero) {
                    var r = i.sign(t.min),
                        o = i.sign(t.max);
                    r < 0 && o < 0 ? t.max = 0 : r > 0 && o > 0 && (t.min = 0)
                }
                var a = void 0 !== n.min || void 0 !== n.suggestedMin,
                    u = void 0 !== n.max || void 0 !== n.suggestedMax;
                void 0 !== n.min ? t.min = n.min : void 0 !== n.suggestedMin && (null === t.min ? t.min = n.suggestedMin : t.min = Math.min(t.min, n.suggestedMin)), void 0 !== n.max ? t.max = n.max : void 0 !== n.suggestedMax && (null === t.max ? t.max = n.suggestedMax : t.max = Math.max(t.max, n.suggestedMax)), a !== u && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, n.beginAtZero || t.min--)
            },
            getTickLimit: e,
            handleDirectionalChanges: e,
            buildTicks: function() {
                var t = this,
                    e = t.options,
                    n = e.ticks,
                    o = t.getTickLimit();
                o = Math.max(2, o);
                var a = {
                        maxTicks: o,
                        min: n.min,
                        max: n.max,
                        stepSize: i.valueOrDefault(n.fixedStepSize, n.stepSize)
                    },
                    u = t.ticks = r(a, t);
                t.handleDirectionalChanges(), t.max = i.max(u), t.min = i.min(u), n.reverse ? (u.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
                var e = this;
                e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = {
                position: "bottom"
            },
            n = t.Scale.extend({
                getLabels: function() {
                    var t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                },
                determineDataLimits: function() {
                    var t = this,
                        e = t.getLabels();
                    t.minIndex = 0, t.maxIndex = e.length - 1;
                    var n;
                    void 0 !== t.options.ticks.min && (n = e.indexOf(t.options.ticks.min), t.minIndex = -1 !== n ? n : t.minIndex), void 0 !== t.options.ticks.max && (n = e.indexOf(t.options.ticks.max), t.maxIndex = -1 !== n ? n : t.maxIndex), t.min = e[t.minIndex], t.max = e[t.maxIndex]
                },
                buildTicks: function() {
                    var t = this,
                        e = t.getLabels();
                    t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                },
                getLabelForIndex: function(t, e) {
                    var n = this,
                        r = n.chart.data,
                        i = n.isHorizontal();
                    return r.yLabels && !i ? n.getRightValue(r.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                },
                getPixelForValue: function(t, e) {
                    var n, r = this,
                        i = r.options.offset,
                        o = Math.max(r.maxIndex + 1 - r.minIndex - (i ? 0 : 1), 1);
                    if (void 0 !== t && null !== t && (n = r.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
                        var a = r.getLabels();
                        t = n || t;
                        var u = a.indexOf(t);
                        e = -1 !== u ? u : e
                    }
                    if (r.isHorizontal()) {
                        var l = r.width / o,
                            s = l * (e - r.minIndex);
                        return i && (s += l / 2), r.left + Math.round(s)
                    }
                    var c = r.height / o,
                        f = c * (e - r.minIndex);
                    return i && (f += c / 2), r.top + Math.round(f)
                },
                getPixelForTick: function(t) {
                    return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                },
                getValueForPixel: function(t) {
                    var e = this,
                        n = e.options.offset,
                        r = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                        i = e.isHorizontal(),
                        o = (i ? e.width : e.height) / r;
                    return t -= i ? e.left : e.top, n && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
                },
                getBasePixel: function() {
                    return this.bottom
                }
            });
        t.scaleService.registerScaleType("category", n, e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0),
        o = n(9);
    t.exports = function(t) {
        var e = {
                position: "left",
                ticks: {
                    callback: o.formatters.linear
                }
            },
            n = t.LinearScaleBase.extend({
                determineDataLimits: function() {
                    function t(t) {
                        return u ? t.xAxisID === e.id : t.yAxisID === e.id
                    }
                    var e = this,
                        n = e.options,
                        r = e.chart,
                        o = r.data,
                        a = o.datasets,
                        u = e.isHorizontal();
                    e.min = null, e.max = null;
                    var l = n.stacked;
                    if (void 0 === l && i.each(a, function(e, n) {
                            if (!l) {
                                var i = r.getDatasetMeta(n);
                                r.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (l = !0)
                            }
                        }), n.stacked || l) {
                        var s = {};
                        i.each(a, function(o, a) {
                            var u = r.getDatasetMeta(a),
                                l = [u.type, void 0 === n.stacked && void 0 === u.stack ? a : "", u.stack].join(".");
                            void 0 === s[l] && (s[l] = {
                                positiveValues: [],
                                negativeValues: []
                            });
                            var c = s[l].positiveValues,
                                f = s[l].negativeValues;
                            r.isDatasetVisible(a) && t(u) && i.each(o.data, function(t, r) {
                                var i = +e.getRightValue(t);
                                isNaN(i) || u.data[r].hidden || (c[r] = c[r] || 0, f[r] = f[r] || 0, n.relativePoints ? c[r] = 100 : i < 0 ? f[r] += i : c[r] += i)
                            })
                        }), i.each(s, function(t) {
                            var n = t.positiveValues.concat(t.negativeValues),
                                r = i.min(n),
                                o = i.max(n);
                            e.min = null === e.min ? r : Math.min(e.min, r), e.max = null === e.max ? o : Math.max(e.max, o)
                        })
                    } else i.each(a, function(n, o) {
                        var a = r.getDatasetMeta(o);
                        r.isDatasetVisible(o) && t(a) && i.each(n.data, function(t, n) {
                            var r = +e.getRightValue(t);
                            isNaN(r) || a.data[n].hidden || (null === e.min ? e.min = r : r < e.min && (e.min = r), null === e.max ? e.max = r : r > e.max && (e.max = r))
                        })
                    });
                    e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
                },
                getTickLimit: function() {
                    var t, e = this,
                        n = e.options.ticks;
                    if (e.isHorizontal()) t = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(e.width / 50));
                    else {
                        var o = i.valueOrDefault(n.fontSize, r.global.defaultFontSize);
                        t = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(e.height / (2 * o)))
                    }
                    return t
                },
                handleDirectionalChanges: function() {
                    this.isHorizontal() || this.ticks.reverse()
                },
                getLabelForIndex: function(t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                getPixelForValue: function(t) {
                    var e = this,
                        n = e.start,
                        r = +e.getRightValue(t),
                        i = e.end - n;
                    return e.isHorizontal() ? e.left + e.width / i * (r - n) : e.bottom - e.height / i * (r - n)
                },
                getValueForPixel: function(t) {
                    var e = this,
                        n = e.isHorizontal(),
                        r = n ? e.width : e.height,
                        i = (n ? t - e.left : e.bottom - t) / r;
                    return e.start + (e.end - e.start) * i
                },
                getPixelForTick: function(t) {
                    return this.getPixelForValue(this.ticksAsNumbers[t])
                }
            });
        t.scaleService.registerScaleType("linear", n, e)
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n, r, o = [],
            a = i.valueOrDefault,
            u = a(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
            l = Math.floor(i.log10(e.max)),
            s = Math.ceil(e.max / Math.pow(10, l));
        0 === u ? (n = Math.floor(i.log10(e.minNotZero)), r = Math.floor(e.minNotZero / Math.pow(10, n)), o.push(u), u = r * Math.pow(10, n)) : (n = Math.floor(i.log10(u)), r = Math.floor(u / Math.pow(10, n)));
        var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
        do {
            o.push(u), ++r, 10 === r && (r = 1, ++n, c = n >= 0 ? 1 : c), u = Math.round(r * Math.pow(10, n) * c) / c
        } while (n < l || n === l && r < s);
        var f = a(t.max, u);
        return o.push(f), o
    }
    var i = n(0),
        o = n(9);
    t.exports = function(t) {
        var e = {
                position: "left",
                ticks: {
                    callback: o.formatters.logarithmic
                }
            },
            n = t.Scale.extend({
                determineDataLimits: function() {
                    function t(t) {
                        return u ? t.xAxisID === e.id : t.yAxisID === e.id
                    }
                    var e = this,
                        n = e.options,
                        r = e.chart,
                        o = r.data,
                        a = o.datasets,
                        u = e.isHorizontal();
                    e.min = null, e.max = null, e.minNotZero = null;
                    var l = n.stacked;
                    if (void 0 === l && i.each(a, function(e, n) {
                            if (!l) {
                                var i = r.getDatasetMeta(n);
                                r.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (l = !0)
                            }
                        }), n.stacked || l) {
                        var s = {};
                        i.each(a, function(o, a) {
                            var u = r.getDatasetMeta(a),
                                l = [u.type, void 0 === n.stacked && void 0 === u.stack ? a : "", u.stack].join(".");
                            r.isDatasetVisible(a) && t(u) && (void 0 === s[l] && (s[l] = []), i.each(o.data, function(t, n) {
                                var r = s[l],
                                    i = +e.getRightValue(t);
                                isNaN(i) || u.data[n].hidden || i < 0 || (r[n] = r[n] || 0, r[n] += i)
                            }))
                        }), i.each(s, function(t) {
                            if (t.length > 0) {
                                var n = i.min(t),
                                    r = i.max(t);
                                e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? r : Math.max(e.max, r)
                            }
                        })
                    } else i.each(a, function(n, o) {
                        var a = r.getDatasetMeta(o);
                        r.isDatasetVisible(o) && t(a) && i.each(n.data, function(t, n) {
                            var r = +e.getRightValue(t);
                            isNaN(r) || a.data[n].hidden || r < 0 || (null === e.min ? e.min = r : r < e.min && (e.min = r), null === e.max ? e.max = r : r > e.max && (e.max = r), 0 !== r && (null === e.minNotZero || r < e.minNotZero) && (e.minNotZero = r))
                        })
                    });
                    this.handleTickRangeOptions()
                },
                handleTickRangeOptions: function() {
                    var t = this,
                        e = t.options,
                        n = e.ticks,
                        r = i.valueOrDefault;
                    t.min = r(n.min, t.min), t.max = r(n.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(i.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(i.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(i.log10(t.max))) : t.minNotZero = 1)
                },
                buildTicks: function() {
                    var t = this,
                        e = t.options,
                        n = e.ticks,
                        o = !t.isHorizontal(),
                        a = {
                            min: n.min,
                            max: n.max
                        },
                        u = t.ticks = r(a, t);
                    t.max = i.max(u), t.min = i.min(u), n.reverse ? (o = !o, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), o && u.reverse()
                },
                convertTicksToLabels: function() {
                    this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                },
                getLabelForIndex: function(t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                getPixelForTick: function(t) {
                    return this.getPixelForValue(this.tickValues[t])
                },
                _getFirstTickValue: function(t) {
                    var e = Math.floor(i.log10(t));
                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                },
                getPixelForValue: function(e) {
                    var n, r, o, a, u, l = this,
                        s = l.options.ticks.reverse,
                        c = i.log10,
                        f = l._getFirstTickValue(l.minNotZero),
                        d = 0;
                    return e = +l.getRightValue(e), s ? (o = l.end, a = l.start, u = -1) : (o = l.start, a = l.end, u = 1), l.isHorizontal() ? (n = l.width, r = s ? l.right : l.left) : (n = l.height, u *= -1, r = s ? l.top : l.bottom), e !== o && (0 === o && (d = i.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), n -= d, o = f), 0 !== e && (d += n / (c(a) - c(o)) * (c(e) - c(o))), r += u * d), r
                },
                getValueForPixel: function(e) {
                    var n, r, o, a, u = this,
                        l = u.options.ticks.reverse,
                        s = i.log10,
                        c = u._getFirstTickValue(u.minNotZero);
                    if (l ? (r = u.end, o = u.start) : (r = u.start, o = u.end), u.isHorizontal() ? (n = u.width, a = l ? u.right - e : e - u.left) : (n = u.height, a = l ? e - u.top : u.bottom - e), a !== r) {
                        if (0 === r) {
                            var f = i.getValueOrDefault(u.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                            a -= f, n -= f, r = c
                        }
                        a *= s(o) - s(r), a /= n, a = Math.pow(10, s(r) + a)
                    }
                    return a
                }
            });
        t.scaleService.registerScaleType("logarithmic", n, e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0),
        o = n(9);
    t.exports = function(t) {
        function e(t) {
            var e = t.options;
            return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
        }

        function n(t) {
            var e = t.options.pointLabels,
                n = i.valueOrDefault(e.fontSize, v.defaultFontSize),
                r = i.valueOrDefault(e.fontStyle, v.defaultFontStyle),
                o = i.valueOrDefault(e.fontFamily, v.defaultFontFamily);
            return {
                size: n,
                style: r,
                family: o,
                font: i.fontString(n, r, o)
            }
        }

        function a(t, e, n) {
            return i.isArray(n) ? {
                w: i.longestText(t, t.font, n),
                h: n.length * e + 1.5 * (n.length - 1) * e
            } : {
                w: t.measureText(n).width,
                h: e
            }
        }

        function u(t, e, n, r, i) {
            return t === r || t === i ? {
                start: e - n / 2,
                end: e + n / 2
            } : t < r || t > i ? {
                start: e - n - 5,
                end: e
            } : {
                start: e,
                end: e + n + 5
            }
        }

        function l(t) {
            var r, o, l, s = n(t),
                c = Math.min(t.height / 2, t.width / 2),
                f = {
                    r: t.width,
                    l: 0,
                    t: t.height,
                    b: 0
                },
                d = {};
            t.ctx.font = s.font, t._pointLabelSizes = [];
            var h = e(t);
            for (r = 0; r < h; r++) {
                l = t.getPointPosition(r, c), o = a(t.ctx, s.size, t.pointLabels[r] || ""), t._pointLabelSizes[r] = o;
                var p = t.getIndexAngle(r),
                    g = i.toDegrees(p) % 360,
                    v = u(g, l.x, o.w, 0, 180),
                    m = u(g, l.y, o.h, 90, 270);
                v.start < f.l && (f.l = v.start, d.l = p), v.end > f.r && (f.r = v.end, d.r = p), m.start < f.t && (f.t = m.start, d.t = p), m.end > f.b && (f.b = m.end, d.b = p)
            }
            t.setReductions(c, f, d)
        }

        function s(t) {
            var e = Math.min(t.height / 2, t.width / 2);
            t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0)
        }

        function c(t) {
            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
        }

        function f(t, e, n, r) {
            if (i.isArray(e))
                for (var o = n.y, a = 1.5 * r, u = 0; u < e.length; ++u) t.fillText(e[u], n.x, o), o += a;
            else t.fillText(e, n.x, n.y)
        }

        function d(t, e, n) {
            90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
        }

        function h(t) {
            var r = t.ctx,
                o = t.options,
                a = o.angleLines,
                u = o.pointLabels;
            r.lineWidth = a.lineWidth, r.strokeStyle = a.color;
            var l = t.getDistanceFromCenterForValue(o.ticks.reverse ? t.min : t.max),
                s = n(t);
            r.textBaseline = "top";
            for (var h = e(t) - 1; h >= 0; h--) {
                if (a.display) {
                    var p = t.getPointPosition(h, l);
                    r.beginPath(), r.moveTo(t.xCenter, t.yCenter), r.lineTo(p.x, p.y), r.stroke(), r.closePath()
                }
                if (u.display) {
                    var g = t.getPointPosition(h, l + 5),
                        m = i.valueAtIndexOrDefault(u.fontColor, h, v.defaultFontColor);
                    r.font = s.font, r.fillStyle = m;
                    var y = t.getIndexAngle(h),
                        b = i.toDegrees(y);
                    r.textAlign = c(b), d(b, t._pointLabelSizes[h], g), f(r, t.pointLabels[h] || "", g, s.size)
                }
            }
        }

        function p(t, n, r, o) {
            var a = t.ctx;
            if (a.strokeStyle = i.valueAtIndexOrDefault(n.color, o - 1), a.lineWidth = i.valueAtIndexOrDefault(n.lineWidth, o - 1), t.options.gridLines.circular) a.beginPath(), a.arc(t.xCenter, t.yCenter, r, 0, 2 * Math.PI), a.closePath(), a.stroke();
            else {
                var u = e(t);
                if (0 === u) return;
                a.beginPath();
                var l = t.getPointPosition(0, r);
                a.moveTo(l.x, l.y);
                for (var s = 1; s < u; s++) l = t.getPointPosition(s, r), a.lineTo(l.x, l.y);
                a.closePath(), a.stroke()
            }
        }

        function g(t) {
            return i.isNumber(t) ? t : 0
        }
        var v = r.global,
            m = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1
                },
                gridLines: {
                    circular: !1
                },
                ticks: {
                    showLabelBackdrop: !0,
                    backdropColor: "rgba(255,255,255,0.75)",
                    backdropPaddingY: 2,
                    backdropPaddingX: 2,
                    callback: o.formatters.linear
                },
                pointLabels: {
                    display: !0,
                    fontSize: 10,
                    callback: function(t) {
                        return t
                    }
                }
            },
            y = t.LinearScaleBase.extend({
                setDimensions: function() {
                    var t = this,
                        e = t.options,
                        n = e.ticks;
                    t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                    var r = i.min([t.height, t.width]),
                        o = i.valueOrDefault(n.fontSize, v.defaultFontSize);
                    t.drawingArea = e.display ? r / 2 - (o / 2 + n.backdropPaddingY) : r / 2
                },
                determineDataLimits: function() {
                    var t = this,
                        e = t.chart,
                        n = Number.POSITIVE_INFINITY,
                        r = Number.NEGATIVE_INFINITY;
                    i.each(e.data.datasets, function(o, a) {
                        if (e.isDatasetVisible(a)) {
                            var u = e.getDatasetMeta(a);
                            i.each(o.data, function(e, i) {
                                var o = +t.getRightValue(e);
                                isNaN(o) || u.data[i].hidden || (n = Math.min(o, n), r = Math.max(o, r))
                            })
                        }
                    }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = r === Number.NEGATIVE_INFINITY ? 0 : r, t.handleTickRangeOptions()
                },
                getTickLimit: function() {
                    var t = this.options.ticks,
                        e = i.valueOrDefault(t.fontSize, v.defaultFontSize);
                    return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)))
                },
                convertTicksToLabels: function() {
                    var e = this;
                    t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                },
                getLabelForIndex: function(t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                fit: function() {
                    this.options.pointLabels.display ? l(this) : s(this)
                },
                setReductions: function(t, e, n) {
                    var r = this,
                        i = e.l / Math.sin(n.l),
                        o = Math.max(e.r - r.width, 0) / Math.sin(n.r),
                        a = -e.t / Math.cos(n.t),
                        u = -Math.max(e.b - r.height, 0) / Math.cos(n.b);
                    i = g(i), o = g(o), a = g(a), u = g(u), r.drawingArea = Math.min(Math.round(t - (i + o) / 2), Math.round(t - (a + u) / 2)), r.setCenterPoint(i, o, a, u)
                },
                setCenterPoint: function(t, e, n, r) {
                    var i = this,
                        o = i.width - e - i.drawingArea,
                        a = t + i.drawingArea,
                        u = n + i.drawingArea,
                        l = i.height - r - i.drawingArea;
                    i.xCenter = Math.round((a + o) / 2 + i.left), i.yCenter = Math.round((u + l) / 2 + i.top)
                },
                getIndexAngle: function(t) {
                    return t * (2 * Math.PI / e(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                },
                getDistanceFromCenterForValue: function(t) {
                    var e = this;
                    if (null === t) return 0;
                    var n = e.drawingArea / (e.max - e.min);
                    return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                },
                getPointPosition: function(t, e) {
                    var n = this,
                        r = n.getIndexAngle(t) - Math.PI / 2;
                    return {
                        x: Math.round(Math.cos(r) * e) + n.xCenter,
                        y: Math.round(Math.sin(r) * e) + n.yCenter
                    }
                },
                getPointPositionForValue: function(t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                },
                getBasePosition: function() {
                    var t = this,
                        e = t.min,
                        n = t.max;
                    return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
                },
                draw: function() {
                    var t = this,
                        e = t.options,
                        n = e.gridLines,
                        r = e.ticks,
                        o = i.valueOrDefault;
                    if (e.display) {
                        var a = t.ctx,
                            u = this.getIndexAngle(0),
                            l = o(r.fontSize, v.defaultFontSize),
                            s = o(r.fontStyle, v.defaultFontStyle),
                            c = o(r.fontFamily, v.defaultFontFamily),
                            f = i.fontString(l, s, c);
                        i.each(t.ticks, function(e, i) {
                            if (i > 0 || r.reverse) {
                                var s = t.getDistanceFromCenterForValue(t.ticksAsNumbers[i]);
                                if (n.display && 0 !== i && p(t, n, s, i), r.display) {
                                    var c = o(r.fontColor, v.defaultFontColor);
                                    if (a.font = f, a.save(), a.translate(t.xCenter, t.yCenter), a.rotate(u), r.showLabelBackdrop) {
                                        var d = a.measureText(e).width;
                                        a.fillStyle = r.backdropColor, a.fillRect(-d / 2 - r.backdropPaddingX, -s - l / 2 - r.backdropPaddingY, d + 2 * r.backdropPaddingX, l + 2 * r.backdropPaddingY)
                                    }
                                    a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = c, a.fillText(e, 0, -s), a.restore()
                                }
                            }
                        }), (e.angleLines.display || e.pointLabels.display) && h(t)
                    }
                }
            });
        t.scaleService.registerScaleType("radialLinear", y, m)
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t - e
    }

    function i(t) {
        var e, n, r, i = {},
            o = [];
        for (e = 0, n = t.length; e < n; ++e) r = t[e], i[r] || (i[r] = !0, o.push(r));
        return o
    }

    function o(t, e, n, r) {
        if ("linear" === r || !t.length) return [{
            time: e,
            pos: 0
        }, {
            time: n,
            pos: 1
        }];
        var i, o, a, u, l, s = [],
            c = [e];
        for (i = 0, o = t.length; i < o; ++i)(u = t[i]) > e && u < n && c.push(u);
        for (c.push(n), i = 0, o = c.length; i < o; ++i) l = c[i + 1], a = c[i - 1], u = c[i], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === u || s.push({
            time: u,
            pos: i / (o - 1)
        });
        return s
    }

    function a(t, e, n) {
        for (var r, i, o, a = 0, u = t.length - 1; a >= 0 && a <= u;) {
            if (r = a + u >> 1, i = t[r - 1] || null, o = t[r], !i) return {
                lo: null,
                hi: o
            };
            if (o[e] < n) a = r + 1;
            else {
                if (!(i[e] > n)) return {
                    lo: i,
                    hi: o
                };
                u = r - 1
            }
        }
        return {
            lo: o,
            hi: null
        }
    }

    function u(t, e, n, r) {
        var i = a(t, e, n),
            o = i.lo ? i.hi ? i.lo : t[t.length - 2] : t[0],
            u = i.lo ? i.hi ? i.hi : t[t.length - 1] : t[1],
            l = u[e] - o[e],
            s = l ? (n - o[e]) / l : 0,
            c = (u[r] - o[r]) * s;
        return o[r] + c
    }

    function l(t, e) {
        var n = e.parser,
            r = e.parser || e.format;
        return "function" === typeof n ? n(t) : "string" === typeof t && "string" === typeof r ? y(t, r) : (t instanceof y || (t = y(t)), t.isValid() ? t : "function" === typeof r ? r(t) : t)
    }

    function s(t, e) {
        if (_.isNullOrUndef(t)) return null;
        var n = e.options.time,
            r = l(e.getRightValue(t), n);
        return r.isValid() ? (n.round && r.startOf(n.round), r.valueOf()) : null
    }

    function c(t, e, n, r) {
        var i, o, a, u = e - t,
            l = k[n],
            s = l.size,
            c = l.steps;
        if (!c) return Math.ceil(u / (r * s));
        for (i = 0, o = c.length; i < o && (a = c[i], !(Math.ceil(u / (s * a)) <= r)); ++i);
        return a
    }

    function f(t, e, n, r) {
        var i, o, a, u = S.length;
        for (i = S.indexOf(t); i < u - 1; ++i)
            if (o = k[S[i]], a = o.steps ? o.steps[o.steps.length - 1] : w, o.common && Math.ceil((n - e) / (a * o.size)) <= r) return S[i];
        return S[u - 1]
    }

    function d(t, e, n, r) {
        var i, o, a = y.duration(y(r).diff(y(n))),
            u = S.length;
        for (i = u - 1; i >= S.indexOf(e); i--)
            if (o = S[i], k[o].common && a.as(o) >= t.length) return o;
        return S[e ? S.indexOf(e) : 0]
    }

    function h(t) {
        for (var e = S.indexOf(t) + 1, n = S.length; e < n; ++e)
            if (k[S[e]].common) return S[e]
    }

    function p(t, e, n, r) {
        var i, o = r.time,
            a = o.unit || f(o.minUnit, t, e, n),
            u = h(a),
            l = _.valueOrDefault(o.stepSize, o.unitStepSize),
            s = "week" === a && o.isoWeekday,
            d = r.ticks.major.enabled,
            p = k[a],
            g = y(t),
            v = y(e),
            m = [];
        for (l || (l = c(t, e, a, n)), s && (g = g.isoWeekday(s), v = v.isoWeekday(s)), g = g.startOf(s ? "day" : a), v = v.startOf(s ? "day" : a), v < e && v.add(1, a), i = y(g), d && u && !s && !o.round && (i.startOf(u), i.add(~~((g - i) / (p.size * l)) * l, a)); i < v; i.add(l, a)) m.push(+i);
        return m.push(+i), m
    }

    function g(t, e, n, r, i) {
        var o, a, l = 0,
            s = 0;
        return i.offset && e.length && (i.time.min || (o = e.length > 1 ? e[1] : r, a = e[0], l = (u(t, "time", o, "pos") - u(t, "time", a, "pos")) / 2), i.time.max || (o = e[e.length - 1], a = e.length > 1 ? e[e.length - 2] : n, s = (u(t, "time", o, "pos") - u(t, "time", a, "pos")) / 2)), {
            left: l,
            right: s
        }
    }

    function v(t, e) {
        var n, r, i, o, a = [];
        for (n = 0, r = t.length; n < r; ++n) i = t[n], o = !!e && i === +y(i).startOf(e), a.push({
            value: i,
            major: o
        });
        return a
    }

    function m(t, e) {
        var n, r, i, o = t.length;
        for (n = 0; n < o; n++) {
            if (r = l(t[n], e), 0 !== r.millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
            0 === r.second() && 0 === r.minute() && 0 === r.hour() || (i = !0)
        }
        return i ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
    }
    var y = n(40);
    y = "function" === typeof y ? y : window.moment;
    var b = n(1),
        _ = n(0),
        x = Number.MIN_SAFE_INTEGER || -9007199254740991,
        w = Number.MAX_SAFE_INTEGER || 9007199254740991,
        k = {
            millisecond: {
                common: !0,
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            },
            second: {
                common: !0,
                size: 1e3,
                steps: [1, 2, 5, 10, 30]
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: [1, 2, 5, 10, 30]
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: [1, 2, 3, 6, 12]
            },
            day: {
                common: !0,
                size: 864e5,
                steps: [1, 2, 5]
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: [1, 2, 3, 4]
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: [1, 2, 3]
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: [1, 2, 3, 4]
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        S = Object.keys(k);
    t.exports = function(t) {
        var e = {
                position: "bottom",
                distribution: "linear",
                bounds: "data",
                time: {
                    parser: !1,
                    format: !1,
                    unit: !1,
                    round: !1,
                    displayFormat: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {
                        millisecond: "h:mm:ss.SSS a",
                        second: "h:mm:ss a",
                        minute: "h:mm a",
                        hour: "hA",
                        day: "MMM D",
                        week: "ll",
                        month: "MMM YYYY",
                        quarter: "[Q]Q - YYYY",
                        year: "YYYY"
                    }
                },
                ticks: {
                    autoSkip: !1,
                    source: "auto",
                    major: {
                        enabled: !1
                    }
                }
            },
            n = t.Scale.extend({
                initialize: function() {
                    if (!y) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                    this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this)
                },
                update: function() {
                    var e = this,
                        n = e.options;
                    return n.time && n.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(e, arguments)
                },
                getRightValue: function(e) {
                    return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e)
                },
                determineDataLimits: function() {
                    var t, e, n, o, a, u, l = this,
                        c = l.chart,
                        f = l.options.time,
                        d = f.unit || "day",
                        h = w,
                        p = x,
                        g = [],
                        v = [],
                        m = [];
                    for (t = 0, n = c.data.labels.length; t < n; ++t) m.push(s(c.data.labels[t], l));
                    for (t = 0, n = (c.data.datasets || []).length; t < n; ++t)
                        if (c.isDatasetVisible(t))
                            if (a = c.data.datasets[t].data, _.isObject(a[0]))
                                for (v[t] = [], e = 0, o = a.length; e < o; ++e) u = s(a[e], l), g.push(u), v[t][e] = u;
                            else g.push.apply(g, m), v[t] = m.slice(0);
                    else v[t] = [];
                    m.length && (m = i(m).sort(r), h = Math.min(h, m[0]), p = Math.max(p, m[m.length - 1])), g.length && (g = i(g).sort(r), h = Math.min(h, g[0]), p = Math.max(p, g[g.length - 1])), h = s(f.min, l) || h, p = s(f.max, l) || p, h = h === w ? +y().startOf(d) : h, p = p === x ? +y().endOf(d) + 1 : p, l.min = Math.min(h, p), l.max = Math.max(h + 1, p), l._horizontal = l.isHorizontal(), l._table = [], l._timestamps = {
                        data: g,
                        datasets: v,
                        labels: m
                    }
                },
                buildTicks: function() {
                    var t, e, n, r = this,
                        i = r.min,
                        a = r.max,
                        u = r.options,
                        l = u.time,
                        c = [],
                        f = [];
                    switch (u.ticks.source) {
                        case "data":
                            c = r._timestamps.data;
                            break;
                        case "labels":
                            c = r._timestamps.labels;
                            break;
                        case "auto":
                        default:
                            c = p(i, a, r.getLabelCapacity(i), u)
                    }
                    for ("ticks" === u.bounds && c.length && (i = c[0], a = c[c.length - 1]), i = s(l.min, r) || i, a = s(l.max, r) || a, t = 0, e = c.length; t < e; ++t)(n = c[t]) >= i && n <= a && f.push(n);
                    return r.min = i, r.max = a, r._unit = l.unit || d(f, l.minUnit, r.min, r.max), r._majorUnit = h(r._unit), r._table = o(r._timestamps.data, i, a, u.distribution), r._offsets = g(r._table, f, i, a, u), r._labelFormat = m(r._timestamps.data, l), v(f, r._majorUnit)
                },
                getLabelForIndex: function(t, e) {
                    var n = this,
                        r = n.chart.data,
                        i = n.options.time,
                        o = r.labels && t < r.labels.length ? r.labels[t] : "",
                        a = r.datasets[e].data[t];
                    return _.isObject(a) && (o = n.getRightValue(a)), i.tooltipFormat ? l(o, i).format(i.tooltipFormat) : "string" === typeof o ? o : l(o, i).format(n._labelFormat)
                },
                tickFormatFunction: function(t, e, n, r) {
                    var i = this,
                        o = i.options,
                        a = t.valueOf(),
                        u = o.time.displayFormats,
                        l = u[i._unit],
                        s = i._majorUnit,
                        c = u[s],
                        f = t.clone().startOf(s).valueOf(),
                        d = o.ticks.major,
                        h = d.enabled && s && c && a === f,
                        p = t.format(r || (h ? c : l)),
                        g = h ? d : o.ticks.minor,
                        v = _.valueOrDefault(g.callback, g.userCallback);
                    return v ? v(p, e, n) : p
                },
                convertTicksToLabels: function(t) {
                    var e, n, r = [];
                    for (e = 0, n = t.length; e < n; ++e) r.push(this.tickFormatFunction(y(t[e].value), e, t));
                    return r
                },
                getPixelForOffset: function(t) {
                    var e = this,
                        n = e._horizontal ? e.width : e.height,
                        r = e._horizontal ? e.left : e.top,
                        i = u(e._table, "time", t, "pos");
                    return r + n * (e._offsets.left + i) / (e._offsets.left + 1 + e._offsets.right)
                },
                getPixelForValue: function(t, e, n) {
                    var r = this,
                        i = null;
                    if (void 0 !== e && void 0 !== n && (i = r._timestamps.datasets[n][e]), null === i && (i = s(t, r)), null !== i) return r.getPixelForOffset(i)
                },
                getPixelForTick: function(t) {
                    var e = this.getTicks();
                    return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                },
                getValueForPixel: function(t) {
                    var e = this,
                        n = e._horizontal ? e.width : e.height,
                        r = e._horizontal ? e.left : e.top,
                        i = (n ? (t - r) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                        o = u(e._table, "pos", i, "time");
                    return y(o)
                },
                getLabelWidth: function(t) {
                    var e = this,
                        n = e.options.ticks,
                        r = e.ctx.measureText(t).width,
                        i = _.toRadians(n.maxRotation),
                        o = Math.cos(i),
                        a = Math.sin(i);
                    return r * o + _.valueOrDefault(n.fontSize, b.global.defaultFontSize) * a
                },
                getLabelCapacity: function(t) {
                    var e = this,
                        n = e.options.time.displayFormats.millisecond,
                        r = e.tickFormatFunction(y(t), 0, [], n),
                        i = e.getLabelWidth(r),
                        o = e.isHorizontal() ? e.width : e.height,
                        a = Math.floor(o / i);
                    return a > 0 ? a : 1
                }
            });
        t.scaleService.registerScaleType("time", n, e)
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n, r, i, o, a = t.isHorizontal() ? t.width : t.height,
            u = t.getTicks();
        for (i = 1, o = e.length; i < o; ++i) a = Math.min(a, e[i] - e[i - 1]);
        for (i = 0, o = u.length; i < o; ++i) r = t.getPixelForTick(i), a = i > 0 ? Math.min(a, r - n) : a, n = r;
        return a
    }

    function i(t, e, n) {
        var r, i, o = n.barThickness,
            a = e.stackCount,
            u = e.pixels[t];
        return l.isNullOrUndef(o) ? (r = e.min * n.categoryPercentage, i = n.barPercentage) : (r = o * a, i = 1), {
            chunk: r / a,
            ratio: i,
            start: u - r / 2
        }
    }

    function o(t, e, n) {
        var r, i, o = e.pixels,
            a = o[t],
            u = t > 0 ? o[t - 1] : null,
            l = t < o.length - 1 ? o[t + 1] : null,
            s = n.categoryPercentage;
        return null === u && (u = a - (null === l ? e.end - a : l - a)), null === l && (l = a + a - u), r = a - (a - u) / 2 * s, i = (l - u) / 2 * s, {
            chunk: i / e.stackCount,
            ratio: n.barPercentage,
            start: r
        }
    }
    var a = n(1),
        u = n(5),
        l = n(0);
    a._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    }), a._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                position: "left",
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            callbacks: {
                title: function(t, e) {
                    var n = "";
                    return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                },
                label: function(t, e) {
                    return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                }
            },
            mode: "index",
            axis: "y"
        }
    }), t.exports = function(t) {
        t.controllers.bar = t.DatasetController.extend({
            dataElementType: u.Rectangle,
            initialize: function() {
                var e, n = this;
                t.DatasetController.prototype.initialize.apply(n, arguments), e = n.getMeta(), e.stack = n.getDataset().stack, e.bar = !0
            },
            update: function(t) {
                var e, n, r = this,
                    i = r.getMeta().data;
                for (r._ruler = r.getRuler(), e = 0, n = i.length; e < n; ++e) r.updateElement(i[e], e, t)
            },
            updateElement: function(t, e, n) {
                var r = this,
                    i = r.chart,
                    o = r.getMeta(),
                    a = r.getDataset(),
                    u = t.custom || {},
                    s = i.options.elements.rectangle;
                t._xScale = r.getScaleForId(o.xAxisID), t._yScale = r.getScaleForId(o.yAxisID), t._datasetIndex = r.index, t._index = e, t._model = {
                    datasetLabel: a.label,
                    label: i.data.labels[e],
                    borderSkipped: u.borderSkipped ? u.borderSkipped : s.borderSkipped,
                    backgroundColor: u.backgroundColor ? u.backgroundColor : l.valueAtIndexOrDefault(a.backgroundColor, e, s.backgroundColor),
                    borderColor: u.borderColor ? u.borderColor : l.valueAtIndexOrDefault(a.borderColor, e, s.borderColor),
                    borderWidth: u.borderWidth ? u.borderWidth : l.valueAtIndexOrDefault(a.borderWidth, e, s.borderWidth)
                }, r.updateElementGeometry(t, e, n), t.pivot()
            },
            updateElementGeometry: function(t, e, n) {
                var r = this,
                    i = t._model,
                    o = r.getValueScale(),
                    a = o.getBasePixel(),
                    u = o.isHorizontal(),
                    l = r._ruler || r.getRuler(),
                    s = r.calculateBarValuePixels(r.index, e),
                    c = r.calculateBarIndexPixels(r.index, e, l);
                i.horizontal = u, i.base = n ? a : s.base, i.x = u ? n ? a : s.head : c.center, i.y = u ? c.center : n ? a : s.head, i.height = u ? c.size : void 0, i.width = u ? void 0 : c.size
            },
            getValueScaleId: function() {
                return this.getMeta().yAxisID
            },
            getIndexScaleId: function() {
                return this.getMeta().xAxisID
            },
            getValueScale: function() {
                return this.getScaleForId(this.getValueScaleId())
            },
            getIndexScale: function() {
                return this.getScaleForId(this.getIndexScaleId())
            },
            _getStacks: function(t) {
                var e, n, r = this,
                    i = r.chart,
                    o = r.getIndexScale(),
                    a = o.options.stacked,
                    u = void 0 === t ? i.data.datasets.length : t + 1,
                    l = [];
                for (e = 0; e < u; ++e) n = i.getDatasetMeta(e), n.bar && i.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === l.indexOf(n.stack) || void 0 === a && (void 0 === n.stack || -1 === l.indexOf(n.stack))) && l.push(n.stack);
                return l
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(t, e) {
                var n = this._getStacks(t),
                    r = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === r ? n.length - 1 : r
            },
            getRuler: function() {
                var t, e, n, i = this,
                    o = i.getIndexScale(),
                    a = i.getStackCount(),
                    u = i.index,
                    s = o.isHorizontal(),
                    c = s ? o.left : o.top,
                    f = c + (s ? o.width : o.height),
                    d = [];
                for (t = 0, e = i.getMeta().data.length; t < e; ++t) d.push(o.getPixelForValue(null, t, u));
                return n = l.isNullOrUndef(o.options.barThickness) ? r(o, d) : -1, {
                    min: n,
                    pixels: d,
                    start: c,
                    end: f,
                    stackCount: a,
                    scale: o
                }
            },
            calculateBarValuePixels: function(t, e) {
                var n, r, i, o, a, u, l = this,
                    s = l.chart,
                    c = l.getMeta(),
                    f = l.getValueScale(),
                    d = s.data.datasets,
                    h = f.getRightValue(d[t].data[e]),
                    p = f.options.stacked,
                    g = c.stack,
                    v = 0;
                if (p || void 0 === p && void 0 !== g)
                    for (n = 0; n < t; ++n) r = s.getDatasetMeta(n), r.bar && r.stack === g && r.controller.getValueScaleId() === f.id && s.isDatasetVisible(n) && (i = f.getRightValue(d[n].data[e]), (h < 0 && i < 0 || h >= 0 && i > 0) && (v += i));
                return o = f.getPixelForValue(v), a = f.getPixelForValue(v + h), u = (a - o) / 2, {
                    size: u,
                    base: o,
                    head: a,
                    center: a + u / 2
                }
            },
            calculateBarIndexPixels: function(t, e, n) {
                var r = this,
                    a = n.scale.options,
                    u = "flex" === a.barThickness ? o(e, n, a) : i(e, n, a),
                    s = r.getStackIndex(t, r.getMeta().stack),
                    c = u.start + u.chunk * s + u.chunk / 2,
                    f = Math.min(l.valueOrDefault(a.maxBarThickness, 1 / 0), u.chunk * u.ratio);
                return {
                    base: c - f / 2,
                    head: c + f / 2,
                    center: c,
                    size: f
                }
            },
            draw: function() {
                var t = this,
                    e = t.chart,
                    n = t.getValueScale(),
                    r = t.getMeta().data,
                    i = t.getDataset(),
                    o = r.length,
                    a = 0;
                for (l.canvas.clipArea(e.ctx, e.chartArea); a < o; ++a) isNaN(n.getRightValue(i.data[a])) || r[a].draw();
                l.canvas.unclipArea(e.ctx)
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    r = t.custom || {},
                    i = t._model;
                i.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : l.valueAtIndexOrDefault(e.hoverBackgroundColor, n, l.getHoverColor(i.backgroundColor)), i.borderColor = r.hoverBorderColor ? r.hoverBorderColor : l.valueAtIndexOrDefault(e.hoverBorderColor, n, l.getHoverColor(i.borderColor)), i.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : l.valueAtIndexOrDefault(e.hoverBorderWidth, n, i.borderWidth)
            },
            removeHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    r = t.custom || {},
                    i = t._model,
                    o = this.chart.options.elements.rectangle;
                i.backgroundColor = r.backgroundColor ? r.backgroundColor : l.valueAtIndexOrDefault(e.backgroundColor, n, o.backgroundColor), i.borderColor = r.borderColor ? r.borderColor : l.valueAtIndexOrDefault(e.borderColor, n, o.borderColor), i.borderWidth = r.borderWidth ? r.borderWidth : l.valueAtIndexOrDefault(e.borderWidth, n, o.borderWidth)
            }
        }), t.controllers.horizontalBar = t.controllers.bar.extend({
            getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(5),
        o = n(0);
    r._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "",
                        r = e.datasets[t.datasetIndex].data[t.index];
                    return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + r.r + ")"
                }
            }
        }
    }), t.exports = function(t) {
        t.controllers.bubble = t.DatasetController.extend({
            dataElementType: i.Point,
            update: function(t) {
                var e = this,
                    n = e.getMeta(),
                    r = n.data;
                o.each(r, function(n, r) {
                    e.updateElement(n, r, t)
                })
            },
            updateElement: function(t, e, n) {
                var r = this,
                    i = r.getMeta(),
                    o = t.custom || {},
                    a = r.getScaleForId(i.xAxisID),
                    u = r.getScaleForId(i.yAxisID),
                    l = r._resolveElementOptions(t, e),
                    s = r.getDataset().data[e],
                    c = r.index,
                    f = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" === typeof s ? s : NaN, e, c),
                    d = n ? u.getBasePixel() : u.getPixelForValue(s, e, c);
                t._xScale = a, t._yScale = u, t._options = l, t._datasetIndex = c, t._index = e, t._model = {
                    backgroundColor: l.backgroundColor,
                    borderColor: l.borderColor,
                    borderWidth: l.borderWidth,
                    hitRadius: l.hitRadius,
                    pointStyle: l.pointStyle,
                    radius: n ? 0 : l.radius,
                    skip: o.skip || isNaN(f) || isNaN(d),
                    x: f,
                    y: d
                }, t.pivot()
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    n = t._options;
                e.backgroundColor = o.valueOrDefault(n.hoverBackgroundColor, o.getHoverColor(n.backgroundColor)), e.borderColor = o.valueOrDefault(n.hoverBorderColor, o.getHoverColor(n.borderColor)), e.borderWidth = o.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
            },
            removeHoverStyle: function(t) {
                var e = t._model,
                    n = t._options;
                e.backgroundColor = n.backgroundColor, e.borderColor = n.borderColor, e.borderWidth = n.borderWidth, e.radius = n.radius
            },
            _resolveElementOptions: function(t, e) {
                var n, r, i, a = this,
                    u = a.chart,
                    l = u.data.datasets,
                    s = l[a.index],
                    c = t.custom || {},
                    f = u.options.elements.point,
                    d = o.options.resolve,
                    h = s.data[e],
                    p = {},
                    g = {
                        chart: u,
                        dataIndex: e,
                        dataset: s,
                        datasetIndex: a.index
                    },
                    v = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                for (n = 0, r = v.length; n < r; ++n) i = v[n], p[i] = d([c[i], s[i], f[i]], g, e);
                return p.radius = d([c.radius, h ? h.r : void 0, s.radius, f.radius], g, e), p
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(5),
        o = n(0);
    r._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var n = t.data,
                r = n.datasets,
                i = n.labels;
            if (r.length)
                for (var o = 0; o < r[0].data.length; ++o) e.push('<li><span style="background-color:' + r[0].backgroundColor[o] + '"></span>'), i[o] && e.push(i[o]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(n, r) {
                        var i = t.getDatasetMeta(0),
                            a = e.datasets[0],
                            u = i.data[r],
                            l = u && u.custom || {},
                            s = o.valueAtIndexOrDefault,
                            c = t.options.elements.arc;
                        return {
                            text: n,
                            fillStyle: l.backgroundColor ? l.backgroundColor : s(a.backgroundColor, r, c.backgroundColor),
                            strokeStyle: l.borderColor ? l.borderColor : s(a.borderColor, r, c.borderColor),
                            lineWidth: l.borderWidth ? l.borderWidth : s(a.borderWidth, r, c.borderWidth),
                            hidden: isNaN(a.data[r]) || i.data[r].hidden,
                            index: r
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var n, r, i, o = e.index,
                    a = this.chart;
                for (n = 0, r = (a.data.datasets || []).length; n < r; ++n) i = a.getDatasetMeta(n), i.data[o] && (i.data[o].hidden = !i.data[o].hidden);
                a.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var n = e.labels[t.index],
                        r = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return o.isArray(n) ? (n = n.slice(), n[0] += r) : n += r, n
                }
            }
        }
    }), r._set("pie", o.clone(r.doughnut)), r._set("pie", {
        cutoutPercentage: 0
    }), t.exports = function(t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
            dataElementType: i.Arc,
            linkScales: o.noop,
            getRingIndex: function(t) {
                for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                return e
            },
            update: function(t) {
                var e = this,
                    n = e.chart,
                    r = n.chartArea,
                    i = n.options,
                    a = i.elements.arc,
                    u = r.right - r.left - a.borderWidth,
                    l = r.bottom - r.top - a.borderWidth,
                    s = Math.min(u, l),
                    c = {
                        x: 0,
                        y: 0
                    },
                    f = e.getMeta(),
                    d = i.cutoutPercentage,
                    h = i.circumference;
                if (h < 2 * Math.PI) {
                    var p = i.rotation % (2 * Math.PI);
                    p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0);
                    var g = p + h,
                        v = {
                            x: Math.cos(p),
                            y: Math.sin(p)
                        },
                        m = {
                            x: Math.cos(g),
                            y: Math.sin(g)
                        },
                        y = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                        b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                        _ = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                        x = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                        w = d / 100,
                        k = {
                            x: _ ? -1 : Math.min(v.x * (v.x < 0 ? 1 : w), m.x * (m.x < 0 ? 1 : w)),
                            y: x ? -1 : Math.min(v.y * (v.y < 0 ? 1 : w), m.y * (m.y < 0 ? 1 : w))
                        },
                        S = {
                            x: y ? 1 : Math.max(v.x * (v.x > 0 ? 1 : w), m.x * (m.x > 0 ? 1 : w)),
                            y: b ? 1 : Math.max(v.y * (v.y > 0 ? 1 : w), m.y * (m.y > 0 ? 1 : w))
                        },
                        C = {
                            width: .5 * (S.x - k.x),
                            height: .5 * (S.y - k.y)
                        };
                    s = Math.min(u / C.width, l / C.height), c = {
                        x: -.5 * (S.x + k.x),
                        y: -.5 * (S.y + k.y)
                    }
                }
                n.borderWidth = e.getMaxBorderWidth(f.data), n.outerRadius = Math.max((s - n.borderWidth) / 2, 0), n.innerRadius = Math.max(d ? n.outerRadius / 100 * d : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, f.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), o.each(f.data, function(n, r) {
                    e.updateElement(n, r, t)
                })
            },
            updateElement: function(t, e, n) {
                var r = this,
                    i = r.chart,
                    a = i.chartArea,
                    u = i.options,
                    l = u.animation,
                    s = (a.left + a.right) / 2,
                    c = (a.top + a.bottom) / 2,
                    f = u.rotation,
                    d = u.rotation,
                    h = r.getDataset(),
                    p = n && l.animateRotate ? 0 : t.hidden ? 0 : r.calculateCircumference(h.data[e]) * (u.circumference / (2 * Math.PI)),
                    g = n && l.animateScale ? 0 : r.innerRadius,
                    v = n && l.animateScale ? 0 : r.outerRadius,
                    m = o.valueAtIndexOrDefault;
                o.extend(t, {
                    _datasetIndex: r.index,
                    _index: e,
                    _model: {
                        x: s + i.offsetX,
                        y: c + i.offsetY,
                        startAngle: f,
                        endAngle: d,
                        circumference: p,
                        outerRadius: v,
                        innerRadius: g,
                        label: m(h.label, e, i.data.labels[e])
                    }
                });
                var y = t._model;
                this.removeHoverStyle(t), n && l.animateRotate || (y.startAngle = 0 === e ? u.rotation : r.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
            },
            removeHoverStyle: function(e) {
                t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
            },
            calculateTotal: function() {
                var t, e = this.getDataset(),
                    n = this.getMeta(),
                    r = 0;
                return o.each(n.data, function(n, i) {
                    t = e.data[i], isNaN(t) || n.hidden || (r += Math.abs(t))
                }), r
            },
            calculateCircumference: function(t) {
                var e = this.getMeta().total;
                return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
            },
            getMaxBorderWidth: function(t) {
                for (var e, n, r = 0, i = this.index, o = t.length, a = 0; a < o; a++) e = t[a]._model ? t[a]._model.borderWidth : 0, n = t[a]._chart ? t[a]._chart.config.data.datasets[i].hoverBorderWidth : 0, r = e > r ? e : r, r = n > r ? n : r;
                return r
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(5),
        o = n(0);
    r._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    }), t.exports = function(t) {
        function e(t, e) {
            return o.valueOrDefault(t.showLine, e.showLines)
        }
        t.controllers.line = t.DatasetController.extend({
            datasetElementType: i.Line,
            dataElementType: i.Point,
            update: function(t) {
                var n, r, i, a = this,
                    u = a.getMeta(),
                    l = u.dataset,
                    s = u.data || [],
                    c = a.chart.options,
                    f = c.elements.line,
                    d = a.getScaleForId(u.yAxisID),
                    h = a.getDataset(),
                    p = e(h, c);
                for (p && (i = l.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), l._scale = d, l._datasetIndex = a.index, l._children = s, l._model = {
                        spanGaps: h.spanGaps ? h.spanGaps : c.spanGaps,
                        tension: i.tension ? i.tension : o.valueOrDefault(h.lineTension, f.tension),
                        backgroundColor: i.backgroundColor ? i.backgroundColor : h.backgroundColor || f.backgroundColor,
                        borderWidth: i.borderWidth ? i.borderWidth : h.borderWidth || f.borderWidth,
                        borderColor: i.borderColor ? i.borderColor : h.borderColor || f.borderColor,
                        borderCapStyle: i.borderCapStyle ? i.borderCapStyle : h.borderCapStyle || f.borderCapStyle,
                        borderDash: i.borderDash ? i.borderDash : h.borderDash || f.borderDash,
                        borderDashOffset: i.borderDashOffset ? i.borderDashOffset : h.borderDashOffset || f.borderDashOffset,
                        borderJoinStyle: i.borderJoinStyle ? i.borderJoinStyle : h.borderJoinStyle || f.borderJoinStyle,
                        fill: i.fill ? i.fill : void 0 !== h.fill ? h.fill : f.fill,
                        steppedLine: i.steppedLine ? i.steppedLine : o.valueOrDefault(h.steppedLine, f.stepped),
                        cubicInterpolationMode: i.cubicInterpolationMode ? i.cubicInterpolationMode : o.valueOrDefault(h.cubicInterpolationMode, f.cubicInterpolationMode)
                    }, l.pivot()), n = 0, r = s.length; n < r; ++n) a.updateElement(s[n], n, t);
                for (p && 0 !== l._model.tension && a.updateBezierControlPoints(), n = 0, r = s.length; n < r; ++n) s[n].pivot()
            },
            getPointBackgroundColor: function(t, e) {
                var n = this.chart.options.elements.point.backgroundColor,
                    r = this.getDataset(),
                    i = t.custom || {};
                return i.backgroundColor ? n = i.backgroundColor : r.pointBackgroundColor ? n = o.valueAtIndexOrDefault(r.pointBackgroundColor, e, n) : r.backgroundColor && (n = r.backgroundColor), n
            },
            getPointBorderColor: function(t, e) {
                var n = this.chart.options.elements.point.borderColor,
                    r = this.getDataset(),
                    i = t.custom || {};
                return i.borderColor ? n = i.borderColor : r.pointBorderColor ? n = o.valueAtIndexOrDefault(r.pointBorderColor, e, n) : r.borderColor && (n = r.borderColor), n
            },
            getPointBorderWidth: function(t, e) {
                var n = this.chart.options.elements.point.borderWidth,
                    r = this.getDataset(),
                    i = t.custom || {};
                return isNaN(i.borderWidth) ? !isNaN(r.pointBorderWidth) || o.isArray(r.pointBorderWidth) ? n = o.valueAtIndexOrDefault(r.pointBorderWidth, e, n) : isNaN(r.borderWidth) || (n = r.borderWidth) : n = i.borderWidth, n
            },
            updateElement: function(t, e, n) {
                var r, i, a = this,
                    u = a.getMeta(),
                    l = t.custom || {},
                    s = a.getDataset(),
                    c = a.index,
                    f = s.data[e],
                    d = a.getScaleForId(u.yAxisID),
                    h = a.getScaleForId(u.xAxisID),
                    p = a.chart.options.elements.point;
                void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), r = h.getPixelForValue("object" === typeof f ? f : NaN, e, c), i = n ? d.getBasePixel() : a.calculatePointY(f, e, c), t._xScale = h, t._yScale = d, t._datasetIndex = c, t._index = e, t._model = {
                    x: r,
                    y: i,
                    skip: l.skip || isNaN(r) || isNaN(i),
                    radius: l.radius || o.valueAtIndexOrDefault(s.pointRadius, e, p.radius),
                    pointStyle: l.pointStyle || o.valueAtIndexOrDefault(s.pointStyle, e, p.pointStyle),
                    backgroundColor: a.getPointBackgroundColor(t, e),
                    borderColor: a.getPointBorderColor(t, e),
                    borderWidth: a.getPointBorderWidth(t, e),
                    tension: u.dataset._model ? u.dataset._model.tension : 0,
                    steppedLine: !!u.dataset._model && u.dataset._model.steppedLine,
                    hitRadius: l.hitRadius || o.valueAtIndexOrDefault(s.pointHitRadius, e, p.hitRadius)
                }
            },
            calculatePointY: function(t, e, n) {
                var r, i, o, a = this,
                    u = a.chart,
                    l = a.getMeta(),
                    s = a.getScaleForId(l.yAxisID),
                    c = 0,
                    f = 0;
                if (s.options.stacked) {
                    for (r = 0; r < n; r++)
                        if (i = u.data.datasets[r], o = u.getDatasetMeta(r), "line" === o.type && o.yAxisID === s.id && u.isDatasetVisible(r)) {
                            var d = Number(s.getRightValue(i.data[e]));
                            d < 0 ? f += d || 0 : c += d || 0
                        }
                    var h = Number(s.getRightValue(t));
                    return h < 0 ? s.getPixelForValue(f + h) : s.getPixelForValue(c + h)
                }
                return s.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
                function t(t, e, n) {
                    return Math.max(Math.min(t, n), e)
                }
                var e, n, r, i, a, u = this,
                    l = u.getMeta(),
                    s = u.chart.chartArea,
                    c = l.data || [];
                if (l.dataset._model.spanGaps && (c = c.filter(function(t) {
                        return !t._model.skip
                    })), "monotone" === l.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(c);
                else
                    for (e = 0, n = c.length; e < n; ++e) r = c[e], i = r._model, a = o.splineCurve(o.previousItem(c, e)._model, i, o.nextItem(c, e)._model, l.dataset._model.tension), i.controlPointPreviousX = a.previous.x, i.controlPointPreviousY = a.previous.y, i.controlPointNextX = a.next.x, i.controlPointNextY = a.next.y;
                if (u.chart.options.elements.line.capBezierPoints)
                    for (e = 0, n = c.length; e < n; ++e) i = c[e]._model, i.controlPointPreviousX = t(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = t(i.controlPointPreviousY, s.top, s.bottom), i.controlPointNextX = t(i.controlPointNextX, s.left, s.right), i.controlPointNextY = t(i.controlPointNextY, s.top, s.bottom)
            },
            draw: function() {
                var t = this,
                    n = t.chart,
                    r = t.getMeta(),
                    i = r.data || [],
                    a = n.chartArea,
                    u = i.length,
                    l = 0;
                for (o.canvas.clipArea(n.ctx, a), e(t.getDataset(), n.options) && r.dataset.draw(), o.canvas.unclipArea(n.ctx); l < u; ++l) i[l].draw(a)
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    r = t.custom || {},
                    i = t._model;
                i.radius = r.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), i.backgroundColor = r.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(i.backgroundColor)), i.borderColor = r.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(i.borderColor)), i.borderWidth = r.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, i.borderWidth)
            },
            removeHoverStyle: function(t) {
                var e = this,
                    n = e.chart.data.datasets[t._datasetIndex],
                    r = t._index,
                    i = t.custom || {},
                    a = t._model;
                void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), a.radius = i.radius || o.valueAtIndexOrDefault(n.pointRadius, r, e.chart.options.elements.point.radius), a.backgroundColor = e.getPointBackgroundColor(t, r), a.borderColor = e.getPointBorderColor(t, r), a.borderWidth = e.getPointBorderWidth(t, r)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(5),
        o = n(0);
    r._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var n = t.data,
                r = n.datasets,
                i = n.labels;
            if (r.length)
                for (var o = 0; o < r[0].data.length; ++o) e.push('<li><span style="background-color:' + r[0].backgroundColor[o] + '"></span>'), i[o] && e.push(i[o]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(n, r) {
                        var i = t.getDatasetMeta(0),
                            a = e.datasets[0],
                            u = i.data[r],
                            l = u.custom || {},
                            s = o.valueAtIndexOrDefault,
                            c = t.options.elements.arc;
                        return {
                            text: n,
                            fillStyle: l.backgroundColor ? l.backgroundColor : s(a.backgroundColor, r, c.backgroundColor),
                            strokeStyle: l.borderColor ? l.borderColor : s(a.borderColor, r, c.borderColor),
                            lineWidth: l.borderWidth ? l.borderWidth : s(a.borderWidth, r, c.borderWidth),
                            hidden: isNaN(a.data[r]) || i.data[r].hidden,
                            index: r
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var n, r, i, o = e.index,
                    a = this.chart;
                for (n = 0, r = (a.data.datasets || []).length; n < r; ++n) i = a.getDatasetMeta(n), i.data[o].hidden = !i.data[o].hidden;
                a.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    }), t.exports = function(t) {
        t.controllers.polarArea = t.DatasetController.extend({
            dataElementType: i.Arc,
            linkScales: o.noop,
            update: function(t) {
                var e = this,
                    n = e.chart,
                    r = n.chartArea,
                    i = e.getMeta(),
                    a = n.options,
                    u = a.elements.arc,
                    l = Math.min(r.right - r.left, r.bottom - r.top);
                n.outerRadius = Math.max((l - u.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(a.cutoutPercentage ? n.outerRadius / 100 * a.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), e.outerRadius = n.outerRadius - n.radiusLength * e.index, e.innerRadius = e.outerRadius - n.radiusLength, i.count = e.countVisibleElements(), o.each(i.data, function(n, r) {
                    e.updateElement(n, r, t)
                })
            },
            updateElement: function(t, e, n) {
                for (var r = this, i = r.chart, a = r.getDataset(), u = i.options, l = u.animation, s = i.scale, c = i.data.labels, f = r.calculateCircumference(a.data[e]), d = s.xCenter, h = s.yCenter, p = 0, g = r.getMeta(), v = 0; v < e; ++v) isNaN(a.data[v]) || g.data[v].hidden || ++p;
                var m = u.startAngle,
                    y = t.hidden ? 0 : s.getDistanceFromCenterForValue(a.data[e]),
                    b = m + f * p,
                    _ = b + (t.hidden ? 0 : f),
                    x = l.animateScale ? 0 : s.getDistanceFromCenterForValue(a.data[e]);
                o.extend(t, {
                    _datasetIndex: r.index,
                    _index: e,
                    _scale: s,
                    _model: {
                        x: d,
                        y: h,
                        innerRadius: 0,
                        outerRadius: n ? x : y,
                        startAngle: n && l.animateRotate ? m : b,
                        endAngle: n && l.animateRotate ? m : _,
                        label: o.valueAtIndexOrDefault(c, e, c[e])
                    }
                }), r.removeHoverStyle(t), t.pivot()
            },
            removeHoverStyle: function(e) {
                t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
            },
            countVisibleElements: function() {
                var t = this.getDataset(),
                    e = this.getMeta(),
                    n = 0;
                return o.each(e.data, function(e, r) {
                    isNaN(t.data[r]) || e.hidden || n++
                }), n
            },
            calculateCircumference: function(t) {
                var e = this.getMeta().count;
                return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(5),
        o = n(0);
    r._set("radar", {
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                tension: 0
            }
        }
    }), t.exports = function(t) {
        t.controllers.radar = t.DatasetController.extend({
            datasetElementType: i.Line,
            dataElementType: i.Point,
            linkScales: o.noop,
            update: function(t) {
                var e = this,
                    n = e.getMeta(),
                    r = n.dataset,
                    i = n.data,
                    a = r.custom || {},
                    u = e.getDataset(),
                    l = e.chart.options.elements.line,
                    s = e.chart.scale;
                void 0 !== u.tension && void 0 === u.lineTension && (u.lineTension = u.tension), o.extend(n.dataset, {
                    _datasetIndex: e.index,
                    _scale: s,
                    _children: i,
                    _loop: !0,
                    _model: {
                        tension: a.tension ? a.tension : o.valueOrDefault(u.lineTension, l.tension),
                        backgroundColor: a.backgroundColor ? a.backgroundColor : u.backgroundColor || l.backgroundColor,
                        borderWidth: a.borderWidth ? a.borderWidth : u.borderWidth || l.borderWidth,
                        borderColor: a.borderColor ? a.borderColor : u.borderColor || l.borderColor,
                        fill: a.fill ? a.fill : void 0 !== u.fill ? u.fill : l.fill,
                        borderCapStyle: a.borderCapStyle ? a.borderCapStyle : u.borderCapStyle || l.borderCapStyle,
                        borderDash: a.borderDash ? a.borderDash : u.borderDash || l.borderDash,
                        borderDashOffset: a.borderDashOffset ? a.borderDashOffset : u.borderDashOffset || l.borderDashOffset,
                        borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : u.borderJoinStyle || l.borderJoinStyle
                    }
                }), n.dataset.pivot(), o.each(i, function(n, r) {
                    e.updateElement(n, r, t)
                }, e), e.updateBezierControlPoints()
            },
            updateElement: function(t, e, n) {
                var r = this,
                    i = t.custom || {},
                    a = r.getDataset(),
                    u = r.chart.scale,
                    l = r.chart.options.elements.point,
                    s = u.getPointPositionForValue(e, a.data[e]);
                void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), o.extend(t, {
                    _datasetIndex: r.index,
                    _index: e,
                    _scale: u,
                    _model: {
                        x: n ? u.xCenter : s.x,
                        y: n ? u.yCenter : s.y,
                        tension: i.tension ? i.tension : o.valueOrDefault(a.lineTension, r.chart.options.elements.line.tension),
                        radius: i.radius ? i.radius : o.valueAtIndexOrDefault(a.pointRadius, e, l.radius),
                        backgroundColor: i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(a.pointBackgroundColor, e, l.backgroundColor),
                        borderColor: i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(a.pointBorderColor, e, l.borderColor),
                        borderWidth: i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(a.pointBorderWidth, e, l.borderWidth),
                        pointStyle: i.pointStyle ? i.pointStyle : o.valueAtIndexOrDefault(a.pointStyle, e, l.pointStyle),
                        hitRadius: i.hitRadius ? i.hitRadius : o.valueAtIndexOrDefault(a.pointHitRadius, e, l.hitRadius)
                    }
                }), t._model.skip = i.skip ? i.skip : isNaN(t._model.x) || isNaN(t._model.y)
            },
            updateBezierControlPoints: function() {
                var t = this.chart.chartArea,
                    e = this.getMeta();
                o.each(e.data, function(n, r) {
                    var i = n._model,
                        a = o.splineCurve(o.previousItem(e.data, r, !0)._model, i, o.nextItem(e.data, r, !0)._model, i.tension);
                    i.controlPointPreviousX = Math.max(Math.min(a.previous.x, t.right), t.left), i.controlPointPreviousY = Math.max(Math.min(a.previous.y, t.bottom), t.top), i.controlPointNextX = Math.max(Math.min(a.next.x, t.right), t.left), i.controlPointNextY = Math.max(Math.min(a.next.y, t.bottom), t.top), n.pivot()
                })
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t.custom || {},
                    r = t._index,
                    i = t._model;
                i.radius = n.hoverRadius ? n.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, r, this.chart.options.elements.point.hoverRadius), i.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, r, o.getHoverColor(i.backgroundColor)), i.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, r, o.getHoverColor(i.borderColor)), i.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, r, i.borderWidth)
            },
            removeHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t.custom || {},
                    r = t._index,
                    i = t._model,
                    a = this.chart.options.elements.point;
                i.radius = n.radius ? n.radius : o.valueAtIndexOrDefault(e.pointRadius, r, a.radius), i.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, r, a.backgroundColor), i.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, r, a.borderColor), i.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, r, a.borderWidth)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    n(1)._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        showLines: !1,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    }), t.exports = function(t) {
        t.controllers.scatter = t.controllers.line
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Bar = function(e, n) {
            return n.type = "bar", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Bubble = function(e, n) {
            return n.type = "bubble", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Doughnut = function(e, n) {
            return n.type = "doughnut", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Line = function(e, n) {
            return n.type = "line", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.PolarArea = function(e, n) {
            return n.type = "polarArea", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Radar = function(e, n) {
            return n.type = "radar", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Scatter = function(e, n) {
            return n.type = "scatter", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = {}, t.exports.filler = n(123), t.exports.legend = n(124), t.exports.title = n(125)
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r, i = t._model || {},
            o = i.fill;
        if (void 0 === o && (o = !!i.backgroundColor), !1 === o || null === o) return !1;
        if (!0 === o) return "origin";
        if (r = parseFloat(o, 10), isFinite(r) && Math.floor(r) === r) return "-" !== o[0] && "+" !== o[0] || (r = e + r), !(r === e || r < 0 || r >= n) && r;
        switch (o) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return o;
            default:
                return !1
        }
    }

    function i(t) {
        var e, n = t.el._model || {},
            r = t.el._scale || {},
            i = t.fill,
            o = null;
        if (isFinite(i)) return null;
        if ("start" === i ? o = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom : "end" === i ? o = void 0 === n.scaleTop ? r.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : r.getBasePosition ? o = r.getBasePosition() : r.getBasePixel && (o = r.getBasePixel()), void 0 !== o && null !== o) {
            if (void 0 !== o.x && void 0 !== o.y) return o;
            if ("number" === typeof o && isFinite(o)) return e = r.isHorizontal(), {
                x: e ? o : null,
                y: e ? null : o
            }
        }
        return null
    }

    function o(t, e, n) {
        var r, i = t[e],
            o = i.fill,
            a = [e];
        if (!n) return o;
        for (; !1 !== o && -1 === a.indexOf(o);) {
            if (!isFinite(o)) return o;
            if (!(r = t[o])) return !1;
            if (r.visible) return o;
            a.push(o), o = r.fill
        }
        return !1
    }

    function a(t) {
        var e = t.fill,
            n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), h[n](t))
    }

    function u(t) {
        return t && !t.skip
    }

    function l(t, e, n, r, i) {
        var o;
        if (r && i) {
            for (t.moveTo(e[0].x, e[0].y), o = 1; o < r; ++o) d.canvas.lineTo(t, e[o - 1], e[o]);
            for (t.lineTo(n[i - 1].x, n[i - 1].y), o = i - 1; o > 0; --o) d.canvas.lineTo(t, n[o], n[o - 1], !0)
        }
    }

    function s(t, e, n, r, i, o) {
        var a, s, c, f, d, h, p, g = e.length,
            v = r.spanGaps,
            m = [],
            y = [],
            b = 0,
            _ = 0;
        for (t.beginPath(), a = 0, s = g + !!o; a < s; ++a) c = a % g, f = e[c]._view, d = n(f, c, r), h = u(f), p = u(d), h && p ? (b = m.push(f), _ = y.push(d)) : b && _ && (v ? (h && m.push(f), p && y.push(d)) : (l(t, m, y, b, _), b = _ = 0, m = [], y = []));
        l(t, m, y, b, _), t.closePath(), t.fillStyle = i, t.fill()
    }
    var c = n(1),
        f = n(5),
        d = n(0);
    c._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var h = {
        dataset: function(t) {
            var e = t.fill,
                n = t.chart,
                r = n.getDatasetMeta(e),
                i = r && n.isDatasetVisible(e),
                o = i && r.dataset._children || [],
                a = o.length || 0;
            return a ? function(t, e) {
                return e < a && o[e]._view || null
            } : null
        },
        boundary: function(t) {
            var e = t.boundary,
                n = e ? e.x : null,
                r = e ? e.y : null;
            return function(t) {
                return {
                    x: null === n ? t.x : n,
                    y: null === r ? t.y : r
                }
            }
        }
    };
    t.exports = {
        id: "filler",
        afterDatasetsUpdate: function(t, e) {
            var n, u, l, s, c = (t.data.datasets || []).length,
                d = e.propagate,
                h = [];
            for (u = 0; u < c; ++u) n = t.getDatasetMeta(u), l = n.dataset, s = null, l && l._model && l instanceof f.Line && (s = {
                visible: t.isDatasetVisible(u),
                fill: r(l, u, c),
                chart: t,
                el: l
            }), n.$filler = s, h.push(s);
            for (u = 0; u < c; ++u)(s = h[u]) && (s.fill = o(h, u, d), s.boundary = i(s), s.mapper = a(s))
        },
        beforeDatasetDraw: function(t, e) {
            var n = e.meta.$filler;
            if (n) {
                var r = t.ctx,
                    i = n.el,
                    o = i._view,
                    a = i._children || [],
                    u = n.mapper,
                    l = o.backgroundColor || c.global.defaultColor;
                u && l && a.length && (d.canvas.clipArea(r, t.chartArea), s(r, a, u, o, l, i._loop), d.canvas.unclipArea(r))
            }
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
    }

    function i(t, e) {
        var n = new c({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        l.configure(t, n, e), l.addBox(t, n), t.legend = n
    }
    var o = n(1),
        a = n(2),
        u = n(0),
        l = n(8),
        s = u.noop;
    o._set("global", {
        legend: {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var n = e.datasetIndex,
                    r = this.chart,
                    i = r.getDatasetMeta(n);
                i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null, r.update()
            },
            onHover: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                    var e = t.data;
                    return u.isArray(e.datasets) ? e.datasets.map(function(e, n) {
                        return {
                            text: e.label,
                            fillStyle: u.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                            hidden: !t.isDatasetVisible(n),
                            lineCap: e.borderCapStyle,
                            lineDash: e.borderDash,
                            lineDashOffset: e.borderDashOffset,
                            lineJoin: e.borderJoinStyle,
                            lineWidth: e.borderWidth,
                            strokeStyle: e.borderColor,
                            pointStyle: e.pointStyle,
                            datasetIndex: n
                        }
                    }, this) : []
                }
            }
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
            return e.push("</ul>"), e.join("")
        }
    });
    var c = a.extend({
        initialize: function(t) {
            u.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
        },
        beforeUpdate: s,
        update: function(t, e, n) {
            var r = this;
            return r.beforeUpdate(), r.maxWidth = t, r.maxHeight = e, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: function() {
            var t = this,
                e = t.options.labels || {},
                n = u.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter(function(n) {
                return e.filter(n, t.chart.data)
            })), t.options.reverse && n.reverse(), t.legendItems = n
        },
        afterBuildLabels: s,
        beforeFit: s,
        fit: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = e.display,
                a = t.ctx,
                l = o.global,
                s = u.valueOrDefault,
                c = s(n.fontSize, l.defaultFontSize),
                f = s(n.fontStyle, l.defaultFontStyle),
                d = s(n.fontFamily, l.defaultFontFamily),
                h = u.fontString(c, f, d),
                p = t.legendHitBoxes = [],
                g = t.minSize,
                v = t.isHorizontal();
            if (v ? (g.width = t.maxWidth, g.height = i ? 10 : 0) : (g.width = i ? 10 : 0, g.height = t.maxHeight), i)
                if (a.font = h, v) {
                    var m = t.lineWidths = [0],
                        y = t.legendItems.length ? c + n.padding : 0;
                    a.textAlign = "left", a.textBaseline = "top", u.each(t.legendItems, function(e, i) {
                        var o = r(n, c),
                            u = o + c / 2 + a.measureText(e.text).width;
                        m[m.length - 1] + u + n.padding >= t.width && (y += c + n.padding, m[m.length] = t.left), p[i] = {
                            left: 0,
                            top: 0,
                            width: u,
                            height: c
                        }, m[m.length - 1] += u + n.padding
                    }), g.height += y
                } else {
                    var b = n.padding,
                        _ = t.columnWidths = [],
                        x = n.padding,
                        w = 0,
                        k = 0,
                        S = c + b;
                    u.each(t.legendItems, function(t, e) {
                        var i = r(n, c),
                            o = i + c / 2 + a.measureText(t.text).width;
                        k + S > g.height && (x += w + n.padding, _.push(w), w = 0, k = 0), w = Math.max(w, o), k += S, p[e] = {
                            left: 0,
                            top: 0,
                            width: o,
                            height: c
                        }
                    }), x += w, _.push(w), g.width += x
                }
            t.width = g.width, t.height = g.height
        },
        afterFit: s,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = o.global,
                a = i.elements.line,
                l = t.width,
                s = t.lineWidths;
            if (e.display) {
                var c, f = t.ctx,
                    d = u.valueOrDefault,
                    h = d(n.fontColor, i.defaultFontColor),
                    p = d(n.fontSize, i.defaultFontSize),
                    g = d(n.fontStyle, i.defaultFontStyle),
                    v = d(n.fontFamily, i.defaultFontFamily),
                    m = u.fontString(p, g, v);
                f.textAlign = "left", f.textBaseline = "middle", f.lineWidth = .5, f.strokeStyle = h, f.fillStyle = h, f.font = m;
                var y = r(n, p),
                    b = t.legendHitBoxes,
                    _ = function(t, n, r) {
                        if (!(isNaN(y) || y <= 0)) {
                            f.save(), f.fillStyle = d(r.fillStyle, i.defaultColor), f.lineCap = d(r.lineCap, a.borderCapStyle), f.lineDashOffset = d(r.lineDashOffset, a.borderDashOffset), f.lineJoin = d(r.lineJoin, a.borderJoinStyle), f.lineWidth = d(r.lineWidth, a.borderWidth), f.strokeStyle = d(r.strokeStyle, i.defaultColor);
                            var o = 0 === d(r.lineWidth, a.borderWidth);
                            if (f.setLineDash && f.setLineDash(d(r.lineDash, a.borderDash)), e.labels && e.labels.usePointStyle) {
                                var l = p * Math.SQRT2 / 2,
                                    s = l / Math.SQRT2,
                                    c = t + s,
                                    h = n + s;
                                u.canvas.drawPoint(f, r.pointStyle, l, c, h)
                            } else o || f.strokeRect(t, n, y, p), f.fillRect(t, n, y, p);
                            f.restore()
                        }
                    },
                    x = function(t, e, n, r) {
                        var i = p / 2,
                            o = y + i + t,
                            a = e + i;
                        f.fillText(n.text, o, a), n.hidden && (f.beginPath(), f.lineWidth = 2, f.moveTo(o, a), f.lineTo(o + r, a), f.stroke())
                    },
                    w = t.isHorizontal();
                c = w ? {
                    x: t.left + (l - s[0]) / 2,
                    y: t.top + n.padding,
                    line: 0
                } : {
                    x: t.left + n.padding,
                    y: t.top + n.padding,
                    line: 0
                };
                var k = p + n.padding;
                u.each(t.legendItems, function(e, r) {
                    var i = f.measureText(e.text).width,
                        o = y + p / 2 + i,
                        a = c.x,
                        u = c.y;
                    w ? a + o >= l && (u = c.y += k, c.line++, a = c.x = t.left + (l - s[c.line]) / 2) : u + k > t.bottom && (a = c.x = a + t.columnWidths[c.line] + n.padding, u = c.y = t.top + n.padding, c.line++), _(a, u, e), b[r].left = a, b[r].top = u, x(a, u, e, i), w ? c.x += o + n.padding : c.y += k
                })
            }
        },
        handleEvent: function(t) {
            var e = this,
                n = e.options,
                r = "mouseup" === t.type ? "click" : t.type,
                i = !1;
            if ("mousemove" === r) {
                if (!n.onHover) return
            } else {
                if ("click" !== r) return;
                if (!n.onClick) return
            }
            var o = t.x,
                a = t.y;
            if (o >= e.left && o <= e.right && a >= e.top && a <= e.bottom)
                for (var u = e.legendHitBoxes, l = 0; l < u.length; ++l) {
                    var s = u[l];
                    if (o >= s.left && o <= s.left + s.width && a >= s.top && a <= s.top + s.height) {
                        if ("click" === r) {
                            n.onClick.call(e, t.native, e.legendItems[l]), i = !0;
                            break
                        }
                        if ("mousemove" === r) {
                            n.onHover.call(e, t.native, e.legendItems[l]), i = !0;
                            break
                        }
                    }
                }
            return i
        }
    });
    t.exports = {
        id: "legend",
        _element: c,
        beforeInit: function(t) {
            var e = t.options.legend;
            e && i(t, e)
        },
        beforeUpdate: function(t) {
            var e = t.options.legend,
                n = t.legend;
            e ? (u.mergeIf(e, o.global.legend), n ? (l.configure(t, n, e), n.options = e) : i(t, e)) : n && (l.removeBox(t, n), delete t.legend)
        },
        afterEvent: function(t, e) {
            var n = t.legend;
            n && n.handleEvent(e)
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = new s({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        u.configure(t, n, e), u.addBox(t, n), t.titleBlock = n
    }
    var i = n(1),
        o = n(2),
        a = n(0),
        u = n(8),
        l = a.noop;
    i._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            lineHeight: 1.2,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var s = o.extend({
        initialize: function(t) {
            var e = this;
            a.extend(e, t), e.legendHitBoxes = []
        },
        beforeUpdate: l,
        update: function(t, e, n) {
            var r = this;
            return r.beforeUpdate(), r.maxWidth = t, r.maxHeight = e, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
        },
        afterUpdate: l,
        beforeSetDimensions: l,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: l,
        beforeBuildLabels: l,
        buildLabels: l,
        afterBuildLabels: l,
        beforeFit: l,
        fit: function() {
            var t = this,
                e = a.valueOrDefault,
                n = t.options,
                r = n.display,
                o = e(n.fontSize, i.global.defaultFontSize),
                u = t.minSize,
                l = a.isArray(n.text) ? n.text.length : 1,
                s = a.options.toLineHeight(n.lineHeight, o),
                c = r ? l * s + 2 * n.padding : 0;
            t.isHorizontal() ? (u.width = t.maxWidth, u.height = c) : (u.width = c, u.height = t.maxHeight), t.width = u.width, t.height = u.height
        },
        afterFit: l,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function() {
            var t = this,
                e = t.ctx,
                n = a.valueOrDefault,
                r = t.options,
                o = i.global;
            if (r.display) {
                var u, l, s, c = n(r.fontSize, o.defaultFontSize),
                    f = n(r.fontStyle, o.defaultFontStyle),
                    d = n(r.fontFamily, o.defaultFontFamily),
                    h = a.fontString(c, f, d),
                    p = a.options.toLineHeight(r.lineHeight, c),
                    g = p / 2 + r.padding,
                    v = 0,
                    m = t.top,
                    y = t.left,
                    b = t.bottom,
                    _ = t.right;
                e.fillStyle = n(r.fontColor, o.defaultFontColor), e.font = h, t.isHorizontal() ? (l = y + (_ - y) / 2, s = m + g, u = _ - y) : (l = "left" === r.position ? y + g : _ - g, s = m + (b - m) / 2, u = b - m, v = Math.PI * ("left" === r.position ? -.5 : .5)), e.save(), e.translate(l, s), e.rotate(v), e.textAlign = "center", e.textBaseline = "middle";
                var x = r.text;
                if (a.isArray(x))
                    for (var w = 0, k = 0; k < x.length; ++k) e.fillText(x[k], 0, w, u), w += p;
                else e.fillText(x, 0, 0, u);
                e.restore()
            }
        }
    });
    t.exports = {
        id: "title",
        _element: s,
        beforeInit: function(t) {
            var e = t.options.title;
            e && r(t, e)
        },
        beforeUpdate: function(t) {
            var e = t.options.title,
                n = t.titleBlock;
            e ? (a.mergeIf(e, i.global.title), n ? (u.configure(t, n, e), n.options = e) : r(t, e)) : n && (u.removeBox(t, n), delete t.titleBlock)
        }
    }
}, function(t, e, n) {
    function r(t, e) {
        return i(t, e)
    }
    var i = n(25);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r, v, y) {
        var b = s(t),
            _ = s(e),
            x = b ? p : l(t),
            w = _ ? p : l(e);
        x = x == h ? g : x, w = w == h ? g : w;
        var k = x == g,
            S = w == g,
            C = x == w;
        if (C && c(t)) {
            if (!c(e)) return !1;
            b = !0, k = !1
        }
        if (C && !k) return y || (y = new i), b || f(t) ? o(t, e, n, r, v, y) : a(t, e, x, n, r, v, y);
        if (!(n & d)) {
            var M = k && m.call(t, "__wrapped__"),
                T = S && m.call(e, "__wrapped__");
            if (M || T) {
                var D = M ? t.value() : t,
                    P = T ? e.value() : e;
                return y || (y = new i), v(D, P, n, r, y)
            }
        }
        return !!C && (y || (y = new i), u(t, e, n, r, v, y))
    }
    var i = n(41),
        o = n(46),
        a = n(161),
        u = n(165),
        l = n(183),
        s = n(4),
        c = n(48),
        f = n(50),
        d = 1,
        h = "[object Arguments]",
        p = "[object Array]",
        g = "[object Object]",
        v = Object.prototype,
        m = v.hasOwnProperty;
    t.exports = r
}, function(t, e) {
    function n() {
        this.__data__ = [], this.size = 0
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__,
            n = i(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0)
    }
    var i = n(15),
        o = Array.prototype,
        a = o.splice;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__,
            n = i(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
    var i = n(15);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return i(this.__data__, t) > -1
    }
    var i = n(15);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__,
            r = i(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
    }
    var i = n(15);
    t.exports = r
}, function(t, e, n) {
    function r() {
        this.__data__ = new i, this.size = 0
    }
    var i = n(14);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        return this.__data__.get(t)
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        return this.__data__.has(t)
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        if (n instanceof i) {
            var r = n.__data__;
            if (!o || r.length < u - 1) return r.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new a(r)
        }
        return n.set(t, e), this.size = n.size, this
    }
    var i = n(14),
        o = n(26),
        a = n(27),
        u = 200;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return !(!a(t) || o(t)) && (i(t) ? p : s).test(u(t))
    }
    var i = n(43),
        o = n(141),
        a = n(17),
        u = n(45),
        l = /[\\^$.*+?()[\]{}|]/g,
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        f = Object.prototype,
        d = c.toString,
        h = f.hasOwnProperty,
        p = RegExp("^" + d.call(h).replace(l, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = a.call(t, l),
            n = t[l];
        try {
            t[l] = void 0;
            var r = !0
        } catch (t) {}
        var i = u.call(t);
        return r && (e ? t[l] = n : delete t[l]), i
    }
    var i = n(16),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.toString,
        l = i ? i.toStringTag : void 0;
    t.exports = r
}, function(t, e) {
    function n(t) {
        return i.call(t)
    }
    var r = Object.prototype,
        i = r.toString;
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return !!o && o in t
    }
    var i = n(142),
        o = function() {
            var t = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
    t.exports = r
}, function(t, e, n) {
    var r = n(3),
        i = r["__core-js_shared__"];
    t.exports = i
}, function(t, e) {
    function n(t, e) {
        return null == t ? void 0 : t[e]
    }
    t.exports = n
}, function(t, e, n) {
    function r() {
        this.size = 0, this.__data__ = {
            hash: new i,
            map: new(a || o),
            string: new i
        }
    }
    var i = n(145),
        o = n(14),
        a = n(26);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var i = n(146),
        o = n(147),
        a = n(148),
        u = n(149),
        l = n(150);
    r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = l, t.exports = r
}, function(t, e, n) {
    function r() {
        this.__data__ = i ? i(null) : {}, this.size = 0
    }
    var i = n(18);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__;
        if (i) {
            var n = e[t];
            return n === o ? void 0 : n
        }
        return u.call(e, t) ? e[t] : void 0
    }
    var i = n(18),
        o = "__lodash_hash_undefined__",
        a = Object.prototype,
        u = a.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = this.__data__;
        return i ? void 0 !== e[t] : a.call(e, t)
    }
    var i = n(18),
        o = Object.prototype,
        a = o.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = i && void 0 === e ? o : e, this
    }
    var i = n(18),
        o = "__lodash_hash_undefined__";
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = i(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var i = n(19);
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return i(this, t).get(t)
    }
    var i = n(19);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return i(this, t).has(t)
    }
    var i = n(19);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        var n = i(this, t),
            r = n.size;
        return n.set(t, e), this.size += n.size == r ? 0 : 1, this
    }
    var i = n(19);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new i; ++e < n;) this.add(t[e])
    }
    var i = n(27),
        o = n(157),
        a = n(158);
    r.prototype.add = r.prototype.push = o, r.prototype.has = a, t.exports = r
}, function(t, e) {
    function n(t) {
        return this.__data__.set(t, r), this
    }
    var r = "__lodash_hash_undefined__";
    t.exports = n
}, function(t, e) {
    function n(t) {
        return this.__data__.has(t)
    }
    t.exports = n
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
    t.exports = n
}, function(t, e) {
    function n(t, e) {
        return t.has(e)
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, r, i, k, C) {
        switch (n) {
            case w:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case x:
                return !(t.byteLength != e.byteLength || !k(new o(t), new o(e)));
            case d:
            case h:
            case v:
                return a(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case m:
            case b:
                return t == e + "";
            case g:
                var M = l;
            case y:
                var T = r & c;
                if (M || (M = s), t.size != e.size && !T) return !1;
                var D = C.get(t);
                if (D) return D == e;
                r |= f, C.set(t, e);
                var P = u(M(t), M(e), r, i, k, C);
                return C.delete(t), P;
            case _:
                if (S) return S.call(t) == S.call(e)
        }
        return !1
    }
    var i = n(16),
        o = n(162),
        a = n(42),
        u = n(46),
        l = n(163),
        s = n(164),
        c = 1,
        f = 2,
        d = "[object Boolean]",
        h = "[object Date]",
        p = "[object Error]",
        g = "[object Map]",
        v = "[object Number]",
        m = "[object RegExp]",
        y = "[object Set]",
        b = "[object String]",
        _ = "[object Symbol]",
        x = "[object ArrayBuffer]",
        w = "[object DataView]",
        k = i ? i.prototype : void 0,
        S = k ? k.valueOf : void 0;
    t.exports = r
}, function(t, e, n) {
    var r = n(3),
        i = r.Uint8Array;
    t.exports = i
}, function(t, e) {
    function n(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }), n
    }
    t.exports = n
}, function(t, e) {
    function n(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, r, a, l) {
        var s = n & o,
            c = i(t),
            f = c.length;
        if (f != i(e).length && !s) return !1;
        for (var d = f; d--;) {
            var h = c[d];
            if (!(s ? h in e : u.call(e, h))) return !1
        }
        var p = l.get(t);
        if (p && l.get(e)) return p == e;
        var g = !0;
        l.set(t, e), l.set(e, t);
        for (var v = s; ++d < f;) {
            h = c[d];
            var m = t[h],
                y = e[h];
            if (r) var b = s ? r(y, m, h, e, t, l) : r(m, y, h, t, e, l);
            if (!(void 0 === b ? m === y || a(m, y, n, r, l) : b)) {
                g = !1;
                break
            }
            v || (v = "constructor" == h)
        }
        if (g && !v) {
            var _ = t.constructor,
                x = e.constructor;
            _ != x && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof x && x instanceof x) && (g = !1)
        }
        return l.delete(t), l.delete(e), g
    }
    var i = n(166),
        o = 1,
        a = Object.prototype,
        u = a.hasOwnProperty;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return i(t, a, o)
    }
    var i = n(167),
        o = n(169),
        a = n(20);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        var r = e(t);
        return o(t) ? r : i(r, n(t))
    }
    var i = n(168),
        o = n(4);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(170),
        i = n(171),
        o = Object.prototype,
        a = o.propertyIsEnumerable,
        u = Object.getOwnPropertySymbols,
        l = u ? function(t) {
            return null == t ? [] : (t = Object(t), r(u(t), function(e) {
                return a.call(t, e)
            }))
        } : i;
    t.exports = l
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
    t.exports = n
}, function(t, e) {
    function n() {
        return []
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        var n = a(t),
            r = !n && o(t),
            c = !n && !r && u(t),
            d = !n && !r && !c && s(t),
            h = n || r || c || d,
            p = h ? i(t.length, String) : [],
            g = p.length;
        for (var v in t) !e && !f.call(t, v) || h && ("length" == v || c && ("offset" == v || "parent" == v) || d && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || l(v, g)) || p.push(v);
        return p
    }
    var i = n(173),
        o = n(47),
        a = n(4),
        u = n(48),
        l = n(49),
        s = n(50),
        c = Object.prototype,
        f = c.hasOwnProperty;
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return o(t) && i(t) == a
    }
    var i = n(10),
        o = n(11),
        a = "[object Arguments]";
    t.exports = r
}, function(t, e) {
    function n() {
        return !1
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return a(t) && o(t.length) && !!u[i(t)]
    }
    var i = n(10),
        o = n(28),
        a = n(11),
        u = {};
    u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = r
}, function(t, e) {
    function n(t) {
        return function(e) {
            return t(e)
        }
    }
    t.exports = n
}, function(t, e, n) {
    (function(t) {
        var r = n(44),
            i = "object" == typeof e && e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i,
            u = a && r.process,
            l = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || u && u.binding && u.binding("util")
                } catch (t) {}
            }();
        t.exports = l
    }).call(e, n(12)(t))
}, function(t, e, n) {
    function r(t) {
        if (!i(t)) return o(t);
        var e = [];
        for (var n in Object(t)) u.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
    var i = n(180),
        o = n(181),
        a = Object.prototype,
        u = a.hasOwnProperty;
    t.exports = r
}, function(t, e) {
    function n(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
    }
    var r = Object.prototype;
    t.exports = n
}, function(t, e, n) {
    var r = n(182),
        i = r(Object.keys, Object);
    t.exports = i
}, function(t, e) {
    function n(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(184),
        i = n(26),
        o = n(185),
        a = n(186),
        u = n(187),
        l = n(10),
        s = n(45),
        c = s(r),
        f = s(i),
        d = s(o),
        h = s(a),
        p = s(u),
        g = l;
    (r && "[object DataView]" != g(new r(new ArrayBuffer(1))) || i && "[object Map]" != g(new i) || o && "[object Promise]" != g(o.resolve()) || a && "[object Set]" != g(new a) || u && "[object WeakMap]" != g(new u)) && (g = function(t) {
        var e = l(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case c:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case h:
                return "[object Set]";
            case p:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = g
}, function(t, e, n) {
    var r = n(6),
        i = n(3),
        o = r(i, "DataView");
    t.exports = o
}, function(t, e, n) {
    var r = n(6),
        i = n(3),
        o = r(i, "Promise");
    t.exports = o
}, function(t, e, n) {
    var r = n(6),
        i = n(3),
        o = r(i, "Set");
    t.exports = o
}, function(t, e, n) {
    var r = n(6),
        i = n(3),
        o = r(i, "WeakMap");
    t.exports = o
}, function(t, e, n) {
    var r = n(189),
        i = n(208),
        o = r(i);
    t.exports = o
}, function(t, e, n) {
    function r(t) {
        return function(e, n, r) {
            var u = Object(e);
            if (!o(e)) {
                var l = i(n, 3);
                e = a(e), n = function(t) {
                    return l(u[t], t, u)
                }
            }
            var s = t(e, n, r);
            return s > -1 ? u[l ? e[s] : s] : void 0
        }
    }
    var i = n(30),
        o = n(29),
        a = n(20);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        var e = o(t);
        return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(n) {
            return n === t || i(n, t, e)
        }
    }
    var i = n(191),
        o = n(192),
        a = n(52);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n, r) {
        var l = n.length,
            s = l,
            c = !r;
        if (null == t) return !s;
        for (t = Object(t); l--;) {
            var f = n[l];
            if (c && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1
        }
        for (; ++l < s;) {
            f = n[l];
            var d = f[0],
                h = t[d],
                p = f[1];
            if (c && f[2]) {
                if (void 0 === h && !(d in t)) return !1
            } else {
                var g = new i;
                if (r) var v = r(h, p, d, t, e, g);
                if (!(void 0 === v ? o(p, h, a | u, r, g) : v)) return !1
            }
        }
        return !0
    }
    var i = n(41),
        o = n(25),
        a = 1,
        u = 2;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        for (var e = o(t), n = e.length; n--;) {
            var r = e[n],
                a = t[r];
            e[n] = [r, a, i(a)]
        }
        return e
    }
    var i = n(51),
        o = n(20);
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        return u(t) && l(e) ? s(c(t), e) : function(n) {
            var r = o(n, t);
            return void 0 === r && r === e ? a(n, t) : i(e, r, f | d)
        }
    }
    var i = n(25),
        o = n(194),
        a = n(201),
        u = n(31),
        l = n(51),
        s = n(52),
        c = n(22),
        f = 1,
        d = 2;
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        var r = null == t ? void 0 : i(t, e);
        return void 0 === r ? n : r
    }
    var i = n(53);
    t.exports = r
}, function(t, e, n) {
    var r = n(196),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function(t, e, n) {
    function r(t) {
        var e = i(t, function(t) {
                return n.size === o && n.clear(), t
            }),
            n = e.cache;
        return e
    }
    var i = n(197),
        o = 500;
    t.exports = r
}, function(t, e, n) {
    function r(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(r.Cache || i), n
    }
    var i = n(27),
        o = "Expected a function";
    r.Cache = i, t.exports = r
}, function(t, e, n) {
    function r(t) {
        return null == t ? "" : i(t)
    }
    var i = n(199);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return o(t, r) + "";
        if (u(t)) return c ? c.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -l ? "-0" : e
    }
    var i = n(16),
        o = n(200),
        a = n(4),
        u = n(21),
        l = 1 / 0,
        s = i ? i.prototype : void 0,
        c = s ? s.toString : void 0;
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        return null != t && o(t, e, i)
    }
    var i = n(202),
        o = n(203);
    t.exports = r
}, function(t, e) {
    function n(t, e) {
        return null != t && e in Object(t)
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n) {
        e = i(e, t);
        for (var r = -1, c = e.length, f = !1; ++r < c;) {
            var d = s(e[r]);
            if (!(f = null != t && n(t, d))) break;
            t = t[d]
        }
        return f || ++r != c ? f : !!(c = null == t ? 0 : t.length) && l(c) && u(d, c) && (a(t) || o(t))
    }
    var i = n(54),
        o = n(47),
        a = n(4),
        u = n(49),
        l = n(28),
        s = n(22);
    t.exports = r
}, function(t, e) {
    function n(t) {
        return t
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return a(t) ? i(u(t)) : o(t)
    }
    var i = n(206),
        o = n(207),
        a = n(31),
        u = n(22);
    t.exports = r
}, function(t, e) {
    function n(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        return function(e) {
            return i(e, t)
        }
    }
    var i = n(53);
    t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        var r = null == t ? 0 : t.length;
        if (!r) return -1;
        var l = null == n ? 0 : a(n);
        return l < 0 && (l = u(r + l, 0)), i(t, o(e, 3), l)
    }
    var i = n(209),
        o = n(30),
        a = n(210),
        u = Math.max;
    t.exports = r
}, function(t, e) {
    function n(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
    t.exports = n
}, function(t, e, n) {
    function r(t) {
        var e = i(t),
            n = e % 1;
        return e === e ? n ? e - n : e : 0
    }
    var i = n(211);
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        if (!t) return 0 === t ? t : 0;
        if ((t = i(t)) === o || t === -o) {
            return (t < 0 ? -1 : 1) * a
        }
        return t === t ? t : 0
    }
    var i = n(212),
        o = 1 / 0,
        a = 1.7976931348623157e308;
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        if ("number" == typeof t) return t;
        if (o(t)) return a;
        if (i(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(u, "");
        var n = s.test(t);
        return n || c.test(t) ? f(t.slice(2), n ? 2 : 8) : l.test(t) ? a : +t
    }
    var i = n(17),
        o = n(21),
        a = NaN,
        u = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = r
}, function(t, e, n) {
    var r = n(214),
        i = n(216),
        o = i(function(t, e, n) {
            r(t, n, e)
        });
    t.exports = o
}, function(t, e, n) {
    function r(t, e, n) {
        "__proto__" == e && i ? i(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
    var i = n(215);
    t.exports = r
}, function(t, e, n) {
    var r = n(6),
        i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function(t, e, n) {
    function r(t, e) {
        return function(n, r) {
            var l = u(n) ? i : o,
                s = e ? e() : {};
            return l(n, t, a(r, 2), s)
        }
    }
    var i = n(217),
        o = n(218),
        a = n(30),
        u = n(4);
    t.exports = r
}, function(t, e) {
    function n(t, e, n, r) {
        for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
            var a = t[i];
            e(r, a, n(a), t)
        }
        return r
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e, n, r) {
        return i(t, function(t, i, o) {
            e(r, t, n(t), o)
        }), r
    }
    var i = n(219);
    t.exports = r
}, function(t, e, n) {
    var r = n(220),
        i = n(223),
        o = i(r);
    t.exports = o
}, function(t, e, n) {
    function r(t, e) {
        return t && i(t, e, o)
    }
    var i = n(221),
        o = n(20);
    t.exports = r
}, function(t, e, n) {
    var r = n(222),
        i = r();
    t.exports = i
}, function(t, e) {
    function n(t) {
        return function(e, n, r) {
            for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var l = a[t ? u : ++i];
                if (!1 === n(o[l], l, o)) break
            }
            return e
        }
    }
    t.exports = n
}, function(t, e, n) {
    function r(t, e) {
        return function(n, r) {
            if (null == n) return n;
            if (!i(n)) return t(n, r);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== r(u[a], a, u););
            return n
        }
    }
    var i = n(29);
    t.exports = r
}, function(t, e) {
    t.exports = [{
        currency: "AED",
        country: "United Arab Emirates Dirham"
    }, {
        currency: "AFN",
        country: "Afghan Afghani"
    }, {
        currency: "ALL",
        country: "Albanian Lek"
    }, {
        currency: "AMD",
        country: "Armenian Dram"
    }, {
        currency: "ANG",
        country: "Netherlands Antillean Guilder"
    }, {
        currency: "AOA",
        country: "Angolan Kwanza"
    }, {
        currency: "ARS",
        country: "Argentine Peso"
    }, {
        currency: "AUD",
        country: "Australian Dollar"
    }, {
        currency: "AWG",
        country: "Aruban Florin"
    }, {
        currency: "AZN",
        country: "Azerbaijani Manat"
    }, {
        currency: "BAM",
        country: "Bosnia-Herzegovina Convertible Mark"
    }, {
        currency: "BBD",
        country: "Barbadian Dollar"
    }, {
        currency: "BDT",
        country: "Bangladeshi Taka"
    }, {
        currency: "BGN",
        country: "Bulgarian Lev"
    }, {
        currency: "BHD",
        country: "Bahraini Dinar"
    }, {
        currency: "BIF",
        country: "Burundian Franc"
    }, {
        currency: "BMD",
        country: "Bermudan Dollar"
    }, {
        currency: "BND",
        country: "Brunei Dollar"
    }, {
        currency: "BOB",
        country: "Bolivian Boliviano"
    }, {
        currency: "BRL",
        country: "Brazilian Real"
    }, {
        currency: "BSD",
        country: "Bahamian Dollar"
    }, {
        currency: "BTC",
        country: "Bitcoin"
    }, {
        currency: "BTN",
        country: "Bhutanese Ngultrum"
    }, {
        currency: "BWP",
        country: "Botswanan Pula"
    }, {
        currency: "BYR",
        country: "Belarusian Ruble"
    }, {
        currency: "BZD",
        country: "Belize Dollar"
    }, {
        currency: "CAD",
        country: "Canadian Dollar"
    }, {
        currency: "CDF",
        country: "Congolese Franc"
    }, {
        currency: "CHF",
        country: "Swiss Franc"
    }, {
        currency: "CLF",
        country: "Chilean Unit of Account (UF)"
    }, {
        currency: "CLP",
        country: "Chilean Peso"
    }, {
        currency: "CNY",
        country: "Chinese Yuan"
    }, {
        currency: "COP",
        country: "Colombian Peso"
    }, {
        currency: "CRC",
        country: "Costa Rican Col\xf3n"
    }, {
        currency: "CUP",
        country: "Cuban Peso"
    }, {
        currency: "CVE",
        country: "Cape Verdean Escudo"
    }, {
        currency: "CZK",
        country: "Czech Republic Koruna"
    }, {
        currency: "DJF",
        country: "Djiboutian Franc"
    }, {
        currency: "DKK",
        country: "Danish Krone"
    }, {
        currency: "DOP",
        country: "Dominican Peso"
    }, {
        currency: "DZD",
        country: "Algerian Dinar"
    }, {
        currency: "EEK",
        country: "Estonian Kroon"
    }, {
        currency: "EGP",
        country: "Egyptian Pound"
    }, {
        currency: "ERN",
        country: "Eritrean Nnakfa"
    }, {
        currency: "ETB",
        country: "Ethiopian Birr"
    }, {
        currency: "EUR",
        country: "Euro"
    }, {
        currency: "FJD",
        country: "Fijian Dollar"
    }, {
        currency: "FKP",
        country: "Falkland Islands Pound"
    }, {
        currency: "GBP",
        country: "British Pound Sterling"
    }, {
        currency: "GEL",
        country: "Georgian Lari"
    }, {
        currency: "GHS",
        country: "Ghanaian Cedi"
    }, {
        currency: "GIP",
        country: "Gibraltar Pound"
    }, {
        currency: "GMD",
        country: "Gambian Dalasi"
    }, {
        currency: "GNF",
        country: "Guinean Franc"
    }, {
        currency: "GTQ",
        country: "Guatemalan Quetzal"
    }, {
        currency: "GYD",
        country: "Guyanaese Dollar"
    }, {
        currency: "HKD",
        country: "Hong Kong Dollar"
    }, {
        currency: "HNL",
        country: "Honduran Lempira"
    }, {
        currency: "HRK",
        country: "Croatian Kuna"
    }, {
        currency: "HTG",
        country: "Haitian Gourde"
    }, {
        currency: "HUF",
        country: "Hungarian Forint"
    }, {
        currency: "IDR",
        country: "Indonesian Rupiah"
    }, {
        currency: "ILS",
        country: "Israeli New Sheqel"
    }, {
        currency: "INR",
        country: "Indian Rupee"
    }, {
        currency: "IQD",
        country: "Iraqi Dinar"
    }, {
        currency: "IRR",
        country: "Iranian Rial"
    }, {
        currency: "ISK",
        country: "Icelandic Kr\xf3na"
    }, {
        currency: "JEP",
        country: "Jersey Pound"
    }, {
        currency: "JMD",
        country: "Jamaican Dollar"
    }, {
        currency: "JOD",
        country: "Jordanian Dinar"
    }, {
        currency: "JPY",
        country: "Japanese Yen"
    }, {
        currency: "KES",
        country: "Kenyan Shilling"
    }, {
        currency: "KGS",
        country: "Kyrgystani Som"
    }, {
        currency: "KHR",
        country: "Cambodian Riel"
    }, {
        currency: "KMF",
        country: "Comorian Franc"
    }, {
        currency: "KPW",
        country: "North Korean Won"
    }, {
        currency: "KRW",
        country: "South Korean Won"
    }, {
        currency: "KWD",
        country: "Kuwaiti Dinar"
    }, {
        currency: "KYD",
        country: "Cayman Islands Dollar"
    }, {
        currency: "KZT",
        country: "Kazakhstani Tenge"
    }, {
        currency: "LAK",
        country: "Laotian Kip"
    }, {
        currency: "LBP",
        country: "Lebanese Pound"
    }, {
        currency: "LKR",
        country: "Sri Lankan Rupee"
    }, {
        currency: "LRD",
        country: "Liberian Dollar"
    }, {
        currency: "LSL",
        country: "Lesotho Loti"
    }, {
        currency: "LTL",
        country: "Lithuanian Litas"
    }, {
        currency: "LVL",
        country: "Latvian Lats"
    }, {
        currency: "LYD",
        country: "Libyan Dinar"
    }, {
        currency: "MAD",
        country: "Moroccan Dirham"
    }, {
        currency: "MDL",
        country: "Moldovan Leu"
    }, {
        currency: "MGA",
        country: "Malagasy Ariary"
    }, {
        currency: "MKD",
        country: "Macedonian Denar"
    }, {
        currency: "MMK",
        country: "Myanma Kyat"
    }, {
        currency: "MNT",
        country: "Mongolian Tugrik"
    }, {
        currency: "MOP",
        country: "Macanese Pataca"
    }, {
        currency: "MRO",
        country: "Mauritanian Ouguiya"
    }, {
        currency: "MTL",
        country: "Maltese Lira"
    }, {
        currency: "MUR",
        country: "Mauritian Rupee"
    }, {
        currency: "MVR",
        country: "Maldivian Rufiyaa"
    }, {
        currency: "MWK",
        country: "Malawian Kwacha"
    }, {
        currency: "MXN",
        country: "Mexican Peso"
    }, {
        currency: "MYR",
        country: "Malaysian Ringgit"
    }, {
        currency: "MZN",
        country: "Mozambican Metical"
    }, {
        currency: "NAD",
        country: "Namibian Dollar"
    }, {
        currency: "NGN",
        country: "Nigerian Naira"
    }, {
        currency: "NIO",
        country: "Nicaraguan C\xf3rdoba"
    }, {
        currency: "NOK",
        country: "Norwegian Krone"
    }, {
        currency: "NPR",
        country: "Nepalese Rupee"
    }, {
        currency: "NZD",
        country: "New Zealand Dollar"
    }, {
        currency: "OMR",
        country: "Omani Rial"
    }, {
        currency: "PAB",
        country: "Panamanian Balboa"
    }, {
        currency: "PEN",
        country: "Peruvian Nuevo Sol"
    }, {
        currency: "PGK",
        country: "Papua New Guinean Kina"
    }, {
        currency: "PHP",
        country: "Philippine Peso"
    }, {
        currency: "PKR",
        country: "Pakistani Rupee"
    }, {
        currency: "PLN",
        country: "Polish Zloty"
    }, {
        currency: "PYG",
        country: "Paraguayan Guarani"
    }, {
        currency: "QAR",
        country: "Qatari Rial"
    }, {
        currency: "RON",
        country: "Romanian Leu"
    }, {
        currency: "RSD",
        country: "Serbian Dinar"
    }, {
        currency: "RUB",
        country: "Russian Ruble"
    }, {
        currency: "RWF",
        country: "Rwandan Franc"
    }, {
        currency: "SAR",
        country: "Saudi Riyal"
    }, {
        currency: "SBD",
        country: "Solomon Islands Dollar"
    }, {
        currency: "SCR",
        country: "Seychellois Rupee"
    }, {
        currency: "SDG",
        country: "Sudanese Pound"
    }, {
        currency: "SEK",
        country: "Swedish Krona"
    }, {
        currency: "SGD",
        country: "Singapore Dollar"
    }, {
        currency: "SHP",
        country: "Saint Helena Pound"
    }, {
        currency: "SLL",
        country: "Sierra Leonean Leone"
    }, {
        currency: "SOS",
        country: "Somali Shilling"
    }, {
        currency: "SRD",
        country: "Surinamese Dollar"
    }, {
        currency: "STD",
        country: "S\xe3o Tom\xe9 and Pr\xedncipe Dobra"
    }, {
        currency: "SVC",
        country: "Salvadoran Col\xf3n"
    }, {
        currency: "SYP",
        country: "Syrian Pound"
    }, {
        currency: "SZL",
        country: "Swazi Lilangeni"
    }, {
        currency: "THB",
        country: "Thai Baht"
    }, {
        currency: "TJS",
        country: "Tajikistani Somoni"
    }, {
        currency: "TMT",
        country: "Turkmenistani Manat"
    }, {
        currency: "TND",
        country: "Tunisian Dinar"
    }, {
        currency: "TOP",
        country: "Tongan Pa?anga"
    }, {
        currency: "TRY",
        country: "Turkish Lira"
    }, {
        currency: "TTD",
        country: "Trinidad and Tobago Dollar"
    }, {
        currency: "TWD",
        country: "New Taiwan Dollar"
    }, {
        currency: "TZS",
        country: "Tanzanian Shilling"
    }, {
        currency: "UAH",
        country: "Ukrainian Hryvnia"
    }, {
        currency: "UGX",
        country: "Ugandan Shilling"
    }, {
        currency: "USD",
        country: "United States Dollar"
    }, {
        currency: "UYU",
        country: "Uruguayan Peso"
    }, {
        currency: "UZS",
        country: "Uzbekistan Som"
    }, {
        currency: "VEF",
        country: "Venezuelan Bol\xedvar Fuerte"
    }, {
        currency: "VND",
        country: "Vietnamese Dong"
    }, {
        currency: "VUV",
        country: "Vanuatu Vatu"
    }, {
        currency: "WST",
        country: "Samoan Tala"
    }, {
        currency: "XAF",
        country: "CFA Franc BEAC"
    }, {
        currency: "XAG",
        country: "Silver (troy ounce)"
    }, {
        currency: "XAU",
        country: "Gold (troy ounce)"
    }, {
        currency: "XBT",
        country: "Bitcoin"
    }, {
        currency: "XCD",
        country: "East Caribbean Dollar"
    }, {
        currency: "XDR",
        country: "Special Drawing Rights"
    }, {
        currency: "XOF",
        country: "CFA Franc BCEAO"
    }, {
        currency: "XPF",
        country: "CFP Franc"
    }, {
        currency: "YER",
        country: "Yemeni Rial"
    }, {
        currency: "ZAR",
        country: "South African Rand"
    }, {
        currency: "ZMK",
        country: "Zambian Kwacha (pre-2013)"
    }, {
        currency: "ZMW",
        country: "Zambian Kwacha"
    }, {
        currency: "ZWL",
        country: "Zimbabwean Dollar"
    }]
}, function(t, e, n) {
    "use strict";

    function r() {
        if ("serviceWorker" in navigator) {
            if (new URL("", window.location).origin !== window.location.origin) return;
            window.addEventListener("load", function() {
                var t = "/service-worker.js";
                a ? o(t) : i(t)
            })
        }
    }

    function i(t) {
        navigator.serviceWorker.register(t).then(function(t) {
            t.onupdatefound = function() {
                var e = t.installing;
                e.onstatechange = function() {
                    "installed" === e.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
                }
            }
        }).catch(function(t) {
            console.error("Error during service worker registration:", t)
        })
    }

    function o(t) {
        fetch(t).then(function(e) {
            404 === e.status || -1 === e.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then(function(t) {
                t.unregister().then(function() {
                    window.location.reload()
                })
            }) : i(t)
        }).catch(function() {
            console.log("No internet connection found. App is running in offline mode.")
        })
    }
    e.a = r;
    var a = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))
}]);
//# sourceMappingURL=bitcoin-price-index.js.map