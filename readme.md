# Ce projet est un projet de simulation d'une usine de pistons

###   Enoncé

Vous allez écrire un programme qui va simuler une chaîne de production qui assemble des pistons. Le
fonctionnement est décrit ci-dessus.
En effet, une usine fait appel à vous afin de simuler le fonctionnement de son usine
de recyclage de pistons. Un piston est composé de trois pièces : la tête du piston, la jupe du piston et
finalement son axe. L'assemblage des trois pièces se fait au niveau d'une machine principale MP.
L'arrivée des trois pièces à l'usine se fait sur le même dock et elles arrivent mélangées dans un même
carton. Nous ne savons pas ce que contient un carton. La première opération consiste donc à trier les
pièces pour les séparer. Chaque pièce passe ensuite sur une machine qui va procéder à son usinage
pour les rendre de meilleure qualité et ce, dépendamment de sa nature. Nous aurons ainsi une machine
MT pour les têtes, MJ pour les jupes et MA pour les axes. Les temps d'usinage respectifs sont de 2,
3 et 2.5 minutes pour les têtes, les jupes et les axes. La machine MP traite les pièces en 1 minute.
Cependant, les 4 machines dont vous disposez sont presque toujours en panne et nécessitent des
réparations. En effet, pour chaque pièce, une machine aurait jusqu'à 25% de chance de tomber en panne
et la réparation nécessite entre 5 et 10 minutes.
Il est évident que la machine MP nécessite la présence des 3 pièces pour fabriquer un piston.
Nous vous demandons de reproduire la chaîne de montage et de déterminer le temps nécessaire pour
monter 100 pistons.

### Résultat
Nous avons choisi le langage **Typescript** pour la résolution de ce problème.

Nous disposons de trois(3) principaux fichiers qui sont classé comme suit:

 - **Pieces.ts** est la classe réprésentant les pieces (tete,axe,jupe);
 - **Machine.ts** est la classe réprésentant les machines (MT,MA,MJ,MP);
 - **AssemblingLine.ts** est la classe réprésentant la chaine de montage des pistons;
 - **Main.ts** est la classe principale qui exécute un exemple de notre solution.

Toutes les fonctions sont commentées permettant une meilleure compréhension de notre solution.

### Exécution

#### Pre-requis 

- Installer node [voir le site officiel](https://nodejs.org/fr)
- Installer ts-node
```bash
    npm install -g ts-node
```
- Installer les dependances
```bash
    npm install
```

#### Commande d'exécution

```bash
    npm start
```