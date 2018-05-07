var joueur = {
  //fonction d'initialisation des joueurs
  init: function (nom,sante){
    this.nom = nom;
    this.sante = 100;
  },
}

var joueur1 = Object.create(joueur);
var joueur2 = Object.create(joueur);


//initialisation des joueurs
joueur1.init("joueur1");
joueur2.init("joueur2");
