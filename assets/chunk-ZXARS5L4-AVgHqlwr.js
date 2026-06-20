import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { I as is } from "./chunk-67TQ5CYL-BGuir8Be.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/chunk-ZXARS5L4.mjs
var y = m((t, e, o, n) => {
	t.attr("class", o);
	let { width: r, height: m, x: s, y: b } = w(t, e);
	is(t, m, r, n);
	let u = x(s, b, r, m, e);
	t.attr("viewBox", u), pt.debug(`viewBox configured: ${u} with padding: ${e}`);
}, "setupViewPortForSVG"), w = m((t, e) => {
	let o = t.node()?.getBBox() || {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		width: o.width + e * 2,
		height: o.height + e * 2,
		x: o.x,
		y: o.y
	};
}, "calculateDimensionsWithPadding"), x = m((t, e, o, n, r) => `${t - r} ${e - r} ${o} ${n}`, "createViewBox");
//#endregion
export { y as t };
