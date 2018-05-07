var plateau_fonction = {
  init_plateau : function() {
    var id_case = 1;
    //initialisation des 9 ligne
    for ( var nombre_ligne = 0; nombre_ligne < ligne_max; nombre_ligne++) {
      var ligne = $('<div/>').addClass("ligne").appendTo("#plateau");
      //initialisation des 90 case
      for ( var nombre_case = 0; nombre_case < case_par_ligne_max; nombre_case++) {
        $('<div/>').attr("id",id_case).addClass('case').append(id_case).appendTo(ligne);
        id_case ++;
      }
    }
    //initialisation des rochers
    var nb_case = Math.floor(Math.random() * 15) + 5;
    for ( var i = 0; i < nb_case; i++) {
      var num_case = Math.floor(Math.random() * case_totale) + 1;
      $('#' + num_case).addClass("rock");
    }
  },

  //placement des armes
  placement_arme : function() {
    //variable aleatoire du nombre d'armes
    var nb_case = Math.floor(Math.random() * 4) + 1;
    for ( var i = 0; i < nb_case; i++) {
      var num_case = Math.floor(Math.random() * case_totale) + 1;
      while ($('#' + num_case).hasClass('rock') || $('#' + num_case).hasClass('arme')){
        if (num_case == case_totale){
          num_case = 0
        }
        num_case ++;
      }
      $('#' + num_case).addClass('arme ' + armes.tab_armes[i].nom);
    }
  },

  //placement du joueur1
  placement_joueur1 : function() {
    var num_case = Math.floor(Math.random() * case_totale) + 1;
    while ($('#' + num_case).hasClass('rock') || $('#' + num_case).hasClass('arme')){
      if (num_case == case_totale){
        num_case = 0
      }
      num_case ++;
    }
    $('#' + num_case).addClass('joueur1').append(' joueur1');
  },

  //placement du joueur2
  placement_joueur2 : function() {
    var num_case = Math.floor(Math.random() * case_totale) + 1;
    while (num_case){
      num_case_moins_1 = num_case - 1;
      num_case_plus_1 = num_case + 1;
      num_case_plus_10 = num_case + 10;
      num_case_moins_10 = num_case - 10;

      switch(num_case){
        case 1:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_plus_1).hasClass('joueur1') && !$('#' + num_case_plus_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
        case 10:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_moins_1).hasClass('joueur1') && !$('#' + num_case_plus_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
        case 81:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_plus_1).hasClass('joueur1') && !$('#' + num_case_moins_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
        case 90:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_moins_1).hasClass('joueur1') && !$('#' + num_case_moins_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
        case 11:
        case 21:
        case 31:
        case 41:
        case 51:
        case 61:
        case 71:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_plus_1).hasClass('joueur1') && !$('#' + num_case_moins_10).hasClass('joueur1')
          && !$('#' + num_case_plus_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
        case 20:
        case 30:
        case 40:
        case 50:
        case 60:
        case 70:
        case 80:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_moins_1).hasClass('joueur1') && !$('#' + num_case_moins_10).hasClass('joueur1')
          && !$('#' + num_case_plus_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_moins_1).hasClass('joueur1') && !$('#' + num_case_plus_1).hasClass('joueur1')
          && !$('#' + num_case_plus_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_moins_1).hasClass('joueur1') && !$('#' + num_case_plus_1).hasClass('joueur1')
          && !$('#' + num_case_moins_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
        default:
          if(!$('#' + num_case).hasClass('rock') && !$('#' + num_case).hasClass('arme') && !$('#' + num_case).hasClass('joueur1')
          && !$('#' + num_case_moins_1).hasClass('joueur1') && !$('#' + num_case_plus_1).hasClass('joueur1')
          && !$('#' + num_case_moins_10).hasClass('joueur1') && !$('#' + num_case_plus_10).hasClass('joueur1')){
            $('#' + num_case).addClass('joueur2').append(' joueur2');
          }
          break;
      }
      if ($('#' + num_case).hasClass('joueur2')){
        break;
      }
      if (num_case == case_totale){
        num_case = 0
      }
      num_case ++;
    }
  },

}
