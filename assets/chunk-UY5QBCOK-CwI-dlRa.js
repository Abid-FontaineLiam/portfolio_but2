import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { Z as qo, j as eo } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { p as ct } from "./chunk-QA3QBVWF-BSQ0fMk9.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/chunk-UY5QBCOK.mjs
var d = m(({ flowchart: n }) => {
	let i = n?.subGraphTitleMargin?.top ?? 0, e = n?.subGraphTitleMargin?.bottom ?? 0;
	return {
		subGraphTitleTopMargin: i,
		subGraphTitleBottomMargin: e,
		subGraphTitleTotalMargin: i + e
	};
}, "getSubGraphTitleMargins");
async function G(n, i) {
	let e = n.getElementsByTagName("img");
	if (!e || e.length === 0) return;
	let r = i.replace(/<img[^>]*>/g, "").trim() === "";
	await Promise.all([...e].map((t) => new Promise((g) => {
		function a() {
			if (t.style.display = "flex", t.style.flexDirection = "column", r) {
				let c = qo().fontSize ? qo().fontSize : window.getComputedStyle(document.body).fontSize, u = 5, [f = eo.fontSize] = ct(c), l = f * u + "px";
				t.style.minWidth = l, t.style.maxWidth = l;
			} else t.style.width = "100%";
			g(t);
		}
		m(a, "setupImage"), setTimeout(() => {
			t.complete && a();
		}), t.addEventListener("error", a), t.addEventListener("load", a);
	})));
}
m(G, "configureLabelImages");
//#endregion
export { d as n, G as t };
