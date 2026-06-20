import { a as INSPECTOR_NODES, c as PLUGIN_LABEL, d as setupDevToolsPlugin, i as INSPECTOR_LABEL, n as COMPONENT_STATE_TYPE, o as INSPECTOR_STATE_SECTION_NAME, r as INSPECTOR_ID, s as PLUGIN_ID, x as watch } from "./app-B7sz6Vtc.js";
//#region node_modules/.pnpm/@vuepress+client@2.0.0-rc.30_@vue+compiler-sfc@3.5.38_vite@8.0.16_@types+node@25.9.3_esbuild@_h2szszbgljdwlxm5lpem32cxh4/node_modules/@vuepress/client/dist/setupDevtools-B3cgI7XH.js
var setupDevtools = (app, clientData) => {
	setupDevToolsPlugin({
		app,
		id: PLUGIN_ID,
		label: PLUGIN_LABEL,
		packageName: "@vuepress/client",
		homepage: "https://vuepress.vuejs.org",
		logo: "https://vuepress.vuejs.org/images/hero.png",
		componentStateTypes: [COMPONENT_STATE_TYPE]
	}, (api) => {
		const clientDataEntries = Object.entries(clientData);
		const clientDataKeys = Object.keys(clientData);
		const clientDataValues = Object.values(clientData);
		api.on.inspectComponent((payload) => {
			payload.instanceData.state.push(...clientDataEntries.map(([name, item]) => ({
				type: COMPONENT_STATE_TYPE,
				editable: false,
				key: name,
				value: item.value
			})));
		});
		api.addInspector({
			id: INSPECTOR_ID,
			label: INSPECTOR_LABEL,
			icon: "article"
		});
		api.on.getInspectorTree((payload) => {
			if (payload.inspectorId !== "org.vuejs.vuepress") return;
			payload.rootNodes = Object.values(INSPECTOR_NODES).map((node) => ({
				id: node.id,
				label: node.label,
				children: node.keys.map((key) => ({
					id: key,
					label: key
				}))
			}));
		});
		api.on.getInspectorState((payload) => {
			if (payload.inspectorId !== "org.vuejs.vuepress") return;
			const inspectorNode = INSPECTOR_NODES[payload.nodeId];
			if (inspectorNode) {
				payload.state = { [inspectorNode.label]: inspectorNode.keys.map((key) => ({
					key,
					value: clientData[key].value
				})) };
				return;
			}
			if (clientDataKeys.includes(payload.nodeId)) payload.state = { [INSPECTOR_STATE_SECTION_NAME]: [{
				key: payload.nodeId,
				value: clientData[payload.nodeId].value
			}] };
		});
		watch(clientDataValues, () => {
			api.notifyComponentUpdate();
			api.sendInspectorState(INSPECTOR_ID);
		});
	});
};
//#endregion
export { setupDevtools };
