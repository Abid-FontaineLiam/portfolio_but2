import { i as p, t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { $ as zs, D as Vc, F as Xc, L as Zc, O as Vn, Q as zc, S as Rs, V as ia, Y as qc, _ as Lc, b as Qc, d as Gc, f as Hc, g as Kc, h as Jc, j as Wc, o as Bc, q as pt$1, r as $s, u as Es, x as Qs, z as Zs } from "./chunk-7W6UQGC5-C150Mc68.js";
import { B as ks, Q as qr, a as D, et as si, r as Cn } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { t as f } from "./chunk-KNLZD3CH-C5mSJplc.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/chunk-QA3QBVWF.mjs
var Jt = p(f(), 1);
function Nt(t) {
	return Number.isSafeInteger(t) && t >= 0;
}
m(Nt, "isLength");
function U(t) {
	return t != null && typeof t != "function" && Nt(t.length);
}
m(U, "isArrayLike");
function kt(t) {
	return t === "__proto__";
}
m(kt, "isUnsafeProperty");
function d(t) {
	return t == null || typeof t != "object" && typeof t != "function";
}
m(d, "isPrimitive");
function H(t) {
	return Object.getOwnPropertySymbols(t).filter((r) => Object.prototype.propertyIsEnumerable.call(t, r));
}
m(H, "getSymbols");
function l(t) {
	return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
m(l, "getTag");
var L = "[object RegExp]", h = "[object String]", w = "[object Number]", A = "[object Boolean]", O = "[object Arguments]", I = "[object Symbol]", T = "[object Date]", R = "[object Map]", $ = "[object Set]", q = "[object Array]";
var F = "[object ArrayBuffer]", M = "[object Object]";
var N = "[object DataView]", K = "[object Uint8Array]", V = "[object Uint8ClampedArray]", X = "[object Uint16Array]", Y = "[object Uint32Array]";
var J = "[object Int8Array]", Z = "[object Int16Array]", v = "[object Int32Array]";
var G = "[object Float32Array]", Q = "[object Float64Array]";
function W(t) {
	return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
m(W, "isTypedArray");
function zt(t, r) {
	return E(t, void 0, t, /* @__PURE__ */ new Map(), r);
}
m(zt, "cloneDeepWith");
function E(t, r, o, e = /* @__PURE__ */ new Map(), i = void 0) {
	let s = i?.(t, r, o, e);
	if (s !== void 0) return s;
	if (d(t)) return t;
	if (e.has(t)) return e.get(t);
	if (Array.isArray(t)) {
		let n = new Array(t.length);
		e.set(t, n);
		for (let a = 0; a < t.length; a++) n[a] = E(t[a], a, o, e, i);
		return Object.hasOwn(t, "index") && (n.index = t.index), Object.hasOwn(t, "input") && (n.input = t.input), n;
	}
	if (t instanceof Date) return new Date(t.getTime());
	if (t instanceof RegExp) {
		let n = new RegExp(t.source, t.flags);
		return n.lastIndex = t.lastIndex, n;
	}
	if (t instanceof Map) {
		let n = /* @__PURE__ */ new Map();
		e.set(t, n);
		for (let [a, p] of t) n.set(a, E(p, a, o, e, i));
		return n;
	}
	if (t instanceof Set) {
		let n = /* @__PURE__ */ new Set();
		e.set(t, n);
		for (let a of t) n.add(E(a, void 0, o, e, i));
		return n;
	}
	if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
	if (W(t)) {
		let n = new (Object.getPrototypeOf(t)).constructor(t.length);
		e.set(t, n);
		for (let a = 0; a < t.length; a++) n[a] = E(t[a], a, o, e, i);
		return n;
	}
	if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
	if (t instanceof DataView) {
		let n = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
		return e.set(t, n), u(n, t, o, e, i), n;
	}
	if (typeof File < "u" && t instanceof File) {
		let n = new File([t], t.name, { type: t.type });
		return e.set(t, n), u(n, t, o, e, i), n;
	}
	if (typeof Blob < "u" && t instanceof Blob) {
		let n = new Blob([t], { type: t.type });
		return e.set(t, n), u(n, t, o, e, i), n;
	}
	if (t instanceof Error) {
		let n = structuredClone(t);
		return e.set(t, n), n.message = t.message, n.name = t.name, n.stack = t.stack, n.cause = t.cause, n.constructor = t.constructor, u(n, t, o, e, i), n;
	}
	if (t instanceof Boolean) {
		let n = new Boolean(t.valueOf());
		return e.set(t, n), u(n, t, o, e, i), n;
	}
	if (t instanceof Number) {
		let n = new Number(t.valueOf());
		return e.set(t, n), u(n, t, o, e, i), n;
	}
	if (t instanceof String) {
		let n = new String(t.valueOf());
		return e.set(t, n), u(n, t, o, e, i), n;
	}
	if (typeof t == "object" && tr(t)) {
		let n = Object.create(Object.getPrototypeOf(t));
		return e.set(t, n), u(n, t, o, e, i), n;
	}
	return t;
}
m(E, "cloneDeepWithImpl");
function u(t, r, o = t, e, i) {
	let s = [...Object.keys(r), ...H(r)];
	for (let n = 0; n < s.length; n++) {
		let a = s[n], p = Object.getOwnPropertyDescriptor(t, a);
		(p == null || p.writable) && (t[a] = E(r[a], a, o, e, i));
	}
}
m(u, "copyProperties");
function tr(t) {
	switch (l(t)) {
		case O:
		case q:
		case F:
		case N:
		case A:
		case T:
		case G:
		case Q:
		case J:
		case Z:
		case v:
		case R:
		case w:
		case M:
		case L:
		case $:
		case h:
		case I:
		case K:
		case V:
		case X:
		case Y: return !0;
		default: return !1;
	}
}
m(tr, "isCloneableObject");
function _t(t, r) {
	return zt(t, (o, e, i, s) => {
		let n = r?.(o, e, i, s);
		if (n !== void 0) return n;
		if (typeof t == "object") {
			if (l(t) === M && typeof t.constructor != "function") {
				let a = {};
				return s.set(t, a), u(a, t, i, s), a;
			}
			switch (Object.prototype.toString.call(t)) {
				case w:
				case h:
				case A: {
					let a = new t.constructor(t?.valueOf());
					return u(a, t), a;
				}
				case O: {
					let a = {};
					return u(a, t), a.length = t.length, a[Symbol.iterator] = t[Symbol.iterator], a;
				}
				default: return;
			}
		}
	});
}
m(_t, "cloneDeepWith");
function nt(t) {
	return _t(t);
}
m(nt, "cloneDeep");
function k(t) {
	return t !== null && typeof t == "object" && l(t) === "[object Arguments]";
}
m(k, "isArguments");
function z(t) {
	return typeof t == "object" && t !== null;
}
m(z, "isObjectLike");
function jt(t) {
	return z(t) && U(t);
}
m(jt, "isArrayLikeObject");
function Ut(t) {
	return Array.isArray(t);
}
m(Ut, "isArray");
function S(t, r) {
	if (typeof t != "function" || r != null && typeof r != "function") throw new TypeError("Expected a function");
	let o = m(function(...i) {
		let s = r ? r.apply(this, i) : i[0], n = o.cache;
		if (n.has(s)) return n.get(s);
		let a = t.apply(this, i);
		return o.cache = n.set(s, a) || n, a;
	}, "memoized");
	return o.cache = new (S.Cache || Map)(), o;
}
m(S, "memoize");
S.Cache = Map;
function Ht() {}
m(Ht, "noop");
function qt(t) {
	let r = t?.constructor;
	return t === (typeof r == "function" ? r.prototype : Object.prototype);
}
m(qt, "isPrototype");
function b(t) {
	return W(t);
}
m(b, "isTypedArray");
function rr(t) {
	if (d(t)) return t;
	let r = l(t);
	if (!er(t)) return {};
	if (Ut(t)) {
		let e = Array.from(t);
		return t.length > 0 && typeof t[0] == "string" && Object.hasOwn(t, "index") && (e.index = t.index, e.input = t.input), e;
	}
	if (b(t)) {
		let e = t, i = e.constructor;
		return new i(e.buffer, e.byteOffset, e.length);
	}
	if (r === F) return new ArrayBuffer(t.byteLength);
	if (r === N) {
		let e = t, i = e.buffer, s = e.byteOffset, n = e.byteLength, a = new ArrayBuffer(n), p = new Uint8Array(i, s, n);
		return new Uint8Array(a).set(p), new DataView(a);
	}
	if (r === A || r === w || r === h) {
		let e = t.constructor, i = new e(t.valueOf());
		return r === h ? nr(i, t) : it(i, t), i;
	}
	if (r === T) return new Date(Number(t));
	if (r === L) {
		let e = t, i = new RegExp(e.source, e.flags);
		return i.lastIndex = e.lastIndex, i;
	}
	if (r === I) return Object(Symbol.prototype.valueOf.call(t));
	if (r === R) {
		let e = t, i = /* @__PURE__ */ new Map();
		return e.forEach((s, n) => {
			i.set(n, s);
		}), i;
	}
	if (r === $) {
		let e = t, i = /* @__PURE__ */ new Set();
		return e.forEach((s) => {
			i.add(s);
		}), i;
	}
	if (r === O) {
		let e = t, i = {};
		return it(i, e), i.length = e.length, i[Symbol.iterator] = e[Symbol.iterator], i;
	}
	let o = {};
	return ir(o, t), it(o, t), or(o, t), o;
}
m(rr, "clone");
function er(t) {
	switch (l(t)) {
		case O:
		case q:
		case F:
		case N:
		case A:
		case T:
		case G:
		case Q:
		case J:
		case Z:
		case v:
		case R:
		case w:
		case M:
		case L:
		case $:
		case h:
		case I:
		case K:
		case V:
		case X:
		case Y: return !0;
		default: return !1;
	}
}
m(er, "isCloneableObject");
function it(t, r) {
	for (let o in r) Object.hasOwn(r, o) && (t[o] = r[o]);
}
m(it, "copyOwnProperties");
function or(t, r) {
	let o = Object.getOwnPropertySymbols(r);
	for (let e = 0; e < o.length; e++) {
		let i = o[e];
		Object.prototype.propertyIsEnumerable.call(r, i) && (t[i] = r[i]);
	}
}
m(or, "copySymbolProperties");
function nr(t, r) {
	let o = r.valueOf().length;
	for (let e in r) Object.hasOwn(r, e) && (Number.isNaN(Number(e)) || Number(e) >= o) && (t[e] = r[e]);
}
m(nr, "cloneStringObjectProperties");
function ir(t, r) {
	let o = Object.getPrototypeOf(r);
	o !== null && typeof r.constructor == "function" && Object.setPrototypeOf(t, o);
}
m(ir, "copyPrototype");
function C(t) {
	if (typeof t != "object" || t == null) return !1;
	if (Object.getPrototypeOf(t) === null) return !0;
	if (Object.prototype.toString.call(t) !== "[object Object]") {
		let o = t[Symbol.toStringTag];
		return o == null || !Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)?.writable ? !1 : t.toString() === `[object ${o}]`;
	}
	let r = t;
	for (; Object.getPrototypeOf(r) !== null;) r = Object.getPrototypeOf(r);
	return Object.getPrototypeOf(t) === r;
}
m(C, "isPlainObject");
function Kt(t) {
	if (d(t)) return t;
	if (Array.isArray(t) || W(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
	let r = Object.getPrototypeOf(t);
	if (r == null) return Object.assign(Object.create(r), t);
	let o = r.constructor;
	if (t instanceof Date || t instanceof Map || t instanceof Set) return new o(t);
	if (t instanceof RegExp) {
		let e = new o(t);
		return e.lastIndex = t.lastIndex, e;
	}
	if (t instanceof DataView) return new o(t.buffer.slice(0));
	if (t instanceof Error) {
		let e;
		return t instanceof AggregateError ? e = new o(t.errors, t.message, { cause: t.cause }) : e = new o(t.message, { cause: t.cause }), e.stack = t.stack, Object.assign(e, t), e;
	}
	if (typeof File < "u" && t instanceof File) return new o([t], t.name, {
		type: t.type,
		lastModified: t.lastModified
	});
	if (typeof t == "object") return Object.assign(Object.create(r), t);
	return t;
}
m(Kt, "clone");
function Vt(t, ...r) {
	let o = r.slice(0, -1), e = r[r.length - 1], i = t;
	for (let s = 0; s < o.length; s++) {
		let n = o[s];
		i = tt(i, n, e, /* @__PURE__ */ new Map());
	}
	return i;
}
m(Vt, "mergeWith");
function tt(t, r, o, e) {
	if (d(t) && (t = Object(t)), r == null || typeof r != "object") return t;
	if (e.has(r)) return Kt(e.get(r));
	if (e.set(r, t), Array.isArray(r)) {
		r = r.slice();
		for (let s = 0; s < r.length; s++) r[s] = r[s] ?? void 0;
	}
	let i = [...Object.keys(r), ...H(r)];
	for (let s = 0; s < i.length; s++) {
		let n = i[s];
		if (kt(n)) continue;
		let a = r[n], p = t[n];
		if (k(a) && (a = { ...a }), k(p) && (p = { ...p }), typeof Buffer < "u" && Buffer.isBuffer(a) && (a = nt(a)), Array.isArray(a)) if (Array.isArray(p)) {
			let x = [], m = Reflect.ownKeys(p);
			for (let y = 0; y < m.length; y++) {
				let g = m[y];
				x[g] = p[g];
			}
			p = x;
		} else if (jt(p)) {
			let x = [];
			for (let m = 0; m < p.length; m++) x[m] = p[m];
			p = x;
		} else p = [];
		let c = o(p, a, n, t, r, e);
		c !== void 0 ? t[n] = c : Array.isArray(a) || z(p) && z(a) && (C(p) || C(a) || b(p) || b(a)) ? t[n] = tt(p, a, o, e) : p == null && C(a) ? t[n] = tt({}, a, o, e) : p == null && b(a) ? t[n] = nt(a) : (p === void 0 || a !== void 0) && (t[n] = a);
	}
	return t;
}
m(tt, "mergeWithDeep");
function ft(t, ...r) {
	return Vt(t, ...r, Ht);
}
m(ft, "merge");
function fr(t) {
	if (t == null) return !0;
	if (U(t)) return typeof t.splice != "function" && typeof t != "string" && (typeof Buffer > "u" || !Buffer.isBuffer(t)) && !b(t) && !k(t) ? !1 : t.length === 0;
	if (typeof t == "object") {
		if (t instanceof Map || t instanceof Set) return t.size === 0;
		let r = Object.keys(t);
		return qt(t) ? r.filter((o) => o !== "constructor").length === 0 : r.length === 0;
	}
	return !0;
}
m(fr, "isEmpty");
var ar = {
	curveBasis: $s,
	curveBasisClosed: Es,
	curveBasisOpen: Rs,
	curveBumpX: Lc,
	curveBumpY: zc,
	curveBundle: Hc,
	curveCardinalClosed: qc,
	curveCardinalOpen: Wc,
	curveCardinal: Bc,
	curveCatmullRomClosed: Xc,
	curveCatmullRomOpen: Gc,
	curveCatmullRom: Vc,
	curveLinear: Vn,
	curveLinearClosed: zs,
	curveMonotoneX: Zc,
	curveMonotoneY: Qc,
	curveNatural: Zs,
	curveStep: Qs,
	curveStepAfter: Jc,
	curveStepBefore: Kc
}, pr = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, cr = m(function(t, r) {
	let o = Zt(t, /(?:init\b)|(?:initialize\b)/), e = {};
	if (Array.isArray(o)) {
		let n = o.map((a) => a.args);
		si(n), e = D(e, [...n]);
	} else e = o.args;
	if (!e) return;
	let i = ks(t, r), s = "config";
	return e[s] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), e[i] = e[s], delete e[s]), e;
}, "detectInit"), Zt = m(function(t, r = null) {
	try {
		let o = new RegExp(`[%]{2}(?![{]${pr.source})(?=[}][%]{2}).*
`, "ig");
		t = t.trim().replace(o, "").replace(/'/gm, "\""), pt$1.debug(`Detecting diagram directive${r !== null ? " type:" + r : ""} based on the text:${t}`);
		let e, i = [];
		for (; (e = qr.exec(t)) !== null;) if (e.index === qr.lastIndex && qr.lastIndex++, e && !r || r && e[1]?.match(r) || r && e[2]?.match(r)) {
			let s = e[1] ? e[1] : e[2], n = e[3] ? e[3].trim() : e[4] ? JSON.parse(e[4].trim()) : null;
			i.push({
				type: s,
				args: n
			});
		}
		return i.length === 0 ? {
			type: t,
			args: null
		} : i.length === 1 ? i[0] : i;
	} catch (o) {
		return pt$1.error(`ERROR: ${o.message} - Unable to parse directive type: '${r}' based on the text: '${t}'`), {
			type: void 0,
			args: null
		};
	}
}, "detectDirective"), Bo = m(function(t) {
	return t.replace(qr, "");
}, "removeDirectives"), mr = m(function(t, r) {
	for (let [o, e] of r.entries()) if (e.match(t)) return o;
	return -1;
}, "isSubstringInArray");
function ur(t, r) {
	if (!t) return r;
	return ar[`curve${t.charAt(0).toUpperCase() + t.slice(1)}`] ?? r;
}
m(ur, "interpolateToCurve");
function xr(t, r) {
	let o = t.trim();
	if (o) return r.securityLevel !== "loose" ? (0, Jt.sanitizeUrl)(o) : o;
}
m(xr, "formatUrl");
var gr = m((t, ...r) => {
	let o = t.split("."), e = o.length - 1, i = o[e], s = window;
	for (let n = 0; n < e; n++) if (s = s[o[n]], !s) {
		pt$1.error(`Function name: ${t} not found in window`);
		return;
	}
	s[i](...r);
}, "runFunc");
function vt(t, r) {
	return !t || !r ? 0 : Math.sqrt(Math.pow(r.x - t.x, 2) + Math.pow(r.y - t.y, 2));
}
m(vt, "distance");
function yr(t) {
	let r, o = 0;
	t.forEach((i) => {
		o += vt(i, r), r = i;
	});
	return at(t, o / 2);
}
m(yr, "traverseEdge");
function lr(t) {
	return t.length === 1 ? t[0] : yr(t);
}
m(lr, "calcLabelPosition");
var Xt = m((t, r = 2) => {
	let o = Math.pow(10, r);
	return Math.round(t * o) / o;
}, "roundNumber"), at = m((t, r) => {
	let o, e = r;
	for (let i of t) {
		if (o) {
			let s = vt(i, o);
			if (s === 0) return o;
			if (s < e) e -= s;
			else {
				let n = e / s;
				if (n <= 0) return o;
				if (n >= 1) return {
					x: i.x,
					y: i.y
				};
				if (n > 0 && n < 1) return {
					x: Xt((1 - n) * o.x + n * i.x, 5),
					y: Xt((1 - n) * o.y + n * i.y, 5)
				};
			}
		}
		o = i;
	}
	throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), dr = m((t, r, o) => {
	pt$1.info(`our points ${JSON.stringify(r)}`), r[0] !== o && (r = r.reverse());
	let i = at(r, 25), s = t ? 10 : 5, n = Math.atan2(r[0].y - i.y, r[0].x - i.x), a = {
		x: 0,
		y: 0
	};
	return a.x = Math.sin(n) * s + (r[0].x + i.x) / 2, a.y = -Math.cos(n) * s + (r[0].y + i.y) / 2, a;
}, "calcCardinalityPosition");
function hr(t, r, o) {
	let e = structuredClone(o);
	pt$1.info("our points", e), r !== "start_left" && r !== "start_right" && e.reverse();
	let s = at(e, 25 + t), n = 10 + t * .5, a = Math.atan2(e[0].y - s.y, e[0].x - s.x), p = {
		x: 0,
		y: 0
	};
	return r === "start_left" ? (p.x = Math.sin(a + Math.PI) * n + (e[0].x + s.x) / 2, p.y = -Math.cos(a + Math.PI) * n + (e[0].y + s.y) / 2) : r === "end_right" ? (p.x = Math.sin(a - Math.PI) * n + (e[0].x + s.x) / 2 - 5, p.y = -Math.cos(a - Math.PI) * n + (e[0].y + s.y) / 2 - 5) : r === "end_left" ? (p.x = Math.sin(a) * n + (e[0].x + s.x) / 2 - 5, p.y = -Math.cos(a) * n + (e[0].y + s.y) / 2 - 5) : (p.x = Math.sin(a) * n + (e[0].x + s.x) / 2, p.y = -Math.cos(a) * n + (e[0].y + s.y) / 2), p;
}
m(hr, "calcTerminalLabelPosition");
function br(t) {
	let r = "", o = "";
	for (let e of t) e !== void 0 && (e.startsWith("color:") || e.startsWith("text-align:") ? o = o + e + ";" : r = r + e + ";");
	return {
		style: r,
		labelStyle: o
	};
}
m(br, "getStylesFromArray");
var Yt = 0, wr = m(() => (Yt++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Yt), "generateId");
function Ar(t) {
	let r = "", o = "0123456789abcdef", e = 16;
	for (let i = 0; i < t; i++) r += o.charAt(Math.floor(Math.random() * e));
	return r;
}
m(Ar, "makeRandomHex");
var Or = m((t) => Ar(t.length), "random"), Sr = m(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		anchor: "start",
		style: "#666",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0,
		valign: void 0,
		text: ""
	};
}, "getTextObj"), Br = m(function(t, r) {
	let o = r.text.replace(Cn.lineBreakRegex, " "), [, e] = ct(r.fontSize), i = t.append("text");
	i.attr("x", r.x), i.attr("y", r.y), i.style("text-anchor", r.anchor), i.style("font-family", r.fontFamily), i.style("font-size", e), i.style("font-weight", r.fontWeight), i.attr("fill", r.fill), r.class !== void 0 && i.attr("class", r.class);
	let s = i.append("tspan");
	return s.attr("x", r.x + r.textMargin * 2), s.attr("fill", r.fill), s.text(o), i;
}, "drawSimpleText"), Pr = S((t, r, o) => {
	if (!t || (o = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		joinWith: "<br/>"
	}, o), Cn.lineBreakRegex.test(t))) return t;
	let e = t.split(" ").filter(Boolean), i = [], s = "";
	return e.forEach((n, a) => {
		let p = et(`${n} `, o), c = et(s, o);
		if (p > r) {
			let { hyphenatedStrings: y, remainingWord: g } = Mr(n, r, "-", o);
			i.push(s, ...y), s = g;
		} else c + p >= r ? (i.push(s), s = n) : s = [s, n].filter(Boolean).join(" ");
		a + 1 === e.length && i.push(s);
	}), i.filter((n) => n !== "").join(o.joinWith);
}, (t, r, o) => `${t}${r}${o.fontSize}${o.fontWeight}${o.fontFamily}${o.joinWith}`), Mr = S((t, r, o = "-", e) => {
	e = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		margin: 0
	}, e);
	let i = [...t], s = [], n = "";
	return i.forEach((a, p) => {
		let c = `${n}${a}`;
		if (et(c, e) >= r) {
			let m = p + 1, y = i.length === m, g = `${c}${o}`;
			s.push(y ? c : g), n = "";
		} else n = c;
	}), {
		hyphenatedStrings: s,
		remainingWord: n
	};
}, (t, r, o = "-", e) => `${t}${r}${o}${e.fontSize}${e.fontWeight}${e.fontFamily}`);
function Wr(t, r) {
	return pt(t, r).height;
}
m(Wr, "calculateTextHeight");
function et(t, r) {
	return pt(t, r).width;
}
m(et, "calculateTextWidth");
var pt = S((t, r) => {
	let { fontSize: o = 12, fontFamily: e = "Arial", fontWeight: i = 400 } = r;
	if (!t) return {
		width: 0,
		height: 0
	};
	let [, s] = ct(o), n = ["sans-serif", e], a = t.split(Cn.lineBreakRegex), p = [], c = ia("body");
	if (!c.remove) return {
		width: 0,
		height: 0,
		lineHeight: 0
	};
	let x = c.append("svg");
	for (let y of n) {
		let g = 0, B = {
			width: 0,
			height: 0,
			lineHeight: 0
		};
		for (let Gt of a) {
			let mt = Sr();
			mt.text = Gt || "​";
			let ut = Br(x, mt).style("font-size", s).style("font-weight", i).style("font-family", y), _ = (ut._groups || ut)[0][0].getBBox();
			if (_.width === 0 && _.height === 0) throw new Error("svg element not in render tree");
			B.width = Math.round(Math.max(B.width, _.width)), g = Math.round(_.height), B.height += g, B.lineHeight = Math.round(Math.max(B.lineHeight, g));
		}
		p.push(B);
	}
	x.remove();
	return p[isNaN(p[1].height) || isNaN(p[1].width) || isNaN(p[1].lineHeight) || p[0].height > p[1].height && p[0].width > p[1].width && p[0].lineHeight > p[1].lineHeight ? 0 : 1];
}, (t, r) => `${t}${r.fontSize}${r.fontWeight}${r.fontFamily}`), st = class {
	constructor(r = !1, o) {
		this.count = 0;
		this.count = o ? o.length : 0, this.next = r ? () => this.count++ : () => Date.now();
	}
	static {
		m(this, "InitIDGenerator");
	}
}, rt, Er = m(function(t) {
	return rt = rt || document.createElement("div"), t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), rt.innerHTML = t, unescape(rt.textContent);
}, "entityDecode");
function Po(t) {
	return "str" in t;
}
m(Po, "isDetailedError");
var Dr = m((t, r, o, e) => {
	if (!e) return;
	let i = t.node()?.getBBox();
	i && t.append("text").text(e).attr("text-anchor", "middle").attr("x", i.x + i.width / 2).attr("y", -o).attr("class", r);
}, "insertTitle"), ct = m((t) => {
	if (typeof t == "number") return [t, t + "px"];
	let r = parseInt(t ?? "", 10);
	return Number.isNaN(r) ? [void 0, void 0] : t === String(r) ? [r, t + "px"] : [r, t];
}, "parseFontSize");
function Lr(t, r) {
	return ft({}, t, r);
}
m(Lr, "cleanAndMerge");
var Mo = {
	assignWithDepth: D,
	wrapLabel: Pr,
	calculateTextHeight: Wr,
	calculateTextWidth: et,
	calculateTextDimensions: pt,
	cleanAndMerge: Lr,
	detectInit: cr,
	detectDirective: Zt,
	isSubstringInArray: mr,
	interpolateToCurve: ur,
	calcLabelPosition: lr,
	calcCardinalityPosition: dr,
	calcTerminalLabelPosition: hr,
	formatUrl: xr,
	getStylesFromArray: br,
	generateId: wr,
	random: Or,
	runFunc: gr,
	entityDecode: Er,
	insertTitle: Dr,
	isLabelCoordinateInPath: Ir,
	parseFontSize: ct,
	InitIDGenerator: st
}, Wo = m(function(t) {
	let r = t;
	return r = r.replace(/style.*:\S*#.*;/g, function(o) {
		return o.substring(0, o.length - 1);
	}), r = r.replace(/classDef.*:\S*#.*;/g, function(o) {
		return o.substring(0, o.length - 1);
	}), r = r.replace(/#\w+;/g, function(o) {
		let e = o.substring(1, o.length - 1);
		return /^\+?\d+$/.test(e) ? "ﬂ°°" + e + "¶ß" : "ﬂ°" + e + "¶ß";
	}), r;
}, "encodeEntities"), Eo = m(function(t) {
	return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities");
var Do = m((t, r, { counter: o = 0, prefix: e, suffix: i }, s) => s || `${e ? `${e}_` : ""}${t}_${r}_${o}${i ? `_${i}` : ""}`, "getEdgeId");
function Lo(t) {
	return t ?? null;
}
m(Lo, "handleUndefinedAttr");
function Ir(t, r) {
	let o = Math.round(t.x), e = Math.round(t.y), i = r.replace(/(\d+\.\d+)/g, (s) => Math.round(parseFloat(s)).toString());
	return i.includes(o.toString()) || i.includes(e.toString());
}
m(Ir, "isLabelCoordinateInPath");
//#endregion
export { rr as _, Lr as a, Po as c, Wr as d, br as f, pt as g, fr as h, Lo as i, Pr as l, et as m, Do as n, Mo as o, ct as p, Eo as r, Or as s, Bo as t, Wo as u, ur as v, wr as y };
