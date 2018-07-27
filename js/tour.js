function Tour (){
  this.joueur_actif = "joueur1";
  this.joueur_inactif = "joueur2";
  this.etat = "deplacement";
}

Tour.prototype.tour_joueur = function (){
  $('#turn_' + this.joueur_actif).show();
  var case_joueur = $("." + this.joueur_actif).attr('id');

  //gestion case + 10/20/30
  var case_plus_colonne = +case_joueur;
  for (var i = 0; i < 3; i++){
     case_plus_colonne = case_plus_colonne + plateau_jeu.colonne_max;
    if (!$('#' + case_plus_colonne).hasClass('rock') && case_plus_colonne <= plateau_jeu.case_totale && !$('#' + case_plus_colonne).hasClass('joueur')){
      $('#' + case_plus_colonne).addClass('case_active');
    } else {
      break;
    }
  }

  //gestion case - 10/20/30
  var case_moins_colonne = +case_joueur;
  for (var i = 0; i < 3; i++){
    case_moins_colonne = case_moins_colonne - plateau_jeu.colonne_max;
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
    if (!$('#' + case_plus_1).hasClass('rock') && case_test % plateau_jeu.colonne_max != 0 && !$('#' + case_plus_1).hasClass('joueur')){
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
    if (!$('#' + case_moins_1).hasClass('rock') && case_moins_1 % plateau_jeu.colonne_max != 0 && !$('#' + case_moins_1).hasClass('joueur')){
      $('#' + case_moins_1).addClass('case_active');
    } else {
      break;
    }
  }
};

Tour.prototype.combat = function() {
  $('#tab_' + this.joueur_actif).find('.attq_def_btn').show();
  this.etat = "combat";
  $('#turn_' + this.joueur_actif).hide();
};

Tour.prototype.changement_joueur = function(){
  if (this.etat == "combat"){
    $('#tab_' + this.joueur_actif).find('.attq_def_btn').hide();
    $('#tab_' + this.joueur_inactif).find('.attq_def_btn').show();
  }
  $('#turn_' + this.joueur_actif).hide();
  var temp = this.joueur_actif
  this.joueur_actif = this.joueur_inactif;
  this.joueur_inactif = temp;
  if (this.etat == "deplacement"){
    this.tour_joueur();
  }
};
