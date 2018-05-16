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
    var arme = $(new_case_joueur).attr('class');
    //recuperation arme case
    arme = arme.replace('case', '').replace('arme', '').replace('case_active', '').replace(' ','');
    //changement des arme
    if (tour_fonction.joueur_actif == "joueur1"){
      $(new_case_joueur).removeClass(arme).addClass(joueur1.arme);
      joueur1.arme = arme;
      joueur1.degats = eval(arme).degats;
      plateau_fonction.init_info_joueur(joueur1);
      console.log(joueur1);
    } else if (tour_fonction.joueur_actif == "joueur2"){
      $(new_case_joueur).removeClass(arme).addClass(joueur2.arme);
      joueur2.arme = arme;
      joueur2.degats = eval(arme).degats;
      plateau_fonction.init_info_joueur(joueur2);
      console.log(joueur2);
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
  var num_new_case_plus_10 = +num_new_case + 10;
  var num_new_case_moins_1 = +num_new_case - 1;
  var num_new_case_moins_10 = +num_new_case - 10;
  if ($('#' + num_new_case_plus_1).hasClass('joueur') || $('#' + num_new_case_plus_10).hasClass('joueur')
  || $('#' + num_new_case_moins_1).hasClass('joueur') || $('#' + num_new_case_moins_10).hasClass('joueur')){
    combat_fonction.combat();
    break;
  }
  //changement joueur actif
  if (tour_fonction.joueur_actif == "joueur1"){
    tour_fonction.joueur_actif = "joueur2"
  } else {
    tour_fonction.joueur_actif = "joueur1"
  }
  //rapelle tour
  tour_fonction.tour_joueur();
});
