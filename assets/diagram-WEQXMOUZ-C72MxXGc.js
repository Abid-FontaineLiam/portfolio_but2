import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { y as d$1 } from "./chunk-KGYTTC2M-lyuK7G19.js";
import { t as c } from "./chunk-JQRUD6KW-q30wSS88.js";
import { q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { F as hs, H as ls, I as is, K as ns, N as es, S as as, Y as os, j as eo, l as It, tt as ss } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { t as d$2 } from "./chunk-LRIF4GLE-wnHuf8kK.js";
import "./chunk-KNLZD3CH-C5mSJplc.js";
import { a as Lr } from "./chunk-QA3QBVWF-BSQ0fMk9.js";
import { t as s } from "./chunk-T5OCTHI4-DMoAd_GC.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/diagram-WEQXMOUZ.mjs
var d = new s(() => ({
	cnt: 1,
	stack: [{
		id: 0,
		level: -1,
		name: "/",
		children: []
	}]
})), I = m(() => {
	d.reset(), os();
}, "clear"), P = m(() => d.records.stack[0], "getRoot"), X = m(() => d.records.cnt, "getCount"), z = eo.treeView, F = m(() => Lr(z, It().treeView), "getConfig"), w = {
	clear: I,
	addNode: m((e, t) => {
		for (; e <= d.records.stack[d.records.stack.length - 1].level;) d.records.stack.pop();
		let i = {
			id: d.records.cnt++,
			level: e,
			name: t,
			children: []
		};
		d.records.stack[d.records.stack.length - 1].children.push(i), d.records.stack.push(i);
	}, "addNode"),
	getRoot: P,
	getCount: X,
	getConfig: F,
	getAccTitle: ss,
	getAccDescription: as,
	getDiagramTitle: ns,
	setAccDescription: ls,
	setAccTitle: es,
	setDiagramTitle: hs
};
var W = m((e) => {
	c(e, w), e.nodes.map((t) => w.addNode(t.indent ? parseInt(t.indent) : 0, t.name));
}, "populate"), j = { parse: m(async (e) => {
	let t = await d$1("treeView", e);
	pt.debug(t), W(t);
}, "parse") };
var L = m((e, t, i, n, s) => {
	let l = n.append("text").text(i.name).attr("dominant-baseline", "middle").attr("class", "treeView-node-label"), { height: c, width: o } = l.node().getBBox(), m = c + s.paddingY * 2, a = o + s.paddingX * 2;
	l.attr("x", e + s.paddingX), l.attr("y", t + m / 2), i.BBox = {
		x: e,
		y: t,
		width: a,
		height: m
	};
}, "positionLabel"), A = m((e, t, i, n, s, l) => e.append("line").attr("x1", t).attr("y1", i).attr("x2", n).attr("y2", s).attr("stroke-width", l).attr("class", "treeView-node-line"), "positionLine"), Y = m((e, t, i) => {
	let n = 0, s = 0, l = m((o, m, a, g) => {
		let f = g * (a.rowIndent + a.paddingX);
		L(f, n, m, o, a);
		let { height: p, width: V } = m.BBox;
		A(o, f - a.rowIndent, n + p / 2, f, n + p / 2, a.lineThickness), s = Math.max(s, f + V), n += p;
	}, "drawNode"), c = m((o, m = 0) => {
		l(e, o, i, m), o.children.forEach((p) => {
			c(p, m + 1);
		});
		let { x: a, y: g, height: f } = o.BBox;
		if (o.children.length) {
			let { y: p, height: V } = o.children[o.children.length - 1].BBox;
			A(e, a + i.paddingX, g + f, a + i.paddingX, p + V / 2 + i.lineThickness / 2, i.lineThickness);
		}
	}, "processNode");
	return c(t), {
		totalHeight: n,
		totalWidth: s
	};
}, "drawTree"), q = { draw: m((e, t, i, n) => {
	pt.debug(`Rendering treeView diagram
` + e);
	let s = n.db, l = s.getRoot(), c = s.getConfig(), o = d$2(t), m = o.append("g");
	m.attr("class", "tree-view");
	let { totalHeight: a, totalWidth: g } = Y(m, l, c);
	o.attr("viewBox", `-${c.lineThickness / 2} 0 ${g} ${a}`), is(o, a, g, c.useMaxWidth);
}, "draw") };
var U = {
	labelFontSize: "16px",
	labelColor: "black",
	lineColor: "black"
};
var Te = {
	db: w,
	renderer: q,
	parser: j,
	styles: m(({ treeView: e }) => {
		let { labelFontSize: t, labelColor: i, lineColor: n } = Lr(U, e);
		return `
    .treeView-node-label {
        font-size: ${t};
        fill: ${i};
    }
    .treeView-node-line {
        stroke: ${n};
    }
    `;
	}, "styles")
};
//#endregion
export { Te as diagram };
