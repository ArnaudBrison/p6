$(document).on('click', '.case_active', function () {
  //gestion old_case_joueur
  var old_case_joueur = $("." + tour_jeux.joueur_actif).attr('id');
  $('#' + old_case_joueur).removeClass('joueur ' + tour_jeux.joueur_actif);
  if (!$('#' + old_case_joueur).hasClass('arme')){
    $('#' + old_case_joueur).addClass('vide');
  }

  //gestion nouvelle case joueur
  var new_case_joueur = this
  if ($(new_case_joueur).hasClass('arme')){
    //gestion rammassage arme
    var new_arme = $(new_case_joueur).find('.arme_hidden').val();
    var i = 0;

    while (tab_armes[i].nom != new_arme){
      i++;
    }
    new_arme = tab_armes[i];
    //changement des arme
    $(new_case_joueur).css("background-image", tab_joueur[tour_jeux.joueur_actif].arme.image);
    $(new_case_joueur).find('.arme_hidden').val(tab_joueur[tour_jeux.joueur_actif].arme.nom);
    tab_armes.push(tab_joueur[tour_jeux.joueur_actif].arme);
    tab_joueur[tour_jeux.joueur_actif].arme =  new_arme;
    tab_armes.splice(i,1);
    tab_joueur[tour_jeux.joueur_actif].affich_info();
  }
  //ajout joueur sur nouvelle case
  $(new_case_joueur).removeClass('vide').addClass('joueur ' + tour_jeux.joueur_actif);
  //clean des case active
  $.each($('.case'),function(){
    $(this).removeClass('case_active');
  });

  //gestion rencontre joueur
  var num_new_case = $(new_case_joueur).attr('id');
  var num_new_case_plus_1 = +num_new_case + 1;
  var num_new_case_plus_colonne = +num_new_case + plateau_jeu.colonne_max;
  var num_new_case_moins_1 = +num_new_case - 1;
  var num_new_case_moins_colonne = +num_new_case - plateau_jeu.colonne_max;

  if (num_new_case_plus_colonne <= plateau_jeu.case_totale && $('#' + num_new_case_plus_colonne).hasClass('joueur')){
    tour_jeux.combat();
    return false;
  }
  else if (num_new_case_moins_colonne > 0 && $('#' + num_new_case_moins_colonne).hasClass('joueur')){
    tour_jeux.combat();
    return false;
  }
  else if (num_new_case % plateau_jeu.colonne_max != 0 && $('#' + num_new_case_plus_1).hasClass('joueur')){
    tour_jeux.combat();
    return false;
  }
  else if (num_new_case_moins_1 % plateau_jeu.colonne_max != 0 && $('#' + num_new_case_moins_1).hasClass('joueur')){
    tour_jeux.combat();
    return false;
  }

  //changement joueur actif
  tour_jeux.changement_joueur();
});

//gestion bouton attaquer
$(document).on('click', '.attq', function () {
  tab_joueur[tour_jeux.joueur_actif].arme.attaque(tab_joueur[tour_jeux.joueur_inactif]);
});

//gestion bouton defendre
$(document).on('click', '.def', function () {
  tab_joueur[tour_jeux.joueur_actif].defendre();
});
