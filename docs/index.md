# Présentation
Ce site contient une description et une anlyse des savoir-faire que j'ai obtenue durant mon stage de 
2ème années de BUT au sein de l'entreprise [STEIM S.A.S.](https://www.steim.fr).
À la gauche de vôtre écran, vous pouvez accéder au 3 autres parties principales, où vous pouvez simplement
passer à la suite en appuyant sur le boutons next en fin de documents.
Les images attachées à chaques partie peuvent être agrandit en appuyant dessus.
## Contexte

### Présentation de l'entreprise
<ImageComposant src="sas_steim_logo.jpg" align="right" width="200px" caption="Logo de l'entreprise STEIM">
<p>
L'entreprise STEIM, et une S.A.S (<a href="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_par_actions_simplifi%C3%A9e">Société par Action Simplifiées</a>) 
créer en 1985 par M.LOVITON qui compte aujourd'hui environ 51-200 à employées. 
Basées à <a href="https://maps.app.goo.gl/KAcAt3TpuZTyKjRw7">Chèvremont</a>, elle propose ses services dans l'étude et la réalisation projet,
l'intégration d'équipements électrique, l'automatisme et la robotique. 
Elle travail aussi dans l'installation de tertiaires et de bornes de recharge en passant par le développement photovoltaïque.
</p>
</ImageComposant>

### Présentation du projet

Mon projet s'inscrit dans un contexte de modernisation de l'infrastructure et des outils, en lien avec les objectifs du département Recherche et Développement (R&D) de l'entreprise auquelle mon tuteur de stage M.GUILLIEN et à la tête. 
À la création de ce département, les domaines d'étude étaient centrés sur les nouvelles technologies utilisant de l'hydrogène. 
Cependant, dans ce processus, la recherche d'informations sur le web et la collecte de données ont joué des manipulations importantes dans le métier.

En outre, cette recherche doit suivre un protocole strict qui visait à récupérer le plus d'informations utiles d'un document sans que l'observateur et besoin de le lire, 
en suivant une méthodologie qui prend en compte les critères de pertinence et de fiabilité des sources. 
D'abord, il faut récupérer le plus d'informations possible sur un sujet données, généralement sous forme de flux RSS, pour ensuite lire chaque document obtenu et écrire une synthèse de quelques lignes. 
Ensuite, il faut compléter un tableau de critères recherchés en inscrivant une note de 0 à 4 en fonction de la pertinence de la source obtenue.

Voici un exemple de tableau qui représente l'ordre d'attribution des informations :

| Nom de la doc avec lien hypertext | Date du document | Description du document | Critère 1 | Critère 2 | ... |
|:----------------------------------|:----------------:|-------------------------|:---------:|:---------:|:---:|
| [Premier lien]() | 22 Mai 2026 | Article parlant de technologie en lien avec le sujet | 0 | 3 | ... |
| [Deuxième lien]() | 2 Juin 2026 | Article parlant de thèses en lien avec le sujet | 4 | 3 | ... |
| ... | ... | ... | ... | ... | ... |

Or ce travail demande beaucoup de temps à réaliser à la main, et le principe veut qu'il soit toujours mis à jour pour parler des dernières actualités du sujet. 
C'est pourquoi mon tuteur de stage eu l'idée d'automatiser ce processus avec de l'intelligence artificielle (IA) qui pourrait faire le travail demandé plus rapidement.

## Synthèse

Les savoir-faire nécessaires à la réalisation du sujet de stage ont été très variés.
En effet la création de l'application à suivit un développement full-stack, le front-end soit l'interface utilisateur à été développées 
en utilisant le framework VueJS, et le language de programmation Typescript pour les opération de gestion de l'application. 
Des modules supplémentaire tel Vuetify et TailwindsCSS ont aussi été utilisées pour les composants graphiques.

Le back-end quant-a lui à été réaliser en Typescript en utilisant plusieurs framework, notament :
- [Express](https://expressjs.com/fr/) pour les communications entre composant en utilisant des URI
- [Axios](https://axios.rest/fr/) pour récupérer les informations de ces mêmes URI
- [Socket.io](https://socket.io/fr/) pour les communications en temps réel entre le serveur et l'interface utilisateur
- [Vitest](https://vitest.dev/) pour la réalisation de tests unitaire pour les différents composant de l'applications
- [Swagger](https://swagger.io/) pour une documentation des API et URI plus détaillés
pour n'en sitées quelque uns.

Des composant externe ont aussi été utilise pour mettre en place l'application, dans l'ordre nous avons :
- [Llama.cpp](https://github.com/ggml-org/llama.cpp/tree/master) pour l'utilisation et la communication en locale de Large Language Model (LLM) ou IA. 
Des modifications on été apporter notament pour l'application d'un prompte système pour données les formalité au LLM à respecter, un la mise en place d'un chat template en [Jinja](https://jinja.palletsprojects.com/en/stable/) modifier,
qui intègre de facon dynamique ce dit chat template.
- [MongoBD](https://www.mongodb.com/fr-fr) la version community server, pour la mise en place d'une base de données utile pour stocker les documents fournir par l'utilisateur au format BJSON.
- [Redis](https://redis.io/) une base de données au fonctionnement d'association de clé-valeur avec une grande capacité de vitesse d'utilisation, ici utiliser comme un cache pour la BDD principal.
- [SearXNG](https://docs.searxng.org/) un méta-moteur qui sert à récolter le plus d'informations sur le web en fonction d'une query spécifier, il permet aussi un anonymas des services utiliser par les moteurs de recherche.
Ce module créer en python, à légèrement été modifier pour permettre l'utilisation d'autre moteur de recherche non supporter nativement comme hal thèses et google patents, mais aussi l'implémentation d'un script qui vérifie la validité des liens obtenue pour que ceux-ci ne retourne pas d'informations éronné ou non disponible.
- [Milvus](https://milvus.io/fr) une base de données verctoriel utiliser pour stocker les embeddings du LLM afin de les réutiliser dans des prompts future, correspondant au fonctionnement du Retrieval Augmented Generation (RAG).

Et l'ensemble de l'architecture et hébergé et maintenue sur des conteneurs [Docker](https://www.docker.com/) grâce au module [Compose](https://docs.docker.com/compose/) de ce dernier.

