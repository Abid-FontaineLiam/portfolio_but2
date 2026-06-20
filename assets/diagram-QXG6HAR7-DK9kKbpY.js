import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { y as d } from "./chunk-KGYTTC2M-lyuK7G19.js";
import { t as c } from "./chunk-JQRUD6KW-q30wSS88.js";
import { q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { F as hs, H as ls, I as is, K as ns, N as es, S as as, Y as os, j as eo, l as It, tt as ss } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { t as d$1 } from "./chunk-LRIF4GLE-wnHuf8kK.js";
import "./chunk-KNLZD3CH-C5mSJplc.js";
import { a as Lr } from "./chunk-QA3QBVWF-BSQ0fMk9.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/diagram-QXG6HAR7.mjs
var O = eo.packet, y = class {
	constructor() {
		this.packet = [];
		this.setAccTitle = es;
		this.getAccTitle = ss;
		this.setDiagramTitle = hs;
		this.getDiagramTitle = ns;
		this.getAccDescription = as;
		this.setAccDescription = ls;
	}
	static {
		m(this, "PacketDB");
	}
	getConfig() {
		let t = Lr({
			...O,
			...It().packet
		});
		return t.showBits && (t.paddingY += 10), t;
	}
	getPacket() {
		return this.packet;
	}
	pushWord(t) {
		t.length > 0 && this.packet.push(t);
	}
	clear() {
		os(), this.packet = [];
	}
};
var _ = 1e4, V = m((e, t) => {
	c(e, t);
	let a = -1, o = [], s = 1, { bitsPerRow: l } = t.getConfig();
	for (let { start: r, end: n, bits: d, label: p } of e.blocks) {
		if (r !== void 0 && n !== void 0 && n < r) throw new Error(`Packet block ${r} - ${n} is invalid. End must be greater than start.`);
		if (r ??= a + 1, r !== a + 1) throw new Error(`Packet block ${r} - ${n ?? r} is not contiguous. It should start from ${a + 1}.`);
		if (d === 0) throw new Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);
		for (n ??= r + (d ?? 1) - 1, d ??= n - r + 1, a = n, pt.debug(`Packet block ${r} - ${a} with label ${p}`); o.length <= l + 1 && t.getPacket().length < _;) {
			let [m, i] = q({
				start: r,
				end: n,
				bits: d,
				label: p
			}, s, l);
			if (o.push(m), m.end + 1 === s * l && (t.pushWord(o), o = [], s++), !i) break;
			({start: r, end: n, bits: d, label: p} = i);
		}
	}
	t.pushWord(o);
}, "populate"), q = m((e, t, a) => {
	if (e.start === void 0) throw new Error("start should have been set during first phase");
	if (e.end === void 0) throw new Error("end should have been set during first phase");
	if (e.start > e.end) throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);
	if (e.end + 1 <= t * a) return [e, void 0];
	let o = t * a - 1, s = t * a;
	return [{
		start: e.start,
		end: o,
		label: e.label,
		bits: o - e.start
	}, {
		start: s,
		end: e.end,
		label: e.label,
		bits: e.end - s
	}];
}, "getNextFittingBlock"), D = {
	parser: { yy: void 0 },
	parse: m(async (e) => {
		let t = await d("packet", e), a = D.parser?.yy;
		if (!(a instanceof y)) throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		pt.debug(t), V(t, a);
	}, "parse")
};
var L = m((e, t, a, o) => {
	let s = o.db, l = s.getConfig(), { rowHeight: r, paddingY: n, bitWidth: d, bitsPerRow: p } = l, m = s.getPacket(), i = s.getDiagramTitle(), g = r + n, f = g * (m.length + 1) - (i ? 0 : r), k = d * p + 2, u = d$1(t);
	u.attr("viewBox", `0 0 ${k} ${f}`), is(u, f, k, l.useMaxWidth);
	for (let [G, R] of m.entries()) M(u, R, G, l);
	u.append("text").text(i).attr("x", k / 2).attr("y", f - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), M = m((e, t, a, { rowHeight: o, paddingX: s, paddingY: l, bitWidth: r, bitsPerRow: n, showBits: d }) => {
	let p = e.append("g"), m = a * (o + l) + l;
	for (let i of t) {
		let g = i.start % n * r + 1, f = (i.end - i.start + 1) * r - s;
		if (p.append("rect").attr("x", g).attr("y", m).attr("width", f).attr("height", o).attr("class", "packetBlock"), p.append("text").attr("x", g + f / 2).attr("y", m + o / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(i.label), !d) continue;
		let k = i.end === i.start, u = m - 2;
		p.append("text").attr("x", g + (k ? f / 2 : 0)).attr("y", u).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", k ? "middle" : "start").text(i.start), k || p.append("text").attr("x", g + f).attr("y", u).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(i.end);
	}
}, "drawWord"), F = { draw: L };
var N = {
	byteFontSize: "10px",
	startByteColor: "black",
	endByteColor: "black",
	labelColor: "black",
	labelFontSize: "12px",
	titleColor: "black",
	titleFontSize: "14px",
	blockStrokeColor: "black",
	blockStrokeWidth: "1",
	blockFillColor: "#efefef"
};
var gt = {
	parser: D,
	get db() {
		return new y();
	},
	renderer: F,
	styles: m(({ packet: e } = {}) => {
		let t = Lr(N, e);
		return `
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`;
	}, "styles")
};
//#endregion
export { gt as diagram };
