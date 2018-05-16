var tour_fonction = {
  joueur_actif : "joueur1",

  tour_joueur : function(){
    var case_joueur = $("." + tour_fonction.joueur_actif).attr('id');

    //gestion case + 10/20/30
    var case_plus_10 = +case_joueur;
    for (var i = 0; i < 3; i++){
       case_plus_10 = case_plus_10 + 10;
      if (!$('#' + case_plus_10).hasClass('rock') && case_plus_10 <= case_totale && !$('#' + case_plus_10).hasClass('joueur')){
        $('#' + case_plus_10).addClass('case_active');
      } else {
        break;
      }
    }

    //gestion case - 10/20/30
    var case_moins_10 = +case_joueur;
    for (var i = 0; i < 3; i++){
      case_moins_10 = case_moins_10 - 10;
      if (!$('#' + case_moins_10).hasClass('rock') && case_moins_10 > 0 && !$('#' + case_moins_10).hasClass('joueur')){
        $('#' + case_moins_10).addClass('case_active');
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
}
