var arme = {
  tab : new Array(),

  attq : function () {
    var degats = arme.tab[tab_joueur[tour_fonction.joueur_actif].arme];
    if (tab_joueur[tour_fonction.joueur_inactif].def == 'oui'){
      degats = degats / 2;
      tab_joueur[tour_fonction.joueur_inactif].sante = tab_joueur[tour_fonction.joueur_inactif].sante - degats;
      tab_joueur[tour_fonction.joueur_inactif].def = 'non'
    } else {
      tab_joueur[tour_fonction.joueur_inactif].sante = tab_joueur[tour_fonction.joueur_inactif].sante - degats;
    }
    if (tab_joueur[tour_fonction.joueur_inactif].sante <= 0){
      tab_joueur[tour_fonction.joueur_inactif].sante = 0;
      joueur.info_joueur(tab_joueur[tour_fonction.joueur_inactif]);
      $('#tab_' + tour_fonction.joueur_actif).find('.attq_def_btn').hide();
      $('#modal_end').css("background-color", tab_joueur[tour_fonction.joueur_actif].color).show();
      $('#modal_end').find('h4').append(tour_fonction.joueur_actif.toUpperCase() + ' a gagné !');
      return false;
    }
    joueur.info_joueur(tab_joueur[tour_fonction.joueur_inactif]);
    tour_fonction.changement_joueur();
  },
}
