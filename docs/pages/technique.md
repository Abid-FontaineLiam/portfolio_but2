# Technique
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
D'abord il y a la récolte du system prompte, celui-ci à pour but de spécifier le contexte de travail au LLM en lui donnant des informations sur le type de résultat attentue, comme il doit utiliser les données, quelque règle il doit respecter, etc. Après, c'est le chat template modifié qui ce chargeras d'envoyer ces indication. Il y a un point important pour que le LLM récupère des informations qui sont d'actualité il faut lui données la date d'aujourd'hui pour qu'il formule une query qui corresponde bien au attente de l'utilisateur.
Des commentaires sont disponible pour une grande partie des paramètre spécifié pour llama-server, mais certains devront être complété dans le future en fonction de ce que le mainteneur voudra réaliser.
La possiblité d'implémenter un modèle compatible avec OpenVINO et mit en place, il ne reste plus qu'a spécifier qu'elle modèle.
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


### Bilan & Évaluation