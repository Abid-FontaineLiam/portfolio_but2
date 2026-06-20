import { t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { Z as qo } from "./chunk-67TQ5CYL-BGuir8Be.js";
import "./chunk-KNLZD3CH-C5mSJplc.js";
import "./chunk-QA3QBVWF-BSQ0fMk9.js";
import "./chunk-INKRHTLW-D1tzj-ij.js";
import { A as ur, a as Hr, k as tl, p as Pu } from "./chunk-W44A43WB-02pMpHVo.js";
import "./chunk-5VCL7Z4A-B90neaMh.js";
import { n as d } from "./chunk-UY5QBCOK-CwI-dlRa.js";
import "./chunk-5IMINLNL-CMXhugjx.js";
import "./chunk-T2UQINTJ-D3w-GKPC.js";
import { a as Rr, c as Zg, i as Kg, l as k, n as Gr, o as Ug, r as Jg } from "./chunk-KGFNY3KK-CuDVV7Uv.js";
import { a as _r, i as Yr, n as Or, r as Sr, t as $r } from "./chunk-7J6CGLKN-I3y4E9US.js";
import { t as fn } from "./chunk-KRXBNO2N-COR6L7zG.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/dagre-ND4H6XIP.mjs
function b(e) {
	var t = {
		options: {
			directed: e.isDirected(),
			multigraph: e.isMultigraph(),
			compound: e.isCompound()
		},
		nodes: re(e),
		edges: se(e)
	};
	return ur(e.graph()) || (t.value = Pu(e.graph())), t;
}
m(b, "write");
function re(e) {
	return tl(e.nodes(), function(t) {
		var n = e.node(t), a = e.parent(t), s = { v: t };
		return ur(n) || (s.value = n), ur(a) || (s.parent = a), s;
	});
}
m(re, "writeNodes");
function se(e) {
	return tl(e.edges(), function(t) {
		var n = e.edge(t), a = {
			v: t.v,
			w: t.w
		};
		return ur(t.name) || (a.name = t.name), ur(n) || (a.value = n), a;
	});
}
m(se, "writeEdges");
var c = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), W = m(() => {
	X.clear(), Q.clear(), c.clear();
}, "clear"), J = m((e, t) => {
	let n = X.get(t) || [];
	return pt.trace("In isDescendant", t, " ", e, " = ", n.includes(e)), n.includes(e);
}, "isDescendant"), ae = m((e, t) => {
	let n = X.get(t) || [];
	return pt.info("Descendants of ", t, " is ", n), pt.info("Edge is ", e), e.v === t || e.w === t ? !1 : n ? n.includes(e.v) || J(e.v, t) || J(e.w, t) || n.includes(e.w) : (pt.debug("Tilt, ", t, ",not in descendants"), !1);
}, "edgeInCluster"), Z = m((e, t, n, a) => {
	pt.warn("Copying children of ", e, "root", a, "data", t.node(e), a);
	let s = t.children(e) || [];
	e !== a && s.push(e), pt.warn("Copying (nodes) clusterId", e, "nodes", s), s.forEach((o) => {
		if (t.children(o).length > 0) Z(o, t, n, a);
		else {
			let l = t.node(o);
			pt.info("cp ", o, " to ", a, " with parent ", e), n.setNode(o, l), a !== t.parent(o) && (pt.warn("Setting parent", o, t.parent(o)), n.setParent(o, t.parent(o))), e !== a && o !== e ? (pt.debug("Setting parent", o, e), n.setParent(o, e)) : (pt.info("In copy ", e, "root", a, "data", t.node(e), a), pt.debug("Not Setting parent for node=", o, "cluster!==rootId", e !== a, "node!==clusterId", o !== e));
			let u = t.edges(o);
			pt.debug("Copying Edges", u), u.forEach((d) => {
				pt.info("Edge", d);
				let h = t.edge(d.v, d.w, d.name);
				pt.info("Edge data", h, a);
				try {
					ae(d, a) ? (pt.info("Copying as ", d.v, d.w, h, d.name), n.setEdge(d.v, d.w, h, d.name), pt.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : pt.info("Skipping copy of edge ", d.v, "-->", d.w, " rootId: ", a, " clusterId:", e);
				} catch (m) {
					pt.error(m);
				}
			});
		}
		pt.debug("Removing node", o), t.removeNode(o);
	});
}, "copy"), $ = m((e, t) => {
	let n = t.children(e), a = [...n];
	for (let s of n) Q.set(s, e), a = [...a, ...$(s, t)];
	return a;
}, "extractDescendants");
var ce = m((e, t, n) => {
	let a = e.edges().filter((d) => d.v === t || d.w === t), s = e.edges().filter((d) => d.v === n || d.w === n), o = a.map((d) => ({
		v: d.v === t ? n : d.v,
		w: d.w === t ? t : d.w
	})), l = s.map((d) => ({
		v: d.v,
		w: d.w
	}));
	return o.filter((d) => l.some((h) => d.v === h.v && d.w === h.w));
}, "findCommonEdges"), x = m((e, t, n) => {
	let a = t.children(e);
	if (pt.trace("Searching children of id ", e, a), a.length < 1) return e;
	let s;
	for (let o of a) {
		let l = x(o, t, n), u = ce(t, n, l);
		if (l) if (u.length > 0) s = l;
		else return l;
	}
	return s;
}, "findNonClusterChild"), K = m((e) => !c.has(e) || !c.get(e).externalConnections ? e : c.has(e) ? c.get(e).id : e, "getAnchorId"), I = m((e, t) => {
	if (!e || t > 10) {
		pt.debug("Opting out, no graph ");
		return;
	} else pt.debug("Opting in, graph ");
	e.nodes().forEach(function(n) {
		e.children(n).length > 0 && (pt.warn("Cluster identified", n, " Replacement id in edges: ", x(n, e, n)), X.set(n, $(n, e)), c.set(n, {
			id: x(n, e, n),
			clusterData: e.node(n)
		}));
	}), e.nodes().forEach(function(n) {
		let a = e.children(n), s = e.edges();
		a.length > 0 ? (pt.debug("Cluster identified", n, X), s.forEach((o) => {
			J(o.v, n) ^ J(o.w, n) && (pt.warn("Edge: ", o, " leaves cluster ", n), pt.warn("Descendants of XXX ", n, ": ", X.get(n)), c.get(n).externalConnections = !0);
		})) : pt.debug("Not a cluster ", n, X);
	});
	for (let n of c.keys()) {
		let a = c.get(n).id, s = e.parent(a);
		s !== n && c.has(s) && !c.get(s).externalConnections && (c.get(n).id = s);
	}
	e.edges().forEach(function(n) {
		let a = e.edge(n);
		pt.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), pt.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
		let s = n.v, o = n.w;
		if (pt.warn("Fix XXX", c, "ids:", n.v, n.w, "Translating: ", c.get(n.v), " --- ", c.get(n.w)), c.get(n.v) || c.get(n.w)) {
			if (pt.warn("Fixing and trying - removing XXX", n.v, n.w, n.name), s = K(n.v), o = K(n.w), e.removeEdge(n.v, n.w, n.name), s !== n.v) {
				let l = e.parent(s);
				c.get(l).externalConnections = !0, a.fromCluster = n.v;
			}
			if (o !== n.w) {
				let l = e.parent(o);
				c.get(l).externalConnections = !0, a.toCluster = n.w;
			}
			pt.warn("Fix Replacing with XXX", s, o, n.name), e.setEdge(s, o, a, n.name);
		}
	}), pt.warn("Adjusted Graph", b(e)), ee(e, 0), pt.trace(c);
}, "adjustClustersAndEdges"), ee = m((e, t) => {
	if (pt.warn("extractor - ", t, b(e), e.children("D")), t > 10) {
		pt.error("Bailing out");
		return;
	}
	let n = e.nodes(), a = !1;
	for (let s of n) {
		let o = e.children(s);
		a = a || o.length > 0;
	}
	if (!a) {
		pt.debug("Done, no node has children", e.nodes());
		return;
	}
	pt.debug("Nodes = ", n, t);
	for (let s of n) if (pt.debug("Extracting node", s, c, c.has(s) && !c.get(s).externalConnections, !e.parent(s), e.node(s), e.children("D"), " Depth ", t), !c.has(s)) pt.debug("Not a cluster", s, t);
	else if (!c.get(s).externalConnections && e.children(s) && e.children(s).length > 0) {
		pt.warn("Cluster without external connections, without a parent and with children", s, t);
		let l = e.graph().rankdir === "TB" ? "LR" : "TB";
		c.get(s)?.clusterData?.dir && (l = c.get(s).clusterData.dir, pt.warn("Fixing dir", c.get(s).clusterData.dir, l));
		let u = new Hr({
			multigraph: !0,
			compound: !0
		}).setGraph({
			rankdir: l,
			nodesep: 50,
			ranksep: 50,
			marginx: 8,
			marginy: 8
		}).setDefaultEdgeLabel(function() {
			return {};
		});
		pt.warn("Old graph before copy", b(e)), Z(s, e, u, s), e.setNode(s, {
			clusterNode: !0,
			id: s,
			clusterData: c.get(s).clusterData,
			label: c.get(s).label,
			graph: u
		}), pt.warn("New graph after copy node: (", s, ")", b(u)), pt.debug("Old graph after copy", b(e));
	} else pt.warn("Cluster ** ", s, " **not meeting the criteria !externalConnections:", !c.get(s).externalConnections, " no parent: ", !e.parent(s), " children ", e.children(s) && e.children(s).length > 0, e.children("D"), t), pt.debug(c);
	n = e.nodes(), pt.warn("New list of nodes", n);
	for (let s of n) {
		let o = e.node(s);
		pt.warn(" Now next level", s, o), o?.clusterNode && ee(o.graph, t + 1);
	}
}, "extractor"), ne = m((e, t) => {
	if (t.length === 0) return [];
	let n = Object.assign([], t);
	return t.forEach((a) => {
		let o = ne(e, e.children(a));
		n = [...n, ...o];
	}), n;
}, "sorter"), te = m((e) => ne(e, e.children()), "sortNodesByHierarchy");
var ie = m(async (e, t, n, a, s, o) => {
	pt.warn("Graph in recursive render:XAX", b(t), s);
	let l = t.graph().rankdir;
	pt.trace("Dir in recursive render - dir:", l);
	let u = e.insert("g").attr("class", "root");
	t.nodes() ? pt.info("Recursive render XXX", t.nodes()) : pt.info("No nodes found for", t), t.edges().length > 0 && pt.info("Recursive edges", t.edge(t.edges()[0]));
	let d$1 = u.insert("g").attr("class", "clusters"), h = u.insert("g").attr("class", "edgePaths"), m$1 = u.insert("g").attr("class", "edgeLabels"), p = u.insert("g").attr("class", "nodes");
	await Promise.all(t.nodes().map(async function(f) {
		let r = t.node(f);
		if (s !== void 0) {
			let w = JSON.parse(JSON.stringify(s.clusterData));
			pt.trace(`Setting data for parent cluster XXX
 Node.id = `, f, `
 data=`, w.height, `
Parent cluster`, s.height), t.setNode(s.id, w), t.parent(f) || (pt.trace("Setting parent", f, s.id), t.setParent(f, s.id, w));
		}
		if (pt.info("(Insert) Node XXX" + f + ": " + JSON.stringify(t.node(f))), r?.clusterNode) {
			pt.info("Cluster identified XBX", f, r.width, t.node(f));
			let { ranksep: w, nodesep: E } = t.graph();
			r.graph.setGraph({
				...r.graph.graph(),
				ranksep: w + 25,
				nodesep: E
			});
			let N = await ie(p, r.graph, n, a, t.node(f), o), D = N.elem;
			k(r, D), r.diff = N.diff || 0, pt.info("New compound node after recursive render XAX", f, "width", r.width, "height", r.height), Zg(D, r);
		} else t.children(f).length > 0 ? (pt.trace("Cluster - the non recursive path XBX", f, r.id, r, r.width, "Graph:", t), pt.trace(x(r.id, t)), c.set(r.id, {
			id: x(r.id, t),
			node: r
		})) : (pt.trace("Node - the non recursive path XAX", f, p, t.node(f), l), await Ug(p, t.node(f), {
			config: o,
			dir: l
		}));
	})), await m(async () => {
		let f = t.edges().map(async function(r) {
			let w = t.edge(r.v, r.w, r.name);
			pt.info("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(r)), pt.info("Edge " + r.v + " -> " + r.w + ": ", r, " ", JSON.stringify(t.edge(r))), pt.info("Fix", c, "ids:", r.v, r.w, "Translating: ", c.get(r.v), c.get(r.w)), await Sr(m$1, w);
		});
		await Promise.all(f);
	}, "processEdges")(), pt.info("Graph before layout:", JSON.stringify(b(t))), pt.info("############################################# XXX"), pt.info("###                Layout                 ### XXX"), pt.info("############################################# XXX"), fn(t), pt.info("Graph after layout:", JSON.stringify(b(t)));
	let P = 0, { subGraphTitleTotalMargin: S } = d(o);
	return await Promise.all(te(t).map(async function(f) {
		let r = t.node(f);
		if (pt.info("Position XBX => " + f + ": (" + r.x, "," + r.y, ") width: ", r.width, " height: ", r.height), r?.clusterNode) r.y += S, pt.info("A tainted cluster node XBX1", f, r.id, r.width, r.height, r.x, r.y, t.parent(f)), c.get(r.id).node = r, Kg(r);
		else if (t.children(f).length > 0) {
			pt.info("A pure cluster node XBX1", f, r.id, r.x, r.y, r.width, r.height, t.parent(f)), r.height += S, t.node(r.parentId);
			let w = r?.padding / 2 || 0, E = r?.labelBBox?.height || 0, N = E - w || 0;
			pt.debug("OffsetY", N, "labelHeight", E, "halfPadding", w), await Rr(d$1, r), c.get(r.id).node = r;
		} else {
			let w = t.node(r.parentId);
			r.y += S / 2, pt.info("A regular node XBX1 - using the padding", r.id, "parent", r.parentId, r.width, r.height, r.x, r.y, "offsetY", r.offsetY, "parent", w, w?.offsetY, r), Kg(r);
		}
	})), t.edges().forEach(function(f) {
		let r = t.edge(f);
		pt.info("Edge " + f.v + " -> " + f.w + ": " + JSON.stringify(r), r), r.points.forEach((D) => D.y += S / 2);
		Or(r, $r(h, r, c, n, t.node(f.v), t.node(f.w), a));
	}), t.nodes().forEach(function(f) {
		let r = t.node(f);
		pt.info(f, r.type, r.diff), r.isGroup && (P = r.diff);
	}), pt.warn("Returning from recursive render XAX", u, P), {
		elem: u,
		diff: P
	};
}, "recursiveRender"), Se = m(async (e, t) => {
	let n = new Hr({
		multigraph: !0,
		compound: !0
	}).setGraph({
		rankdir: e.direction,
		nodesep: e.config?.nodeSpacing || e.config?.flowchart?.nodeSpacing || e.nodeSpacing,
		ranksep: e.config?.rankSpacing || e.config?.flowchart?.rankSpacing || e.rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	}), a = t.select("g");
	Yr(a, e.markers, e.type, e.diagramId), Jg(), _r(), Gr(), W(), e.nodes.forEach((o) => {
		n.setNode(o.id, { ...o }), o.parentId && n.setParent(o.id, o.parentId);
	}), pt.debug("Edges:", e.edges), e.edges.forEach((o) => {
		if (o.start === o.end) {
			let l = o.start, u = l + "---" + l + "---1", d = l + "---" + l + "---2", h = n.node(l);
			n.setNode(u, {
				domId: u,
				id: u,
				parentId: h.parentId,
				labelStyle: "",
				label: "",
				padding: 0,
				shape: "labelRect",
				style: "",
				width: 10,
				height: 10
			}), n.setParent(u, h.parentId), n.setNode(d, {
				domId: d,
				id: d,
				parentId: h.parentId,
				labelStyle: "",
				padding: 0,
				shape: "labelRect",
				label: "",
				style: "",
				width: 10,
				height: 10
			}), n.setParent(d, h.parentId);
			let m = structuredClone(o), p = structuredClone(o), v = structuredClone(o);
			m.label = "", m.arrowTypeEnd = "none", m.endLabelLeft = "", m.endLabelRight = "", m.startLabelLeft = "", m.id = l + "-cyclic-special-1", p.startLabelRight = "", p.startLabelLeft = "", p.endLabelLeft = "", p.endLabelRight = "", p.arrowTypeStart = "none", p.arrowTypeEnd = "none", p.id = l + "-cyclic-special-mid", v.label = "", v.startLabelRight = "", v.startLabelLeft = "", v.arrowTypeStart = "none", h.isGroup && (m.fromCluster = l, v.toCluster = l), v.id = l + "-cyclic-special-2", v.arrowTypeStart = "none", n.setEdge(l, u, m, l + "-cyclic-special-0"), n.setEdge(u, d, p, l + "-cyclic-special-1"), n.setEdge(d, l, v, l + "-cyc<lic-special-2");
		} else n.setEdge(o.start, o.end, { ...o }, o.id);
	}), pt.warn("Graph at first:", JSON.stringify(b(n))), I(n), pt.warn("Graph after XAX:", JSON.stringify(b(n)));
	let s = qo();
	await ie(a, n, e.type, e.diagramId, void 0, s);
}, "render");
//#endregion
export { Se as render };
