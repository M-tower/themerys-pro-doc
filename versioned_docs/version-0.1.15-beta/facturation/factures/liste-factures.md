---
sidebar_position: 1
---

# Liste de Factures
Dans **THEMERYS Pro**, vous retrouverez la liste de vos factures ou devis dans la rubrique `Facturation`.

## Accéder à la liste
Dans le menu de gauche, vous pouvez y accéder en cliquant sur `Facturation` puis sur `facture`.

![img alt](/img/factures-goto.png)

## Présentation
### Affichage par période
Dans **THEMERYS Pro** vous avez la possibilité sur certaines pages d'y afficher les données par période. Cela se fait grâce à la barre de filtre (1) 
présente en haut de la page.
Si vous voulez en savoir plus sur le fonctionnement de la `barre de filtre` de **THEMERYS Pro**, veuillez consulter
la **[documentation de la barre de filtre](../../outils/barre-de-filtre)**.

### Les stats
Juste en dessous de la barre des filtres, vous pouvez apercevoir : 
- le nombre total de clients facturés (2),
- le total des montants facturés (3),
- le total des restes à payer (4),
- le total des paiements en retard (5) : conditionné par des modalités de type `par échéances`.

### Les panneaux de rapports
Avant le tableau de liste, vous avez des barres de progression illustrant :
- le total des montants `payés` par rapport aux `total facturé` (6),
- le nombre de factures `livrées` par rapport aux `factures à livraison` (7),
- les `factures soldées` par rapport à toutes les factures enregistrées (8).

### Les tableaux de données
Juste en dessous se trouve le tableau (9) de liste.

Si vous voulez en savoir plus sur le fonctionnement des `tableaux de liste` de **THEMERYS Pro**, veuillez consulter
la **[documentation](../../outils/tableaux)** dédiée.
![img alt](/img/factures-structure.png)

Parmi les colonnes présentées, certaines vous permettent de savoir en un coup d'oeil la situation de la facture.
Nous avons donc :

`Prochaine étape à payer` (1) : pour les factures avec une modalité de type `par étapes`, vous y avez le nom de l'étape de paiement avec le montant. Et pour les factures `à échéances`, vous y trouverez la date du prochain paiement et le montant.

:::note

Vous avez des notifications visuelles dans cette colonne sous la forme d'un point qui peut être :
- **jaune** si la date se rapproche (dans les 2, 3 jours),
- **rouge** si la date est dépassée

:::

`État` (2) : cette colonne peut contenir plusieurs indications à la fois, en forme d'icones. Ainsi on peut avoir :
- ![img alt](/img/factures-icone-soldee.png) si la facture est soldée,
- ![img alt](/img/factures-icone-livree.png) si les commandes liées à la facture sont livrées,
- ![img alt](/img/factures-icone-liee-proforma.png) si la facture a été générée à partir d'un proforma,
- ![img alt](/img/factures-icone-envoyee.png) si la facture a été envoyé par mail depuis **THEMERYS Pro**.

![img alt](/img/factures-colonnes.png)

## Créer une nouvelle facture
Tout d'abord, vous devez savoir qu'il vous est possible de lancer la création d'une facture depuis le `bouton d'ajout rapide` présent sur toutes les pages connectées.
![img alt](/img/factures-ajout-rapide.png)

Néanmoins, une fois sur la pages des `factures`, pour ajouter une nouvelle facture à la liste, il vous suffirait de cliquer sur le bouton `+ CRÉER` (1) situé juste au dessus du champ de recherche (2).
Vous serez redirigé(e)s sur la **[pages d'édition](./edition-facture)**.

:::info

Dans **THEMERYS Pro** et contrairement aux autres entités, les documents de facturation (factures, proforma) disposent d'une page d'édition. 
Cela nous permet de vous proposer le plus d'options possibles pour la création de vos documents.

:::

![img alt](/img/factures-creation.png)

## Modifier une facture
Si vous souhaitez modifier les informations d'une facture, il vous faudra :
1. **Trouver la facture dans la liste** 

Si vous ne la voyez pas dans la liste qui vous est présentée, utilisez le champs de recherche (1) du tableau
en y entrant une information qui lui est propre (de préférence le **numero du document**, la **raison sociale** du client).*

2. **Page d'édition** 

Vous devez ensuite cliquer sur le bouton d'action situé à l'extrémité droite de la ligne (2), puis sur `Modifier` (3).
Cela déclenchera une redirection vers la **[pages d'édition](./edition-facture)**.

![img alt](/img/factures-modifier.png)

## Autres actions
En plus de la modification, vous pouvez effectuer d'autres actions :
- afficher la facture (cela peut se faire également en cliquant sur la ligne de la concernée dans le tableau),
- consulter la **[fiche du projet](../../activités/projets/fiche-projet)** (si liée),
- **[relancer les clients](#les-relances-sur-les-paiements)** sur les paiements,
- dupliquer (créer une copie),
- afficher le devis parent (si la facture a été générée à partir d'un proforma),
- consulter les **[bons de livraison](../../stocks/bons-sortie)** émis (pour les factures concernées)
- consulter les **[bons de retour](../../stocks/bons-retour)** émis (pour les factures concernées)
- supprimer la facture

Vous pouvez retrouvez ces options dans les boutons d'action à l'extrémité de chaque ligne du tableau.

![img alt](/img/factures-action-bouton.png)

### Les relances sur les paiements
Dans **THEMERYS Pro**, il vous est possible de gérer les relances sur une facture. 
Il vous est donc possible d'enregistrer vos relances effectuées : 
- `par appel` : où vous notez un résumé de la conversation,
- `par mail` : où vous envoyez directement un mail de relance depuis l'aapplication.

**Formulaire de relance**

Dès que vous cliquez sur l'option `Relance` depuis le **[bouton d'action](#autres-actions)** de la ligne souhaitée, Vous vous trouverez face au formulaire de relance.

Il est composé de 2 parties : le panneau d'enregistrement des relances (1) et la liste des relances déjà effectuées (2).

Dans le panneau d'enregistrement, vous pouvez y choisir le type de relance (3) et dans la liste, vous pouvez utiliser le bouton d'action (4) sur les lignes pour afficher le contenu de chaque relance (5).

![img alt](/img/factures-form-relance.png)

:::info

**Si vous avez un problème**, vous pouvez procéder comme suit :
- Si vous avez un message d'erreur, lisez le! Cela peut vous aider à comprendre d'où vient le problème.
- Vérifiez si toutes les étapes précitées ont été respectées. N'hésitez pas à reéssayer!
- Vérifiez votre connexion internet!
- Contactez le support en suivant les **[indications ici](../../outils/contact-support)**!

:::
