var armes = {
  // tableau des armes
  tab_armes : [],
  //fonction d'initialisation d'armes
  init: function (nom,degats){
    this.nom = nom;
    this.degats = degats;
  },
}

//creation des armes
var baton = Object.create(armes);
var fleau = Object.create(armes);
var masse = Object.create(armes);
var hache = Object.create(armes);
var sabre_laser = Object.create(armes);
