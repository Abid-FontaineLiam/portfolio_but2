import { r as o, t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
import { V as ia, W as ks, q as pt } from "./chunk-7W6UQGC5-C150Mc68.js";
import { G as n, M as er, T as c, Y as os, Z as qo, l as It$1, t as Ao, y as T } from "./chunk-67TQ5CYL-BGuir8Be.js";
import { t as d } from "./chunk-LRIF4GLE-wnHuf8kK.js";
import "./chunk-KNLZD3CH-C5mSJplc.js";
import { p as ct$1 } from "./chunk-QA3QBVWF-BSQ0fMk9.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/timeline-definition-O6YCAMPW.mjs
var at = (function() {
	var e = m(function(b, i, d, l) {
		for (d = d || {}, l = b.length; l--; d[b[l]] = i);
		return d;
	}, "o"), t = [
		6,
		11,
		13,
		14,
		15,
		17,
		19,
		20,
		23,
		24
	], n = [1, 12], a = [1, 13], r = [1, 14], h = [1, 15], c = [1, 16], o = [1, 19], f = [1, 20], g = {
		trace: m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			timeline_header: 4,
			document: 5,
			EOF: 6,
			timeline: 7,
			timeline_lr: 8,
			timeline_td: 9,
			line: 10,
			SPACE: 11,
			statement: 12,
			NEWLINE: 13,
			title: 14,
			acc_title: 15,
			acc_title_value: 16,
			acc_descr: 17,
			acc_descr_value: 18,
			acc_descr_multiline_value: 19,
			section: 20,
			period_statement: 21,
			event_statement: 22,
			period: 23,
			event: 24,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "EOF",
			7: "timeline",
			8: "timeline_lr",
			9: "timeline_td",
			11: "SPACE",
			13: "NEWLINE",
			14: "title",
			15: "acc_title",
			16: "acc_title_value",
			17: "acc_descr",
			18: "acc_descr_value",
			19: "acc_descr_multiline_value",
			20: "section",
			23: "period",
			24: "event"
		},
		productions_: [
			0,
			[3, 3],
			[4, 1],
			[4, 1],
			[4, 1],
			[5, 0],
			[5, 2],
			[10, 2],
			[10, 1],
			[10, 1],
			[10, 1],
			[12, 1],
			[12, 2],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[21, 1],
			[22, 1]
		],
		performAction: m(function(i, d, l, p, y, u, v) {
			var k = u.length - 1;
			switch (y) {
				case 1: return u[k - 1];
				case 3:
					p.setDirection("LR");
					break;
				case 4:
					p.setDirection("TD");
					break;
				case 5:
					this.$ = [];
					break;
				case 6:
					u[k - 1].push(u[k]), this.$ = u[k - 1];
					break;
				case 7:
				case 8:
					this.$ = u[k];
					break;
				case 9:
				case 10:
					this.$ = [];
					break;
				case 11:
					p.getCommonDb().setDiagramTitle(u[k].substr(6)), this.$ = u[k].substr(6);
					break;
				case 12:
					this.$ = u[k].trim(), p.getCommonDb().setAccTitle(this.$);
					break;
				case 13:
				case 14:
					this.$ = u[k].trim(), p.getCommonDb().setAccDescription(this.$);
					break;
				case 15:
					p.addSection(u[k].substr(8)), this.$ = u[k].substr(8);
					break;
				case 18:
					p.addTask(u[k], 0, ""), this.$ = u[k];
					break;
				case 19:
					p.addEvent(u[k].substr(2)), this.$ = u[k];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				7: [1, 3],
				8: [1, 4],
				9: [1, 5]
			},
			{ 1: [3] },
			e(t, [2, 5], { 5: 6 }),
			e(t, [2, 2]),
			e(t, [2, 3]),
			e(t, [2, 4]),
			{
				6: [1, 7],
				10: 8,
				11: [1, 9],
				12: 10,
				13: [1, 11],
				14: n,
				15: a,
				17: r,
				19: h,
				20: c,
				21: 17,
				22: 18,
				23: o,
				24: f
			},
			e(t, [2, 10], { 1: [2, 1] }),
			e(t, [2, 6]),
			{
				12: 21,
				14: n,
				15: a,
				17: r,
				19: h,
				20: c,
				21: 17,
				22: 18,
				23: o,
				24: f
			},
			e(t, [2, 8]),
			e(t, [2, 9]),
			e(t, [2, 11]),
			{ 16: [1, 22] },
			{ 18: [1, 23] },
			e(t, [2, 14]),
			e(t, [2, 15]),
			e(t, [2, 16]),
			e(t, [2, 17]),
			e(t, [2, 18]),
			e(t, [2, 19]),
			e(t, [2, 7]),
			e(t, [2, 12]),
			e(t, [2, 13])
		],
		defaultActions: {},
		parseError: m(function(i, d) {
			if (d.recoverable) this.trace(i);
			else {
				var l = new Error(i);
				throw l.hash = d, l;
			}
		}, "parseError"),
		parse: m(function(i) {
			var d = this, l = [0], p = [], y = [null], u = [], v = this.table, k = "", H = 0, V = 0, R = 0, O = 2, L = 1, C = u.slice.call(arguments, 1), T = Object.create(this.lexer), B = { yy: {} };
			for (var P in this.yy) Object.prototype.hasOwnProperty.call(this.yy, P) && (B.yy[P] = this.yy[P]);
			T.setInput(i, B.yy), B.yy.lexer = T, B.yy.parser = this, typeof T.yylloc > "u" && (T.yylloc = {});
			var D = T.yylloc;
			u.push(D);
			var $ = T.options && T.options.ranges;
			typeof B.yy.parseError == "function" ? this.parseError = B.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function _(W) {
				l.length = l.length - 2 * W, y.length = y.length - W, u.length = u.length - W;
			}
			m(_, "popStack");
			function E() {
				var W;
				return W = p.pop() || T.lex() || L, typeof W != "number" && (W instanceof Array && (p = W, W = p.pop()), W = d.symbols_[W] || W), W;
			}
			m(E, "lex");
			for (var S, I, A, N, X, z = {}, Z, F, pt, q;;) {
				if (A = l[l.length - 1], this.defaultActions[A] ? N = this.defaultActions[A] : ((S === null || typeof S > "u") && (S = E()), N = v[A] && v[A][S]), typeof N > "u" || !N.length || !N[0]) {
					var rt = "";
					q = [];
					for (Z in v[A]) this.terminals_[Z] && Z > O && q.push("'" + this.terminals_[Z] + "'");
					T.showPosition ? rt = "Parse error on line " + (H + 1) + `:
` + T.showPosition() + `
Expecting ` + q.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : rt = "Parse error on line " + (H + 1) + ": Unexpected " + (S == L ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(rt, {
						text: T.match,
						token: this.terminals_[S] || S,
						line: T.yylineno,
						loc: D,
						expected: q
					});
				}
				if (N[0] instanceof Array && N.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + A + ", token: " + S);
				switch (N[0]) {
					case 1:
						l.push(S), y.push(T.yytext), u.push(T.yylloc), l.push(N[1]), S = null, I ? (S = I, I = null) : (V = T.yyleng, k = T.yytext, H = T.yylineno, D = T.yylloc, R > 0 && R--);
						break;
					case 2:
						if (F = this.productions_[N[1]][1], z.$ = y[y.length - F], z._$ = {
							first_line: u[u.length - (F || 1)].first_line,
							last_line: u[u.length - 1].last_line,
							first_column: u[u.length - (F || 1)].first_column,
							last_column: u[u.length - 1].last_column
						}, $ && (z._$.range = [u[u.length - (F || 1)].range[0], u[u.length - 1].range[1]]), X = this.performAction.apply(z, [
							k,
							V,
							H,
							B.yy,
							N[1],
							y,
							u
						].concat(C)), typeof X < "u") return X;
						F && (l = l.slice(0, -1 * F * 2), y = y.slice(0, -1 * F), u = u.slice(0, -1 * F)), l.push(this.productions_[N[1]][0]), y.push(z.$), u.push(z._$), pt = v[l[l.length - 2]][l[l.length - 1]], l.push(pt);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	g.lexer = (function() {
		return {
			EOF: 1,
			parseError: m(function(d, l) {
				if (this.yy.parser) this.yy.parser.parseError(d, l);
				else throw new Error(d);
			}, "parseError"),
			setInput: m(function(i, d) {
				return this.yy = d || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: m(function() {
				var i = this._input[0];
				this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
				return i.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
			}, "input"),
			unput: m(function(i) {
				var d = i.length, l = i.split(/(?:\r\n?|\n)/g);
				this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - d), this.offset -= d;
				var p = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l.length - 1 && (this.yylineno -= l.length - 1);
				var y = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: l ? (l.length === p.length ? this.yylloc.first_column : 0) + p[p.length - l.length].length - l[0].length : this.yylloc.first_column - d
				}, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - d]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: m(function() {
				return this._more = !0, this;
			}, "more"),
			reject: m(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: m(function(i) {
				this.unput(this.match.slice(i));
			}, "less"),
			pastInput: m(function() {
				var i = this.matched.substr(0, this.matched.length - this.match.length);
				return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: m(function() {
				var i = this.match;
				return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: m(function() {
				var i = this.pastInput(), d = new Array(i.length + 1).join("-");
				return i + this.upcomingInput() + `
` + d + "^";
			}, "showPosition"),
			test_match: m(function(i, d) {
				var l, p, y;
				if (this.options.backtrack_lexer && (y = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (y.yylloc.range = this.yylloc.range.slice(0))), p = i[0].match(/(?:\r\n?|\n).*/g), p && (this.yylineno += p.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
				}, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(i[0].length), this.matched += i[0], l = this.performAction.call(this, this.yy, this, d, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), l) return l;
				if (this._backtrack) {
					for (var u in y) this[u] = y[u];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var i, d, l, p;
				this._more || (this.yytext = "", this.match = "");
				for (var y = this._currentRules(), u = 0; u < y.length; u++) if (l = this._input.match(this.rules[y[u]]), l && (!d || l[0].length > d[0].length)) {
					if (d = l, p = u, this.options.backtrack_lexer) {
						if (i = this.test_match(l, y[u]), i !== !1) return i;
						if (this._backtrack) {
							d = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return d ? (i = this.test_match(d, y[p]), i !== !1 ? i : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: m(function(d) {
				this.conditionStack.push(d);
			}, "begin"),
			popState: m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: m(function(d) {
				return d = this.conditionStack.length - 1 - Math.abs(d || 0), d >= 0 ? this.conditionStack[d] : "INITIAL";
			}, "topState"),
			pushState: m(function(d) {
				this.begin(d);
			}, "pushState"),
			stateStackSize: m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: m(function(d, l, p, y) {
				switch (p) {
					case 0: break;
					case 1: break;
					case 2: return 13;
					case 3: break;
					case 4: break;
					case 5: return 8;
					case 6: return 9;
					case 7: return 7;
					case 8: return 14;
					case 9: return this.begin("acc_title"), 15;
					case 10: return this.popState(), "acc_title_value";
					case 11: return this.begin("acc_descr"), 17;
					case 12: return this.popState(), "acc_descr_value";
					case 13:
						this.begin("acc_descr_multiline");
						break;
					case 14:
						this.popState();
						break;
					case 15: return "acc_descr_multiline_value";
					case 16: return 20;
					case 17: return 24;
					case 18: return 23;
					case 19: return 6;
					case 20: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:timeline[ \t]+LR\b)/i,
				/^(?:timeline[ \t]+TD\b)/i,
				/^(?:timeline\b)/i,
				/^(?:title\s[^\n]+)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:section\s[^:\n]+)/i,
				/^(?::\s(?:[^:\n]|:(?!\s))+)/i,
				/^(?:[^#:\n]+)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [14, 15],
					inclusive: !1
				},
				acc_descr: {
					rules: [12],
					inclusive: !1
				},
				acc_title: {
					rules: [10],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						11,
						13,
						16,
						17,
						18,
						19,
						20
					],
					inclusive: !0
				}
			}
		};
	})();
	function m$1() {
		this.yy = {};
	}
	return m(m$1, "Parser"), m$1.prototype = g, g.Parser = m$1, new m$1();
})();
at.parser = at;
var _t = at;
var lt = {};
o(lt, {
	addEvent: () => Lt,
	addSection: () => Nt,
	addTask: () => Mt,
	addTaskOrg: () => At,
	clear: () => Tt,
	default: () => Zt,
	getCommonDb: () => St,
	getDirection: () => $t,
	getSections: () => Ht,
	getTasks: () => It,
	setDirection: () => Et
});
var K = "", vt = 0, ot = "LR", ct = [], Y = [], U = [], St = m(() => er, "getCommonDb"), Tt = m(function() {
	ct.length = 0, Y.length = 0, K = "", U.length = 0, ot = "LR", os();
}, "clear"), Et = m(function(e) {
	ot = e;
}, "setDirection"), $t = m(function() {
	return ot;
}, "getDirection"), Nt = m(function(e) {
	K = e, ct.push(e);
}, "addSection"), Ht = m(function() {
	return ct;
}, "getSections"), It = m(function() {
	let e = wt(), t = 100, n = 0;
	for (; !e && n < t;) e = wt(), n++;
	return Y.push(...U), Y;
}, "getTasks"), Mt = m(function(e, t, n) {
	let a = {
		id: vt++,
		section: K,
		type: K,
		task: e,
		score: t || 0,
		events: n ? [n] : []
	};
	U.push(a);
}, "addTask"), Lt = m(function(e) {
	U.find((n) => n.id === vt - 1).events.push(e);
}, "addEvent"), At = m(function(e) {
	let t = {
		section: K,
		type: K,
		description: e,
		task: e,
		classes: []
	};
	Y.push(t);
}, "addTaskOrg"), wt = m(function() {
	let e = m(function(n) {
		return U[n].processed;
	}, "compileTask"), t = !0;
	for (let [n, a] of U.entries()) e(n), t = t && a.processed;
	return t;
}, "compileTasks"), Zt = {
	clear: Tt,
	getCommonDb: St,
	getDirection: $t,
	setDirection: Et,
	addSection: Nt,
	getSections: Ht,
	getTasks: It,
	addTask: Mt,
	addTaskOrg: At,
	addEvent: Lt
};
var Bt = 0, tt = m(function(e, t) {
	let n = e.append("rect");
	return n.attr("x", t.x), n.attr("y", t.y), n.attr("fill", t.fill), n.attr("stroke", t.stroke), n.attr("width", t.width), n.attr("height", t.height), n.attr("rx", t.rx), n.attr("ry", t.ry), t.class !== void 0 && n.attr("class", t.class), n;
}, "drawRect"), qt = m(function(e, t) {
	let a = e.append("circle").attr("cx", t.cx).attr("cy", t.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), r = e.append("g");
	r.append("circle").attr("cx", t.cx - 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), r.append("circle").attr("cx", t.cx + 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
	function h(f) {
		let g = ks().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
		f.append("path").attr("class", "mouth").attr("d", g).attr("transform", "translate(" + t.cx + "," + (t.cy + 2) + ")");
	}
	m(h, "smile");
	function c(f) {
		let g = ks().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
		f.append("path").attr("class", "mouth").attr("d", g).attr("transform", "translate(" + t.cx + "," + (t.cy + 7) + ")");
	}
	m(c, "sad");
	function o(f) {
		f.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", t.cx - 5).attr("y1", t.cy + 7).attr("x2", t.cx + 5).attr("y2", t.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return m(o, "ambivalent"), t.score > 3 ? h(r) : t.score < 3 ? c(r) : o(r), a;
}, "drawFace"), Jt = m(function(e, t) {
	let n = e.append("circle");
	return n.attr("cx", t.cx), n.attr("cy", t.cy), n.attr("class", "actor-" + t.pos), n.attr("fill", t.fill), n.attr("stroke", t.stroke), n.attr("r", t.r), n.class !== void 0 && n.attr("class", n.class), t.title !== void 0 && n.append("title").text(t.title), n;
}, "drawCircle"), Ct = m(function(e, t) {
	let n = t.text.replace(/<br\s*\/?>/gi, " "), a = e.append("text");
	a.attr("x", t.x), a.attr("y", t.y), a.attr("class", "legend"), a.style("text-anchor", t.anchor), t.class !== void 0 && a.attr("class", t.class);
	let r = a.append("tspan");
	return r.attr("x", t.x + t.textMargin * 2), r.text(n), a;
}, "drawText"), Qt = m(function(e, t) {
	function n(r, h, c, o, f) {
		return r + "," + h + " " + (r + c) + "," + h + " " + (r + c) + "," + (h + o - f) + " " + (r + c - f * 1.2) + "," + (h + o) + " " + r + "," + (h + o);
	}
	m(n, "genPoints");
	let a = e.append("polygon");
	a.attr("points", n(t.x, t.y, 50, 20, 7)), a.attr("class", "labelBox"), t.y = t.y + t.labelMargin, t.x = t.x + .5 * t.labelMargin, Ct(e, t);
}, "drawLabel"), Yt = m(function(e, t, n) {
	let a = e.append("g"), r = dt();
	r.x = t.x, r.y = t.y, r.fill = t.fill, r.width = n.width, r.height = n.height, r.class = "journey-section section-type-" + t.num, r.rx = 3, r.ry = 3, tt(a, r), Wt(n)(t.text, a, r.x, r.y, r.width, r.height, { class: "journey-section section-type-" + t.num }, n, t.colour);
}, "drawSection"), ht = -1, te = m(function(e, t, n, a) {
	let r = t.x + n.width / 2, h = e.append("g");
	ht++, h.append("line").attr("id", a + "-task" + ht).attr("x1", r).attr("y1", t.y).attr("x2", r).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), qt(h, {
		cx: r,
		cy: 300 + (5 - t.score) * 30,
		score: t.score
	});
	let o = dt();
	o.x = t.x, o.y = t.y, o.fill = t.fill, o.width = n.width, o.height = n.height, o.class = "task task-type-" + t.num, o.rx = 3, o.ry = 3, tt(h, o), Wt(n)(t.task, h, o.x, o.y, o.width, o.height, { class: "task" }, n, t.colour);
}, "drawTask"), ee = m(function(e, t) {
	tt(e, {
		x: t.startx,
		y: t.starty,
		width: t.stopx - t.startx,
		height: t.stopy - t.starty,
		fill: t.fill,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), ne = m(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		"text-anchor": "start",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0
	};
}, "getTextObj"), dt = m(function() {
	return {
		x: 0,
		y: 0,
		width: 100,
		anchor: "start",
		height: 100,
		rx: 0,
		ry: 0
	};
}, "getNoteRect"), Wt = (function() {
	function e(r, h, c, o, f, g, x, m) {
		a(h.append("text").attr("x", c + f / 2).attr("y", o + g / 2 + 5).style("font-color", m).style("text-anchor", "middle").text(r), x);
	}
	m(e, "byText");
	function t(r, h, c, o, f, g, x, m, b) {
		let { taskFontSize: i, taskFontFamily: d } = m, l = r.split(/<br\s*\/?>/gi);
		for (let p = 0; p < l.length; p++) {
			let y = p * i - i * (l.length - 1) / 2, u = h.append("text").attr("x", c + f / 2).attr("y", o).attr("fill", b).style("text-anchor", "middle").style("font-size", i).style("font-family", d);
			u.append("tspan").attr("x", c + f / 2).attr("dy", y).text(l[p]), u.attr("y", o + g / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), a(u, x);
		}
	}
	m(t, "byTspan");
	function n(r, h, c, o, f, g, x, m) {
		let b = h.append("switch"), d = b.append("foreignObject").attr("x", c).attr("y", o).attr("width", f).attr("height", g).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		d.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(r), t(r, b, c, o, f, g, x, m), a(d, x);
	}
	m(n, "byFo");
	function a(r, h) {
		for (let c in h) c in h && r.attr(c, h[c]);
	}
	return m(a, "_setTextAttrs"), function(r) {
		return r.textPlacement === "fo" ? n : r.textPlacement === "old" ? e : t;
	};
})(), re = m(function(e, t) {
	Bt = 0, ht = -1, e.append("defs").append("marker").attr("id", t + "-arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function Vt(e, t) {
	e.each(function() {
		var n = ia(this), a = n.text().split(/(\s+|<br>)/).reverse(), r, h = [], c = 1.1, o = n.attr("y"), f = parseFloat(n.attr("dy")), g = n.text(null).append("tspan").attr("x", 0).attr("y", o).attr("dy", f + "em");
		for (let x = 0; x < a.length; x++) r = a[a.length - 1 - x], h.push(r), g.text(h.join(" ").trim()), (g.node().getComputedTextLength() > t || r === "<br>") && (h.pop(), g.text(h.join(" ").trim()), r === "<br>" ? h = [""] : h = [r], g = n.append("tspan").attr("x", 0).attr("y", o).attr("dy", c + "em").text(r));
	});
}
m(Vt, "wrap");
var ie = m(function(e, t, n, a, r, h = !1) {
	let { theme: c, look: o } = a, f = c?.includes("redux"), x = n % (a?.themeVariables?.THEME_COLOR_LIMIT ?? 12) - 1, m = e.append("g");
	t.section = x, m.attr("class", (t.class ? t.class + " " : "") + "timeline-node " + ("section-" + x));
	let b = m.append("g"), i = m.append("g"), l = i.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(Vt, t.width).node().getBBox(), p = a.fontSize?.replace ? a.fontSize.replace("px", "") : a.fontSize;
	if (t.height = l.height + p * 1.1 * .5 + t.padding, t.height = Math.max(t.height, t.maxHeight), t.width = t.width + 2 * t.padding, i.attr("transform", "translate(" + t.width / 2 + ", " + t.padding / 2 + ")"), f && i.attr("transform", `translate(${t.width / 2}, ${h ? t.padding / 2 + 3 : t.padding})`), ae(b, t, x, r, a), o === "neo" && (m.attr("data-look", "neo"), f)) {
		let y = c.includes("dark"), v = ia(e.node()?.ownerSVGElement ?? e.node()), k = v.attr("id") ?? "", H = k ? `${k}-drop-shadow` : "drop-shadow";
		if (v.select(`#${H}`).empty()) {
			let V = v.select("defs");
			(V.empty() ? v.append("defs") : V).append("filter").attr("id", H).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", y ? "0.2" : "0.06").attr("flood-color", y ? "#FFFFFF" : "#000000");
		}
	}
	return t;
}, "drawNode"), se = m(function(e, t, n) {
	let a = e.append("g"), h = a.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(Vt, t.width).node().getBBox(), c = n.fontSize?.replace ? n.fontSize.replace("px", "") : n.fontSize;
	return a.remove(), h.height + c * 1.1 * .5 + t.padding;
}, "getVirtualNodeHeight"), ae = m(function(e, t, n, a, r) {
	let { theme: h } = r, c = h?.includes("redux") ? 0 : 5, o = 5, f = c > 0 ? `M0 ${t.height - o} v${-t.height + 2 * o} q0,-${c},${c},-${c} h${t.width - 2 * o} q${c},0,${c},${c} v${t.height - o} H0 Z` : `M0 ${t.height - o} v${-(t.height - o)} h${t.width} v${t.height} H0 Z`;
	e.append("path").attr("id", a + "-node-" + Bt++).attr("class", "node-bkg node-" + t.type).attr("d", f), h?.includes("redux") || e.append("line").attr("class", "node-line-" + n).attr("x1", 0).attr("y1", t.height).attr("x2", t.width).attr("y2", t.height);
}, "defaultBkg"), M = {
	drawRect: tt,
	drawCircle: Jt,
	drawSection: Yt,
	drawText: Ct,
	drawLabel: Qt,
	drawTask: te,
	drawBackgroundRect: ee,
	getTextObj: ne,
	getNoteRect: dt,
	initGraphics: re,
	drawNode: ie,
	getVirtualNodeHeight: se
};
var oe = m(function(e, t, n, a) {
	let r = qo(), { look: h, theme: c, themeVariables: o } = r, { useGradient: f, gradientStart: g, gradientStop: x } = o, m = r.timeline?.leftMargin ?? 50;
	pt.debug("timeline", a.db);
	let b = r.securityLevel, i;
	b === "sandbox" && (i = ia("#i" + t));
	let l = (b === "sandbox" ? ia(i.nodes()[0].contentDocument.body) : ia("body")).select("#" + t);
	l.append("g");
	let p = a.db.getTasks(), y = a.db.getCommonDb().getDiagramTitle();
	pt.debug("task", p), M.initGraphics(l, t);
	let u = a.db.getSections();
	pt.debug("sections", u);
	let v = 0, k = 0, H = 0, V = 0, R = 50 + m, O = 50;
	V = 50;
	let L = 0, C = !0;
	u.forEach(function($) {
		let _ = {
			number: L,
			descr: $,
			section: L,
			width: 150,
			padding: 20,
			maxHeight: v
		}, E = M.getVirtualNodeHeight(l, _, r);
		pt.debug("sectionHeight before draw", E), v = Math.max(v, E + 20);
	});
	let T = 0, B = 0;
	pt.debug("tasks.length", p.length);
	for (let [$, _] of p.entries()) {
		let E = {
			number: $,
			descr: _,
			section: _.section,
			width: 150,
			padding: 20,
			maxHeight: k
		}, S = M.getVirtualNodeHeight(l, E, r);
		pt.debug("taskHeight before draw", S), k = Math.max(k, S + 20), T = Math.max(T, _.events.length);
		let I = 0;
		for (let A of _.events) {
			let N = {
				descr: A,
				section: _.section,
				number: _.section,
				width: 150,
				padding: 20,
				maxHeight: 50
			};
			I += M.getVirtualNodeHeight(l, N, r);
		}
		_.events.length > 0 && (I += (_.events.length - 1) * 10), B = Math.max(B, I);
	}
	pt.debug("maxSectionHeight before draw", v), pt.debug("maxTaskHeight before draw", k), u && u.length > 0 ? u.forEach(($) => {
		let _ = p.filter((A) => A.section === $), E = {
			number: L,
			descr: $,
			section: L,
			width: 200 * Math.max(_.length, 1) - 50,
			padding: 20,
			maxHeight: v
		};
		pt.debug("sectionNode", E);
		let S = l.append("g"), I = M.drawNode(S, E, L, r, t);
		pt.debug("sectionNode output", I), S.attr("transform", `translate(${R}, ${V})`), O += v + 50, _.length > 0 && Rt(l, _, L, R, O, k, r, T, B, v, !1, t), R += 200 * Math.max(_.length, 1), O = V, L++;
	}) : (C = !1, Rt(l, p, L, R, O, k, r, T, B, v, !0, t));
	let P = l.node().getBBox();
	if (pt.debug("bounds", P), y && l.append("text").text(y).attr("x", h === "neo" ? P.x * 2 + m : P.width / 2 - m).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), H = C ? v + k + 150 : k + 100, l.append("g").attr("class", "lineWrapper").append("line").attr("x1", m).attr("y1", H).attr("x2", P.width + 3 * m).attr("y2", H).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", `url(#${t}-arrowhead)`), h === "neo" && f && c !== "neutral") {
		let $ = l.select("defs"), E = ($.empty() ? l.append("defs") : $).append("linearGradient").attr("id", l.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		E.append("stop").attr("offset", "0%").attr("stop-color", g).attr("stop-opacity", 1), E.append("stop").attr("offset", "100%").attr("stop-color", x).attr("stop-opacity", 1);
	}
	Ao(void 0, l, r.timeline?.padding ?? 50, r.timeline?.useMaxWidth ?? !1);
}, "draw"), Rt = m(function(e, t, n, a, r, h, c, o, f, g, x, m) {
	for (let b of t) {
		let i = {
			descr: b.task,
			section: n,
			number: n,
			width: 150,
			padding: 20,
			maxHeight: h
		};
		pt.debug("taskNode", i);
		let d = e.append("g").attr("class", "taskWrapper"), p = M.drawNode(d, i, n, c, m).height;
		if (pt.debug("taskHeight after draw", p), d.attr("transform", `translate(${a}, ${r})`), h = Math.max(h, p), b.events) {
			let y = e.append("g").attr("class", "lineWrapper"), u = h;
			r += 100, u = u + ce(e, b.events, n, a, r, c, m), r -= 100, y.append("line").attr("x1", a + 190 / 2).attr("y1", r + h).attr("x2", a + 190 / 2).attr("y2", r + h + 100 + f + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", `url(#${m}-arrowhead)`).attr("stroke-dasharray", "5,5");
		}
		a = a + 200, x && !c.timeline?.disableMulticolor && n++;
	}
	r = r - 10;
}, "drawTasks"), ce = m(function(e, t, n, a, r, h, c) {
	let o = 0, f = r;
	r = r + 100;
	for (let g of t) {
		let x = {
			descr: g,
			section: n,
			number: n,
			width: 150,
			padding: 20,
			maxHeight: 50
		};
		pt.debug("eventNode", x);
		let m = e.append("g").attr("class", "eventWrapper"), i = M.drawNode(m, x, n, h, c, !0).height;
		o = o + i, m.attr("transform", `translate(${a}, ${r})`), r = r + 10 + i;
	}
	return r = f, o;
}, "drawEvents"), Pt = {
	setConf: m(() => {}, "setConf"),
	draw: oe
};
var et = 200, G = 5, le = et + G * 2, ut = et + 100, he = ut + G * 2, Ot = 10, de = 0, Ft = 20, Dt = 20, Gt = 30, jt = 50, ue = m(function(e, t, n, a) {
	let r = qo(), h = r.timeline?.leftMargin ?? 50;
	pt.debug("timeline", a.db);
	let c = d(t);
	c.append("g");
	let o = a.db.getTasks(), f = a.db.getCommonDb().getDiagramTitle();
	pt.debug("task", o), M.initGraphics(c);
	let g = a.db.getSections();
	pt.debug("sections", g);
	let x = 0, m = 0, b = 50 + h, i = 50, d$1 = i, l = b, p = le + Dt, y = he + jt, u = l + p, v = 0, k = g && g.length > 0, H = k ? u : b + p, V = Math.max(50, p + y - G * 2);
	g.forEach(function($) {
		let _ = {
			number: v,
			descr: $,
			section: v,
			width: V,
			padding: G,
			maxHeight: x
		}, E = M.getVirtualNodeHeight(c, _, r);
		pt.debug("sectionHeight before draw", E), x = Math.max(x, E);
	});
	let R = 0;
	pt.debug("tasks.length", o.length);
	for (let [$, _] of o.entries()) {
		let E = {
			number: $,
			descr: _,
			section: _.section,
			width: et,
			padding: G,
			maxHeight: m
		}, S = M.getVirtualNodeHeight(c, E, r);
		pt.debug("taskHeight before draw", S), m = Math.max(m, S);
		let I = 0;
		for (let A of _.events) {
			let N = {
				descr: A,
				section: _.section,
				number: _.section,
				width: ut,
				padding: G,
				maxHeight: 50
			};
			I += M.getVirtualNodeHeight(c, N, r);
		}
		_.events.length > 0 && (I += (_.events.length - 1) * Ot), R = Math.max(R, I) + de;
	}
	pt.debug("maxSectionHeight before draw", x), pt.debug("maxTaskHeight before draw", m);
	let L = Math.max(m, R) + Gt;
	k ? g.forEach(($) => {
		let _ = o.filter((z) => z.section === $), E = {
			number: v,
			descr: $,
			section: v,
			width: V,
			padding: G,
			maxHeight: x
		};
		pt.debug("sectionNode", E);
		let S = c.append("g"), I = M.drawNode(S, E, v, r);
		pt.debug("sectionNode output", I);
		let A = H - p;
		S.attr("transform", `translate(${A}, ${i})`);
		let N = i + I.height + Ft;
		_.length > 0 && zt(c, _, v, H, N, m, r, L, !1);
		let nt = _.length, X = I.height + Ft + L * Math.max(nt, 1) - (nt > 0 ? Gt * 2 : 0);
		i += X, v++;
	}) : zt(c, o, v, H, i, m, r, L, !0);
	let C = c.node()?.getBBox();
	if (!C) throw new Error("bbox not found");
	if (pt.debug("bounds", C), f) {
		if (c.append("text").text(f).attr("x", C.width / 2 - h).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), C = c.node()?.getBBox(), !C) throw new Error("bbox not found");
		pt.debug("bounds after title", C);
	}
	let [T] = ct$1(r.fontSize), B = (T ?? 16) * 2, P = (T ?? 16) * .5 + 20, D = c.append("g").attr("class", "lineWrapper");
	D.append("line").attr("x1", H).attr("y1", d$1 - B).attr("x2", H).attr("y2", C.y + C.height + P).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), D.lower(), Ao(void 0, c, r.timeline?.padding ?? 50, r.timeline?.useMaxWidth ?? !1);
}, "draw"), zt = m(function(e, t, n, a, r, h, c, o, f) {
	for (let g of t) {
		let x = {
			descr: g.task,
			section: n,
			number: n,
			width: et,
			padding: G,
			maxHeight: h
		};
		pt.debug("taskNode", x);
		let m = e.append("g").attr("class", "taskWrapper"), b = M.drawNode(m, x, n, c), i = b.height;
		pt.debug("taskHeight after draw", i);
		let d = a - Dt - b.width;
		if (m.attr("transform", `translate(${d}, ${r})`), h = Math.max(h, i), g.events && g.events.length > 0) {
			let l = r, p = a + jt;
			pe(e, g.events, n, a, p, l, c);
		}
		r = r + o, f && !c.timeline?.disableMulticolor && n++;
	}
}, "drawTasks"), pe = m(function(e, t, n, a, r, h, c) {
	let o = h;
	for (let f of t) {
		let g = {
			descr: f,
			section: n,
			number: n,
			width: ut,
			padding: G,
			maxHeight: 0
		};
		pt.debug("eventNode", g);
		let x = e.append("g").attr("class", "eventWrapper"), b = M.drawNode(x, g, n, c).height;
		x.attr("transform", `translate(${r}, ${o})`);
		let i = e.append("g").attr("class", "lineWrapper"), d = o + b / 2;
		i.append("line").attr("x1", a).attr("y1", d).attr("x2", r).attr("y2", d).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5"), o = o + b + Ot;
	}
	return o - h;
}, "drawEvents"), Kt = {
	setConf: m(() => {}, "setConf"),
	draw: ue
};
var ge = m((e) => {
	let { theme: t } = It$1(), n = t?.includes("dark"), a = t?.includes("color"), r = e.svgId?.replace(/^#/, "") ?? "", h = r ? `url(#${r}-drop-shadow)` : e.dropShadow ?? "none", c = "";
	for (let o = 0; o < e.THEME_COLOR_LIMIT; o++) {
		let f = `${17 - 3 * o}`, g = a ? e.borderColorArray[o] : e.mainBkg, x = a ? e.borderColorArray[o] : e.nodeBorder;
		c += `
    .section-${o - 1} rect,
    .section-${o - 1} path,
    .section-${o - 1} circle {
      fill: ${n && a ? e.mainBkg : g};
      stroke: ${x};
      stroke-width: ${e.strokeWidth};
      filter: ${h};
    }

    .section-${o - 1} text {
      fill: ${e.nodeBorder};
      font-weight: ${e.fontWeight}
    }

    .node-icon-${o - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + o]};
    }

    .section-edge-${o - 1} {
      stroke: ${e["cScale" + o]};
    }

    .edge-depth-${o - 1} {
      stroke-width: ${f};
    }

    .section-${o - 1} line {
      stroke: ${e["cScaleInv" + o]};
      stroke-width: 3;
    }

    .lineWrapper line {
      stroke: ${e.nodeBorder};
      stroke-width:${e.strokeWidth}
    }

    .disabled,
    .disabled circle,
    .disabled text {
      fill: ${e.tertiaryColor ?? "lightgray"};
    }

    .disabled text {
      fill: ${e.clusterBorder ?? "#efefef"};
    }
    `;
	}
	return c;
}, "genReduxSections"), fe = m((e) => {
	let t = "";
	for (let n$1 = 0; n$1 < e.THEME_COLOR_LIMIT; n$1++) e["lineColor" + n$1] = e["lineColor" + n$1] || e["cScaleInv" + n$1], T(e["lineColor" + n$1]) ? e["lineColor" + n$1] = n(e["lineColor" + n$1], 20) : e["lineColor" + n$1] = c(e["lineColor" + n$1], 20);
	for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) {
		let a = "" + (17 - 3 * n);
		t += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} path  {
      fill: ${e["cScale" + n]};
    }
    .section-${n - 1} text {
     fill: ${e["cScaleLabel" + n]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + n]};
    }
    .section-edge-${n - 1}{
      stroke: ${e["cScale" + n]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${a};
    }
    .section-${n - 1} line {
      stroke: ${e["cScaleInv" + n]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${e["cScaleLabel" + n]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: ${e.tertiaryColor ?? "lightgray"};
    }
    .disabled text {
      fill: ${e.clusterBorder ?? "#efefef"};
    }
    `;
	}
	return t;
}, "genSections"), Ut = m((e) => {
	let { theme: t } = It$1(), n = t?.includes("redux"), a = t === "neutral", r = e.svgId?.replace(/^#/, "") ?? "", h = "";
	if (e.useGradient && r && e.THEME_COLOR_LIMIT && !a) for (let c = 0; c < e.THEME_COLOR_LIMIT; c++) h += `
      .section-${c - 1}[data-look="neo"] rect,
      .section-${c - 1}[data-look="neo"] path,
      .section-${c - 1}[data-look="neo"] circle {
        fill: ${e.mainBkg};
        stroke: url(#${r}-gradient);
        stroke-width: 2;
      }
      .section-${c - 1}[data-look="neo"] line {
        stroke: url(#${r}-gradient);
        stroke-width: 2;
      }`;
	return `
  .edge {
    stroke-width: 3;
  }
  ${n ? ge(e) : fe(e)}
  ${h}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`;
}, "getStyles");
var Ue = {
	db: lt,
	renderer: {
		setConf: m(() => {}, "setConf"),
		draw: m((e, t, n, a) => (a?.db?.getDirection?.() ?? "LR") === "TD" ? Kt.draw(e, t, n, a) : Pt.draw(e, t, n, a), "draw")
	},
	parser: _t,
	styles: Ut
};
//#endregion
export { Ue as diagram };
