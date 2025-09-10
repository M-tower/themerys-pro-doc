# Historique des versions

<!-- ![img alt](/img/illus-update.png) -->
<img src="../../img/illus-update.png" alt="Historique des versions" width="400" style={{ borderRadius: '12px'}} />

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
