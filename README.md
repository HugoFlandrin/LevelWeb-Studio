# 🎮 **LevelWeb Studio**
**Un seul site, deux fonctions : la vitrine de mon studio de jeux vidéo LevelWeb Studio, et mon portfolio**

<p align="center">
  <img src="static/img/LogoWithName.png" width="280" />
</p>

---

## 📜 **Description du projet**

Ce dépôt contient un site statique (HTML/CSS/JS, sans framework), conçu et développé par mes soins, déployé sur GitHub Pages. Il remplit deux fonctions distinctes, pour deux publics différents :

| | **Site de l'entreprise** | **Site du portfolio** |
|---|---|---|
| **Où** | racine du dépôt | dossier `portfolio/` |
| **Pour qui** | les joueurs | les recruteurs et les clients |
| **Contenu** | vitrine de **Last Wing**, le premier jeu du studio : jouable dans le navigateur, liens PC (itch.io) et Android à venir, à propos, politique de confidentialité, mentions légales | mes projets personnels et académiques (moteurs C++, prototypes Unreal Engine et Unity), le détail technique de Last Wing et du moteur 2D, mes services freelance, mon profil de programmeur gameplay / moteur |
| **Ton** | produit : on joue, on télécharge | technique : choix d'ingénierie, défis, stack |

Les deux sites restent volontairement séparés : un joueur qui découvre le jeu ne tombe pas sur l'activité freelance, et un recruteur retrouve l'ensemble de mon travail au même endroit.

👉 **[hugoflandrin.github.io/LevelWeb-Studio](https://hugoflandrin.github.io/LevelWeb-Studio/)**  
👉 **[hugoflandrin.github.io/LevelWeb-Studio/portfolio/](https://hugoflandrin.github.io/LevelWeb-Studio/portfolio/)**

Le portfolio est aussi un projet à part entière : il sert de démonstration concrète de mes compétences front-end (traduction FR/EN, animations, curseur personnalisé, intégration de démos jouables directement dans le navigateur).


---

## 📦 **Contenu du dépôt**

```
├── index.html                   # Entreprise : vitrine de Last Wing
├── about.html                   # Entreprise : à propos du studio
├── mentions-legales.html        # Entreprise : mentions légales
├── last-wing/privacy/           # Politique de confidentialité de Last Wing (/last-wing/privacy)
├── static/                      # Ressources de l'entreprise
│   ├── css/                     # studio.css, game-embed.css
│   ├── js/                      # studio-i18n.js, game-embed.js, shmup-settings.js
│   ├── img/
│   └── last-wing/               # Build WebAssembly de Last Wing (UNE SEULE copie, partagée avec le portfolio)
│
├── portfolio/                   # Portfolio de Hugo Flandrin
│   ├── index.html               # Accueil du portfolio
│   ├── styles.css
│   ├── pages/                   # Une page par projet, prototype ou section
│   │   ├── all-work.html        # Vue d'ensemble de tous les projets
│   │   ├── services.html        # Mes services freelance
│   │   ├── last-wing.html       # Détail technique de Last Wing
│   │   ├── 2d-game-engine.html  # Le moteur 2D et sa démo
│   │   └── ...                  # Escape, Life Awake, NightLife, 3D Game Engine, etc.
│   └── static/                  # Ressources du portfolio (css, js, img, mp4, platformer, platypus, resume)
│
└── 2DGameEngineDemo/            # Code source C++ du moteur 2D (hors déploiement, non suivi par git)
```

---

## 🛠️ **Technologies utilisées**
- **Langages** : HTML, CSS, JavaScript
- **Pas de framework** : site statique, traduction et animations codées à la main
- **Démos jouables** : compilation en WebAssembly du moteur C++ (voir `2DGameEngineDemo/`)

---

## 🧑‍💻 **Auteur**
Développé et maintenu par **Hugo Flandrin**.