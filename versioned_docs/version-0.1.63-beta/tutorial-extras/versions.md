# Historique des versions

<!-- ![img alt](/img/illus-update.png) -->
<img src="../../img/illus-update.png" alt="Historique des versions" width="400" style={{ borderRadius: '12px'}} />

## Version 0.1.64-beta

- **Amélioration de la gestion des stocks**

    Rendez-vous dans le menu principal, puis dans « Paramètres > AUTRES ».

    - Activez le **déstockage automatique** lorsque vous créez vos factures.
    — Génération automatique des bons de sortie.

    ![image.png](/img/destockage-auto.png)

    - Activez la **réception automatique des marchandises commandées** chez vos fournisseurs lorsque vous enregistrez vos dépenses.
    — Génération automatique des bons de réception.

    ![image.png](/img/reception-auto.png)

- **Attribuez des rôles à vos entrepôts**

    - Si vous avez plusieurs entrepôts (magasins), précisez à THEMERYS lesquels sont destinés à la livraison des clients et/ou à la réception des marchandises commandées chez vos fournisseurs.

    Rendez-vous dans le menu principal, puis dans « Stocks > Entrepôts ». Cliquez sur l'entrepôt concerné dans la liste ou créez-en un nouveau.

    ![image.png](/img/roles-entrepot.png)

    Des icônes apparaissent pour indiquer le rôle de chaque entrepôt.

    ![image.png](/img/roles-entrepot-icons.png)

- **Purgez la file d'attente et reprenez une gestion saine**

    Vous n'avez pas eu le temps de générer manuellement les bons de sortie et de réception pendant un certain temps, ce qui a considérablement rempli votre file d'attente dans la rubrique « Inventaire » ? Pas de problème !

    Vous pouvez désormais purger toute la file d'attente grâce à cette nouvelle fonctionnalité, sans que cela n'impacte vos stocks. Vous pourrez ensuite créer des ajustements pour mettre à jour vos stocks et reprendre le suivi.

    Rendez-vous dans le menu principal, puis dans « Inventaires > FILE D'ATTENTE ». Cliquez sur le bouton d'options situé en haut à droite du tableau.

    ![image.png](/img/purge-attentes.png)

- **Enregistrement des articles mis à jour**

    - Désactivez la gestion des stocks pour l'article.

    ![image.png](/img/disable-gestion-stock.png)

    - Ajoutez la photo de l'article.
    — Pour le moment, cette fonction est surtout utile pour les ventes POS.

    ![image.png](/img/photo-article.png)

    - Modifiez les débouchés des articles.
    — Tant qu'ils n'ont pas encore enregistré de vente.

    ![image.png](/img/debouches-article.png)

- **La création des devis, factures, dépenses et bons a été améliorée**

    - Ajoutez jusqu'à 10 lignes d'articles et/ou de prestations en un click.

    ![image.png](/img/ajouter-multi-lignes.png)

- **La fonction de suppression des factures a été retirée**

    - Annulez les factures au lieu de les supprimer !
    — Sous réserve d'un accès administrateur.

    ![image.png](/img/annuler-facture.png)

- **L'enregistrement des dépenses a été amélioré**

    - Dupliquez une dépense.

    ![image.png](/img/duplique-depense.png)

    - Utilisez des motifs ou des descriptions prédéfinis.
    — Cliquez pour remplir automatiquement.

    ![image.png](/img/motifs-predefinis.png)

## Version 0.1.62-beta

- **Données statistiques au niveaux des pages de Banques et Caisses** 
    
    - Données générales et par période
    
    ![image.png](/img/stats-page-caisses.png)

    - Retrouvez également les totaux des colonnes en bas des tableaux de mouvements.
    — cela peut vous être utile, quand vous manipuler les tableaux avec des tries. Par exemple : Totaux de toutes les sorties dans une interval de dates données.

    ![image.png](/img/totaux-mouvements-caisses-banque.png)

- **Masquez les annulations** 
    
    - Désormais, vous pouvez choisir de rendre **invisibles** les lignes annulées dans les tableaux. 
    — Par exemple : les paiements annulés.
    — Pour cela rendez-vous dans les **“Paramètres > AUTRES”** et défilez la page vers le bas. Vous y trouvez le bouton d’action.
    
    ![image.png](/img/masquer-elements-annules.png)

    ![image.png](/img/ligne-element-annule.png)

## Version 0.1.56-beta

- **Ajoutez vos articles en location** 
    
    - Sur le formulaire d’ajout d’article, choisissez l’option “À louer” au niveau de “Débouché”.
    
    Définissez le prix unitaire.
    — Vous serrez ensuite invité(e) à sélectionner la période de location à facturer.
    
    ![image.png](/img/add-article-location.gif)

    - Après l’enregistrement, une icone représentant la location apparaîtra sur la ligne de l’article à louer.

    ![image.png](/img/liste-articles-location-icon.png)

- **Ajoutez vos prestations périodiques** 
    
    - Sur le formulaire d’ajout de prestation, activez le bouton “Par période”.
    
    Définissez le prix unitaire.
    — Vous serrez ensuite invité(e) à sélectionner la période de facturation.
    
    ![image.png](/img/add-prestation-location.gif)

    - Après l’enregistrement, une icone représentant la facturation par période apparaîtra sur la ligne de la prestation périodique.

    ![image.png](/img/liste-prestation-location.png)

- **Facturez vos Articles en location et des prestations périodiques**

    - Pendant l’édition de la facture/proforma, dès que vous sélectionnez l’article en location (ou la prestation périodique), un panneau de configuration de la durée apparaît en dessous de la ligne.
    
    Définissez : la durée OU la date - heure de début et la date - heure de fin.

    ![image.png](/img/edition-facture-article-location.gif)

- **Gérez la livraison aux clientx de vos Articles en location puis leur retour en stock**

    - Retrouvez dans la file d’attente les articles à livrer ou à retourner selon la date et générez des bons de sortie ou de retour en stock.

    ![image.png](/img/fil-attente-location.png)

    - Enregistrez un bon de retour [NOUVEAU]

    ![image.png](/img/save-bon-retour-location.png)

    

## Version 0.1.47-beta

- **Cliquer pour copier le lien de partage des documents générés** 
    
    Nous avons rajouté un nouveau bouton sur la fenêtre d’apreçu des documents.
    Il vous permettra de copier automatiquement le lien de téléchargement de la version PDF des documents que génère Themerys (Factures, Proforma, Bons, …)

    Cela peut vous permettre d’envoyer rapidement le lien de téléchargement d’une facture par WhatsApp à un client, par exemple.
    
    ![image.png](/img/bouton-lien-partage.png)

- **Colonne de l’auteur du document de facturation** 
    
    Une nouvelle colonne est désormais ajoutée aux tableaux des Factures, Proforma et Dépenses pour afficher les utilisateurs qui en sont les auteurs.

    Un plus pour la transparence, dans le cadre d’une facturation gérée par plusieurs collaborateurs.
    
    ![image.png](/img/colonne-creee-par.png)

- **Affichage des articles disponibles par Entrepôts** 
    
    Il est désormais beaucoup plus facile de voir les articles disponibles avec leurs lots, en fonction de leur emplacement et entrepôt.

    Pour cela, Rdv sur la page Stocks > Entrepôts. Cliquez ensuite sur l’option “Consulter les lots” dans les actions de n’importe quel entrepôt ou emplacement.
    
    ![image.png](/img/list-articles-par-entrepot.png)

- **Corrections de bugs & quelques améliorations.** 


## Version 0.1.46-beta

- **Réinitialisation de votre espace Themerys** 
    
    Il est désormais possible d’effacer TOUT vos enregistrements pour tout simplement repartir de Zéro dans :  Menu > Paramètres > Autres.

    Cela peut être utiliser **si vous voulez d’abord tester Themerys Pro avant l’utilisation réelle**.

    :::danger
    - Notez que cette action sera IRREVERSIBLE. 
    - vous avez des doutes, contacter notre support.
    :::
    
    ![image.png](/img/reinitialisation.png)

## Version 0.1.44-beta

- **La barre de filtre par période s’adapte** 
    
    Le bouton de sélection de la période d’affichage, gagne en options et affiche désormais les totaux.
    
    ![image.png](/img/barre-filtre-new.png)
    
    Définissez n’importe quelle période comme “Par défaut” pour l’affichage des données, en fonction des pages, si cela vous semble plus pertinent.
    
    ![image.png](/img/barre-filtre-new-comme-defaut.png)

- **UI/UX** 
    
    - Marquage de la ligne de l’élément qui vient d’être modifier ou ajouter au tableau.
    
    — cela peut vous aider à vous retrouver, si vous avez plusieurs enregistrements à faire, par exemple.
    
    ![image.png](/img/marque-new-ligne-datatable.png)

    - Les lignes de création rapide persistent, après enregistrement et rechargement du tableau, pour fluidifier les saisies de plusieurs lignes.
    - Numérotations discrètes sur les formulaires d’édition des factures, proforma, dépenses, … pour aider les nouveaux utilisateurs à savoir dans quelle ordre saisir les informations.
    
    ![image.png](/img/numerotation-add-modal.png)

- **Groupe de Taxes applicables ou déductibles** 
    
    - Il est désormais possible de regrouper les taxes pour les utiliser, lors de l’édition de vos documents de facturation.
    Les groupes peuvent être créés au même endroit que les taxes :
    **Menu > Paramètres > Autres**
    
    ![image.png](/img/groupe-taxes.png)

## Version 0.1.41-beta

- **TVA & Autres taxes** 
    
    THEMERYS Pro prend désormais en charge la gestion de plusieurs taxes, à appliquer sur vos documents de facturation et de dépenses.
    Vous pourrez le faire dans **Paramètres > AUTRES**
    
    ![image.png](/img/reglage-tva.png)

- **Taxe par article et par prestations** 
    
    Vous avez la possibilité de prédéfinir les taxes à l'achat et à la vente de chaque article et prestation.
    
    ![image.png](/img/taxe-par-article.png)

- **Taxe par ligne du tableau des documents de facturation** 
    
    En plus des taxes globaux, il est maintenant possible dans THEMERYS Pro de définir les taxes différentes ligne par ligne, sur les formulaires d'édition de facture, proforma et dépense.
    
    ![image.png](/img/taxe-lignes-article.png)

- **Distinguez facilement les articles des prestations**

    Pendant l'édition dans la facturation, vous avez maintenant des codes couleurs pour vous aider à mieux distinguer les articles des prestations.
    
    ![image.png](/img/code-couleur-edition-doc.png)

- **Analyse des mouvements d'article dans le journal** 
    
    Nouvelle option dans les boutons d'action des bons générés, pour retrouver leurs mouvements précis dans le journal des stocks.
    
    ![image.png](/img/option-afficher-mvm.png)

- **Apparence des documents** 
    
    Nous avons apporté quelques modifications dans les réglages pour les factures et autres documents.
    
    - Possibilité de **masquer le nom et l'adresse de l'entreprise**. Cela peut être utile, si ces informations se retrouvent déjà dans votre entête de page.
        
        ![image.png](/img/reglage-masquer-nom-entreprise.png)

    - Modifiez le **wording sur les documents**. Titres, noms des colonnes du tableau et autres intitulés : personnalisez les libellés par défaut sur vos documents.
        
        ![image.png](/img/reglage-wording.png)


## Version 0.1.35-beta

- **Formulaire de création rapide pour les dépenses diverses.** 
    Enregistrez plus rapidement vos dépenses qui ne sont pas liées aux articles dans vos stocks.
    
    ![image.png](/img/depenses-add-rapide.png)
    
    - **Possibilité d’enregistrer un paiement initial total ou partiel** pendant l'enregistrement.
        
        ![image.png](/img/depenses-add-rapide-paiement-initial.png)

- **Amélioration de l’expérience d’annulation** lors de la saisie sur les ligne d’”*Ajout rapide*”.
    
    ![image.png](/img/bouton-annuler.png)
    
- **Bouton de filtre des tableaux par leurs entités parentes**
    Par exemple, vous pouvez afficher le tableau des factures selon le client, sans forcément passer par les filtres
    
    ![image.png](/img/affichage-par.png)
    
- **Marquage de la ligne récemment cliquée dans les tableaux**, selon la pertinence. Afin de vous aider à vous retrouver plus facilement.
    
    ![image.png](/img/ligne-marquee.png)
    
- **Insertion de la colonne des “coûts unitaires” pour la liste des Articles.**

![image.png](/img/articles-cout-unitaire.png)

- **Insertion de la colonne  “Articles commandés” pour la liste des Dépenses.**

![image.png](/img/depenses-articles-commandes.png)

- Nouveau réglage permettant d’**autoriser ou non le dépassement des quantités disponibles** pendant l’édition des factures.

![image.png](/img/facturer-au-dela.png)

- Mise en place de la **reprise à zéro du séquençage des numéros de dépense** à chaque changement d’année.
Exemple : 
DEP/24/00**47** — DEP/24/00**48** — DEP/24/00**49** —(changement d’année)— DEP/25/00**01** — DEP/25/00**02**, …

- **Retrait de la sélection des types de dépense**. Maintenant, vous avez un seul bouton de sélection pour les fournisseurs et autres prestataires externes. Plus quelques changements :
— Liberté d’enregistrer des articles commandés ou non
— Une dépense contenant des articles commandés sera automatiquement de type “Achat d’article”.

![image.png](/img/add-depense-changement.png)

## Version 0.1.33-beta

- Séparation de la gestion des paiements clients dans un onglet dédié.
  - Enregistrement rapide des paiements.
  - Possibilité d'annulation des paiements.
- Séparation de la gestion des paiements aux fournisseurs dans un onglet dédié.
  - Enregistrement rapide des paiements.
  - Possibilité d'annulation des paiements.
- Quelques petits changements mineurs...

## Version 0.1.15-beta

- Ajout de la page des Mouvements rapides d'Articles.
  - Localisée dans le menu **Stocks > Entrées & Sorties Libres**.
- Amélioration de la lecture des différentes rubriques de la page des **Inventaires**.
- Prise en charge de la gestion des **lots d'article**.
- Prise en charge des **catégories d'article**.
- Ajouts d'attributs supplémentaires dans l'enregistrement des articles :
  - Coût unitaire.
  - Composition (pour les formats packagés).
  - Péremption.
- Quelques petits changements mineurs...
