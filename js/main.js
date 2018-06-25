//initialisation du plateau
plateau_fonction.init_plateau();
//placement des rochers
plateau_fonction.send_rocher_to_placement();
//initialisation des armes
arme["fleau"] = 40;
arme["masse"] = 40;
arme["hache"] = 50;
arme["sabre_laser"] = 70;
arme["baton"] = 10;

// mise en place des arme
plateau_fonction.send_arme_to_placement();
//initialisation des joueurs
var joueur1 = new joueur.init("joueur1",'#b50909');
var joueur2 = new joueur.init("joueur2", '#030396');
tab_joueur["joueur1"] = joueur1;
tab_joueur["joueur2"] = joueur2;
//mise en place du joueur 1
plateau_fonction.send_joueur1_to_placement();
//mise en place du joueur 2
plateau_fonction.placement_joueur2();
//init tab info joueur
plateau_fonction.init_info_joueur(joueur1);
plateau_fonction.init_info_joueur(joueur2);
//lancement tour par tour_joueur
tour_fonction.tour_joueur();
