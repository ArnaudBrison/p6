//initialisation du plateau
//function usage(ligne_max, colonne_max, max_rocher)
var plateau_jeu = new Plateau(9, 10, 15);
plateau_jeu.creation();
//placement des rochers
plateau_jeu.send_rocher();
//initialisation des armes
var fleau = new Arme("fleau",40, "url(img/fleau.jpg)");
var masse = new Arme("masse",40, "url(img/masse.jpg)");
var hache = new Arme("hache",50, "url(img/hache.jpg)");
var sabre = new Arme("sabre",70, "url(img/sabrelaser.jpg)");
var baton1 = new Arme("baton1",10, "url(img/baton.jpg)");
var baton2 = new Arme("baton2",10, "url(img/baton.jpg)");
tab_armes.push(fleau, masse, hache, sabre);

// mise en place des arme
plateau_jeu.send_arme();
//initialisation des joueurs
var joueur1 = new Joueur("joueur1",'#b50909', baton1, "url(img/joueur1.jpg)");
var joueur2 = new Joueur("joueur2", '#030396', baton2, "url(img/joueur2.jpg)");
tab_joueur["joueur1"] = joueur1;
tab_joueur["joueur2"] = joueur2;
//mise en place du joueur 1
plateau_jeu.send_joueur1();
//mise en place du joueur 2
plateau_jeu.placement_joueur2();
//init tab info joueur
joueur1.affich_info();
joueur2.affich_info();
//lancement tour par tour_joueur
var tour_jeux = new Tour();
tour_jeux.tour_joueur();
