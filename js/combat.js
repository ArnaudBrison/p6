var combat_fonction = {
    combat : function() {
      $('#tab_' + tour_fonction.joueur_actif).find('.attq_def_btn').show();
      tour_fonction.etat = "combat";
    },
}
