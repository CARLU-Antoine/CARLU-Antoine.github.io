# Portfolio

### Mon portfolio personnel — développé avec Angular & TypeScript

![Angular](https://img.shields.io/badge/Angular-21.2.1-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-latest-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## Aperçu

Ce portfolio présente mes projets, mes compétences et les technologies que j'utilise au quotidien. Il a été conçu pour offrir une expérience utilisateur fluide et moderne, avec des animations soignées et une interface responsive.

- **UI moderne** grâce à DaisyUI et TailwindCSS
- **Performance optimisée** avec Angular 21 et le rendu SSR-ready
- **Entièrement responsive** — mobile, tablette et desktop
- **Support du thème sombre / clair**

---

## Stack technique

| Technologie | Rôle |
|---|---|
| **Angular 21** | Framework front-end |
| **TypeScript** | Langage principal |
| **DaisyUI** | Bibliothèque de composants UI |
| **TailwindCSS** | Styles utilitaires |
| **Vitest** | Tests unitaires |

---

## Démarrage rapide

### Prérequis

- Node.js >= 18.x
- npm >= 9.x
- Angular CLI >= 21

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/ton-username/portfolio.git

# Accéder au répertoire
cd portfolio

# Installer les dépendances
npm install
```

### Lancer en développement

```bash
ng serve
```

Ouvrir ensuite [http://localhost:4200](http://localhost:4200) dans le navigateur.  
L'application se recharge automatiquement à chaque modification de fichier.

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `ng serve` | Lance le serveur de développement |
| `ng build` | Compile le projet pour la production |
| `ng test` | Exécute les tests unitaires avec Vitest |
| `ng e2e` | Exécute les tests end-to-end |
| `ng generate component nom` | Génère un nouveau composant |

### Build de production

```bash
ng build
```

Les fichiers compilés sont disponibles dans le dossier `dist/`. Le build de production est optimisé pour les performances.

---

## Tests

### Tests unitaires

```bash
ng test
```

Propulsé par [Vitest](https://vitest.dev/) pour des tests rapides et modernes.

### Tests end-to-end

```bash
ng e2e
```

> Angular CLI ne fournit pas de framework e2e par défaut. Tu peux en choisir un selon tes préférences (Cypress, Playwright…).

---

## Structure du projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/       # Composants réutilisables
│   │   ├── pages/            # Pages principales
│   │   └── app.component.ts  # Composant racine
│   ├── assets/               # Images & ressources statiques
│   └── styles.css            # Styles globaux
├── public/
├── angular.json
└── package.json
```

---

## Ressources utiles

- [Documentation Angular](https://angular.dev)
- [Angular CLI — Référence des commandes](https://angular.dev/tools/cli)
- [DaisyUI — Composants](https://daisyui.com/components/)
- [TailwindCSS — Documentation](https://tailwindcss.com/docs)

---
