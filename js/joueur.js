var joueur = {
  //fonction d'initialisation des joueurs
  init: function (nom,color){
    this.nom = nom;
    this.sante = 100;
    this.arme = "baton";
    this.def = 'non';
    this.color = color;
  },

  info_joueur : function(joueur){
    $('#tab_' + joueur.nom).empty();
    $('<p/>').append(joueur.nom.toUpperCase()).appendTo('#tab_' + joueur.nom);
    $('<p/>').addClass('case ' + joueur.nom +'_tab').appendTo('#tab_' + joueur.nom);
    $('<p/>').append('Sante: ' + joueur.sante).appendTo('#tab_' + joueur.nom);
    $('<p/>').append('Arme: ' + joueur.arme).appendTo('#tab_' + joueur.nom);
    $('<p/>').addClass('case ' + joueur.arme).appendTo('#tab_' + joueur.nom);
    $('<p/>').append('Degats: ' + arme.tab[joueur.arme]).appendTo('#tab_' + joueur.nom);
    $('<h4/>').append('Ton tour').attr('id','turn_' + joueur.nom).appendTo('#tab_' + joueur.nom).hide();
    var div_bouton = $('<div/>').addClass('div_bouton').appendTo('#tab_' + joueur.nom);
    $('<a/>').addClass('waves-effect waves-light btn-small attq_def_btn attq  red').append('Attaquer').appendTo(div_bouton).hide();
    $('<a/>').addClass('waves-effect waves-light btn-small attq_def_btn def blue').append('Defendre').appendTo(div_bouton).hide();
  },
}

var tab_joueur = new Array();
