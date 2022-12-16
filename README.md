# itou-theme

## Remarques
Le `itou-theme` est un theme basé sur la [version 4.6 de Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

## Consignes et commandes d'intégration et de modification du html

Nécessite node `v12.22.0` ou supérieur pour installer les dépendances `npm install`.
Pour jongler entre les différentes versions de Node, il est recommandé d'utiliser l'outil `nvm`
La commande `nvm use` utilise le fichier `.nvmrc` fourni par ce dépôt.

Pour lancer le thème en local:
1. Lancer la version locale en live reload avec `npm run dev`
2. Intégrer ou modifier le html, scss ou js dans le répertoire `src`

<!--
Pour déployer (uniquement depuis main):
1. Générer une version de déploiement otimisée dans le répertoire `dist` avec la commande `npm run build`
2. Commiter les modifications sur la branche `main`
3. Commiter sur la branche `gh-pages` et déployer automatiquement sur github pages avec `npm run deploy`
4. Ensuite, la demo sera vsisible en preprod ici  https://betagouv.github.io/itou-theme/
-->
