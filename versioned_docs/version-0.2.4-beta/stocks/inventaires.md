---
sidebar_position: 2
---

# Inventaires
Qui dit gestion de stock éfficace, dit système d'inventaires performant! **THEMERYS Pro** ne fait pas exception à la règle.

## Accéder à la page
Dans le menu de gauche, vous pouvez y accéder en cliquant sur `Stocks` puis sur `Inventaires`.

![img alt](/img/inventaires-goto.png)

## Présentation
La page des inventaires est composée de deux parties :

### Les panneaux d'indication
Vous y trouverez des informations pertinantes sur la situation générale de vos stocks. 
Vous aurez ainsi 4 indicateurs :
- Nombre de stockages en état critique,
- Nombre de stockage en alerte (seuil atteint),
- Les Réceptions qui sont en attente suite à une commande auprès des fournisseurs,
- Les Livraisons aux clients qui sont en attente.

![img alt](/img/inventaires-bloc-info.png)

### Les tableaux de données
Un système d'onglets (1) vous permettra de basculer entre plusieurs tableaux, grâce aux boutons de sélections (2).

![img alt](/img/inventaires-structure.png)

## Liste des stockages
Les **stockages** représentent des groupes d'articles qui partagent la même unité de quantification (ex. Pce, Kg, Litre, ...), entreposés physiquement ou non.
Ex : des cartons de papiers au format A4. Ici l'unité est **"Carton"**. On n'y trouvera donc pas des **"Paquets"** de papiers A4.

Dans l'onglet correspondant, vous avez un tableau (1) présentant la liste.
Si vous voulez en savoir plus sur le fonctionnement des `tableaux de liste` de **THEMERYS Pro**, veuillez consulter
la **[documentation](../outils/tableaux)** dédiée.

### Créer un nouveau stockage
Pour ajouter un nouveau stockage à la liste, veuillez cliquer sur le bouton `+ CRÉER` (2) situé juste au dessus du champ de recherche.

![img alt](/img/stockages-creation.png)

Une fois sur le formulaire, vous aurez deux options à activer ou désactiver :
- `Lier à un projet` (1) : comme son nom l'indique, vous avez la possibilité de créer un stockage uniquement dans le cadre d'un projet client que vous exécuté.
- `Activer la gestion de stock` (2) : vous pouvez créer un stockage "passif" dans **THEMERYS Pro**, qui ne nécessitera pas de bon de sortie ou de réception et ne vous enverra pas d'alerte.

En suite, vous avez quelques informations à définir. Comme par exemple : L'article, l'entrepôt, ...
:::tip

Si vous n'aviez pas encore enregistré les éléments demandés, vous pouvez le faire directement depuis ce formulaire, grâce à
la fonctionnalité d'**édition dynamique** de **THEMERYS Pro**. Consultez la **[documentation de l'édition dynamique](../outils/edition-dynamique)** dédiée pour plus d'informations!

:::

:::info

Dès que vous définissez l'`Article`, l'`Entrepôt` et l'`Emplacement`, le champs `Nom du stockage` (3) est automatiquement formaté en fonction de ces 3 éléments là!
**Il est recommandé de le laissez ainsi pour une meilleur lisibilité**!

:::

Après avoir rempli les informations souhaitées cliquez sur le bouton `ENREGISTRER` (4).


:::note

Les champs qui doivent obligatoirement être remplis sont marqués par un `*`!

:::

![img alt](/img/stockages-creation-form.png)

Félicitation 🎊, vous avez créé un stockage dans  **THEMERYS Pro**!

### Modifier un stockage
Si vous souhaitez modifier les informations d'un stockage, il vous faudra :
1. **Le trouver dans la liste** 

Si vous ne le voyez pas dans la liste qui vous est présentée, utilisez le champs de recherche (1) du tableau
en y entrant une information qui lui est propre (le **Nom** de préférence).*

2. **Formulaire d'édition** 

Vous avez 2 possibilités : 
- cliquer sur la ligne du stockage concerné (2),
- ou utiliser le bouton d'action situé à l'extrémité droite de la ligne (3).
Cela déclenchera l'ouverture du formulaire d'enregistrement.

![img alt](/img/stockages-modifier.png)

3. **Validation**

Une fois que vous avez fini votre modification, cliquez sur le bouton `ENREGISTRER`.

### Autres actions
Dans cet onglet, vous avez la possibilité d'effectuer un certain nombre d'actions sur les lignes du tableau, comme par exemple : 
- définir le stockage comme principal : il sera suggéré par défaut lors de l'édition des bons (sortie, réception, ...);
- consulter l'**[état des stocks](#etat-des-stocks)** : pour les sockages dont l'option `Gestion de stock` a été activée;
- consulter la **[fiche du projet](../activités/projets/fiche-projet)** : pour les stockages liés à un projet spécifique;
- afficher le **[journal des opérations](#journal)** uniquement pour ce stockage;
- supprimer le stockage.

Vous pouvez retrouvez ces options dans les boutons d'action à l'extrémité de chaque ligne du tableau.

![img alt](/img/stockages-action-bouton.png)

## Etat des stocks
Cet onglet vous donne la situation en temps réel des stockages avec l'option `Gestion de stock` activée.
Dans le tableau (1), vous y trouverez des informations comme par exemple : le total des entrées, le total des sorties, le stock final, ...

### Actions possibles
Tout comme dans la plus part des tableaux, vous pourrez effectuer certaines actions (2) sur chaque ligne du tableau. Ainsi vous pourrez :
- retrouver le stockage correspondant en cliquant sur `Détails du stockage`,
- afficher le **[journal des opérations](#journal)** uniquement pour ce stockage,
- faire un ajustement de la quantité actuelle, grâce aux **[bons d'ajustement](./bons-ajustement)** en cliquant sur l'option `Ajuster le stock final`.

![img alt](/img/etat-stocks.png)

## Journal
Il s'agit du registre des mouvements qui ont été enregistrés sur tous les stockages.

Dans cet onglet, le tableau est assez riche d'informations sur chaque mouvement. Vous pouvez donc y trouver, entre autres, :
- la date et l'heure précise,
- le numéro du document à la source du mouvement (colonne `# Doc. source`), comme par exemple le numéro du **Bon de sortie**, de la **Facture**, ...,
- le type de mouvement : Ex. **entrée, sortie, transfert, ...**,
- les colonnes de départs (intitulé `De`) et d'arrivée (intitulé `Vers`),
- les détails sur les quantités : **Stock de départ, Qté déplacée, Stock final**

Dans les colonnes de départ et d'arrivée, des mentions en surbrillance vous permet de savoir de quel entité il s'agit, d'un simple coup d'oeil.

![img alt](/img/journal.png)

## Fil d'Attente
Dans **THEMERYS Pro** dès que vous crée une facture qui contient des lignes d'**[articles](../articles-prestations)** à livrer, cela crée automatiquement 
des mouvement de type `livraison` en attente pour le client. Pareil pour vos dépenses enregistrées de type `Commande de marchandise` qui, elles, créent des mouvement de type `réception` en attente.

Une fois que les **[bons de sortie](./bons-sortie)** ou les bons de livraison ont été créés, ces mouvements en attente passent de l'état `En attente` à `Traitée`.

:::warning

Il existe également un état nommé `Anomalie` qui se manifeste quand par exemple la quantité livrée ou reçue dépasse la quantité commandée.

:::

Le tout est soigneusement répertorié dans le tableau (1) présent dans cet onglet.

### Actions possibles
Dans ce tableau, il vous sera possible d'effectuer certaines actions (2) :
- Consulter la **[Facture]** et la **[Dépense]** à l'origine
- Consulter la liste des bons de **[Livraison](./bons-sortie)** ou de **[reception](./bons-reception)** correspondants

![img alt](/img/fil-attente.png)

:::info

**Si vous avez un problème**, vous pouvez procéder comme suit :
- Si vous avez un message d'erreur, lisez le! Cela peut vous aider à comprendre d'où vient le problème.
- Vérifiez si toutes les étapes précitées ont été respectées. N'hésitez pas à reéssayer!
- Vérifiez votre connexion internet!
- Contactez le support en suivant les **[indications ici](../outils/contact-support)**!

:::
