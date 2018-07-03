$(document).on('click', '.case_active', function () {
  //gestion old_case_joueur
  var old_case_joueur = $("." + tour_fonction.joueur_actif).attr('id');
  $('#' + old_case_joueur).removeClass('joueur ' + tour_fonction.joueur_actif);
  if (!$('#' + old_case_joueur).hasClass('arme')){
    $('#' + old_case_joueur).addClass('vide');
  }

  //gestion nouvelle case joueur
  var new_case_joueur = this
  if ($(new_case_joueur).hasClass('arme')){
    //gestion rammassage arme
    var new_arme = $(new_case_joueur).attr('class');
    //recuperation arme case
    new_arme = new_arme.replace('case', '').replace('arme', '').replace('case_active', '');
    new_arme = new_arme.trim();
    //changement des arme
    $(new_case_joueur).removeClass(new_arme).addClass(tab_joueur[tour_fonction.joueur_actif].arme);
    tab_joueur[tour_fonction.joueur_actif].arme =  new_arme;
    joueur.info_joueur(tab_joueur[tour_fonction.joueur_actif]);
  }
  //ajout joueur sur nouvelle case
  $(new_case_joueur).removeClass('vide').addClass('joueur ' + tour_fonction.joueur_actif);
  //clean des case active
  $.each($('.case'),function(){
    $(this).removeClass('case_active');
  });

  //gestion rencontre joueur
  var num_new_case = $(new_case_joueur).attr('id');
  var num_new_case_plus_1 = +num_new_case + 1;
  var num_new_case_plus_colonne = +num_new_case + colonne_max;
  var num_new_case_moins_1 = +num_new_case - 1;
  var num_new_case_moins_colonne = +num_new_case - colonne_max;

  if (num_new_case_plus_colonne <= case_totale && $('#' + num_new_case_plus_colonne).hasClass('joueur')){
    tour_fonction.combat();
    return false;
  }
  else if (num_new_case_moins_colonne > 0 && $('#' + num_new_case_moins_colonne).hasClass('joueur')){
    tour_fonction.combat();
    return false;
  }
  else if (num_new_case % colonne_max != 0 && $('#' + num_new_case_plus_1).hasClass('joueur')){
    tour_fonction.combat();
    return false;
  }
  else if (num_new_case_moins_1 % colonne_max != 0 && $('#' + num_new_case_moins_1).hasClass('joueur')){
    tour_fonction.combat();
    return false;
  }

  //changement joueur actif
  tour_fonction.changement_joueur();
});

//gestion bouton attaquer
$(document).on('click', '.attq', function () {
  arme.attq();
});

//gestion bouton deffendre
$(document).on('click', '.def', function () {
  tab_joueur[tour_fonction.joueur_actif].def = "oui";
  tour_fonction.changement_joueur();
});
