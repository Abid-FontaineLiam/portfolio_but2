<!--# Technique
Cette partie permet de présente les savoir-faire et les techniques obtenu à la suite de la réalisation du
stage.

### Trace 1
Création d'un environnement docker pour l'hébergement de l'application

---

Savoir-faire élémentaires : <span style="background-color: green">choisir des composants adaptés aux fonctionnalités requises</span>, <span style="background-color: orange">mettre en place un réseau interne</span>, <span style="background-color: blue">mettre en place de la configuration</span>

---

<ImageComposant src="docker_desktop.png" align="left" width="300px" caption="Interface de Docker Desktop tournant les conteneur de l'application">
<p>
Cette image représente le déploiement de l'application suite à l'execution du fichier docker-compose.yaml.
Docker compose et un moyen d'ordonnées une architecture entre conteneurs Docker, ici un mélange d'image trouvable sur docker.io et de DockerFile sont utiliser pour mettre en place l'ensemble des composants.
C'est même conteneur communique grâce à <span style="background-color: orange">un réseau interne qui marche comme un bridge ou seule les applications authoriser peuvent l'utiliser</span>. En outre, le conteneur application-frontend utilise non seulement le réseau interne mais aussi <span  style="background-color: green">un reverse proxy nommé <a href="https://caddyserver.com">Caddy</a> qui permet de sécuriser les communicatione entre l'utilisateur et le serveur par ajouts de sécurité dans les headers de communications</span>.
<span style="background-color: blue">Des variables d'environnement sont accessible dans le .env et permet de modifier le comportement de chaque
composant en fonction de ce qui et spécifié (numéro de port, images, nom de variables, etc).</span>
Ces même numéro de port son visible dans la section port(s) de la capture d'écran.
</p>
</ImageComposant>

### Trace 2
Création d'une interface utilisateur en VueJS + Vuetify

---

Savoir-faire élémentaires : <span style="background-color: #00C68D">connecter des vue</span>, <span style="background-color: #112E81">utilise le framework vuetify</span>, <span style="background-color: #FF0052">liéer les interface au serveur</span>

---

<ImageComposant src="interface_resp.png" align="right" width="300px" caption="Interface de renseignement des paramètre pour générer une réponse">
<p>
Cette interface et le moyen principale de commmuniquer de formuler une réponse à envoyer au serveur, puis au LLM. D'abord l'utilisateur
doit données le sujet qu'il doit rechercher puis ces critères au minimas dans des text-area. <span style="background-color: #112E81">D'autre fonctionnalité sont possible de paramètrer comme le type de recherche (extension à trouver, langue, date d'intervale) généralement avec des valeurs pré-remplie dans des v-select.</span> Puis une dernière interface pour importer des documents ou utiliser des documents déjà importer dans la réponse.
Ces dernier seront comptées dans la réponse du LMM.
D'autre interface sont disponible mais les plus importante sont à l'écran, il y a aussi la possibilité de choisir les caractèrisique de l'exportation des résultas en .csv (delimiter, nom du fichier), et la possibilité de voir la requête formater dans une dernière interface.
<span style="background-color: #00C68D">Puis une fois que la requête et complète et que l'utilisateur l'envoie <span style="background-color: #FF0052">sa demande une émition dans l'API de socket.io</span> et envoyer grâce au fonction du store utiliser par la vue et le traitement commence dans la boucle principale.</span>
</p>
</ImageComposant>

<ImageComposant src="interface_bdd.png" align="left" width="300px" caption="Interface gestion des données de l'application">
<p>
Cette vue permet de gérer l'ensemble des données utiliser par l'application. En effet lors du traitement de la demande vu ultérieurement, ces données soit, son prompte, des query de recherche, et les documents importer sont stocker dans la base de données MongoDB. Et cette interface et un moyen de communiquer à ce service pour supprimer les données obtenue.
<span style="background-color: #FF0052">Des boutons supplémentaire sont disponible pour ce connecter et déconnecter au serveur et rafraichir les données. </span>
<span style="background-color: #112E81">Toutes les données sont afficher grâce au composant v-table.</span>
</p>
</ImageComposant>

### Trace 3
Mise en place de communication application-serveur

---

Savoir-faire élémentaires : <span style="background-color: #FF62BB">création de communication</span>, <span style="background-color: #077A7D">récupération d'information</span>, <span style="background-color: #06202B">nettoyage des données</span>

---

L'essentielles des communications entre les différents composant sont gérées grâce à au serveur notament en utilisant le framework Express par l'utilisation de URI. Pour des services externe des URL interne on été définit notament pour llama.cpp et SearXNG, surtout dans le paramètrage de Vite pour qu'il reconnaisse ces deux proxy.
L'ensemble des communications API sont basées sur le principe REST.

### Trace 4
Mise en place d'un environnement configurable pour llama.cpp

---

Savoir-faire élémentaires : <span style="background-color: #6367FF">créer un system prompt concis</span>, <span style="background-color: #8A244B">modifier un chat template pour ajouter la configuration</span>, <span style="background-color: #5DD3B6">déployer plusieurs architectures</span>, <span style="background-color: #5A9CB5">paramètrer le composant</span>

---

<ImageComposant src="llama_entrypoint.png" align="left" width="300px" caption="Fichier entrypoint.py montrant les paramètre utilisé pour faire tourner llama-server">
<p>
Un fichier python, permet d'agir comme l'entrypoint du Dockerfile utilisé pour lancer le service llama.cpp, ici l'on peut voir que avant faire tourner l'executable obtenu par la compilation du projet, les paramètre son consitué.
<span style="background-color: #6367FF">D'abord il y a la récolte du system prompte, celui-ci à pour but de spécifier le contexte de travail au LLM en lui donnant des informations sur le type de résultat attentue, comme il doit utiliser les données, quelque règle il doit respecter, etc.</span> <span style="background-color: #8A244B">Après, c'est le chat template modifié qui ce chargeras d'envoyer ces indication. Il y a un point important pour que le LLM récupère des informations qui sont d'actualité il faut lui données la date d'aujourd'hui pour qu'il formule une query qui corresponde bien au attente de l'utilisateur.</span>
Des commentaires sont disponible pour une grande partie des paramètre spécifié pour llama-server, mais certains devront être complété dans le future en fonction de ce que le mainteneur voudra réaliser.
<span style="background-color: #5A9CB5">La possiblité d'implémenter un modèle compatible avec OpenVINO et mit en place, il ne reste plus qu'a spécifier qu'elle modèle.
De facon générale, les paramètres mit en place par défaut vise a garantir un déploiement simple sur un conteneur docker peut importe les ressources allouées. En optimisation l'utilisation des caches en fonction de la quantisation d'un LLM, ou en minimisant l'utilisation des caches kv disponibles ces changement vise à faire tourner de manière natif le modèle utilé.</span>
</p>
</ImageComposant>

### Trace 5
Création d'un système de recherche d'information sur le web

---

Savoir-faire élémentaires : <span style="background-color: #DC0000">utiliser des services web</span>, <span style="background-color: #FF6D1F">récupérer les information importantes</span>

---

### Trace 6
Création de documentation + Swagger

---

Savoir-faire élémentaires : <span style="background-color: #540863">justifier ces sources</span>, <span style="background-color: #8CA9FF">détailler le fonctionnement de composant</span>

---

<ImageComposant src="documentation.png" align="left" width="300px" caption="Interface de la documentation de l'application">
<p>
</p>
</ImageComposant>

<ImageComposant src="swagger_doc.png" align="right" width="300px" caption="Interface swagger de l'application">
<p>
</p>
</ImageComposant>


### Bilan & Évaluation-->

# Technique
Cette partie présente les compétences techniques et les savoir-faire validés lors de la réalisation de mon stage.

### Trace 1
Création d'un environnement docker pour l'hébergement de l'application

---

Savoir-faire élémentaires : <span style="background-color: green; color: white; padding: 2px 5px; border-radius: 3px;">concevoir une architecture multi-conteneurs (Docker Compose)</span>, <span style="background-color: orange; color: white; padding: 2px 5px; border-radius: 3px;">isoler et sécuriser les communications réseau</span>, <span style="background-color: blue; color: white; padding: 2px 5px; border-radius: 3px;">externaliser la configuration via des variables d'environnement</span>

---

<ImageComposant src="docker_desktop.png" align="left" width="300px" caption="Interface de Docker Desktop tournant les conteneur de l'application">
<p>
Cette image représente le déploiement de l'application suite à l'exécution du fichier docker-compose.yaml. Docker Compose est un moyen d'ordonner une architecture multi-conteneurs ; ici, un mélange d'images officielles récupérées sur docker.io et de fichiers Dockerfile personnalisés est utilisé pour mettre en place l'ensemble des composants.

Ces mêmes conteneurs communiquent grâce à <span style="background-color: orange; color: white; padding: 2px 5px;">un réseau interne isolé de type bridge, où seules les applications explicitement autorisées peuvent interagir</span>. En outre, le conteneur application-frontend utilise non seulement ce réseau interne, mais intègre aussi <span style="background-color: green; color: white; padding: 2px 5px;">un reverse proxy nommé <a href="https://caddyserver.com" style="color: white; font-weight: bold;">Caddy</a> qui permet de sécuriser les communications entre l'utilisateur et le serveur par l'ajout de headers de sécurité</span>.

<span style="background-color: blue; color: white; padding: 2px 5px;">Des variables d'environnement sont centralisées dans un fichier .env et permettent de modifier dynamiquement le comportement de chaque composant en fonction des besoins (numéros de ports, versions des images, variables système, etc.).</span> Ces numéros de ports configurés sont directement visibles dans la section "port(s)" de la capture d'écran.
</p>
</ImageComposant>

### Trace 2
Création d'une interface utilisateur en VueJS + Vuetify

---

Savoir-faire élémentaires : <span style="background-color: #00C68D; color: white; padding: 2px 5px;">gérer l'état global et la navigation (Single Page Application)</span>, <span style="background-color: #112E81; color: white; padding: 2px 5px;">développer des composants graphiques avec le framework Vuetify</span>, <span style="background-color: #FF0052; color: white; padding: 2px 5px;">intégrer des flux de données en temps réel avec le serveur</span>

---

<ImageComposant src="interface_resp.png" align="right" width="300px" caption="Interface de renseignement des paramètre pour générer une réponse">
<p>
Cette interface est le moyen principal pour l'utilisateur de formuler une requête structurée à envoyer au serveur, puis au LLM. L'utilisateur doit d'abord renseigner le sujet de sa recherche ainsi que ses critères principaux dans des champs de saisie (text-area). <span style="background-color: #112E81; color: white; padding: 2px 5px;">D'autres fonctionnalités de filtrage sont paramétrables (extensions de fichiers, langue, intervalle de dates) et exploitent des valeurs pré-remplies à travers le composant v-select de Vuetify.</span> Enfin, un dernier module permet d'importer de nouveaux documents ou d'associer des fichiers déjà existants pour qu'ils soient pris en compte dans le contexte du LLM.

Bien que d'autres vues soient disponibles, les fonctionnalités majeures sont regroupées ici, incluant la possibilité de configurer l'export des résultats en format .csv (choix du délimiteur, nom du fichier) ou encore de visualiser la requête finale formatée.

<span style="background-color: #00C68D; color: white; padding: 2px 5px;">Dès que la requête est complète et que l'utilisateur la valide, <span style="background-color: #FF0052; color: white; padding: 2px 5px;">l'action déclenche instantanément une émission d'événement via l'API Socket.io</span>. Cette transmission est gérée par les fonctions du Store Pinia utilisées par la vue, initiant ainsi le traitement asynchrone dans la boucle principale du backend.</span>
</p>
</ImageComposant>

<ImageComposant src="interface_bdd.png" align="left" width="300px" caption="Interface gestion des données de l'application">
<p>
Cette vue permet de piloter l'ensemble des données exploitées par l'application. En effet, lors du traitement des requêtes, les éléments clés (prompts, requêtes de recherche, documents importés) sont persistés dans une base de données NoSQL MongoDB. Cette interface offre un moyen de communiquer directement avec ce service pour administrer ou supprimer les données stockées.

<span style="background-color: #FF0052; color: white; padding: 2px 5px;">Des boutons d'action supplémentaires sont intégrés pour gérer la connexion/déconnexion au serveur et forcer le rafraîchissement des informations en temps réel.</span> <span style="background-color: #112E81; color: white; padding: 2px 5px;">Toutes ces données tabulaires sont structurées et affichées de manière fluide grâce au composant v-table de Vuetify.</span>
</p>
</ImageComposant>

### Trace 3
Mise en place de communication application-serveur

---

Savoir-faire élémentaires : <span style="background-color: #FF62BB; color: white; padding: 2px 5px;">développer une API Web (Framework Express)</span>, <span style="background-color: #077A7D; color: white; padding: 2px 5px;">consommer des services tiers et configurer des proxys</span>, <span style="background-color: #06202B; color: white; padding: 2px 5px;">valider et nettoyer les flux de données (Parsing)</span>

---

L'essentiel des communications entre les différents composants est orchestré par le serveur backend en utilisant le framework Express.js et la mise en place d'URI dédiées. Pour interagir avec les services externes de manière transparente, des URL internes ont été définies, notamment pour router les requêtes vers llama.cpp et le métamoteur SearXNG. Cette intégration a nécessité le paramétrage de l'outil de build Vite afin qu'il reconnaisse et gère correctement ces deux proxys de développement, évitant ainsi les blocages de sécurité liés au CORS. L'ensemble des échanges applicatifs respecte les principes de l'architecture REST.

### Trace 4
Mise en place d'un environnement configurable pour llama.cpp

---

Savoir-faire élémentaires : <span style="background-color: #6367FF; color: white; padding: 2px 5px;">rédiger et structurer un prompt système (System Prompt)</span>, <span style="background-color: #8A244B; color: white; padding: 2px 5px;">adapter un format de discussion (Chat Template) dynamique</span>, <span style="background-color: #5DD3B6; color: white; padding: 2px 5px;">assurer la portabilité du déploiement multi-architectures</span>, <span style="background-color: #5A9CB5; color: white; padding: 2px 5px;">optimiser les performances d'exécution du modèle (Cache KV)</span>

---

<ImageComposant src="llama_entrypoint.png" align="left" width="300px" caption="Fichier entrypoint.py montrant les paramètre utilisé pour faire tourner llama-server">
<p>
Un script Python fait office de point d'entrée (entrypoint) dans le Dockerfile conçu pour démarrer le service llama.cpp. Comme on peut le constater sur le code, les arguments de configuration requis sont assemblés avant l'exécution du binaire de llama-server (obtenu après compilation du projet).

<span style="background-color: #6367FF; color: white; padding: 2px 5px;">Dans un premier temps, le script récupère le Prompt Système. Celui-ci a pour rôle de définir le cadre de travail du LLM en lui spécifiant son contexte, la nature des résultats attendus, les règles d'utilisation des données ou encore les contraintes de comportement à respecter.</span> <span style="background-color: #8A244B; color: white; padding: 2px 5px;">Par la suite, un Chat Template personnalisé se charge d'encapsuler ces directives. Un mécanisme crucial y a été injecté : la transmission de la date du jour en temps réel. Cette donnée temporelle permet au LLM de formuler des requêtes de recherche web cohérentes avec l'actualité.</span>

Des commentaires détaillés documentent la majorité des paramètres transmis à llama-server, facilitant ainsi la maintenance future si de nouvelles options doivent être ajoutées.

<span style="background-color: #5A9CB5; color: white; padding: 2px 5px;">De plus, l'infrastructure prend en charge l'implémentation de modèles optimisés via OpenVINO pour accélérer les calculs sur architecture Intel. De manière générale, les configurations par défaut ont été optimisées pour garantir un déploiement stable sur conteneur Docker, peu importe les ressources matérielles allouées. En ajustant la gestion des caches KV (Key-Value) et en prenant en compte la quantification du modèle, ces réglages permettent une exécution native et peu coûteuse de l'IA. (Environs 40W par prompts)</span>
</p>
</ImageComposant>

### Trace 5
Création d'un système de recherche d'information sur le web (RAG)

---

Savoir-faire élémentaires : <span style="background-color: #DC0000; color: white; padding: 2px 5px;">interroger un métamoteur de recherche via une API</span>, <span style="background-color: #FF6D1F; color: white; padding: 2px 5px;">extraire et filtrer le contenu pertinent d'une page Web</span>

---

Afin de pallier la limite de connaissances temporelles du modèle de langage, j'ai mis au point un module de recherche web basé sur le principe du RAG (Retrieval-Augmented Generation). Le serveur formule des requêtes de recherche automatiques et interroge l'API du métamoteur open source SearXNG. Une fois les URL récupérées, le système extrait le contenu textuel brut des pages cibles, filtre les éléments parasites (publicités, balises HTML de navigation) et nettoie la donnée pour ne transmettre que les informations hautement pertinentes au contexte du LLM.

### Trace 6
Création de documentation + Swagger

---

Savoir-faire élémentaires : <span style="background-color: #540863; color: white; padding: 2px 5px;">rédiger une documentation d'architecture technique</span>, <span style="background-color: #8CA9FF; color: white; padding: 2px 5px;">documenter et tester une API (Spécification OpenAPI)</span>

---

<ImageComposant src="documentation.png" align="left" width="300px" caption="Interface de la documentation de l'application">
<p>
Pour assurer la maintenabilité et la reprise du projet, j'ai conçu une documentation technique complète à destination des futurs développeurs et administrateurs. Celle-ci explicite les choix technologiques, le schéma de l'architecture réseau multi-conteneurs, les configuration de l'application, ainsi que ces possiblitées d'optimisation future.
<span style="background-color: #540863; color: white; padding: 2px 5px;">En effet, grâce à un mélange de textes descriptives et de schéma proposer par le framework mermaid l'ensemble des fonctionnalitées de l'application on pu être expliquées.</span>
</p>
</ImageComposant>

<ImageComposant src="swagger_doc.png" align="right" width="300px" caption="Interface swagger de l'application">
<p>
En parallèle, j'ai intégré la spécification OpenAPI (via Swagger UI) au sein du serveur Express. <span style="background-color: #8CA9FF; color: white; padding: 2px 5px;">Cela permet de générer automatiquement une documentation interactive et normalisée pour l'ensemble de l'API REST</span>. Cette interface liste de manière exhaustive les points d'accès (endpoints), les structures de données attendues en entrée (requêtes JSON) ainsi que les formats de réponses renvoyés par le serveur, simplifiant grandement les phases de test et d'intégration.
</p>
</ImageComposant>