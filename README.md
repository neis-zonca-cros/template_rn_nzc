# 🎉 Template React Native

Bienvenue sur ce **template React Native** by NZC ! Ce dépôt vous permet de démarrer rapidement votre application mobile.
Suivez les étapes ci-dessous pour utiliser ce template et commencer à développer.

## 🚀 Utiliser le template

1. **Créer un nouveau dépôt à partir de ce template** :
   - Allez sur la page principale de ce dépôt.
   - Cliquez sur le bouton **Use this template** pour créer un nouveau dépôt basé sur ce template.

2. **Cloner le nouveau dépôt** :
   - Après avoir créé le nouveau dépôt, clonez-le sur votre machine :
     - `git clone https://github.com/<votre-nom-utilisateur>/<nom-de-votre-nouveau-dépôt>.git`
     - `cd <nom-de-votre-nouveau-dépôt>`

3. **Installer Yarn (si ce n'est pas déjà fait)** :
   - Assurez-vous que **Node.js** est installé sur votre machine. Si ce n'est pas le cas, téléchargez-le depuis [le site officiel de Node.js](https://nodejs.org/).
   - Installez **Yarn** globalement :
     - `npm install --global yarn`

4. **Installer les dépendances** :
   - Dans le répertoire de votre nouveau dépôt, exécutez :
     - `yarn install`

## ⚙️ Configuration de l'application

Après avoir installé les dépendances, n'oubliez pas de modifier le nom de votre application dans le fichier **`app.json`**. Changez les valeurs suivantes :

- **`name`** : Le nom affiché de votre application.
- **`slug`** : Le nom utilisé pour identifier votre application dans l'URL et les liens.

## 🎈 Lancer l'application

Pour démarrer votre application en mode développement, utilisez la commande suivante :

- `yarn start`

Cela ouvrira **Expo** et vous permettra de prévisualiser votre application sur votre appareil ou un émulateur.

## 💡 Aide supplémentaire
Les pre-commit font un Lint-staged avec esLint et prettier
Les commit-msg utilise la config-conventionnal

