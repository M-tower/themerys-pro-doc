---
sidebar_position: 6
---

# Bons de renvoi au fournisseur
Il s'agit des documents attestant les articles retournés au fournisseur.
Exemple : des problèmes ou avaries des articles envoyés par un fournisseur peuvent faire l'objet d'un **renvoi**.

## Accéder à la liste
Dans le menu de gauche, vous pouvez y accéder en cliquant sur `Stocks` puis sur `Renvois Aux Fournisseurs`.

![img alt](/img/bons-renvoi-goto.png)

## Présentation
### Affichage par période
Dans **THEMERYS Pro** vous avez la possibilité sur certaines pages d'y afficher les données par période. Cela se fait grâce à la barre de filtre (1) 
présentes au dessus de l'espace réservée au tableau.
Si vous voulez en savoir plus sur le fonctionnement de la `barre de filtre` de **THEMERYS Pro**, veuillez consulter
la **[documentation de la barre de filtre](../outils/barre-de-filtre)**.

### Les tableaux de données
Juste en dessous se trouve le tableau (2) de liste.
Si vous voulez en savoir plus sur le fonctionnement des `tableaux de liste` de **THEMERYS Pro**, veuillez consulter
la **[documentation](../outils/tableaux)** dédiée.
![img alt](/img/bons-renvoi-structure.png)

## Créer un nouveau bon
Pour ajouter un nouveau bon de renvoi à la liste, il vous suffirait de cliquer sur le bouton `+ CRÉER` situé juste au dessus du champ de recherche.

![img alt](/img/bons-reception-creation.png)

Vous vous trouverez ensuite face à un formulaire d'enregistrement qui est composé de plusieurs éléments :
- **[Source](#source)** (1)
- **[Détails de la source](#détails-de-la-source)** (2)
- **[Le bouton "Tout est renvoyé"](#le-bouton-tout-est-renvoyé)** (3)
- **[Les détails de la composition du bon](#composition)** (4)

![img alt](/img/bons-renvoi-creation-form.png)

### **Source**
Dans cette partie, vous pouvez définir :
- la date d'émission du bon (1);
- la dépense (2) à la source;
- Le motif du renvoi (3).

![img alt](/img/bons-renvoi-creation-form-source.png)

:::info

Dès que vous choisissez une dépense comme source, le tableau de **[COMPOSITION](#composition)** est automatiquement rempli en fonction
des lignes de celle-ci.

:::

### **Détails de la source**
Lorsque vous sélectionnez une dépense comme souce, cette partie vous fourni quelques informations utiles sur la source.
Le but est de vous confirmer que vous avez bien choisi la bonne source.

![img alt](/img/bons-renvoi-creation-form-details.png)

### **Le bouton "Tout est renvoyé"**
Ne fonctionnant uniquement que si la **[source](#source)** est déjà choisie, cette option située au dessus des `Détails`, une fois activée, va remplir automatiquement les champs `Qté` 
des lignes de la partie **[COMPOSITION](#composition)** de sorte à ce que le **reste** `À recevoir` soit équivalent à la totalité commandée.
En résumé la quantité reçue = 0.

**Cela peut être utile si tous les articles ont été retournées par le client!**

### **Composition**
Dans cette partie du formulaire, vous pouvez `Ajouter` (1), déplacer (2) ou supprimer (3) des lignes de mouvements de renvoi.

Chaque ligne est composée de plusieurs cellules :
- L'`Article` (4) : que vous devez choisir avant le stockage,
- Le `Stockage` (5) concerné que vous devez sélectionner,
- `Reçu` (6) : le ratio total reçu / total commandé,
- La `Qté` (7) : que vous déclarez,
- La quantité qu'il reste `À recevoir` (8),
- L' `Unité` (9).

Après avoir rempli les champs, cliquez sur le bouton `ENREGISTRER` situé en bas du formulaire.

:::note

Les champs qui doivent obligatoirement être remplis sont marqués par un `*`!

:::

![img alt](/img/bons-renvoi-creation-form-composition.png)

Félicitation 🎊, vous avez créé votre bon de renvoi dans  **THEMERYS Pro**!

## Modifier un bon
Si vous souhaitez modifier les informations d'un bon de renvoi, il vous faudra :
1. **Le trouver dans la liste** 

Si vous ne le voyez pas dans la liste qui vous est présentée, utilisez le champs de recherche (1) du tableau
en y entrant une information qui lui est propre (de préférence, le **numéro du bon**, le **numéro de la dépense**, le nom du **fournisseur**, ...).*

2. **Formulaire d'édition** 

Vous devez utiliser le bouton d'action situé à l'extrémité droite de la ligne (2), puis cliquez sur l'option `Modifier` (3).
Cela déclenchera l'ouverture du formulaire d'enregistrement.

3. **Validation**

Une fois que vous avez fini votre modification, cliquez sur le bouton `ENREGISTRER`.

## Autres actions
Sur la page des bons, vous avez la possibilité d'effectuer un certain nombre d'actions, comme par exemple : 
- afficher le bon (cela peut se faire également en cliquant sur la ligne (4) du bon souhaité),
- consulter la **[dépense](./depenses)** à l'origine,
- supprimer le bon de renvoi

Vous pouvez retrouvez ces options dans les boutons d'action (2) à l'extrémité de chaque ligne du tableau.

![img alt](/img/bons-renvoi-modifier.png)

:::info

**Si vous avez un problème**, vous pouvez procéder comme suit :
- Si vous avez un message d'erreur, lisez le! Cela peut vous aider à comprendre d'où vient le problème.
- Vérifiez si toutes les étapes précitées ont été respectées. N'hésitez pas à reéssayer!
- Vérifiez votre connexion internet!
- Contactez le support en suivant les **[indications ici](../outils/contact-support)**!

:::
