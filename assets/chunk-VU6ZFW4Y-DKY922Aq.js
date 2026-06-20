const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dagre-ND4H6XIP-BQSBcUul.js","assets/chunk-5IMINLNL-CMXhugjx.js","assets/chunk-AQ6EADP3-qIXSNQLA.js","assets/chunk-5VCL7Z4A-B90neaMh.js","assets/chunk-67TQ5CYL-BGuir8Be.js","assets/app-B7sz6Vtc.js","assets/chunk-7W6UQGC5-C150Mc68.js","assets/chunk-7J6CGLKN-I3y4E9US.js","assets/chunk-INKRHTLW-D1tzj-ij.js","assets/chunk-QA3QBVWF-BSQ0fMk9.js","assets/chunk-KNLZD3CH-C5mSJplc.js","assets/chunk-KGFNY3KK-CuDVV7Uv.js","assets/chunk-T2UQINTJ-D3w-GKPC.js","assets/chunk-UY5QBCOK-CwI-dlRa.js","assets/chunk-KRXBNO2N-COR6L7zG.js","assets/chunk-W44A43WB-02pMpHVo.js","assets/cose-bilkent-UX7MHV2Q-DahBTmBQ.js","assets/chunk-3SSMPTDK-CCu6Z1BJ.js"])))=>i.map(i=>d[i]);
import { u as __vitePreload } from "./app-B7sz6Vtc.js";
import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { l as It, r as Cn } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { v as ur } from "./chunk-QA3QBVWF-BSQ0fMk9.js";
import { a as Rr, o as Ug, t as G } from "./chunk-KGFNY3KK-CuDVV7Uv.js";
import { i as Yr, n as Or, r as Sr, t as $r } from "./chunk-7J6CGLKN-I3y4E9US.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/chunk-VU6ZFW4Y.mjs
var w = {
	common: Cn,
	getConfig: It,
	insertCluster: Rr,
	insertEdge: $r,
	insertEdgeLabel: Sr,
	insertMarkers: Yr,
	insertNode: Ug,
	interpolateToCurve: ur,
	labelHelper: G,
	log: pt,
	positionEdgeLabel: Or
};
var a = {}, H = m((t) => {
	for (let r of t) a[r.name] = r;
}, "registerLayoutLoaders");
m(() => {
	H([{
		name: "dagre",
		loader: m(async () => await __vitePreload(() => import("./dagre-ND4H6XIP-BQSBcUul.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])), "loader")
	}, {
		name: "cose-bilkent",
		loader: m(async () => await __vitePreload(() => import("./cose-bilkent-UX7MHV2Q-DahBTmBQ.js"), __vite__mapDeps([16,17,2,6])), "loader")
	}]);
}, "registerDefaultLayoutLoaders")();
var P = m(async (t, r) => {
	if (!(t.layoutAlgorithm in a)) throw new Error(`Unknown layout algorithm: ${t.layoutAlgorithm}`);
	if (t.diagramId) for (let e of t.nodes) {
		let A = e.domId || e.id;
		e.domId = `${t.diagramId}-${A}`;
	}
	let n = a[t.layoutAlgorithm], x = await n.loader(), { theme: d, themeVariables: D } = t.config, { useGradient: F, gradientStart: $, gradientStop: I } = D, s = r.attr("id");
	if (r.append("defs").append("filter").attr("id", `${s}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${d?.includes("dark") ? "#FFFFFF" : "#000000"}`), r.append("defs").append("filter").attr("id", `${s}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${d?.includes("dark") ? "#FFFFFF" : "#000000"}`), F) {
		let e = r.append("linearGradient").attr("id", r.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		e.append("svg:stop").attr("offset", "0%").attr("stop-color", $).attr("stop-opacity", 1), e.append("svg:stop").attr("offset", "100%").attr("stop-color", I).attr("stop-opacity", 1);
	}
	return x.render(t, r, w, { algorithm: n.algorithm });
}, "render"), M = m((t = "", { fallback: r = "dagre" } = {}) => {
	if (t in a) return t;
	if (r in a) return pt.warn(`Layout algorithm ${t} is not registered. Using ${r} as fallback.`), r;
	throw new Error(`Both layout algorithms ${t} and ${r} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
//#endregion
export { M as n, P as r, H as t };
