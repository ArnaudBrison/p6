var plateau_fonction = {
  ligne_max : 9,
  colonne_max : 10,
  case_totale : ligne_max * colonne_max,
  max_rocher : 15,
  init_plateau : function() {
    $('#modal_end').hide();
    var id_case = 1;
    //initialisation des 9 ligne
    for ( var nombre_ligne = 0; nombre_ligne < ligne_max; nombre_ligne++) {
      var ligne = $('<div/>').addClass("ligne").appendTo("#plateau");
      //initialisation des 90 case
      for ( var nombre_colonne = 0; nombre_colonne < colonne_max; nombre_colonne++) {
        $('<div/>').attr("id",id_case).addClass('case vide').appendTo(ligne);
        id_case ++;
      }
    }
  },

  placement : function(type, nb_case, parametre_sup){
    if (parametre_sup == undefined){
      parametre_sup_out = '';
    }
    if (parametre_sup == 'joueur'){
      parametre_sup_out = parametre_sup;
    }
    for ( var i = 0; i < nb_case; i++) {
      var num_case = Math.floor(Math.random() * case_totale) + 1;
      while (!$('#' + num_case).hasClass('vide')){
        num_case = Math.floor(Math.random() * case_totale) + 1;
      }
      if (type == 'arme '){
        var y = 0;
        for(var key in arme.tab)
        {
          parametre_sup_out = key;
          if (y == i){
            break;
          }
          y++;
        }
      }
      $('#' + num_case).addClass(type + parametre_sup_out).removeClass('vide');
    }
  },

  send_rocher_to_placement : function(){
    //initialisation des rochers
    var nb_case = Math.floor(Math.random() * max_rocher) + 5;
    plateau_fonction.placement('rock', nb_case);
  },

  //placement des armes
  send_arme_to_placement : function() {
    //variable aleatoire du nombre d'armes
    var nb_case = Math.floor(Math.random() * 4) + 1;
    plateau_fonction.placement('arme ', nb_case, arme.tab);
  },

  //placement du joueur1
  send_joueur1_to_placement : function() {
    plateau_fonction.placement('joueur1 ', 1 , 'joueur');
  },

  //placement du joueur2
  placement_joueur2 : function() {
    var num_case = Math.floor(Math.random() * case_totale) + 1;
    while (num_case){
      num_case_moins_1 = num_case - 1;
      num_case_plus_1 = num_case + 1;
      num_case_plus_colonne = num_case + colonne_max;
      num_case_moins_colonne = num_case - colonne_max;
      if ($('#' + num_case).hasClass('vide')){
        if (num_case_plus_colonne >= case_totale || !$('#' + num_case_plus_colonne).hasClass('joueur1')){
          if (num_case_moins_colonne < 0 || !$('#' + num_case_moins_colonne).hasClass('joueur1')){
            if (num_case % colonne_max == 0 || !$('#' + num_case_plus_1).hasClass('joueur1')){
              if (num_case_moins_1 % colonne_max == 0 || !$('#' + num_case_moins_1).hasClass('joueur1')){
                $('#' + num_case).addClass('joueur2 joueur').removeClass('vide');
              }
            }
          }
        }
      }

      if ($('#' + num_case).hasClass('joueur2')){
        break;
      }
      num_case = Math.floor(Math.random() * case_totale) + 1;
    }
  },
}
