var joueur = {
  //fonction d'initialisation des joueurs
  init: function (nom,sante){
    this.nom = nom;
    this.sante = 100;
    this.arme = "baton";
    this.degats = eval(this.arme).degats;
  },
}
