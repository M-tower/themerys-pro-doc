---
sidebar_position: 8
---

# Dépenses
Plus précisément les dépenses concédées, Il s'agit des enregistrements de vos factures fournisseur / perstataire.

Dans **THEMERYS Pro** vous pouvez ajouter des dépenses et gérer leurs paiements de façon individuelle.

## Accéder à la liste
Dans le menu de gauche, vous pouvez y accéder en cliquant  sur `Dépenses`.

![img alt](/img/depenses-goto.png)

## Présentation
### Affichage par période
Dans **THEMERYS Pro** vous avez la possibilité sur certaines pages d'y afficher les données par période. Cela se fait grâce à la barre de filtre (1) 
présente au dessus de l'espace réservée au tableau.
Si vous voulez en savoir plus sur le fonctionnement de la `barre de filtre` de **THEMERYS Pro**, veuillez consulter
la **[documentation de la barre de filtre](./outils/barre-de-filtre)**.

### Les stats
Juste en dessous de la barre des filtres, vous pouvez apercevoir : 
- le total de vos créancers (2),
- le montant total de toutes vos dépenses enregistrées (3),
- le montant total de ce que vous devez (montant dû) à vos créanciers (4),
- le nombre total de dépenses de type `Achat d'article` qui ont été livrées mais qui n'ont pas été réglées (5).

### Les panneaux de rapports
Avant le tableau de liste, vous avez des barres de progression illustrant :
- le total des montants `payés` par rapport aux `total facturé` (des dépenses) (6),
- les `commandes reçues` par rapport aux dépenses de type `Achat d'article` (7),
- les `dépenses soldées` par rapport à tous les enregistrements (8).

### Les tableaux de données
Juste en dessous se trouve le tableau (9) de liste.
Si vous voulez en savoir plus sur le fonctionnement des `tableaux de liste` de **THEMERYS Pro**, veuillez consulter
la **[documentation](./outils/tableaux)** dédiée.
![img alt](/img/depenses-structure.png)

Parmi les colonnes présentées dans le tableau, la colonne `État` vous permet de savoir en un coup d'oeil la situation de la dépense.
Nous avons donc :

- ![img alt](/img/factures-icone-soldee.png) si la dépense est soldée,
- ![img alt](/img/factures-icone-livree.png) si les commandes liées à la dépense sont livrées (vous avez reçu tout ce que vous avez commandé),
- ![img alt](/img/depenses-icone-document.png) si la dépense a un `Document attaché` (facture fournisseur scannée).

## Créer une nouvelle dépense
Tout d'abord, vous devez savoir qu'il vous est possible de lancer la création d'une dépense depuis le `bouton d'ajout rapide` présent sur toutes les pages connectées.
![img alt](/img/depenses-ajout-rapide.png)

Néanmoins, une fois sur la pages des `dépenses`, pour ajouter une nouvelle dépense à la liste, il vous suffirait de cliquer sur le bouton `+ CRÉER` situé juste au dessus du champ de recherche.

![img alt](/img/bons-reception-creation.png)

Vous vous trouverez ensuite face à un formulaire d'enregistrement qui est composé de plusieurs éléments :
- **[Les informations de facturation](#les-informations-de-facturation)** (1) : Lier à un projet, Date, Type de dépense, Fournisseur/Consultant/Sous-traitant, ...
- **[Les détails du solde](#les-détails-du-solde)** (2) : Montant HT, TTC, TVA, ...
- **[Le bouton "Dépense déjà soldée"](#le-bouton-dépense-déjà-soldée)** (3),
- Les onglets (4) pour éditer le contenu avec : 
**[les détails de la commande](#les-détails-de-la-commande)**,
**[les détails des paiements](#les-détails-des-paiements)** 
et **[le document attaché](#le-document-attaché)**.

![img alt](/img/depenses-form-structure.png)

### Les informations de facturation
Dans cette partie, vous pouvez définir :
- Si la dépense est liée à un projet, grâce au bouton `Lier à un projet` (1);
- la date de la dépense (2);
- le type de dépense (3);
- le fournisseur (ou le consultant/sous-traitant si la dépense est de type `Consustance` ou `Sous-traitance`) (4);
- le motif de la dépense (5)

![img alt](/img/depenses-form-facturation.png)


:::tip

Si vous n'aviez pas encore enregistré les éléments demandés, vous pouvez le faire directement depuis ce formulaire, grâce à
la fonctionnalité d'**édition dynamique** de **THEMERYS Pro**. Consultez la **[documentation de l'édition dynamique](./outils/edition-dynamique)** dédiée pour plus d'informations!

:::

### Les détails du solde
Cette rubrique, en plus de vous montrer les composants du solde de la dépense, vous permet également de gérer les taxes.
Ainsi, vous y trouverez :
- le bouton d'activation de la `TVA` (1) qui une fois activé vous donne sa valeur calculée (2);
- les montant `TTC` (3) et `HT` (4);
- le total `payé` (5)
- le `solde` final (6)

![img alt](/img/depenses-form-details.png)

### Le bouton "Dépense déjà soldée"
Cette option située au dessus des `Détails`, une fois activée, va définir une ligne de paiement **"unique"** avec le même montant que le Total de la dépense.
Ce qui changera automatiquement l'état de la dépense en `Soldée`.

Cela peut être particulièrement utile si vous réglez la dépense en un coup.

Dans **THEMERYS Pro**, sur le formulaire d'édition de la dépense, vous trouverez 3 onglets rétractables (en accordéon) juste en desous **[des détails du solde](#les-détails-du-solde)**.

### Les détails de la commande

:::warning

Cet Onglet est utilisé uniquement pour les dépenses de type `Achat d'article`

:::

1. **Les lignes du tableau**

Dans cet onglet, vous trouverez un bouton `+ AJOUTER UNE LIGNE` (1) situé juste en dessous du tableau. Comme son nom l'indique, il vous aidera à insérer des lignes dans le tableau.

2. **Les boutons d'action**

Vous pouvez effectuer un certains nombre d'actions sur chaque ligne. Le menu d'action est accessible en cliquant sur l'icone ![img alt](/img/edition-proforma-form-lignes-menu-icone.png) (2) située à l'extrémité.

Vous pouvez donc : 
- **Déplacer la ligne** vers le Haut ou vers le Bas,
- **Supprimer la ligne**.

![img alt](/img/depenses-form-details-commande.png)

### Les détails des paiements
Dans **THEMERYS Pro**, vos paiements sont enregistrés directement sur les dépenses. Et cela se passe dans l'onglet `DÉTAILS DES PAIEMENTS`.
Il est composé de 2 blocs :
- la liste des paiements enregistrés (1) où vous aurez un tableau de paiements et un bouton (2) pour en ajouter,
- un panneau (3) qui résume le `total des paiements` et du `reste à payer`.

![img alt](/img/edition-facture-form-paiements.png)

**Ajouter un paiement**

Pour enregistrer un paiement, il faut cliquer sur le bouton `+ AJOUTER UN PAIEMENT` pour lancer le
formulaire d'enregistrement.

En suite vous devez remplir les champs :
- `montant` (1),
- `date` du paiement (2),
- `référence` du moyen de paiement (3) : ex. numéro de chèque,
- `le moyen de paiement` (4).

Dès que vous avez fini, cliquez sur le bouton `ENREGISTRER` (5) et le tableau des paiements sera automatiquement mis à jour.

![img alt](/img/edition-facture-form-paiements-ajouter.png)

**Modifier un paiement**

Pour modifier un paiement, cela se passe également dans le même onglet `DÉTAILS DES PAIEMENTS`.

Vous devez d'abord repérer le paiement en question dans le tableau qui s'y trouve et cliquer simplement dessus.
Cela va vous ouvrir le formulaire avec les informations à modifier.

:::warning

Il est important de savoir que **tant que vous n'enregistez pas la dépense, les paiements que vous ajoutez ou modifiez ne seront pas pris en compte!**

:::

### Le document attaché
**THEMERYS Pro** vous donne la possibilité d'uploader vos factures fournisseurs scannées depuis votre ordinateur ou tablette, en les rattachant aux dépenses créées. 
Cela se passe dans l'onglet `DOCUMENT ATTACHÉ` qui est divisé en 3 parties :

- la zone de chargement (1),
- la barre de progression de votre espace de stockage (2),
- l'aperçu du document importé (3)

**Supprimer le document attaché**

Vous avez également la possibilité de supprimer un document déjà attaché à une dépense. Pour ce faire, vous devez aller dans le même onglet, puis cliquer sur `Options` (4) puis sur `Supprimer` (5)

![img alt](/img/depenses-form-document.png)

:::warning

Il est important de savoir que **tant que vous n'enregistez pas la dépense, le chargement ou la suppression des documents attachés ne seront pas pris en compte!**

:::

Félicitation 🎊, vous avez créé votre dépense dans  **THEMERYS Pro**!

## Assistance à la gestion de stock

À chaque enregistrement d'une nouvelle dépense de type `Achat de marchandise`, **THEMERYS Pro** vous suggère de créer un **[bon de réception](./stocks/bons-reception)**. S'inscrivant ainsi, dans la continuité logique des opérations.

Cela peut être pratique pour maintenir à jour vos stocks, si vous avez reçu partiellement ou totalement votre commande.

![img alt](/img/depenses-save-suggestion.png)

## Modifier une dépense
Si vous souhaitez modifier les informations et / ou ajouter un paiement à une dépense, il vous faudra :
1. **La trouver dans la liste** 

Si vous ne la voyez pas dans la liste qui vous est présentée, utilisez le champs de recherche (1) du tableau
en y entrant une information qui lui est propre (de préférence, le **numéro de la dépense**, le **nom du fournisseur** ou **Consultant** ou **Sous-traitant**, ...).

2. **Formulaire d'édition** 

Vous devez utiliser le bouton d'action situé à l'extrémité droite de la ligne (2), puis cliquez sur l'option `Modifier` (3).
Cela déclenchera l'ouverture du formulaire d'enregistrement.

![img alt](/img/depenses-modifier.png)

3. **Validation**

Une fois que vous avez fini votre modification, cliquez sur le bouton `ENREGISTRER`.

## Autres actions
En plus de la modification, vous pouvez effectuer d'autres actions :
- afficher la facture (si la dépense dispose d'un `Document attaché` comme facture fournisseur scannée),
- consulter la **[fiche du projet](./activités/projets/fiche-projet)** (si liée),
- consulter les **[bons de réception](../../stocks/bons-reception)** créés (pour les dépenses concernées)
- consulter les **[bons de renvoi](../../stocks/bons-renvoi)** émis (pour les dépenses concernées)
- supprimer la dépense

Vous pouvez retrouvez ces options dans les boutons d'action à l'extrémité de chaque ligne du tableau.

![img alt](/img/depenses-action-bouton.png)

:::info

**Si vous avez un problème**, vous pouvez procéder comme suit :
- Si vous avez un message d'erreur, lisez le! Cela peut vous aider à comprendre d'où vient le problème.
- Vérifiez si toutes les étapes précitées ont été respectées. N'hésitez pas à reéssayer!
- Vérifiez votre connexion internet!
- Contactez le support en suivant les **[indications ici](./outils/contact-support)**!

:::
