import { n, t as m } from "./chunk-AQ6EADP3-qIXSNQLA.js";
//#region node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.esm.min/chunk-KNLZD3CH.mjs
var g = n((e) => {
	"use strict";
	Object.defineProperty(e, "__esModule", { value: !0 });
	e.BLANK_URL = e.relativeFirstCharacters = e.whitespaceEscapeCharsRegex = e.urlSchemeRegex = e.ctrlCharactersRegex = e.htmlCtrlEntityRegex = e.htmlEntitiesRegex = e.invalidProtocolRegex = void 0;
	e.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
	e.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
	e.htmlCtrlEntityRegex = /&(newline|tab);/gi;
	e.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
	e.urlSchemeRegex = /^.+(:|&colon;)/gim;
	e.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
	e.relativeFirstCharacters = [".", "/"];
	e.BLANK_URL = "about:blank";
});
var f = n((h) => {
	"use strict";
	Object.defineProperty(h, "__esModule", { value: !0 });
	h.sanitizeUrl = void 0;
	var t = g();
	function v(r) {
		return t.relativeFirstCharacters.indexOf(r[0]) > -1;
	}
	m(v, "isRelativeUrlWithoutProtocol");
	function x(r) {
		return r.replace(t.ctrlCharactersRegex, "").replace(t.htmlEntitiesRegex, function(a, i) {
			return String.fromCharCode(i);
		});
	}
	m(x, "decodeHtmlCharacters");
	function C(r) {
		return URL.canParse(r);
	}
	m(C, "isValidUrl");
	function d(r) {
		try {
			return decodeURIComponent(r);
		} catch {
			return r;
		}
	}
	m(d, "decodeURI");
	function p(r) {
		if (!r) return t.BLANK_URL;
		var c, a = d(r.trim());
		do
			a = x(a).replace(t.htmlCtrlEntityRegex, "").replace(t.ctrlCharactersRegex, "").replace(t.whitespaceEscapeCharsRegex, "").trim(), a = d(a), c = a.match(t.ctrlCharactersRegex) || a.match(t.htmlEntitiesRegex) || a.match(t.htmlCtrlEntityRegex) || a.match(t.whitespaceEscapeCharsRegex);
		while (c && c.length > 0);
		var i = a;
		if (!i) return t.BLANK_URL;
		if (v(i)) return i;
		var u = i.trimStart(), m = u.match(t.urlSchemeRegex);
		if (!m) return i;
		var l = m[0].toLowerCase().trim();
		if (t.invalidProtocolRegex.test(l)) return t.BLANK_URL;
		var s = u.replace(/\\/g, "/");
		if (l === "mailto:" || l.includes("://")) return s;
		if (l === "http:" || l === "https:") {
			if (!C(s)) return t.BLANK_URL;
			var o = new URL(s);
			return o.protocol = o.protocol.toLowerCase(), o.hostname = o.hostname.toLowerCase(), o.toString();
		}
		return s;
	}
	m(p, "sanitizeUrl");
	h.sanitizeUrl = p;
});
//#endregion
export { f as t };
