# Suivi de projet
Cette partie présente la méthodologie de gestion et de suivi de projet appliquée tout au long de mon stage.

Pour structurer les développements, l'ensemble du projet a été orchestré selon la méthodologie agile **Kanban**. Ce choix s'est avéré particulièrement adapté car il offrait une visibilité immédiate et transparente sur l'état d'avancement des tâches (flux de travail) à un instant T, facilitant ainsi la priorisation face aux défis techniques rencontrés.

### Suivi Kanban

```mermaid
    kanban
        A faire
            [Ajouter une collection de liens consultés]
            [Optimiser main.ts pour augmenter le volume de résultats traités par le LLM]
            [Ajouter un système de pause aux routines ; persistance BDD et synchronisation au démarrage]
            [Tester et valider l'architecture OpenVINO en environnement local]
        En cours
            [Déploiement final de l'application sur poste de travail ciblé]
        Prêt pour les tests
            [Validation du moteur de recherche sur-mesure]
            [Génération et sécurisation des clés secrètes SearXNG / Redis / MongoDB]
            [Recette de l'interface de visualisation des documents chargés]
            [Validation du nettoyage du contexte d'entrée du LLM à chaque requête]
            [Tests de charge sur le système de routines]
        Terminé
            [Optimisation de l'allocation des ressources matérielles via Docker]
            [Création d'un réseau interne isolé pour l'interconnexion des composants et de l'API]
            [Développement de l'interface d'administration des documents]
            [Écriture des tests unitaires pour les modules Front-end]
            [Développement de la couche de communication avec llama.cpp]
            [Conception d'outils permettant au LLM de formuler des requêtes de recherche]
            [Intégration du calcul de similarité cosinus pour la sélection d'outils contextuels]
            [Implémentation et parsing des flux de résultats JSON]
            [Création d'un système de routines pour l'exécution séquentielle de prompts]
            [Configuration d'une seed constante pour garantir la reproductibilité des résultats LLM]
            [Rédaction et structuration du System Prompt applicatif]
            [Conception de Chat Templates personnalisés pour le formatage des réponses]
            [Développement de fonctionnalités de scraping web avancé]
            [Intégration de la phase d'embeddings sur les données scrapées]
            [Débogage et résolution des erreurs d'Upstream sur l'API]
            [Correction et stabilisation de l'architecture RAG]
            [Modélisation et création de la base de données vectorielle Milvus]
            [Développement de l'interface d'importation de documents]
            [Création des Dockerfiles multi-architectures pour llama.cpp]
            [Mise en cache des requêtes Mongoose via Redis pour optimiser la BDD]
            [Rédaction de la documentation d'architecture technique globale]
            [Rédaction du guide fonctionnel et technique par module]
            [Rédaction de la feuille de route des évolutions futures ; Backlog technique]
```

Le tableau Kanban ci-dessus reflète l'organisation macroscopique planifiée au fil de l'avancement du projet.

Comme dans tout projet de recherche et développement (R&D), certaines fonctionnalités secondaires n'ont pas pu être totalement intégrées en production. Ce décalage s'explique principalement par la contrainte temporelle du stage, mais également par une sous-estimation initiale de la complexité liée à l'interconnexion des modèles de langage en local (gestion fine des caches, instabilité des prompts), m'imposant de prioriser la robustesse du cœur de l'application (le système RAG et la sécurité) au détriment de certaines options de confort.

### Bilan & Évaluation

La réalisation de ce stage a été une expérience particulièrement formatrice, me plongeant au carrefour du développement Full-Stack moderne et de l'intégration d'architectures d'Intelligence Artificielle (IA).

### Un double apport : Technique et Méthodologique
Sur le plan technique, j'ai pu consolider mes compétences fondamentales dans la conception d'application (architecture d'API REST, conteneurisation isolée, gestion d'états asynchrones) tout en montant en compétences sur des technologies de pointe. Concevoir une architecture RAG (Retrieval-Augmented Generation) complète en impliquant une base vectorielle proposé par Milvus, du caching haute performance obtenue par Redis, du scraping de données et l'optimisation locale d'un LLM sous llama.cpp, m'a permis de comprendre concrètement les problématiques d'infrastructure et de performances liées aux modèles d'IA.

Sur le plan méthodologique, l'utilisation de la méthode Kanban m'a appris à gérer un flux de travail de manière autonome, à chiffrer mes tâches avec plus de réalisme et à réagir de manière agile face aux imprévus techniques (tels que les problèmes d'Upstream de l'API ou les contraintes matérielles de Docker).

### Les livrables et perspectives pour l'entreprise
Bien que le backlog contienne encore quelques fonctionnalités dans la colonne À faire, les objectifs principaux du stage ont biens été atteints :

* L'application et fonctionnelle : L'entreprise dispose désormais d'un outil, sécurisé par un reverse proxy et entièrement configurable via Docker.

* Une optimisation technique : L'intégration de tests unitaires et d'un cache Redis garantit une base saine et évolutive pour de future ajouts.

* Une transition fluide : Grâce aux documentations rédigées (architecture, Swagger, évolutions), les prochains mainteneur disposes de toutes les informations clés nécessaires pour reprendre le projet, déployer l'architecture OpenVINO ou implémenter les fonctionnalités restantes sans friction.

Ce stage a ainsi pleinement validé ma capacité à traduire un besoin métier complexe et innovant en une solution logicielle concrète et documentée.