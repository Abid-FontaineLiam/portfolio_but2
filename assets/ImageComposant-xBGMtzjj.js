import { C as normalizeClass, T as toDisplayString, f as createBaseVNode, l as withBase, m as createElementBlock, p as createCommentVNode, t as _plugin_vue_export_helper_default, v as openBlock, w as normalizeStyle, y as renderSlot } from "./app-B7sz6Vtc.js";
//#region docs/.vuepress/components/ImageComposant.vue
var _sfc_main = /*@__PURE__*/ Object.assign({
	props: {
		src: String,
		caption: String,
		width: [String, Number],
		align: {
			type: String,
			default: "left"
		},
		bgColor: {
			type: String,
			default: "transparent"
		}
	},
	computed: {
		imagesrc() {
			return withBase("/assets/" + this.src);
		},
		containerStyle() {
			if (this.align === "center") return { backgroundColor: this.bgColor };
			return {};
		}
	}
}, {
	__name: "ImageComposant",
	setup(__props, { expose: __expose }) {
		__expose();
		const __returned__ = { get withBase() {
			return withBase;
		} };
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _hoisted_1 = ["src"];
var _hoisted_2 = { key: 0 };
var _hoisted_3 = {
	key: 0,
	class: "media-text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", {
		class: normalizeClass(["media-component", `align-${$props.align}`]),
		style: normalizeStyle($options.containerStyle)
	}, [createBaseVNode("figure", { style: normalizeStyle({ width: $props.width }) }, [createBaseVNode("img", {
		src: $options.imagesrc,
		alt: ""
	}, null, 8, _hoisted_1), $props.caption ? (openBlock(), createElementBlock("figcaption", _hoisted_2, "Légende: " + toDisplayString($props.caption), 1)) : createCommentVNode("", true)], 4), _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_3, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])) : createCommentVNode("", true)], 6);
}
var ImageComposant_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [
	["render", _sfc_render],
	["__scopeId", "data-v-67126ef3"],
	["__file", "ImageComposant.vue"]
]);
//#endregion
export { ImageComposant_default as default };
