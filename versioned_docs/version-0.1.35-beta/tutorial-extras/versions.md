# Historique des versions

<!-- ![img alt](/img/illus-update.png) -->
<img src="../../img/illus-update.png" alt="Historique des versions" width="400" style={{ borderRadius: '12px'}} />

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
