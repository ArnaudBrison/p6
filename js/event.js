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

    if (tour_fonction.joueur_actif == "joueur1"){
      $(new_case_joueur).removeClass(new_arme).addClass(joueur1.arme);
      joueur1.arme =  new_arme;
      joueur1.degats = arme[new_arme];
      plateau_fonction.init_info_joueur(joueur1);
    } else if (tour_fonction.joueur_actif == "joueur2"){
      $(new_case_joueur).removeClass(new_arme).addClass(joueur2.arme);
      joueur2.arme = new_arme;
      joueur2.degats =  arme[new_arme];
      plateau_fonction.init_info_joueur(joueur2);
    }
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
  var num_new_case_plus_10 = +num_new_case + colonne_max;
  var num_new_case_moins_1 = +num_new_case - 1;
  var num_new_case_moins_10 = +num_new_case - colonne_max;

  if (num_new_case_plus_10 <= case_totale && $('#' + num_new_case_plus_10).hasClass('joueur')){
    combat_fonction.combat();
    return false;
  }
  if (num_new_case_moins_10 > 0 && $('#' + num_new_case_moins_10).hasClass('joueur')){
    combat_fonction.combat();
    return false;
  }
  if (num_new_case % colonne_max != 0 && $('#' + num_new_case_plus_1).hasClass('joueur')){
    combat_fonction.combat();
    return false;
  }
  if (num_new_case_moins_1 % colonne_max != 0 && $('#' + num_new_case_moins_1).hasClass('joueur')){
    combat_fonction.combat();
    return false;
  }

  //changement joueur actif
  tour_fonction.changement_joueur();
});

//gestion bouton attaquer
$(document).on('click', '.attq', function () {
  console.log(tab_joueur[tour_fonction.joueur_actif]);
  console.log(tab_joueur[tour_fonction.joueur_actif].degats);
  var degats = tab_joueur[tour_fonction.joueur_actif].degats;
  if (tab_joueur[tour_fonction.joueur_inactif].def == 'oui'){
    degats = degats / 2;
    tab_joueur[tour_fonction.joueur_inactif].sante = tab_joueur[tour_fonction.joueur_inactif].sante - degats;
    tab_joueur[tour_fonction.joueur_inactif].def = 'non'
  } else {
    tab_joueur[tour_fonction.joueur_inactif].sante = tab_joueur[tour_fonction.joueur_inactif].sante - degats;
  }
  if (tab_joueur[tour_fonction.joueur_inactif].sante <= 0){
    tab_joueur[tour_fonction.joueur_inactif].sante = 0;
    plateau_fonction.init_info_joueur(tab_joueur[tour_fonction.joueur_inactif]);
    $('#tab_' + tour_fonction.joueur_actif).find('.attq_def_btn').hide();
    $('#modal_end').css("background-color", tab_joueur[tour_fonction.joueur_actif].color).show();
    $('#modal_end').find('h4').append(tour_fonction.joueur_actif.toUpperCase() + ' a gagné !');
    return false;
  }
  plateau_fonction.init_info_joueur(tab_joueur[tour_fonction.joueur_inactif]);
  tour_fonction.changement_joueur();
});

//gestion bouton deffendre
$(document).on('click', '.def', function () {
  tab_joueur[tour_fonction.joueur_actif].def = "oui";
  tour_fonction.changement_joueur();
});
