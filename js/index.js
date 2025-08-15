(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function as(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function cs(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Re(r) ? Xl(r) : cs(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else {
    if (Re(e)) return e;
    if (ve(e)) return e;
  }
}
const Kl = /;(?![^(]*\))/g,
  ql = /:([^]+)/,
  Gl = /\/\*.*?\*\//gs;
function Xl(e) {
  const t = {};
  return (
    e
      .replace(Gl, "")
      .split(Kl)
      .forEach((n) => {
        if (n) {
          const r = n.split(ql);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function us(e) {
  let t = "";
  if (Re(e)) t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const r = us(e[n]);
      r && (t += r + " ");
    }
  else if (ve(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const zl =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Yl = as(zl);
function mi(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = rr(e[r], t[r]);
  return n;
}
function rr(e, t) {
  if (e === t) return !0;
  let n = Vs(e),
    r = Vs(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = wn(e)), (r = wn(t)), n || r)) return e === t;
  if (((n = q(e)), (r = q(t)), n || r)) return n && r ? Jl(e, t) : !1;
  if (((n = ve(e)), (r = ve(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      o = Object.keys(t).length;
    if (s !== o) return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        a = t.hasOwnProperty(i);
      if ((l && !a) || (!l && a) || !rr(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function Ql(e, t) {
  return e.findIndex((n) => rr(n, t));
}
const oe = (e) =>
    Re(e)
      ? e
      : e == null
      ? ""
      : q(e) || (ve(e) && (e.toString === gi || !J(e.toString)))
      ? JSON.stringify(e, hi, 2)
      : String(e),
  hi = (e, t) =>
    t && t.__v_isRef
      ? hi(e, t.value)
      : en(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : or(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ve(t) && !q(t) && !_i(t)
      ? String(t)
      : t,
  ye = {},
  Zt = [],
  st = () => {},
  Zl = () => !1,
  ea = /^on[^a-z]/,
  sr = (e) => ea.test(e),
  fs = (e) => e.startsWith("onUpdate:"),
  De = Object.assign,
  ds = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  ta = Object.prototype.hasOwnProperty,
  se = (e, t) => ta.call(e, t),
  q = Array.isArray,
  en = (e) => In(e) === "[object Map]",
  or = (e) => In(e) === "[object Set]",
  Vs = (e) => In(e) === "[object Date]",
  J = (e) => typeof e == "function",
  Re = (e) => typeof e == "string",
  wn = (e) => typeof e == "symbol",
  ve = (e) => e !== null && typeof e == "object",
  pi = (e) => ve(e) && J(e.then) && J(e.catch),
  gi = Object.prototype.toString,
  In = (e) => gi.call(e),
  na = (e) => In(e).slice(8, -1),
  _i = (e) => In(e) === "[object Object]",
  ms = (e) =>
    Re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Un = as(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  ir = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ra = /-(\w)/g,
  dt = ir((e) => e.replace(ra, (t, n) => (n ? n.toUpperCase() : ""))),
  sa = /\B([A-Z])/g,
  cn = ir((e) => e.replace(sa, "-$1").toLowerCase()),
  lr = ir((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Er = ir((e) => (e ? `on${lr(e)}` : "")),
  xn = (e, t) => !Object.is(e, t),
  Vn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  qn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Gn = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Hs;
const oa = () =>
  Hs ||
  (Hs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let tt;
class bi {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = tt),
      !t && tt && (this.index = (tt.scopes || (tt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = tt;
      try {
        return (tt = this), t();
      } finally {
        tt = n;
      }
    }
  }
  on() {
    tt = this;
  }
  off() {
    tt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function ia(e) {
  return new bi(e);
}
function la(e, t = tt) {
  t && t.active && t.effects.push(e);
}
function aa() {
  return tt;
}
const hs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  vi = (e) => (e.w & St) > 0,
  yi = (e) => (e.n & St) > 0,
  ca = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= St;
  },
  ua = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        vi(s) && !yi(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~St),
          (s.n &= ~St);
      }
      t.length = n;
    }
  },
  Nr = new WeakMap();
let gn = 0,
  St = 1;
const Mr = 30;
let nt;
const Vt = Symbol(""),
  Fr = Symbol("");
class ps {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      la(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = nt,
      n = kt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = nt),
        (nt = this),
        (kt = !0),
        (St = 1 << ++gn),
        gn <= Mr ? ca(this) : Bs(this),
        this.fn()
      );
    } finally {
      gn <= Mr && ua(this),
        (St = 1 << --gn),
        (nt = this.parent),
        (kt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    nt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Bs(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Bs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let kt = !0;
const Ei = [];
function un() {
  Ei.push(kt), (kt = !1);
}
function fn() {
  const e = Ei.pop();
  kt = e === void 0 ? !0 : e;
}
function We(e, t, n) {
  if (kt && nt) {
    let r = Nr.get(e);
    r || Nr.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = hs())), wi(s);
  }
}
function wi(e, t) {
  let n = !1;
  gn <= Mr ? yi(e) || ((e.n |= St), (n = !vi(e))) : (n = !e.has(nt)),
    n && (e.add(nt), nt.deps.push(e));
}
function bt(e, t, n, r, s, o) {
  const i = Nr.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && q(e)) {
    const a = Number(r);
    i.forEach((u, f) => {
      (f === "length" || f >= a) && l.push(u);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        q(e)
          ? ms(n) && l.push(i.get("length"))
          : (l.push(i.get(Vt)), en(e) && l.push(i.get(Fr)));
        break;
      case "delete":
        q(e) || (l.push(i.get(Vt)), en(e) && l.push(i.get(Fr)));
        break;
      case "set":
        en(e) && l.push(i.get(Vt));
        break;
    }
  if (l.length === 1) l[0] && Dr(l[0]);
  else {
    const a = [];
    for (const u of l) u && a.push(...u);
    Dr(hs(a));
  }
}
function Dr(e, t) {
  const n = q(e) ? e : [...e];
  for (const r of n) r.computed && Ws(r);
  for (const r of n) r.computed || Ws(r);
}
function Ws(e, t) {
  (e !== nt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const fa = as("__proto__,__v_isRef,__isVue"),
  xi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(wn)
  ),
  da = gs(),
  ma = gs(!1, !0),
  ha = gs(!0),
  Ks = pa();
function pa() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = ae(this);
        for (let o = 0, i = this.length; o < i; o++) We(r, "get", o + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(ae)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        un();
        const r = ae(this)[t].apply(this, n);
        return fn(), r;
      };
    }),
    e
  );
}
function ga(e) {
  const t = ae(this);
  return We(t, "has", e), t.hasOwnProperty(e);
}
function gs(e = !1, t = !1) {
  return function (r, s, o) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && o === (e ? (t ? Oa : Si) : t ? Ti : ki).get(r))
      return r;
    const i = q(r);
    if (!e) {
      if (i && se(Ks, s)) return Reflect.get(Ks, s, o);
      if (s === "hasOwnProperty") return ga;
    }
    const l = Reflect.get(r, s, o);
    return (wn(s) ? xi.has(s) : fa(s)) || (e || We(r, "get", s), t)
      ? l
      : Se(l)
      ? i && ms(s)
        ? l
        : l.value
      : ve(l)
      ? e
        ? $i(l)
        : vt(l)
      : l;
  };
}
const _a = Ci(),
  ba = Ci(!0);
function Ci(e = !1) {
  return function (n, r, s, o) {
    let i = n[r];
    if (Kt(i) && Se(i) && !Se(s)) return !1;
    if (
      !e &&
      (!Xn(s) && !Kt(s) && ((i = ae(i)), (s = ae(s))), !q(n) && Se(i) && !Se(s))
    )
      return (i.value = s), !0;
    const l = q(n) && ms(r) ? Number(r) < n.length : se(n, r),
      a = Reflect.set(n, r, s, o);
    return (
      n === ae(o) && (l ? xn(s, i) && bt(n, "set", r, s) : bt(n, "add", r, s)),
      a
    );
  };
}
function va(e, t) {
  const n = se(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && bt(e, "delete", t, void 0), r;
}
function ya(e, t) {
  const n = Reflect.has(e, t);
  return (!wn(t) || !xi.has(t)) && We(e, "has", t), n;
}
function Ea(e) {
  return We(e, "iterate", q(e) ? "length" : Vt), Reflect.ownKeys(e);
}
const Li = { get: da, set: _a, deleteProperty: va, has: ya, ownKeys: Ea },
  wa = {
    get: ha,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  xa = De({}, Li, { get: ma, set: ba }),
  _s = (e) => e,
  ar = (e) => Reflect.getPrototypeOf(e);
function An(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = ae(e),
    o = ae(t);
  n || (t !== o && We(s, "get", t), We(s, "get", o));
  const { has: i } = ar(s),
    l = r ? _s : n ? ys : Cn;
  if (i.call(s, t)) return l(e.get(t));
  if (i.call(s, o)) return l(e.get(o));
  e !== s && e.get(t);
}
function Pn(e, t = !1) {
  const n = this.__v_raw,
    r = ae(n),
    s = ae(e);
  return (
    t || (e !== s && We(r, "has", e), We(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function Nn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && We(ae(e), "iterate", Vt), Reflect.get(e, "size", e)
  );
}
function qs(e) {
  e = ae(e);
  const t = ae(this);
  return ar(t).has.call(t, e) || (t.add(e), bt(t, "add", e, e)), this;
}
function Gs(e, t) {
  t = ae(t);
  const n = ae(this),
    { has: r, get: s } = ar(n);
  let o = r.call(n, e);
  o || ((e = ae(e)), (o = r.call(n, e)));
  const i = s.call(n, e);
  return (
    n.set(e, t), o ? xn(t, i) && bt(n, "set", e, t) : bt(n, "add", e, t), this
  );
}
function Xs(e) {
  const t = ae(this),
    { has: n, get: r } = ar(t);
  let s = n.call(t, e);
  s || ((e = ae(e)), (s = n.call(t, e))), r && r.call(t, e);
  const o = t.delete(e);
  return s && bt(t, "delete", e, void 0), o;
}
function zs() {
  const e = ae(this),
    t = e.size !== 0,
    n = e.clear();
  return t && bt(e, "clear", void 0, void 0), n;
}
function Mn(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      l = ae(i),
      a = t ? _s : e ? ys : Cn;
    return (
      !e && We(l, "iterate", Vt), i.forEach((u, f) => r.call(s, a(u), a(f), o))
    );
  };
}
function Fn(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = ae(s),
      i = en(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      a = e === "keys" && i,
      u = s[e](...r),
      f = n ? _s : t ? ys : Cn;
    return (
      !t && We(o, "iterate", a ? Fr : Vt),
      {
        next() {
          const { value: m, done: h } = u.next();
          return h
            ? { value: m, done: h }
            : { value: l ? [f(m[0]), f(m[1])] : f(m), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Et(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Ca() {
  const e = {
      get(o) {
        return An(this, o);
      },
      get size() {
        return Nn(this);
      },
      has: Pn,
      add: qs,
      set: Gs,
      delete: Xs,
      clear: zs,
      forEach: Mn(!1, !1),
    },
    t = {
      get(o) {
        return An(this, o, !1, !0);
      },
      get size() {
        return Nn(this);
      },
      has: Pn,
      add: qs,
      set: Gs,
      delete: Xs,
      clear: zs,
      forEach: Mn(!1, !0),
    },
    n = {
      get(o) {
        return An(this, o, !0);
      },
      get size() {
        return Nn(this, !0);
      },
      has(o) {
        return Pn.call(this, o, !0);
      },
      add: Et("add"),
      set: Et("set"),
      delete: Et("delete"),
      clear: Et("clear"),
      forEach: Mn(!0, !1),
    },
    r = {
      get(o) {
        return An(this, o, !0, !0);
      },
      get size() {
        return Nn(this, !0);
      },
      has(o) {
        return Pn.call(this, o, !0);
      },
      add: Et("add"),
      set: Et("set"),
      delete: Et("delete"),
      clear: Et("clear"),
      forEach: Mn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Fn(o, !1, !1)),
        (n[o] = Fn(o, !0, !1)),
        (t[o] = Fn(o, !1, !0)),
        (r[o] = Fn(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [La, ka, Ta, Sa] = Ca();
function bs(e, t) {
  const n = t ? (e ? Sa : Ta) : e ? ka : La;
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(se(n, s) && s in r ? n : r, s, o);
}
const $a = { get: bs(!1, !1) },
  Ra = { get: bs(!1, !0) },
  Ia = { get: bs(!0, !1) },
  ki = new WeakMap(),
  Ti = new WeakMap(),
  Si = new WeakMap(),
  Oa = new WeakMap();
function Aa(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Pa(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Aa(na(e));
}
function vt(e) {
  return Kt(e) ? e : vs(e, !1, Li, $a, ki);
}
function Na(e) {
  return vs(e, !1, xa, Ra, Ti);
}
function $i(e) {
  return vs(e, !0, wa, Ia, Si);
}
function vs(e, t, n, r, s) {
  if (!ve(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Pa(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return s.set(e, l), l;
}
function Ht(e) {
  return Kt(e) ? Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Xn(e) {
  return !!(e && e.__v_isShallow);
}
function Ri(e) {
  return Ht(e) || Kt(e);
}
function ae(e) {
  const t = e && e.__v_raw;
  return t ? ae(t) : e;
}
function Ii(e) {
  return qn(e, "__v_skip", !0), e;
}
const Cn = (e) => (ve(e) ? vt(e) : e),
  ys = (e) => (ve(e) ? $i(e) : e);
function Oi(e) {
  kt && nt && ((e = ae(e)), wi(e.dep || (e.dep = hs())));
}
function Ai(e, t) {
  e = ae(e);
  const n = e.dep;
  n && Dr(n);
}
function Se(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ee(e) {
  return Pi(e, !1);
}
function Ma(e) {
  return Pi(e, !0);
}
function Pi(e, t) {
  return Se(e) ? e : new Fa(e, t);
}
class Fa {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ae(t)),
      (this._value = n ? t : Cn(t));
  }
  get value() {
    return Oi(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Xn(t) || Kt(t);
    (t = n ? t : ae(t)),
      xn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Cn(t)), Ai(this));
  }
}
function D(e) {
  return Se(e) ? e.value : e;
}
const Da = {
  get: (e, t, n) => D(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return Se(s) && !Se(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Ni(e) {
  return Ht(e) ? e : new Proxy(e, Da);
}
var Mi;
class ja {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Mi] = !1),
      (this._dirty = !0),
      (this.effect = new ps(t, () => {
        this._dirty || ((this._dirty = !0), Ai(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = ae(this);
    return (
      Oi(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Mi = "__v_isReadonly";
function Ua(e, t, n = !1) {
  let r, s;
  const o = J(e);
  return (
    o ? ((r = e), (s = st)) : ((r = e.get), (s = e.set)),
    new ja(r, s, o || !s, n)
  );
}
function Tt(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    cr(o, t, n);
  }
  return s;
}
function Je(e, t, n, r) {
  if (J(e)) {
    const o = Tt(e, t, n, r);
    return (
      o &&
        pi(o) &&
        o.catch((i) => {
          cr(i, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(Je(e[o], t, n, r));
  return s;
}
function cr(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = n;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Tt(a, null, 10, [e, i, l]);
      return;
    }
  }
  Va(e, n, s, r);
}
function Va(e, t, n, r = !0) {
  console.error(e);
}
let Ln = !1,
  jr = !1;
const Me = [];
let ft = 0;
const tn = [];
let _t = null,
  Mt = 0;
const Fi = Promise.resolve();
let Es = null;
function zn(e) {
  const t = Es || Fi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ha(e) {
  let t = ft + 1,
    n = Me.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    kn(Me[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function ws(e) {
  (!Me.length || !Me.includes(e, Ln && e.allowRecurse ? ft + 1 : ft)) &&
    (e.id == null ? Me.push(e) : Me.splice(Ha(e.id), 0, e), Di());
}
function Di() {
  !Ln && !jr && ((jr = !0), (Es = Fi.then(Ui)));
}
function Ba(e) {
  const t = Me.indexOf(e);
  t > ft && Me.splice(t, 1);
}
function Wa(e) {
  q(e)
    ? tn.push(...e)
    : (!_t || !_t.includes(e, e.allowRecurse ? Mt + 1 : Mt)) && tn.push(e),
    Di();
}
function Ys(e, t = Ln ? ft + 1 : 0) {
  for (; t < Me.length; t++) {
    const n = Me[t];
    n && n.pre && (Me.splice(t, 1), t--, n());
  }
}
function ji(e) {
  if (tn.length) {
    const t = [...new Set(tn)];
    if (((tn.length = 0), _t)) {
      _t.push(...t);
      return;
    }
    for (_t = t, _t.sort((n, r) => kn(n) - kn(r)), Mt = 0; Mt < _t.length; Mt++)
      _t[Mt]();
    (_t = null), (Mt = 0);
  }
}
const kn = (e) => (e.id == null ? 1 / 0 : e.id),
  Ka = (e, t) => {
    const n = kn(e) - kn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Ui(e) {
  (jr = !1), (Ln = !0), Me.sort(Ka);
  const t = st;
  try {
    for (ft = 0; ft < Me.length; ft++) {
      const n = Me[ft];
      n && n.active !== !1 && Tt(n, null, 14);
    }
  } finally {
    (ft = 0),
      (Me.length = 0),
      ji(),
      (Ln = !1),
      (Es = null),
      (Me.length || tn.length) && Ui();
  }
}
function qa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ye;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in r) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: m, trim: h } = r[f] || ye;
    h && (s = n.map((v) => (Re(v) ? v.trim() : v))), m && (s = n.map(Gn));
  }
  let l,
    a = r[(l = Er(t))] || r[(l = Er(dt(t)))];
  !a && o && (a = r[(l = Er(cn(t)))]), a && Je(a, e, 6, s);
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Je(u, e, 6, s);
  }
}
function Vi(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!J(e)) {
    const a = (u) => {
      const f = Vi(u, t, !0);
      f && ((l = !0), De(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !o && !l
    ? (ve(e) && r.set(e, null), null)
    : (q(o) ? o.forEach((a) => (i[a] = null)) : De(i, o),
      ve(e) && r.set(e, i),
      i);
}
function ur(e, t) {
  return !e || !sr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      se(e, t[0].toLowerCase() + t.slice(1)) || se(e, cn(t)) || se(e, t));
}
let qe = null,
  Hi = null;
function Yn(e) {
  const t = qe;
  return (qe = e), (Hi = (e && e.type.__scopeId) || null), t;
}
function Bi(e, t = qe, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && io(-1);
    const o = Yn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Yn(o), r._d && io(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function wr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: a,
    emit: u,
    render: f,
    renderCache: m,
    data: h,
    setupState: v,
    ctx: b,
    inheritAttrs: w,
  } = e;
  let L, _;
  const x = Yn(e);
  try {
    if (n.shapeFlag & 4) {
      const k = s || r;
      (L = ut(f.call(k, k, m, o, v, h, b))), (_ = a);
    } else {
      const k = t;
      (L = ut(
        k.length > 1 ? k(o, { attrs: a, slots: l, emit: u }) : k(o, null)
      )),
        (_ = t.props ? a : Ga(a));
    }
  } catch (k) {
    (bn.length = 0), cr(k, e, 1), (L = Ce(ot));
  }
  let S = L;
  if (_ && w !== !1) {
    const k = Object.keys(_),
      { shapeFlag: T } = S;
    k.length && T & 7 && (i && k.some(fs) && (_ = Xa(_, i)), (S = $t(S, _)));
  }
  return (
    n.dirs && ((S = $t(S)), (S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (S.transition = n.transition),
    (L = S),
    Yn(x),
    L
  );
}
const Ga = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || sr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Xa = (e, t) => {
    const n = {};
    for (const r in e) (!fs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function za(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: l, patchFlag: a } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Js(r, i, u) : !!i;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let m = 0; m < f.length; m++) {
        const h = f[m];
        if (i[h] !== r[h] && !ur(u, h)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Js(r, i, u)
        : !0
      : !!i;
  return !1;
}
function Js(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !ur(n, o)) return !0;
  }
  return !1;
}
function Ya({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ja = (e) => e.__isSuspense;
function Qa(e, t) {
  t && t.pendingBranch
    ? q(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Wa(e);
}
function nn(e, t) {
  if (Te) {
    let n = Te.provides;
    const r = Te.parent && Te.parent.provides;
    r === n && (n = Te.provides = Object.create(r)), (n[e] = t);
  }
}
function Qe(e, t, n = !1) {
  const r = Te || qe;
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && J(t) ? t.call(r.proxy) : t;
  }
}
const Dn = {};
function Ge(e, t, n) {
  return Wi(e, t, n);
}
function Wi(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: i } = ye
) {
  const l = aa() === (Te == null ? void 0 : Te.scope) ? Te : null;
  let a,
    u = !1,
    f = !1;
  if (
    (Se(e)
      ? ((a = () => e.value), (u = Xn(e)))
      : Ht(e)
      ? ((a = () => e), (r = !0))
      : q(e)
      ? ((f = !0),
        (u = e.some((S) => Ht(S) || Xn(S))),
        (a = () =>
          e.map((S) => {
            if (Se(S)) return S.value;
            if (Ht(S)) return Ut(S);
            if (J(S)) return Tt(S, l, 2);
          })))
      : J(e)
      ? t
        ? (a = () => Tt(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return m && m(), Je(e, l, 3, [h]);
          })
      : (a = st),
    t && r)
  ) {
    const S = a;
    a = () => Ut(S());
  }
  let m,
    h = (S) => {
      m = _.onStop = () => {
        Tt(S, l, 4);
      };
    },
    v;
  if (Sn)
    if (
      ((h = st),
      t ? n && Je(t, l, 3, [a(), f ? [] : void 0, h]) : a(),
      s === "sync")
    ) {
      const S = Xc();
      v = S.__watcherHandles || (S.__watcherHandles = []);
    } else return st;
  let b = f ? new Array(e.length).fill(Dn) : Dn;
  const w = () => {
    if (_.active)
      if (t) {
        const S = _.run();
        (r || u || (f ? S.some((k, T) => xn(k, b[T])) : xn(S, b))) &&
          (m && m(),
          Je(t, l, 3, [S, b === Dn ? void 0 : f && b[0] === Dn ? [] : b, h]),
          (b = S));
      } else _.run();
  };
  w.allowRecurse = !!t;
  let L;
  s === "sync"
    ? (L = w)
    : s === "post"
    ? (L = () => Be(w, l && l.suspense))
    : ((w.pre = !0), l && (w.id = l.uid), (L = () => ws(w)));
  const _ = new ps(a, L);
  t
    ? n
      ? w()
      : (b = _.run())
    : s === "post"
    ? Be(_.run.bind(_), l && l.suspense)
    : _.run();
  const x = () => {
    _.stop(), l && l.scope && ds(l.scope.effects, _);
  };
  return v && v.push(x), x;
}
function Za(e, t, n) {
  const r = this.proxy,
    s = Re(e) ? (e.includes(".") ? Ki(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  J(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Te;
  sn(this);
  const l = Wi(s, o.bind(r), n);
  return i ? sn(i) : Bt(), l;
}
function Ki(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function Ut(e, t) {
  if (!ve(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Se(e))) Ut(e.value, t);
  else if (q(e)) for (let n = 0; n < e.length; n++) Ut(e[n], t);
  else if (or(e) || en(e))
    e.forEach((n) => {
      Ut(n, t);
    });
  else if (_i(e)) for (const n in e) Ut(e[n], t);
  return e;
}
function ec() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    xs(() => {
      e.isMounted = !0;
    }),
    Cs(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ye = [Function, Array],
  tc = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ye,
      onEnter: Ye,
      onAfterEnter: Ye,
      onEnterCancelled: Ye,
      onBeforeLeave: Ye,
      onLeave: Ye,
      onAfterLeave: Ye,
      onLeaveCancelled: Ye,
      onBeforeAppear: Ye,
      onAppear: Ye,
      onAfterAppear: Ye,
      onAppearCancelled: Ye,
    },
    setup(e, { slots: t }) {
      const n = hr(),
        r = ec();
      let s;
      return () => {
        const o = t.default && Gi(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const w of o)
            if (w.type !== ot) {
              i = w;
              break;
            }
        }
        const l = ae(e),
          { mode: a } = l;
        if (r.isLeaving) return xr(i);
        const u = Qs(i);
        if (!u) return xr(i);
        const f = Ur(u, l, r, n);
        Vr(u, f);
        const m = n.subTree,
          h = m && Qs(m);
        let v = !1;
        const { getTransitionKey: b } = u.type;
        if (b) {
          const w = b();
          s === void 0 ? (s = w) : w !== s && ((s = w), (v = !0));
        }
        if (h && h.type !== ot && (!Ft(u, h) || v)) {
          const w = Ur(h, l, r, n);
          if ((Vr(h, w), a === "out-in"))
            return (
              (r.isLeaving = !0),
              (w.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              xr(i)
            );
          a === "in-out" &&
            u.type !== ot &&
            (w.delayLeave = (L, _, x) => {
              const S = qi(r, h);
              (S[String(h.key)] = h),
                (L._leaveCb = () => {
                  _(), (L._leaveCb = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = x);
            });
        }
        return i;
      };
    },
  },
  nc = tc;
function qi(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Ur(e, t, n, r) {
  const {
      appear: s,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: m,
      onLeave: h,
      onAfterLeave: v,
      onLeaveCancelled: b,
      onBeforeAppear: w,
      onAppear: L,
      onAfterAppear: _,
      onAppearCancelled: x,
    } = t,
    S = String(e.key),
    k = qi(n, e),
    T = (K, G) => {
      K && Je(K, r, 9, G);
    },
    M = (K, G) => {
      const z = G[1];
      T(K, G),
        q(K) ? K.every((ce) => ce.length <= 1) && z() : K.length <= 1 && z();
    },
    U = {
      mode: o,
      persisted: i,
      beforeEnter(K) {
        let G = l;
        if (!n.isMounted)
          if (s) G = w || l;
          else return;
        K._leaveCb && K._leaveCb(!0);
        const z = k[S];
        z && Ft(e, z) && z.el._leaveCb && z.el._leaveCb(), T(G, [K]);
      },
      enter(K) {
        let G = a,
          z = u,
          ce = f;
        if (!n.isMounted)
          if (s) (G = L || a), (z = _ || u), (ce = x || f);
          else return;
        let me = !1;
        const we = (K._enterCb = (Ne) => {
          me ||
            ((me = !0),
            Ne ? T(ce, [K]) : T(z, [K]),
            U.delayedLeave && U.delayedLeave(),
            (K._enterCb = void 0));
        });
        G ? M(G, [K, we]) : we();
      },
      leave(K, G) {
        const z = String(e.key);
        if ((K._enterCb && K._enterCb(!0), n.isUnmounting)) return G();
        T(m, [K]);
        let ce = !1;
        const me = (K._leaveCb = (we) => {
          ce ||
            ((ce = !0),
            G(),
            we ? T(b, [K]) : T(v, [K]),
            (K._leaveCb = void 0),
            k[z] === e && delete k[z]);
        });
        (k[z] = e), h ? M(h, [K, me]) : me();
      },
      clone(K) {
        return Ur(K, t, n, r);
      },
    };
  return U;
}
function xr(e) {
  if (fr(e)) return (e = $t(e)), (e.children = null), e;
}
function Qs(e) {
  return fr(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Vr(e, t) {
  e.shapeFlag & 6 && e.component
    ? Vr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Gi(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Oe
      ? (i.patchFlag & 128 && s++, (r = r.concat(Gi(i.children, t, l))))
      : (t || i.type !== ot) && r.push(l != null ? $t(i, { key: l }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
function Xi(e) {
  return J(e) ? { setup: e, name: e.name } : e;
}
const Hn = (e) => !!e.type.__asyncLoader,
  fr = (e) => e.type.__isKeepAlive;
function rc(e, t) {
  zi(e, "a", t);
}
function sc(e, t) {
  zi(e, "da", t);
}
function zi(e, t, n = Te) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((dr(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      fr(s.parent.vnode) && oc(r, t, n, s), (s = s.parent);
  }
}
function oc(e, t, n, r) {
  const s = dr(t, e, r, !0);
  Ls(() => {
    ds(r[t], s);
  }, n);
}
function dr(e, t, n = Te, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          un(), sn(n);
          const l = Je(t, n, e, i);
          return Bt(), fn(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const yt =
    (e) =>
    (t, n = Te) =>
      (!Sn || e === "sp") && dr(e, (...r) => t(...r), n),
  Yi = yt("bm"),
  xs = yt("m"),
  ic = yt("bu"),
  lc = yt("u"),
  Cs = yt("bum"),
  Ls = yt("um"),
  ac = yt("sp"),
  cc = yt("rtg"),
  uc = yt("rtc");
function fc(e, t = Te) {
  dr("ec", e, t);
}
function zt(e, t) {
  const n = qe;
  if (n === null) return e;
  const r = pr(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, a, u = ye] = t[o];
    i &&
      (J(i) && (i = { mounted: i, updated: i }),
      i.deep && Ut(l),
      s.push({
        dir: i,
        instance: r,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: u,
      }));
  }
  return e;
}
function At(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[r];
    a && (un(), Je(a, n, 8, [e.el, l, e, t]), fn());
  }
}
const Ji = "components";
function dc(e, t) {
  return hc(Ji, e, !0, t) || e;
}
const mc = Symbol();
function hc(e, t, n = !0, r = !1) {
  const s = qe || Te;
  if (s) {
    const o = s.type;
    if (e === Ji) {
      const l = Kc(o, !1);
      if (l && (l === t || l === dt(t) || l === lr(dt(t)))) return o;
    }
    const i = Zs(s[e] || o[e], t) || Zs(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function Zs(e, t) {
  return e && (e[t] || e[dt(t)] || e[lr(dt(t))]);
}
function rn(e, t, n, r) {
  let s;
  const o = n && n[r];
  if (q(e) || Re(e)) {
    s = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (ve(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const u = i[l];
        s[l] = t(e[u], u, l, o && o[l]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
const Hr = (e) => (e ? (al(e) ? pr(e) || e.proxy : Hr(e.parent)) : null),
  _n = De(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hr(e.parent),
    $root: (e) => Hr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ks(e),
    $forceUpdate: (e) => e.f || (e.f = () => ws(e.update)),
    $nextTick: (e) => e.n || (e.n = zn.bind(e.proxy)),
    $watch: (e) => Za.bind(e),
  }),
  Cr = (e, t) => e !== ye && !e.__isScriptSetup && se(e, t),
  pc = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const v = i[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Cr(r, t)) return (i[t] = 1), r[t];
          if (s !== ye && se(s, t)) return (i[t] = 2), s[t];
          if ((u = e.propsOptions[0]) && se(u, t)) return (i[t] = 3), o[t];
          if (n !== ye && se(n, t)) return (i[t] = 4), n[t];
          Br && (i[t] = 0);
        }
      }
      const f = _n[t];
      let m, h;
      if (f) return t === "$attrs" && We(e, "get", t), f(e);
      if ((m = l.__cssModules) && (m = m[t])) return m;
      if (n !== ye && se(n, t)) return (i[t] = 4), n[t];
      if (((h = a.config.globalProperties), se(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Cr(s, t)
        ? ((s[t] = n), !0)
        : r !== ye && se(r, t)
        ? ((r[t] = n), !0)
        : se(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== ye && se(e, i)) ||
        Cr(t, i) ||
        ((l = o[0]) && se(l, i)) ||
        se(r, i) ||
        se(_n, i) ||
        se(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : se(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Br = !0;
function gc(e) {
  const t = ks(e),
    n = e.proxy,
    r = e.ctx;
  (Br = !1), t.beforeCreate && eo(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    created: f,
    beforeMount: m,
    mounted: h,
    beforeUpdate: v,
    updated: b,
    activated: w,
    deactivated: L,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: S,
    unmounted: k,
    render: T,
    renderTracked: M,
    renderTriggered: U,
    errorCaptured: K,
    serverPrefetch: G,
    expose: z,
    inheritAttrs: ce,
    components: me,
    directives: we,
    filters: Ne,
  } = t;
  if ((u && _c(u, r, null, e.appContext.config.unwrapInjectedRef), i))
    for (const ee in i) {
      const te = i[ee];
      J(te) && (r[ee] = te.bind(n));
    }
  if (s) {
    const ee = s.call(n, n);
    ve(ee) && (e.data = vt(ee));
  }
  if (((Br = !0), o))
    for (const ee in o) {
      const te = o[ee],
        Ie = J(te) ? te.bind(n, n) : J(te.get) ? te.get.bind(n, n) : st,
        re = !J(te) && J(te.set) ? te.set.bind(n) : st,
        xe = Y({ get: Ie, set: re });
      Object.defineProperty(r, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (pe) => (xe.value = pe),
      });
    }
  if (l) for (const ee in l) Qi(l[ee], r, n, ee);
  if (a) {
    const ee = J(a) ? a.call(n) : a;
    Reflect.ownKeys(ee).forEach((te) => {
      nn(te, ee[te]);
    });
  }
  f && eo(f, e, "c");
  function he(ee, te) {
    q(te) ? te.forEach((Ie) => ee(Ie.bind(n))) : te && ee(te.bind(n));
  }
  if (
    (he(Yi, m),
    he(xs, h),
    he(ic, v),
    he(lc, b),
    he(rc, w),
    he(sc, L),
    he(fc, K),
    he(uc, M),
    he(cc, U),
    he(Cs, x),
    he(Ls, k),
    he(ac, G),
    q(z))
  )
    if (z.length) {
      const ee = e.exposed || (e.exposed = {});
      z.forEach((te) => {
        Object.defineProperty(ee, te, {
          get: () => n[te],
          set: (Ie) => (n[te] = Ie),
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === st && (e.render = T),
    ce != null && (e.inheritAttrs = ce),
    me && (e.components = me),
    we && (e.directives = we);
}
function _c(e, t, n = st, r = !1) {
  q(e) && (e = Wr(e));
  for (const s in e) {
    const o = e[s];
    let i;
    ve(o)
      ? "default" in o
        ? (i = Qe(o.from || s, o.default, !0))
        : (i = Qe(o.from || s))
      : (i = Qe(o)),
      Se(i) && r
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (t[s] = i);
  }
}
function eo(e, t, n) {
  Je(q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Qi(e, t, n, r) {
  const s = r.includes(".") ? Ki(n, r) : () => n[r];
  if (Re(e)) {
    const o = t[e];
    J(o) && Ge(s, o);
  } else if (J(e)) Ge(s, e.bind(n));
  else if (ve(e))
    if (q(e)) e.forEach((o) => Qi(o, t, n, r));
    else {
      const o = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(o) && Ge(s, o, e);
    }
}
function ks(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !s.length && !n && !r
      ? (a = t)
      : ((a = {}), s.length && s.forEach((u) => Jn(a, u, i, !0)), Jn(a, t, i)),
    ve(t) && o.set(t, a),
    a
  );
}
function Jn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Jn(e, o, n, !0), s && s.forEach((i) => Jn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = bc[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const bc = {
  data: to,
  props: Nt,
  emits: Nt,
  methods: Nt,
  computed: Nt,
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  components: Nt,
  directives: Nt,
  watch: yc,
  provide: to,
  inject: vc,
};
function to(e, t) {
  return t
    ? e
      ? function () {
          return De(
            J(e) ? e.call(this, this) : e,
            J(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function vc(e, t) {
  return Nt(Wr(e), Wr(t));
}
function Wr(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Nt(e, t) {
  return e ? De(De(Object.create(null), e), t) : t;
}
function yc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = De(Object.create(null), e);
  for (const r in t) n[r] = je(e[r], t[r]);
  return n;
}
function Ec(e, t, n, r = !1) {
  const s = {},
    o = {};
  qn(o, mr, 1), (e.propsDefaults = Object.create(null)), Zi(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : Na(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function wc(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = ae(s),
    [a] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let m = 0; m < f.length; m++) {
        let h = f[m];
        if (ur(e.emitsOptions, h)) continue;
        const v = t[h];
        if (a)
          if (se(o, h)) v !== o[h] && ((o[h] = v), (u = !0));
          else {
            const b = dt(h);
            s[b] = Kr(a, l, b, v, e, !1);
          }
        else v !== o[h] && ((o[h] = v), (u = !0));
      }
    }
  } else {
    Zi(e, t, s, o) && (u = !0);
    let f;
    for (const m in l)
      (!t || (!se(t, m) && ((f = cn(m)) === m || !se(t, f)))) &&
        (a
          ? n &&
            (n[m] !== void 0 || n[f] !== void 0) &&
            (s[m] = Kr(a, l, m, void 0, e, !0))
          : delete s[m]);
    if (o !== l)
      for (const m in o) (!t || !se(t, m)) && (delete o[m], (u = !0));
  }
  u && bt(e, "set", "$attrs");
}
function Zi(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (Un(a)) continue;
      const u = t[a];
      let f;
      s && se(s, (f = dt(a)))
        ? !o || !o.includes(f)
          ? (n[f] = u)
          : ((l || (l = {}))[f] = u)
        : ur(e.emitsOptions, a) ||
          ((!(a in r) || u !== r[a]) && ((r[a] = u), (i = !0)));
    }
  if (o) {
    const a = ae(n),
      u = l || ye;
    for (let f = 0; f < o.length; f++) {
      const m = o[f];
      n[m] = Kr(s, a, m, u[m], e, !se(u, m));
    }
  }
  return i;
}
function Kr(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = se(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && J(a)) {
        const { propsDefaults: u } = s;
        n in u ? (r = u[n]) : (sn(s), (r = u[n] = a.call(null, t)), Bt());
      } else r = a;
    }
    i[0] &&
      (o && !l ? (r = !1) : i[1] && (r === "" || r === cn(n)) && (r = !0));
  }
  return r;
}
function el(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!J(e)) {
    const f = (m) => {
      a = !0;
      const [h, v] = el(m, t, !0);
      De(i, h), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!o && !a) return ve(e) && r.set(e, Zt), Zt;
  if (q(o))
    for (let f = 0; f < o.length; f++) {
      const m = dt(o[f]);
      no(m) && (i[m] = ye);
    }
  else if (o)
    for (const f in o) {
      const m = dt(f);
      if (no(m)) {
        const h = o[f],
          v = (i[m] = q(h) || J(h) ? { type: h } : Object.assign({}, h));
        if (v) {
          const b = oo(Boolean, v.type),
            w = oo(String, v.type);
          (v[0] = b > -1),
            (v[1] = w < 0 || b < w),
            (b > -1 || se(v, "default")) && l.push(m);
        }
      }
    }
  const u = [i, l];
  return ve(e) && r.set(e, u), u;
}
function no(e) {
  return e[0] !== "$";
}
function ro(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function so(e, t) {
  return ro(e) === ro(t);
}
function oo(e, t) {
  return q(t) ? t.findIndex((n) => so(n, e)) : J(t) && so(t, e) ? 0 : -1;
}
const tl = (e) => e[0] === "_" || e === "$stable",
  Ts = (e) => (q(e) ? e.map(ut) : [ut(e)]),
  xc = (e, t, n) => {
    if (t._n) return t;
    const r = Bi((...s) => Ts(t(...s)), n);
    return (r._c = !1), r;
  },
  nl = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (tl(s)) continue;
      const o = e[s];
      if (J(o)) t[s] = xc(s, o, r);
      else if (o != null) {
        const i = Ts(o);
        t[s] = () => i;
      }
    }
  },
  rl = (e, t) => {
    const n = Ts(t);
    e.slots.default = () => n;
  },
  Cc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ae(t)), qn(t, "_", n)) : nl(t, (e.slots = {}));
    } else (e.slots = {}), t && rl(e, t);
    qn(e.slots, mr, 1);
  },
  Lc = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = ye;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (De(s, t), !n && l === 1 && delete s._)
        : ((o = !t.$stable), nl(t, s)),
        (i = t);
    } else t && (rl(e, t), (i = { default: 1 }));
    if (o) for (const l in s) !tl(l) && !(l in i) && delete s[l];
  };
function sl() {
  return {
    app: null,
    config: {
      isNativeTag: Zl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let kc = 0;
function Tc(e, t) {
  return function (r, s = null) {
    J(r) || (r = Object.assign({}, r)), s != null && !ve(s) && (s = null);
    const o = sl(),
      i = new Set();
    let l = !1;
    const a = (o.app = {
      _uid: kc++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: zc,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...f) {
        return (
          i.has(u) ||
            (u && J(u.install)
              ? (i.add(u), u.install(a, ...f))
              : J(u) && (i.add(u), u(a, ...f))),
          a
        );
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), a;
      },
      component(u, f) {
        return f ? ((o.components[u] = f), a) : o.components[u];
      },
      directive(u, f) {
        return f ? ((o.directives[u] = f), a) : o.directives[u];
      },
      mount(u, f, m) {
        if (!l) {
          const h = Ce(r, s);
          return (
            (h.appContext = o),
            f && t ? t(h, u) : e(h, u, m),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            pr(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, f) {
        return (o.provides[u] = f), a;
      },
    });
    return a;
  };
}
function qr(e, t, n, r, s = !1) {
  if (q(e)) {
    e.forEach((h, v) => qr(h, t && (q(t) ? t[v] : t), n, r, s));
    return;
  }
  if (Hn(r) && !s) return;
  const o = r.shapeFlag & 4 ? pr(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    { i: l, r: a } = e,
    u = t && t.r,
    f = l.refs === ye ? (l.refs = {}) : l.refs,
    m = l.setupState;
  if (
    (u != null &&
      u !== a &&
      (Re(u)
        ? ((f[u] = null), se(m, u) && (m[u] = null))
        : Se(u) && (u.value = null)),
    J(a))
  )
    Tt(a, l, 12, [i, f]);
  else {
    const h = Re(a),
      v = Se(a);
    if (h || v) {
      const b = () => {
        if (e.f) {
          const w = h ? (se(m, a) ? m[a] : f[a]) : a.value;
          s
            ? q(w) && ds(w, o)
            : q(w)
            ? w.includes(o) || w.push(o)
            : h
            ? ((f[a] = [o]), se(m, a) && (m[a] = f[a]))
            : ((a.value = [o]), e.k && (f[e.k] = a.value));
        } else
          h
            ? ((f[a] = i), se(m, a) && (m[a] = i))
            : v && ((a.value = i), e.k && (f[e.k] = i));
      };
      i ? ((b.id = -1), Be(b, n)) : b();
    }
  }
}
const Be = Qa;
function Sc(e) {
  return $c(e);
}
function $c(e, t) {
  const n = oa();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: f,
      parentNode: m,
      nextSibling: h,
      setScopeId: v = st,
      insertStaticContent: b,
    } = e,
    w = (
      p,
      c,
      d,
      g = null,
      y = null,
      $ = null,
      O = !1,
      P = null,
      N = !!c.dynamicChildren
    ) => {
      if (p === c) return;
      p && !Ft(p, c) && ((g = F(p)), pe(p, y, $, !0), (p = null)),
        c.patchFlag === -2 && ((N = !1), (c.dynamicChildren = null));
      const { type: R, ref: E, shapeFlag: C } = c;
      switch (R) {
        case On:
          L(p, c, d, g);
          break;
        case ot:
          _(p, c, d, g);
          break;
        case Bn:
          p == null && x(c, d, g, O);
          break;
        case Oe:
          me(p, c, d, g, y, $, O, P, N);
          break;
        default:
          C & 1
            ? T(p, c, d, g, y, $, O, P, N)
            : C & 6
            ? we(p, c, d, g, y, $, O, P, N)
            : (C & 64 || C & 128) && R.process(p, c, d, g, y, $, O, P, N, Z);
      }
      E != null && y && qr(E, p && p.ref, $, c || p, !c);
    },
    L = (p, c, d, g) => {
      if (p == null) r((c.el = l(c.children)), d, g);
      else {
        const y = (c.el = p.el);
        c.children !== p.children && u(y, c.children);
      }
    },
    _ = (p, c, d, g) => {
      p == null ? r((c.el = a(c.children || "")), d, g) : (c.el = p.el);
    },
    x = (p, c, d, g) => {
      [p.el, p.anchor] = b(p.children, c, d, g, p.el, p.anchor);
    },
    S = ({ el: p, anchor: c }, d, g) => {
      let y;
      for (; p && p !== c; ) (y = h(p)), r(p, d, g), (p = y);
      r(c, d, g);
    },
    k = ({ el: p, anchor: c }) => {
      let d;
      for (; p && p !== c; ) (d = h(p)), s(p), (p = d);
      s(c);
    },
    T = (p, c, d, g, y, $, O, P, N) => {
      (O = O || c.type === "svg"),
        p == null ? M(c, d, g, y, $, O, P, N) : G(p, c, y, $, O, P, N);
    },
    M = (p, c, d, g, y, $, O, P) => {
      let N, R;
      const { type: E, props: C, shapeFlag: V, transition: W, dirs: Q } = p;
      if (
        ((N = p.el = i(p.type, $, C && C.is, C)),
        V & 8
          ? f(N, p.children)
          : V & 16 &&
            K(p.children, N, null, g, y, $ && E !== "foreignObject", O, P),
        Q && At(p, null, g, "created"),
        U(N, p, p.scopeId, O, g),
        C)
      ) {
        for (const ne in C)
          ne !== "value" &&
            !Un(ne) &&
            o(N, ne, null, C[ne], $, p.children, g, y, j);
        "value" in C && o(N, "value", null, C.value),
          (R = C.onVnodeBeforeMount) && at(R, g, p);
      }
      Q && At(p, null, g, "beforeMount");
      const ue = (!y || (y && !y.pendingBranch)) && W && !W.persisted;
      ue && W.beforeEnter(N),
        r(N, c, d),
        ((R = C && C.onVnodeMounted) || ue || Q) &&
          Be(() => {
            R && at(R, g, p), ue && W.enter(N), Q && At(p, null, g, "mounted");
          }, y);
    },
    U = (p, c, d, g, y) => {
      if ((d && v(p, d), g)) for (let $ = 0; $ < g.length; $++) v(p, g[$]);
      if (y) {
        let $ = y.subTree;
        if (c === $) {
          const O = y.vnode;
          U(p, O, O.scopeId, O.slotScopeIds, y.parent);
        }
      }
    },
    K = (p, c, d, g, y, $, O, P, N = 0) => {
      for (let R = N; R < p.length; R++) {
        const E = (p[R] = P ? Ct(p[R]) : ut(p[R]));
        w(null, E, c, d, g, y, $, O, P);
      }
    },
    G = (p, c, d, g, y, $, O) => {
      const P = (c.el = p.el);
      let { patchFlag: N, dynamicChildren: R, dirs: E } = c;
      N |= p.patchFlag & 16;
      const C = p.props || ye,
        V = c.props || ye;
      let W;
      d && Pt(d, !1),
        (W = V.onVnodeBeforeUpdate) && at(W, d, c, p),
        E && At(c, p, d, "beforeUpdate"),
        d && Pt(d, !0);
      const Q = y && c.type !== "foreignObject";
      if (
        (R
          ? z(p.dynamicChildren, R, P, d, g, Q, $)
          : O || te(p, c, P, null, d, g, Q, $, !1),
        N > 0)
      ) {
        if (N & 16) ce(P, c, C, V, d, g, y);
        else if (
          (N & 2 && C.class !== V.class && o(P, "class", null, V.class, y),
          N & 4 && o(P, "style", C.style, V.style, y),
          N & 8)
        ) {
          const ue = c.dynamicProps;
          for (let ne = 0; ne < ue.length; ne++) {
            const Le = ue[ne],
              ze = C[Le],
              Gt = V[Le];
            (Gt !== ze || Le === "value") &&
              o(P, Le, ze, Gt, y, p.children, d, g, j);
          }
        }
        N & 1 && p.children !== c.children && f(P, c.children);
      } else !O && R == null && ce(P, c, C, V, d, g, y);
      ((W = V.onVnodeUpdated) || E) &&
        Be(() => {
          W && at(W, d, c, p), E && At(c, p, d, "updated");
        }, g);
    },
    z = (p, c, d, g, y, $, O) => {
      for (let P = 0; P < c.length; P++) {
        const N = p[P],
          R = c[P],
          E =
            N.el && (N.type === Oe || !Ft(N, R) || N.shapeFlag & 70)
              ? m(N.el)
              : d;
        w(N, R, E, null, g, y, $, O, !0);
      }
    },
    ce = (p, c, d, g, y, $, O) => {
      if (d !== g) {
        if (d !== ye)
          for (const P in d)
            !Un(P) && !(P in g) && o(p, P, d[P], null, O, c.children, y, $, j);
        for (const P in g) {
          if (Un(P)) continue;
          const N = g[P],
            R = d[P];
          N !== R && P !== "value" && o(p, P, R, N, O, c.children, y, $, j);
        }
        "value" in g && o(p, "value", d.value, g.value);
      }
    },
    me = (p, c, d, g, y, $, O, P, N) => {
      const R = (c.el = p ? p.el : l("")),
        E = (c.anchor = p ? p.anchor : l(""));
      let { patchFlag: C, dynamicChildren: V, slotScopeIds: W } = c;
      W && (P = P ? P.concat(W) : W),
        p == null
          ? (r(R, d, g), r(E, d, g), K(c.children, d, E, y, $, O, P, N))
          : C > 0 && C & 64 && V && p.dynamicChildren
          ? (z(p.dynamicChildren, V, d, y, $, O, P),
            (c.key != null || (y && c === y.subTree)) && ol(p, c, !0))
          : te(p, c, d, E, y, $, O, P, N);
    },
    we = (p, c, d, g, y, $, O, P, N) => {
      (c.slotScopeIds = P),
        p == null
          ? c.shapeFlag & 512
            ? y.ctx.activate(c, d, g, O, N)
            : Ne(c, d, g, y, $, O, N)
          : et(p, c, N);
    },
    Ne = (p, c, d, g, y, $, O) => {
      const P = (p.component = Uc(p, g, y));
      if ((fr(p) && (P.ctx.renderer = Z), Vc(P), P.asyncDep)) {
        if ((y && y.registerDep(P, he), !p.el)) {
          const N = (P.subTree = Ce(ot));
          _(null, N, c, d);
        }
        return;
      }
      he(P, p, c, d, y, $, O);
    },
    et = (p, c, d) => {
      const g = (c.component = p.component);
      if (za(p, c, d))
        if (g.asyncDep && !g.asyncResolved) {
          ee(g, c, d);
          return;
        } else (g.next = c), Ba(g.update), g.update();
      else (c.el = p.el), (g.vnode = c);
    },
    he = (p, c, d, g, y, $, O) => {
      const P = () => {
          if (p.isMounted) {
            let { next: E, bu: C, u: V, parent: W, vnode: Q } = p,
              ue = E,
              ne;
            Pt(p, !1),
              E ? ((E.el = Q.el), ee(p, E, O)) : (E = Q),
              C && Vn(C),
              (ne = E.props && E.props.onVnodeBeforeUpdate) && at(ne, W, E, Q),
              Pt(p, !0);
            const Le = wr(p),
              ze = p.subTree;
            (p.subTree = Le),
              w(ze, Le, m(ze.el), F(ze), p, y, $),
              (E.el = Le.el),
              ue === null && Ya(p, Le.el),
              V && Be(V, y),
              (ne = E.props && E.props.onVnodeUpdated) &&
                Be(() => at(ne, W, E, Q), y);
          } else {
            let E;
            const { el: C, props: V } = c,
              { bm: W, m: Q, parent: ue } = p,
              ne = Hn(c);
            if (
              (Pt(p, !1),
              W && Vn(W),
              !ne && (E = V && V.onVnodeBeforeMount) && at(E, ue, c),
              Pt(p, !0),
              C && X)
            ) {
              const Le = () => {
                (p.subTree = wr(p)), X(C, p.subTree, p, y, null);
              };
              ne
                ? c.type.__asyncLoader().then(() => !p.isUnmounted && Le())
                : Le();
            } else {
              const Le = (p.subTree = wr(p));
              w(null, Le, d, g, p, y, $), (c.el = Le.el);
            }
            if ((Q && Be(Q, y), !ne && (E = V && V.onVnodeMounted))) {
              const Le = c;
              Be(() => at(E, ue, Le), y);
            }
            (c.shapeFlag & 256 ||
              (ue && Hn(ue.vnode) && ue.vnode.shapeFlag & 256)) &&
              p.a &&
              Be(p.a, y),
              (p.isMounted = !0),
              (c = d = g = null);
          }
        },
        N = (p.effect = new ps(P, () => ws(R), p.scope)),
        R = (p.update = () => N.run());
      (R.id = p.uid), Pt(p, !0), R();
    },
    ee = (p, c, d) => {
      c.component = p;
      const g = p.vnode.props;
      (p.vnode = c),
        (p.next = null),
        wc(p, c.props, g, d),
        Lc(p, c.children, d),
        un(),
        Ys(),
        fn();
    },
    te = (p, c, d, g, y, $, O, P, N = !1) => {
      const R = p && p.children,
        E = p ? p.shapeFlag : 0,
        C = c.children,
        { patchFlag: V, shapeFlag: W } = c;
      if (V > 0) {
        if (V & 128) {
          re(R, C, d, g, y, $, O, P, N);
          return;
        } else if (V & 256) {
          Ie(R, C, d, g, y, $, O, P, N);
          return;
        }
      }
      W & 8
        ? (E & 16 && j(R, y, $), C !== R && f(d, C))
        : E & 16
        ? W & 16
          ? re(R, C, d, g, y, $, O, P, N)
          : j(R, y, $, !0)
        : (E & 8 && f(d, ""), W & 16 && K(C, d, g, y, $, O, P, N));
    },
    Ie = (p, c, d, g, y, $, O, P, N) => {
      (p = p || Zt), (c = c || Zt);
      const R = p.length,
        E = c.length,
        C = Math.min(R, E);
      let V;
      for (V = 0; V < C; V++) {
        const W = (c[V] = N ? Ct(c[V]) : ut(c[V]));
        w(p[V], W, d, null, y, $, O, P, N);
      }
      R > E ? j(p, y, $, !0, !1, C) : K(c, d, g, y, $, O, P, N, C);
    },
    re = (p, c, d, g, y, $, O, P, N) => {
      let R = 0;
      const E = c.length;
      let C = p.length - 1,
        V = E - 1;
      for (; R <= C && R <= V; ) {
        const W = p[R],
          Q = (c[R] = N ? Ct(c[R]) : ut(c[R]));
        if (Ft(W, Q)) w(W, Q, d, null, y, $, O, P, N);
        else break;
        R++;
      }
      for (; R <= C && R <= V; ) {
        const W = p[C],
          Q = (c[V] = N ? Ct(c[V]) : ut(c[V]));
        if (Ft(W, Q)) w(W, Q, d, null, y, $, O, P, N);
        else break;
        C--, V--;
      }
      if (R > C) {
        if (R <= V) {
          const W = V + 1,
            Q = W < E ? c[W].el : g;
          for (; R <= V; )
            w(null, (c[R] = N ? Ct(c[R]) : ut(c[R])), d, Q, y, $, O, P, N), R++;
        }
      } else if (R > V) for (; R <= C; ) pe(p[R], y, $, !0), R++;
      else {
        const W = R,
          Q = R,
          ue = new Map();
        for (R = Q; R <= V; R++) {
          const Ke = (c[R] = N ? Ct(c[R]) : ut(c[R]));
          Ke.key != null && ue.set(Ke.key, R);
        }
        let ne,
          Le = 0;
        const ze = V - Q + 1;
        let Gt = !1,
          Ds = 0;
        const dn = new Array(ze);
        for (R = 0; R < ze; R++) dn[R] = 0;
        for (R = W; R <= C; R++) {
          const Ke = p[R];
          if (Le >= ze) {
            pe(Ke, y, $, !0);
            continue;
          }
          let lt;
          if (Ke.key != null) lt = ue.get(Ke.key);
          else
            for (ne = Q; ne <= V; ne++)
              if (dn[ne - Q] === 0 && Ft(Ke, c[ne])) {
                lt = ne;
                break;
              }
          lt === void 0
            ? pe(Ke, y, $, !0)
            : ((dn[lt - Q] = R + 1),
              lt >= Ds ? (Ds = lt) : (Gt = !0),
              w(Ke, c[lt], d, null, y, $, O, P, N),
              Le++);
        }
        const js = Gt ? Rc(dn) : Zt;
        for (ne = js.length - 1, R = ze - 1; R >= 0; R--) {
          const Ke = Q + R,
            lt = c[Ke],
            Us = Ke + 1 < E ? c[Ke + 1].el : g;
          dn[R] === 0
            ? w(null, lt, d, Us, y, $, O, P, N)
            : Gt && (ne < 0 || R !== js[ne] ? xe(lt, d, Us, 2) : ne--);
        }
      }
    },
    xe = (p, c, d, g, y = null) => {
      const { el: $, type: O, transition: P, children: N, shapeFlag: R } = p;
      if (R & 6) {
        xe(p.component.subTree, c, d, g);
        return;
      }
      if (R & 128) {
        p.suspense.move(c, d, g);
        return;
      }
      if (R & 64) {
        O.move(p, c, d, Z);
        return;
      }
      if (O === Oe) {
        r($, c, d);
        for (let C = 0; C < N.length; C++) xe(N[C], c, d, g);
        r(p.anchor, c, d);
        return;
      }
      if (O === Bn) {
        S(p, c, d);
        return;
      }
      if (g !== 2 && R & 1 && P)
        if (g === 0) P.beforeEnter($), r($, c, d), Be(() => P.enter($), y);
        else {
          const { leave: C, delayLeave: V, afterLeave: W } = P,
            Q = () => r($, c, d),
            ue = () => {
              C($, () => {
                Q(), W && W();
              });
            };
          V ? V($, Q, ue) : ue();
        }
      else r($, c, d);
    },
    pe = (p, c, d, g = !1, y = !1) => {
      const {
        type: $,
        props: O,
        ref: P,
        children: N,
        dynamicChildren: R,
        shapeFlag: E,
        patchFlag: C,
        dirs: V,
      } = p;
      if ((P != null && qr(P, null, d, p, !0), E & 256)) {
        c.ctx.deactivate(p);
        return;
      }
      const W = E & 1 && V,
        Q = !Hn(p);
      let ue;
      if ((Q && (ue = O && O.onVnodeBeforeUnmount) && at(ue, c, p), E & 6))
        I(p.component, d, g);
      else {
        if (E & 128) {
          p.suspense.unmount(d, g);
          return;
        }
        W && At(p, null, c, "beforeUnmount"),
          E & 64
            ? p.type.remove(p, c, d, y, Z, g)
            : R && ($ !== Oe || (C > 0 && C & 64))
            ? j(R, c, d, !1, !0)
            : (($ === Oe && C & 384) || (!y && E & 16)) && j(N, c, d),
          g && mt(p);
      }
      ((Q && (ue = O && O.onVnodeUnmounted)) || W) &&
        Be(() => {
          ue && at(ue, c, p), W && At(p, null, c, "unmounted");
        }, d);
    },
    mt = (p) => {
      const { type: c, el: d, anchor: g, transition: y } = p;
      if (c === Oe) {
        ht(d, g);
        return;
      }
      if (c === Bn) {
        k(p);
        return;
      }
      const $ = () => {
        s(d), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (p.shapeFlag & 1 && y && !y.persisted) {
        const { leave: O, delayLeave: P } = y,
          N = () => O(d, $);
        P ? P(p.el, $, N) : N();
      } else $();
    },
    ht = (p, c) => {
      let d;
      for (; p !== c; ) (d = h(p)), s(p), (p = d);
      s(c);
    },
    I = (p, c, d) => {
      const { bum: g, scope: y, update: $, subTree: O, um: P } = p;
      g && Vn(g),
        y.stop(),
        $ && (($.active = !1), pe(O, p, c, d)),
        P && Be(P, c),
        Be(() => {
          p.isUnmounted = !0;
        }, c),
        c &&
          c.pendingBranch &&
          !c.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === c.pendingId &&
          (c.deps--, c.deps === 0 && c.resolve());
    },
    j = (p, c, d, g = !1, y = !1, $ = 0) => {
      for (let O = $; O < p.length; O++) pe(p[O], c, d, g, y);
    },
    F = (p) =>
      p.shapeFlag & 6
        ? F(p.component.subTree)
        : p.shapeFlag & 128
        ? p.suspense.next()
        : h(p.anchor || p.el),
    B = (p, c, d) => {
      p == null
        ? c._vnode && pe(c._vnode, null, null, !0)
        : w(c._vnode || null, p, c, null, null, null, d),
        Ys(),
        ji(),
        (c._vnode = p);
    },
    Z = {
      p: w,
      um: pe,
      m: xe,
      r: mt,
      mt: Ne,
      mc: K,
      pc: te,
      pbc: z,
      n: F,
      o: e,
    };
  let fe, X;
  return (
    t && ([fe, X] = t(Z)), { render: B, hydrate: fe, createApp: Tc(B, fe) }
  );
}
function Pt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ol(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (q(r) && q(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let l = s[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[o] = Ct(s[o])), (l.el = i.el)),
        n || ol(i, l)),
        l.type === On && (l.el = i.el);
    }
}
function Rc(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < u ? (o = l + 1) : (i = l);
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const Ic = (e) => e.__isTeleport,
  Oe = Symbol(void 0),
  On = Symbol(void 0),
  ot = Symbol(void 0),
  Bn = Symbol(void 0),
  bn = [];
let rt = null;
function ge(e = !1) {
  bn.push((rt = e ? null : []));
}
function Oc() {
  bn.pop(), (rt = bn[bn.length - 1] || null);
}
let Tn = 1;
function io(e) {
  Tn += e;
}
function il(e) {
  return (
    (e.dynamicChildren = Tn > 0 ? rt || Zt : null),
    Oc(),
    Tn > 0 && rt && rt.push(e),
    e
  );
}
function _e(e, t, n, r, s, o) {
  return il(A(e, t, n, r, s, o, !0));
}
function Ac(e, t, n, r, s) {
  return il(Ce(e, t, n, r, s, !0));
}
function Gr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  return e.type === t.type && e.key === t.key;
}
const mr = "__vInternal",
  ll = ({ key: e }) => e ?? null,
  Wn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Re(e) || Se(e) || J(e)
        ? { i: qe, r: e, k: t, f: !!n }
        : e
      : null;
function A(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === Oe ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ll(t),
    ref: t && Wn(t),
    scopeId: Hi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: qe,
  };
  return (
    l
      ? (Ss(a, n), o & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Re(n) ? 8 : 16),
    Tn > 0 &&
      !i &&
      rt &&
      (a.patchFlag > 0 || o & 6) &&
      a.patchFlag !== 32 &&
      rt.push(a),
    a
  );
}
const Ce = Pc;
function Pc(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === mc) && (e = ot), Gr(e))) {
    const l = $t(e, t, !0);
    return (
      n && Ss(l, n),
      Tn > 0 &&
        !o &&
        rt &&
        (l.shapeFlag & 6 ? (rt[rt.indexOf(e)] = l) : rt.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((qc(e) && (e = e.__vccOpts), t)) {
    t = Nc(t);
    let { class: l, style: a } = t;
    l && !Re(l) && (t.class = us(l)),
      ve(a) && (Ri(a) && !q(a) && (a = De({}, a)), (t.style = cs(a)));
  }
  const i = Re(e) ? 1 : Ja(e) ? 128 : Ic(e) ? 64 : ve(e) ? 4 : J(e) ? 2 : 0;
  return A(e, t, n, r, s, i, o, !0);
}
function Nc(e) {
  return e ? (Ri(e) || mr in e ? De({}, e) : e) : null;
}
function $t(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e,
    l = t ? Fc(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ll(l),
    ref:
      t && t.ref ? (n && s ? (q(s) ? s.concat(Wn(t)) : [s, Wn(t)]) : Wn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Oe ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $t(e.ssContent),
    ssFallback: e.ssFallback && $t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Ve(e = " ", t = 0) {
  return Ce(On, null, e, t);
}
function Mc(e, t) {
  const n = Ce(Bn, null, e);
  return (n.staticCount = t), n;
}
function lo(e = "", t = !1) {
  return t ? (ge(), Ac(ot, null, e)) : Ce(ot, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean"
    ? Ce(ot)
    : q(e)
    ? Ce(Oe, null, e.slice())
    : typeof e == "object"
    ? Ct(e)
    : Ce(On, null, String(e));
}
function Ct(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : $t(e);
}
function Ss(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (q(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ss(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(mr in t)
        ? (t._ctx = qe)
        : s === 3 &&
          qe &&
          (qe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    J(t)
      ? ((t = { default: t, _ctx: qe }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ve(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Fc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = us([t.class, r.class]));
      else if (s === "style") t.style = cs([t.style, r.style]);
      else if (sr(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !(q(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function at(e, t, n, r = null) {
  Je(e, t, 7, [n, r]);
}
const Dc = sl();
let jc = 0;
function Uc(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Dc,
    o = {
      uid: jc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new bi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: el(r, s),
      emitsOptions: Vi(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ye,
      inheritAttrs: r.inheritAttrs,
      ctx: ye,
      data: ye,
      props: ye,
      attrs: ye,
      slots: ye,
      refs: ye,
      setupState: ye,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = qa.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Te = null;
const hr = () => Te || qe,
  sn = (e) => {
    (Te = e), e.scope.on();
  },
  Bt = () => {
    Te && Te.scope.off(), (Te = null);
  };
function al(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function Vc(e, t = !1) {
  Sn = t;
  const { props: n, children: r } = e.vnode,
    s = al(e);
  Ec(e, n, s, t), Cc(e, r);
  const o = s ? Hc(e, t) : void 0;
  return (Sn = !1), o;
}
function Hc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Ii(new Proxy(e.ctx, pc)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Wc(e) : null);
    sn(e), un();
    const o = Tt(r, e, 0, [e.props, s]);
    if ((fn(), Bt(), pi(o))) {
      if ((o.then(Bt, Bt), t))
        return o
          .then((i) => {
            ao(e, i, t);
          })
          .catch((i) => {
            cr(i, e, 0);
          });
      e.asyncDep = o;
    } else ao(e, o, t);
  } else cl(e, t);
}
function ao(e, t, n) {
  J(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ve(t) && (e.setupState = Ni(t)),
    cl(e, n);
}
let co;
function cl(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && co && !r.render) {
      const s = r.template || ks(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = r,
          u = De(De({ isCustomElement: o, delimiters: l }, i), a);
        r.render = co(s, u);
      }
    }
    e.render = r.render || st;
  }
  sn(e), un(), gc(e), fn(), Bt();
}
function Bc(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return We(e, "get", "$attrs"), t[n];
    },
  });
}
function Wc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Bc(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function pr(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Ni(Ii(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in _n) return _n[n](e);
        },
        has(t, n) {
          return n in t || n in _n;
        },
      }))
    );
}
function Kc(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function qc(e) {
  return J(e) && "__vccOpts" in e;
}
const Y = (e, t) => Ua(e, t, Sn);
function gr(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? ve(t) && !q(t)
      ? Gr(t)
        ? Ce(e, null, [t])
        : Ce(e, t)
      : Ce(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Gr(n) && (n = [n]),
      Ce(e, t, n));
}
const Gc = Symbol(""),
  Xc = () => Qe(Gc),
  zc = "3.2.47",
  Yc = "http://www.w3.org/2000/svg",
  Dt = typeof document < "u" ? document : null,
  uo = Dt && Dt.createElement("template"),
  Jc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? Dt.createElementNS(Yc, e)
        : Dt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => Dt.createTextNode(e),
    createComment: (e) => Dt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Dt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        uo.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = uo.content;
        if (r) {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Qc(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Zc(e, t, n) {
  const r = e.style,
    s = Re(n);
  if (n && !s) {
    if (t && !Re(t)) for (const o in t) n[o] == null && Xr(r, o, "");
    for (const o in n) Xr(r, o, n[o]);
  } else {
    const o = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = o);
  }
}
const fo = /\s*!important$/;
function Xr(e, t, n) {
  if (q(n)) n.forEach((r) => Xr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = eu(e, t);
    fo.test(n)
      ? e.setProperty(cn(r), n.replace(fo, ""), "important")
      : (e[r] = n);
  }
}
const mo = ["Webkit", "Moz", "ms"],
  Lr = {};
function eu(e, t) {
  const n = Lr[t];
  if (n) return n;
  let r = dt(t);
  if (r !== "filter" && r in e) return (Lr[t] = r);
  r = lr(r);
  for (let s = 0; s < mo.length; s++) {
    const o = mo[s] + r;
    if (o in e) return (Lr[t] = o);
  }
  return t;
}
const ho = "http://www.w3.org/1999/xlink";
function tu(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ho, t.slice(6, t.length))
      : e.setAttributeNS(ho, t, n);
  else {
    const o = Yl(t);
    n == null || (o && !mi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function nu(e, t, n, r, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, o), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n ?? "";
    (e.value !== a || e.tagName === "OPTION") && (e.value = a),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = mi(n))
      : n == null && a === "string"
      ? ((n = ""), (l = !0))
      : a === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function jt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ru(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function su(e, t, n, r, s = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [l, a] = ou(t);
    if (r) {
      const u = (o[t] = au(r, s));
      jt(e, l, u, a);
    } else i && (ru(e, l, i, a), (o[t] = void 0));
  }
}
const po = /(?:Once|Passive|Capture)$/;
function ou(e) {
  let t;
  if (po.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(po)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let kr = 0;
const iu = Promise.resolve(),
  lu = () => kr || (iu.then(() => (kr = 0)), (kr = Date.now()));
function au(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Je(cu(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = lu()), n;
}
function cu(e, t) {
  if (q(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const go = /^on[a-z]/,
  uu = (e, t, n, r, s = !1, o, i, l, a) => {
    t === "class"
      ? Qc(e, r, s)
      : t === "style"
      ? Zc(e, n, r)
      : sr(t)
      ? fs(t) || su(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : fu(e, t, r, s)
        )
      ? nu(e, t, r, o, i, l, a)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        tu(e, t, r, s));
  };
function fu(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && go.test(t) && J(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (go.test(t) && Re(n))
    ? !1
    : t in e;
}
const du = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
nc.props;
const Qn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return q(t) ? (n) => Vn(t, n) : t;
};
function mu(e) {
  e.target.composing = !0;
}
function _o(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Tr = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = Qn(s);
      const o = r || (s.props && s.props.type === "number");
      jt(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = Gn(l)), e._assign(l);
      }),
        n &&
          jt(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (jt(e, "compositionstart", mu),
          jt(e, "compositionend", _o),
          jt(e, "change", _o));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      o
    ) {
      if (
        ((e._assign = Qn(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (r && e.value.trim() === t) ||
              ((s || e.type === "number") && Gn(e.value) === t))))
      )
        return;
      const i = t ?? "";
      e.value !== i && (e.value = i);
    },
  },
  hu = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = or(t);
      jt(e, "change", () => {
        const o = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? Gn(Zn(i)) : Zn(i)));
        e._assign(e.multiple ? (s ? new Set(o) : o) : o[0]);
      }),
        (e._assign = Qn(r));
    },
    mounted(e, { value: t }) {
      bo(e, t);
    },
    beforeUpdate(e, t, n) {
      e._assign = Qn(n);
    },
    updated(e, { value: t }) {
      bo(e, t);
    },
  };
function bo(e, t) {
  const n = e.multiple;
  if (!(n && !q(t) && !or(t))) {
    for (let r = 0, s = e.options.length; r < s; r++) {
      const o = e.options[r],
        i = Zn(o);
      if (n) q(t) ? (o.selected = Ql(t, i) > -1) : (o.selected = t.has(i));
      else if (rr(Zn(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Zn(e) {
  return "_value" in e ? e._value : e.value;
}
const pu = ["ctrl", "shift", "alt", "meta"],
  gu = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => pu.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  _u =
    (e, t) =>
    (n, ...r) => {
      for (let s = 0; s < t.length; s++) {
        const o = gu[t[s]];
        if (o && o(n, t)) return;
      }
      return e(n, ...r);
    },
  vo = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : mn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), mn(e, !0), r.enter(e))
            : r.leave(e, () => {
                mn(e, !1);
              })
          : mn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      mn(e, t);
    },
  };
function mn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const bu = De({ patchProp: uu }, Jc);
let yo;
function vu() {
  return yo || (yo = Sc(bu));
}
const yu = (...e) => {
  const t = vu().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = Eu(r);
      if (!s) return;
      const o = t._component;
      !J(o) && !o.render && !o.template && (o.template = s.innerHTML),
        (s.innerHTML = "");
      const i = n(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Eu(e) {
  return Re(e) ? document.querySelector(e) : e;
}
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const zr = typeof window < "u",
  wu = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
  Rt = (e) => (wu ? Symbol(e) : e),
  xu = (e, t, n) => Cu({ l: e, k: t, s: n }),
  Cu = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  Ae = (e) => typeof e == "number" && isFinite(e),
  Lu = (e) => Rs(e) === "[object Date]",
  er = (e) => Rs(e) === "[object RegExp]",
  _r = (e) => ie(e) && Object.keys(e).length === 0;
function ku(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Fe = Object.assign;
function Eo(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const Tu = Object.prototype.hasOwnProperty;
function $s(e, t) {
  return Tu.call(e, t);
}
const $e = Array.isArray,
  Pe = (e) => typeof e == "function",
  H = (e) => typeof e == "string",
  ke = (e) => typeof e == "boolean",
  be = (e) => e !== null && typeof e == "object",
  ul = Object.prototype.toString,
  Rs = (e) => ul.call(e),
  ie = (e) => Rs(e) === "[object Object]",
  Su = (e) =>
    e == null
      ? ""
      : $e(e) || (ie(e) && e.toString === ul)
      ? JSON.stringify(e, null, 2)
      : String(e);
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const le = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15,
};
function br(e, t, n = {}) {
  const { domain: r, messages: s, args: o } = n,
    i = e,
    l = new SyntaxError(String(i));
  return (l.code = e), t && (l.location = t), (l.domain = r), l;
}
function $u(e) {
  throw e;
}
function Ru(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Yr(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const pt = " ",
  Iu = "\r",
  Ue = `
`,
  Ou = String.fromCharCode(8232),
  Au = String.fromCharCode(8233);
function Pu(e) {
  const t = e;
  let n = 0,
    r = 1,
    s = 1,
    o = 0;
  const i = (U) => t[U] === Iu && t[U + 1] === Ue,
    l = (U) => t[U] === Ue,
    a = (U) => t[U] === Au,
    u = (U) => t[U] === Ou,
    f = (U) => i(U) || l(U) || a(U) || u(U),
    m = () => n,
    h = () => r,
    v = () => s,
    b = () => o,
    w = (U) => (i(U) || a(U) || u(U) ? Ue : t[U]),
    L = () => w(n),
    _ = () => w(n + o);
  function x() {
    return (o = 0), f(n) && (r++, (s = 0)), i(n) && n++, n++, s++, t[n];
  }
  function S() {
    return i(n + o) && o++, o++, t[n + o];
  }
  function k() {
    (n = 0), (r = 1), (s = 1), (o = 0);
  }
  function T(U = 0) {
    o = U;
  }
  function M() {
    const U = n + o;
    for (; U !== n; ) x();
    o = 0;
  }
  return {
    index: m,
    line: h,
    column: v,
    peekOffset: b,
    charAt: w,
    currentChar: L,
    currentPeek: _,
    next: x,
    peek: S,
    reset: k,
    resetPeek: T,
    skipToPeek: M,
  };
}
const wt = void 0,
  wo = "'",
  Nu = "tokenizer";
function Mu(e, t = {}) {
  const n = t.location !== !1,
    r = Pu(e),
    s = () => r.index(),
    o = () => Ru(r.line(), r.column(), r.index()),
    i = o(),
    l = s(),
    a = {
      currentType: 14,
      offset: l,
      startLoc: i,
      endLoc: i,
      lastType: 14,
      lastOffset: l,
      lastStartLoc: i,
      lastEndLoc: i,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    u = () => a,
    { onError: f } = t;
  function m(c, d, g, ...y) {
    const $ = u();
    if (((d.column += g), (d.offset += g), f)) {
      const O = Yr($.startLoc, d),
        P = br(c, O, { domain: Nu, args: y });
      f(P);
    }
  }
  function h(c, d, g) {
    (c.endLoc = o()), (c.currentType = d);
    const y = { type: d };
    return (
      n && (y.loc = Yr(c.startLoc, c.endLoc)), g != null && (y.value = g), y
    );
  }
  const v = (c) => h(c, 14);
  function b(c, d) {
    return c.currentChar() === d
      ? (c.next(), d)
      : (m(le.EXPECTED_TOKEN, o(), 0, d), "");
  }
  function w(c) {
    let d = "";
    for (; c.currentPeek() === pt || c.currentPeek() === Ue; )
      (d += c.currentPeek()), c.peek();
    return d;
  }
  function L(c) {
    const d = w(c);
    return c.skipToPeek(), d;
  }
  function _(c) {
    if (c === wt) return !1;
    const d = c.charCodeAt(0);
    return (d >= 97 && d <= 122) || (d >= 65 && d <= 90) || d === 95;
  }
  function x(c) {
    if (c === wt) return !1;
    const d = c.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function S(c, d) {
    const { currentType: g } = d;
    if (g !== 2) return !1;
    w(c);
    const y = _(c.currentPeek());
    return c.resetPeek(), y;
  }
  function k(c, d) {
    const { currentType: g } = d;
    if (g !== 2) return !1;
    w(c);
    const y = c.currentPeek() === "-" ? c.peek() : c.currentPeek(),
      $ = x(y);
    return c.resetPeek(), $;
  }
  function T(c, d) {
    const { currentType: g } = d;
    if (g !== 2) return !1;
    w(c);
    const y = c.currentPeek() === wo;
    return c.resetPeek(), y;
  }
  function M(c, d) {
    const { currentType: g } = d;
    if (g !== 8) return !1;
    w(c);
    const y = c.currentPeek() === ".";
    return c.resetPeek(), y;
  }
  function U(c, d) {
    const { currentType: g } = d;
    if (g !== 9) return !1;
    w(c);
    const y = _(c.currentPeek());
    return c.resetPeek(), y;
  }
  function K(c, d) {
    const { currentType: g } = d;
    if (!(g === 8 || g === 12)) return !1;
    w(c);
    const y = c.currentPeek() === ":";
    return c.resetPeek(), y;
  }
  function G(c, d) {
    const { currentType: g } = d;
    if (g !== 10) return !1;
    const y = () => {
        const O = c.currentPeek();
        return O === "{"
          ? _(c.peek())
          : O === "@" ||
            O === "%" ||
            O === "|" ||
            O === ":" ||
            O === "." ||
            O === pt ||
            !O
          ? !1
          : O === Ue
          ? (c.peek(), y())
          : _(O);
      },
      $ = y();
    return c.resetPeek(), $;
  }
  function z(c) {
    w(c);
    const d = c.currentPeek() === "|";
    return c.resetPeek(), d;
  }
  function ce(c) {
    const d = w(c),
      g = c.currentPeek() === "%" && c.peek() === "{";
    return c.resetPeek(), { isModulo: g, hasSpace: d.length > 0 };
  }
  function me(c, d = !0) {
    const g = ($ = !1, O = "", P = !1) => {
        const N = c.currentPeek();
        return N === "{"
          ? O === "%"
            ? !1
            : $
          : N === "@" || !N
          ? O === "%"
            ? !0
            : $
          : N === "%"
          ? (c.peek(), g($, "%", !0))
          : N === "|"
          ? O === "%" || P
            ? !0
            : !(O === pt || O === Ue)
          : N === pt
          ? (c.peek(), g(!0, pt, P))
          : N === Ue
          ? (c.peek(), g(!0, Ue, P))
          : !0;
      },
      y = g();
    return d && c.resetPeek(), y;
  }
  function we(c, d) {
    const g = c.currentChar();
    return g === wt ? wt : d(g) ? (c.next(), g) : null;
  }
  function Ne(c) {
    return we(c, (g) => {
      const y = g.charCodeAt(0);
      return (
        (y >= 97 && y <= 122) ||
        (y >= 65 && y <= 90) ||
        (y >= 48 && y <= 57) ||
        y === 95 ||
        y === 36
      );
    });
  }
  function et(c) {
    return we(c, (g) => {
      const y = g.charCodeAt(0);
      return y >= 48 && y <= 57;
    });
  }
  function he(c) {
    return we(c, (g) => {
      const y = g.charCodeAt(0);
      return (
        (y >= 48 && y <= 57) || (y >= 65 && y <= 70) || (y >= 97 && y <= 102)
      );
    });
  }
  function ee(c) {
    let d = "",
      g = "";
    for (; (d = et(c)); ) g += d;
    return g;
  }
  function te(c) {
    L(c);
    const d = c.currentChar();
    return d !== "%" && m(le.EXPECTED_TOKEN, o(), 0, d), c.next(), "%";
  }
  function Ie(c) {
    let d = "";
    for (;;) {
      const g = c.currentChar();
      if (g === "{" || g === "}" || g === "@" || g === "|" || !g) break;
      if (g === "%")
        if (me(c)) (d += g), c.next();
        else break;
      else if (g === pt || g === Ue)
        if (me(c)) (d += g), c.next();
        else {
          if (z(c)) break;
          (d += g), c.next();
        }
      else (d += g), c.next();
    }
    return d;
  }
  function re(c) {
    L(c);
    let d = "",
      g = "";
    for (; (d = Ne(c)); ) g += d;
    return (
      c.currentChar() === wt && m(le.UNTERMINATED_CLOSING_BRACE, o(), 0), g
    );
  }
  function xe(c) {
    L(c);
    let d = "";
    return (
      c.currentChar() === "-" ? (c.next(), (d += `-${ee(c)}`)) : (d += ee(c)),
      c.currentChar() === wt && m(le.UNTERMINATED_CLOSING_BRACE, o(), 0),
      d
    );
  }
  function pe(c) {
    L(c), b(c, "'");
    let d = "",
      g = "";
    const y = (O) => O !== wo && O !== Ue;
    for (; (d = we(c, y)); ) d === "\\" ? (g += mt(c)) : (g += d);
    const $ = c.currentChar();
    return $ === Ue || $ === wt
      ? (m(le.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        $ === Ue && (c.next(), b(c, "'")),
        g)
      : (b(c, "'"), g);
  }
  function mt(c) {
    const d = c.currentChar();
    switch (d) {
      case "\\":
      case "'":
        return c.next(), `\\${d}`;
      case "u":
        return ht(c, d, 4);
      case "U":
        return ht(c, d, 6);
      default:
        return m(le.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, d), "";
    }
  }
  function ht(c, d, g) {
    b(c, d);
    let y = "";
    for (let $ = 0; $ < g; $++) {
      const O = he(c);
      if (!O) {
        m(
          le.INVALID_UNICODE_ESCAPE_SEQUENCE,
          o(),
          0,
          `\\${d}${y}${c.currentChar()}`
        );
        break;
      }
      y += O;
    }
    return `\\${d}${y}`;
  }
  function I(c) {
    L(c);
    let d = "",
      g = "";
    const y = ($) => $ !== "{" && $ !== "}" && $ !== pt && $ !== Ue;
    for (; (d = we(c, y)); ) g += d;
    return g;
  }
  function j(c) {
    let d = "",
      g = "";
    for (; (d = Ne(c)); ) g += d;
    return g;
  }
  function F(c) {
    const d = (g = !1, y) => {
      const $ = c.currentChar();
      return $ === "{" || $ === "%" || $ === "@" || $ === "|" || !$ || $ === pt
        ? y
        : $ === Ue
        ? ((y += $), c.next(), d(g, y))
        : ((y += $), c.next(), d(!0, y));
    };
    return d(!1, "");
  }
  function B(c) {
    L(c);
    const d = b(c, "|");
    return L(c), d;
  }
  function Z(c, d) {
    let g = null;
    switch (c.currentChar()) {
      case "{":
        return (
          d.braceNest >= 1 && m(le.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
          c.next(),
          (g = h(d, 2, "{")),
          L(c),
          d.braceNest++,
          g
        );
      case "}":
        return (
          d.braceNest > 0 &&
            d.currentType === 2 &&
            m(le.EMPTY_PLACEHOLDER, o(), 0),
          c.next(),
          (g = h(d, 3, "}")),
          d.braceNest--,
          d.braceNest > 0 && L(c),
          d.inLinked && d.braceNest === 0 && (d.inLinked = !1),
          g
        );
      case "@":
        return (
          d.braceNest > 0 && m(le.UNTERMINATED_CLOSING_BRACE, o(), 0),
          (g = fe(c, d) || v(d)),
          (d.braceNest = 0),
          g
        );
      default:
        let $ = !0,
          O = !0,
          P = !0;
        if (z(c))
          return (
            d.braceNest > 0 && m(le.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (g = h(d, 1, B(c))),
            (d.braceNest = 0),
            (d.inLinked = !1),
            g
          );
        if (
          d.braceNest > 0 &&
          (d.currentType === 5 || d.currentType === 6 || d.currentType === 7)
        )
          return (
            m(le.UNTERMINATED_CLOSING_BRACE, o(), 0), (d.braceNest = 0), X(c, d)
          );
        if (($ = S(c, d))) return (g = h(d, 5, re(c))), L(c), g;
        if ((O = k(c, d))) return (g = h(d, 6, xe(c))), L(c), g;
        if ((P = T(c, d))) return (g = h(d, 7, pe(c))), L(c), g;
        if (!$ && !O && !P)
          return (
            (g = h(d, 13, I(c))),
            m(le.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, g.value),
            L(c),
            g
          );
        break;
    }
    return g;
  }
  function fe(c, d) {
    const { currentType: g } = d;
    let y = null;
    const $ = c.currentChar();
    switch (
      ((g === 8 || g === 9 || g === 12 || g === 10) &&
        ($ === Ue || $ === pt) &&
        m(le.INVALID_LINKED_FORMAT, o(), 0),
      $)
    ) {
      case "@":
        return c.next(), (y = h(d, 8, "@")), (d.inLinked = !0), y;
      case ".":
        return L(c), c.next(), h(d, 9, ".");
      case ":":
        return L(c), c.next(), h(d, 10, ":");
      default:
        return z(c)
          ? ((y = h(d, 1, B(c))), (d.braceNest = 0), (d.inLinked = !1), y)
          : M(c, d) || K(c, d)
          ? (L(c), fe(c, d))
          : U(c, d)
          ? (L(c), h(d, 12, j(c)))
          : G(c, d)
          ? (L(c), $ === "{" ? Z(c, d) || y : h(d, 11, F(c)))
          : (g === 8 && m(le.INVALID_LINKED_FORMAT, o(), 0),
            (d.braceNest = 0),
            (d.inLinked = !1),
            X(c, d));
    }
  }
  function X(c, d) {
    let g = { type: 14 };
    if (d.braceNest > 0) return Z(c, d) || v(d);
    if (d.inLinked) return fe(c, d) || v(d);
    switch (c.currentChar()) {
      case "{":
        return Z(c, d) || v(d);
      case "}":
        return m(le.UNBALANCED_CLOSING_BRACE, o(), 0), c.next(), h(d, 3, "}");
      case "@":
        return fe(c, d) || v(d);
      default:
        if (z(c))
          return (g = h(d, 1, B(c))), (d.braceNest = 0), (d.inLinked = !1), g;
        const { isModulo: $, hasSpace: O } = ce(c);
        if ($) return O ? h(d, 0, Ie(c)) : h(d, 4, te(c));
        if (me(c)) return h(d, 0, Ie(c));
        break;
    }
    return g;
  }
  function p() {
    const { currentType: c, offset: d, startLoc: g, endLoc: y } = a;
    return (
      (a.lastType = c),
      (a.lastOffset = d),
      (a.lastStartLoc = g),
      (a.lastEndLoc = y),
      (a.offset = s()),
      (a.startLoc = o()),
      r.currentChar() === wt ? h(a, 14) : X(r, a)
    );
  }
  return { nextToken: p, currentOffset: s, currentPosition: o, context: u };
}
const Fu = "parser",
  Du = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ju(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function Uu(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(_, x, S, k, ...T) {
    const M = _.currentPosition();
    if (((M.offset += k), (M.column += k), n)) {
      const U = Yr(S, M),
        K = br(x, U, { domain: Fu, args: T });
      n(K);
    }
  }
  function s(_, x, S) {
    const k = { type: _, start: x, end: x };
    return t && (k.loc = { start: S, end: S }), k;
  }
  function o(_, x, S, k) {
    (_.end = x), k && (_.type = k), t && _.loc && (_.loc.end = S);
  }
  function i(_, x) {
    const S = _.context(),
      k = s(3, S.offset, S.startLoc);
    return (k.value = x), o(k, _.currentOffset(), _.currentPosition()), k;
  }
  function l(_, x) {
    const S = _.context(),
      { lastOffset: k, lastStartLoc: T } = S,
      M = s(5, k, T);
    return (
      (M.index = parseInt(x, 10)),
      _.nextToken(),
      o(M, _.currentOffset(), _.currentPosition()),
      M
    );
  }
  function a(_, x) {
    const S = _.context(),
      { lastOffset: k, lastStartLoc: T } = S,
      M = s(4, k, T);
    return (
      (M.key = x),
      _.nextToken(),
      o(M, _.currentOffset(), _.currentPosition()),
      M
    );
  }
  function u(_, x) {
    const S = _.context(),
      { lastOffset: k, lastStartLoc: T } = S,
      M = s(9, k, T);
    return (
      (M.value = x.replace(Du, ju)),
      _.nextToken(),
      o(M, _.currentOffset(), _.currentPosition()),
      M
    );
  }
  function f(_) {
    const x = _.nextToken(),
      S = _.context(),
      { lastOffset: k, lastStartLoc: T } = S,
      M = s(8, k, T);
    return x.type !== 12
      ? (r(_, le.UNEXPECTED_EMPTY_LINKED_MODIFIER, S.lastStartLoc, 0),
        (M.value = ""),
        o(M, k, T),
        { nextConsumeToken: x, node: M })
      : (x.value == null &&
          r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, ct(x)),
        (M.value = x.value || ""),
        o(M, _.currentOffset(), _.currentPosition()),
        { node: M });
  }
  function m(_, x) {
    const S = _.context(),
      k = s(7, S.offset, S.startLoc);
    return (k.value = x), o(k, _.currentOffset(), _.currentPosition()), k;
  }
  function h(_) {
    const x = _.context(),
      S = s(6, x.offset, x.startLoc);
    let k = _.nextToken();
    if (k.type === 9) {
      const T = f(_);
      (S.modifier = T.node), (k = T.nextConsumeToken || _.nextToken());
    }
    switch (
      (k.type !== 10 &&
        r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(k)),
      (k = _.nextToken()),
      k.type === 2 && (k = _.nextToken()),
      k.type)
    ) {
      case 11:
        k.value == null &&
          r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(k)),
          (S.key = m(_, k.value || ""));
        break;
      case 5:
        k.value == null &&
          r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(k)),
          (S.key = a(_, k.value || ""));
        break;
      case 6:
        k.value == null &&
          r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(k)),
          (S.key = l(_, k.value || ""));
        break;
      case 7:
        k.value == null &&
          r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(k)),
          (S.key = u(_, k.value || ""));
        break;
      default:
        r(_, le.UNEXPECTED_EMPTY_LINKED_KEY, x.lastStartLoc, 0);
        const T = _.context(),
          M = s(7, T.offset, T.startLoc);
        return (
          (M.value = ""),
          o(M, T.offset, T.startLoc),
          (S.key = M),
          o(S, T.offset, T.startLoc),
          { nextConsumeToken: k, node: S }
        );
    }
    return o(S, _.currentOffset(), _.currentPosition()), { node: S };
  }
  function v(_) {
    const x = _.context(),
      S = x.currentType === 1 ? _.currentOffset() : x.offset,
      k = x.currentType === 1 ? x.endLoc : x.startLoc,
      T = s(2, S, k);
    T.items = [];
    let M = null;
    do {
      const G = M || _.nextToken();
      switch (((M = null), G.type)) {
        case 0:
          G.value == null &&
            r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(G)),
            T.items.push(i(_, G.value || ""));
          break;
        case 6:
          G.value == null &&
            r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(G)),
            T.items.push(l(_, G.value || ""));
          break;
        case 5:
          G.value == null &&
            r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(G)),
            T.items.push(a(_, G.value || ""));
          break;
        case 7:
          G.value == null &&
            r(_, le.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(G)),
            T.items.push(u(_, G.value || ""));
          break;
        case 8:
          const z = h(_);
          T.items.push(z.node), (M = z.nextConsumeToken || null);
          break;
      }
    } while (x.currentType !== 14 && x.currentType !== 1);
    const U = x.currentType === 1 ? x.lastOffset : _.currentOffset(),
      K = x.currentType === 1 ? x.lastEndLoc : _.currentPosition();
    return o(T, U, K), T;
  }
  function b(_, x, S, k) {
    const T = _.context();
    let M = k.items.length === 0;
    const U = s(1, x, S);
    (U.cases = []), U.cases.push(k);
    do {
      const K = v(_);
      M || (M = K.items.length === 0), U.cases.push(K);
    } while (T.currentType !== 14);
    return (
      M && r(_, le.MUST_HAVE_MESSAGES_IN_PLURAL, S, 0),
      o(U, _.currentOffset(), _.currentPosition()),
      U
    );
  }
  function w(_) {
    const x = _.context(),
      { offset: S, startLoc: k } = x,
      T = v(_);
    return x.currentType === 14 ? T : b(_, S, k, T);
  }
  function L(_) {
    const x = Mu(_, Fe({}, e)),
      S = x.context(),
      k = s(0, S.offset, S.startLoc);
    return (
      t && k.loc && (k.loc.source = _),
      (k.body = w(x)),
      S.currentType !== 14 &&
        r(
          x,
          le.UNEXPECTED_LEXICAL_ANALYSIS,
          S.lastStartLoc,
          0,
          _[S.offset] || ""
        ),
      o(k, x.currentOffset(), x.currentPosition()),
      k
    );
  }
  return { parse: L };
}
function ct(e) {
  if (e.type === 14) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Vu(e, t = {}) {
  const n = { ast: e, helpers: new Set() };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function xo(e, t) {
  for (let n = 0; n < e.length; n++) Is(e[n], t);
}
function Is(e, t) {
  switch (e.type) {
    case 1:
      xo(e.cases, t), t.helper("plural");
      break;
    case 2:
      xo(e.items, t);
      break;
    case 6:
      Is(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function Hu(e, t = {}) {
  const n = Vu(e);
  n.helper("normalize"), e.body && Is(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Bu(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: s, needIndent: o } = t,
    i = {
      source: e.loc.source,
      filename: r,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: s,
      needIndent: o,
      indentLevel: 0,
    },
    l = () => i;
  function a(w, L) {
    i.code += w;
  }
  function u(w, L = !0) {
    const _ = L ? s : "";
    a(o ? _ + "  ".repeat(w) : _);
  }
  function f(w = !0) {
    const L = ++i.indentLevel;
    w && u(L);
  }
  function m(w = !0) {
    const L = --i.indentLevel;
    w && u(L);
  }
  function h() {
    u(i.indentLevel);
  }
  return {
    context: l,
    push: a,
    indent: f,
    deindent: m,
    newline: h,
    helper: (w) => `_${w}`,
    needIndent: () => i.needIndent,
  };
}
function Wu(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`),
    on(e, t.key),
    t.modifier
      ? (e.push(", "), on(e, t.modifier), e.push(", _type"))
      : e.push(", undefined, _type"),
    e.push(")");
}
function Ku(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const s = t.items.length;
  for (let o = 0; o < s && (on(e, t.items[o]), o !== s - 1); o++) e.push(", ");
  e.deindent(r()), e.push("])");
}
function qu(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const s = t.cases.length;
    for (let o = 0; o < s && (on(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Gu(e, t) {
  t.body ? on(e, t.body) : e.push("null");
}
function on(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Gu(e, t);
      break;
    case 1:
      qu(e, t);
      break;
    case 2:
      Ku(e, t);
      break;
    case 6:
      Wu(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const Xu = (e, t = {}) => {
  const n = H(t.mode) ? t.mode : "normal",
    r = H(t.filename) ? t.filename : "message.intl",
    s = !!t.sourceMap,
    o =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === "arrow"
        ? ";"
        : `
`,
    i = t.needIndent ? t.needIndent : n !== "arrow",
    l = e.helpers || [],
    a = Bu(e, {
      mode: n,
      filename: r,
      sourceMap: s,
      breakLineCode: o,
      needIndent: i,
    });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    a.indent(i),
    l.length > 0 &&
      (a.push(`const { ${l.map((m) => `${m}: _${m}`).join(", ")} } = ctx`),
      a.newline()),
    a.push("return "),
    on(a, e),
    a.deindent(i),
    a.push("}");
  const { code: u, map: f } = a.context();
  return { ast: e, code: u, map: f ? f.toJSON() : void 0 };
};
function zu(e, t = {}) {
  const n = Fe({}, t),
    s = Uu(n).parse(e);
  return Hu(s, n), Xu(s, n);
}
/*!
 * core-base v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const It = [];
It[0] = { w: [0], i: [3, 0], ["["]: [4], o: [7] };
It[1] = { w: [1], ["."]: [2], ["["]: [4], o: [7] };
It[2] = { w: [2], i: [3, 0], [0]: [3, 0] };
It[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  o: [7, 1],
};
It[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [4, 2],
  ["]"]: [1, 3],
  o: 8,
  l: [4, 0],
};
It[5] = { ["'"]: [4, 0], o: 8, l: [5, 0] };
It[6] = { ['"']: [4, 0], o: 8, l: [6, 0] };
const Yu = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ju(e) {
  return Yu.test(e);
}
function Qu(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Zu(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function ef(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : Ju(t)
    ? Qu(t)
    : "*" + t;
}
function tf(e) {
  const t = [];
  let n = -1,
    r = 0,
    s = 0,
    o,
    i,
    l,
    a,
    u,
    f,
    m;
  const h = [];
  (h[0] = () => {
    i === void 0 ? (i = l) : (i += l);
  }),
    (h[1] = () => {
      i !== void 0 && (t.push(i), (i = void 0));
    }),
    (h[2] = () => {
      h[0](), s++;
    }),
    (h[3] = () => {
      if (s > 0) s--, (r = 4), h[0]();
      else {
        if (((s = 0), i === void 0 || ((i = ef(i)), i === !1))) return !1;
        h[1]();
      }
    });
  function v() {
    const b = e[n + 1];
    if ((r === 5 && b === "'") || (r === 6 && b === '"'))
      return n++, (l = "\\" + b), h[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (o = e[n]), !(o === "\\" && v()))) {
      if (
        ((a = Zu(o)),
        (m = It[r]),
        (u = m[a] || m.l || 8),
        u === 8 ||
          ((r = u[0]),
          u[1] !== void 0 && ((f = h[u[1]]), f && ((l = o), f() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const Co = new Map();
function nf(e, t) {
  return be(e) ? e[t] : null;
}
function rf(e, t) {
  if (!be(e)) return null;
  let n = Co.get(t);
  if ((n || ((n = tf(t)), n && Co.set(t, n)), !n)) return null;
  const r = n.length;
  let s = e,
    o = 0;
  for (; o < r; ) {
    const i = s[n[o]];
    if (i === void 0) return null;
    (s = i), o++;
  }
  return s;
}
const sf = (e) => e,
  of = (e) => "",
  lf = "text",
  af = (e) => (e.length === 0 ? "" : e.join("")),
  cf = Su;
function Lo(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function uf(e) {
  const t = Ae(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ae(e.named.count) || Ae(e.named.n))
    ? Ae(e.named.count)
      ? e.named.count
      : Ae(e.named.n)
      ? e.named.n
      : t
    : t;
}
function ff(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function df(e = {}) {
  const t = e.locale,
    n = uf(e),
    r =
      be(e.pluralRules) && H(t) && Pe(e.pluralRules[t]) ? e.pluralRules[t] : Lo,
    s = be(e.pluralRules) && H(t) && Pe(e.pluralRules[t]) ? Lo : void 0,
    o = (_) => _[r(n, _.length, s)],
    i = e.list || [],
    l = (_) => i[_],
    a = e.named || {};
  Ae(e.pluralIndex) && ff(n, a);
  const u = (_) => a[_];
  function f(_) {
    const x = Pe(e.messages)
      ? e.messages(_)
      : be(e.messages)
      ? e.messages[_]
      : !1;
    return x || (e.parent ? e.parent.message(_) : of);
  }
  const m = (_) => (e.modifiers ? e.modifiers[_] : sf),
    h =
      ie(e.processor) && Pe(e.processor.normalize) ? e.processor.normalize : af,
    v =
      ie(e.processor) && Pe(e.processor.interpolate)
        ? e.processor.interpolate
        : cf,
    b = ie(e.processor) && H(e.processor.type) ? e.processor.type : lf,
    L = {
      list: l,
      named: u,
      plural: o,
      linked: (_, ...x) => {
        const [S, k] = x;
        let T = "text",
          M = "";
        x.length === 1
          ? be(S)
            ? ((M = S.modifier || M), (T = S.type || T))
            : H(S) && (M = S || M)
          : x.length === 2 && (H(S) && (M = S || M), H(k) && (T = k || T));
        let U = f(_)(L);
        return T === "vnode" && $e(U) && M && (U = U[0]), M ? m(M)(U, T) : U;
      },
      message: f,
      type: b,
      interpolate: v,
      normalize: h,
    };
  return L;
}
function mf(e, t, n) {
  return [
    ...new Set([n, ...($e(t) ? t : be(t) ? Object.keys(t) : H(t) ? [t] : [n])]),
  ];
}
function fl(e, t, n) {
  const r = H(n) ? n : Os,
    s = e;
  s.__localeChainCache || (s.__localeChainCache = new Map());
  let o = s.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let i = [n];
    for (; $e(i); ) i = ko(o, i, t);
    const l = $e(t) || !ie(t) ? t : t.default ? t.default : null;
    (i = H(l) ? [l] : l), $e(i) && ko(o, i, !1), s.__localeChainCache.set(r, o);
  }
  return o;
}
function ko(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ke(r); s++) {
    const o = t[s];
    H(o) && (r = hf(e, t[s], n));
  }
  return r;
}
function hf(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const o = s.join("-");
    (r = pf(e, o, n)), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function pf(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), ($e(n) || ie(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const gf = "9.2.2",
  vr = -1,
  Os = "en-US",
  To = "",
  So = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function _f() {
  return {
    upper: (e, t) =>
      t === "text" && H(e)
        ? e.toUpperCase()
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && H(e)
        ? e.toLowerCase()
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && H(e)
        ? So(e)
        : t === "vnode" && be(e) && "__v_isVNode" in e
        ? So(e.children)
        : e,
  };
}
let dl;
function bf(e) {
  dl = e;
}
let ml;
function vf(e) {
  ml = e;
}
let hl;
function yf(e) {
  hl = e;
}
let $o = 0;
function Ef(e = {}) {
  const t = H(e.version) ? e.version : gf,
    n = H(e.locale) ? e.locale : Os,
    r =
      $e(e.fallbackLocale) ||
      ie(e.fallbackLocale) ||
      H(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : n,
    s = ie(e.messages) ? e.messages : { [n]: {} },
    o = ie(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} },
    i = ie(e.numberFormats) ? e.numberFormats : { [n]: {} },
    l = Fe({}, e.modifiers || {}, _f()),
    a = e.pluralRules || {},
    u = Pe(e.missing) ? e.missing : null,
    f = ke(e.missingWarn) || er(e.missingWarn) ? e.missingWarn : !0,
    m = ke(e.fallbackWarn) || er(e.fallbackWarn) ? e.fallbackWarn : !0,
    h = !!e.fallbackFormat,
    v = !!e.unresolving,
    b = Pe(e.postTranslation) ? e.postTranslation : null,
    w = ie(e.processor) ? e.processor : null,
    L = ke(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    _ = !!e.escapeParameter,
    x = Pe(e.messageCompiler) ? e.messageCompiler : dl,
    S = Pe(e.messageResolver) ? e.messageResolver : ml || nf,
    k = Pe(e.localeFallbacker) ? e.localeFallbacker : hl || mf,
    T = be(e.fallbackContext) ? e.fallbackContext : void 0,
    M = Pe(e.onWarn) ? e.onWarn : ku,
    U = e,
    K = be(U.__datetimeFormatters) ? U.__datetimeFormatters : new Map(),
    G = be(U.__numberFormatters) ? U.__numberFormatters : new Map(),
    z = be(U.__meta) ? U.__meta : {};
  $o++;
  const ce = {
    version: t,
    cid: $o,
    locale: n,
    fallbackLocale: r,
    messages: s,
    modifiers: l,
    pluralRules: a,
    missing: u,
    missingWarn: f,
    fallbackWarn: m,
    fallbackFormat: h,
    unresolving: v,
    postTranslation: b,
    processor: w,
    warnHtmlMessage: L,
    escapeParameter: _,
    messageCompiler: x,
    messageResolver: S,
    localeFallbacker: k,
    fallbackContext: T,
    onWarn: M,
    __meta: z,
  };
  return (
    (ce.datetimeFormats = o),
    (ce.numberFormats = i),
    (ce.__datetimeFormatters = K),
    (ce.__numberFormatters = G),
    ce
  );
}
function As(e, t, n, r, s) {
  const { missing: o, onWarn: i } = e;
  if (o !== null) {
    const l = o(e, n, t, s);
    return H(l) ? l : t;
  } else return t;
}
function hn(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
const wf = (e) => e;
let Ro = Object.create(null);
function xf(e, t = {}) {
  {
    const r = (t.onCacheKey || wf)(e),
      s = Ro[r];
    if (s) return s;
    let o = !1;
    const i = t.onError || $u;
    t.onError = (u) => {
      (o = !0), i(u);
    };
    const { code: l } = zu(e, t),
      a = new Function(`return ${l}`)();
    return o ? a : (Ro[r] = a);
  }
}
let pl = le.__EXTEND_POINT__;
const Sr = () => ++pl,
  Jt = {
    INVALID_ARGUMENT: pl,
    INVALID_DATE_ARGUMENT: Sr(),
    INVALID_ISO_DATE_ARGUMENT: Sr(),
    __EXTEND_POINT__: Sr(),
  };
function Qt(e) {
  return br(e, null, void 0);
}
const Io = () => "",
  Wt = (e) => Pe(e);
function Oo(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: s,
      messageCompiler: o,
      fallbackLocale: i,
      messages: l,
    } = e,
    [a, u] = Jr(...t),
    f = ke(u.missingWarn) ? u.missingWarn : e.missingWarn,
    m = ke(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
    h = ke(u.escapeParameter) ? u.escapeParameter : e.escapeParameter,
    v = !!u.resolvedMessage,
    b =
      H(u.default) || ke(u.default)
        ? ke(u.default)
          ? o
            ? a
            : () => a
          : u.default
        : n
        ? o
          ? a
          : () => a
        : "",
    w = n || b !== "",
    L = H(u.locale) ? u.locale : e.locale;
  h && Cf(u);
  let [_, x, S] = v ? [a, L, l[L] || {}] : gl(e, a, L, i, m, f),
    k = _,
    T = a;
  if (
    (!v && !(H(k) || Wt(k)) && w && ((k = b), (T = k)),
    !v && (!(H(k) || Wt(k)) || !H(x)))
  )
    return s ? vr : a;
  let M = !1;
  const U = () => {
      M = !0;
    },
    K = Wt(k) ? k : _l(e, a, x, k, T, U);
  if (M) return k;
  const G = Tf(e, x, S, u),
    z = df(G),
    ce = Lf(e, K, z);
  return r ? r(ce, a) : ce;
}
function Cf(e) {
  $e(e.list)
    ? (e.list = e.list.map((t) => (H(t) ? Eo(t) : t)))
    : be(e.named) &&
      Object.keys(e.named).forEach((t) => {
        H(e.named[t]) && (e.named[t] = Eo(e.named[t]));
      });
}
function gl(e, t, n, r, s, o) {
  const { messages: i, onWarn: l, messageResolver: a, localeFallbacker: u } = e,
    f = u(e, r, n);
  let m = {},
    h,
    v = null;
  const b = "translate";
  for (
    let w = 0;
    w < f.length &&
    ((h = f[w]),
    (m = i[h] || {}),
    (v = a(m, t)) === null && (v = m[t]),
    !(H(v) || Pe(v)));
    w++
  ) {
    const L = As(e, t, h, o, b);
    L !== t && (v = L);
  }
  return [v, h, m];
}
function _l(e, t, n, r, s, o) {
  const { messageCompiler: i, warnHtmlMessage: l } = e;
  if (Wt(r)) {
    const u = r;
    return (u.locale = u.locale || n), (u.key = u.key || t), u;
  }
  if (i == null) {
    const u = () => r;
    return (u.locale = n), (u.key = t), u;
  }
  const a = i(r, kf(e, n, s, r, l, o));
  return (a.locale = n), (a.key = t), (a.source = r), a;
}
function Lf(e, t, n) {
  return t(n);
}
function Jr(...e) {
  const [t, n, r] = e,
    s = {};
  if (!H(t) && !Ae(t) && !Wt(t)) throw Qt(Jt.INVALID_ARGUMENT);
  const o = Ae(t) ? String(t) : (Wt(t), t);
  return (
    Ae(n)
      ? (s.plural = n)
      : H(n)
      ? (s.default = n)
      : ie(n) && !_r(n)
      ? (s.named = n)
      : $e(n) && (s.list = n),
    Ae(r) ? (s.plural = r) : H(r) ? (s.default = r) : ie(r) && Fe(s, r),
    [o, s]
  );
}
function kf(e, t, n, r, s, o) {
  return {
    warnHtmlMessage: s,
    onError: (i) => {
      throw (o && o(i), i);
    },
    onCacheKey: (i) => xu(t, n, i),
  };
}
function Tf(e, t, n, r) {
  const {
      modifiers: s,
      pluralRules: o,
      messageResolver: i,
      fallbackLocale: l,
      fallbackWarn: a,
      missingWarn: u,
      fallbackContext: f,
    } = e,
    h = {
      locale: t,
      modifiers: s,
      pluralRules: o,
      messages: (v) => {
        let b = i(n, v);
        if (b == null && f) {
          const [, , w] = gl(f, v, t, l, a, u);
          b = i(w, v);
        }
        if (H(b)) {
          let w = !1;
          const _ = _l(e, v, t, b, v, () => {
            w = !0;
          });
          return w ? Io : _;
        } else return Wt(b) ? b : Io;
      },
    };
  return (
    e.processor && (h.processor = e.processor),
    r.list && (h.list = r.list),
    r.named && (h.named = r.named),
    Ae(r.plural) && (h.pluralIndex = r.plural),
    h
  );
}
function Ao(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: i,
    } = e,
    { __datetimeFormatters: l } = e,
    [a, u, f, m] = Qr(...t),
    h = ke(f.missingWarn) ? f.missingWarn : e.missingWarn;
  ke(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const v = !!f.part,
    b = H(f.locale) ? f.locale : e.locale,
    w = i(e, s, b);
  if (!H(a) || a === "") return new Intl.DateTimeFormat(b, m).format(u);
  let L = {},
    _,
    x = null;
  const S = "datetime format";
  for (
    let M = 0;
    M < w.length && ((_ = w[M]), (L = n[_] || {}), (x = L[a]), !ie(x));
    M++
  )
    As(e, a, _, h, S);
  if (!ie(x) || !H(_)) return r ? vr : a;
  let k = `${_}__${a}`;
  _r(m) || (k = `${k}__${JSON.stringify(m)}`);
  let T = l.get(k);
  return (
    T || ((T = new Intl.DateTimeFormat(_, Fe({}, x, m))), l.set(k, T)),
    v ? T.formatToParts(u) : T.format(u)
  );
}
const bl = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function Qr(...e) {
  const [t, n, r, s] = e,
    o = {};
  let i = {},
    l;
  if (H(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a) throw Qt(Jt.INVALID_ISO_DATE_ARGUMENT);
    const u = a[3]
      ? a[3].trim().startsWith("T")
        ? `${a[1].trim()}${a[3].trim()}`
        : `${a[1].trim()}T${a[3].trim()}`
      : a[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw Qt(Jt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Lu(t)) {
    if (isNaN(t.getTime())) throw Qt(Jt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Ae(t)) l = t;
  else throw Qt(Jt.INVALID_ARGUMENT);
  return (
    H(n)
      ? (o.key = n)
      : ie(n) &&
        Object.keys(n).forEach((a) => {
          bl.includes(a) ? (i[a] = n[a]) : (o[a] = n[a]);
        }),
    H(r) ? (o.locale = r) : ie(r) && (i = r),
    ie(s) && (i = s),
    [o.key || "", l, o, i]
  );
}
function Po(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o);
  }
}
function No(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: i,
    } = e,
    { __numberFormatters: l } = e,
    [a, u, f, m] = Zr(...t),
    h = ke(f.missingWarn) ? f.missingWarn : e.missingWarn;
  ke(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const v = !!f.part,
    b = H(f.locale) ? f.locale : e.locale,
    w = i(e, s, b);
  if (!H(a) || a === "") return new Intl.NumberFormat(b, m).format(u);
  let L = {},
    _,
    x = null;
  const S = "number format";
  for (
    let M = 0;
    M < w.length && ((_ = w[M]), (L = n[_] || {}), (x = L[a]), !ie(x));
    M++
  )
    As(e, a, _, h, S);
  if (!ie(x) || !H(_)) return r ? vr : a;
  let k = `${_}__${a}`;
  _r(m) || (k = `${k}__${JSON.stringify(m)}`);
  let T = l.get(k);
  return (
    T || ((T = new Intl.NumberFormat(_, Fe({}, x, m))), l.set(k, T)),
    v ? T.formatToParts(u) : T.format(u)
  );
}
const vl = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function Zr(...e) {
  const [t, n, r, s] = e,
    o = {};
  let i = {};
  if (!Ae(t)) throw Qt(Jt.INVALID_ARGUMENT);
  const l = t;
  return (
    H(n)
      ? (o.key = n)
      : ie(n) &&
        Object.keys(n).forEach((a) => {
          vl.includes(a) ? (i[a] = n[a]) : (o[a] = n[a]);
        }),
    H(r) ? (o.locale = r) : ie(r) && (i = r),
    ie(s) && (i = s),
    [o.key || "", l, o, i]
  );
}
function Mo(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o);
  }
}
/*!
 * vue-i18n v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Sf = "9.2.2";
let yl = le.__EXTEND_POINT__;
const He = () => ++yl,
  Xe = {
    UNEXPECTED_RETURN_TYPE: yl,
    INVALID_ARGUMENT: He(),
    MUST_BE_CALL_SETUP_TOP: He(),
    NOT_INSLALLED: He(),
    NOT_AVAILABLE_IN_LEGACY_MODE: He(),
    REQUIRED_VALUE: He(),
    INVALID_VALUE: He(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: He(),
    NOT_INSLALLED_WITH_PROVIDE: He(),
    UNEXPECTED_ERROR: He(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: He(),
    BRIDGE_SUPPORT_VUE_2_ONLY: He(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: He(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: He(),
    __EXTEND_POINT__: He(),
  };
function Ze(e, ...t) {
  return br(e, null, void 0);
}
const es = Rt("__transrateVNode"),
  ts = Rt("__datetimeParts"),
  ns = Rt("__numberParts"),
  $f = Rt("__setPluralRules");
Rt("__intlifyMeta");
const Rf = Rt("__injectWithOption");
function rs(e) {
  if (!be(e)) return e;
  for (const t in e)
    if ($s(e, t))
      if (!t.includes(".")) be(e[t]) && rs(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let s = e;
        for (let o = 0; o < r; o++) n[o] in s || (s[n[o]] = {}), (s = s[n[o]]);
        (s[n[r]] = e[t]), delete e[t], be(s[n[r]]) && rs(s[n[r]]);
      }
  return e;
}
function El(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: o } = t,
    i = ie(n) ? n : $e(r) ? {} : { [e]: {} };
  if (
    ($e(r) &&
      r.forEach((l) => {
        if ("locale" in l && "resource" in l) {
          const { locale: a, resource: u } = l;
          a ? ((i[a] = i[a] || {}), vn(u, i[a])) : vn(u, i);
        } else H(l) && vn(JSON.parse(l), i);
      }),
    s == null && o)
  )
    for (const l in i) $s(i, l) && rs(i[l]);
  return i;
}
const jn = (e) => !be(e) || $e(e);
function vn(e, t) {
  if (jn(e) || jn(t)) throw Ze(Xe.INVALID_VALUE);
  for (const n in e)
    $s(e, n) && (jn(e[n]) || jn(t[n]) ? (t[n] = e[n]) : vn(e[n], t[n]));
}
function If(e) {
  return e.type;
}
function Of(e, t, n) {
  let r = be(t.messages) ? t.messages : {};
  "__i18nGlobal" in n &&
    (r = El(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const s = Object.keys(r);
  s.length &&
    s.forEach((o) => {
      e.mergeLocaleMessage(o, r[o]);
    });
  {
    if (be(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length &&
        o.forEach((i) => {
          e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
        });
    }
    if (be(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length &&
        o.forEach((i) => {
          e.mergeNumberFormat(i, t.numberFormats[i]);
        });
    }
  }
}
function Fo(e) {
  return Ce(On, null, e, 0);
}
let Do = 0;
function jo(e) {
  return (t, n, r, s) => e(n, r, hr() || void 0, s);
}
function wl(e = {}, t) {
  const { __root: n } = e,
    r = n === void 0;
  let s = ke(e.inheritLocale) ? e.inheritLocale : !0;
  const o = Ee(n && s ? n.locale.value : H(e.locale) ? e.locale : Os),
    i = Ee(
      n && s
        ? n.fallbackLocale.value
        : H(e.fallbackLocale) ||
          $e(e.fallbackLocale) ||
          ie(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : o.value
    ),
    l = Ee(El(o.value, e)),
    a = Ee(ie(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }),
    u = Ee(ie(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let f = n
      ? n.missingWarn
      : ke(e.missingWarn) || er(e.missingWarn)
      ? e.missingWarn
      : !0,
    m = n
      ? n.fallbackWarn
      : ke(e.fallbackWarn) || er(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    h = n ? n.fallbackRoot : ke(e.fallbackRoot) ? e.fallbackRoot : !0,
    v = !!e.fallbackFormat,
    b = Pe(e.missing) ? e.missing : null,
    w = Pe(e.missing) ? jo(e.missing) : null,
    L = Pe(e.postTranslation) ? e.postTranslation : null,
    _ = n ? n.warnHtmlMessage : ke(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    x = !!e.escapeParameter;
  const S = n ? n.modifiers : ie(e.modifiers) ? e.modifiers : {};
  let k = e.pluralRules || (n && n.pluralRules),
    T;
  (T = (() => {
    const E = {
      version: Sf,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: S,
      pluralRules: k,
      missing: w === null ? void 0 : w,
      missingWarn: f,
      fallbackWarn: m,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: L === null ? void 0 : L,
      warnHtmlMessage: _,
      escapeParameter: x,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" },
    };
    return (
      (E.datetimeFormats = a.value),
      (E.numberFormats = u.value),
      (E.__datetimeFormatters = ie(T) ? T.__datetimeFormatters : void 0),
      (E.__numberFormatters = ie(T) ? T.__numberFormatters : void 0),
      Ef(E)
    );
  })()),
    hn(T, o.value, i.value);
  function U() {
    return [o.value, i.value, l.value, a.value, u.value];
  }
  const K = Y({
      get: () => o.value,
      set: (E) => {
        (o.value = E), (T.locale = o.value);
      },
    }),
    G = Y({
      get: () => i.value,
      set: (E) => {
        (i.value = E), (T.fallbackLocale = i.value), hn(T, o.value, E);
      },
    }),
    z = Y(() => l.value),
    ce = Y(() => a.value),
    me = Y(() => u.value);
  function we() {
    return Pe(L) ? L : null;
  }
  function Ne(E) {
    (L = E), (T.postTranslation = E);
  }
  function et() {
    return b;
  }
  function he(E) {
    E !== null && (w = jo(E)), (b = E), (T.missing = w);
  }
  const ee = (E, C, V, W, Q, ue) => {
    U();
    let ne;
    if (((ne = E(T)), Ae(ne) && ne === vr)) {
      const [Le, ze] = C();
      return n && h ? W(n) : Q(Le);
    } else {
      if (ue(ne)) return ne;
      throw Ze(Xe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function te(...E) {
    return ee(
      (C) => Reflect.apply(Oo, null, [C, ...E]),
      () => Jr(...E),
      "translate",
      (C) => Reflect.apply(C.t, C, [...E]),
      (C) => C,
      (C) => H(C)
    );
  }
  function Ie(...E) {
    const [C, V, W] = E;
    if (W && !be(W)) throw Ze(Xe.INVALID_ARGUMENT);
    return te(C, V, Fe({ resolvedMessage: !0 }, W || {}));
  }
  function re(...E) {
    return ee(
      (C) => Reflect.apply(Ao, null, [C, ...E]),
      () => Qr(...E),
      "datetime format",
      (C) => Reflect.apply(C.d, C, [...E]),
      () => To,
      (C) => H(C)
    );
  }
  function xe(...E) {
    return ee(
      (C) => Reflect.apply(No, null, [C, ...E]),
      () => Zr(...E),
      "number format",
      (C) => Reflect.apply(C.n, C, [...E]),
      () => To,
      (C) => H(C)
    );
  }
  function pe(E) {
    return E.map((C) => (H(C) || Ae(C) || ke(C) ? Fo(String(C)) : C));
  }
  const ht = { normalize: pe, interpolate: (E) => E, type: "vnode" };
  function I(...E) {
    return ee(
      (C) => {
        let V;
        const W = C;
        try {
          (W.processor = ht), (V = Reflect.apply(Oo, null, [W, ...E]));
        } finally {
          W.processor = null;
        }
        return V;
      },
      () => Jr(...E),
      "translate",
      (C) => C[es](...E),
      (C) => [Fo(C)],
      (C) => $e(C)
    );
  }
  function j(...E) {
    return ee(
      (C) => Reflect.apply(No, null, [C, ...E]),
      () => Zr(...E),
      "number format",
      (C) => C[ns](...E),
      () => [],
      (C) => H(C) || $e(C)
    );
  }
  function F(...E) {
    return ee(
      (C) => Reflect.apply(Ao, null, [C, ...E]),
      () => Qr(...E),
      "datetime format",
      (C) => C[ts](...E),
      () => [],
      (C) => H(C) || $e(C)
    );
  }
  function B(E) {
    (k = E), (T.pluralRules = k);
  }
  function Z(E, C) {
    const V = H(C) ? C : o.value,
      W = p(V);
    return T.messageResolver(W, E) !== null;
  }
  function fe(E) {
    let C = null;
    const V = fl(T, i.value, o.value);
    for (let W = 0; W < V.length; W++) {
      const Q = l.value[V[W]] || {},
        ue = T.messageResolver(Q, E);
      if (ue != null) {
        C = ue;
        break;
      }
    }
    return C;
  }
  function X(E) {
    const C = fe(E);
    return C ?? (n ? n.tm(E) || {} : {});
  }
  function p(E) {
    return l.value[E] || {};
  }
  function c(E, C) {
    (l.value[E] = C), (T.messages = l.value);
  }
  function d(E, C) {
    (l.value[E] = l.value[E] || {}), vn(C, l.value[E]), (T.messages = l.value);
  }
  function g(E) {
    return a.value[E] || {};
  }
  function y(E, C) {
    (a.value[E] = C), (T.datetimeFormats = a.value), Po(T, E, C);
  }
  function $(E, C) {
    (a.value[E] = Fe(a.value[E] || {}, C)),
      (T.datetimeFormats = a.value),
      Po(T, E, C);
  }
  function O(E) {
    return u.value[E] || {};
  }
  function P(E, C) {
    (u.value[E] = C), (T.numberFormats = u.value), Mo(T, E, C);
  }
  function N(E, C) {
    (u.value[E] = Fe(u.value[E] || {}, C)),
      (T.numberFormats = u.value),
      Mo(T, E, C);
  }
  Do++,
    n &&
      zr &&
      (Ge(n.locale, (E) => {
        s && ((o.value = E), (T.locale = E), hn(T, o.value, i.value));
      }),
      Ge(n.fallbackLocale, (E) => {
        s && ((i.value = E), (T.fallbackLocale = E), hn(T, o.value, i.value));
      }));
  const R = {
    id: Do,
    locale: K,
    fallbackLocale: G,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(E) {
      (s = E),
        E &&
          n &&
          ((o.value = n.locale.value),
          (i.value = n.fallbackLocale.value),
          hn(T, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: z,
    get modifiers() {
      return S;
    },
    get pluralRules() {
      return k || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(E) {
      (f = E), (T.missingWarn = f);
    },
    get fallbackWarn() {
      return m;
    },
    set fallbackWarn(E) {
      (m = E), (T.fallbackWarn = m);
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(E) {
      h = E;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(E) {
      (v = E), (T.fallbackFormat = v);
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(E) {
      (_ = E), (T.warnHtmlMessage = E);
    },
    get escapeParameter() {
      return x;
    },
    set escapeParameter(E) {
      (x = E), (T.escapeParameter = E);
    },
    t: te,
    getLocaleMessage: p,
    setLocaleMessage: c,
    mergeLocaleMessage: d,
    getPostTranslationHandler: we,
    setPostTranslationHandler: Ne,
    getMissingHandler: et,
    setMissingHandler: he,
    [$f]: B,
  };
  return (
    (R.datetimeFormats = ce),
    (R.numberFormats = me),
    (R.rt = Ie),
    (R.te = Z),
    (R.tm = X),
    (R.d = re),
    (R.n = xe),
    (R.getDateTimeFormat = g),
    (R.setDateTimeFormat = y),
    (R.mergeDateTimeFormat = $),
    (R.getNumberFormat = O),
    (R.setNumberFormat = P),
    (R.mergeNumberFormat = N),
    (R[Rf] = e.__injectWithOption),
    (R[es] = I),
    (R[ts] = F),
    (R[ns] = j),
    R
  );
}
const Ps = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: { type: Object },
};
function Af({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (r, s) => (r = [...r, ...($e(s.children) ? s.children : [s])]),
        []
      )
    : t.reduce((n, r) => {
        const s = e[r];
        return s && (n[r] = s()), n;
      }, {});
}
function xl(e) {
  return Oe;
}
const Uo = {
  name: "i18n-t",
  props: Fe(
    {
      keypath: { type: String, required: !0 },
      plural: { type: [Number, String], validator: (e) => Ae(e) || !isNaN(e) },
    },
    Ps
  ),
  setup(e, t) {
    const { slots: n, attrs: r } = t,
      s = e.i18n || Ot({ useScope: e.scope, __useComponent: !0 });
    return () => {
      const o = Object.keys(n).filter((m) => m !== "_"),
        i = {};
      e.locale && (i.locale = e.locale),
        e.plural !== void 0 && (i.plural = H(e.plural) ? +e.plural : e.plural);
      const l = Af(t, o),
        a = s[es](e.keypath, l, i),
        u = Fe({}, r),
        f = H(e.tag) || be(e.tag) ? e.tag : xl();
      return gr(f, u, a);
    };
  },
};
function Pf(e) {
  return $e(e) && !H(e[0]);
}
function Cl(e, t, n, r) {
  const { slots: s, attrs: o } = t;
  return () => {
    const i = { part: !0 };
    let l = {};
    e.locale && (i.locale = e.locale),
      H(e.format)
        ? (i.key = e.format)
        : be(e.format) &&
          (H(e.format.key) && (i.key = e.format.key),
          (l = Object.keys(e.format).reduce(
            (h, v) => (n.includes(v) ? Fe({}, h, { [v]: e.format[v] }) : h),
            {}
          )));
    const a = r(e.value, i, l);
    let u = [i.key];
    $e(a)
      ? (u = a.map((h, v) => {
          const b = s[h.type],
            w = b ? b({ [h.type]: h.value, index: v, parts: a }) : [h.value];
          return Pf(w) && (w[0].key = `${h.type}-${v}`), w;
        }))
      : H(a) && (u = [a]);
    const f = Fe({}, o),
      m = H(e.tag) || be(e.tag) ? e.tag : xl();
    return gr(m, f, u);
  };
}
const Vo = {
    name: "i18n-n",
    props: Fe(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      Ps
    ),
    setup(e, t) {
      const n = e.i18n || Ot({ useScope: "parent", __useComponent: !0 });
      return Cl(e, t, vl, (...r) => n[ns](...r));
    },
  },
  Ho = {
    name: "i18n-d",
    props: Fe(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      Ps
    ),
    setup(e, t) {
      const n = e.i18n || Ot({ useScope: "parent", __useComponent: !0 });
      return Cl(e, t, bl, (...r) => n[ts](...r));
    },
  };
function Nf(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Mf(e) {
  const t = (i) => {
    const { instance: l, modifiers: a, value: u } = i;
    if (!l || !l.$) throw Ze(Xe.UNEXPECTED_ERROR);
    const f = Nf(e, l.$),
      m = Bo(u);
    return [Reflect.apply(f.t, f, [...Wo(m)]), f];
  };
  return {
    created: (i, l) => {
      const [a, u] = t(l);
      zr &&
        e.global === u &&
        (i.__i18nWatcher = Ge(u.locale, () => {
          l.instance && l.instance.$forceUpdate();
        })),
        (i.__composer = u),
        (i.textContent = a);
    },
    unmounted: (i) => {
      zr &&
        i.__i18nWatcher &&
        (i.__i18nWatcher(), (i.__i18nWatcher = void 0), delete i.__i18nWatcher),
        i.__composer && ((i.__composer = void 0), delete i.__composer);
    },
    beforeUpdate: (i, { value: l }) => {
      if (i.__composer) {
        const a = i.__composer,
          u = Bo(l);
        i.textContent = Reflect.apply(a.t, a, [...Wo(u)]);
      }
    },
    getSSRProps: (i) => {
      const [l] = t(i);
      return { textContent: l };
    },
  };
}
function Bo(e) {
  if (H(e)) return { path: e };
  if (ie(e)) {
    if (!("path" in e)) throw Ze(Xe.REQUIRED_VALUE, "path");
    return e;
  } else throw Ze(Xe.INVALID_VALUE);
}
function Wo(e) {
  const { path: t, locale: n, args: r, choice: s, plural: o } = e,
    i = {},
    l = r || {};
  return (
    H(n) && (i.locale = n),
    Ae(s) && (i.plural = s),
    Ae(o) && (i.plural = o),
    [t, l, i]
  );
}
function Ff(e, t, ...n) {
  const r = ie(n[0]) ? n[0] : {},
    s = !!r.useI18nComponentName;
  (ke(r.globalInstall) ? r.globalInstall : !0) &&
    (e.component(s ? "i18n" : Uo.name, Uo),
    e.component(Vo.name, Vo),
    e.component(Ho.name, Ho)),
    e.directive("t", Mf(t));
}
const Df = Rt("global-vue-i18n");
function jf(e = {}, t) {
  const n = ke(e.globalInjection) ? e.globalInjection : !0,
    r = !0,
    s = new Map(),
    [o, i] = Uf(e),
    l = Rt("");
  function a(m) {
    return s.get(m) || null;
  }
  function u(m, h) {
    s.set(m, h);
  }
  function f(m) {
    s.delete(m);
  }
  {
    const m = {
      get mode() {
        return "composition";
      },
      get allowComposition() {
        return r;
      },
      async install(h, ...v) {
        (h.__VUE_I18N_SYMBOL__ = l),
          h.provide(h.__VUE_I18N_SYMBOL__, m),
          n && Xf(h, m.global),
          Ff(h, m, ...v);
        const b = h.unmount;
        h.unmount = () => {
          m.dispose(), b();
        };
      },
      get global() {
        return i;
      },
      dispose() {
        o.stop();
      },
      __instances: s,
      __getInstance: a,
      __setInstance: u,
      __deleteInstance: f,
    };
    return m;
  }
}
function Ot(e = {}) {
  const t = hr();
  if (t == null) throw Ze(Xe.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Ze(Xe.NOT_INSLALLED);
  const n = Vf(t),
    r = Bf(n),
    s = If(t),
    o = Hf(e, s);
  if (o === "global") return Of(r, e, s), r;
  if (o === "parent") {
    let a = Wf(n, t, e.__useComponent);
    return a == null && (a = r), a;
  }
  const i = n;
  let l = i.__getInstance(t);
  if (l == null) {
    const a = Fe({}, e);
    "__i18n" in s && (a.__i18n = s.__i18n),
      r && (a.__root = r),
      (l = wl(a)),
      Kf(i, t),
      i.__setInstance(t, l);
  }
  return l;
}
function Uf(e, t, n) {
  const r = ia();
  {
    const s = r.run(() => wl(e));
    if (s == null) throw Ze(Xe.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function Vf(e) {
  {
    const t = Qe(e.isCE ? Df : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Ze(e.isCE ? Xe.NOT_INSLALLED_WITH_PROVIDE : Xe.UNEXPECTED_ERROR);
    return t;
  }
}
function Hf(e, t) {
  return _r(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
    ? e.useScope
    : "local";
}
function Bf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Wf(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let o = t.parent;
  for (; o != null; ) {
    const i = e;
    if (
      (e.mode === "composition" && (r = i.__getInstance(o)),
      r != null || s === o)
    )
      break;
    o = o.parent;
  }
  return r;
}
function Kf(e, t, n) {
  xs(() => {}, t),
    Ls(() => {
      e.__deleteInstance(t);
    }, t);
}
const qf = ["locale", "fallbackLocale", "availableLocales"],
  Gf = ["t", "rt", "d", "n", "tm"];
function Xf(e, t) {
  const n = Object.create(null);
  qf.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(t, r);
    if (!s) throw Ze(Xe.UNEXPECTED_ERROR);
    const o = Se(s.value)
      ? {
          get() {
            return s.value.value;
          },
          set(i) {
            s.value.value = i;
          },
        }
      : {
          get() {
            return s.get && s.get();
          },
        };
    Object.defineProperty(n, r, o);
  }),
    (e.config.globalProperties.$i18n = n),
    Gf.forEach((r) => {
      const s = Object.getOwnPropertyDescriptor(t, r);
      if (!s || !s.value) throw Ze(Xe.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${r}`, s);
    });
}
bf(xf);
vf(rf);
yf(fl);
function zf() {
  const e = Ee("dark"),
    t = localStorage.getItem("theme");
  return [
    e,
    () => {
      t === "dark" || !t
        ? (document.documentElement.classList.add("dark"), (e.value = "dark"))
        : (document.documentElement.classList.remove("dark"),
          (e.value = "light"));
    },
    () => {
      e.value === "dark"
        ? ((e.value = "light"),
          localStorage.setItem("theme", "light"),
          document.documentElement.classList.remove("dark"))
        : ((e.value = "dark"),
          localStorage.setItem("theme", "dark"),
          document.documentElement.classList.add("dark"));
    },
  ];
}
function Yf(e, t) {
  e.value.classList.contains("hidden")
    ? ((t.value.disabled = !0),
      e.value.classList.remove("hidden"),
      e.value.classList.add("animate-menuSlideIn"),
      setTimeout(() => {
        e.value.classList.remove("animate-menuSlideIn"),
          (t.value.disabled = !1);
      }, 800))
    : (e.value.classList.remove("animate-menuSlideIn"),
      e.value.classList.add("animate-menuSlideOut"),
      (t.value.disabled = !0),
      setTimeout(() => {
        e.value.classList.add("hidden"),
          e.value.classList.remove("animate-menuSlideOut"),
          (t.value.disabled = !1);
      }, 500));
}
const Jf = {
    class:
      "bg-bgLightTransparent dark:bg-bgDarkTransparent z-10 h-20 flex items-center justify-center fixed w-full outline outline-1 shadow shadow-gray-300 outline-gray-200 dark:shadow-none dark:outline-primary before:-z-10 before:absolute before:backdrop-blur before:w-full before:h-20",
  },
  Qf = { class: "flex justify-between max-w-custom w-5/6" },
  Zf = A(
    "a",
    { href: "#" },
    [
      A(
        "h1",
        {
          class:
            "select-none font-bold text-2xl text-gray-700 dark:text-white lg:text-3xl lg:scale-95",
        },
        [Ve("ybbdev"), A("span", { class: "text-primary" }, ".")]
      ),
    ],
    -1
  ),
  ed = { class: "flex items-center justify-center gap-5 lg:gap-8" },
  td = {
    class:
      "text-center flex flex-col items-center relative justify-center gap-5 text-gray-600 dark:text-gray-300 text-2xl max-w-screen-xl w-5/6 h-screen lg:flex-row lg:h-0 lg:text-lg m-auto whitespace-nowrap",
  },
  nd = A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-8 absolute top-6 right-0",
    },
    [
      A("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M6 18L18 6M6 6l12 12",
      }),
    ],
    -1
  ),
  rd = [nd],
  sd = { class: "flex items-center justify-center gap-3" },
  od = A("label", { for: "lang", class: "sr-only" }, "Select language", -1),
  id = {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6 text-primary",
  },
  ld = A(
    "path",
    {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    },
    null,
    -1
  ),
  ad = [ld],
  cd = {
    key: 1,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6 text-primary",
  },
  ud = A(
    "path",
    {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z",
    },
    null,
    -1
  ),
  fd = [ud],
  dd = A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-8",
    },
    [
      A("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
      }),
    ],
    -1
  ),
  md = [dd],
  hd = {
    __name: "Header",
    setup(e) {
      const [t, n, r] = zf();
      n();
      const s = Ee(null),
        o = Ee(null),
        i = () => {
          window.innerWidth <= 1024 && Yf(s, o);
        },
        { t: l, locale: a } = Ot(),
        u = Ee(localStorage.getItem("lang") || "en");
      return (
        Ge(u, (f) => {
          (a.value = f), localStorage.setItem("lang", f);
        }),
        (f, m) => (
          ge(),
          _e("header", Jf, [
            A("div", Qf, [
              Zf,
              A("div", ed, [
                A(
                  "nav",
                  {
                    ref_key: "menu",
                    ref: s,
                    class:
                      "hidden fixed top-0 right-0 w-full h-screen gap-10 text-lg backdrop-blur bg-bgLightTransparent dark:bg-bgDarkTransparent lg:h-0 lg:flex lg:static lg:w-auto",
                  },
                  [
                    A("ul", td, [
                      A("li", null, [
                        A(
                          "button",
                          {
                            "aria-label": "close-menu",
                            onClick: i,
                            class: "lg:hidden",
                          },
                          rd
                        ),
                      ]),
                      A("li", null, [
                        A(
                          "a",
                          {
                            onClick: i,
                            href: "#",
                            class:
                              "hover:text-primary transition ease-out duration-300",
                          },
                          oe(D(l)("navbar.home")),
                          1
                        ),
                      ]),
                      A("li", null, [
                        A(
                          "a",
                          {
                            onClick: i,
                            href: "#about",
                            class:
                              "hover:text-primary transition ease-out duration-300",
                          },
                          oe(D(l)("navbar.about")),
                          1
                        ),
                      ]),
                      A("li", null, [
                        A(
                          "a",
                          {
                            onClick: i,
                            href: "#work",
                            class:
                              "hover:text-primary transition ease-out duration-300",
                          },
                          oe(D(l)("navbar.work")),
                          1
                        ),
                      ]),
                      A("li", null, [
                        A(
                          "a",
                          {
                            onClick: i,
                            href: "#contact",
                            class:
                              "hover:text-primary transition ease-out duration-300",
                          },
                          oe(D(l)("navbar.contact")),
                          1
                        ),
                      ]),
                    ]),
                  ],
                  512
                ),
                A("div", sd, [
                  od,
                  zt(
                    A(
                      "select",
                      {
                        "onUpdate:modelValue":
                          m[2] || (m[2] = (h) => (u.value = h)),
                        id: "lang",
                        class:
                          "text-primary focus:border-none focus:outline-none bg-transparent cursor-pointer",
                      },
                      [
                        A(
                          "option",
                          {
                            class: "dark:bg-bgDarkSecondary",
                            onClick:
                              m[0] || (m[0] = (h) => f.changeLanguage("en")),
                            value: "en",
                          },
                          "EN"
                        ),
                        A(
                          "option",
                          {
                            class: "dark:bg-bgDarkSecondary",
                            onClick:
                              m[1] || (m[1] = (h) => f.changeLanguage("es")),
                            value: "es",
                          },
                          "ES"
                        ),
                      ],
                      512
                    ),
                    [[hu, u.value]]
                  ),
                  A(
                    "button",
                    {
                      onClick: m[3] || (m[3] = (...h) => D(r) && D(r)(...h)),
                      "aria-label": "toggle-theme",
                    },
                    [
                      D(t) == "dark" ? (ge(), _e("svg", id, ad)) : lo("", !0),
                      D(t) == "light" ? (ge(), _e("svg", cd, fd)) : lo("", !0),
                    ]
                  ),
                ]),
                A(
                  "button",
                  {
                    ref_key: "menuBtn",
                    ref: o,
                    "aria-label": "open-menu",
                    onClick: i,
                    class: "lg:hidden dark:text-gray-300",
                  },
                  md,
                  512
                ),
              ]),
            ]),
          ])
        )
      );
    },
  },
  pd = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  gd = {},
  _d = {
    class:
      "text-center text-base py-4 border-t border-gray-200 text-gray-600 dark:border-transparent dark:bg-bgDark dark:text-gray-300",
  },
  bd = A(
    "a",
    {
      href: "https://www.linkedin.com/in/yon-bolla%C3%ADn-bermejo-394640210/",
      target: "_blank",
      class: "underline underline-offset-2",
    },
    "me",
    -1
  );
function vd(e, t) {
  return ge(), _e("footer", _d, [Ve("More about "), bd]);
}
const yd = pd(gd, [["render", vd]]),
  Ed = {
    __name: "App",
    setup(e) {
      return (t, n) => {
        const r = dc("RouterView");
        return ge(), _e(Oe, null, [Ce(hd), Ce(r), Ce(yd)], 64);
      };
    },
  };
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Yt = typeof window < "u";
function wd(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const de = Object.assign;
function $r(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = it(s) ? s.map(e) : e(s);
  }
  return n;
}
const yn = () => {},
  it = Array.isArray,
  xd = /\/$/,
  Cd = (e) => e.replace(xd, "");
function Rr(e, t, n = "/") {
  let r,
    s = {},
    o = "",
    i = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((r = t.slice(0, a)),
      (o = t.slice(a + 1, l > -1 ? l : t.length)),
      (s = e(o))),
    l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
    (r = Sd(r ?? t, n)),
    { fullPath: r + (o && "?") + o + i, path: r, query: s, hash: i }
  );
}
function Ld(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ko(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function kd(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    ln(t.matched[r], n.matched[s]) &&
    Ll(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function ln(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ll(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Td(e[n], t[n])) return !1;
  return !0;
}
function Td(e, t) {
  return it(e) ? qo(e, t) : it(t) ? qo(t, e) : e === t;
}
function qo(e, t) {
  return it(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Sd(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
  let s = n.length - 1,
    o,
    i;
  for (o = 0; o < r.length; o++)
    if (((i = r[o]), i !== "."))
      if (i === "..") s > 1 && s--;
      else break;
  return (
    n.slice(0, s).join("/") +
    "/" +
    r.slice(o - (o === r.length ? 1 : 0)).join("/")
  );
}
var $n;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})($n || ($n = {}));
var En;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(En || (En = {}));
function $d(e) {
  if (!e)
    if (Yt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Cd(e);
}
const Rd = /^[^#]+#/;
function Id(e, t) {
  return e.replace(Rd, "#") + t;
}
function Od(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const yr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Ad(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = Od(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Go(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ss = new Map();
function Pd(e, t) {
  ss.set(e, t);
}
function Nd(e) {
  const t = ss.get(e);
  return ss.delete(e), t;
}
let Md = () => location.protocol + "//" + location.host;
function kl(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let l = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      a = s.slice(l);
    return a[0] !== "/" && (a = "/" + a), Ko(a, "");
  }
  return Ko(n, e) + r + s;
}
function Fd(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const l = ({ state: h }) => {
    const v = kl(e, location),
      b = n.value,
      w = t.value;
    let L = 0;
    if (h) {
      if (((n.value = v), (t.value = h), i && i === b)) {
        i = null;
        return;
      }
      L = w ? h.position - w.position : 0;
    } else r(v);
    s.forEach((_) => {
      _(n.value, b, {
        delta: L,
        type: $n.pop,
        direction: L ? (L > 0 ? En.forward : En.back) : En.unknown,
      });
    });
  };
  function a() {
    i = n.value;
  }
  function u(h) {
    s.push(h);
    const v = () => {
      const b = s.indexOf(h);
      b > -1 && s.splice(b, 1);
    };
    return o.push(v), v;
  }
  function f() {
    const { history: h } = window;
    h.state && h.replaceState(de({}, h.state, { scroll: yr() }), "");
  }
  function m() {
    for (const h of o) h();
    (o = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", f);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", f),
    { pauseListeners: a, listen: u, destroy: m }
  );
}
function Xo(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? yr() : null,
  };
}
function Dd(e) {
  const { history: t, location: n } = window,
    r = { value: kl(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(a, u, f) {
    const m = e.indexOf("#"),
      h =
        m > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(m)) + a
          : Md() + e + a;
    try {
      t[f ? "replaceState" : "pushState"](u, "", h), (s.value = u);
    } catch (v) {
      console.error(v), n[f ? "replace" : "assign"](h);
    }
  }
  function i(a, u) {
    const f = de({}, t.state, Xo(s.value.back, a, s.value.forward, !0), u, {
      position: s.value.position,
    });
    o(a, f, !0), (r.value = a);
  }
  function l(a, u) {
    const f = de({}, s.value, t.state, { forward: a, scroll: yr() });
    o(f.current, f, !0);
    const m = de({}, Xo(r.value, a, null), { position: f.position + 1 }, u);
    o(a, m, !1), (r.value = a);
  }
  return { location: r, state: s, push: l, replace: i };
}
function jd(e) {
  e = $d(e);
  const t = Dd(e),
    n = Fd(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = de(
    { location: "", base: e, go: r, createHref: Id.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function Ud(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Tl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const xt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Sl = Symbol("");
var zo;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(zo || (zo = {}));
function an(e, t) {
  return de(new Error(), { type: e, [Sl]: !0 }, t);
}
function gt(e, t) {
  return e instanceof Error && Sl in e && (t == null || !!(e.type & t));
}
const Yo = "[^/]+?",
  Vd = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Hd = /[.+*?^${}()[\]/\\]/g;
function Bd(e, t) {
  const n = de({}, Vd, t),
    r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const u of e) {
    const f = u.length ? [] : [90];
    n.strict && !u.length && (s += "/");
    for (let m = 0; m < u.length; m++) {
      const h = u[m];
      let v = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        m || (s += "/"), (s += h.value.replace(Hd, "\\$&")), (v += 40);
      else if (h.type === 1) {
        const { value: b, repeatable: w, optional: L, regexp: _ } = h;
        o.push({ name: b, repeatable: w, optional: L });
        const x = _ || Yo;
        if (x !== Yo) {
          v += 10;
          try {
            new RegExp(`(${x})`);
          } catch (k) {
            throw new Error(
              `Invalid custom RegExp for param "${b}" (${x}): ` + k.message
            );
          }
        }
        let S = w ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        m || (S = L && u.length < 2 ? `(?:/${S})` : "/" + S),
          L && (S += "?"),
          (s += S),
          (v += 20),
          L && (v += -8),
          w && (v += -20),
          x === ".*" && (v += -50);
      }
      f.push(v);
    }
    r.push(f);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function l(u) {
    const f = u.match(i),
      m = {};
    if (!f) return null;
    for (let h = 1; h < f.length; h++) {
      const v = f[h] || "",
        b = o[h - 1];
      m[b.name] = v && b.repeatable ? v.split("/") : v;
    }
    return m;
  }
  function a(u) {
    let f = "",
      m = !1;
    for (const h of e) {
      (!m || !f.endsWith("/")) && (f += "/"), (m = !1);
      for (const v of h)
        if (v.type === 0) f += v.value;
        else if (v.type === 1) {
          const { value: b, repeatable: w, optional: L } = v,
            _ = b in u ? u[b] : "";
          if (it(_) && !w)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`
            );
          const x = it(_) ? _.join("/") : _;
          if (!x)
            if (L)
              h.length < 2 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (m = !0));
            else throw new Error(`Missing required param "${b}"`);
          f += x;
        }
    }
    return f || "/";
  }
  return { re: i, score: r, keys: o, parse: l, stringify: a };
}
function Wd(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Kd(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = Wd(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Jo(r)) return 1;
    if (Jo(s)) return -1;
  }
  return s.length - r.length;
}
function Jo(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const qd = { type: 0, value: "" },
  Gd = /[a-zA-Z0-9_]/;
function Xd(e) {
  if (!e) return [[]];
  if (e === "/") return [[qd]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(v) {
    throw new Error(`ERR (${n})/"${u}": ${v}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let l = 0,
    a,
    u = "",
    f = "";
  function m() {
    u &&
      (n === 0
        ? o.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (a === "*" || a === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: u,
            regexp: f,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function h() {
    u += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (u && m(), i()) : a === ":" ? (m(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : Gd.test(a)
          ? h()
          : (m(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + a)
            : (n = 3)
          : (f += a);
        break;
      case 3:
        m(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (f = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), m(), i(), s;
}
function zd(e, t, n) {
  const r = Bd(Xd(e.path), n),
    s = de(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Yd(e, t) {
  const n = [],
    r = new Map();
  t = ei({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(f) {
    return r.get(f);
  }
  function o(f, m, h) {
    const v = !h,
      b = Jd(f);
    b.aliasOf = h && h.record;
    const w = ei(t, f),
      L = [b];
    if ("alias" in f) {
      const S = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const k of S)
        L.push(
          de({}, b, {
            components: h ? h.record.components : b.components,
            path: k,
            aliasOf: h ? h.record : b,
          })
        );
    }
    let _, x;
    for (const S of L) {
      const { path: k } = S;
      if (m && k[0] !== "/") {
        const T = m.record.path,
          M = T[T.length - 1] === "/" ? "" : "/";
        S.path = m.record.path + (k && M + k);
      }
      if (
        ((_ = zd(S, m, w)),
        h
          ? h.alias.push(_)
          : ((x = x || _),
            x !== _ && x.alias.push(_),
            v && f.name && !Zo(_) && i(f.name)),
        b.children)
      ) {
        const T = b.children;
        for (let M = 0; M < T.length; M++) o(T[M], _, h && h.children[M]);
      }
      (h = h || _),
        ((_.record.components && Object.keys(_.record.components).length) ||
          _.record.name ||
          _.record.redirect) &&
          a(_);
    }
    return x
      ? () => {
          i(x);
        }
      : yn;
  }
  function i(f) {
    if (Tl(f)) {
      const m = r.get(f);
      m &&
        (r.delete(f),
        n.splice(n.indexOf(m), 1),
        m.children.forEach(i),
        m.alias.forEach(i));
    } else {
      const m = n.indexOf(f);
      m > -1 &&
        (n.splice(m, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function a(f) {
    let m = 0;
    for (
      ;
      m < n.length &&
      Kd(f, n[m]) >= 0 &&
      (f.record.path !== n[m].record.path || !$l(f, n[m]));

    )
      m++;
    n.splice(m, 0, f), f.record.name && !Zo(f) && r.set(f.record.name, f);
  }
  function u(f, m) {
    let h,
      v = {},
      b,
      w;
    if ("name" in f && f.name) {
      if (((h = r.get(f.name)), !h)) throw an(1, { location: f });
      (w = h.record.name),
        (v = de(
          Qo(
            m.params,
            h.keys.filter((x) => !x.optional).map((x) => x.name)
          ),
          f.params &&
            Qo(
              f.params,
              h.keys.map((x) => x.name)
            )
        )),
        (b = h.stringify(v));
    } else if ("path" in f)
      (b = f.path),
        (h = n.find((x) => x.re.test(b))),
        h && ((v = h.parse(b)), (w = h.record.name));
    else {
      if (((h = m.name ? r.get(m.name) : n.find((x) => x.re.test(m.path))), !h))
        throw an(1, { location: f, currentLocation: m });
      (w = h.record.name),
        (v = de({}, m.params, f.params)),
        (b = h.stringify(v));
    }
    const L = [];
    let _ = h;
    for (; _; ) L.unshift(_.record), (_ = _.parent);
    return { name: w, path: b, params: v, matched: L, meta: Zd(L) };
  }
  return (
    e.forEach((f) => o(f)),
    {
      addRoute: o,
      resolve: u,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: s,
    }
  );
}
function Qo(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Jd(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Qd(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Qd(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function Zo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Zd(e) {
  return e.reduce((t, n) => de(t, n.meta), {});
}
function ei(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function $l(e, t) {
  return t.children.some((n) => n === e || $l(e, n));
}
const Rl = /#/g,
  em = /&/g,
  tm = /\//g,
  nm = /=/g,
  rm = /\?/g,
  Il = /\+/g,
  sm = /%5B/g,
  om = /%5D/g,
  Ol = /%5E/g,
  im = /%60/g,
  Al = /%7B/g,
  lm = /%7C/g,
  Pl = /%7D/g,
  am = /%20/g;
function Ns(e) {
  return encodeURI("" + e)
    .replace(lm, "|")
    .replace(sm, "[")
    .replace(om, "]");
}
function cm(e) {
  return Ns(e).replace(Al, "{").replace(Pl, "}").replace(Ol, "^");
}
function os(e) {
  return Ns(e)
    .replace(Il, "%2B")
    .replace(am, "+")
    .replace(Rl, "%23")
    .replace(em, "%26")
    .replace(im, "`")
    .replace(Al, "{")
    .replace(Pl, "}")
    .replace(Ol, "^");
}
function um(e) {
  return os(e).replace(nm, "%3D");
}
function fm(e) {
  return Ns(e).replace(Rl, "%23").replace(rm, "%3F");
}
function dm(e) {
  return e == null ? "" : fm(e).replace(tm, "%2F");
}
function tr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function mm(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Il, " "),
      i = o.indexOf("="),
      l = tr(i < 0 ? o : o.slice(0, i)),
      a = i < 0 ? null : tr(o.slice(i + 1));
    if (l in t) {
      let u = t[l];
      it(u) || (u = t[l] = [u]), u.push(a);
    } else t[l] = a;
  }
  return t;
}
function ti(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = um(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (it(r) ? r.map((o) => o && os(o)) : [r && os(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function hm(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = it(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const pm = Symbol(""),
  ni = Symbol(""),
  Ms = Symbol(""),
  Nl = Symbol(""),
  is = Symbol("");
function pn() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Lt(e, t, n, r, s) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((i, l) => {
      const a = (m) => {
          m === !1
            ? l(an(4, { from: n, to: t }))
            : m instanceof Error
            ? l(m)
            : Ud(m)
            ? l(an(2, { from: t, to: m }))
            : (o &&
                r.enterCallbacks[s] === o &&
                typeof m == "function" &&
                o.push(m),
              i());
        },
        u = e.call(r && r.instances[s], t, n, a);
      let f = Promise.resolve(u);
      e.length < 3 && (f = f.then(a)), f.catch((m) => l(m));
    });
}
function Ir(e, t, n, r) {
  const s = [];
  for (const o of e)
    for (const i in o.components) {
      let l = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (gm(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(Lt(u, n, r, o, i));
        } else {
          let a = l();
          s.push(() =>
            a.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const f = wd(u) ? u.default : u;
              o.components[i] = f;
              const h = (f.__vccOpts || f)[t];
              return h && Lt(h, n, r, o, i)();
            })
          );
        }
    }
  return s;
}
function gm(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function ri(e) {
  const t = Qe(Ms),
    n = Qe(Nl),
    r = Y(() => t.resolve(D(e.to))),
    s = Y(() => {
      const { matched: a } = r.value,
        { length: u } = a,
        f = a[u - 1],
        m = n.matched;
      if (!f || !m.length) return -1;
      const h = m.findIndex(ln.bind(null, f));
      if (h > -1) return h;
      const v = si(a[u - 2]);
      return u > 1 && si(f) === v && m[m.length - 1].path !== v
        ? m.findIndex(ln.bind(null, a[u - 2]))
        : h;
    }),
    o = Y(() => s.value > -1 && vm(n.params, r.value.params)),
    i = Y(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Ll(n.params, r.value.params)
    );
  function l(a = {}) {
    return bm(a)
      ? t[D(e.replace) ? "replace" : "push"](D(e.to)).catch(yn)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Y(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: l,
  };
}
const _m = Xi({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ri,
    setup(e, { slots: t }) {
      const n = vt(ri(e)),
        { options: r } = Qe(Ms),
        s = Y(() => ({
          [oi(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [oi(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : gr(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  Ml = _m;
function bm(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function vm(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!it(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function si(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const oi = (e, t, n) => e ?? t ?? n,
  ym = Xi({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Qe(is),
        s = Y(() => e.route || r.value),
        o = Qe(ni, 0),
        i = Y(() => {
          let u = D(o);
          const { matched: f } = s.value;
          let m;
          for (; (m = f[u]) && !m.components; ) u++;
          return u;
        }),
        l = Y(() => s.value.matched[i.value]);
      nn(
        ni,
        Y(() => i.value + 1)
      ),
        nn(pm, l),
        nn(is, s);
      const a = Ee();
      return (
        Ge(
          () => [a.value, l.value, e.name],
          ([u, f, m], [h, v, b]) => {
            f &&
              ((f.instances[m] = u),
              v &&
                v !== f &&
                u &&
                u === h &&
                (f.leaveGuards.size || (f.leaveGuards = v.leaveGuards),
                f.updateGuards.size || (f.updateGuards = v.updateGuards))),
              u &&
                f &&
                (!v || !ln(f, v) || !h) &&
                (f.enterCallbacks[m] || []).forEach((w) => w(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = s.value,
            f = e.name,
            m = l.value,
            h = m && m.components[f];
          if (!h) return ii(n.default, { Component: h, route: u });
          const v = m.props[f],
            b = v
              ? v === !0
                ? u.params
                : typeof v == "function"
                ? v(u)
                : v
              : null,
            L = gr(
              h,
              de({}, b, t, {
                onVnodeUnmounted: (_) => {
                  _.component.isUnmounted && (m.instances[f] = null);
                },
                ref: a,
              })
            );
          return ii(n.default, { Component: L, route: u }) || L;
        }
      );
    },
  });
function ii(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Em = ym;
function wm(e) {
  const t = Yd(e.routes, e),
    n = e.parseQuery || mm,
    r = e.stringifyQuery || ti,
    s = e.history,
    o = pn(),
    i = pn(),
    l = pn(),
    a = Ma(xt);
  let u = xt;
  Yt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = $r.bind(null, (I) => "" + I),
    m = $r.bind(null, dm),
    h = $r.bind(null, tr);
  function v(I, j) {
    let F, B;
    return (
      Tl(I) ? ((F = t.getRecordMatcher(I)), (B = j)) : (B = I), t.addRoute(B, F)
    );
  }
  function b(I) {
    const j = t.getRecordMatcher(I);
    j && t.removeRoute(j);
  }
  function w() {
    return t.getRoutes().map((I) => I.record);
  }
  function L(I) {
    return !!t.getRecordMatcher(I);
  }
  function _(I, j) {
    if (((j = de({}, j || a.value)), typeof I == "string")) {
      const p = Rr(n, I, j.path),
        c = t.resolve({ path: p.path }, j),
        d = s.createHref(p.fullPath);
      return de(p, c, {
        params: h(c.params),
        hash: tr(p.hash),
        redirectedFrom: void 0,
        href: d,
      });
    }
    let F;
    if ("path" in I) F = de({}, I, { path: Rr(n, I.path, j.path).path });
    else {
      const p = de({}, I.params);
      for (const c in p) p[c] == null && delete p[c];
      (F = de({}, I, { params: m(I.params) })), (j.params = m(j.params));
    }
    const B = t.resolve(F, j),
      Z = I.hash || "";
    B.params = f(h(B.params));
    const fe = Ld(r, de({}, I, { hash: cm(Z), path: B.path })),
      X = s.createHref(fe);
    return de(
      { fullPath: fe, hash: Z, query: r === ti ? hm(I.query) : I.query || {} },
      B,
      { redirectedFrom: void 0, href: X }
    );
  }
  function x(I) {
    return typeof I == "string" ? Rr(n, I, a.value.path) : de({}, I);
  }
  function S(I, j) {
    if (u !== I) return an(8, { from: j, to: I });
  }
  function k(I) {
    return U(I);
  }
  function T(I) {
    return k(de(x(I), { replace: !0 }));
  }
  function M(I) {
    const j = I.matched[I.matched.length - 1];
    if (j && j.redirect) {
      const { redirect: F } = j;
      let B = typeof F == "function" ? F(I) : F;
      return (
        typeof B == "string" &&
          ((B = B.includes("?") || B.includes("#") ? (B = x(B)) : { path: B }),
          (B.params = {})),
        de(
          { query: I.query, hash: I.hash, params: "path" in B ? {} : I.params },
          B
        )
      );
    }
  }
  function U(I, j) {
    const F = (u = _(I)),
      B = a.value,
      Z = I.state,
      fe = I.force,
      X = I.replace === !0,
      p = M(F);
    if (p)
      return U(
        de(x(p), {
          state: typeof p == "object" ? de({}, Z, p.state) : Z,
          force: fe,
          replace: X,
        }),
        j || F
      );
    const c = F;
    c.redirectedFrom = j;
    let d;
    return (
      !fe &&
        kd(r, B, F) &&
        ((d = an(16, { to: c, from: B })), re(B, B, !0, !1)),
      (d ? Promise.resolve(d) : G(c, B))
        .catch((g) => (gt(g) ? (gt(g, 2) ? g : Ie(g)) : ee(g, c, B)))
        .then((g) => {
          if (g) {
            if (gt(g, 2))
              return U(
                de({ replace: X }, x(g.to), {
                  state: typeof g.to == "object" ? de({}, Z, g.to.state) : Z,
                  force: fe,
                }),
                j || c
              );
          } else g = ce(c, B, !0, X, Z);
          return z(c, B, g), g;
        })
    );
  }
  function K(I, j) {
    const F = S(I, j);
    return F ? Promise.reject(F) : Promise.resolve();
  }
  function G(I, j) {
    let F;
    const [B, Z, fe] = xm(I, j);
    F = Ir(B.reverse(), "beforeRouteLeave", I, j);
    for (const p of B)
      p.leaveGuards.forEach((c) => {
        F.push(Lt(c, I, j));
      });
    const X = K.bind(null, I, j);
    return (
      F.push(X),
      Xt(F)
        .then(() => {
          F = [];
          for (const p of o.list()) F.push(Lt(p, I, j));
          return F.push(X), Xt(F);
        })
        .then(() => {
          F = Ir(Z, "beforeRouteUpdate", I, j);
          for (const p of Z)
            p.updateGuards.forEach((c) => {
              F.push(Lt(c, I, j));
            });
          return F.push(X), Xt(F);
        })
        .then(() => {
          F = [];
          for (const p of I.matched)
            if (p.beforeEnter && !j.matched.includes(p))
              if (it(p.beforeEnter))
                for (const c of p.beforeEnter) F.push(Lt(c, I, j));
              else F.push(Lt(p.beforeEnter, I, j));
          return F.push(X), Xt(F);
        })
        .then(
          () => (
            I.matched.forEach((p) => (p.enterCallbacks = {})),
            (F = Ir(fe, "beforeRouteEnter", I, j)),
            F.push(X),
            Xt(F)
          )
        )
        .then(() => {
          F = [];
          for (const p of i.list()) F.push(Lt(p, I, j));
          return F.push(X), Xt(F);
        })
        .catch((p) => (gt(p, 8) ? p : Promise.reject(p)))
    );
  }
  function z(I, j, F) {
    for (const B of l.list()) B(I, j, F);
  }
  function ce(I, j, F, B, Z) {
    const fe = S(I, j);
    if (fe) return fe;
    const X = j === xt,
      p = Yt ? history.state : {};
    F &&
      (B || X
        ? s.replace(I.fullPath, de({ scroll: X && p && p.scroll }, Z))
        : s.push(I.fullPath, Z)),
      (a.value = I),
      re(I, j, F, X),
      Ie();
  }
  let me;
  function we() {
    me ||
      (me = s.listen((I, j, F) => {
        if (!ht.listening) return;
        const B = _(I),
          Z = M(B);
        if (Z) {
          U(de(Z, { replace: !0 }), B).catch(yn);
          return;
        }
        u = B;
        const fe = a.value;
        Yt && Pd(Go(fe.fullPath, F.delta), yr()),
          G(B, fe)
            .catch((X) =>
              gt(X, 12)
                ? X
                : gt(X, 2)
                ? (U(X.to, B)
                    .then((p) => {
                      gt(p, 20) &&
                        !F.delta &&
                        F.type === $n.pop &&
                        s.go(-1, !1);
                    })
                    .catch(yn),
                  Promise.reject())
                : (F.delta && s.go(-F.delta, !1), ee(X, B, fe))
            )
            .then((X) => {
              (X = X || ce(B, fe, !1)),
                X &&
                  (F.delta && !gt(X, 8)
                    ? s.go(-F.delta, !1)
                    : F.type === $n.pop && gt(X, 20) && s.go(-1, !1)),
                z(B, fe, X);
            })
            .catch(yn);
      }));
  }
  let Ne = pn(),
    et = pn(),
    he;
  function ee(I, j, F) {
    Ie(I);
    const B = et.list();
    return (
      B.length ? B.forEach((Z) => Z(I, j, F)) : console.error(I),
      Promise.reject(I)
    );
  }
  function te() {
    return he && a.value !== xt
      ? Promise.resolve()
      : new Promise((I, j) => {
          Ne.add([I, j]);
        });
  }
  function Ie(I) {
    return (
      he ||
        ((he = !I),
        we(),
        Ne.list().forEach(([j, F]) => (I ? F(I) : j())),
        Ne.reset()),
      I
    );
  }
  function re(I, j, F, B) {
    const { scrollBehavior: Z } = e;
    if (!Yt || !Z) return Promise.resolve();
    const fe =
      (!F && Nd(Go(I.fullPath, 0))) ||
      ((B || !F) && history.state && history.state.scroll) ||
      null;
    return zn()
      .then(() => Z(I, j, fe))
      .then((X) => X && Ad(X))
      .catch((X) => ee(X, I, j));
  }
  const xe = (I) => s.go(I);
  let pe;
  const mt = new Set(),
    ht = {
      currentRoute: a,
      listening: !0,
      addRoute: v,
      removeRoute: b,
      hasRoute: L,
      getRoutes: w,
      resolve: _,
      options: e,
      push: k,
      replace: T,
      go: xe,
      back: () => xe(-1),
      forward: () => xe(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: et.add,
      isReady: te,
      install(I) {
        const j = this;
        I.component("RouterLink", Ml),
          I.component("RouterView", Em),
          (I.config.globalProperties.$router = j),
          Object.defineProperty(I.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => D(a),
          }),
          Yt &&
            !pe &&
            a.value === xt &&
            ((pe = !0), k(s.location).catch((Z) => {}));
        const F = {};
        for (const Z in xt) F[Z] = Y(() => a.value[Z]);
        I.provide(Ms, j), I.provide(Nl, vt(F)), I.provide(is, a);
        const B = I.unmount;
        mt.add(I),
          (I.unmount = function () {
            mt.delete(I),
              mt.size < 1 &&
                ((u = xt),
                me && me(),
                (me = null),
                (a.value = xt),
                (pe = !1),
                (he = !1)),
              B();
          });
      },
    };
  return ht;
}
function Xt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function xm(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const l = t.matched[i];
    l && (e.matched.find((u) => ln(u, l)) ? r.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((u) => ln(u, a)) || s.push(a));
  }
  return [n, r, s];
}
const Cm = "/assets/profile-pic-28e73db2.webp",
  Lm = { class: "bg-bgLightSecondary dark:hero-dark-bg min-h-screen" },
  km = {
    class:
      "max-w-custom w-5/6 min-h-screen pt-20 flex flex-col items-center justify-center gap-9 m-auto lg:flex-row-reverse lg:justify-between",
  },
  Tm = A(
    "img",
    {
      src: Cm,
      alt: "Yon Bollain",
      width: "320",
      height: "320",
      style: { "border-radius": "47% 53% 53% 47% / 46% 47% 53% 54%" },
      class:
        "w-60 border-8 border-solid border-primary md:w-80 animate-radiusMorph select-none bg-white",
    },
    null,
    -1
  ),
  Sm = { class: "text-center lg:text-left" },
  $m = { class: "dark:text-gray-100 text-xl md:text-2xl xl:text-3xl" },
  Rm = {
    class:
      "text-2xl scale-110 sm:scale-100 sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 md:text-4xl xl:text-5xl",
  },
  Im = { class: "dark:text-gray-100 text-xl md:text-2xl xl:text-3xl" },
  Om = {
    class: "flex items-center justify-center gap-4 mt-5 lg:justify-start",
  },
  Am = ["href"],
  Pm = A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-5 xl:w-6",
    },
    [
      A("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
      }),
    ],
    -1
  ),
  Nm = { href: "#work", class: "btn pr-4" },
  Mm = {
    class: "fill-white animate-pulseRight",
    xmlns: "http://www.w3.org/2000/svg",
    style: { "margin-bottom": "-2px", width: "14px" },
    viewBox: "0 0 448 512",
  },
  Fm = A(
    "path",
    {
      d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
    },
    null,
    -1
  ),
  Dm = [Fm],
  jm = {
    __name: "Hero",
    setup(e) {
      const { t } = Ot();
      return (n, r) => (
        ge(),
        _e("section", Lm, [
          A("div", km, [
            Tm,
            A("div", Sm, [
              A("p", $m, oe(D(t)("home.title")) + " 👋", 1),
              A("h2", Rm, oe(D(t)("home.subtitle")), 1),
              A("p", Im, oe(D(t)("home.description")), 1),
              A("div", Om, [
                A(
                  "a",
                  {
                    href:
                      D(t)("home.resumeBtn") == "Curriculum"
                        ? "/assets/cv/resume-es.pdf"
                        : "/assets/cv/resume-en.pdf",
                    target: "_blank",
                    class: "btn btn-outline",
                  },
                  [Ve(oe(D(t)("home.resumeBtn")) + " ", 1), Pm],
                  8,
                  Am
                ),
                A("a", Nm, [
                  Ve(oe(D(t)("home.portfolioBtn")) + " ", 1),
                  (ge(), _e("svg", Mm, Dm)),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  Um = "/assets/tech/css.svg",
  Vm = "/assets/tech/git.svg",
  Hm = "/assets/tech/symfony.svg",
  Bm = "/assets/tech/html.svg",
  Wm = "/assets/tech/javascript.svg",
  Km = "/assets/tech/react.svg",
  qm = "/assets/tech/tailwind.svg",
  Gm = "/assets/tech/laravel.svg",
  Xm = {
    class:
      "bg-bgLight flex items-center justify-center dark:bg-bgDarkSecondary",
    id: "about",
  },
  zm = { class: "flex flex-col gap-12 max-w-custom w-5/6 pt-20 pb-20" },
  Ym = { class: "flex flex-col gap-3" },
  Jm = { class: "title text-left" },
  Qm = A("span", { class: "text-primary" }, ".", -1),
  Zm = { class: "text-lg" },
  eh = { class: "flex flex-col gap-12 lg:flex-row lg:gap-20" },
  th = { class: "flex flex-col gap-3" },
  nh = { class: "text-left text-2xl font-medium dark:text-white" },
  rh = {
    class:
      "marker:text-primary list-disc text-lg flex flex-wrap flex-row gap-5 lg:flex-col lg:gap-4",
  },
  sh = { class: "italic opacity-60 text-base block" },
  oh = { class: "block" },
  ih = { class: "flex flex-col gap-5" },
  lh = { class: "text-left text-2xl font-medium dark:text-white" },
  ah = { class: "flex flex-wrap gap-6" },
  ch = ["src", "alt"],
  uh = { class: "text-center" },
  fh = {
    __name: "About",
    setup(e) {
      const { t } = Ot(),
        n = () =>
          t("titles.about") === "Sobre mí"
            ? [
                {
                  title: "Técnico Superior en Desarrollo Web",
                  institution: "Enric Valor",
                  date: "",
                },
                {
                  title: "Técnico en Redes y Sistemas Informáticos",
                  institution: "Enric Valor",
                  date: "",
                },
              ]
            : [
                {
                  title: "Software Technician",
                  institution: "",
                  date: "",
                },
                {
                  title: "Technician in Networks and Computer Systems",
                  institution: "",
                  date: "",
                },
              ],
        r = [
          { name: "HTML", icon: "html.svg" },
          { name: "CSS", icon: "css.svg" },
          { name: "JavaScript", icon: "javascript.svg" },
          { name: "React", icon: "react.svg" },
          { name: "Laravel", icon: "laravel.svg" },
          { name: "Tailwind", icon: "tailwind.svg" },
          { name: "Git", icon: "git.svg" },
          { name: "Symfony", icon: "symfony.svg" },
        ],
        s = (o) =>
          new URL(
            Object.assign({
              "/src/assets/img/icons/css.svg": Um,
              "/src/assets/img/icons/git.svg": Vm,
              "/src/assets/img/icons/symfony.svg": Hm,
              "/src/assets/img/icons/html.svg": Bm,
              "/src/assets/img/icons/javascript.svg": Wm,
              "/src/assets/img/icons/react.svg": Km,
              "/src/assets/img/icons/tailwind.svg": qm,
              "/src/assets/img/icons/laravel.svg": Gm,
            })[`/src/assets/img/icons/${o}`],
            self.location
          ).href;
      return (o, i) => (
        ge(),
        _e("section", Xm, [
          A("div", zm, [
            A("div", Ym, [
              A("h2", Jm, [Ve(oe(D(t)("titles.about")), 1), Qm]),
              A("p", Zm, oe(D(t)("about.description")), 1),
            ]),
            A("div", eh, [
              A("div", th, [
                A("h3", nh, oe(D(t)("titles.education")) + ":", 1),
                A("ul", rh, [
                  (ge(!0),
                  _e(
                    Oe,
                    null,
                    rn(
                      n(),
                      (l) => (
                        ge(),
                        _e("li", { key: l.title, class: "ml-5" }, [
                          Ve(oe(l.title) + " ", 1),
                          A("span", sh, [
                            Ve(oe(l.institution) + " ", 1),
                            A("span", oh, oe(l.date), 1),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              A("div", ih, [
                A("h3", lh, oe(D(t)("titles.techStack")) + ":", 1),
                A("div", ah, [
                  (ge(),
                  _e(
                    Oe,
                    null,
                    rn(r, (l) =>
                      A(
                        "div",
                        {
                          key: l.name,
                          class:
                            "flex flex-col items-center justify-center gap-1",
                        },
                        [
                          (ge(),
                          _e(
                            "img",
                            {
                              src: s(l.icon),
                              alt: l.name,
                              key: l.title,
                              class: "w-11 h-12 select-none",
                            },
                            null,
                            8,
                            ch
                          )),
                          A("p", uh, oe(l.name), 1),
                        ]
                      )
                    ),
                    64
                  )),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  dh = "/assets/projects/myphonerescue.png",
  mh = "/assets/projects/yanditechcare.png",
  hh = "/assets/projects/somllums.webp",
  ph = "/assets/projects/devicedaddy.png",
  gh = "/assets/projects/reading-list-5919b9e0.webp",
  _h = { class: "bg-slate-50 bg-opacity-75 dark:bg-transparent", id: "work" },
  bh = { class: "max-w-custom m-auto flex flex-col gap-8 pt-20 pb-20 w-5/6" },
  vh = { class: "title" },
  yh = A("span", { class: "text-primary" }, ".", -1),
  Eh = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full" },
  wh = ["src"],
  xh = { class: "p-5 flex flex-col gap-5 border-t-2 border-primary" },
  Ch = { class: "flex flex-col gap-1" },
  Lh = { class: "text-primary text-2xl font-semibold" },
  kh = { class: "text-base" },
  Th = { class: "flex gap-3 w-full justify-start" },
  Sh = ["href"],
  $h = A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 496 512",
      class: "w-5 fill-primary",
    },
    [
      A("path", {
        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
      }),
    ],
    -1
  ),
  Rh = ["href"],
  Ih = A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      class: "w-4 fill-white",
    },
    [
      A("path", {
        d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z",
      }),
    ],
    -1
  ),
  Oh = ["href"],
  Ah = A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      class: "w-4 fill-white",
    },
    [
      A("path", {
        d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z",
      }),
    ],
    -1
  ),
  Ph = A(
    "div",
    {
      class:
        "hidden lg:flex shadow-md bg-bgLightSecondary dark:bg-bgDarkSecondary border-2 border-dashed dark:border-sky-900 rounded-xl overflow-hidden items-center justify-center text-xl",
    },
    " Coming soon... ",
    -1
  ),
  Nh = A(
    "div",
    {
      class:
        "hidden lg:flex shadow-md bg-bgLightSecondary dark:bg-bgDarkSecondary border-2 border-dashed dark:border-sky-900 rounded-xl overflow-hidden items-center justify-center text-xl",
    },
    " Coming soon... ",
    -1
  ),
  Mh = {
    __name: "Work",
    setup(e) {
      const { t } = Ot(),
        n = () =>
          t("titles.work") === "Proyectos"
            ? [
                {
                  title: "POWERLUX",
                  description:
                    "App de gestión de empresa de suministros construida en Laravel",
                  img: "somllums.webp",
                  code: "https://github.com/YonBol/POWERLUX",
                  demo: "https://seashell-gazelle-602285.hostingersite.com/home",
                },
                {
                  title: "MYPHONERESCUE",
                  description:
                    "Web de una tienda de reparaciones de movil en Sydney",
                  img: "myphonerescue.png",
                  code: "#",
                  demo: "https://www.myphonerescue.com.au",
                },
                {
                  title: "Y&ITECHCARE",
                  description:
                    "Web de empresa de desarrollo web",
                  img: "yanditechcare.png",
                  code: "#",
                  demo: "https://www.yanditechcare.com",
                },
                {
                  title: "DEVICE DADDY",
                  description:
                    "Tienda de dispositivos reacondicionados en Sydney",
                  img: "devicedaddy.png",
                  code: "#",
                  demo: "https://devicedaddy.com.au",
                },
              ]
            : [
                {
                  title: "POWERLUX",
                  description:
                    "Supply company management app built in Laravel",
                  img: "somllums.webp",
                  code: "https://github.com/YonBol/POWERLUX",
                  demo: "https://seashell-gazelle-602285.hostingersite.com/home",
                },
                {
                  title: "MYPHONERESCUE",
                  description:
                    "Mobile repair shop made with WordPress",
                  img: "myphonerescue.png",
                  code: "#",
                  demo: "https://www.myphonerescue.com.au",
                },
                {
                  title: "Y&ITECHCARE",
                  description:
                    "Web developers bussines website",
                  img: "yanditechcare.png",
                  code: "#",
                  demo: "https://www.yanditechcare.com",
                },
                {
                  title: "DEVICE DADDY",
                  description:
                    "Online Refurbished phone shop in Sydney",
                  img: "devicedaddy.png",
                  code: "#",
                  demo: "https://devicedaddy.com.au",
                },
              ]
              ,
        r = (s) =>
          new URL(
            Object.assign({
              "/src/assets/img/projects/myphonerescue.png": dh,
              "/src/assets/img/projects/yanditechcare.png": mh,
              "/src/assets/img/projects/somllums.webp": hh,
              "/src/assets/img/projects/devicedaddy.png": ph,
              "4": gh,
            })[`/src/assets/img/projects/${s}`],
            self.location
          ).href;
      return (s, o) => (
        ge(),
        _e("section", _h, [
          A("div", bh, [
            A("h2", vh, [Ve(oe(D(t)("titles.work")), 1), yh]),
            A("div", Eh, [
              (ge(!0),
              _e(
                Oe,
                null,
                rn(
                  n(),
                  (i) => (
                    ge(),
                    _e(
                      "div",
                      {
                        key: i.title,
                        class:
                          "shadow-md bg-bgLightSecondary dark:bg-bgDarkSecondary border border-transparent dark:border-sky-900 rounded-xl overflow-hidden",
                      },
                      [
                        A(
                          "img",
                          {
                            src: r(i.img),
                            alt: "project image",
                            class: "w-full",
                            width: "0",
                            height: "0",
                          },
                          null,
                          8,
                          wh
                        ),
                        A("div", xh, [
                          A("div", Ch, [
                            A("h3", Lh, oe(i.title), 1),
                            A("p", kh, oe(i.description), 1),
                          ]),
                          A("div", Th, [
                            A(
                              "a",
                              {
                                href: i.code,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Code",
                                class: "btn btn-outline text-sm",
                              },
                              [Ve(oe(D(t)("work.codeBtn")) + " ", 1), $h],
                              8,
                              Sh
                            ),
                            i.demo != "#"
                              ? (ge(),
                                _e(
                                  "a",
                                  {
                                    key: 0,
                                    href: i.demo,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "Demo",
                                    class: "btn text-sm",
                                  },
                                  [Ve(oe(D(t)("work.demoBtn")) + " ", 1), Ih],
                                  8,
                                  Rh
                                ))
                              : (ge(),
                                _e(
                                  "a",
                                  {
                                    key: 1,
                                    href: i.demo,
                                    target: "_self",
                                    rel: "noopener noreferrer",
                                    "aria-label": "Demo",
                                    class: "btn text-sm",
                                  },
                                  [Ve(oe(D(t)("work.demoBtn")) + " ", 1), Ah],
                                  8,
                                  Oh
                                )),
                          ]),
                        ]),
                      ]
                    )
                  )
                ),
                128
              )),
              Ph,
              Nh,
            ]),
          ]),
        ])
      );
    },
  },
  Rn = { _origin: "https://api.emailjs.com" },
  Fh = (e, t = "https://api.emailjs.com") => {
    (Rn._userID = e), (Rn._origin = t);
  },
  Fl = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class li {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const Dl = (e, t, n = {}) =>
    new Promise((r, s) => {
      const o = new XMLHttpRequest();
      o.addEventListener("load", ({ target: i }) => {
        const l = new li(i);
        l.status === 200 || l.text === "OK" ? r(l) : s(l);
      }),
        o.addEventListener("error", ({ target: i }) => {
          s(new li(i));
        }),
        o.open("POST", Rn._origin + e, !0),
        Object.keys(n).forEach((i) => {
          o.setRequestHeader(i, n[i]);
        }),
        o.send(t);
    }),
  Dh = (e, t, n, r) => {
    const s = r || Rn._userID;
    return (
      Fl(s, e, t),
      Dl(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.10.0",
          user_id: s,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  jh = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  Uh = (e, t, n, r) => {
    const s = r || Rn._userID,
      o = jh(n);
    Fl(s, e, t);
    const i = new FormData(o);
    return (
      i.append("lib_version", "3.10.0"),
      i.append("service_id", e),
      i.append("template_id", t),
      i.append("user_id", s),
      Dl("/api/v1.0/email/send-form", i)
    );
  },
  Vh = { init: Fh, send: Dh, sendForm: Uh };
function ai(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce(
    (n, r) => (t.includes(r) || (n[r] = D(e[r])), n),
    {}
  );
}
function nr(e) {
  return typeof e == "function";
}
function Hh(e) {
  return Ht(e) || Kt(e);
}
function jl(e, t, n) {
  let r = e;
  const s = t.split(".");
  for (let o = 0; o < s.length; o++) {
    if (!r[s[o]]) return n;
    r = r[s[o]];
  }
  return r;
}
function Or(e, t, n) {
  return Y(() => e.some((r) => jl(t, r, { [n]: !1 })[n]));
}
function ci(e, t, n) {
  return Y(() =>
    e.reduce((r, s) => {
      const o = jl(t, s, { [n]: !1 })[n] || [];
      return r.concat(o);
    }, [])
  );
}
function Ul(e, t, n, r) {
  return e.call(r, D(t), D(n), r);
}
function Vl(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function Bh(e, t, n, r, s, o, i) {
  let { $lazy: l, $rewardEarly: a } = s,
    u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [],
    f = arguments.length > 8 ? arguments[8] : void 0,
    m = arguments.length > 9 ? arguments[9] : void 0,
    h = arguments.length > 10 ? arguments[10] : void 0;
  const v = Ee(!!r.value),
    b = Ee(0);
  n.value = !1;
  const w = Ge(
    [t, r].concat(u, h),
    () => {
      if ((l && !r.value) || (a && !m.value && !n.value)) return;
      let L;
      try {
        L = Ul(e, t, f, i);
      } catch (_) {
        L = Promise.reject(_);
      }
      b.value++,
        (n.value = !!b.value),
        (v.value = !1),
        Promise.resolve(L)
          .then((_) => {
            b.value--, (n.value = !!b.value), (o.value = _), (v.value = Vl(_));
          })
          .catch((_) => {
            b.value--, (n.value = !!b.value), (o.value = _), (v.value = !0);
          });
    },
    { immediate: !0, deep: typeof t == "object" }
  );
  return { $invalid: v, $unwatch: w };
}
function Wh(e, t, n, r, s, o, i, l) {
  let { $lazy: a, $rewardEarly: u } = r;
  const f = () => ({}),
    m = Y(() => {
      if ((a && !n.value) || (u && !l.value)) return !1;
      let h = !0;
      try {
        const v = Ul(e, t, i, o);
        (s.value = v), (h = Vl(v));
      } catch (v) {
        s.value = v;
      }
      return h;
    });
  return { $unwatch: f, $invalid: m };
}
function Kh(e, t, n, r, s, o, i, l, a, u, f) {
  const m = Ee(!1),
    h = e.$params || {},
    v = Ee(null);
  let b, w;
  e.$async
    ? ({ $invalid: b, $unwatch: w } = Bh(
        e.$validator,
        t,
        m,
        n,
        r,
        v,
        s,
        e.$watchTargets,
        a,
        u,
        f
      ))
    : ({ $invalid: b, $unwatch: w } = Wh(e.$validator, t, n, r, v, s, a, u));
  const L = e.$message;
  return {
    $message: nr(L)
      ? Y(() =>
          L(
            ai({
              $pending: m,
              $invalid: b,
              $params: ai(h),
              $model: t,
              $response: v,
              $validator: o,
              $propertyPath: l,
              $property: i,
            })
          )
        )
      : L || "",
    $params: h,
    $pending: m,
    $invalid: b,
    $response: v,
    $unwatch: w,
  };
}
function qh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = D(e),
    n = Object.keys(t),
    r = {},
    s = {},
    o = {};
  let i = null;
  return (
    n.forEach((l) => {
      const a = t[l];
      switch (!0) {
        case nr(a.$validator):
          r[l] = a;
          break;
        case nr(a):
          r[l] = { $validator: a };
          break;
        case l === "$validationGroups":
          i = a;
          break;
        case l.startsWith("$"):
          o[l] = a;
          break;
        default:
          s[l] = a;
      }
    }),
    { rules: r, nestedValidators: s, config: o, validationGroups: i }
  );
}
function Gh() {}
const Xh = "__root";
function Hl(e, t, n) {
  if (n) return t ? t(e()) : e();
  try {
    var r = Promise.resolve(e());
    return t ? r.then(t) : r;
  } catch (s) {
    return Promise.reject(s);
  }
}
function zh(e, t) {
  return Hl(e, Gh, t);
}
function Yh(e, t) {
  var n = e();
  return n && n.then ? n.then(t) : t(n);
}
function Jh(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    try {
      return Promise.resolve(e.apply(this, t));
    } catch (r) {
      return Promise.reject(r);
    }
  };
}
function Qh(e, t, n, r, s, o, i, l, a) {
  const u = Object.keys(e),
    f = r.get(s, e),
    m = Ee(!1),
    h = Ee(!1),
    v = Ee(0);
  if (f) {
    if (!f.$partial) return f;
    f.$unwatch(), (m.value = f.$dirty.value);
  }
  const b = {
    $dirty: m,
    $path: s,
    $touch: () => {
      m.value || (m.value = !0);
    },
    $reset: () => {
      m.value && (m.value = !1);
    },
    $commit: () => {},
  };
  return u.length
    ? (u.forEach((w) => {
        b[w] = Kh(e[w], t, b.$dirty, o, i, w, n, s, a, h, v);
      }),
      (b.$externalResults = Y(() =>
        l.value
          ? []
              .concat(l.value)
              .map((w, L) => ({
                $propertyPath: s,
                $property: n,
                $validator: "$externalResults",
                $uid: `${s}-externalResult-${L}`,
                $message: w,
                $params: {},
                $response: null,
                $pending: !1,
              }))
          : []
      )),
      (b.$invalid = Y(() => {
        const w = u.some((L) => D(b[L].$invalid));
        return (h.value = w), !!b.$externalResults.value.length || w;
      })),
      (b.$pending = Y(() => u.some((w) => D(b[w].$pending)))),
      (b.$error = Y(() =>
        b.$dirty.value ? b.$pending.value || b.$invalid.value : !1
      )),
      (b.$silentErrors = Y(() =>
        u
          .filter((w) => D(b[w].$invalid))
          .map((w) => {
            const L = b[w];
            return vt({
              $propertyPath: s,
              $property: n,
              $validator: w,
              $uid: `${s}-${w}`,
              $message: L.$message,
              $params: L.$params,
              $response: L.$response,
              $pending: L.$pending,
            });
          })
          .concat(b.$externalResults.value)
      )),
      (b.$errors = Y(() => (b.$dirty.value ? b.$silentErrors.value : []))),
      (b.$unwatch = () =>
        u.forEach((w) => {
          b[w].$unwatch();
        })),
      (b.$commit = () => {
        (h.value = !0), (v.value = Date.now());
      }),
      r.set(s, e, b),
      b)
    : (f && r.set(s, e, b), b);
}
function Zh(e, t, n, r, s, o, i) {
  const l = Object.keys(e);
  return l.length
    ? l.reduce(
        (a, u) => (
          (a[u] = ls({
            validations: e[u],
            state: t,
            key: u,
            parentKey: n,
            resultsCache: r,
            globalConfig: s,
            instance: o,
            externalResults: i,
          })),
          a
        ),
        {}
      )
    : {};
}
function ep(e, t, n) {
  const r = Y(() =>
      [t, n]
        .filter((b) => b)
        .reduce((b, w) => b.concat(Object.values(D(w))), [])
    ),
    s = Y({
      get() {
        return (
          e.$dirty.value ||
          (r.value.length ? r.value.every((b) => b.$dirty) : !1)
        );
      },
      set(b) {
        e.$dirty.value = b;
      },
    }),
    o = Y(() => {
      const b = D(e.$silentErrors) || [],
        w = r.value
          .filter((L) => (D(L).$silentErrors || []).length)
          .reduce((L, _) => L.concat(..._.$silentErrors), []);
      return b.concat(w);
    }),
    i = Y(() => {
      const b = D(e.$errors) || [],
        w = r.value
          .filter((L) => (D(L).$errors || []).length)
          .reduce((L, _) => L.concat(..._.$errors), []);
      return b.concat(w);
    }),
    l = Y(() => r.value.some((b) => b.$invalid) || D(e.$invalid) || !1),
    a = Y(() => r.value.some((b) => D(b.$pending)) || D(e.$pending) || !1),
    u = Y(
      () =>
        r.value.some((b) => b.$dirty) ||
        r.value.some((b) => b.$anyDirty) ||
        s.value
    ),
    f = Y(() => (s.value ? a.value || l.value : !1)),
    m = () => {
      e.$touch(),
        r.value.forEach((b) => {
          b.$touch();
        });
    },
    h = () => {
      e.$commit(),
        r.value.forEach((b) => {
          b.$commit();
        });
    },
    v = () => {
      e.$reset(),
        r.value.forEach((b) => {
          b.$reset();
        });
    };
  return (
    r.value.length && r.value.every((b) => b.$dirty) && m(),
    {
      $dirty: s,
      $errors: i,
      $invalid: l,
      $anyDirty: u,
      $error: f,
      $pending: a,
      $touch: m,
      $reset: v,
      $silentErrors: o,
      $commit: h,
    }
  );
}
function ls(e) {
  const t = Jh(function () {
    return (
      we(),
      Yh(
        function () {
          if (L.$rewardEarly) return he(), zh(zn);
        },
        function () {
          return Hl(zn, function () {
            return new Promise((re) => {
              if (!me.value) return re(!G.value);
              const xe = Ge(me, () => {
                re(!G.value), xe();
              });
            });
          });
        }
      )
    );
  });
  let {
    validations: n,
    state: r,
    key: s,
    parentKey: o,
    childResults: i,
    resultsCache: l,
    globalConfig: a = {},
    instance: u,
    externalResults: f,
  } = e;
  const m = o ? `${o}.${s}` : s,
    { rules: h, nestedValidators: v, config: b, validationGroups: w } = qh(n),
    L = Object.assign({}, a, b),
    _ = s
      ? Y(() => {
          const re = D(r);
          return re ? D(re[s]) : void 0;
        })
      : r,
    x = Object.assign({}, D(f) || {}),
    S = Y(() => {
      const re = D(f);
      return s ? (re ? D(re[s]) : void 0) : re;
    }),
    k = Qh(h, _, s, l, m, L, u, S, r),
    T = Zh(v, _, m, l, L, u, S),
    M = {};
  w &&
    Object.entries(w).forEach((re) => {
      let [xe, pe] = re;
      M[xe] = {
        $invalid: Or(pe, T, "$invalid"),
        $error: Or(pe, T, "$error"),
        $pending: Or(pe, T, "$pending"),
        $errors: ci(pe, T, "$errors"),
        $silentErrors: ci(pe, T, "$silentErrors"),
      };
    });
  const {
      $dirty: U,
      $errors: K,
      $invalid: G,
      $anyDirty: z,
      $error: ce,
      $pending: me,
      $touch: we,
      $reset: Ne,
      $silentErrors: et,
      $commit: he,
    } = ep(k, T, i),
    ee = s
      ? Y({
          get: () => D(_),
          set: (re) => {
            U.value = !0;
            const xe = D(r),
              pe = D(f);
            pe && (pe[s] = x[s]), Se(xe[s]) ? (xe[s].value = re) : (xe[s] = re);
          },
        })
      : null;
  s &&
    L.$autoDirty &&
    Ge(
      _,
      () => {
        U.value || we();
        const re = D(f);
        re && (re[s] = x[s]);
      },
      { flush: "sync" }
    );
  function te(re) {
    return (i.value || {})[re];
  }
  function Ie() {
    Se(f)
      ? (f.value = x)
      : Object.keys(x).length === 0
      ? Object.keys(f).forEach((re) => {
          delete f[re];
        })
      : Object.assign(f, x);
  }
  return vt(
    Object.assign(
      {},
      k,
      {
        $model: ee,
        $dirty: U,
        $error: ce,
        $errors: K,
        $invalid: G,
        $anyDirty: z,
        $pending: me,
        $touch: we,
        $reset: Ne,
        $path: m || Xh,
        $silentErrors: et,
        $validate: t,
        $commit: he,
      },
      i && {
        $getResultsForChild: te,
        $clearExternalResults: Ie,
        $validationGroups: M,
      },
      T
    )
  );
}
class tp {
  constructor() {
    this.storage = new Map();
  }
  set(t, n, r) {
    this.storage.set(t, { rules: n, result: r });
  }
  checkRulesValidity(t, n, r) {
    const s = Object.keys(r),
      o = Object.keys(n);
    return o.length !== s.length || !o.every((l) => s.includes(l))
      ? !1
      : o.every((l) =>
          n[l].$params
            ? Object.keys(n[l].$params).every(
                (a) => D(r[l].$params[a]) === D(n[l].$params[a])
              )
            : !0
        );
  }
  get(t, n) {
    const r = this.storage.get(t);
    if (!r) return;
    const { rules: s, result: o } = r,
      i = this.checkRulesValidity(t, n, s),
      l = o.$unwatch ? o.$unwatch : () => ({});
    return i ? o : { $dirty: o.$dirty, $partial: !0, $unwatch: l };
  }
}
const Kn = { COLLECT_ALL: !0, COLLECT_NONE: !1 },
  ui = Symbol("vuelidate#injectChildResults"),
  fi = Symbol("vuelidate#removeChildResults");
function np(e) {
  let { $scope: t, instance: n } = e;
  const r = {},
    s = Ee([]),
    o = Y(() => s.value.reduce((f, m) => ((f[m] = D(r[m])), f), {}));
  function i(f, m) {
    let { $registerAs: h, $scope: v, $stopPropagation: b } = m;
    b ||
      t === Kn.COLLECT_NONE ||
      v === Kn.COLLECT_NONE ||
      (t !== Kn.COLLECT_ALL && t !== v) ||
      ((r[h] = f), s.value.push(h));
  }
  n.__vuelidateInjectInstances = [].concat(
    n.__vuelidateInjectInstances || [],
    i
  );
  function l(f) {
    (s.value = s.value.filter((m) => m !== f)), delete r[f];
  }
  n.__vuelidateRemoveInstances = [].concat(
    n.__vuelidateRemoveInstances || [],
    l
  );
  const a = Qe(ui, []);
  nn(ui, n.__vuelidateInjectInstances);
  const u = Qe(fi, []);
  return (
    nn(fi, n.__vuelidateRemoveInstances),
    {
      childResults: o,
      sendValidationResultsToParent: a,
      removeValidationResultsFromParent: u,
    }
  );
}
function Bl(e) {
  return new Proxy(e, {
    get(t, n) {
      return typeof t[n] == "object" ? Bl(t[n]) : Y(() => t[n]);
    },
  });
}
let di = 0;
function rp(e, t) {
  var n;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && ((r = e), (e = void 0), (t = void 0));
  let {
    $registerAs: s,
    $scope: o = Kn.COLLECT_ALL,
    $stopPropagation: i,
    $externalResults: l,
    currentVueInstance: a,
  } = r;
  const u = a || ((n = hr()) === null || n === void 0 ? void 0 : n.proxy),
    f = u ? u.$options : {};
  s || ((di += 1), (s = `_vuelidate_${di}`));
  const m = Ee({}),
    h = new tp(),
    {
      childResults: v,
      sendValidationResultsToParent: b,
      removeValidationResultsFromParent: w,
    } = u ? np({ $scope: o, instance: u }) : { childResults: Ee({}) };
  if (!e && f.validations) {
    const L = f.validations;
    (t = Ee({})),
      Yi(() => {
        (t.value = u),
          Ge(
            () => (nr(L) ? L.call(t.value, new Bl(t.value)) : L),
            (_) => {
              m.value = ls({
                validations: _,
                state: t,
                childResults: v,
                resultsCache: h,
                globalConfig: r,
                instance: u,
                externalResults: l || u.vuelidateExternalResults,
              });
            },
            { immediate: !0 }
          );
      }),
      (r = f.validationsConfig || r);
  } else {
    const L = Se(e) || Hh(e) ? e : vt(e || {});
    Ge(
      L,
      (_) => {
        m.value = ls({
          validations: _,
          state: t,
          childResults: v,
          resultsCache: h,
          globalConfig: r,
          instance: u ?? {},
          externalResults: l,
        });
      },
      { immediate: !0 }
    );
  }
  return (
    u &&
      (b.forEach((L) =>
        L(m, { $registerAs: s, $scope: o, $stopPropagation: i })
      ),
      Cs(() => w.forEach((L) => L(s)))),
    Y(() => Object.assign({}, D(m.value), v.value))
  );
}
const Wl = (e) => {
  if (((e = D(e)), Array.isArray(e))) return !!e.length;
  if (e == null) return !1;
  if (e === !1) return !0;
  if (e instanceof Date) return !isNaN(e.getTime());
  if (typeof e == "object") {
    for (let t in e) return !0;
    return !1;
  }
  return !!String(e).length;
};
function qt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return (r) => ((r = D(r)), !Wl(r) || t.every((s) => s.test(r)));
}
qt(/^[a-zA-Z]*$/);
qt(/^[a-zA-Z0-9]*$/);
qt(/^\d*(\.\d+)?$/);
const sp =
  /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
var op = qt(sp),
  ip = {
    $validator: op,
    $message: "Value is not a valid email address",
    $params: { type: "email" },
  };
function lp(e) {
  return typeof e == "string" && (e = e.trim()), Wl(e);
}
var Ar = {
  $validator: lp,
  $message: "Value is required",
  $params: { type: "required" },
};
const ap =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
qt(ap);
qt(/(^[0-9]*$)|(^-[0-9]+$)/);
qt(/^[-]?\d*(\.\d+)?$/);
const cp = {
    class:
      "contact-bg bg-bgLight dark:bg-bgDarkSecondary bg-cover bg-no-repeat",
    id: "contact",
  },
  up = {
    class:
      "max-w-custom w-5/6 m-auto pt-20 pb-20 grid grid-cols-1 grid-rows-1 place lg:grid-cols-2 lg:grid-rows-2 gap-y-6 gap-x-14",
  },
  fp = {
    class:
      "flex flex-col gap-1 w-full justify-center items-center lg:items-start lg:justify-end",
  },
  dp = { class: "title text-left" },
  mp = A("span", { class: "text-primary" }, ".", -1),
  hp = { class: "text-center lg:text-left" },
  pp = ["onSubmit"],
  gp = { class: "flex flex-col justify-center gap-1" },
  _p = { for: "name" },
  bp = ["placeholder"],
  vp = { class: "flex flex-col justify-center gap-1" },
  yp = { for: "email" },
  Ep = ["placeholder"],
  wp = { class: "flex flex-col justify-center gap-1" },
  xp = { for: "message" },
  Cp = ["placeholder"],
  Lp = { class: "flex items-center justify-center gap-2" },
  kp = A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "animate-spin",
    },
    [A("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })],
    -1
  ),
  Tp = Mc(
    '<div class="flex flex-col gap-4 w-full items-center lg:items-start"><div class="flex flex-col gap-2"><p class="flex items-center justify-center gap-2 lg:justify-start"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-primary w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg> bollainbermejoyon@gmail.com </p><p class="flex items-center justify-center gap-2 lg:justify-start"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-primary w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>Spain</p></div><div class="flex gap-4"><a href="https://github.com/YonBol" target="_blank" rel="noopener noreferrer" aria-label="Github"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-7 fill-primary"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a><a href="https://www.linkedin.com/in/yon-bolla%C3%ADn-bermejo-394640210/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-7 fill-primary"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></div></div>',
    1
  ),
  Sp = {
    __name: "Contact",
    setup(e) {
      const { t } = Ot(),
        n = vt({ name: "", email: "", message: "" }),
        s = rp(
          {
            name: { required: Ar },
            email: { required: Ar, email: ip },
            message: { required: Ar },
          },
          n
        ),
        o = Ee(null),
        i = Ee(null),
        l = Ee("Send"),
        a = Ee(!1),
        u = async () => {
          (await s.value.$validate()) &&
            ((i.value.disabled = !0),
            (a.value = !0),
            Vh.sendForm(
              "service_hxhnvqu",
              "template_pknd27o",
              o.value,
              "1IyOCDUQwPdjmLEG8"
            ).then(
              () => {
                s.value.$reset(),
                  (n.name = ""),
                  (n.email = ""),
                  (n.message = ""),
                  (a.value = !1),
                  (i.value.innerText = t("contact.form.sent")),
                  setTimeout(() => {
                    (i.value.disabled = !1), (i.value.innerText = "Send");
                  }, 3e3);
              },
              () => {
                (a.value = !1),
                  (i.value.innerText = t("somethingWentWrong")),
                  setTimeout(() => {
                    (i.value.disabled = !1), (i.value.innerText = "Send");
                  }, 3e3);
              }
            ));
        };
      return (f, m) => (
        ge(),
        _e("section", cp, [
          A("div", up, [
            A("div", fp, [
              A("h2", dp, [Ve(oe(D(t)("titles.contact")), 1), mp]),
              A("p", hp, oe(D(t)("contact.subtitle")), 1),
            ]),
            A(
              "form",
              {
                ref_key: "form",
                ref: o,
                onSubmit: _u(u, ["prevent"]),
                class:
                  "shadow-lg row-span-3 bg-bgLightSecondary dark:bg-bgDark max-w-md w-full py-6 px-8 rounded-xl flex flex-col gap-3 place-self-center lg:place-self-end",
              },
              [
                A("div", gp, [
                  A("label", _p, oe(D(t)("contact.form.name")) + ":", 1),
                  zt(
                    A(
                      "input",
                      {
                        "onUpdate:modelValue":
                          m[0] || (m[0] = (h) => (n.name = h)),
                        type: "text",
                        name: "name",
                        id: "name",
                        class: "contact-input",
                        placeholder: D(t)("contact.form.name"),
                      },
                      null,
                      8,
                      bp
                    ),
                    [[Tr, n.name]]
                  ),
                  (ge(!0),
                  _e(
                    Oe,
                    null,
                    rn(
                      D(s).name.$errors,
                      (h) => (
                        ge(),
                        _e(
                          "span",
                          { class: "error-msg", key: h.$uid },
                          oe(
                            h.$message == "Value is required" &&
                              D(t)("validations.required")
                          ),
                          1
                        )
                      )
                    ),
                    128
                  )),
                ]),
                A("div", vp, [
                  A("label", yp, oe(D(t)("contact.form.email")) + ":", 1),
                  zt(
                    A(
                      "input",
                      {
                        "onUpdate:modelValue":
                          m[1] || (m[1] = (h) => (n.email = h)),
                        type: "text",
                        name: "email",
                        id: "email",
                        class: "contact-input",
                        placeholder: D(t)("contact.form.email"),
                      },
                      null,
                      8,
                      Ep
                    ),
                    [[Tr, n.email]]
                  ),
                  (ge(!0),
                  _e(
                    Oe,
                    null,
                    rn(
                      D(s).email.$errors,
                      (h) => (
                        ge(),
                        _e(
                          "span",
                          { class: "error-msg", key: h.$uid },
                          oe(
                            h.$message == "Value is required"
                              ? D(t)("validations.required")
                              : h.$message ==
                                "Value is not a valid email address"
                              ? D(t)("validations.email")
                              : h.$message
                          ),
                          1
                        )
                      )
                    ),
                    128
                  )),
                ]),
                A("div", wp, [
                  A("label", xp, oe(D(t)("contact.form.message")) + ":", 1),
                  zt(
                    A(
                      "textarea",
                      {
                        "onUpdate:modelValue":
                          m[2] || (m[2] = (h) => (n.message = h)),
                        name: "message",
                        id: "message",
                        cols: "30",
                        rows: "10",
                        class: "contact-input resize-none h-52",
                        placeholder: D(t)("contact.form.message"),
                      },
                      null,
                      8,
                      Cp
                    ),
                    [[Tr, n.message]]
                  ),
                  (ge(!0),
                  _e(
                    Oe,
                    null,
                    rn(
                      D(s).message.$errors,
                      (h) => (
                        ge(),
                        _e(
                          "span",
                          { class: "error-msg", key: h.$uid },
                          oe(
                            h.$message == "Value is required" &&
                              D(t)("validations.required")
                          ),
                          1
                        )
                      )
                    ),
                    128
                  )),
                ]),
                A(
                  "button",
                  {
                    ref_key: "sendBtn",
                    ref: i,
                    type: "submit",
                    class:
                      "btn w-full cursor-pointer text-sm h-10 disabled:bg-slate-400 mt-1",
                  },
                  [
                    zt(
                      A(
                        "span",
                        { ref_key: "sendBtnText", ref: l },
                        oe(D(t)("contact.form.send")),
                        513
                      ),
                      [[vo, !a.value]]
                    ),
                    zt(
                      A(
                        "div",
                        Lp,
                        [kp, Ve(" " + oe(D(t)("contact.form.sending")), 1)],
                        512
                      ),
                      [[vo, a.value]]
                    ),
                  ],
                  512
                ),
              ],
              40,
              pp
            ),
            Tp,
          ]),
        ])
      );
    },
  },
  $p = {
    class:
      "bg-white text-gray-600 selection:bg-gray-400 selection:text-white dark:bg-bgDark dark:text-gray-300",
  },
  Rp = {
    __name: "HomeView",
    setup(e) {
      return (t, n) => (ge(), _e("main", $p, [Ce(jm), Ce(fh), Ce(Mh), Ce(Sp)]));
    },
  },
  Ip = {
    class:
      "dark:hero-dark-bg not-found-view flex flex-col items-center justify-center pt-20",
  },
  Op = A("h2", { class: "text-7xl font-bold" }, "404", -1),
  Ap = A("p", { class: "text-2xl" }, "Page not found", -1),
  Pp = {
    __name: "NotFoundView",
    setup(e) {
      return (t, n) => (
        ge(),
        _e("div", Ip, [
          Op,
          Ap,
          Ce(
            D(Ml),
            { to: "/", class: "text-primary pt-5" },
            { default: Bi(() => [Ve("Go back home")]), _: 1 }
          ),
        ])
      );
    },
  },
  Np = wm({
    history: jd("/"),
    routes: [
      { path: "/", name: "home", component: Rp },
      { path: "/:pathMatch(.*)*", name: "not-found", component: Pp },
    ],
  });
const Mp = {
    navbar: { home: "Home", about: "About", contact: "Contact", work: "Projects" },
    home: {
      title: "Hi, I'm Yon",
      subtitle: "FullStack Developer",
      description: "Passionate about programming.",
      resumeBtn: "Resume",
      portfolioBtn: "Projects",
    },
    titles: {
      about: "About",
      education: "Education",
      techStack: "Tech Stack",
      work: "Projects",
      contact: "Get in Touch",
    },
    about: {
      description:
        "Hi there! My name is Yon Bollain, and I'm FullStack developer. Currently, I work independently to enhance my skills. My strongest skills lie in HTML, CSS, JavaScript, and PHP. I am continuously broadening my knowledge by learning new technologies and tools. Additionally, I have experience using frameworks such as React, Laravel, and Symfony.",
    },
    work: { codeBtn: "Code", demoBtn: "Demo" },
    contact: {
      subtitle: "Don't be shy, and leave me a message :)",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending",
        sent: "Message sent!",
      },
    },
    validations: {
      required: "This field is required",
      email: "Please enter a valid email",
    },
  },
  Fp = {
    navbar: {
      home: "Inicio",
      about: "Sobre mí",
      contact: "Contacto",
      work: "Proyectos",
    },
    titles: {
      about: "Sobre mí",
      education: "Educación",
      techStack: "Tecnologías",
      work: "Proyectos",
      contact: "Contacto",
    },
    home: {
      title: "Hola, soy Yon",
      subtitle: "Desarrollador FullStack",
      description: "Apasionado por la programación.",
      resumeBtn: "Curriculum",
      portfolioBtn: "Proyectos",
    },
    about: {
      description:
        "¡Hola! Mi nombre es Yon Bollain, soy desarrollador FullStack. Actualmente desarrollo de forma autónoma para mejorar mis conocimientos. Mis habilidades más fuertes son HTML, CSS, JavaScript y PHP, estoy constantemente expandiendo mis conocimientos con nuevas tecnologías y herramientas. También cuento con experiencia usando frameworks como React, Laravel y Symfony.",
    },
    work: { codeBtn: "Código", demoBtn: "Demo" },
    contact: {
      subtitle: "No dudes en dejarme un mensaje :)",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando",
        sent: "Mensaje enviado!",
      },
    },
    validations: {
      required: "Este campo es requerido",
      email: "Por favor ingrese un correo válido",
    },
  };
const qp = jf({
    locale: localStorage.getItem("lang") || "en",
    messages: { en: Mp, es: Fp },
  }),
  Fs = yu(Ed);
Fs.use(qp);
Fs.use(Np);
Fs.mount("#app");
