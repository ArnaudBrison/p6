var tour_fonction = {
  joueur_actif : "joueur1",
  joueur_inactif : "joueur2",
  etat : "deplacement",

  tour_joueur : function(){
    $('#turn_' + tour_fonction.joueur_actif).show();
    var case_joueur = $("." + tour_fonction.joueur_actif).attr('id');

    //gestion case + 10/20/30
    var case_plus_colonne = +case_joueur;
    for (var i = 0; i < 3; i++){
       case_plus_colonne = case_plus_colonne + colonne_max;
      if (!$('#' + case_plus_colonne).hasClass('rock') && case_plus_colonne <= case_totale && !$('#' + case_plus_colonne).hasClass('joueur')){
        $('#' + case_plus_colonne).addClass('case_active');
      } else {
        break;
      }
    }

    //gestion case - 10/20/30
    var case_moins_colonne = +case_joueur;
    for (var i = 0; i < 3; i++){
      case_moins_colonne = case_moins_colonne - colonne_max;
      if (!$('#' + case_moins_colonne).hasClass('rock') && case_moins_colonne > 0 && !$('#' + case_moins_colonne).hasClass('joueur')){
        $('#' + case_moins_colonne).addClass('case_active');
      } else {
        break;
      }
    }

    //gestion case + 1/2/3
    var case_plus_1 = +case_joueur;
    var case_test = +case_joueur;
    for (var i = 0; i < 3; i++){
      case_plus_1 = case_plus_1 + 1;
      if (!$('#' + case_plus_1).hasClass('rock') && case_test % colonne_max != 0 && !$('#' + case_plus_1).hasClass('joueur')){
        $('#' + case_plus_1).addClass('case_active');
      } else {
        break;
      }
      case_test = case_test + 1;
    }

    //gestion case - 1/2/3
    var case_moins_1 = +case_joueur;
    for (var i = 0; i < 3; i++){
      case_moins_1 = case_moins_1 - 1;
      if (!$('#' + case_moins_1).hasClass('rock') && case_moins_1 % colonne_max != 0 && !$('#' + case_moins_1).hasClass('joueur')){
        $('#' + case_moins_1).addClass('case_active');
      } else {
        break;
      }
    }
  },

  changement_joueur : function(){
    if (tour_fonction.etat == "combat"){
      $('#tab_' + tour_fonction.joueur_actif).find('.attq_def_btn').hide();
      $('#tab_' + tour_fonction.joueur_inactif).find('.attq_def_btn').show();
    }
    $('#turn_' + tour_fonction.joueur_actif).hide();
    var temp = tour_fonction.joueur_actif
    tour_fonction.joueur_actif = tour_fonction.joueur_inactif;
    tour_fonction.joueur_inactif = temp;
    if (tour_fonction.etat == "deplacement"){
      tour_fonction.tour_joueur();
    }
  },
}
