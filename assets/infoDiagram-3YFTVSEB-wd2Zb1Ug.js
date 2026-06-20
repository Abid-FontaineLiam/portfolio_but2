import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { y as d } from "./chunk-KGYTTC2M-lyuK7G19.js";
import { q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { I as is } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { t as d$1 } from "./chunk-LRIF4GLE-wnHuf8kK.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/infoDiagram-3YFTVSEB.mjs
var a = { parse: m(async (t) => {
	let e = await d("info", t);
	pt.debug(e);
}, "parse") };
var g = { version: "11.15.0" };
var z = {
	parser: a,
	db: { getVersion: m(() => g.version, "getVersion") },
	renderer: { draw: m((t, e, d) => {
		pt.debug(`rendering info diagram
` + t);
		let i = d$1(e);
		is(i, 100, 400, !0), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${d}`);
	}, "draw") }
};
//#endregion
export { z as diagram };
