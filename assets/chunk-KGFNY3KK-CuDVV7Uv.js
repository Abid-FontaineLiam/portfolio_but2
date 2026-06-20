import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { V as ia, q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { A as ds$1, C as at$1, D as co, E as cn, Z as qo, f as Lo, l as It, o as Gi } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { i as Lo$1, m as et$1, r as Eo } from "./chunk-QA3QBVWF-BSQ0fMk9.js";
import { n as Lr, o as ve$1 } from "./chunk-INKRHTLW-D1tzj-ij.js";
import { n as d, t as G$1 } from "./chunk-UY5QBCOK-CwI-dlRa.js";
import { t as Vt } from "./chunk-5IMINLNL-CMXhugjx.js";
import { a as u, i as p, r as m$1, t as S } from "./chunk-T2UQINTJ-D3w-GKPC.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/chunk-KGFNY3KK.mjs
var G = m(async (d, t, c) => {
	let h, a = t.useHtmlLabels || Gi(qo()?.htmlLabels);
	c ? h = c : h = "node default";
	let o = d.insert("g").attr("class", h).attr("id", t.domId || t.id), f = o.insert("g").attr("class", "label").attr("style", Lo$1(t.labelStyle)), i;
	t.label === void 0 ? i = "" : i = typeof t.label == "string" ? t.label : t.label[0];
	let n = !!t.icon || !!t.img, r = t.labelType === "markdown", e = await Lr(f, at$1(Eo(i), qo()), {
		useHtmlLabels: a,
		width: t.width || qo().flowchart?.wrappingWidth,
		classes: r ? "markdown-node-label" : "",
		style: t.labelStyle,
		addSvgBackground: n,
		markdown: r
	}, qo()), s = e.getBBox(), p = (t?.padding ?? 0) / 2;
	if (a) {
		let l = e.children[0], m = ia(e);
		await G$1(l, i), s = l.getBoundingClientRect(), m.attr("width", s.width), m.attr("height", s.height);
	}
	return a ? f.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")") : f.attr("transform", "translate(0, " + -s.height / 2 + ")"), t.centerLabel && f.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), f.insert("rect", ":first-child"), {
		shapeSvg: o,
		bbox: s,
		halfPadding: p,
		label: f
	};
}, "labelHelper"), Gt = m(async (d, t, c) => {
	let h = c.useHtmlLabels ?? co(qo()), a = d.insert("g").attr("class", "label").attr("style", c.labelStyle || ""), o = await Lr(a, at$1(Eo(t), qo()), {
		useHtmlLabels: h,
		width: c.width || qo()?.flowchart?.wrappingWidth,
		style: c.labelStyle,
		addSvgBackground: !!c.icon || !!c.img
	}), f = o.getBBox(), i = c.padding / 2;
	if (co(qo())) {
		let n = o.children[0], r = ia(o);
		f = n.getBoundingClientRect(), r.attr("width", f.width), r.attr("height", f.height);
	}
	return h ? a.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")") : a.attr("transform", "translate(0, " + -f.height / 2 + ")"), c.centerLabel && a.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), a.insert("rect", ":first-child"), {
		shapeSvg: d,
		bbox: f,
		halfPadding: i,
		label: a
	};
}, "insertLabel"), k = m((d, t) => {
	let c = t.node().getBBox();
	d.width = c.width, d.height = c.height;
}, "updateNodeBounds");
var T = m((d, t) => (d.look === "handDrawn" ? "rough-node" : "node") + " " + d.cssClasses + " " + (t || ""), "getNodeClasses");
function I(d) {
	let t = d.map((c, h) => `${h === 0 ? "M" : "L"}${c.x},${c.y}`);
	return t.push("Z"), t.join(" ");
}
m(I, "createPathFromPoints");
function at(d, t, c, h, a, o) {
	let f = [], n = c - d, r = h - t, e = n / o, s = 2 * Math.PI / e, p = t + r / 2;
	for (let l = 0; l <= 50; l++) {
		let g = d + l / 50 * n, u = p + a * Math.sin(s * (g - d));
		f.push({
			x: g,
			y: u
		});
	}
	return f;
}
m(at, "generateFullSineWavePoints");
function $t(d, t, c, h, a, o) {
	let f = [], i = a * Math.PI / 180, e = (o * Math.PI / 180 - i) / (h - 1);
	for (let s = 0; s < h; s++) {
		let p = i + s * e, l = d + c * Math.cos(p), m = t + c * Math.sin(p);
		f.push({
			x: -l,
			y: -m
		});
	}
	return f;
}
m($t, "generateCirclePoints");
function Wt(d) {
	let t = Array.from(d.childNodes).filter((n) => n.tagName === "path"), c = document.createElementNS("http://www.w3.org/2000/svg", "path"), h = t.map((n) => n.getAttribute("d")).filter((n) => n !== null).join(" ");
	c.setAttribute("d", h);
	let a = t.find((n) => n.getAttribute("fill") !== "none"), o = t.find((n) => n.getAttribute("stroke") !== "none"), f = m((n, r) => n?.getAttribute(r) ?? void 0, "getAttr");
	if (a) {
		let n = {
			fill: f(a, "fill"),
			"fill-opacity": f(a, "fill-opacity") ?? "1"
		};
		Object.entries(n).forEach(([r, e]) => {
			e && c.setAttribute(r, e);
		});
	}
	if (o) {
		let n = {
			stroke: f(o, "stroke"),
			"stroke-width": f(o, "stroke-width") ?? "1",
			"stroke-opacity": f(o, "stroke-opacity") ?? "1"
		};
		Object.entries(n).forEach(([r, e]) => {
			e && c.setAttribute(r, e);
		});
	}
	let i = document.createElementNS("http://www.w3.org/2000/svg", "g");
	return i.appendChild(c), i;
}
m(Wt, "mergePaths");
var ut = m((d, t) => {
	var c = d.x, h = d.y, a = t.x - c, o = t.y - h, f = d.width / 2, i = d.height / 2, n, r;
	return Math.abs(o) * f > Math.abs(a) * i ? (o < 0 && (i = -i), n = o === 0 ? 0 : i * a / o, r = i) : (a < 0 && (f = -f), n = f, r = a === 0 ? 0 : f * o / a), {
		x: c + n,
		y: h + r
	};
}, "intersectRect");
var vt = m(async (d, t, c, h = !1, a = !1) => {
	let o = t || "";
	typeof o == "object" && (o = o[0]);
	let f = qo(), i = co(f);
	return await Lr(d, o, {
		style: c,
		isTitle: h,
		useHtmlLabels: i,
		markdown: !1,
		isNode: a,
		width: Number.POSITIVE_INFINITY
	}, f);
}, "createLabel");
var it = m((d, t, c, h, a) => [
	"M",
	d + a,
	t,
	"H",
	d + c - a,
	"A",
	a,
	a,
	0,
	0,
	1,
	d + c,
	t + a,
	"V",
	t + h - a,
	"A",
	a,
	a,
	0,
	0,
	1,
	d + c - a,
	t + h,
	"H",
	d + a,
	"A",
	a,
	a,
	0,
	0,
	1,
	d,
	t + h - a,
	"V",
	t + a,
	"A",
	a,
	a,
	0,
	0,
	1,
	d + a,
	t,
	"Z"
].join(" "), "createRoundedRectPathD");
var Zt = m(async (d$1, t) => {
	pt.info("Creating subgraph rect for ", t.id, t);
	let c = qo(), { themeVariables: h, handDrawnSeed: a } = c, { clusterBkg: o, clusterBorder: f } = h, { labelStyles: i, nodeStyles: n, borderStyles: r, backgroundStyles: e } = m$1(t), s = d$1.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), p = co(c), l = s.insert("g").attr("class", "cluster-label "), m;
	t.labelType === "markdown" ? m = await Lr(l, t.label, {
		style: t.labelStyle,
		useHtmlLabels: p,
		isNode: !0,
		width: t.width
	}) : m = await vt(l, t.label, t.labelStyle || "", !1, !0);
	let g = m.getBBox();
	if (co(c)) {
		let C = m.children[0], R = ia(m);
		g = C.getBoundingClientRect(), R.attr("width", g.width), R.attr("height", g.height);
	}
	let u = t.width <= g.width + t.padding ? g.width + t.padding : t.width;
	t.width <= g.width + t.padding ? t.diff = (u - t.width) / 2 - t.padding : t.diff = -t.padding;
	let y = t.height, b = t.x - u / 2, S$1 = t.y - y / 2;
	pt.trace("Data ", t, JSON.stringify(t));
	let N;
	if (t.look === "handDrawn") {
		let C = Vt.svg(s), R = S(t, {
			roughness: .7,
			fill: o,
			stroke: f,
			fillWeight: 3,
			seed: a
		}), M = C.path(it(b, S$1, u, y, 0), R);
		N = s.insert(() => (pt.debug("Rough node insert CXC", M), M), ":first-child"), N.select("path:nth-child(2)").attr("style", r.join(";")), N.select("path").attr("style", e.join(";").replace("fill", "stroke"));
	} else N = s.insert("rect", ":first-child"), N.attr("style", n).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S$1).attr("width", u).attr("height", y);
	let { subGraphTitleTopMargin: w } = d(c);
	if (l.attr("transform", `translate(${t.x - g.width / 2}, ${t.y - t.height / 2 + w})`), i) {
		let C = l.select("span");
		C && C.attr("style", i);
	}
	let B = N.node().getBBox();
	return t.offsetX = 0, t.width = B.width, t.height = B.height, t.offsetY = g.height - t.padding / 2, t.intersect = function(C) {
		return ut(t, C);
	}, {
		cluster: s,
		labelBBox: g
	};
}, "rect"), ks = m((d, t) => {
	let c = d.insert("g").attr("class", "note-cluster").attr("id", t.domId), h = c.insert("rect", ":first-child"), a = 0 * t.padding, o = a / 2;
	h.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - o).attr("y", t.y - t.height / 2 - o).attr("width", t.width + a).attr("height", t.height + a).attr("fill", "none");
	let f = h.node().getBBox();
	return t.width = f.width, t.height = f.height, t.intersect = function(i) {
		return ut(t, i);
	}, {
		cluster: c,
		labelBBox: {
			width: 0,
			height: 0
		}
	};
}, "noteGroup"), Bs = m(async (d, t) => {
	let c = qo(), { themeVariables: h, handDrawnSeed: a } = c, { altBackground: o, compositeBackground: f, compositeTitleBackground: i, nodeBorder: n } = h, r = d.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-id", t.id).attr("data-look", t.look), e = r.insert("g", ":first-child"), s = r.insert("g").attr("class", "cluster-label"), p = r.append("rect"), l = await vt(s, t.label, t.labelStyle, void 0, !0), m = l.getBBox();
	if (co(c)) {
		let M = l.children[0], E = ia(l);
		m = M.getBoundingClientRect(), E.attr("width", m.width), E.attr("height", m.height);
	}
	let g = 0 * t.padding, u = g / 2, y = (t.width <= m.width + t.padding ? m.width + t.padding : t.width) + g;
	t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
	let b = t.height + g, S = t.height + g - m.height - 6, N = t.x - y / 2, w = t.y - b / 2;
	t.width = y;
	let B = t.y - t.height / 2 - u + m.height + 2, C;
	if (t.look === "handDrawn") {
		let M = t.cssClasses.includes("statediagram-cluster-alt"), E = Vt.svg(r), H = t.rx || t.ry ? E.path(it(N, w, y, b, 10), {
			roughness: .7,
			fill: i,
			fillStyle: "solid",
			stroke: n,
			seed: a
		}) : E.rectangle(N, w, y, b, { seed: a });
		C = r.insert(() => H, ":first-child");
		let W = E.rectangle(N, B, y, S, {
			fill: M ? o : f,
			fillStyle: M ? "hachure" : "solid",
			stroke: n,
			seed: a
		});
		C = r.insert(() => H, ":first-child"), p = r.insert(() => W);
	} else C = e.insert("rect", ":first-child"), C.attr("class", "outer").attr("x", N).attr("y", w).attr("width", y).attr("height", b).attr("data-look", t.look), p.attr("class", "inner").attr("x", N).attr("y", B).attr("width", y).attr("height", S);
	s.attr("transform", `translate(${t.x - m.width / 2}, ${w + 1 - (co(c) ? 0 : 3)})`);
	return t.height = C.node().getBBox().height, t.offsetX = 0, t.offsetY = m.height - t.padding / 2, t.labelBBox = m, t.intersect = function(M) {
		return ut(t, M);
	}, {
		cluster: r,
		labelBBox: m
	};
}, "roundedWithTitle"), Ts = m(async (d$2, t) => {
	pt.info("Creating subgraph rect for ", t.id, t);
	let c = qo(), { themeVariables: h, handDrawnSeed: a } = c, { clusterBkg: o, clusterBorder: f } = h, { labelStyles: i, nodeStyles: n, borderStyles: r, backgroundStyles: e } = m$1(t), s = d$2.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), p = co(c), l = s.insert("g").attr("class", "cluster-label "), m = await Lr(l, t.label, {
		style: t.labelStyle,
		useHtmlLabels: p,
		isNode: !0,
		width: t.width
	}), g = m.getBBox();
	if (co(c)) {
		let C = m.children[0], R = ia(m);
		g = C.getBoundingClientRect(), R.attr("width", g.width), R.attr("height", g.height);
	}
	let u = t.width <= g.width + t.padding ? g.width + t.padding : t.width;
	t.width <= g.width + t.padding ? t.diff = (u - t.width) / 2 - t.padding : t.diff = -t.padding;
	let y = t.height, b = t.x - u / 2, S$2 = t.y - y / 2;
	pt.trace("Data ", t, JSON.stringify(t));
	let N;
	if (t.look === "handDrawn") {
		let C = Vt.svg(s), R = S(t, {
			roughness: .7,
			fill: o,
			stroke: f,
			fillWeight: 4,
			seed: a
		}), M = C.path(it(b, S$2, u, y, t.rx), R);
		N = s.insert(() => (pt.debug("Rough node insert CXC", M), M), ":first-child"), N.select("path:nth-child(2)").attr("style", r.join(";")), N.select("path").attr("style", e.join(";").replace("fill", "stroke"));
	} else N = s.insert("rect", ":first-child"), N.attr("style", n).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", S$2).attr("width", u).attr("height", y);
	let { subGraphTitleTopMargin: w } = d(c);
	if (l.attr("transform", `translate(${t.x - g.width / 2}, ${t.y - t.height / 2 + w})`), i) {
		let C = l.select("span");
		C && C.attr("style", i);
	}
	let B = N.node().getBBox();
	return t.offsetX = 0, t.width = B.width, t.height = B.height, t.offsetY = g.height - t.padding / 2, t.intersect = function(C) {
		return ut(t, C);
	}, {
		cluster: s,
		labelBBox: g
	};
}, "kanbanSection"), Gs = {
	rect: Zt,
	squareRect: Zt,
	roundedWithTitle: Bs,
	noteGroup: ks,
	divider: m((d, t) => {
		let { themeVariables: h, handDrawnSeed: a } = qo(), { nodeBorder: o } = h, f = d.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-look", t.look), i = f.insert("g", ":first-child"), n = 0 * t.padding, r = t.width + n;
		t.diff = -t.padding;
		let e = t.height + n, s = t.x - r / 2, p = t.y - e / 2;
		t.width = r;
		let l;
		if (t.look === "handDrawn") {
			let u = Vt.svg(f).rectangle(s, p, r, e, {
				fill: "lightgrey",
				roughness: .5,
				strokeLineDash: [5],
				stroke: o,
				seed: a
			});
			l = f.insert(() => u, ":first-child");
		} else {
			l = i.insert("rect", ":first-child");
			let g = "outer";
			t.look, g = "divider", l.attr("class", g).attr("x", s).attr("y", p).attr("width", r).attr("height", e).attr("data-look", t.look);
		}
		return t.height = l.node().getBBox().height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(g) {
			return ut(t, g);
		}, {
			cluster: f,
			labelBBox: {}
		};
	}, "divider"),
	kanbanSection: Ts
}, Jt = /* @__PURE__ */ new Map(), Rr = m(async (d, t) => {
	let h = await Gs[t.shape || "rect"](d, t);
	return Jt.set(t.id, h), h;
}, "insertCluster");
var Gr = m(() => {
	Jt = /* @__PURE__ */ new Map();
}, "clear");
function Ms(d, t) {
	return d.intersect(t);
}
m(Ms, "intersectNode");
var Kt = Ms;
function Es(d, t, c, h) {
	var a = d.x, o = d.y, f = a - h.x, i = o - h.y, n = Math.sqrt(t * t * i * i + c * c * f * f), r = Math.abs(t * c * f / n);
	h.x < a && (r = -r);
	var e = Math.abs(t * c * i / n);
	return h.y < o && (e = -e), {
		x: a + r,
		y: o + e
	};
}
m(Es, "intersectEllipse");
var Mt = Es;
function Hs(d, t, c) {
	return Mt(d, t, t, c);
}
m(Hs, "intersectCircle");
var Qt = Hs;
function js(d, t, c, h) {
	{
		let a = t.y - d.y, o = d.x - t.x, f = t.x * d.y - d.x * t.y, i = a * c.x + o * c.y + f, n = a * h.x + o * h.y + f, r = 1e-6;
		if (i !== 0 && n !== 0 && te(i, n)) return;
		let e = h.y - c.y, s = c.x - h.x, p = h.x * c.y - c.x * h.y, l = e * d.x + s * d.y + p, m = e * t.x + s * t.y + p;
		if (Math.abs(l) < r && Math.abs(m) < r && te(l, m)) return;
		let g = a * s - e * o;
		if (g === 0) return;
		let u = Math.abs(g / 2), y = o * p - s * f, b = y < 0 ? (y - u) / g : (y + u) / g;
		y = e * f - a * p;
		return {
			x: b,
			y: y < 0 ? (y - u) / g : (y + u) / g
		};
	}
}
m(js, "intersectLine");
function te(d, t) {
	return d * t > 0;
}
m(te, "sameSign");
var ee = js;
function As(d, t, c) {
	let h = d.x, a = d.y, o = [], f = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY;
	typeof t.forEach == "function" ? t.forEach(function(e) {
		f = Math.min(f, e.x), i = Math.min(i, e.y);
	}) : (f = Math.min(f, t.x), i = Math.min(i, t.y));
	let n = h - d.width / 2 - f, r = a - d.height / 2 - i;
	for (let e = 0; e < t.length; e++) {
		let s = t[e], p = t[e < t.length - 1 ? e + 1 : 0], l = ee(d, c, {
			x: n + s.x,
			y: r + s.y
		}, {
			x: n + p.x,
			y: r + p.y
		});
		l && o.push(l);
	}
	return o.length ? (o.length > 1 && o.sort(function(e, s) {
		let p = e.x - c.x, l = e.y - c.y, m = Math.sqrt(p * p + l * l), g = s.x - c.x, u = s.y - c.y, y = Math.sqrt(g * g + u * u);
		return m < y ? -1 : m === y ? 0 : 1;
	}), o[0]) : d;
}
m(As, "intersectPolygon");
var $ = {
	node: Kt,
	circle: Qt,
	ellipse: Mt,
	polygon: As,
	rect: ut
};
function re(d, t) {
	let { labelStyles: c } = m$1(t);
	t.labelStyle = c;
	let h = T(t), a = h;
	h || (a = "anchor");
	let o = d.insert("g").attr("class", a).attr("id", t.domId || t.id), f = 1, { cssStyles: i } = t, n = Vt.svg(o), r = S(t, {
		fill: "black",
		stroke: "none",
		fillStyle: "solid"
	});
	t.look !== "handDrawn" && (r.roughness = 0);
	let e = n.circle(0, 0, f * 2, r), s = o.insert(() => e, ":first-child");
	return s.attr("class", "anchor").attr("style", Lo$1(i)), k(t, s), t.intersect = function(p) {
		return pt.info("Circle intersect", t, f, p), $.circle(t, f, p);
	}, o;
}
m(re, "anchor");
function ie(d, t, c, h, a, o, f) {
	let n = (d + c) / 2, r = (t + h) / 2, e = Math.atan2(h - t, c - d), s = (c - d) / 2, p = (h - t) / 2, l = s / a, m = p / o, g = Math.sqrt(l ** 2 + m ** 2);
	if (g > 1) throw new Error("The given radii are too small to create an arc between the points.");
	let u = Math.sqrt(1 - g ** 2), y = n + u * o * Math.sin(e) * (f ? -1 : 1), b = r - u * a * Math.cos(e) * (f ? -1 : 1), S = Math.atan2((t - b) / o, (d - y) / a), w = Math.atan2((h - b) / o, (c - y) / a) - S;
	f && w < 0 && (w += 2 * Math.PI), !f && w > 0 && (w -= 2 * Math.PI);
	let B = [];
	for (let C = 0; C < 20; C++) {
		let M = S + C / 19 * w, E = y + a * Math.cos(M), H = b + o * Math.sin(M);
		B.push({
			x: E,
			y: H
		});
	}
	return B;
}
m(ie, "generateArcPoints");
function Os(d, t, c) {
	let [h, a] = [t, c].sort((o, f) => f - o);
	return a * (1 - Math.sqrt(1 - (d / h / 2) ** 2));
}
m(Os, "calculateArcSagitta");
async function oe(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 12 : a, i = m((M) => M + f, "calcTotalHeight"), n = m((M) => {
		let E = M / 2;
		return [E / (2.5 + M / 50), E];
	}, "calcEllipseRadius"), { shapeSvg: r, bbox: e } = await G(d, t, T(t)), s = i(t?.height ? t?.height : e.height), [p, l] = n(s), m$2 = Os(s, p, l), u = (t?.width ? t?.width : e.width) + o * 2 + m$2 - m$2, y = s, { cssStyles: b } = t, S$3 = [
		{
			x: u / 2,
			y: -y / 2
		},
		{
			x: -u / 2,
			y: -y / 2
		},
		...ie(-u / 2, -y / 2, -u / 2, y / 2, p, l, !1),
		{
			x: u / 2,
			y: y / 2
		},
		...ie(u / 2, y / 2, u / 2, -y / 2, p, l, !0)
	], N = Vt.svg(r), w = S(t, {});
	t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
	let B = I(S$3), C = N.path(B, w), R = r.insert(() => C, ":first-child");
	return R.attr("class", "basic label-container outer-path"), b && t.look !== "handDrawn" && R.selectAll("path").attr("style", b), h && t.look !== "handDrawn" && R.selectAll("path").attr("style", h), R.attr("transform", `translate(${p / 2}, 0)`), k(t, R), t.intersect = function(M) {
		return $.polygon(t, S$3, M);
	}, r;
}
m(oe, "bowTieRect");
function et(d, t, c, h) {
	return d.insert("polygon", ":first-child").attr("points", h.map(function(a) {
		return a.x + "," + a.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + c / 2 + ")");
}
m(et, "insertPolygonShape");
var Et = 12;
async function ae(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 28 : a, f = t.look === "neo" ? 24 : a, { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = (t?.width ?? n.width) + (t.look === "neo" ? o * 2 : o + Et), e = (t?.height ?? n.height) + (t.look === "neo" ? f * 2 : f), s = 0, p = r, l = -e, m = 0, g = [
		{
			x: s + Et,
			y: l
		},
		{
			x: p,
			y: l
		},
		{
			x: p,
			y: m
		},
		{
			x: s,
			y: m
		},
		{
			x: s,
			y: l + Et
		},
		{
			x: s + Et,
			y: l
		}
	], u, { cssStyles: y } = t;
	if (t.look === "handDrawn") {
		let b = Vt.svg(i), S$4 = S(t, {}), N = I(g), w = b.path(N, S$4);
		u = i.insert(() => w, ":first-child").attr("transform", `translate(${-r / 2}, ${e / 2})`), y && u.attr("style", y);
	} else u = et(i, r, e, g);
	return h && u.attr("style", h), k(t, u), t.intersect = function(b) {
		return $.polygon(t, g, b);
	}, i;
}
m(ae, "card");
function ne(d, t) {
	let { nodeStyles: c } = m$1(t);
	t.label = "";
	let h = d.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, o = Math.max(28, t.width ?? 0), f = [
		{
			x: 0,
			y: o / 2
		},
		{
			x: o / 2,
			y: 0
		},
		{
			x: 0,
			y: -o / 2
		},
		{
			x: -o / 2,
			y: 0
		}
	], i = Vt.svg(h), n = S(t, {});
	t.look !== "handDrawn" && (n.roughness = 0, n.fillStyle = "solid");
	let r = I(f), e = i.path(r, n), s = h.insert(() => e, ":first-child");
	return a && t.look !== "handDrawn" && s.selectAll("path").attr("style", a), c && t.look !== "handDrawn" && s.selectAll("path").attr("style", c), t.width = 28, t.height = 28, t.intersect = function(p) {
		return $.polygon(t, f, p);
	}, h;
}
m(ne, "choice");
async function Ht(d, t, c) {
	let { labelStyles: h, nodeStyles: a } = m$1(t);
	t.labelStyle = h;
	let { shapeSvg: o, bbox: f, halfPadding: i } = await G(d, t, T(t)), n = 16, r = c?.padding ?? i, e = t.look === "neo" ? f.width / 2 + n * 2 : f.width / 2 + r, s, { cssStyles: p } = t;
	if (t.look === "handDrawn") {
		let l = Vt.svg(o), m = S(t, {}), g = l.circle(0, 0, e * 2, m);
		s = o.insert(() => g, ":first-child"), s.attr("class", "basic label-container").attr("style", Lo$1(p));
	} else s = o.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", a).attr("r", e).attr("cx", 0).attr("cy", 0);
	return k(t, s), t.calcIntersect = function(l, m) {
		let g = l.width / 2;
		return $.circle(l, g, m);
	}, t.intersect = function(l) {
		return pt.info("Circle intersect", t, e, l), $.circle(t, e, l);
	}, o;
}
m(Ht, "circle");
function Vs(d) {
	let t = Math.cos(Math.PI / 4), c = Math.sin(Math.PI / 4), h = d * 2, a = {
		x: h / 2 * t,
		y: h / 2 * c
	}, o = {
		x: -(h / 2) * t,
		y: h / 2 * c
	}, f = {
		x: -(h / 2) * t,
		y: -(h / 2) * c
	}, i = {
		x: h / 2 * t,
		y: -(h / 2) * c
	};
	return `M ${o.x},${o.y} L ${i.x},${i.y}
                   M ${a.x},${a.y} L ${f.x},${f.y}`;
}
m(Vs, "createLine");
function le(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c, t.label = "";
	let a = d.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), o = Math.max(30, t?.width ?? 0), { cssStyles: f } = t, i = Vt.svg(a), n = S(t, {});
	t.look !== "handDrawn" && (n.roughness = 0, n.fillStyle = "solid");
	let r = i.circle(0, 0, o * 2, n), e = Vs(o), s = i.path(e, n), p = a.insert(() => r, ":first-child");
	return p.insert(() => s), p.attr("class", "outer-path"), f && t.look !== "handDrawn" && p.selectAll("path").attr("style", f), h && t.look !== "handDrawn" && p.selectAll("path").attr("style", h), k(t, p), t.intersect = function(l) {
		return pt.info("crossedCircle intersect", t, {
			radius: o,
			point: l
		}), $.circle(t, o, l);
	}, a;
}
m(le, "crossedCircle");
function xt(d, t, c, h = 100, a = 0, o = 180) {
	let f = [], i = a * Math.PI / 180, e = (o * Math.PI / 180 - i) / (h - 1);
	for (let s = 0; s < h; s++) {
		let p = i + s * e, l = d + c * Math.cos(p), m = t + c * Math.sin(p);
		f.push({
			x: -l,
			y: -m
		});
	}
	return f;
}
m(xt, "generateCirclePoints");
async function ce(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o, label: f } = await G(d, t, T(t)), i = t.look === "neo" ? 18 : t.padding ?? 0, n = t.look === "neo" ? 12 : t.padding ?? 0, r = o.width + i, e = o.height + n, s = Math.max(5, e * .1), { cssStyles: p } = t, l = [
		...xt(r / 2, -e / 2, s, 30, -90, 0),
		{
			x: -r / 2 - s,
			y: s
		},
		...xt(r / 2 + s * 2, -s, s, 20, -180, -270),
		...xt(r / 2 + s * 2, s, s, 20, -90, -180),
		{
			x: -r / 2 - s,
			y: -e / 2
		},
		...xt(r / 2, e / 2, s, 20, 0, 90)
	], m = [
		{
			x: r / 2,
			y: -e / 2 - s
		},
		{
			x: -r / 2,
			y: -e / 2 - s
		},
		...xt(r / 2, -e / 2, s, 20, -90, 0),
		{
			x: -r / 2 - s,
			y: -s
		},
		...xt(r / 2 + r * .1, -s, s, 20, -180, -270),
		...xt(r / 2 + r * .1, s, s, 20, -90, -180),
		{
			x: -r / 2 - s,
			y: e / 2
		},
		...xt(r / 2, e / 2, s, 20, 0, 90),
		{
			x: -r / 2,
			y: e / 2 + s
		},
		{
			x: r / 2,
			y: e / 2 + s
		}
	], g = Vt.svg(a), u = S(t, { fill: "none" });
	t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
	let b = I(l).replace("Z", ""), S$5 = g.path(b, u), N = I(m), w = g.path(N, { ...u }), B = a.insert("g", ":first-child");
	return B.insert(() => w, ":first-child").attr("stroke-opacity", 0), B.insert(() => S$5, ":first-child"), B.attr("class", "text"), p && t.look !== "handDrawn" && B.selectAll("path").attr("style", p), h && t.look !== "handDrawn" && B.selectAll("path").attr("style", h), B.attr("transform", `translate(${s}, 0)`), f.attr("transform", `translate(${-r / 2 + s - (o.x - (o.left ?? 0))},${-e / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`), k(t, B), t.intersect = function(C) {
		return $.polygon(t, m, C);
	}, a;
}
m(ce, "curlyBraceLeft");
function bt(d, t, c, h = 100, a = 0, o = 180) {
	let f = [], i = a * Math.PI / 180, e = (o * Math.PI / 180 - i) / (h - 1);
	for (let s = 0; s < h; s++) {
		let p = i + s * e, l = d + c * Math.cos(p), m = t + c * Math.sin(p);
		f.push({
			x: l,
			y: m
		});
	}
	return f;
}
m(bt, "generateCirclePoints");
async function he(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o, label: f } = await G(d, t, T(t)), i = t.look === "neo" ? 18 : t.padding ?? 0, n = t.look === "neo" ? 12 : t.padding ?? 0, r = o.width + (t.look === "neo" ? i * 2 : i), e = o.height + (t.look === "neo" ? n * 2 : n), s = Math.max(5, e * .1), { cssStyles: p } = t, l = [
		...bt(r / 2, -e / 2, s, 20, -90, 0),
		{
			x: r / 2 + s,
			y: -s
		},
		...bt(r / 2 + s * 2, -s, s, 20, -180, -270),
		...bt(r / 2 + s * 2, s, s, 20, -90, -180),
		{
			x: r / 2 + s,
			y: e / 2
		},
		...bt(r / 2, e / 2, s, 20, 0, 90)
	], m = [
		{
			x: -r / 2,
			y: -e / 2 - s
		},
		{
			x: r / 2,
			y: -e / 2 - s
		},
		...bt(r / 2, -e / 2, s, 20, -90, 0),
		{
			x: r / 2 + s,
			y: -s
		},
		...bt(r / 2 + s * 2, -s, s, 20, -180, -270),
		...bt(r / 2 + s * 2, s, s, 20, -90, -180),
		{
			x: r / 2 + s,
			y: e / 2
		},
		...bt(r / 2, e / 2, s, 20, 0, 90),
		{
			x: r / 2,
			y: e / 2 + s
		},
		{
			x: -r / 2,
			y: e / 2 + s
		}
	], g = Vt.svg(a), u = S(t, { fill: "none" });
	t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
	let b = I(l).replace("Z", ""), S$6 = g.path(b, u), N = I(m), w = g.path(N, { ...u }), B = a.insert("g", ":first-child");
	return B.insert(() => w, ":first-child").attr("stroke-opacity", 0), B.insert(() => S$6, ":first-child"), B.attr("class", "text"), p && t.look !== "handDrawn" && B.selectAll("path").attr("style", p), h && t.look !== "handDrawn" && B.selectAll("path").attr("style", h), B.attr("transform", `translate(${-s}, 0)`), f.attr("transform", `translate(${-r / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-e / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`), k(t, B), t.intersect = function(C) {
		return $.polygon(t, m, C);
	}, a;
}
m(he, "curlyBraceRight");
function st(d, t, c, h = 100, a = 0, o = 180) {
	let f = [], i = a * Math.PI / 180, e = (o * Math.PI / 180 - i) / (h - 1);
	for (let s = 0; s < h; s++) {
		let p = i + s * e, l = d + c * Math.cos(p), m = t + c * Math.sin(p);
		f.push({
			x: -l,
			y: -m
		});
	}
	return f;
}
m(st, "generateCirclePoints");
async function pe(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o, label: f } = await G(d, t, T(t)), i = t.look === "neo" ? 18 : t.padding ?? 0, n = t.look === "neo" ? 12 : t.padding ?? 0, r = o.width + (t.look === "neo" ? i * 2 : i), e = o.height + (t.look === "neo" ? n * 2 : n), s = Math.max(5, e * .1), { cssStyles: p } = t, l = [
		...st(r / 2, -e / 2, s, 30, -90, 0),
		{
			x: -r / 2 - s,
			y: s
		},
		...st(r / 2 + s * 2, -s, s, 20, -180, -270),
		...st(r / 2 + s * 2, s, s, 20, -90, -180),
		{
			x: -r / 2 - s,
			y: -e / 2
		},
		...st(r / 2, e / 2, s, 20, 0, 90)
	], m = [
		...st(-r / 2 + s + s / 2, -e / 2, s, 20, -90, -180),
		{
			x: r / 2 - s / 2,
			y: s
		},
		...st(-r / 2 - s / 2, -s, s, 20, 0, 90),
		...st(-r / 2 - s / 2, s, s, 20, -90, 0),
		{
			x: r / 2 - s / 2,
			y: -s
		},
		...st(-r / 2 + s + s / 2, e / 2, s, 30, -180, -270)
	], g = [
		{
			x: r / 2,
			y: -e / 2 - s
		},
		{
			x: -r / 2,
			y: -e / 2 - s
		},
		...st(r / 2, -e / 2, s, 20, -90, 0),
		{
			x: -r / 2 - s,
			y: -s
		},
		...st(r / 2 + s * 2, -s, s, 20, -180, -270),
		...st(r / 2 + s * 2, s, s, 20, -90, -180),
		{
			x: -r / 2 - s,
			y: e / 2
		},
		...st(r / 2, e / 2, s, 20, 0, 90),
		{
			x: -r / 2,
			y: e / 2 + s
		},
		{
			x: r / 2 - s - s / 2,
			y: e / 2 + s
		},
		...st(-r / 2 + s + s / 2, -e / 2, s, 20, -90, -180),
		{
			x: r / 2 - s / 2,
			y: s
		},
		...st(-r / 2 - s / 2, -s, s, 20, 0, 90),
		...st(-r / 2 - s / 2, s, s, 20, -90, 0),
		{
			x: r / 2 - s / 2,
			y: -s
		},
		...st(-r / 2 + s + s / 2, e / 2, s, 30, -180, -270)
	], u = Vt.svg(a), y = S(t, { fill: "none" });
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let S$7 = I(l).replace("Z", ""), N = u.path(S$7, y), B = I(m).replace("Z", ""), C = u.path(B, y), R = I(g), M = u.path(R, { ...y }), E = a.insert("g", ":first-child");
	return E.insert(() => M, ":first-child").attr("stroke-opacity", 0), E.insert(() => N, ":first-child"), E.insert(() => C, ":first-child"), E.attr("class", "text"), p && t.look !== "handDrawn" && E.selectAll("path").attr("style", p), h && t.look !== "handDrawn" && E.selectAll("path").attr("style", h), E.attr("transform", `translate(${s - s / 4}, 0)`), f.attr("transform", `translate(${-r / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-e / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`), k(t, E), t.intersect = function(H) {
		return $.polygon(t, g, H);
	}, a;
}
m(pe, "curlyBraces");
async function me(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 12 : a, i = 20, n = 5, { shapeSvg: r, bbox: e } = await G(d, t, T(t)), s = Math.max(i, (e.width + o * 2) * 1.25, t?.width ?? 0), p = Math.max(n, e.height + f * 2, t?.height ?? 0), l = p / 2, { cssStyles: m } = t, g = Vt.svg(r), u = S(t, {});
	t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
	let y = s, b = p, S$8 = y - l, N = b / 4, w = [
		{
			x: S$8,
			y: 0
		},
		{
			x: N,
			y: 0
		},
		{
			x: 0,
			y: b / 2
		},
		{
			x: N,
			y: b
		},
		{
			x: S$8,
			y: b
		},
		...$t(-S$8, -b / 2, l, 50, 270, 90)
	], B = I(w), C = g.path(B, u), R = r.insert(() => C, ":first-child");
	return R.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && R.selectChildren("path").attr("style", m), h && t.look !== "handDrawn" && R.selectChildren("path").attr("style", h), R.attr("transform", `translate(${-s / 2}, ${-p / 2})`), k(t, R), t.intersect = function(M) {
		return $.polygon(t, w, M);
	}, r;
}
m(me, "curvedTrapezoid");
var Ls = m((d, t, c, h, a, o) => [
	`M${d},${t + o}`,
	`a${a},${o} 0,0,0 ${c},0`,
	`a${a},${o} 0,0,0 ${-c},0`,
	`l0,${h}`,
	`a${a},${o} 0,0,0 ${c},0`,
	`l0,${-h}`
].join(" "), "createCylinderPathD"), Is = m((d, t, c, h, a, o) => [
	`M${d},${t + o}`,
	`M${d + c},${t + o}`,
	`a${a},${o} 0,0,0 ${-c},0`,
	`l0,${h}`,
	`a${a},${o} 0,0,0 ${c},0`,
	`l0,${-h}`
].join(" "), "createOuterCylinderPathD"), Ws = m((d, t, c, h, a, o) => [`M${d - c / 2},${-h / 2}`, `a${a},${o} 0,0,0 ${c},0`].join(" "), "createInnerCylinderPathD"), ge = 8, fe = 8;
async function de(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 24 : a, f = t.look === "neo" ? 24 : a;
	if (t.width || t.height) {
		let u = t.width ?? 0;
		t.width = (t.width ?? 0) - f, t.width < fe && (t.width = fe);
		let b = u / 2 / (2.5 + u / 50);
		t.height = (t.height ?? 0) - o - b * 3, t.height < ge && (t.height = ge);
	}
	let { shapeSvg: i, bbox: n, label: r } = await G(d, t, T(t)), e = (t.width ? t.width : n.width) + f, s = e / 2, p = s / (2.5 + e / 50), l = (t.height ? t.height : n.height) + o + p, m, { cssStyles: g } = t;
	if (t.look === "handDrawn") {
		let u = Vt.svg(i), y = Is(0, 0, e, l, s, p), b = Ws(0, p, e, l, s, p), S$9 = S(t, {}), N = u.path(y, S$9), w = u.path(b, S(t, { fill: "none" }));
		m = i.insert(() => w, ":first-child"), m = i.insert(() => N, ":first-child"), m.attr("class", "basic label-container"), g && m.attr("style", g);
	} else {
		let u = Ls(0, 0, e, l, s, p);
		m = i.insert("path", ":first-child").attr("d", u).attr("class", "basic label-container outer-path").attr("style", Lo$1(g)).attr("style", h);
	}
	return m.attr("label-offset-y", p), m.attr("transform", `translate(${-e / 2}, ${-(l / 2 + p)})`), k(t, m), r.attr("transform", `translate(${-(n.width / 2) - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + (t.padding ?? 0) / 1.5 - (n.y - (n.top ?? 0))})`), t.intersect = function(u) {
		let y = $.rect(t, u), b = y.x - (t.x ?? 0);
		if (s != 0 && (Math.abs(b) < (t.width ?? 0) / 2 || Math.abs(b) == (t.width ?? 0) / 2 && Math.abs(y.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - p)) {
			let S = p * p * (1 - b * b / (s * s));
			S > 0 && (S = Math.sqrt(S)), S = p - S, u.y - (t.y ?? 0) > 0 && (S = -S), y.y += S;
		}
		return y;
	}, i;
}
m(de, "cylinder");
async function ct(d, t, c) {
	let { labelStyles: h, nodeStyles: a } = m$1(t);
	t.labelStyle = h;
	let { shapeSvg: o, bbox: f } = await G(d, t, T(t)), i = Math.max(f.width + c.labelPaddingX * 2, t?.width || 0), n = Math.max(f.height + c.labelPaddingY * 2, t?.height || 0), r = -i / 2, e = -n / 2, s, { rx: p, ry: l } = t, { cssStyles: m } = t;
	if (c?.rx && c.ry && (p = c.rx, l = c.ry), t.look === "handDrawn") {
		let g = Vt.svg(o), u = S(t, {}), y = p || l ? g.path(it(r, e, i, n, p || 0), u) : g.rectangle(r, e, i, n, u);
		s = o.insert(() => y, ":first-child"), s.attr("class", "basic label-container").attr("style", Lo$1(m));
	} else s = o.insert("rect", ":first-child"), s.attr("class", "basic label-container").attr("style", a).attr("rx", Lo$1(p)).attr("ry", Lo$1(l)).attr("x", r).attr("y", e).attr("width", i).attr("height", n);
	return k(t, s), t.calcIntersect = function(g, u) {
		return $.rect(g, u);
	}, t.intersect = function(g) {
		return $.rect(t, g);
	}, o;
}
m(ct, "drawRect");
async function ye(d, t) {
	let { cssClasses: c, labelPaddingX: h, labelPaddingY: a, padding: o, width: f, height: i } = t, r = await ct(d, t, {
		rx: 0,
		ry: 0,
		classes: c ?? "",
		labelPaddingX: h ?? (o ?? 0) * 2,
		labelPaddingY: a ?? o ?? 0
	});
	if (t.look === "handDrawn") {
		let l = Vt.svg(r), m = S(t, {}), g = r.select(".basic.label-container > path:nth-child(2)"), u = g.node();
		if (!u) return r;
		let y = null;
		if (u instanceof SVGGraphicsElement) y = u.getBBox();
		else return r;
		return r.insert(() => l.line(y.x, y.y, y.x + y.width, y.y, m), ".basic.label-container g.label"), r.insert(() => l.line(y.x, y.y + y.height, y.x + y.width, y.y + y.height, m), ".basic.label-container g.label"), g.remove(), r;
	}
	let e = r.select(".basic.label-container"), s = (Number(e.attr("width")) || f) ?? 0, p = (Number(e.attr("height")) || i) ?? 0;
	return s > 0 && p > 0 && e.attr("stroke-dasharray", `${s} ${p}`), r;
}
m(ye, "datastore");
async function ue(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 16 : t.padding ?? 0, { shapeSvg: f, bbox: i, label: n } = await G(d, t, T(t)), r = i.width + a, e = i.height + o, s = e * .2, p = -r / 2, l = -e / 2 - s / 2, { cssStyles: m } = t, g = Vt.svg(f), u = S(t, {});
	t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
	let y = [
		{
			x: p,
			y: l + s
		},
		{
			x: -p,
			y: l + s
		},
		{
			x: -p,
			y: -l
		},
		{
			x: p,
			y: -l
		},
		{
			x: p,
			y: l
		},
		{
			x: -p,
			y: l
		},
		{
			x: -p,
			y: l + s
		}
	], b = g.polygon(y.map((N) => [N.x, N.y]), u), S$10 = f.insert(() => b, ":first-child");
	return S$10.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && S$10.selectAll("path").attr("style", m), h && t.look !== "handDrawn" && S$10.selectAll("path").attr("style", h), n.attr("transform", `translate(${p + (t.padding ?? 0) / 2 - (i.x - (i.left ?? 0))}, ${l + s + (t.padding ?? 0) / 2 - (i.y - (i.top ?? 0))})`), k(t, S$10), t.intersect = function(N) {
		return $.rect(t, N);
	}, f;
}
m(ue, "dividedRectangle");
async function xe(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t), a = t.look === "neo" ? 12 : 5;
	t.labelStyle = c;
	let o = t.padding ?? 0, f = t.look === "neo" ? 16 : o, { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = (t?.width ? t?.width / 2 : n.width / 2) + (f ?? 0), e = r - a, s, { cssStyles: p } = t;
	if (t.look === "handDrawn") {
		let l = Vt.svg(i), m = S(t, {
			roughness: .2,
			strokeWidth: 2.5
		}), g = S(t, {
			roughness: .2,
			strokeWidth: 1.5
		}), u = l.circle(0, 0, r * 2, m), y = l.circle(0, 0, e * 2, g);
		s = i.insert("g", ":first-child"), s.attr("class", Lo$1(t.cssClasses)).attr("style", Lo$1(p)), s.node()?.appendChild(u), s.node()?.appendChild(y);
	} else {
		s = i.insert("g", ":first-child");
		let l = s.insert("circle", ":first-child"), m = s.insert("circle");
		s.attr("class", "basic label-container").attr("style", h), l.attr("class", "outer-circle").attr("style", h).attr("r", r).attr("cx", 0).attr("cy", 0), m.attr("class", "inner-circle").attr("style", h).attr("r", e).attr("cx", 0).attr("cy", 0);
	}
	return k(t, s), t.intersect = function(l) {
		return pt.info("DoubleCircle intersect", t, r, l), $.circle(t, r, l);
	}, i;
}
m(xe, "doublecircle");
function be(d, t, { config: { themeVariables: c } }) {
	let { labelStyles: h, nodeStyles: a } = m$1(t);
	t.label = "", t.labelStyle = h;
	let o = d.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), f = 7, { cssStyles: i } = t, n = Vt.svg(o), { nodeBorder: r } = c, e = S(t, { fillStyle: "solid" });
	t.look !== "handDrawn" && (e.roughness = 0);
	let s = n.circle(0, 0, f * 2, e), p = o.insert(() => s, ":first-child");
	return p.selectAll("path").attr("style", `fill: ${r} !important;`), i && i.length > 0 && t.look !== "handDrawn" && p.selectAll("path").attr("style", i), a && t.look !== "handDrawn" && p.selectAll("path").attr("style", a), k(t, p), t.intersect = function(l) {
		return pt.info("filledCircle intersect", t, {
			radius: f,
			point: l
		}), $.circle(t, f, l);
	}, o;
}
m(be, "filledCircle");
var Se = 10, we = 10;
async function Ne(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? a * 2 : a;
	(t.width || t.height) && (t.height = t?.height ?? 0, t.height < Se && (t.height = Se), t.width = (t?.width ?? 0) - o - o / 2, t.width < we && (t.width = we));
	let { shapeSvg: f, bbox: i, label: n } = await G(d, t, T(t)), r = (t?.width ? t?.width : i.width) + (o ?? 0), e = t?.height ? t?.height : r + i.height, s = e, p = [
		{
			x: 0,
			y: -e
		},
		{
			x: s,
			y: -e
		},
		{
			x: s / 2,
			y: 0
		}
	], { cssStyles: l } = t, m = Vt.svg(f), g = S(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let u = I(p), y = m.path(u, g), b = f.insert(() => y, ":first-child").attr("transform", `translate(${-e / 2}, ${e / 2})`).attr("class", "outer-path");
	return l && t.look !== "handDrawn" && b.selectChildren("path").attr("style", l), h && t.look !== "handDrawn" && b.selectChildren("path").attr("style", h), t.width = r, t.height = e, k(t, b), n.attr("transform", `translate(${-i.width / 2 - (i.x - (i.left ?? 0))}, ${-e / 2 + (t.padding ?? 0) / 2 + (i.y - (i.top ?? 0))})`), t.intersect = function(S) {
		return pt.info("Triangle intersect", t, p, S), $.polygon(t, p, S);
	}, f;
}
m(Ne, "flippedTriangle");
function $e(d, t, { dir: c, config: { state: h, themeVariables: a } }) {
	let { nodeStyles: o } = m$1(t);
	t.label = "";
	let f = d.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), { cssStyles: i } = t, n = Math.max(70, t?.width ?? 0), r = Math.max(10, t?.height ?? 0);
	c === "LR" && (n = Math.max(10, t?.width ?? 0), r = Math.max(70, t?.height ?? 0));
	let e = -1 * n / 2, s = -1 * r / 2, p = Vt.svg(f), l = S(t, {
		stroke: a.lineColor,
		fill: a.lineColor
	});
	t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
	let m = p.rectangle(e, s, n, r, l), g = f.insert(() => m, ":first-child");
	i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), o && t.look !== "handDrawn" && g.selectAll("path").attr("style", o), k(t, g);
	let u = h?.padding ?? 0;
	return t.width && t.height && (t.width += u / 2 || 0, t.height += u / 2 || 0), t.intersect = function(y) {
		return $.rect(t, y);
	}, f;
}
m($e, "forkJoin");
async function De(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = 15, o = 10, f = t.look === "neo" ? 16 : t.padding ?? 0, i = t.look === "neo" ? 12 : t.padding ?? 0;
	(t.width || t.height) && (t.height = (t?.height ?? 0) - i * 2, t.height < o && (t.height = o), t.width = (t?.width ?? 0) - f * 2, t.width < a && (t.width = a));
	let { shapeSvg: n, bbox: r } = await G(d, t, T(t)), e = (t?.width ? t?.width : Math.max(a, r.width)) + f * 2, s = (t?.height ? t?.height : Math.max(o, r.height)) + i * 2, p = s / 2, { cssStyles: l } = t, m = Vt.svg(n), g = S(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let u = [
		{
			x: -e / 2,
			y: -s / 2
		},
		{
			x: e / 2 - p,
			y: -s / 2
		},
		...$t(-e / 2 + p, 0, p, 50, 90, 270),
		{
			x: e / 2 - p,
			y: s / 2
		},
		{
			x: -e / 2,
			y: s / 2
		}
	], y = I(u), b = m.path(y, g), S$11 = n.insert(() => b, ":first-child");
	return S$11.attr("class", "basic label-container outer-path"), l && t.look !== "handDrawn" && S$11.selectChildren("path").attr("style", l), h && t.look !== "handDrawn" && S$11.selectChildren("path").attr("style", h), k(t, S$11), t.intersect = function(N) {
		return pt.info("Pill intersect", t, {
			radius: p,
			point: N
		}), $.polygon(t, u, N);
	}, n;
}
m(De, "halfRoundedRectangle");
var Xs = m((d, t, c, h, a) => [
	`M${d + a},${t}`,
	`L${d + c - a},${t}`,
	`L${d + c},${t - h / 2}`,
	`L${d + c - a},${t - h}`,
	`L${d + a},${t - h}`,
	`L${d},${t - h / 2}`,
	"Z"
].join(" "), "createHexagonPathD");
async function Pe(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t), a = t.look === "neo" ? 3.5 : 4;
	t.labelStyle = c;
	let o = t.padding ?? 0, f = 70, i = 32, n = t.look === "neo" ? f : o, r = t.look === "neo" ? i : o;
	if (t.width || t.height) {
		let S = (t.height ?? 0) / a;
		t.width = (t?.width ?? 0) - 2 * S - r, t.height = (t.height ?? 0) - n;
	}
	let { shapeSvg: e, bbox: s } = await G(d, t, T(t)), p = (t?.height ? t?.height : s.height) + n, l = p / a, m = (t?.width ? t?.width : s.width) + 2 * l + r, g = [
		{
			x: l,
			y: 0
		},
		{
			x: m - l,
			y: 0
		},
		{
			x: m,
			y: -p / 2
		},
		{
			x: m - l,
			y: -p
		},
		{
			x: l,
			y: -p
		},
		{
			x: 0,
			y: -p / 2
		}
	], u, { cssStyles: y } = t;
	if (t.look === "handDrawn") {
		let b = Vt.svg(e), S$12 = S(t, {}), N = Xs(0, 0, m, p, l), w = b.path(N, S$12);
		u = e.insert(() => w, ":first-child").attr("transform", `translate(${-m / 2}, ${p / 2})`), y && u.attr("style", y);
	} else u = et(e, m, p, g);
	return h && u.attr("style", h), t.width = m, t.height = p, k(t, u), t.intersect = function(b) {
		return $.polygon(t, g, b);
	}, e;
}
m(Pe, "hexagon");
async function ve(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.label = "", t.labelStyle = c;
	let { shapeSvg: a } = await G(d, t, T(t)), o = Math.max(30, t?.width ?? 0), f = Math.max(30, t?.height ?? 0), { cssStyles: i } = t, n = Vt.svg(a), r = S(t, {});
	t.look !== "handDrawn" && (r.roughness = 0, r.fillStyle = "solid");
	let e = [
		{
			x: 0,
			y: 0
		},
		{
			x: o,
			y: 0
		},
		{
			x: 0,
			y: f
		},
		{
			x: o,
			y: f
		}
	], s = I(e), p = n.path(s, r), l = a.insert(() => p, ":first-child");
	return l.attr("class", "basic label-container outer-path"), i && t.look !== "handDrawn" && l.selectChildren("path").attr("style", i), h && t.look !== "handDrawn" && l.selectChildren("path").attr("style", h), l.attr("transform", `translate(${-o / 2}, ${-f / 2})`), k(t, l), t.intersect = function(m) {
		return pt.info("Pill intersect", t, { points: e }), $.polygon(t, e, m);
	}, a;
}
m(ve, "hourglass");
async function ke(d, t, { config: { themeVariables: c, flowchart: h } }) {
	let { labelStyles: a } = m$1(t);
	t.labelStyle = a;
	let o = t.assetHeight ?? 48, f = t.assetWidth ?? 48, i = Math.max(o, f), n = h?.wrappingWidth;
	t.width = Math.max(i, n ?? 0);
	let { shapeSvg: r, bbox: e, label: s } = await G(d, t, "icon-shape default"), p$1 = t.pos === "t", l = i, m = i, { nodeBorder: g } = c, { stylesMap: u } = p(t), y = -m / 2, b = -l / 2, S$13 = t.label ? 8 : 0, N = Vt.svg(r), w = S(t, {
		stroke: "none",
		fill: "none"
	});
	t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
	let B = N.rectangle(y, b, m, l, w), C = Math.max(m, e.width), R = l + e.height + S$13, M = N.rectangle(-C / 2, -R / 2, C, R, {
		...w,
		fill: "transparent",
		stroke: "none"
	}), E = r.insert(() => B, ":first-child"), H = r.insert(() => M);
	if (t.icon) {
		let W = r.append("g");
		W.html(`<g>${await ve$1(t.icon, {
			height: i,
			width: i,
			fallbackPrefix: ""
		})}</g>`);
		let j = W.node().getBBox(), V = j.width, O = j.height, A = j.x, L = j.y;
		W.attr("transform", `translate(${-V / 2 - A},${p$1 ? e.height / 2 + S$13 / 2 - O / 2 - L : -e.height / 2 - S$13 / 2 - O / 2 - L})`), W.attr("style", `color: ${u.get("stroke") ?? g};`);
	}
	return s.attr("transform", `translate(${-e.width / 2 - (e.x - (e.left ?? 0))},${p$1 ? -R / 2 : R / 2 - e.height})`), E.attr("transform", `translate(0,${p$1 ? e.height / 2 + S$13 / 2 : -e.height / 2 - S$13 / 2})`), k(t, H), t.intersect = function(W) {
		if (pt.info("iconSquare intersect", t, W), !t.label) return $.rect(t, W);
		let j = t.x ?? 0, V = t.y ?? 0, O = t.height ?? 0, A = [];
		return p$1 ? A = [
			{
				x: j - e.width / 2,
				y: V - O / 2
			},
			{
				x: j + e.width / 2,
				y: V - O / 2
			},
			{
				x: j + e.width / 2,
				y: V - O / 2 + e.height + S$13
			},
			{
				x: j + m / 2,
				y: V - O / 2 + e.height + S$13
			},
			{
				x: j + m / 2,
				y: V + O / 2
			},
			{
				x: j - m / 2,
				y: V + O / 2
			},
			{
				x: j - m / 2,
				y: V - O / 2 + e.height + S$13
			},
			{
				x: j - e.width / 2,
				y: V - O / 2 + e.height + S$13
			}
		] : A = [
			{
				x: j - m / 2,
				y: V - O / 2
			},
			{
				x: j + m / 2,
				y: V - O / 2
			},
			{
				x: j + m / 2,
				y: V - O / 2 + l
			},
			{
				x: j + e.width / 2,
				y: V - O / 2 + l
			},
			{
				x: j + e.width / 2 / 2,
				y: V + O / 2
			},
			{
				x: j - e.width / 2,
				y: V + O / 2
			},
			{
				x: j - e.width / 2,
				y: V - O / 2 + l
			},
			{
				x: j - m / 2,
				y: V - O / 2 + l
			}
		], $.polygon(t, A, W);
	}, r;
}
m(ke, "icon");
async function Be(d, t, { config: { themeVariables: c, flowchart: h } }) {
	let { labelStyles: a } = m$1(t);
	t.labelStyle = a;
	let o = t.assetHeight ?? 48, f = t.assetWidth ?? 48, i = Math.max(o, f), n = h?.wrappingWidth;
	t.width = Math.max(i, n ?? 0);
	let { shapeSvg: r, bbox: e, label: s } = await G(d, t, "icon-shape default"), p$2 = 20, l = t.label ? 8 : 0, m = t.pos === "t", { nodeBorder: g, mainBkg: u } = c, { stylesMap: y } = p(t), b = Vt.svg(r), S$14 = S(t, {});
	t.look !== "handDrawn" && (S$14.roughness = 0, S$14.fillStyle = "solid");
	S$14.stroke = y.get("fill") ?? u;
	let w = r.append("g");
	t.icon && w.html(`<g>${await ve$1(t.icon, {
		height: i,
		width: i,
		fallbackPrefix: ""
	})}</g>`);
	let B = w.node().getBBox(), C = B.width, R = B.height, M = B.x, E = B.y, H = Math.max(C, R) * Math.SQRT2 + p$2 * 2, W = b.circle(0, 0, H, S$14), j = Math.max(H, e.width), V = H + e.height + l, O = b.rectangle(-j / 2, -V / 2, j, V, {
		...S$14,
		fill: "transparent",
		stroke: "none"
	}), A = r.insert(() => W, ":first-child"), L = r.insert(() => O);
	return w.attr("transform", `translate(${-C / 2 - M},${m ? e.height / 2 + l / 2 - R / 2 - E : -e.height / 2 - l / 2 - R / 2 - E})`), w.attr("style", `color: ${y.get("stroke") ?? g};`), s.attr("transform", `translate(${-e.width / 2 - (e.x - (e.left ?? 0))},${m ? -V / 2 : V / 2 - e.height})`), A.attr("transform", `translate(0,${m ? e.height / 2 + l / 2 : -e.height / 2 - l / 2})`), k(t, L), t.intersect = function(X) {
		return pt.info("iconSquare intersect", t, X), $.rect(t, X);
	}, r;
}
m(Be, "iconCircle");
async function Te(d, t, { config: { themeVariables: c, flowchart: h } }) {
	let { labelStyles: a } = m$1(t);
	t.labelStyle = a;
	let o = t.assetHeight ?? 48, f = t.assetWidth ?? 48, i = Math.max(o, f), n = h?.wrappingWidth;
	t.width = Math.max(i, n ?? 0);
	let { shapeSvg: r, bbox: e, halfPadding: s, label: p$3 } = await G(d, t, "icon-shape default"), l = t.pos === "t", m = i + s * 2, g = i + s * 2, { nodeBorder: u, mainBkg: y } = c, { stylesMap: b } = p(t), S$15 = -g / 2, N = -m / 2, w = t.label ? 8 : 0, B = Vt.svg(r), C = S(t, {});
	t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
	C.stroke = b.get("fill") ?? y;
	let M = B.path(it(S$15, N, g, m, 5), C), E = Math.max(g, e.width), H = m + e.height + w, W = B.rectangle(-E / 2, -H / 2, E, H, {
		...C,
		fill: "transparent",
		stroke: "none"
	}), j = r.insert(() => M, ":first-child").attr("class", "icon-shape2"), V = r.insert(() => W);
	if (t.icon) {
		let O = r.append("g");
		O.html(`<g>${await ve$1(t.icon, {
			height: i,
			width: i,
			fallbackPrefix: ""
		})}</g>`);
		let A = O.node().getBBox(), L = A.width, X = A.height, _ = A.x, z = A.y;
		O.attr("transform", `translate(${-L / 2 - _},${l ? e.height / 2 + w / 2 - X / 2 - z : -e.height / 2 - w / 2 - X / 2 - z})`), O.attr("style", `color: ${b.get("stroke") ?? u};`);
	}
	return p$3.attr("transform", `translate(${-e.width / 2 - (e.x - (e.left ?? 0))},${l ? -H / 2 : H / 2 - e.height})`), j.attr("transform", `translate(0,${l ? e.height / 2 + w / 2 : -e.height / 2 - w / 2})`), k(t, V), t.intersect = function(O) {
		if (pt.info("iconSquare intersect", t, O), !t.label) return $.rect(t, O);
		let A = t.x ?? 0, L = t.y ?? 0, X = t.height ?? 0, _ = [];
		return l ? _ = [
			{
				x: A - e.width / 2,
				y: L - X / 2
			},
			{
				x: A + e.width / 2,
				y: L - X / 2
			},
			{
				x: A + e.width / 2,
				y: L - X / 2 + e.height + w
			},
			{
				x: A + g / 2,
				y: L - X / 2 + e.height + w
			},
			{
				x: A + g / 2,
				y: L + X / 2
			},
			{
				x: A - g / 2,
				y: L + X / 2
			},
			{
				x: A - g / 2,
				y: L - X / 2 + e.height + w
			},
			{
				x: A - e.width / 2,
				y: L - X / 2 + e.height + w
			}
		] : _ = [
			{
				x: A - g / 2,
				y: L - X / 2
			},
			{
				x: A + g / 2,
				y: L - X / 2
			},
			{
				x: A + g / 2,
				y: L - X / 2 + m
			},
			{
				x: A + e.width / 2,
				y: L - X / 2 + m
			},
			{
				x: A + e.width / 2 / 2,
				y: L + X / 2
			},
			{
				x: A - e.width / 2,
				y: L + X / 2
			},
			{
				x: A - e.width / 2,
				y: L - X / 2 + m
			},
			{
				x: A - g / 2,
				y: L - X / 2 + m
			}
		], $.polygon(t, _, O);
	}, r;
}
m(Te, "iconRounded");
async function Ce(d, t, { config: { themeVariables: c, flowchart: h } }) {
	let { labelStyles: a } = m$1(t);
	t.labelStyle = a;
	let o = t.assetHeight ?? 48, f = t.assetWidth ?? 48, i = Math.max(o, f), n = h?.wrappingWidth;
	t.width = Math.max(i, n ?? 0);
	let { shapeSvg: r, bbox: e, halfPadding: s, label: p$4 } = await G(d, t, "icon-shape default"), l = t.pos === "t", m = i + s * 2, g = i + s * 2, { nodeBorder: u, mainBkg: y } = c, { stylesMap: b } = p(t), S$16 = -g / 2, N = -m / 2, w = t.label ? 8 : 0, B = Vt.svg(r), C = S(t, {});
	t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
	C.stroke = b.get("fill") ?? y;
	let M = B.path(it(S$16, N, g, m, .1), C), E = Math.max(g, e.width), H = m + e.height + w, W = B.rectangle(-E / 2, -H / 2, E, H, {
		...C,
		fill: "transparent",
		stroke: "none"
	}), j = r.insert(() => M, ":first-child"), V = r.insert(() => W);
	if (t.icon) {
		let O = r.append("g");
		O.html(`<g>${await ve$1(t.icon, {
			height: i,
			width: i,
			fallbackPrefix: ""
		})}</g>`);
		let A = O.node().getBBox(), L = A.width, X = A.height, _ = A.x, z = A.y;
		O.attr("transform", `translate(${-L / 2 - _},${l ? e.height / 2 + w / 2 - X / 2 - z : -e.height / 2 - w / 2 - X / 2 - z})`), O.attr("style", `color: ${b.get("stroke") ?? u};`);
	}
	return p$4.attr("transform", `translate(${-e.width / 2 - (e.x - (e.left ?? 0))},${l ? -H / 2 : H / 2 - e.height})`), j.attr("transform", `translate(0,${l ? e.height / 2 + w / 2 : -e.height / 2 - w / 2})`), k(t, V), t.intersect = function(O) {
		if (pt.info("iconSquare intersect", t, O), !t.label) return $.rect(t, O);
		let A = t.x ?? 0, L = t.y ?? 0, X = t.height ?? 0, _ = [];
		return l ? _ = [
			{
				x: A - e.width / 2,
				y: L - X / 2
			},
			{
				x: A + e.width / 2,
				y: L - X / 2
			},
			{
				x: A + e.width / 2,
				y: L - X / 2 + e.height + w
			},
			{
				x: A + g / 2,
				y: L - X / 2 + e.height + w
			},
			{
				x: A + g / 2,
				y: L + X / 2
			},
			{
				x: A - g / 2,
				y: L + X / 2
			},
			{
				x: A - g / 2,
				y: L - X / 2 + e.height + w
			},
			{
				x: A - e.width / 2,
				y: L - X / 2 + e.height + w
			}
		] : _ = [
			{
				x: A - g / 2,
				y: L - X / 2
			},
			{
				x: A + g / 2,
				y: L - X / 2
			},
			{
				x: A + g / 2,
				y: L - X / 2 + m
			},
			{
				x: A + e.width / 2,
				y: L - X / 2 + m
			},
			{
				x: A + e.width / 2 / 2,
				y: L + X / 2
			},
			{
				x: A - e.width / 2,
				y: L + X / 2
			},
			{
				x: A - e.width / 2,
				y: L - X / 2 + m
			},
			{
				x: A - g / 2,
				y: L - X / 2 + m
			}
		], $.polygon(t, _, O);
	}, r;
}
m(Ce, "iconSquare");
async function Re(d, t, { config: { flowchart: c } }) {
	let h = new Image();
	h.src = t?.img ?? "", await h.decode();
	let a = Number(h.naturalWidth.toString().replace("px", "")), o = Number(h.naturalHeight.toString().replace("px", ""));
	t.imageAspectRatio = a / o;
	let { labelStyles: f } = m$1(t);
	t.labelStyle = f;
	let i = c?.wrappingWidth;
	t.defaultWidth = c?.wrappingWidth;
	let n = Math.max(t.label ? i ?? 0 : 0, t?.assetWidth ?? a), r = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : n, e = t.constraint === "on" ? r / t.imageAspectRatio : t?.assetHeight ?? o;
	t.width = Math.max(r, i ?? 0);
	let { shapeSvg: s, bbox: p, label: l } = await G(d, t, "image-shape default"), m = t.pos === "t", g = -r / 2, u = -e / 2, y = t.label ? 8 : 0, b = Vt.svg(s), S$17 = S(t, {});
	t.look !== "handDrawn" && (S$17.roughness = 0, S$17.fillStyle = "solid");
	let N = b.rectangle(g, u, r, e, S$17), w = Math.max(r, p.width), B = e + p.height + y, C = b.rectangle(-w / 2, -B / 2, w, B, {
		...S$17,
		fill: "none",
		stroke: "none"
	}), R = s.insert(() => N, ":first-child"), M = s.insert(() => C);
	if (t.img) {
		let E = s.append("image");
		E.attr("href", t.img), E.attr("width", r), E.attr("height", e), E.attr("preserveAspectRatio", "none"), E.attr("transform", `translate(${-r / 2},${m ? B / 2 - e : -B / 2})`);
	}
	return l.attr("transform", `translate(${-p.width / 2 - (p.x - (p.left ?? 0))},${m ? -e / 2 - p.height / 2 - y / 2 : e / 2 - p.height / 2 + y / 2})`), R.attr("transform", `translate(0,${m ? p.height / 2 + y / 2 : -p.height / 2 - y / 2})`), k(t, M), t.intersect = function(E) {
		if (pt.info("iconSquare intersect", t, E), !t.label) return $.rect(t, E);
		let H = t.x ?? 0, W = t.y ?? 0, j = t.height ?? 0, V = [];
		return m ? V = [
			{
				x: H - p.width / 2,
				y: W - j / 2
			},
			{
				x: H + p.width / 2,
				y: W - j / 2
			},
			{
				x: H + p.width / 2,
				y: W - j / 2 + p.height + y
			},
			{
				x: H + r / 2,
				y: W - j / 2 + p.height + y
			},
			{
				x: H + r / 2,
				y: W + j / 2
			},
			{
				x: H - r / 2,
				y: W + j / 2
			},
			{
				x: H - r / 2,
				y: W - j / 2 + p.height + y
			},
			{
				x: H - p.width / 2,
				y: W - j / 2 + p.height + y
			}
		] : V = [
			{
				x: H - r / 2,
				y: W - j / 2
			},
			{
				x: H + r / 2,
				y: W - j / 2
			},
			{
				x: H + r / 2,
				y: W - j / 2 + e
			},
			{
				x: H + p.width / 2,
				y: W - j / 2 + e
			},
			{
				x: H + p.width / 2 / 2,
				y: W + j / 2
			},
			{
				x: H - p.width / 2,
				y: W + j / 2
			},
			{
				x: H - p.width / 2,
				y: W - j / 2 + e
			},
			{
				x: H - r / 2,
				y: W - j / 2 + e
			}
		], $.polygon(t, V, E);
	}, s;
}
m(Re, "imageSquare");
async function Ge(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = a, f = t.look === "neo" ? a * 2 : a, { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = Math.max(n.width + (f ?? 0) * 2, t?.width ?? 0), e = Math.max(n.height + (o ?? 0) * 2, t?.height ?? 0), s = [
		{
			x: 0,
			y: 0
		},
		{
			x: r,
			y: 0
		},
		{
			x: r + 3 * e / 6,
			y: -e
		},
		{
			x: -3 * e / 6,
			y: -e
		}
	], p, { cssStyles: l } = t;
	if (t.look === "handDrawn") {
		let m = Vt.svg(i), g = S(t, {}), u = I(s), y = m.path(u, g);
		p = i.insert(() => y, ":first-child").attr("transform", `translate(${-r / 2}, ${e / 2})`), l && p.attr("style", l);
	} else p = et(i, r, e, s);
	return h && p.attr("style", h), t.width = r, t.height = e, k(t, p), t.intersect = function(m) {
		return $.polygon(t, s, m);
	}, i;
}
m(Ge, "inv_trapezoid");
async function Me(d, t) {
	let { shapeSvg: c, bbox: h, label: a } = await G(d, t, "label"), o = c.insert("rect", ":first-child");
	return o.attr("width", .1).attr("height", .1), c.attr("class", "label edgeLabel"), a.attr("transform", `translate(${-(h.width / 2) - (h.x - (h.left ?? 0))}, ${-(h.height / 2) - (h.y - (h.top ?? 0))})`), k(t, o), t.intersect = function(n) {
		return $.rect(t, n);
	}, c;
}
m(Me, "labelRect");
async function Ee(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = a, f = t.look === "neo" ? a * 2 : a, { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = (t?.height ?? n.height) + o, e = (t?.width ?? n.width) + f, s = [
		{
			x: 0,
			y: 0
		},
		{
			x: e + 3 * r / 6,
			y: 0
		},
		{
			x: e,
			y: -r
		},
		{
			x: -(3 * r) / 6,
			y: -r
		}
	], p, { cssStyles: l } = t;
	if (t.look === "handDrawn") {
		let m = Vt.svg(i), g = S(t, {}), u = I(s), y = m.path(u, g);
		p = i.insert(() => y, ":first-child").attr("transform", `translate(${-e / 2}, ${r / 2})`), l && p.attr("style", l);
	} else p = et(i, e, r, s);
	return h && p.attr("style", h), t.width = e, t.height = r, k(t, p), t.intersect = function(m) {
		return $.polygon(t, s, m);
	}, i;
}
m(Ee, "lean_left");
async function He(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = a, f = t.look === "neo" ? a * 2 : a, { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = (t?.height ?? n.height) + o, e = (t?.width ?? n.width) + f, s = [
		{
			x: -3 * r / 6,
			y: 0
		},
		{
			x: e,
			y: 0
		},
		{
			x: e + 3 * r / 6,
			y: -r
		},
		{
			x: 0,
			y: -r
		}
	], p, { cssStyles: l } = t;
	if (t.look === "handDrawn") {
		let m = Vt.svg(i), g = S(t, {}), u = I(s), y = m.path(u, g);
		p = i.insert(() => y, ":first-child").attr("transform", `translate(${-e / 2}, ${r / 2})`), l && p.attr("style", l);
	} else p = et(i, e, r, s);
	return h && p.attr("style", h), t.width = e, t.height = r, k(t, p), t.intersect = function(m) {
		return $.polygon(t, s, m);
	}, i;
}
m(He, "lean_right");
function je(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.label = "", t.labelStyle = c;
	let a = d.insert("g").attr("class", T(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t, f = Math.max(35, t?.width ?? 0), i = Math.max(35, t?.height ?? 0), n = 7, r = [
		{
			x: f,
			y: 0
		},
		{
			x: 0,
			y: i + n / 2
		},
		{
			x: f - 2 * n,
			y: i + n / 2
		},
		{
			x: 0,
			y: 2 * i
		},
		{
			x: f,
			y: i - n / 2
		},
		{
			x: 2 * n,
			y: i - n / 2
		}
	], e = Vt.svg(a), s = S(t, {});
	t.look !== "handDrawn" && (s.roughness = 0, s.fillStyle = "solid");
	let p = I(r), l = e.path(p, s), m = a.insert(() => l, ":first-child");
	return m.attr("class", "outer-path"), o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), h && t.look !== "handDrawn" && m.selectAll("path").attr("style", h), m.attr("transform", `translate(-${f / 2},${-i})`), k(t, m), t.intersect = function(g) {
		return pt.info("lightningBolt intersect", t, g), $.polygon(t, r, g);
	}, a;
}
m(je, "lightningBolt");
var Ys = m((d, t, c, h, a, o, f) => [
	`M${d},${t + o}`,
	`a${a},${o} 0,0,0 ${c},0`,
	`a${a},${o} 0,0,0 ${-c},0`,
	`l0,${h}`,
	`a${a},${o} 0,0,0 ${c},0`,
	`l0,${-h}`,
	`M${d},${t + o + f}`,
	`a${a},${o} 0,0,0 ${c},0`
].join(" "), "createCylinderPathD"), Fs = m((d, t, c, h, a, o, f) => [
	`M${d},${t + o}`,
	`M${d + c},${t + o}`,
	`a${a},${o} 0,0,0 ${-c},0`,
	`l0,${h}`,
	`a${a},${o} 0,0,0 ${c},0`,
	`l0,${-h}`,
	`M${d},${t + o + f}`,
	`a${a},${o} 0,0,0 ${c},0`
].join(" "), "createOuterCylinderPathD"), _s = m((d, t, c, h, a, o) => [`M${d - c / 2},${-h / 2}`, `a${a},${o} 0,0,0 ${c},0`].join(" "), "createInnerCylinderPathD"), Ae = 10, Oe = 10;
async function Ve(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 24 : a;
	if (t.width || t.height) {
		let y = t.width ?? 0;
		t.width = (t.width ?? 0) - o, t.width < Oe && (t.width = Oe);
		let S = y / 2 / (2.5 + y / 50);
		t.height = (t.height ?? 0) - f - S * 3, t.height < Ae && (t.height = Ae);
	}
	let { shapeSvg: i, bbox: n, label: r } = await G(d, t, T(t)), e = (t?.width ? t?.width : n.width) + o * 2, s = e / 2, p = s / (2.5 + e / 50), l = (t?.height ? t?.height : n.height) + p + f * 2, m = l * .1, g, { cssStyles: u } = t;
	if (t.look === "handDrawn") {
		let y = Vt.svg(i), b = Fs(0, 0, e, l, s, p, m), S$18 = _s(0, p, e, l, s, p), N = S(t, {}), w = y.path(b, N), B = y.path(S$18, N);
		i.insert(() => B, ":first-child").attr("class", "line"), g = i.insert(() => w, ":first-child"), g.attr("class", "basic label-container"), u && g.attr("style", u);
	} else {
		let y = Ys(0, 0, e, l, s, p, m);
		g = i.insert("path", ":first-child").attr("d", y).attr("class", "basic label-container outer-path").attr("style", Lo$1(u)).attr("style", h);
	}
	return g.attr("label-offset-y", p), g.attr("transform", `translate(${-e / 2}, ${-(l / 2 + p)})`), k(t, g), r.attr("transform", `translate(${-(n.width / 2) - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + p - (n.y - (n.top ?? 0))})`), t.intersect = function(y) {
		let b = $.rect(t, y), S = b.x - (t.x ?? 0);
		if (s != 0 && (Math.abs(S) < (t.width ?? 0) / 2 || Math.abs(S) == (t.width ?? 0) / 2 && Math.abs(b.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - p)) {
			let N = p * p * (1 - S * S / (s * s));
			N > 0 && (N = Math.sqrt(N)), N = p - N, y.y - (t.y ?? 0) > 0 && (N = -N), b.y += N;
		}
		return b;
	}, i;
}
m(Ve, "linedCylinder");
async function Le(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 12 : a;
	if (t.width || t.height) t.width = (t.width ?? 0) * 10 / 11 - o * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - f * 2, t.height < 10 && (t.height = 10);
	let { shapeSvg: i, bbox: n, label: r } = await G(d, t, T(t)), e = (t?.width ? t?.width : n.width) + (o ?? 0) * 2, s = (t?.height ? t?.height : n.height) + (f ?? 0) * 2, p = t.look === "neo" ? s / 4 : s / 8, l = s + p, { cssStyles: m } = t, g = Vt.svg(i), u = S(t, {});
	t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
	let y = [
		{
			x: -e / 2 - e / 2 * .1,
			y: -l / 2
		},
		{
			x: -e / 2 - e / 2 * .1,
			y: l / 2
		},
		...at(-e / 2 - e / 2 * .1, l / 2, e / 2 + e / 2 * .1, l / 2, p, .8),
		{
			x: e / 2 + e / 2 * .1,
			y: -l / 2
		},
		{
			x: -e / 2 - e / 2 * .1,
			y: -l / 2
		},
		{
			x: -e / 2,
			y: -l / 2
		},
		{
			x: -e / 2,
			y: l / 2 * 1.1
		},
		{
			x: -e / 2,
			y: -l / 2
		}
	], b = g.polygon(y.map((N) => [N.x, N.y]), u), S$19 = i.insert(() => b, ":first-child");
	return S$19.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && S$19.selectAll("path").attr("style", m), h && t.look !== "handDrawn" && S$19.selectAll("path").attr("style", h), S$19.attr("transform", `translate(0,${-p / 2})`), r.attr("transform", `translate(${-e / 2 + (t.padding ?? 0) + e / 2 * .1 / 2 - (n.x - (n.left ?? 0))},${-s / 2 + (t.padding ?? 0) - p / 2 - (n.y - (n.top ?? 0))})`), k(t, S$19), t.intersect = function(N) {
		return $.polygon(t, y, N);
	}, i;
}
m(Le, "linedWaveEdgedRect");
async function Ie(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 12 : a, i = t.look === "neo" ? 10 : 5;
	(t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2 - 2 * i, 10), t.height = Math.max((t?.height ?? 0) - f * 2 - 2 * i, 10));
	let { shapeSvg: n, bbox: r, label: e } = await G(d, t, T(t)), s = (t?.width ? t?.width : r.width) + o * 2 + 2 * i, p = (t?.height ? t?.height : r.height) + f * 2 + 2 * i, l = s - 2 * i, m = p - 2 * i, g = -l / 2, u = -m / 2, { cssStyles: y } = t, b = Vt.svg(n), S$20 = S(t, {}), N = [
		{
			x: g - i,
			y: u + i
		},
		{
			x: g - i,
			y: u + m + i
		},
		{
			x: g + l - i,
			y: u + m + i
		},
		{
			x: g + l - i,
			y: u + m
		},
		{
			x: g + l,
			y: u + m
		},
		{
			x: g + l,
			y: u + m - i
		},
		{
			x: g + l + i,
			y: u + m - i
		},
		{
			x: g + l + i,
			y: u - i
		},
		{
			x: g + i,
			y: u - i
		},
		{
			x: g + i,
			y: u
		},
		{
			x: g,
			y: u
		},
		{
			x: g,
			y: u + i
		}
	], w = [
		{
			x: g,
			y: u + i
		},
		{
			x: g + l - i,
			y: u + i
		},
		{
			x: g + l - i,
			y: u + m
		},
		{
			x: g + l,
			y: u + m
		},
		{
			x: g + l,
			y: u
		},
		{
			x: g,
			y: u
		}
	];
	t.look !== "handDrawn" && (S$20.roughness = 0, S$20.fillStyle = "solid");
	let B = I(N), C = b.path(B, S$20), R = I(w), M = b.path(R, S$20);
	t.look !== "handDrawn" && (C = Wt(C), M = Wt(M));
	let E = n.insert("g", ":first-child");
	return E.insert(() => C), E.insert(() => M), E.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && E.selectAll("path").attr("style", y), h && t.look !== "handDrawn" && E.selectAll("path").attr("style", h), e.attr("transform", `translate(${-(r.width / 2) - i - (r.x - (r.left ?? 0))}, ${-(r.height / 2) + i - (r.y - (r.top ?? 0))})`), k(t, E), t.intersect = function(H) {
		return $.polygon(t, N, H);
	}, n;
}
m(Ie, "multiRect");
async function We(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o, label: f } = await G(d, t, T(t)), i = t.padding ?? 0, n = t.look === "neo" ? 16 : i, r = t.look === "neo" ? 12 : i, e = !0;
	(t.width || t.height) && (e = !1, t.width = (t?.width ?? 0) - n * 2, t.height = (t?.height ?? 0) - r * 3);
	let s = Math.max(o.width, t?.width ?? 0) + n * 2, p = Math.max(o.height, t?.height ?? 0) + r * 3, l = t.look === "neo" ? p / 4 : p / 8, m = p + (e ? l / 2 : -l / 2), g = -s / 2, u = -m / 2, y = 10, { cssStyles: b } = t, S$21 = at(g - y, u + m + y, g + s - y, u + m + y, l, .8), N = S$21?.[S$21.length - 1], w = [
		{
			x: g - y,
			y: u + y
		},
		{
			x: g - y,
			y: u + m + y
		},
		...S$21,
		{
			x: g + s - y,
			y: N.y - y
		},
		{
			x: g + s,
			y: N.y - y
		},
		{
			x: g + s,
			y: N.y - 2 * y
		},
		{
			x: g + s + y,
			y: N.y - 2 * y
		},
		{
			x: g + s + y,
			y: u - y
		},
		{
			x: g + y,
			y: u - y
		},
		{
			x: g + y,
			y: u
		},
		{
			x: g,
			y: u
		},
		{
			x: g,
			y: u + y
		}
	], B = [
		{
			x: g,
			y: u + y
		},
		{
			x: g + s - y,
			y: u + y
		},
		{
			x: g + s - y,
			y: N.y - y
		},
		{
			x: g + s,
			y: N.y - y
		},
		{
			x: g + s,
			y: u
		},
		{
			x: g,
			y: u
		}
	], C = Vt.svg(a), R = S(t, {});
	t.look !== "handDrawn" && (R.roughness = 0, R.fillStyle = "solid");
	let M = I(w), E = C.path(M, R), H = I(B), W = C.path(H, R), j = a.insert(() => E, ":first-child");
	return j.insert(() => W), j.attr("class", "basic label-container outer-path"), b && t.look !== "handDrawn" && j.selectAll("path").attr("style", b), h && t.look !== "handDrawn" && j.selectAll("path").attr("style", h), j.attr("transform", `translate(0,${-l / 2})`), f.attr("transform", `translate(${-(o.width / 2) - y - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + y - l / 2 - (o.y - (o.top ?? 0))})`), k(t, j), t.intersect = function(V) {
		return $.polygon(t, w, V);
	}, a;
}
m(We, "multiWaveEdgedRectangle");
async function Xe(d, t, { config: { themeVariables: c } }) {
	let { labelStyles: h, nodeStyles: a } = m$1(t);
	t.labelStyle = h, t.useHtmlLabels || co(It()) || (t.centerLabel = !0);
	let { shapeSvg: f, bbox: i, label: n } = await G(d, t, T(t)), r = Math.max(i.width + (t.padding ?? 0) * 2, t?.width ?? 0), e = Math.max(i.height + (t.padding ?? 0) * 2, t?.height ?? 0), s = -r / 2, p = -e / 2, { cssStyles: l } = t, m = Vt.svg(f), g = S(t, {
		fill: c.noteBkgColor,
		stroke: c.noteBorderColor
	});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let u = m.rectangle(s, p, r, e, g), y = f.insert(() => u, ":first-child");
	return y.attr("class", "basic label-container outer-path"), n.attr("class", "label noteLabel"), l && t.look !== "handDrawn" && y.selectAll("path").attr("style", l), a && t.look !== "handDrawn" && y.selectAll("path").attr("style", a), n.attr("transform", `translate(${-i.width / 2 - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`), k(t, y), t.intersect = function(b) {
		return $.rect(t, b);
	}, f;
}
m(Xe, "note");
var qs = m((d, t, c) => [
	`M${d + c / 2},${t}`,
	`L${d + c},${t - c / 2}`,
	`L${d + c / 2},${t - c}`,
	`L${d},${t - c / 2}`,
	"Z"
].join(" "), "createDecisionBoxPathD");
async function Ye(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o } = await G(d, t, T(t)), n = o.width + (t.padding ?? 0) + (o.height + (t.padding ?? 0)), r = .5, e = [
		{
			x: n / 2,
			y: 0
		},
		{
			x: n,
			y: -n / 2
		},
		{
			x: n / 2,
			y: -n
		},
		{
			x: 0,
			y: -n / 2
		}
	], s, { cssStyles: p } = t;
	if (t.look === "handDrawn") {
		let l = Vt.svg(a), m = S(t, {}), g = qs(0, 0, n), u = l.path(g, m);
		s = a.insert(() => u, ":first-child").attr("transform", `translate(${-n / 2 + r}, ${n / 2})`), p && s.attr("style", p);
	} else s = et(a, n, n, e), s.attr("transform", `translate(${-n / 2 + r}, ${n / 2})`);
	return h && s.attr("style", h), k(t, s), t.calcIntersect = function(l, m) {
		let g = l.width, u = [
			{
				x: g / 2,
				y: 0
			},
			{
				x: g,
				y: -g / 2
			},
			{
				x: g / 2,
				y: -g
			},
			{
				x: 0,
				y: -g / 2
			}
		], y = $.polygon(l, u, m);
		return {
			x: y.x - .5,
			y: y.y - .5
		};
	}, t.intersect = function(l) {
		return this.calcIntersect(t, l);
	}, a;
}
m(Ye, "question");
async function Fe(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 21 : a ?? 0, f = t.look === "neo" ? 12 : a ?? 0, { shapeSvg: i, bbox: n, label: r } = await G(d, t, T(t)), e = (t?.width ?? n.width) + (t.look === "neo" ? o * 2 : o), s = (t?.height ?? n.height) + (t.look === "neo" ? f * 2 : f), p = -e / 2, l = -s / 2, m = l / 2, g = [
		{
			x: p + m,
			y: l
		},
		{
			x: p,
			y: 0
		},
		{
			x: p + m,
			y: -l
		},
		{
			x: -p,
			y: -l
		},
		{
			x: -p,
			y: l
		}
	], { cssStyles: u } = t, y = Vt.svg(i), b = S(t, {});
	t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
	let S$22 = I(g), N = y.path(S$22, b), w = i.insert(() => N, ":first-child");
	return w.attr("class", "basic label-container outer-path"), u && t.look !== "handDrawn" && w.selectAll("path").attr("style", u), h && t.look !== "handDrawn" && w.selectAll("path").attr("style", h), w.attr("transform", `translate(${-m / 2},0)`), r.attr("transform", `translate(${-m / 2 - n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`), k(t, w), t.intersect = function(B) {
		return $.polygon(t, g, B);
	}, i;
}
m(Fe, "rect_left_inv_arrow");
async function _e(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a;
	t.cssClasses ? a = "node " + t.cssClasses : a = "node default";
	let o = d.insert("g").attr("class", a).attr("id", t.domId || t.id), f = o.insert("g"), i = o.insert("g").attr("class", "label").attr("style", h), n = t.description, r = t.label, e = await vt(i, r, t.labelStyle, !0, !0), s = {
		width: 0,
		height: 0
	};
	if (co(qo())) {
		let R = e.children[0], M = ia(e);
		s = R.getBoundingClientRect(), M.attr("width", s.width), M.attr("height", s.height);
	}
	pt.info("Text 2", n);
	let p = n || [], l = e.getBBox(), m = await vt(i, Array.isArray(p) ? p.join("<br/>") : p, t.labelStyle, !0, !0), g = m.children[0], u = ia(m);
	s = g.getBoundingClientRect(), u.attr("width", s.width), u.attr("height", s.height);
	let y = (t.padding || 0) / 2;
	ia(m).attr("transform", "translate( " + (s.width > l.width ? 0 : (l.width - s.width) / 2) + ", " + (l.height + y + 5) + ")"), ia(e).attr("transform", "translate( " + (s.width < l.width ? 0 : -(l.width - s.width) / 2) + ", 0)"), s = i.node().getBBox(), i.attr("transform", "translate(" + -s.width / 2 + ", " + (-s.height / 2 - y + 3) + ")");
	let b = s.width + (t.padding || 0), S$23 = s.height + (t.padding || 0), N = -s.width / 2 - y, w = -s.height / 2 - y, B, C;
	if (t.look === "handDrawn") {
		let R = Vt.svg(o), M = S(t, {}), E = R.path(it(N, w, b, S$23, t.rx || 0), M), H = R.line(-s.width / 2 - y, -s.height / 2 - y + l.height + y, s.width / 2 + y, -s.height / 2 - y + l.height + y, M);
		C = o.insert(() => (pt.debug("Rough node insert CXC", E), H), ":first-child"), B = o.insert(() => (pt.debug("Rough node insert CXC", E), E), ":first-child");
	} else B = f.insert("rect", ":first-child"), C = f.insert("line"), B.attr("class", "outer title-state").attr("style", h).attr("x", -s.width / 2 - y).attr("y", -s.height / 2 - y).attr("width", s.width + (t.padding || 0)).attr("height", s.height + (t.padding || 0)), C.attr("class", "divider").attr("x1", -s.width / 2 - y).attr("x2", s.width / 2 + y).attr("y1", -s.height / 2 - y + l.height + y).attr("y2", -s.height / 2 - y + l.height + y);
	return k(t, B), t.intersect = function(R) {
		return $.rect(t, R);
	}, o;
}
m(_e, "rectWithTitle");
async function qe(d, t, { config: { themeVariables: c } }) {
	let h = c?.radius ?? 5;
	return ct(d, t, {
		rx: h,
		ry: h,
		classes: "",
		labelPaddingX: (t?.padding ?? 0) * 1,
		labelPaddingY: (t?.padding ?? 0) * 1
	});
}
m(qe, "roundedRect");
var Dt = 8;
async function ze(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0, { shapeSvg: f, bbox: i, label: n } = await G(d, t, T(t)), r = (t?.width ?? i.width) + a * 2 + (t.look === "neo" ? Dt : Dt * 2), e = (t?.height ?? i.height) + o * 2, s = r - Dt, p = e, l = Dt - r / 2, m = -e / 2, { cssStyles: g } = t, u = Vt.svg(f), y = S(t, {});
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let b = [
		{
			x: l,
			y: m
		},
		{
			x: l + s,
			y: m
		},
		{
			x: l + s,
			y: m + p
		},
		{
			x: l - Dt,
			y: m + p
		},
		{
			x: l - Dt,
			y: m
		},
		{
			x: l,
			y: m
		},
		{
			x: l,
			y: m + p
		}
	], S$24 = u.polygon(b.map((w) => [w.x, w.y]), y), N = f.insert(() => S$24, ":first-child");
	return N.attr("class", "basic label-container outer-path").attr("style", Lo$1(g)), h && t.look !== "handDrawn" && N.selectAll("path").attr("style", h), g && t.look !== "handDrawn" && N.selectAll("path").attr("style", h), n.attr("transform", `translate(${Dt / 2 - i.width / 2 - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`), k(t, N), t.intersect = function(w) {
		return $.rect(t, w);
	}, f;
}
m(ze, "shadedProcess");
async function Ue(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 12 : a;
	(t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2, 10), t.height = Math.max((t?.height ?? 0) / 1.5 - f * 2, 10));
	let { shapeSvg: i, bbox: n, label: r } = await G(d, t, T(t)), e = (t?.width ? t?.width : n.width) + o * 2, s = ((t?.height ? t?.height : n.height) + f * 2) * 1.5, p = e, l = s / 1.5, m = -p / 2, g = -l / 2, { cssStyles: u } = t, y = Vt.svg(i), b = S(t, {});
	t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
	let S$25 = [
		{
			x: m,
			y: g
		},
		{
			x: m,
			y: g + l
		},
		{
			x: m + p,
			y: g + l
		},
		{
			x: m + p,
			y: g - l / 2
		}
	], N = I(S$25), w = y.path(N, b), B = i.insert(() => w, ":first-child");
	return B.attr("class", "basic label-container  outer-path"), u && t.look !== "handDrawn" && B.selectChildren("path").attr("style", u), h && t.look !== "handDrawn" && B.selectChildren("path").attr("style", h), B.attr("transform", `translate(0, ${l / 4})`), r.attr("transform", `translate(${-p / 2 + (t.padding ?? 0) - (n.x - (n.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (n.y - (n.top ?? 0))})`), k(t, B), t.intersect = function(C) {
		return $.polygon(t, S$25, C);
	}, i;
}
m(Ue, "slopedRect");
async function Ze(d, t) {
	let c = t.padding ?? 0, h = t.look === "neo" ? 16 : c * 2, a = t.look === "neo" ? 12 : c;
	return ct(d, t, {
		rx: 0,
		ry: 0,
		classes: "",
		labelPaddingX: t.labelPaddingX ?? h,
		labelPaddingY: a
	});
}
m(Ze, "squareRect");
async function Je(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 20 : a, f = t.look === "neo" ? 12 : a, { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = n.height + (t.look === "neo" ? f * 2 : f), e = n.width + r / 4 + (t.look === "neo" ? o * 2 : o), s = r / 2, { cssStyles: p } = t, l = Vt.svg(i), m = S(t, {});
	t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
	let g = [
		{
			x: -e / 2 + s,
			y: -r / 2
		},
		{
			x: e / 2 - s,
			y: -r / 2
		},
		...$t(-e / 2 + s, 0, s, 50, 90, 270),
		{
			x: e / 2 - s,
			y: r / 2
		},
		...$t(e / 2 - s, 0, s, 50, 270, 450)
	], u = I(g), y = l.path(u, m), b = i.insert(() => y, ":first-child");
	return b.attr("class", "basic label-container outer-path"), p && t.look !== "handDrawn" && b.selectChildren("path").attr("style", p), h && t.look !== "handDrawn" && b.selectChildren("path").attr("style", h), k(t, b), t.intersect = function(S) {
		return $.polygon(t, g, S);
	}, i;
}
m(Je, "stadium");
async function Ke(d, t) {
	return ct(d, t, {
		rx: t.look === "neo" ? 3 : 5,
		ry: t.look === "neo" ? 3 : 5,
		classes: "flowchart-node"
	});
}
m(Ke, "state");
function Qe(d, t, { config: { themeVariables: c } }) {
	let { labelStyles: h, nodeStyles: a } = m$1(t);
	t.labelStyle = h;
	let { cssStyles: o } = t, { lineColor: f, stateBorder: i, nodeBorder: n, nodeShadow: r } = c;
	(t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
	let e = d.insert("g").attr("class", "node default").attr("id", t.domId ?? t.id), s = Vt.svg(e), p = S(t, {});
	t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
	let l = s.circle(0, 0, t.width, {
		...p,
		stroke: f,
		strokeWidth: 2
	}), m = i ?? n, g = (t.width ?? 0) * 5 / 14, u = s.circle(0, 0, g, {
		...p,
		fill: m,
		stroke: m,
		strokeWidth: 2,
		fillStyle: "solid"
	}), y = e.insert(() => l, ":first-child");
	if (y.insert(() => u), t.look !== "handDrawn" && y.attr("class", "outer-path"), o && y.selectAll("path").attr("style", o), a && y.selectAll("path").attr("style", a), t.width < 25 && r && t.look !== "handDrawn") {
		let b = d.node()?.ownerSVGElement?.id ?? "", S = b ? `${b}-drop-shadow-small` : "drop-shadow-small";
		y.attr("style", `filter:url(#${S})`);
	}
	return k(t, y), t.intersect = function(b) {
		return $.circle(t, (t.width ?? 0) / 2, b);
	}, e;
}
m(Qe, "stateEnd");
function ts(d, t, { config: { themeVariables: c } }) {
	let { lineColor: h, nodeShadow: a } = c;
	(t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
	let o = d.insert("g").attr("class", "node default").attr("id", t.domId || t.id), f;
	if (t.look === "handDrawn") {
		let n = Vt.svg(o).circle(0, 0, t.width, u(h));
		f = o.insert(() => n), f.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
	} else f = o.insert("circle", ":first-child"), f.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
	if (t.width < 25 && a && t.look !== "handDrawn") {
		let i = d.node()?.ownerSVGElement?.id ?? "", n = i ? `${i}-drop-shadow-small` : "drop-shadow-small";
		f.attr("style", `filter:url(#${n})`);
	}
	return k(t, f), t.intersect = function(i) {
		return $.circle(t, (t.width ?? 7) / 2, i);
	}, o;
}
m(ts, "stateStart");
var kt = 8;
async function es(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t?.padding ?? 8, o = t.look === "neo" ? 28 : a, f = t.look === "neo" ? 12 : a, { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = (t?.width ?? n.width) + 2 * kt + o, e = (t?.height ?? n.height) + f, s = r - 2 * kt, p = e, l = -r / 2, m = -e / 2, g = [
		{
			x: 0,
			y: 0
		},
		{
			x: s,
			y: 0
		},
		{
			x: s,
			y: -p
		},
		{
			x: 0,
			y: -p
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: s + 8,
			y: 0
		},
		{
			x: s + 8,
			y: -p
		},
		{
			x: -8,
			y: -p
		},
		{
			x: -8,
			y: 0
		}
	];
	if (t.look === "handDrawn") {
		let u = Vt.svg(i), y = S(t, {}), b = u.rectangle(l, m, s + 16, p, y), S$26 = u.line(l + kt, m, l + kt, m + p, y), N = u.line(l + kt + s, m, l + kt + s, m + p, y);
		i.insert(() => S$26, ":first-child"), i.insert(() => N, ":first-child");
		let w = i.insert(() => b, ":first-child"), { cssStyles: B } = t;
		w.attr("class", "basic label-container").attr("style", Lo$1(B)), k(t, w);
	} else {
		let u = et(i, s, p, g);
		h && u.attr("style", h), k(t, u);
	}
	return t.intersect = function(u) {
		return $.polygon(t, g, u);
	}, i;
}
m(es, "subroutine");
var Xt = .2;
async function ss(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 12 : a;
	(t.width || t.height) && (t.height = Math.max((t?.height ?? 0) - f * 2, 10), t.width = Math.max((t?.width ?? 0) - o * 2 - Xt * (t.height + f * 2), 10));
	let { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = (t?.height ? t?.height : n.height) + f * 2, e = Xt * r, s = Xt * r, l = (t?.width ? t?.width : n.width) + o * 2 + e - e, m = r, g = -l / 2, u = -m / 2, { cssStyles: y } = t, b = Vt.svg(i), S$27 = S(t, {}), N = [
		{
			x: g - e / 2,
			y: u
		},
		{
			x: g + l + e / 2,
			y: u
		},
		{
			x: g + l + e / 2,
			y: u + m
		},
		{
			x: g - e / 2,
			y: u + m
		}
	], w = [
		{
			x: g + l - e / 2,
			y: u + m
		},
		{
			x: g + l + e / 2,
			y: u + m
		},
		{
			x: g + l + e / 2,
			y: u + m - s
		}
	];
	t.look !== "handDrawn" && (S$27.roughness = 0, S$27.fillStyle = "solid");
	let B = I(N), C = b.path(B, S$27), R = I(w), M = b.path(R, {
		...S$27,
		fillStyle: "solid"
	}), E = i.insert(() => M, ":first-child");
	return E.insert(() => C, ":first-child"), E.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && E.selectAll("path").attr("style", y), h && t.look !== "handDrawn" && E.selectAll("path").attr("style", h), k(t, E), t.intersect = function(H) {
		return $.polygon(t, N, H);
	}, i;
}
m(ss, "taggedRect");
async function rs(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o, label: f } = await G(d, t, T(t)), i = Math.max(o.width + (t.padding ?? 0) * 2, t?.width ?? 0), n = Math.max(o.height + (t.padding ?? 0) * 2, t?.height ?? 0), r = n / 8, e = .2 * i, s = .2 * n, p = n + r, { cssStyles: l } = t, m = Vt.svg(a), g = S(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let u = [
		{
			x: -i / 2 - i / 2 * .1,
			y: p / 2
		},
		...at(-i / 2 - i / 2 * .1, p / 2, i / 2 + i / 2 * .1, p / 2, r, .8),
		{
			x: i / 2 + i / 2 * .1,
			y: -p / 2
		},
		{
			x: -i / 2 - i / 2 * .1,
			y: -p / 2
		}
	], y = -i / 2 + i / 2 * .1, b = -p / 2 - s * .4, S$28 = [
		{
			x: y + i - e,
			y: (b + n) * 1.3
		},
		{
			x: y + i,
			y: b + n - s
		},
		{
			x: y + i,
			y: (b + n) * .9
		},
		...at(y + i, (b + n) * 1.25, y + i - e, (b + n) * 1.3, -n * .02, .5)
	], N = I(u), w = m.path(N, g), B = I(S$28), C = m.path(B, {
		...g,
		fillStyle: "solid"
	}), R = a.insert(() => C, ":first-child");
	return R.insert(() => w, ":first-child"), R.attr("class", "basic label-container outer-path"), l && t.look !== "handDrawn" && R.selectAll("path").attr("style", l), h && t.look !== "handDrawn" && R.selectAll("path").attr("style", h), R.attr("transform", `translate(0,${-r / 2})`), f.attr("transform", `translate(${-i / 2 + (t.padding ?? 0) - (o.x - (o.left ?? 0))},${-n / 2 + (t.padding ?? 0) - r / 2 - (o.y - (o.top ?? 0))})`), k(t, R), t.intersect = function(M) {
		return $.polygon(t, u, M);
	}, a;
}
m(rs, "taggedWaveEdgedRectangle");
async function is(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o } = await G(d, t, T(t)), f = Math.max(o.width + (t.padding ?? 0), t?.width || 0), i = Math.max(o.height + (t.padding ?? 0), t?.height || 0), n = -f / 2, r = -i / 2, e = a.insert("rect", ":first-child");
	return e.attr("class", "text").attr("style", h).attr("rx", 0).attr("ry", 0).attr("x", n).attr("y", r).attr("width", f).attr("height", i), k(t, e), t.intersect = function(s) {
		return $.rect(t, s);
	}, a;
}
m(is, "text");
var zs = m((d, t, c, h, a, o) => `M${d},${t}
    a${a},${o} 0,0,1 0,${-h}
    l${c},0
    a${a},${o} 0,0,1 0,${h}
    M${c},${-h}
    a${a},${o} 0,0,0 0,${h}
    l${-c},0`, "createCylinderPathD"), Us = m((d, t, c, h, a, o) => [
	`M${d},${t}`,
	`M${d + c},${t}`,
	`a${a},${o} 0,0,0 0,${-h}`,
	`l${-c},0`,
	`a${a},${o} 0,0,0 0,${h}`,
	`l${c},0`
].join(" "), "createOuterCylinderPathD"), Zs = m((d, t, c, h, a, o) => [`M${d + c / 2},${-h / 2}`, `a${a},${o} 0,0,0 0,${h}`].join(" "), "createInnerCylinderPathD"), os = 5, as = 10;
async function ns(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 12 : a / 2;
	if (t.width || t.height) {
		let g = t.height ?? 0;
		t.height = (t.height ?? 0) - o, t.height < os && (t.height = os);
		let y = g / 2 / (2.5 + g / 50);
		t.width = (t.width ?? 0) - o - y * 3, t.width < as && (t.width = as);
	}
	let { shapeSvg: f, bbox: i, label: n } = await G(d, t, T(t)), r = (t.height ? t.height : i.height) + o, e = r / 2, s = e / (2.5 + r / 50), p = (t.width ? t.width : i.width) + s + o, { cssStyles: l } = t, m;
	if (t.look === "handDrawn") {
		let g = Vt.svg(f), u = Us(0, 0, p, r, s, e), y = Zs(0, 0, p, r, s, e), b = g.path(u, S(t, {})), S$29 = g.path(y, S(t, { fill: "none" }));
		m = f.insert(() => S$29, ":first-child"), m = f.insert(() => b, ":first-child"), m.attr("class", "basic label-container"), l && m.attr("style", l);
	} else {
		let g = zs(0, 0, p, r, s, e);
		m = f.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", Lo$1(l)).attr("style", h), m.attr("class", "basic label-container outer-path"), l && m.selectAll("path").attr("style", l), h && m.selectAll("path").attr("style", h);
	}
	return m.attr("label-offset-x", s), m.attr("transform", `translate(${-p / 2}, ${r / 2} )`), n.attr("transform", `translate(${-(i.width / 2) - s - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`), k(t, m), t.intersect = function(g) {
		let u = $.rect(t, g), y = u.y - (t.y ?? 0);
		if (e != 0 && (Math.abs(y) < (t.height ?? 0) / 2 || Math.abs(y) == (t.height ?? 0) / 2 && Math.abs(u.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - s)) {
			let b = s * s * (1 - y * y / (e * e));
			b != 0 && (b = Math.sqrt(Math.abs(b))), b = s - b, g.x - (t.x ?? 0) > 0 && (b = -b), u.x += b;
		}
		return u;
	}, f;
}
m(ns, "tiltedCylinder");
async function ls(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = (t.look, a), f = t.look === "neo" ? a * 2 : a, { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = (t?.height ?? n.height) + o, e = (t?.width ?? n.width) + f, s = [
		{
			x: -3 * r / 6,
			y: 0
		},
		{
			x: e + 3 * r / 6,
			y: 0
		},
		{
			x: e,
			y: -r
		},
		{
			x: 0,
			y: -r
		}
	], p, { cssStyles: l } = t;
	if (t.look === "handDrawn") {
		let m = Vt.svg(i), g = S(t, {}), u = I(s), y = m.path(u, g);
		p = i.insert(() => y, ":first-child").attr("transform", `translate(${-e / 2}, ${r / 2})`), l && p.attr("style", l);
	} else p = et(i, e, r, s);
	return h && p.attr("style", h), t.width = e, t.height = r, k(t, p), t.intersect = function(m) {
		return $.polygon(t, s, m);
	}, i;
}
m(ls, "trapezoid");
async function cs(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 12 : a, i = 15, n = 5;
	(t.width || t.height) && (t.height = (t.height ?? 0) - f * 2, t.height < n && (t.height = n), t.width = (t.width ?? 0) - o * 2, t.width < i && (t.width = i));
	let { shapeSvg: r, bbox: e } = await G(d, t, T(t)), s = (t?.width ? t?.width : e.width) + o * 2, p = (t?.height ? t?.height : e.height) + f * 2, { cssStyles: l } = t, m = Vt.svg(r), g = S(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let u = [
		{
			x: -s / 2 * .8,
			y: -p / 2
		},
		{
			x: s / 2 * .8,
			y: -p / 2
		},
		{
			x: s / 2,
			y: -p / 2 * .6
		},
		{
			x: s / 2,
			y: p / 2
		},
		{
			x: -s / 2,
			y: p / 2
		},
		{
			x: -s / 2,
			y: -p / 2 * .6
		}
	], y = I(u), b = m.path(y, g), S$30 = r.insert(() => b, ":first-child");
	return S$30.attr("class", "basic label-container outer-path"), l && t.look !== "handDrawn" && S$30.selectChildren("path").attr("style", l), h && t.look !== "handDrawn" && S$30.selectChildren("path").attr("style", h), k(t, S$30), t.intersect = function(N) {
		return $.polygon(t, u, N);
	}, r;
}
m(cs, "trapezoidalPentagon");
var hs = 10, ps = 10;
async function ms(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? a * 2 : a;
	(t.width || t.height) && (t.width = ((t?.width ?? 0) - o) / 2, t.width < ps && (t.width = ps), t.height = t?.height ?? 0, t.height < hs && (t.height = hs));
	let { shapeSvg: f, bbox: i, label: n } = await G(d, t, T(t)), r = Gi(qo().flowchart?.htmlLabels), e = (t?.width ? t?.width : i.width) + o, s = t?.height ? t?.height : e + i.height, p = s, l = [
		{
			x: 0,
			y: 0
		},
		{
			x: p,
			y: 0
		},
		{
			x: p / 2,
			y: -s
		}
	], { cssStyles: m } = t, g = Vt.svg(f), u = S(t, {});
	t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
	let y = I(l), b = g.path(y, u), S$31 = f.insert(() => b, ":first-child").attr("transform", `translate(${-s / 2}, ${s / 2})`).attr("class", "outer-path");
	return m && t.look !== "handDrawn" && S$31.selectChildren("path").attr("style", m), h && t.look !== "handDrawn" && S$31.selectChildren("path").attr("style", h), t.width = e, t.height = s, k(t, S$31), n.attr("transform", `translate(${-i.width / 2 - (i.x - (i.left ?? 0))}, ${s / 2 - (i.height + (t.padding ?? 0) / (r ? 2 : 1) - (i.y - (i.top ?? 0)))})`), t.intersect = function(N) {
		return pt.info("Triangle intersect", t, l, N), $.polygon(t, l, N);
	}, f;
}
m(ms, "triangle");
async function gs(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 12 : a, i = !0;
	(t.width || t.height) && (i = !1, t.width = (t?.width ?? 0) - o * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - f * 2, t.height < 10 && (t.height = 10));
	let { shapeSvg: n, bbox: r, label: e } = await G(d, t, T(t)), s = (t?.width ? t?.width : r.width) + (o ?? 0) * 2, p = (t?.height ? t?.height : r.height) + (f ?? 0) * 2, l = t.look === "neo" ? p / 4 : p / 8, m = p + (i ? l : -l), { cssStyles: g } = t, y = 14 - s, b = y > 0 ? y / 2 : 0, S$32 = Vt.svg(n), N = S(t, {});
	t.look !== "handDrawn" && (N.roughness = 0, N.fillStyle = "solid");
	let w = [
		{
			x: -s / 2 - b,
			y: m / 2
		},
		...at(-s / 2 - b, m / 2, s / 2 + b, m / 2, l, .8),
		{
			x: s / 2 + b,
			y: -m / 2
		},
		{
			x: -s / 2 - b,
			y: -m / 2
		}
	], B = I(w), C = S$32.path(B, N), R = n.insert(() => C, ":first-child");
	return R.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && R.selectAll("path").attr("style", g), h && t.look !== "handDrawn" && R.selectAll("path").attr("style", h), R.attr("transform", `translate(0,${-l / 2})`), e.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (r.x - (r.left ?? 0))},${-p / 2 + (t.padding ?? 0) - l - (r.y - (r.top ?? 0))})`), k(t, R), t.intersect = function(M) {
		return $.polygon(t, w, M);
	}, n;
}
m(gs, "waveEdgedRectangle");
async function fs(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, f = t.look === "neo" ? 20 : a;
	if (t.width || t.height) {
		t.width = t?.width ?? 0, t.width < 20 && (t.width = 20), t.height = t?.height ?? 0, t.height < 10 && (t.height = 10);
		let N = Math.min(t.height * .2, t.height / 4);
		t.height = Math.ceil(t.height - f - N * (20 / 9)), t.width = t.width - o * 2;
	}
	let { shapeSvg: i, bbox: n } = await G(d, t, T(t)), r = (t?.width ? t?.width : n.width) + o * 2, e = (t?.height ? t?.height : n.height) + f, s = e / 8, p = e + s * 2, { cssStyles: l } = t, m = Vt.svg(i), g = S(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let u = [
		{
			x: -r / 2,
			y: p / 2
		},
		...at(-r / 2, p / 2, r / 2, p / 2, s, 1),
		{
			x: r / 2,
			y: -p / 2
		},
		...at(r / 2, -p / 2, -r / 2, -p / 2, s, -1)
	], y = I(u), b = m.path(y, g), S$33 = i.insert(() => b, ":first-child");
	return S$33.attr("class", "basic label-container"), l && t.look !== "handDrawn" && S$33.selectAll("path").attr("style", l), h && t.look !== "handDrawn" && S$33.selectAll("path").attr("style", h), k(t, S$33), t.intersect = function(N) {
		return $.polygon(t, u, N);
	}, i;
}
m(fs, "waveRectangle");
var K = 10;
async function ds(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0;
	(t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - a * 2 - K, 10), t.height = Math.max((t?.height ?? 0) - o * 2 - K, 10));
	let { shapeSvg: f, bbox: i, label: n } = await G(d, t, T(t)), r = (t?.width ? t?.width : i.width) + a * 2 + K, e = (t?.height ? t?.height : i.height) + o * 2 + K, s = r - K, p = e - K, l = -s / 2, m = -p / 2, { cssStyles: g } = t, u = Vt.svg(f), y = S(t, {}), b = [
		{
			x: l - K,
			y: m - K
		},
		{
			x: l - K,
			y: m + p
		},
		{
			x: l + s,
			y: m + p
		},
		{
			x: l + s,
			y: m - K
		}
	], S$34 = `M${l - K},${m - K} L${l + s},${m - K} L${l + s},${m + p} L${l - K},${m + p} L${l - K},${m - K}
                M${l - K},${m} L${l + s},${m}
                M${l},${m - K} L${l},${m + p}`;
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let N = u.path(S$34, y), w = f.insert(() => N, ":first-child");
	return w.attr("transform", `translate(${K / 2}, ${K / 2})`), w.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && w.selectAll("path").attr("style", g), h && t.look !== "handDrawn" && w.selectAll("path").attr("style", h), n.attr("transform", `translate(${-(i.width / 2) + K / 2 - (i.x - (i.left ?? 0))}, ${-(i.height / 2) + K / 2 - (i.y - (i.top ?? 0))})`), k(t, w), t.intersect = function(B) {
		return $.polygon(t, b, B);
	}, f;
}
m(ds, "windowPane");
var ys = new Set(["redux-color", "redux-dark-color"]), Js = new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color"
]);
async function Yt(d, t) {
	let c = t;
	c.alias && (t.label = c.alias);
	let { theme: h, themeVariables: a } = It(), { rowEven: o, rowOdd: f, nodeBorder: i, borderColorArray: n } = a;
	if (t.look === "handDrawn") {
		let { themeVariables: F } = It(), { background: U } = F;
		await Yt(d, {
			...t,
			id: t.id + "-background",
			domId: (t.domId || t.id) + "-background",
			look: "default",
			cssStyles: ["stroke: none", `fill: ${U}`]
		});
	}
	let r = It();
	t.useHtmlLabels = r.htmlLabels;
	let e = r.er?.diagramPadding ?? 10, s = r.er?.entityPadding ?? 6, { cssStyles: p } = t, { labelStyles: l, nodeStyles: m } = m$1(t);
	if (c.attributes.length === 0 && t.label) {
		let F = {
			rx: 0,
			ry: 0,
			labelPaddingX: e,
			labelPaddingY: e * 1.5,
			classes: ""
		};
		et$1(t.label, r) + F.labelPaddingX * 2 < r.er.minEntityWidth && (t.width = r.er.minEntityWidth);
		let U = await ct(d, t, F);
		if (h != null && ys.has(h)) {
			let Q = c.colorIndex ?? 0;
			U.attr("data-color-id", `color-${Q % n.length}`);
		}
		if (!Gi(r.htmlLabels)) {
			let Q = U.select("text"), ot = Q.node()?.getBBox();
			Q.attr("transform", `translate(${-ot.width / 2}, 0)`);
		}
		return U;
	}
	r.htmlLabels || (e *= 1.25, s *= 1.25);
	let g = T(t);
	g || (g = "node default");
	let u = d.insert("g").attr("class", g).attr("id", t.domId || t.id), y = await Tt(u, t.label ?? "", r, 0, 0, ["name"], l);
	y.height += s;
	let b = 0, S$35 = [], N = [], w = 0, B = 0, C = 0, R = 0, M = !0, E = !0;
	for (let F of c.attributes) {
		let U = await Tt(u, F.type, r, 0, b, ["attribute-type"], l);
		w = Math.max(w, U.width + e);
		let Q = await Tt(u, F.name, r, 0, b, ["attribute-name"], l);
		B = Math.max(B, Q.width + e);
		let ot = await Tt(u, F.keys.join(), r, 0, b, ["attribute-keys"], l);
		C = Math.max(C, ot.width + e);
		let St = await Tt(u, F.comment, r, 0, b, ["attribute-comment"], l);
		R = Math.max(R, St.width + e);
		let gt = Math.max(U.height, Q.height, ot.height, St.height) + s;
		N.push({
			yOffset: b,
			rowHeight: gt
		}), b += gt;
	}
	let H = 4;
	C <= e && (M = !1, C = 0, H--), R <= e && (E = !1, R = 0, H--);
	let W = u.node().getBBox();
	if (y.width + e * 2 - (w + B + C + R) > 0) {
		let F = y.width + e * 2 - (w + B + C + R);
		w += F / H, B += F / H, C > 0 && (C += F / H), R > 0 && (R += F / H);
	}
	let j = w + B + C + R, V = Vt.svg(u), O = S(t, {});
	t.look !== "handDrawn" && (O.roughness = 0, O.fillStyle = "solid");
	let A = 0;
	N.length > 0 && (A = N.reduce((F, U) => F + (U?.rowHeight ?? 0), 0));
	let L = Math.max(W.width + e * 2, t?.width || 0, j), X = Math.max((A ?? 0) + y.height, t?.height || 0), _ = -L / 2, z = -X / 2;
	if (u.selectAll("g:not(:first-child)").each((F, U, Q) => {
		let ot = ia(Q[U]), St = ot.attr("transform"), gt = 0, _t = 0;
		if (St) {
			let Ot = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(St);
			Ot && (gt = parseFloat(Ot[1]), _t = parseFloat(Ot[2]), ot.attr("class").includes("attribute-name") ? gt += w : ot.attr("class").includes("attribute-keys") ? gt += w + B : ot.attr("class").includes("attribute-comment") && (gt += w + B + C));
		}
		ot.attr("transform", `translate(${_ + e / 2 + gt}, ${_t + z + y.height + s / 2})`);
	}), u.select(".name").attr("transform", "translate(" + -y.width / 2 + ", " + (z + s / 2) + ")"), h != null && ys.has(h)) {
		let F = c.colorIndex ?? 0;
		u.attr("data-color-id", `color-${F % n.length}`);
	}
	let Bt = V.rectangle(_, z, L, X, O), Pt = u.insert(() => Bt, ":first-child").attr("class", "outer-path").attr("style", p.join(""));
	S$35.push(0);
	for (let [F, U] of N.entries()) {
		let ot = (F + 1) % 2 === 0 && U.yOffset !== 0, St = V.rectangle(_, y.height + z + U?.yOffset, L, U?.rowHeight, {
			...O,
			fill: ot ? o : f,
			stroke: i
		});
		u.insert(() => St, "g.label").attr("style", p.join("")).attr("class", `row-rect-${ot ? "even" : "odd"}`);
	}
	let ht = 1e-4, nt = Ct(_, y.height + z, L + _, y.height + z, ht), pt = V.polygon(nt.map((F) => [F.x, F.y]), O);
	if (u.insert(() => pt).attr("class", "divider"), nt = Ct(w + _, y.height + z, w + _, X + z, ht), pt = V.polygon(nt.map((F) => [F.x, F.y]), O), u.insert(() => pt).attr("class", "divider"), M) {
		let F = w + B + _;
		nt = Ct(F, y.height + z, F, X + z, ht), pt = V.polygon(nt.map((U) => [U.x, U.y]), O), u.insert(() => pt).attr("class", "divider");
	}
	if (E) {
		let F = w + B + C + _;
		nt = Ct(F, y.height + z, F, X + z, ht), pt = V.polygon(nt.map((U) => [U.x, U.y]), O), u.insert(() => pt).attr("class", "divider");
	}
	for (let F of S$35) {
		let U = y.height + z + F;
		nt = Ct(_, U, L + _, U, ht), pt = V.polygon(nt.map((Q) => [Q.x, Q.y]), O), u.insert(() => pt).attr("class", "divider");
	}
	if (k(t, Pt), m && t.look !== "handDrawn") if (h != null && Js.has(h)) u.selectAll("path").attr("style", m);
	else {
		let U = m.split(";")?.filter((Q) => Q.includes("stroke"))?.map((Q) => `${Q}`).join("; ");
		u.selectAll("path").attr("style", U ?? ""), u.selectAll(".row-rect-even path").attr("style", m);
	}
	return t.intersect = function(F) {
		return $.rect(t, F);
	}, u;
}
m(Yt, "erBox");
async function Tt(d, t, c, h = 0, a = 0, o = [], f = "") {
	let i = d.insert("g").attr("class", `label ${o.join(" ")}`).attr("transform", `translate(${h}, ${a})`).attr("style", f);
	t !== cn(t) && (t = cn(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
	let n = i.node().appendChild(await Lr(i, t, {
		width: et$1(t, c) + 100,
		style: f,
		useHtmlLabels: c.htmlLabels
	}, c));
	if (t.includes("&lt;") || t.includes("&gt;")) {
		let e = n.children[0];
		for (e.textContent = e.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); e.childNodes[0];) e = e.childNodes[0], e.textContent = e.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
	}
	let r = n.getBBox();
	if (Gi(c.htmlLabels)) {
		let e = n.children[0];
		e.style.textAlign = "start";
		let s = ia(n);
		r = e.getBoundingClientRect(), s.attr("width", r.width), s.attr("height", r.height);
	}
	return r;
}
m(Tt, "addText");
function Ct(d, t, c, h, a) {
	return d === c ? [
		{
			x: d - a / 2,
			y: t
		},
		{
			x: d + a / 2,
			y: t
		},
		{
			x: c + a / 2,
			y: h
		},
		{
			x: c - a / 2,
			y: h
		}
	] : [
		{
			x: d,
			y: t - a / 2
		},
		{
			x: d,
			y: t + a / 2
		},
		{
			x: c,
			y: h + a / 2
		},
		{
			x: c,
			y: h - a / 2
		}
	];
}
m(Ct, "lineToPolygon");
async function us(d, t, c, h, a = c.class.padding ?? 12) {
	let o = h ? 0 : 3, f = d.insert("g").attr("class", T(t)).attr("id", t.domId || t.id), i = null, n = null, r = null, e = null, s = 0, p = 0, l = 0;
	if (i = f.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
		let b = t.annotations[0];
		await jt(i, { text: `\xAB${b}\xBB` }, 0), s = i.node().getBBox().height;
	}
	n = f.insert("g").attr("class", "label-group text"), await jt(n, t, 0, ["font-weight: bolder"]);
	let m = n.node().getBBox();
	p = m.height, r = f.insert("g").attr("class", "members-group text");
	let g = 0;
	for (let b of t.members) {
		let S = await jt(r, b, g, [b.parseClassifier()]);
		g += S + o;
	}
	l = r.node().getBBox().height, l <= 0 && (l = a / 2), e = f.insert("g").attr("class", "methods-group text");
	let u = 0;
	for (let b of t.methods) {
		let S = await jt(e, b, u, [b.parseClassifier()]);
		u += S + o;
	}
	let y = f.node().getBBox();
	if (i !== null) {
		let b = i.node().getBBox();
		i.attr("transform", `translate(${-b.width / 2})`);
	}
	return n.attr("transform", `translate(${-m.width / 2}, ${s})`), y = f.node().getBBox(), r.attr("transform", `translate(0, ${s + p + a * 2})`), y = f.node().getBBox(), e.attr("transform", `translate(0, ${s + p + (l ? l + a * 4 : a * 2)})`), y = f.node().getBBox(), {
		shapeSvg: f,
		bbox: y
	};
}
m(us, "textHelper");
async function jt(d, t, c, h = []) {
	let a = d.insert("g").attr("class", "label").attr("style", h.join("; ")), o = It(), f = "useHtmlLabels" in t ? t.useHtmlLabels : Gi(o.htmlLabels) ?? !0, i = "";
	"text" in t ? i = t.text : i = t.label, !f && i.startsWith("\\") && (i = i.substring(1)), Lo(i) && (f = !0);
	let n = await Lr(a, ds$1(Eo(i)), {
		width: et$1(i, o) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: f
	}, o), r, e = 1;
	if (f) {
		let s = n.children[0], p = ia(n);
		e = s.innerHTML.split("<br>").length, s.innerHTML.includes("</math>") && (e += s.innerHTML.split("<mrow>").length - 1);
		let l = s.getElementsByTagName("img");
		if (l) {
			let m$3 = i.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all([...l].map((g) => new Promise((u) => {
				function y() {
					if (g.style.display = "flex", g.style.flexDirection = "column", m$3) {
						let b = o.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, N = parseInt(b, 10) * 5 + "px";
						g.style.minWidth = N, g.style.maxWidth = N;
					} else g.style.width = "100%";
					u(g);
				}
				m(y, "setupImage"), setTimeout(() => {
					g.complete && y();
				}), g.addEventListener("error", y), g.addEventListener("load", y);
			})));
		}
		r = s.getBoundingClientRect(), p.attr("width", r.width), p.attr("height", r.height);
	} else {
		h.includes("font-weight: bolder") && ia(n).selectAll("tspan").attr("font-weight", ""), e = n.children.length;
		let s = n.children[0];
		(n.textContent === "" || n.textContent.includes("&gt")) && (s.textContent = i[0] + i.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), i[1] === " " && (s.textContent = s.textContent[0] + " " + s.textContent.substring(1))), s.textContent === "undefined" && (s.textContent = ""), r = n.getBBox();
	}
	return a.attr("transform", "translate(0," + (-r.height / (2 * e) + c) + ")"), r.height;
}
m(jt, "addText");
async function xs(d, t) {
	let c = qo(), { themeVariables: h } = c, { useGradient: a } = h, o = c.class.padding ?? 12, f = o, i = t.useHtmlLabels ?? Gi(c.htmlLabels) ?? !0, n = t;
	n.annotations = n.annotations ?? [], n.members = n.members ?? [], n.methods = n.methods ?? [];
	let { shapeSvg: r, bbox: e } = await us(d, t, c, i, f), { labelStyles: s, nodeStyles: p } = m$1(t);
	t.labelStyle = s, t.cssStyles = n.styles || "";
	let l = n.styles?.join(";") || p || "";
	t.cssStyles || (t.cssStyles = l.replaceAll("!important", "").split(";"));
	let m = n.members.length === 0 && n.methods.length === 0 && !c.class?.hideEmptyMembersBox, g = Vt.svg(r), u = S(t, {});
	t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
	let y = Math.max(t.width ?? 0, e.width), b = Math.max(t.height ?? 0, e.height), S$36 = (t.height ?? 0) > e.height;
	n.members.length === 0 && n.methods.length === 0 ? b += f : n.members.length > 0 && n.methods.length === 0 && (b += f * 2);
	let N = -y / 2, w = -b / 2, B = m ? o * 2 : n.members.length === 0 && n.methods.length === 0 ? -o : 0;
	S$36 && (B = o * 2);
	let C = g.rectangle(N - o, w - o - (m ? o : n.members.length === 0 && n.methods.length === 0 ? -o / 2 : 0), y + 2 * o, b + 2 * o + B, u), R = r.insert(() => C, ":first-child");
	R.attr("class", "basic label-container outer-path");
	let M = R.node().getBBox(), E = r.select(".annotation-group").node().getBBox().height - (m ? o / 2 : 0) || 0, H = r.select(".label-group").node().getBBox().height - (m ? o / 2 : 0) || 0, W = r.select(".members-group").node().getBBox().height - (m ? o / 2 : 0) || 0, j = (E + H + w + o - (w - o - (m ? o : n.members.length === 0 && n.methods.length === 0 ? -o / 2 : 0))) / 2;
	if (r.selectAll(".text").each((V, O, A) => {
		let L = ia(A[O]), X = L.attr("transform"), _ = 0;
		if (X) {
			let ht = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(X);
			ht && (_ = parseFloat(ht[2]));
		}
		let z = _ + w + o - (m ? o : n.members.length === 0 && n.methods.length === 0 ? -o / 2 : 0);
		if (L.attr("class").includes("methods-group")) {
			let Pt = Math.max(W, f / 2);
			S$36 ? z = Math.max(j, E + H + Pt + w + f * 2 + o) + f * 2 : z = E + H + Pt + w + f * 4 + o;
		}
		n.members.length === 0 && n.methods.length === 0 && c.class?.hideEmptyMembersBox && (n.annotations.length > 0 ? z = _ - f : z = _), i || (z -= 4);
		let Bt = N;
		(L.attr("class").includes("label-group") || L.attr("class").includes("annotation-group")) && (Bt = -L.node()?.getBBox().width / 2 || 0, r.selectAll("text").each(function(Pt, ht, nt) {
			window.getComputedStyle(nt[ht]).textAnchor === "middle" && (Bt = 0);
		})), L.attr("transform", `translate(${Bt}, ${z})`);
	}), n.members.length > 0 || n.methods.length > 0 || m) {
		let V = E + H + w + o, O = g.line(M.x, V, M.x + M.width, V + .001, u);
		r.insert(() => O).attr("class", `divider${t.look === "neo" && !a ? " neo-line" : ""}`).attr("style", l);
	}
	if (m || n.members.length > 0 || n.methods.length > 0) {
		let V = E + H + W + w + f * 2 + o, O = g.line(M.x, S$36 ? Math.max(j, V) : V, M.x + M.width, (S$36 ? Math.max(j, V) : V) + .001, u);
		r.insert(() => O).attr("class", `divider${t.look === "neo" && !a ? " neo-line" : ""}`).attr("style", l);
	}
	if (n.look !== "handDrawn" && r.selectAll("path").attr("style", l), R.select(":nth-child(2)").attr("style", l), r.selectAll(".divider").select("path").attr("style", l), t.labelStyle ? r.selectAll("span").attr("style", t.labelStyle) : r.selectAll("span").attr("style", l), !i) {
		let V = RegExp(/color\s*:\s*([^;]*)/), O = V.exec(l);
		if (O) {
			let A = O[0].replace("color", "fill");
			r.selectAll("tspan").attr("style", A);
		} else if (s) {
			let A = V.exec(s);
			if (A) {
				let L = A[0].replace("color", "fill");
				r.selectAll("tspan").attr("style", L);
			}
		}
	}
	return k(t, R), t.intersect = function(V) {
		return $.rect(t, V);
	}, r;
}
m(xs, "classBox");
async function bs(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let a = t, o = t, f = 20, i = 20, n = "verifyMethod" in t, r = T(t), { themeVariables: e } = qo(), { borderColorArray: s, requirementEdgeLabelBackground: p } = e, l = d.insert("g").attr("class", r).attr("id", t.domId ?? t.id), m;
	n ? m = await mt(l, `&lt;&lt;${a.type}&gt;&gt;`, 0, t.labelStyle) : m = await mt(l, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
	let g = m, u = await mt(l, a.name, g, t.labelStyle + "; font-weight: bold;");
	if (g += u + i, n) {
		let M = await mt(l, `${a.requirementId ? `ID: ${a.requirementId}` : ""}`, g, t.labelStyle);
		g += M;
		let E = await mt(l, `${a.text ? `Text: ${a.text}` : ""}`, g, t.labelStyle);
		g += E;
		let H = await mt(l, `${a.risk ? `Risk: ${a.risk}` : ""}`, g, t.labelStyle);
		g += H, await mt(l, `${a.verifyMethod ? `Verification: ${a.verifyMethod}` : ""}`, g, t.labelStyle);
	} else {
		let M = await mt(l, `${o.type ? `Type: ${o.type}` : ""}`, g, t.labelStyle);
		g += M, await mt(l, `${o.docRef ? `Doc Ref: ${o.docRef}` : ""}`, g, t.labelStyle);
	}
	let y = (l.node()?.getBBox().width ?? 200) + f, b = (l.node()?.getBBox().height ?? 200) + f, S$37 = -y / 2, N = -b / 2, w = Vt.svg(l), B = S(t, {});
	t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
	let C = w.rectangle(S$37, N, y, b, B), R = l.insert(() => C, ":first-child");
	if (R.attr("class", "basic label-container outer-path").attr("style", h), s?.length) {
		let M = t.colorIndex ?? 0;
		l.attr("data-color-id", `color-${M % s.length}`);
	}
	if (l.selectAll(".label").each((M, E, H) => {
		let W = ia(H[E]), j = W.attr("transform"), V = 0, O = 0;
		if (j) {
			let _ = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(j);
			_ && (V = parseFloat(_[1]), O = parseFloat(_[2]));
		}
		let A = O - b / 2, L = S$37 + f / 2;
		(E === 0 || E === 1) && (L = V), W.attr("transform", `translate(${L}, ${A + f})`);
	}), g > m + u + i) {
		let M = N + m + u + i, E;
		if (t.look === "neo") {
			let j = [
				[S$37, M],
				[S$37 + y, M],
				[S$37 + y, M + .001],
				[S$37, M + .001]
			];
			E = w.polygon(j, B);
		} else E = w.line(S$37, M, S$37 + y, M, B);
		l.insert(() => E).attr("class", "divider");
	}
	return k(t, R), t.intersect = function(M) {
		return $.rect(t, M);
	}, h && t.look !== "handDrawn" && (p || s?.length) && l.selectAll("path").attr("style", h), l;
}
m(bs, "requirementBox");
async function mt(d, t, c, h = "") {
	if (t === "") return 0;
	let a = d.insert("g").attr("class", "label").attr("style", h), o = qo(), f = o.htmlLabels ?? !0, i = await Lr(a, ds$1(Eo(t)), {
		width: et$1(t, o) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: f,
		style: h
	}, o), n;
	if (f) {
		let r = i.children[0], e = ia(i);
		n = r.getBoundingClientRect(), e.attr("width", n.width), e.attr("height", n.height);
	} else {
		let r = i.children[0];
		for (let e of r.children) h && e.setAttribute("style", h);
		n = i.getBBox(), n.height += 6;
	}
	return a.attr("transform", `translate(${-n.width / 2},${-n.height / 2 + c})`), n.height;
}
m(mt, "addText");
var Ks = m((d) => {
	switch (d) {
		case "Very High": return "red";
		case "High": return "orange";
		case "Medium": return null;
		case "Low": return "blue";
		case "Very Low": return "lightblue";
	}
}, "colorFromPriority");
async function Ss(d, t, { config: c }) {
	let { labelStyles: h, nodeStyles: a } = m$1(t);
	t.labelStyle = h || "";
	let o = 10, f = t.width;
	t.width = (t.width ?? 200) - 10;
	let { shapeSvg: i, bbox: n, label: r } = await G(d, t, T(t)), e = t.padding || 10, s = "", p;
	"ticket" in t && t.ticket && c?.kanban?.ticketBaseUrl && (s = c?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), p = i.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", s).attr("target", "_blank"));
	let l = {
		useHtmlLabels: t.useHtmlLabels,
		labelStyle: t.labelStyle || "",
		width: t.width,
		img: t.img,
		padding: t.padding || 8,
		centerLabel: !1
	}, m, g;
	p ? {label: m, bbox: g} = await Gt(p, "ticket" in t && t.ticket || "", l) : {label: m, bbox: g} = await Gt(i, "ticket" in t && t.ticket || "", l);
	let { label: u, bbox: y } = await Gt(i, "assigned" in t && t.assigned || "", l);
	t.width = f;
	let b = 10, S$38 = t?.width || 0, N = Math.max(g.height, y.height) / 2, w = Math.max(n.height + b * 2, t?.height || 0) + N, B = -S$38 / 2, C = -w / 2;
	r.attr("transform", "translate(" + (e - S$38 / 2) + ", " + (-N - n.height / 2) + ")"), m.attr("transform", "translate(" + (e - S$38 / 2) + ", " + (-N + n.height / 2) + ")"), u.attr("transform", "translate(" + (e + S$38 / 2 - y.width - 2 * o) + ", " + (-N + n.height / 2) + ")");
	let R, { rx: M, ry: E } = t, { cssStyles: H } = t;
	if (t.look === "handDrawn") {
		let W = Vt.svg(i), j = S(t, {}), V = M || E ? W.path(it(B, C, S$38, w, M || 0), j) : W.rectangle(B, C, S$38, w, j);
		R = i.insert(() => V, ":first-child"), R.attr("class", "basic label-container").attr("style", H || null);
	} else {
		R = i.insert("rect", ":first-child"), R.attr("class", "basic label-container __APA__").attr("style", a).attr("rx", M ?? 5).attr("ry", E ?? 5).attr("x", B).attr("y", C).attr("width", S$38).attr("height", w);
		let W = "priority" in t && t.priority;
		if (W) {
			let j = i.append("line"), V = B + 2, O = C + Math.floor((M ?? 0) / 2), A = C + w - Math.floor((M ?? 0) / 2);
			j.attr("x1", V).attr("y1", O).attr("x2", V).attr("y2", A).attr("stroke-width", "4").attr("stroke", Ks(W));
		}
	}
	return k(t, R), t.height = w, t.intersect = function(W) {
		return $.rect(t, W);
	}, i;
}
m(Ss, "kanbanItem");
async function ws(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o, halfPadding: f, label: i } = await G(d, t, T(t)), n = o.width + 10 * f, r = o.height + 8 * f, e = .15 * n, { cssStyles: s } = t, p = o.width + 20, l = o.height + 20, m = Math.max(n, p), g = Math.max(r, l);
	i.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`);
	let u, y = `M0 0 
    a${e},${e} 1 0,0 ${m * .25},${-1 * g * .1}
    a${e},${e} 1 0,0 ${m * .25},0
    a${e},${e} 1 0,0 ${m * .25},0
    a${e},${e} 1 0,0 ${m * .25},${g * .1}

    a${e},${e} 1 0,0 ${m * .15},${g * .33}
    a${e * .8},${e * .8} 1 0,0 0,${g * .34}
    a${e},${e} 1 0,0 ${-1 * m * .15},${g * .33}

    a${e},${e} 1 0,0 ${-1 * m * .25},${g * .15}
    a${e},${e} 1 0,0 ${-1 * m * .25},0
    a${e},${e} 1 0,0 ${-1 * m * .25},0
    a${e},${e} 1 0,0 ${-1 * m * .25},${-1 * g * .15}

    a${e},${e} 1 0,0 ${-1 * m * .1},${-1 * g * .33}
    a${e * .8},${e * .8} 1 0,0 0,${-1 * g * .34}
    a${e},${e} 1 0,0 ${m * .1},${-1 * g * .33}
  H0 V0 Z`;
	if (t.look === "handDrawn") {
		let b = Vt.svg(a), S$39 = S(t, {}), N = b.path(y, S$39);
		u = a.insert(() => N, ":first-child"), u.attr("class", "basic label-container").attr("style", Lo$1(s));
	} else u = a.insert("path", ":first-child").attr("class", "basic label-container").attr("style", h).attr("d", y);
	return u.attr("transform", `translate(${-m / 2}, ${-g / 2})`), k(t, u), t.calcIntersect = function(b, S) {
		return $.rect(b, S);
	}, t.intersect = function(b) {
		return pt.info("Bang intersect", t, b), $.rect(t, b);
	}, a;
}
m(ws, "bang");
async function Ns(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o, halfPadding: f, label: i } = await G(d, t, T(t)), n = o.width + 2 * f, r = o.height + 2 * f, e = .15 * n, s = .25 * n, p = .35 * n, l = .2 * n, { cssStyles: m } = t, g, u = `M0 0 
    a${e},${e} 0 0,1 ${n * .25},${-1 * n * .1}
    a${p},${p} 1 0,1 ${n * .4},${-1 * n * .1}
    a${s},${s} 1 0,1 ${n * .35},${n * .2}

    a${e},${e} 1 0,1 ${n * .15},${r * .35}
    a${l},${l} 1 0,1 ${-1 * n * .15},${r * .65}

    a${s},${e} 1 0,1 ${-1 * n * .25},${n * .15}
    a${p},${p} 1 0,1 ${-1 * n * .5},0
    a${e},${e} 1 0,1 ${-1 * n * .25},${-1 * n * .15}

    a${e},${e} 1 0,1 ${-1 * n * .1},${-1 * r * .35}
    a${l},${l} 1 0,1 ${n * .1},${-1 * r * .65}
  H0 V0 Z`;
	if (t.look === "handDrawn") {
		let y = Vt.svg(a), b = S(t, {}), S$40 = y.path(u, b);
		g = a.insert(() => S$40, ":first-child"), g.attr("class", "basic label-container").attr("style", Lo$1(m));
	} else g = a.insert("path", ":first-child").attr("class", "basic label-container").attr("style", h).attr("d", u);
	return i.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), g.attr("transform", `translate(${-n / 2}, ${-r / 2})`), k(t, g), t.calcIntersect = function(y, b) {
		return $.rect(y, b);
	}, t.intersect = function(y) {
		return pt.info("Cloud intersect", t, y), $.rect(t, y);
	}, a;
}
m(Ns, "cloud");
async function $s(d, t) {
	let { labelStyles: c, nodeStyles: h } = m$1(t);
	t.labelStyle = c;
	let { shapeSvg: a, bbox: o, halfPadding: f, label: i } = await G(d, t, T(t)), n = o.width + 8 * f, r = o.height + 2 * f, e = 5, s = t.look === "neo" ? `
    M${-n / 2} ${r / 2 - e}
    v${-r + 2 * e}
    q0,-${e} ${e},-${e}
    h${n - 2 * e}
    q${e},0 ${e},${e}
    v${r - e}
    H${-n / 2}
    Z
  ` : `
    M${-n / 2} ${r / 2 - e}
    v${-r + 2 * e}
    q0,-${e} ${e},-${e}
    h${n - 2 * e}
    q${e},0 ${e},${e}
    v${r - 2 * e}
    q0,${e} -5,${e}
    h${-(n - 2 * e)}
    q-5,0 -5,-5
    Z
  `;
	if (!t.domId) throw new Error(`defaultMindmapNode: node "${t.id}" is missing a domId \u2014 was render.ts domId prefixing skipped?`);
	let p = a.append("path").attr("id", t.domId).attr("class", "node-bkg node-" + t.type).attr("style", h).attr("d", s);
	return a.append("line").attr("class", "node-line-").attr("x1", -n / 2).attr("y1", r / 2).attr("x2", n / 2).attr("y2", r / 2), i.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), a.append(() => i.node()), k(t, p), t.calcIntersect = function(l, m) {
		return $.rect(l, m);
	}, t.intersect = function(l) {
		return $.rect(t, l);
	}, a;
}
m($s, "defaultMindmapNode");
async function Ds(d, t) {
	return Ht(d, t, { padding: t.padding ?? 0 });
}
m(Ds, "mindmapCircle");
var Qs = [
	{
		semanticName: "Process",
		name: "Rectangle",
		shortName: "rect",
		description: "Standard process shape",
		aliases: [
			"proc",
			"process",
			"rectangle"
		],
		internalAliases: ["squareRect"],
		handler: Ze
	},
	{
		semanticName: "Event",
		name: "Rounded Rectangle",
		shortName: "rounded",
		description: "Represents an event",
		aliases: ["event"],
		internalAliases: ["roundedRect"],
		handler: qe
	},
	{
		semanticName: "Terminal Point",
		name: "Stadium",
		shortName: "stadium",
		description: "Terminal point",
		aliases: ["terminal", "pill"],
		handler: Je
	},
	{
		semanticName: "Subprocess",
		name: "Framed Rectangle",
		shortName: "fr-rect",
		description: "Subprocess",
		aliases: [
			"subprocess",
			"subproc",
			"framed-rectangle",
			"subroutine"
		],
		handler: es
	},
	{
		semanticName: "Database",
		name: "Cylinder",
		shortName: "cyl",
		description: "Database storage",
		aliases: [
			"db",
			"database",
			"cylinder"
		],
		handler: de
	},
	{
		semanticName: "Data Store",
		name: "Data Store",
		shortName: "datastore",
		description: "Data flow diagram data store",
		aliases: ["data-store"],
		handler: ye
	},
	{
		semanticName: "Start",
		name: "Circle",
		shortName: "circle",
		description: "Starting point",
		aliases: ["circ"],
		handler: Ht
	},
	{
		semanticName: "Bang",
		name: "Bang",
		shortName: "bang",
		description: "Bang",
		aliases: ["bang"],
		handler: ws
	},
	{
		semanticName: "Cloud",
		name: "Cloud",
		shortName: "cloud",
		description: "cloud",
		aliases: ["cloud"],
		handler: Ns
	},
	{
		semanticName: "Decision",
		name: "Diamond",
		shortName: "diam",
		description: "Decision-making step",
		aliases: [
			"decision",
			"diamond",
			"question"
		],
		handler: Ye
	},
	{
		semanticName: "Prepare Conditional",
		name: "Hexagon",
		shortName: "hex",
		description: "Preparation or condition step",
		aliases: ["hexagon", "prepare"],
		handler: Pe
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Right",
		shortName: "lean-r",
		description: "Represents input or output",
		aliases: ["lean-right", "in-out"],
		internalAliases: ["lean_right"],
		handler: He
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Left",
		shortName: "lean-l",
		description: "Represents output or input",
		aliases: ["lean-left", "out-in"],
		internalAliases: ["lean_left"],
		handler: Ee
	},
	{
		semanticName: "Priority Action",
		name: "Trapezoid Base Bottom",
		shortName: "trap-b",
		description: "Priority action",
		aliases: [
			"priority",
			"trapezoid-bottom",
			"trapezoid"
		],
		handler: ls
	},
	{
		semanticName: "Manual Operation",
		name: "Trapezoid Base Top",
		shortName: "trap-t",
		description: "Represents a manual task",
		aliases: [
			"manual",
			"trapezoid-top",
			"inv-trapezoid"
		],
		internalAliases: ["inv_trapezoid"],
		handler: Ge
	},
	{
		semanticName: "Stop",
		name: "Double Circle",
		shortName: "dbl-circ",
		description: "Represents a stop point",
		aliases: ["double-circle"],
		internalAliases: ["doublecircle"],
		handler: xe
	},
	{
		semanticName: "Text Block",
		name: "Text Block",
		shortName: "text",
		description: "Text block",
		handler: is
	},
	{
		semanticName: "Card",
		name: "Notched Rectangle",
		shortName: "notch-rect",
		description: "Represents a card",
		aliases: ["card", "notched-rectangle"],
		handler: ae
	},
	{
		semanticName: "Lined/Shaded Process",
		name: "Lined Rectangle",
		shortName: "lin-rect",
		description: "Lined process shape",
		aliases: [
			"lined-rectangle",
			"lined-process",
			"lin-proc",
			"shaded-process"
		],
		handler: ze
	},
	{
		semanticName: "Start",
		name: "Small Circle",
		shortName: "sm-circ",
		description: "Small starting point",
		aliases: ["start", "small-circle"],
		internalAliases: ["stateStart"],
		handler: ts
	},
	{
		semanticName: "Stop",
		name: "Framed Circle",
		shortName: "fr-circ",
		description: "Stop point",
		aliases: ["stop", "framed-circle"],
		internalAliases: ["stateEnd"],
		handler: Qe
	},
	{
		semanticName: "Fork/Join",
		name: "Filled Rectangle",
		shortName: "fork",
		description: "Fork or join in process flow",
		aliases: ["join"],
		internalAliases: ["forkJoin"],
		handler: $e
	},
	{
		semanticName: "Collate",
		name: "Hourglass",
		shortName: "hourglass",
		description: "Represents a collate operation",
		aliases: ["hourglass", "collate"],
		handler: ve
	},
	{
		semanticName: "Comment",
		name: "Curly Brace",
		shortName: "brace",
		description: "Adds a comment",
		aliases: ["comment", "brace-l"],
		handler: ce
	},
	{
		semanticName: "Comment Right",
		name: "Curly Brace",
		shortName: "brace-r",
		description: "Adds a comment",
		handler: he
	},
	{
		semanticName: "Comment with braces on both sides",
		name: "Curly Braces",
		shortName: "braces",
		description: "Adds a comment",
		handler: pe
	},
	{
		semanticName: "Com Link",
		name: "Lightning Bolt",
		shortName: "bolt",
		description: "Communication link",
		aliases: ["com-link", "lightning-bolt"],
		handler: je
	},
	{
		semanticName: "Document",
		name: "Document",
		shortName: "doc",
		description: "Represents a document",
		aliases: ["doc", "document"],
		handler: gs
	},
	{
		semanticName: "Delay",
		name: "Half-Rounded Rectangle",
		shortName: "delay",
		description: "Represents a delay",
		aliases: ["half-rounded-rectangle"],
		handler: De
	},
	{
		semanticName: "Direct Access Storage",
		name: "Horizontal Cylinder",
		shortName: "h-cyl",
		description: "Direct access storage",
		aliases: ["das", "horizontal-cylinder"],
		handler: ns
	},
	{
		semanticName: "Disk Storage",
		name: "Lined Cylinder",
		shortName: "lin-cyl",
		description: "Disk storage",
		aliases: ["disk", "lined-cylinder"],
		handler: Ve
	},
	{
		semanticName: "Display",
		name: "Curved Trapezoid",
		shortName: "curv-trap",
		description: "Represents a display",
		aliases: ["curved-trapezoid", "display"],
		handler: me
	},
	{
		semanticName: "Divided Process",
		name: "Divided Rectangle",
		shortName: "div-rect",
		description: "Divided process shape",
		aliases: [
			"div-proc",
			"divided-rectangle",
			"divided-process"
		],
		handler: ue
	},
	{
		semanticName: "Extract",
		name: "Triangle",
		shortName: "tri",
		description: "Extraction process",
		aliases: ["extract", "triangle"],
		handler: ms
	},
	{
		semanticName: "Internal Storage",
		name: "Window Pane",
		shortName: "win-pane",
		description: "Internal storage",
		aliases: ["internal-storage", "window-pane"],
		handler: ds
	},
	{
		semanticName: "Junction",
		name: "Filled Circle",
		shortName: "f-circ",
		description: "Junction point",
		aliases: ["junction", "filled-circle"],
		handler: be
	},
	{
		semanticName: "Loop Limit",
		name: "Trapezoidal Pentagon",
		shortName: "notch-pent",
		description: "Loop limit step",
		aliases: ["loop-limit", "notched-pentagon"],
		handler: cs
	},
	{
		semanticName: "Manual File",
		name: "Flipped Triangle",
		shortName: "flip-tri",
		description: "Manual file operation",
		aliases: ["manual-file", "flipped-triangle"],
		handler: Ne
	},
	{
		semanticName: "Manual Input",
		name: "Sloped Rectangle",
		shortName: "sl-rect",
		description: "Manual input step",
		aliases: ["manual-input", "sloped-rectangle"],
		handler: Ue
	},
	{
		semanticName: "Multi-Document",
		name: "Stacked Document",
		shortName: "docs",
		description: "Multiple documents",
		aliases: [
			"documents",
			"st-doc",
			"stacked-document"
		],
		handler: We
	},
	{
		semanticName: "Multi-Process",
		name: "Stacked Rectangle",
		shortName: "st-rect",
		description: "Multiple processes",
		aliases: [
			"procs",
			"processes",
			"stacked-rectangle"
		],
		handler: Ie
	},
	{
		semanticName: "Stored Data",
		name: "Bow Tie Rectangle",
		shortName: "bow-rect",
		description: "Stored data",
		aliases: ["stored-data", "bow-tie-rectangle"],
		handler: oe
	},
	{
		semanticName: "Summary",
		name: "Crossed Circle",
		shortName: "cross-circ",
		description: "Summary",
		aliases: ["summary", "crossed-circle"],
		handler: le
	},
	{
		semanticName: "Tagged Document",
		name: "Tagged Document",
		shortName: "tag-doc",
		description: "Tagged document",
		aliases: ["tag-doc", "tagged-document"],
		handler: rs
	},
	{
		semanticName: "Tagged Process",
		name: "Tagged Rectangle",
		shortName: "tag-rect",
		description: "Tagged process",
		aliases: [
			"tagged-rectangle",
			"tag-proc",
			"tagged-process"
		],
		handler: ss
	},
	{
		semanticName: "Paper Tape",
		name: "Flag",
		shortName: "flag",
		description: "Paper tape",
		aliases: ["paper-tape"],
		handler: fs
	},
	{
		semanticName: "Odd",
		name: "Odd",
		shortName: "odd",
		description: "Odd shape",
		internalAliases: ["rect_left_inv_arrow"],
		handler: Fe
	},
	{
		semanticName: "Lined Document",
		name: "Lined Document",
		shortName: "lin-doc",
		description: "Lined document",
		aliases: ["lined-document"],
		handler: Le
	}
], Ft = m(() => {
	let t = [...Object.entries({
		state: Ke,
		choice: ne,
		note: Xe,
		rectWithTitle: _e,
		labelRect: Me,
		iconSquare: Ce,
		iconCircle: Be,
		icon: ke,
		iconRounded: Te,
		imageSquare: Re,
		anchor: re,
		kanbanItem: Ss,
		mindmapCircle: Ds,
		defaultMindmapNode: $s,
		classBox: xs,
		erBox: Yt,
		requirementBox: bs
	}), ...Qs.flatMap((c) => [
		c.shortName,
		..."aliases" in c ? c.aliases : [],
		..."internalAliases" in c ? c.internalAliases : []
	].map((a) => [a, c.handler]))];
	return Object.fromEntries(t);
}, "generateShapeMap")();
function Xg(d) {
	return d in Ft;
}
m(Xg, "isValidShape");
var At = /* @__PURE__ */ new Map();
async function Ug(d, t, c) {
	let h, a;
	t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
	let o = t.shape ? Ft[t.shape] : void 0;
	if (!o) throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
	if (t.link) {
		let f;
		c.config.securityLevel === "sandbox" ? f = "_top" : t.linkTarget && (f = t.linkTarget || "_blank"), h = d.insert("svg:a").attr("xlink:href", t.link).attr("target", f ?? null), a = await o(h, t, c);
	} else a = await o(d, t, c), h = a;
	return h.attr("data-look", Lo$1(t.look)), t.tooltip && a.attr("title", t.tooltip), At.set(t.id, h), t.haveCallback && h.attr("class", h.attr("class") + " clickable"), h;
}
m(Ug, "insertNode");
var Zg = m((d, t) => {
	At.set(t.id, d);
}, "setNodeElem"), Jg = m(() => {
	At.clear();
}, "clear"), Kg = m((d) => {
	let t = At.get(d.id);
	pt.trace("Transforming node", d.diff, d, "translate(" + (d.x - d.width / 2 - 5) + ", " + d.width / 2 + ")");
	let c = 8, h = d.diff || 0;
	return d.clusterNode ? t.attr("transform", "translate(" + (d.x + h - d.width / 2) + ", " + (d.y - d.height / 2 - c) + ")") : t.attr("transform", "translate(" + d.x + ", " + d.y + ")"), h;
}, "positionNode");
//#endregion
export { Rr as a, Zg as c, Kg as i, k as l, Gr as n, Ug as o, Jg as r, Xg as s, G as t, vt as u };
