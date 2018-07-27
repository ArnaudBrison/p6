var tab_armes = new Array();

function Arme (nom, degat, image){
  this.nom = nom;
  this.degat = degat;
  this.image = image;
};

Arme.prototype.attaque = function (player_off){
  var degats = this.degat;
  if (player_off.def == 'oui'){
    degats = degats / 2;
    player_off.sante = player_off.sante - degats;
    player_off.def = 'non'
  } else {
    player_off.sante = player_off.sante - degats;
  }
  if (player_off.sante <= 0){
    player_off.sante = 0;
    player_off.affich_info();
    $('#tab_' + tour_jeux.joueur_actif).find('.attq_def_btn').hide();
    $('#modal_end').css("background-color", tab_joueur[tour_jeux.joueur_actif].color).show();
    $('#modal_end').find('h4').append(tour_jeux.joueur_actif.toUpperCase() + ' a gagné !');
    return false;
  }
  player_off.affich_info();
  tour_jeux.changement_joueur();
};
