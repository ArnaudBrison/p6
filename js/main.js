//initialisation du plateau
plateau_fonction.init_plateau();
//initialisation des armes
var baton = new armes.init("baton", 10);
var fleau = new armes.init("fleau", 40);
var masse = new armes.init("masse", 40);
var hache = new armes.init("hache", 50);
var sabre_laser = new armes.init("sabre_laser", 70);
//envoie des armes dans le tableau
armes.tab_armes.push(fleau, masse, hache, sabre_laser, baton);
// mise en place des arme
plateau_fonction.placement_arme();
//initialisation des joueurs
var joueur1 = new joueur.init("joueur1");
var joueur2 = new joueur.init("joueur2");
//mise en place du joueur 1
plateau_fonction.placement_joueur1();
//mise en place du joueur 2
plateau_fonction.placement_joueur2();
