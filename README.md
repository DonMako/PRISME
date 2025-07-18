# PRISME

## Contexte

L'utilisation de l'informatique est en constante progression dans la population. Et le PDF restant un type de fichier dans la norme d'interropérabilité informatique, son usage comme support de transmission d'informations progresse de même.

Cependant, il n'existe pas encore de solutions largement diffusées et employées permettant de générer des PDFs accessibles, c'est-à-dire des PDFs permettant l'accès à leurs informations indépendamment :
- des conditions d'accès à Internet (matériel, infrastructure réseau, ...) ;
- de l'origine de l'usager (langue maternelle, culture, localisation géographique, ...) ;
- des aptitudes de l'utilisateur (physiques ou mentales)

C'est pour pallier à ce manque que PRISME a été conçu.

## Qu'est-ce que PRISME ?

PRISME est une visionneuse PDF visant à améliorer l'expérience de lecture pour des utilisateurs en situation de handicap, en fournissant certaines fonctionnalités permettant de modifier un PDF non accessible.

Les modifications actuellement possibles sont les suivantes :
- changer la couleur du fond ;
- changer la couleur du lettrage ;
- changer la marge ;
- changer la police ;
- faire un défilement automatique ;
- changer la taille de la visonneuse. 

# Mise en place de l'application

Voici les instructions afin de cloner le répertoire et d'installer ses dépendences :
```
git clone https://github.com/DonMako/PRISME.git
cd PRIMSE
npm install
```

## Commandes disponibles 

Dans le répertoire du projet, les commandes suivantes peuvent être exécutées :

### `npm start`

Exécute l'application en mode développement en ouvrant automatiquement l'adresse suivante dans le navigateur : http://localhost:5173

### `npm run build`

Build l'application en mode production dans le dossier `build`.
