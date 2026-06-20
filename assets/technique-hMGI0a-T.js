import { S as withCtx, _ as createVNode, b as resolveComponent, f as createBaseVNode, g as createTextVNode, h as createStaticVNode, m as createElementBlock, t as _plugin_vue_export_helper_default, v as openBlock } from "./app-B7sz6Vtc.js";
//#region docs/pages/technique.md
var _pageData = JSON.parse("{\"path\":\"/pages/technique.html\",\"title\":\"Technique\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"contributors\":[{\"name\":\"liamabidfontaine\",\"username\":\"liamabidfontaine\",\"email\":\"liam.abid--fontaine@edu.univ-fcomte.fr\",\"commits\":3,\"url\":\"https://github.com/liamabidfontaine\"}],\"changelog\":[{\"hash\":\"281cb6d023dd08ff76f55865fa6fafab3d2e4f19\",\"time\":1781553666000,\"email\":\"liam.abid--fontaine@edu.univ-fcomte.fr\",\"author\":\"liamabidfontaine\",\"message\":\"Ajouts total du brouillon du portfolio\"},{\"hash\":\"050424b64a0773e5d1cbad4caabaa294b50314c5\",\"time\":1781539141000,\"email\":\"liam.abid--fontaine@edu.univ-fcomte.fr\",\"author\":\"liamabidfontaine\",\"message\":\"Mise à Jour #5\"},{\"hash\":\"3f5b25e676f855adb206635b7a83a47f2a54b8f5\",\"time\":1781444926000,\"email\":\"liam.abid--fontaine@edu.univ-fcomte.fr\",\"author\":\"liamabidfontaine\",\"message\":\"Ajouts de la base du portfolio\"}]},\"filePathRelative\":\"pages/technique.md\"}");
var _sfc_main = { name: "technique.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ImageComposant = resolveComponent("ImageComposant");
	return openBlock(), createElementBlock("div", null, [
		_cache[6] || (_cache[6] = createStaticVNode("<h1 id=\"technique\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#technique\"><span>Technique</span></a></h1><p>Cette partie présente les compétences techniques et les savoir-faire validés lors de la réalisation de mon stage.</p><h3 id=\"trace-1\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trace-1\"><span>Trace 1</span></a></h3><p>Création d&#39;un environnement docker pour l&#39;hébergement de l&#39;application</p><hr><p>Savoir-faire élémentaires : <span style=\"background-color:green;color:white;padding:2px 5px;border-radius:3px;\">concevoir une architecture multi-conteneurs (Docker Compose)</span>, <span style=\"background-color:orange;color:white;padding:2px 5px;border-radius:3px;\">isoler et sécuriser les communications réseau</span>, <span style=\"background-color:blue;color:white;padding:2px 5px;border-radius:3px;\">externaliser la configuration via des variables d&#39;environnement</span></p><hr>", 7)),
		createVNode(_component_ImageComposant, {
			src: "docker_desktop.png",
			align: "left",
			width: "300px",
			caption: "Interface de Docker Desktop tournant les conteneur de l'application"
		}, {
			default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("p", null, [
				createTextVNode(" Cette image représente le déploiement de l'application suite à l'exécution du fichier docker-compose.yaml. Docker Compose est un moyen d'ordonner une architecture multi-conteneurs ; ici, un mélange d'images officielles récupérées sur docker.io et de fichiers Dockerfile personnalisés est utilisé pour mettre en place l'ensemble des composants. "),
				createBaseVNode("p", null, [
					createTextVNode("Ces mêmes conteneurs communiquent grâce à "),
					createBaseVNode("span", { style: {
						"background-color": "orange",
						"color": "white",
						"padding": "2px 5px"
					} }, "un réseau interne isolé de type bridge, où seules les applications explicitement autorisées peuvent interagir"),
					createTextVNode(". En outre, le conteneur application-frontend utilise non seulement ce réseau interne, mais intègre aussi "),
					createBaseVNode("span", { style: {
						"background-color": "green",
						"color": "white",
						"padding": "2px 5px"
					} }, [
						createTextVNode("un reverse proxy nommé "),
						createBaseVNode("a", {
							href: "https://caddyserver.com",
							style: {
								"color": "white",
								"font-weight": "bold"
							}
						}, "Caddy"),
						createTextVNode(" qui permet de sécuriser les communications entre l'utilisateur et le serveur par l'ajout de headers de sécurité")
					]),
					createTextVNode(".")
				]),
				createBaseVNode("p", null, [createBaseVNode("span", { style: {
					"background-color": "blue",
					"color": "white",
					"padding": "2px 5px"
				} }, "Des variables d'environnement sont centralisées dans un fichier .env et permettent de modifier dynamiquement le comportement de chaque composant en fonction des besoins (numéros de ports, versions des images, variables système, etc.)."), createTextVNode(" Ces numéros de ports configurés sont directement visibles dans la section \"port(s)\" de la capture d'écran.")])
			], -1)])]),
			_: 1
		}),
		_cache[7] || (_cache[7] = createStaticVNode("<h3 id=\"trace-2\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trace-2\"><span>Trace 2</span></a></h3><p>Création d&#39;une interface utilisateur en VueJS + Vuetify</p><hr><p>Savoir-faire élémentaires : <span style=\"background-color:#00C68D;color:white;padding:2px 5px;\">gérer l&#39;état global et la navigation (Single Page Application)</span>, <span style=\"background-color:#112E81;color:white;padding:2px 5px;\">développer des composants graphiques avec le framework Vuetify</span>, <span style=\"background-color:#FF0052;color:white;padding:2px 5px;\">intégrer des flux de données en temps réel avec le serveur</span></p><hr>", 5)),
		createVNode(_component_ImageComposant, {
			src: "interface_resp.png",
			align: "right",
			width: "300px",
			caption: "Interface de renseignement des paramètre pour générer une réponse"
		}, {
			default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("p", null, [
				createTextVNode(" Cette interface est le moyen principal pour l'utilisateur de formuler une requête structurée à envoyer au serveur, puis au LLM. L'utilisateur doit d'abord renseigner le sujet de sa recherche ainsi que ses critères principaux dans des champs de saisie (text-area). "),
				createBaseVNode("span", { style: {
					"background-color": "#112E81",
					"color": "white",
					"padding": "2px 5px"
				} }, "D'autres fonctionnalités de filtrage sont paramétrables (extensions de fichiers, langue, intervalle de dates) et exploitent des valeurs pré-remplies à travers le composant v-select de Vuetify."),
				createTextVNode(" Enfin, un dernier module permet d'importer de nouveaux documents ou d'associer des fichiers déjà existants pour qu'ils soient pris en compte dans le contexte du LLM. "),
				createBaseVNode("p", null, "Bien que d'autres vues soient disponibles, les fonctionnalités majeures sont regroupées ici, incluant la possibilité de configurer l'export des résultats en format .csv (choix du délimiteur, nom du fichier) ou encore de visualiser la requête finale formatée."),
				createBaseVNode("p", null, [createBaseVNode("span", { style: {
					"background-color": "#00C68D",
					"color": "white",
					"padding": "2px 5px"
				} }, [
					createTextVNode("Dès que la requête est complète et que l'utilisateur la valide, "),
					createBaseVNode("span", { style: {
						"background-color": "#FF0052",
						"color": "white",
						"padding": "2px 5px"
					} }, "l'action déclenche instantanément une émission d'événement via l'API Socket.io"),
					createTextVNode(". Cette transmission est gérée par les fonctions du Store Pinia utilisées par la vue, initiant ainsi le traitement asynchrone dans la boucle principale du backend.")
				])])
			], -1)])]),
			_: 1
		}),
		createVNode(_component_ImageComposant, {
			src: "interface_bdd.png",
			align: "left",
			width: "300px",
			caption: "Interface gestion des données de l'application"
		}, {
			default: withCtx(() => [..._cache[2] || (_cache[2] = [createBaseVNode("p", null, [createTextVNode(" Cette vue permet de piloter l'ensemble des données exploitées par l'application. En effet, lors du traitement des requêtes, les éléments clés (prompts, requêtes de recherche, documents importés) sont persistés dans une base de données NoSQL MongoDB. Cette interface offre un moyen de communiquer directement avec ce service pour administrer ou supprimer les données stockées. "), createBaseVNode("p", null, [
				createBaseVNode("span", { style: {
					"background-color": "#FF0052",
					"color": "white",
					"padding": "2px 5px"
				} }, "Des boutons d'action supplémentaires sont intégrés pour gérer la connexion/déconnexion au serveur et forcer le rafraîchissement des informations en temps réel."),
				createTextVNode(),
				createBaseVNode("span", { style: {
					"background-color": "#112E81",
					"color": "white",
					"padding": "2px 5px"
				} }, "Toutes ces données tabulaires sont structurées et affichées de manière fluide grâce au composant v-table de Vuetify.")
			])], -1)])]),
			_: 1
		}),
		_cache[8] || (_cache[8] = createStaticVNode("<h3 id=\"trace-3\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trace-3\"><span>Trace 3</span></a></h3><p>Mise en place de communication application-serveur</p><hr><p>Savoir-faire élémentaires : <span style=\"background-color:#FF62BB;color:white;padding:2px 5px;\">développer une API Web (Framework Express)</span>, <span style=\"background-color:#077A7D;color:white;padding:2px 5px;\">consommer des services tiers et configurer des proxys</span>, <span style=\"background-color:#06202B;color:white;padding:2px 5px;\">valider et nettoyer les flux de données (Parsing)</span></p><hr><p>L&#39;essentiel des communications entre les différents composants est orchestré par le serveur backend en utilisant le framework Express.js et la mise en place d&#39;URI dédiées. Pour interagir avec les services externes de manière transparente, des URL internes ont été définies, notamment pour router les requêtes vers llama.cpp et le métamoteur SearXNG. Cette intégration a nécessité le paramétrage de l&#39;outil de build Vite afin qu&#39;il reconnaisse et gère correctement ces deux proxys de développement, évitant ainsi les blocages de sécurité liés au CORS. L&#39;ensemble des échanges applicatifs respecte les principes de l&#39;architecture REST.</p><h3 id=\"trace-4\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trace-4\"><span>Trace 4</span></a></h3><p>Mise en place d&#39;un environnement configurable pour llama.cpp</p><hr><p>Savoir-faire élémentaires : <span style=\"background-color:#6367FF;color:white;padding:2px 5px;\">rédiger et structurer un prompt système (System Prompt)</span>, <span style=\"background-color:#8A244B;color:white;padding:2px 5px;\">adapter un format de discussion (Chat Template) dynamique</span>, <span style=\"background-color:#5DD3B6;color:white;padding:2px 5px;\">assurer la portabilité du déploiement multi-architectures</span>, <span style=\"background-color:#5A9CB5;color:white;padding:2px 5px;\">optimiser les performances d&#39;exécution du modèle (Cache KV)</span></p><hr>", 11)),
		createVNode(_component_ImageComposant, {
			src: "llama_entrypoint.png",
			align: "left",
			width: "300px",
			caption: "Fichier entrypoint.py montrant les paramètre utilisé pour faire tourner llama-server"
		}, {
			default: withCtx(() => [..._cache[3] || (_cache[3] = [createBaseVNode("p", null, [
				createTextVNode(" Un script Python fait office de point d'entrée (entrypoint) dans le Dockerfile conçu pour démarrer le service llama.cpp. Comme on peut le constater sur le code, les arguments de configuration requis sont assemblés avant l'exécution du binaire de llama-server (obtenu après compilation du projet). "),
				createBaseVNode("p", null, [
					createBaseVNode("span", { style: {
						"background-color": "#6367FF",
						"color": "white",
						"padding": "2px 5px"
					} }, "Dans un premier temps, le script récupère le Prompt Système. Celui-ci a pour rôle de définir le cadre de travail du LLM en lui spécifiant son contexte, la nature des résultats attendus, les règles d'utilisation des données ou encore les contraintes de comportement à respecter."),
					createTextVNode(),
					createBaseVNode("span", { style: {
						"background-color": "#8A244B",
						"color": "white",
						"padding": "2px 5px"
					} }, "Par la suite, un Chat Template personnalisé se charge d'encapsuler ces directives. Un mécanisme crucial y a été injecté : la transmission de la date du jour en temps réel. Cette donnée temporelle permet au LLM de formuler des requêtes de recherche web cohérentes avec l'actualité.")
				]),
				createBaseVNode("p", null, "Des commentaires détaillés documentent la majorité des paramètres transmis à llama-server, facilitant ainsi la maintenance future si de nouvelles options doivent être ajoutées."),
				createBaseVNode("p", null, [createBaseVNode("span", { style: {
					"background-color": "#5A9CB5",
					"color": "white",
					"padding": "2px 5px"
				} }, "De plus, l'infrastructure prend en charge l'implémentation de modèles optimisés via OpenVINO pour accélérer les calculs sur architecture Intel. De manière générale, les configurations par défaut ont été optimisées pour garantir un déploiement stable sur conteneur Docker, peu importe les ressources matérielles allouées. En ajustant la gestion des caches KV (Key-Value) et en prenant en compte la quantification du modèle, ces réglages permettent une exécution native et peu coûteuse de l'IA. (Environs 40W par prompts)")])
			], -1)])]),
			_: 1
		}),
		_cache[9] || (_cache[9] = createStaticVNode("<h3 id=\"trace-5\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trace-5\"><span>Trace 5</span></a></h3><p>Création d&#39;un système de recherche d&#39;information sur le web (RAG)</p><hr><p>Savoir-faire élémentaires : <span style=\"background-color:#DC0000;color:white;padding:2px 5px;\">interroger un métamoteur de recherche via une API</span>, <span style=\"background-color:#FF6D1F;color:white;padding:2px 5px;\">extraire et filtrer le contenu pertinent d&#39;une page Web</span></p><hr><p>Afin de pallier la limite de connaissances temporelles du modèle de langage, j&#39;ai mis au point un module de recherche web basé sur le principe du RAG (Retrieval-Augmented Generation). Le serveur formule des requêtes de recherche automatiques et interroge l&#39;API du métamoteur open source SearXNG. Une fois les URL récupérées, le système extrait le contenu textuel brut des pages cibles, filtre les éléments parasites (publicités, balises HTML de navigation) et nettoie la donnée pour ne transmettre que les informations hautement pertinentes au contexte du LLM.</p><h3 id=\"trace-6\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trace-6\"><span>Trace 6</span></a></h3><p>Création de documentation + Swagger</p><hr><p>Savoir-faire élémentaires : <span style=\"background-color:#540863;color:white;padding:2px 5px;\">rédiger une documentation d&#39;architecture technique</span>, <span style=\"background-color:#8CA9FF;color:white;padding:2px 5px;\">documenter et tester une API (Spécification OpenAPI)</span></p><hr>", 11)),
		createVNode(_component_ImageComposant, {
			src: "documentation.png",
			align: "left",
			width: "300px",
			caption: "Interface de la documentation de l'application"
		}, {
			default: withCtx(() => [..._cache[4] || (_cache[4] = [createBaseVNode("p", null, [createTextVNode(" Pour assurer la maintenabilité et la reprise du projet, j'ai conçu une documentation technique complète à destination des futurs développeurs et administrateurs. Celle-ci explicite les choix technologiques, le schéma de l'architecture réseau multi-conteneurs, les configuration de l'application, ainsi que ces possiblitées d'optimisation future. "), createBaseVNode("span", { style: {
				"background-color": "#540863",
				"color": "white",
				"padding": "2px 5px"
			} }, "En effet, grâce à un mélange de textes descriptives et de schéma proposer par le framework mermaid l'ensemble des fonctionnalitées de l'application on pu être expliquées.")], -1)])]),
			_: 1
		}),
		createVNode(_component_ImageComposant, {
			src: "swagger_doc.png",
			align: "right",
			width: "300px",
			caption: "Interface swagger de l'application"
		}, {
			default: withCtx(() => [..._cache[5] || (_cache[5] = [createBaseVNode("p", null, [
				createTextVNode(" En parallèle, j'ai intégré la spécification OpenAPI (via Swagger UI) au sein du serveur Express. "),
				createBaseVNode("span", { style: {
					"background-color": "#8CA9FF",
					"color": "white",
					"padding": "2px 5px"
				} }, "Cela permet de générer automatiquement une documentation interactive et normalisée pour l'ensemble de l'API REST"),
				createTextVNode(". Cette interface liste de manière exhaustive les points d'accès (endpoints), les structures de données attendues en entrée (requêtes JSON) ainsi que les formats de réponses renvoyés par le serveur, simplifiant grandement les phases de test et d'intégration. ")
			], -1)])]),
			_: 1
		})
	]);
}
var technique_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "technique.md"]]);
//#endregion
export { _pageData, technique_default as default };
