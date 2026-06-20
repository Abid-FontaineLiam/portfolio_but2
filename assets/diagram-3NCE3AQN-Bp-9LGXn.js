import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { y as d } from "./chunk-KGYTTC2M-lyuK7G19.js";
import { t as c } from "./chunk-JQRUD6KW-q30wSS88.js";
import { q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { F as hs, H as ls, I as is, K as ns, N as es, R as jr, S as as, Y as os, j as eo, l as It, tt as ss } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { t as d$1 } from "./chunk-LRIF4GLE-wnHuf8kK.js";
import "./chunk-KNLZD3CH-C5mSJplc.js";
import { a as Lr } from "./chunk-QA3QBVWF-BSQ0fMk9.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/diagram-3NCE3AQN.mjs
var f = {
	showLegend: !0,
	ticks: 5,
	max: null,
	min: 0,
	graticule: "circle"
}, k = {
	axes: [],
	curves: [],
	options: f
}, g = structuredClone(k), q = eo.radar, W = m(() => Lr({
	...q,
	...It().radar
}), "getConfig"), E = m(() => g.axes, "getAxes"), H = m(() => g.curves, "getCurves"), N = m(() => g.options, "getOptions"), U = m((e) => {
	g.axes = e.map((t) => ({
		name: t.name,
		label: t.label ?? t.name
	}));
}, "setAxes"), X = m((e) => {
	g.curves = e.map((t) => ({
		name: t.name,
		label: t.label ?? t.name,
		entries: Y(t.entries)
	}));
}, "setCurves"), Y = m((e) => {
	if (e[0].axis == null) return e.map((r) => r.value);
	let t = E();
	if (t.length === 0) throw new Error("Axes must be populated before curves for reference entries");
	return t.map((r) => {
		let a = e.find((o) => o.axis?.$refText === r.name);
		if (a === void 0) throw new Error("Missing entry for axis " + r.label);
		return a.value;
	});
}, "computeCurveEntries"), x = {
	getAxes: E,
	getCurves: H,
	getOptions: N,
	setAxes: U,
	setCurves: X,
	setOptions: m((e) => {
		let t = e.reduce((r, a) => (r[a.name] = a, r), {});
		g.options = {
			showLegend: t.showLegend?.value ?? f.showLegend,
			ticks: t.ticks?.value ?? f.ticks,
			max: t.max?.value ?? f.max,
			min: t.min?.value ?? f.min,
			graticule: t.graticule?.value ?? f.graticule
		};
	}, "setOptions"),
	getConfig: W,
	clear: m(() => {
		os(), g = structuredClone(k);
	}, "clear"),
	setAccTitle: es,
	getAccTitle: ss,
	setDiagramTitle: hs,
	getDiagramTitle: ns,
	getAccDescription: as,
	setAccDescription: ls
};
var K = m((e) => {
	c(e, x);
	let { axes: t, curves: r, options: a } = e;
	x.setAxes(t), x.setCurves(r), x.setOptions(a);
}, "populate"), I = { parse: m(async (e) => {
	let t = await d("radar", e);
	pt.debug(t), K(t);
}, "parse") };
var Q = m((e, t, r, a) => {
	let o = a.db, s = o.getAxes(), m = o.getCurves(), n = o.getOptions(), l = o.getConfig(), c = o.getDiagramTitle(), p = tt(d$1(t), l), u = n.max ?? Math.max(...m.map((b) => Math.max(...b.entries))), h = n.min, y = Math.min(l.width, l.height) / 2;
	rt(p, s, y, n.ticks, n.graticule), et(p, s, y, l), at(p, s, m, h, u, n.graticule, l), it(p, m, n.showLegend, l), p.append("text").attr("class", "radarTitle").text(c).attr("x", 0).attr("y", -l.height / 2 - l.marginTop);
}, "draw"), tt = m((e, t) => {
	let r = t.width + t.marginLeft + t.marginRight, a = t.height + t.marginTop + t.marginBottom, o = {
		x: t.marginLeft + t.width / 2,
		y: t.marginTop + t.height / 2
	};
	return is(e, a, r, t.useMaxWidth ?? !0), e.attr("viewBox", `0 0 ${r} ${a}`), e.append("g").attr("transform", `translate(${o.x}, ${o.y})`);
}, "drawFrame"), rt = m((e, t, r, a, o) => {
	if (o === "circle") for (let s = 0; s < a; s++) {
		let m = r * (s + 1) / a;
		e.append("circle").attr("r", m).attr("class", "radarGraticule");
	}
	else if (o === "polygon") {
		let s = t.length;
		for (let m = 0; m < a; m++) {
			let n = r * (m + 1) / a, l = t.map((c, d) => {
				let p = 2 * d * Math.PI / s - Math.PI / 2;
				return `${n * Math.cos(p)},${n * Math.sin(p)}`;
			}).join(" ");
			e.append("polygon").attr("points", l).attr("class", "radarGraticule");
		}
	}
}, "drawGraticule"), et = m((e, t, r, a) => {
	let o = t.length;
	for (let s = 0; s < o; s++) {
		let m = t[s].label, n = 2 * s * Math.PI / o - Math.PI / 2;
		e.append("line").attr("x1", 0).attr("y1", 0).attr("x2", r * a.axisScaleFactor * Math.cos(n)).attr("y2", r * a.axisScaleFactor * Math.sin(n)).attr("class", "radarAxisLine"), e.append("text").text(m).attr("x", r * a.axisLabelFactor * Math.cos(n)).attr("y", r * a.axisLabelFactor * Math.sin(n)).attr("class", "radarAxisLabel");
	}
}, "drawAxes");
function at(e, t, r, a, o, s, m) {
	let n = t.length, l = Math.min(m.width, m.height) / 2;
	r.forEach((c, d) => {
		if (c.entries.length !== n) return;
		let p = c.entries.map((u, h) => {
			let y = 2 * Math.PI * h / n - Math.PI / 2, b = ot(u, a, o, l);
			return {
				x: b * Math.cos(y),
				y: b * Math.sin(y)
			};
		});
		s === "circle" ? e.append("path").attr("d", nt(p, m.curveTension)).attr("class", `radarCurve-${d}`) : s === "polygon" && e.append("polygon").attr("points", p.map((u) => `${u.x},${u.y}`).join(" ")).attr("class", `radarCurve-${d}`);
	});
}
m(at, "drawCurves");
function ot(e, t, r, a) {
	return a * (Math.min(Math.max(e, t), r) - t) / (r - t);
}
m(ot, "relativeRadius");
function nt(e, t) {
	let r = e.length, a = `M${e[0].x},${e[0].y}`;
	for (let o = 0; o < r; o++) {
		let s = e[(o - 1 + r) % r], m = e[o], n = e[(o + 1) % r], l = e[(o + 2) % r], c = {
			x: m.x + (n.x - s.x) * t,
			y: m.y + (n.y - s.y) * t
		}, d = {
			x: n.x - (l.x - m.x) * t,
			y: n.y - (l.y - m.y) * t
		};
		a += ` C${c.x},${c.y} ${d.x},${d.y} ${n.x},${n.y}`;
	}
	return `${a} Z`;
}
m(nt, "closedRoundCurve");
function it(e, t, r, a) {
	if (!r) return;
	let o = (a.width / 2 + a.marginRight) * 3 / 4, s = -(a.height / 2 + a.marginTop) * 3 / 4, m = 20;
	t.forEach((n, l) => {
		let c = e.append("g").attr("transform", `translate(${o}, ${s + l * m})`);
		c.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${l}`), c.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(n.label);
	});
}
m(it, "drawLegend");
var F = { draw: Q };
var st = m((e, t) => {
	let r = "";
	for (let a = 0; a < e.THEME_COLOR_LIMIT; a++) {
		let o = e[`cScale${a}`];
		r += `
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`;
	}
	return r;
}, "genIndexStyles"), mt = m((e) => {
	let a = Lr(jr(), It().themeVariables);
	return {
		themeVariables: a,
		radarOptions: Lr(a.radar, e)
	};
}, "buildRadarStyleOptions");
var Vt = {
	parser: I,
	db: x,
	renderer: F,
	styles: m(({ radar: e } = {}) => {
		let { themeVariables: t, radarOptions: r } = mt(e);
		return `
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${r.axisColor};
		stroke-width: ${r.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${r.axisLabelFontSize}px;
		color: ${r.axisColor};
	}
	.radarGraticule {
		fill: ${r.graticuleColor};
		fill-opacity: ${r.graticuleOpacity};
		stroke: ${r.graticuleColor};
		stroke-width: ${r.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${r.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${st(t, r)}
	`;
	}, "styles")
};
//#endregion
export { Vt as diagram };
