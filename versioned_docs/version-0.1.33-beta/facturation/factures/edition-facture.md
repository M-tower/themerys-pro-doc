---
sidebar_position: 2
---

# Édition de la Facture
Dans **THEMERYS Pro**, vous avez une page entière dédiée à la création et la modification des `Devis` ou `Facture`.

## Accéder à la page
L'accès à cette page se fait : 
- par les liens de création disponibles depuis le **[bouton d'ajout rapide](./liste-factures#créer-une-nouvelle-facture)** ou sur la page de **[liste de factures](./liste-factures)**;
- ou en cliquant sur le bouton `Modifier` dans les options des lignes du tableau de la page de **[liste de factures](./liste-factures)**;

## Structure de la page
La page d'édition est composée de plusieurs éléments :

- **[L'aperçu du document](#laperçu-du-document)** (1)
- **[Les boutons de sélections](#les-boutons-de-sélections-daffichage)** du type d'affichage (2)
- **[Le numero du document](#le-numero-du-document)** (3)
- **[Le bouton d'actions sur le séquençage](#le-bouton-dactions-sur-le-séquençage)** (4)
- **[L'état du document](#létat-du-document)** (5)
- **[Le bouton de suppression](#les-boutons-denregistrement-et-de-suppression)** (6)
- **[Le bouton d'enregistrement](#les-boutons-denregistrement-et-de-suppression)** (7)
- **[Les boutons de sélections](#les-boutons-de-sélections-des-commandes)** de l'onglet de commande (8)
- **[Les onglets de commande](#les-onglets-de-commande)** (9)*

![img alt](/img/edition-facture-structure.png)

### L'aperçu du document
Elle vous présente la forme du document en temps réel au gré des modifications que vous faites. Cela peut vous aider à prévisualiser le document avant l'enregistrement.

Grâce à un système d'onglet, vous aurez deux type d'affichage : `WEB` et `PDF`.
La partie `WEB` sert également de déclencheur pour le **[Formulaire d'édition](#le-formulaire-dédition)**.

### Les boutons de sélections d'Affichage
ils vous permettent de passer de la vue `WEB` en vue `PDF` et vice versa.

:::info

La vue `PDF` reste vide tant que le document n'est pas enregistré au moins une fois! Une nouvelle version du PDF est générée à chaque enregistrement.

:::

### Le numero du document
Présentation du numéro du document suivant le séquençage défini. 
En cas de nouveau document, vous y trouverez marqué **-1** à la place du numéro de séquence.
Le vrai numéro n'apparaîtra q'une fois le document enregistré!

### Le bouton d'actions sur le séquençage
En plus d'une libre personnalisation, **THEMERYS Pro** supporte la gestion de séquençage multiple. Ce bouton permet :
- de `modifier le séquençage` (1) (action possible tant qu'aucun document du même type n'est enregistré),
- d'`Activer` ou `Désactiver` (2) le séquençage (Utile s'il y en a plusieurs).

![img alt](/img/edition-proforma-sequencage.png)

Si vous voulez en savoir plus sur la `modification du séquençage` de **THEMERYS Pro**, veuillez consulter
la **[documentation sur le séquençage](../../outils/sequencage)**.

### L'état du document
Vous y trouverez afficher ou non des petites icones comme par exemple une petite enveloppe si
le document a été envoyé par mail et / ou un symbole `check` du la facture est soldée.

### Les boutons d'enregistrement et de suppression
À part le bouton de suppression qui vous redirige vers la liste des factures après l'opération, le bouton d'enregistrement est nécessaire
si vous ne voulez pas perdre toutes vos modifications.

En cas d'oublie, un message d'alerte vous en informe si vous tentez de quitter la page.

### Les boutons de sélections des commandes
Ils vous permettent de basculer entre le formulaire d'envoi de la facture par mail et des réglages contextuels du document.

### Les onglets de commande
Le premier onglet `RÉGLAGES` vous permet d'effectuer certaines actions sur le document :

- Au niveau de l'apparence (1) : Afficher ou non le nom du projet (si lié), Afficher ou non l'`Option bilingue` (Français & Anglais), Afficher ou non les `modalités` de paiement
- Contexte (2) : Définir si le document est lié à un projet ou non et le `Type de modalité` à appliquer.
- Termes & Conditions (3) : Des mentions au dessus et en dessous du tableau d'articles (Ex: conditions générales de paiement, RIB, ...)
- Définir les paramètres comme par défaut (4) : Vous évite de redéfinir les mêmes réglages à chaque fois.

![img alt](/img/edition-proforma-reglages.png)

Le deuxième onglet `ENVOYER` vous permet, grâce à un formulaire, d'envoyer par mail le document généré directement depuis **THEMERYS Pro**.

![img alt](/img/edition-proforma-envoyer.png)

## Le formulaire d'édition
En cas de création d'une nouvelle facture, le formulaire se lance automatiquement au chargement de la page.
En dehors de cela, pour accéder au formulaire, cliquez simplement sur l'aperçu `WEB` du document. 
Dès que vous survolez la zone, un message s'affiche vous s'indiquant de **cliquez pour modifier**.

![img alt](/img/edition-proforma-hover-apercu.png)

Une fois que c'est fait, vous vous retrouverez face au formulaire d'édition!

### Stucture du formulaire
Le formulaire d'édition de la facture est composé de plusieurs éléments :
- **[Les informations de facturation](#les-informations-de-facturation)** (1) : Date, Client/prospect, Projet, ...
- **[Les détails du solde](#les-détails-du-solde)** (2) : Montant HT, TTC, TVA, Remise, ...
- **[Le bouton "Facture déjà soldée ?"](#le-bouton-facture-déjà-soldée)** (3),
- Les onglets (4) pour éditer le corps du document avec : 
**[les détails de la commande](#les-détails-de-la-commande)**,
**[les modalités de paiement](#les-modalités-de-paiement)**, 
**[les détails des paiements](#les-détails-des-paiements)** 
et **[les détails avancés](#les-détails-avancés)**.

![img alt](/img/edition-facture-form-structure.png)

:::tip

Si vous n'aviez pas encore enregistré les éléments demandés, vous pouvez le faire directement depuis ce formulaire, grâce à
la fonctionnalité d'**édition dynamique** de **THEMERYS Pro**. Consultez la **[documentation de l'édition dynamique](../../outils/edition-dynamique)** dédiée pour plus d'informations!

:::

### Les informations de facturation
Dans cette partie, vous pouvez définir :
- Si la facture est liée à un projet, grâce au bouton `Lier à un projet` (1);
- le client/prospect (ou le projet si la facture y est liée) (2);
- la date d'émission de la facture (3);

![img alt](/img/edition-facture-form-facturation.png)

### Les détails du solde
Cette rubrique, en plus de vous montrer les composants du solde de la facture, vous permet également de gérer la remise globale et les taxes.
Ainsi, vous y trouverez :
- le bouton `DÉFINIR UNE REMISE GLOBALE` (1) qui affiche ou masque le panneau de remise (2) dans le quel vous pouvez
choisir entre une remise `en pourcentage` ou `en devise`, grâce au bouton dédié (3);
- le bouton d'activation de la `TVA` (4) qui une fois activé vous donne sa valeur calculée (5);
- les montant `TTC` (6) et `HT` (7);
- le total `payé` (8)
- le `solde` final (9)

![img alt](/img/edition-facture-form-details.png)

### Le bouton "Facture déjà soldée ?"
Cette option située au dessus des `Détails`, une fois activée, va définir une ligne de paiement **"unique"** avec le même montant que le Total de la facture.
Ce qui changera automatiquement l'état de la facture en `Soldée`.

Cela peut être particulièrement utile si le client paie en un coup.

Dans **THEMERYS Pro**, sur le formulaire d'édition de la facture, vous trouverez 4 onglets rétractables (en accordéon) juste en desous **[des détails du solde](#les-détails-du-solde)**.

### Les détails de la commande

1. **Les sections**

Tout d'abord, dans **THEMERYS Pro**, les lignes des documents de facturation sont organisée en `Sections` (1) qui peuvent chacun avoir leur titre et description (2). 
Cela peut être d'une grande utilité si vous avez une facturation complexe à faire ou si vous voulez, par exemple, séparer les produits des services dans des tableaux distinctes.

Juste en dessous de la première section,  vous trouverez le bouton (3) qui vous permettra d'ajouter une nouvelle section.

2. **Les lignes du tableau**

Un autre bouton (4), qui cette fois se trouve dans le panneau de la section vous permettra d'ajouter des lignes (5) de différents types : 
`Article`, `Prestation`, `GRAND TITRE`, `Titre` et `Champ de texte`.
:::tip

Oui! Vous avez bien lu! Dans **THEMERYS Pro** pour pouvez insérer du texte et des titres sur vos factures (ou devis).

:::

![img alt](/img/edition-proforma-form-lignes.png)

3. **Les boutons d'action**

Vous pouvez effectuer un certains nombre d'actions (7) sur chaque ligne. Le menu d'action est accessible en cliquant sur l'icone ![img alt](/img/edition-proforma-form-lignes-menu-icone.png) (6) située à l'extrémité.

Vous pouvez donc : 
- **Consulter l'État des stocks** pour les lignes de type `Article`,
- **Insérer une ligne** au dessus ou en dessous (option disponible uniquement pour les lignes de type `Prestation`),
- **Déplacer la ligne** vers le Haut ou vers le Bas,
- **Supprimer la ligne**.


![img alt](/img/edition-proforma-form-details-commande.png)

### Les modalités de paiement
**THEMERYS Pro** supporte 2 types de modalité (`par étapes` et `par échéances`) que vous pouvez choisir dans la partie droite de l'onglet.

1. **Modalités par étapes**
Pour ce type de modalité, vous pouvez définir des pourcentages pour chaque étape du projet ou de vos prestations que vous facturez. 
Ceci, grâce au bouton `+ AJOUTER UNE ÉTAPE` (1).
Ensuite, vous avez juste à rentrer les pourcentages (2), le calcul est fait automatiquement en se basant sur le montant Total de votre factures.

Par exemple : **6O%** pour le **démarrage** et **40%** pour la **livraison**.

Tous comme les **lignes** précitées, chaque ligne d'étape dispose également des actions de **déplacement** et de **suppression**.

![img alt](/img/edition-proforma-form-modalites-etapes.png)

### Les modalités par échéances
Pour vos paiements en plusieurs fois, c'est ici que ça se passe!

Vous devez :
- D'abord choisir l'option `Par échéances` (1) à droite de l'onglet. Cela va changer le contenu de celui-ci afin de vous permettre de définir vos échéances,
- Définir la première date de paiement dans le champs `A partir du` (2),
- Ecrire le nombre de fois avec le champs `Paiement en` (3),
- Et Mettre le nombre de jours d'`interval` dans le champs du même nom (4).

Une fois que vous aurez effectuer cela, le tableau à votre gauche (5) va se remplir tout seul avec les dates calculées en fonction de vos choix.
Il ne vous restera qu'à définir les montants (6) de chaque échéance.

![img alt](/img/edition-proforma-form-modalites-echeances.png)

### Les détails des paiements
Dans **THEMERYS Pro**, les paiements clients sont enregistrés directement sur les factures. Et cela se passe dans l'onglet `DÉTAILS DES PAIEMENTS`.
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

Il est important de savoir que **tant que vous n'enregistez pas la facture, les paiements que vous ajoutez ou modifiez ne seront pas pris en compte!**

:::


### Les détails avancés
Cet onglet a été pensée pour des cas très spécifiques! Donc vous pouvez tout simplement l'ignorer! 🚶

## Assistance à la gestion de stock

À chaque enregistrement d'une nouvelle facture contenant des lignes d'articles, **THEMERYS Pro** vous suggère de créer un bon de sortie. S'inscrivant ainsi, dans 
la continuité logique des opérations.

Cela peut être pratique pour maintenir à jour vos stocks, si la commande du client a été totalement ou partiellement livrée.

![img alt](/img/edition-facture-save-suggestion.png)
