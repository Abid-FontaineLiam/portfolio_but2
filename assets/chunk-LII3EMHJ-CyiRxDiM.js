import { i as p, t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { V as ia } from "./chunk-7W6UQGC5-C150Mc68.js";
import { s as Ht } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { t as f$1 } from "./chunk-KNLZD3CH-C5mSJplc.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/chunk-LII3EMHJ.mjs
var a = p(f$1(), 1);
var x = m((r, t) => {
	let e = r.append("rect");
	if (e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), t.name && e.attr("name", t.name), t.rx && e.attr("rx", t.rx), t.ry && e.attr("ry", t.ry), t.attrs !== void 0) for (let n in t.attrs) e.attr(n, t.attrs[n]);
	return t.class && e.attr("class", t.class), e;
}, "drawRect"), g = m((r, t) => {
	x(r, {
		x: t.startx,
		y: t.starty,
		width: t.stopx - t.startx,
		height: t.stopy - t.starty,
		fill: t.fill,
		stroke: t.stroke,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), f = m((r, t) => {
	let e = t.text.replace(Ht, " "), n = r.append("text");
	n.attr("x", t.x), n.attr("y", t.y), n.attr("class", "legend"), n.style("text-anchor", t.anchor), t.class && n.attr("class", t.class);
	let s = n.append("tspan");
	return s.attr("x", t.x + t.textMargin * 2), s.text(e), n;
}, "drawText"), E = m((r, t, e, n) => {
	let s = r.append("image");
	s.attr("x", t), s.attr("y", e);
	let i = (0, a.sanitizeUrl)(n);
	s.attr("xlink:href", i);
}, "drawImage"), h = m((r, t, e, n) => {
	let s = r.append("use");
	s.attr("x", t), s.attr("y", e);
	let i = (0, a.sanitizeUrl)(n);
	s.attr("xlink:href", `#${i}`);
}, "drawEmbeddedImage"), u = m(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	fill: "#EDF2AE",
	stroke: "#666",
	anchor: "start",
	rx: 0,
	ry: 0
}), "getNoteRect"), G = m(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	"text-anchor": "start",
	style: "#666",
	textMargin: 0,
	rx: 0,
	ry: 0,
	tspan: !0
}), "getTextObj"), T = m(() => {
	let r = ia(".mermaidTooltip");
	return r.empty() && (r = ia("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0).style("position", "absolute").style("text-align", "center").style("max-width", "200px").style("padding", "2px").style("font-size", "12px").style("background", "#ffffde").style("border", "1px solid #333").style("border-radius", "2px").style("pointer-events", "none").style("z-index", "100")), r;
}, "createTooltip");
//#endregion
export { g as a, x as c, f as i, G as n, h as o, T as r, u as s, E as t };
