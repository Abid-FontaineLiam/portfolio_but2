import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { y as d } from "./chunk-KGYTTC2M-lyuK7G19.js";
import { t as c } from "./chunk-JQRUD6KW-q30wSS88.js";
import { W as ks, c as Ds, p as He, q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { F as hs, H as ls, I as is, K as ns, N as es, S as as, Y as os, Z as qo, j as eo, tt as ss } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { t as d$1 } from "./chunk-LRIF4GLE-wnHuf8kK.js";
import "./chunk-KNLZD3CH-C5mSJplc.js";
import { a as Lr, p as ct } from "./chunk-QA3QBVWF-BSQ0fMk9.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/pieDiagram-CU6KROY3.mjs
var ee = eo.pie, C = {
	sections: /* @__PURE__ */ new Map(),
	showData: !1,
	config: ee
}, D = C.sections, A = C.showData, ue = structuredClone(ee), u = {
	getConfig: m(() => structuredClone(ue), "getConfig"),
	clear: m(() => {
		D = /* @__PURE__ */ new Map(), A = C.showData, os();
	}, "clear"),
	setDiagramTitle: hs,
	getDiagramTitle: ns,
	setAccTitle: es,
	getAccTitle: ss,
	setAccDescription: ls,
	getAccDescription: as,
	addSection: m(({ label: e, value: i }) => {
		if (i < 0) throw new Error(`"${e}" has invalid value: ${i}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
		D.has(e) || (D.set(e, i), pt.debug(`added new section: ${e}, with value: ${i}`));
	}, "addSection"),
	getSections: m(() => D, "getSections"),
	setShowData: m((e) => {
		A = e;
	}, "setShowData"),
	getShowData: m(() => A, "getShowData")
};
var Ce = m((e, i) => {
	c(e, i), i.setShowData(e.showData), e.sections.map(i.addSection);
}, "populateDb"), te = { parse: m(async (e) => {
	let i = await d("pie", e);
	pt.debug(i), Ce(i, u);
}, "parse") };
var ie = m((e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles");
var Te = m((e) => {
	let i = [...e.values()].reduce((n, s) => n + s, 0), T = [...e.entries()].map(([n, s]) => ({
		label: n,
		value: s
	})).filter((n) => n.value / i * 100 >= 1);
	return Ds().value((n) => n.value).sort(null)(T);
}, "createPieArcs");
var Ye = {
	parser: te,
	db: u,
	renderer: { draw: m((e, i, T, v) => {
		pt.debug(`rendering pie chart
` + e);
		let n = v.db, s = qo(), $ = Lr(n.getConfig(), s.pie), b = 40, a = 18, d = 4, c = 450, m = c, S = d$1(i), l = S.append("g");
		l.attr("transform", "translate(225,225)");
		let { themeVariables: o } = s, [R] = ct(o.pieOuterStrokeWidth);
		R ??= 2;
		let E = $.textPosition, f = Math.min(m, c) / 2 - b, oe = ks().innerRadius(0).outerRadius(f), ne = ks().innerRadius(f * E).outerRadius(f * E);
		l.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + R / 2).attr("class", "pieOuterCircle");
		let g = n.getSections(), ae = Te(g), se = [
			o.pie1,
			o.pie2,
			o.pie3,
			o.pie4,
			o.pie5,
			o.pie6,
			o.pie7,
			o.pie8,
			o.pie9,
			o.pie10,
			o.pie11,
			o.pie12
		], h = 0;
		g.forEach((t) => {
			h += t;
		});
		let k = ae.filter((t) => (t.data.value / h * 100).toFixed(0) !== "0"), y = He(se).domain([...g.keys()]);
		l.selectAll("mySlices").data(k).enter().append("path").attr("d", oe).attr("fill", (t) => y(t.data.label)).attr("class", "pieCircle"), l.selectAll("mySlices").data(k).enter().append("text").text((t) => (t.data.value / h * 100).toFixed(0) + "%").attr("transform", (t) => "translate(" + ne.centroid(t) + ")").style("text-anchor", "middle").attr("class", "slice");
		let ce = l.append("text").text(n.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText"), G = [...g.entries()].map(([t, P]) => ({
			label: t,
			value: P
		})), x = l.selectAll(".legend").data(G).enter().append("g").attr("class", "legend").attr("transform", (t, P) => {
			let j = 22, fe = j * G.length / 2;
			return "translate(216," + (P * j - fe) + ")";
		});
		x.append("rect").attr("width", a).attr("height", a).style("fill", (t) => y(t.label)).style("stroke", (t) => y(t.label)), x.append("text").attr("x", 22).attr("y", a - d).text((t) => n.getShowData() ? `${t.label} [${t.value}]` : t.label);
		let pe = 512 + Math.max(...x.selectAll("text").nodes().map((t) => t?.getBoundingClientRect().width ?? 0)), B = ce.node()?.getBoundingClientRect().width ?? 0, me = m / 2 - B / 2, de = m / 2 + B / 2, F = Math.min(0, me), O = Math.max(pe, de) - F;
		S.attr("viewBox", `${F} 0 ${O} ${c}`), is(S, c, O, $.useMaxWidth);
	}, "draw") },
	styles: ie
};
//#endregion
export { Ye as diagram };
