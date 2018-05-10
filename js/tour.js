var tour_fonction = {
  joueur_actif : "joueur1",

  tour_joueur : function(){
    var case_joueur = $("." + tour_fonction.joueur_actif).attr('id');

    var case_plus_10 = +case_joueur + 10;
    var case_plus_20 = +case_joueur + 20;
    var case_plus_30 = +case_joueur + 30;
    var case_plus_1 = +case_joueur + 1;
    var case_plus_2 = +case_joueur + 2;
    var case_plus_3 = +case_joueur + 3;
    var case_moins_10 = case_joueur - 10;
    var case_moins_20 = case_joueur - 20;
    var case_moins_30 = case_joueur - 30;
    var case_moins_1 = case_joueur - 1;
    var case_moins_2 = case_joueur - 2;
    var case_moins_3 = case_joueur - 3;

    //gestion case + 10/20/30
    if (!$('#' + case_plus_10).hasClass('rock') && case_plus_10 <= case_totale && !$('#' + case_plus_10).hasClass('joueur')){
      $('#' + case_plus_10).addClass('case_active');
      if (!$('#' + case_plus_20).hasClass('rock') && case_plus_20 <= case_totale && !$('#' + case_plus_20).hasClass('joueur')){
        $('#' + case_plus_20).addClass('case_active');
        if (!$('#' + case_plus_30).hasClass('rock') && case_plus_30 <= case_totale && !$('#' + case_plus_30).hasClass('joueur')){
          $('#' + case_plus_30).addClass('case_active');
        }
      }
    }

    //gestion case - 10/20/30
    if (!$('#' + case_moins_10).hasClass('rock') && case_moins_10 > 0 && !$('#' + case_moins_10).hasClass('joueur')){
      $('#' + case_moins_10).addClass('case_active');
      if (!$('#' + case_moins_20).hasClass('rock') && case_moins_20 > 0 && !$('#' + case_moins_20).hasClass('joueur')){
        $('#' + case_moins_20).addClass('case_active');
        if (!$('#' + case_moins_30).hasClass('rock') && case_moins_30 > 0 && !$('#' + case_moins_30).hasClass('joueur')){
          $('#' + case_moins_30).addClass('case_active');
        }
      }
    }

    //gestion case + 1/2/3
    if (!$('#' + case_plus_1).hasClass('rock') && case_joueur % colonne_max != 0 && !$('#' + case_plus_1).hasClass('joueur')){
      $('#' + case_plus_1).addClass('case_active');
      if (!$('#' + case_plus_2).hasClass('rock') && case_plus_1 % colonne_max != 0 && !$('#' + case_plus_2).hasClass('joueur')){
        $('#' + case_plus_2).addClass('case_active');
        if (!$('#' + case_plus_3).hasClass('rock') && case_plus_2 % colonne_max != 0 && !$('#' + case_plus_3).hasClass('joueur')){
          $('#' + case_plus_3).addClass('case_active');
        }
      }
    }

    //gestion case - 1/2/3
    if (!$('#' + case_moins_1).hasClass('rock') && case_moins_1 % colonne_max != 0 && !$('#' + case_moins_1).hasClass('joueur')){
      $('#' + case_moins_1).addClass('case_active');
      if (!$('#' + case_moins_2).hasClass('rock') && case_moins_2 % colonne_max != 0 && !$('#' + case_moins_2).hasClass('joueur')){
        $('#' + case_moins_2).addClass('case_active');
        if (!$('#' + case_moins_3).hasClass('rock') && case_moins_3 % colonne_max != 0 && !$('#' + case_moins_3).hasClass('joueur')){
          $('#' + case_moins_3).addClass('case_active');
        }
      }
    }



    if (tour_fonction.joueur_actif == "joueur1"){
      tour_fonction.joueur_actif = "joueur2"
    } else {
      tour_fonction.joueur_actif = "joueur1"
    }
  },
}
