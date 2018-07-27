var tab_joueur = {};

function Joueur (nom, color, arme, image){
  this.nom = nom;
  this.sante = 100;
  this.arme = arme;
  this.def = "non";
  this.color = color;
  this.image = image;
}

Joueur.prototype.affich_info = function () {
  $('#tab_' + this.nom).empty();

  $('<p/>').append(this.nom.toUpperCase()).appendTo('#tab_' + this.nom);
  $('<p/>').addClass('case ').css('background-image', this.image).appendTo('#tab_' + this.nom);
  $('<p/>').append('Sante: ' + this.sante).appendTo('#tab_' + this.nom);
  $('<p/>').append('Arme: ' + this.arme.nom.replace(/\d/ , '')).appendTo('#tab_' + this.nom);
  $('<p/>').addClass('case ').css('background-image', this.arme.image).appendTo('#tab_' + this.nom);
  $('<p/>').append('Degats: ' + this.arme.degat).appendTo('#tab_' + this.nom);
  $('<h4/>').append('Ton tour').attr('id','turn_' + this.nom).appendTo('#tab_' + this.nom).hide();
  var div_bouton = $('<div/>').addClass('div_bouton').appendTo('#tab_' + this.nom);
  $('<a/>').addClass('waves-effect waves-light btn-small attq_def_btn attq  red').append('Attaquer').appendTo(div_bouton).hide();
  $('<a/>').addClass('waves-effect waves-light btn-small attq_def_btn def blue').append('Defendre').appendTo(div_bouton).hide();
};

Joueur.prototype.defendre = function (){
  this.def = "oui";
  tour_jeux.changement_joueur();
};
