function Plateau (ligne_max, colonne_max, max_rocher){
  this.ligne_max = ligne_max
  this.colonne_max = colonne_max
  this.case_totale = (this.ligne_max) * (this.colonne_max);
  this.max_rocher = max_rocher
}

Plateau.prototype.creation = function (){
  $('#modal_end').hide();
  var id_case = 1;
  //initialisation des ligne
  for ( var nombre_ligne = 0; nombre_ligne < this.ligne_max; nombre_ligne++) {
    var ligne = $('<div/>').addClass("ligne").appendTo("#plateau");
    //initialisation des case
    for ( var nombre_colonne = 0; nombre_colonne < this.colonne_max; nombre_colonne++) {
      $('<div/>').attr("id",id_case).addClass('case vide').appendTo(ligne);
      id_case ++;
    }
  }
};

Plateau.prototype.placement = function (type, nb_case, tab) {
  for ( var i = 0; i < nb_case; i++) {
    var num_case = Math.floor(Math.random() * this.case_totale) + 1;
    while (!$('#' + num_case).hasClass('vide')){
      num_case = Math.floor(Math.random() * this.case_totale) + 1;
    }
    if (type == 'arme '){
     $('<input/>').attr('type',"hidden").addClass('arme_hidden').val(tab[i].nom).appendTo('#' + num_case);
     $('#' + num_case).css("background-image",tab[i].image);
    }
    $('#' + num_case).addClass(type).removeClass('vide');
  }
};

Plateau.prototype.send_rocher = function () {
  //initialisation des rochers
  var nb_case = Math.floor(Math.random() * this.max_rocher) + 5;
  this.placement('rock', nb_case);
};


Plateau.prototype.send_arme = function() {
  //variable aleatoire du nombre d'armes
  var nb_case = Math.floor(Math.random() * 4) + 1;
  this.placement('arme ', nb_case, tab_armes);
};

Plateau.prototype.send_joueur1 = function() {
  this.placement('joueur1 joueur', 1);
};

//placement du joueur2
Plateau.prototype.placement_joueur2 = function() {
  var num_case = Math.floor(Math.random() * this.case_totale) + 1;
  while (num_case){
    num_case_moins_1 = num_case - 1;
    num_case_plus_1 = num_case + 1;
    num_case_plus_colonne = num_case + this.colonne_max;
    num_case_moins_colonne = num_case - this.colonne_max;
    if ($('#' + num_case).hasClass('vide')){
      if (num_case_plus_colonne >= this.case_totale || !$('#' + num_case_plus_colonne).hasClass('joueur1')){
        if (num_case_moins_colonne < 0 || !$('#' + num_case_moins_colonne).hasClass('joueur1')){
          if (num_case % this.colonne_max == 0 || !$('#' + num_case_plus_1).hasClass('joueur1')){
            if (num_case_moins_1 % this.colonne_max == 0 || !$('#' + num_case_moins_1).hasClass('joueur1')){
              $('#' + num_case).addClass('joueur2 joueur').removeClass('vide');
            }
          }
        }
      }
    }

    if ($('#' + num_case).hasClass('joueur2')){
      break;
    }
    num_case = Math.floor(Math.random() * this.case_totale) + 1;
  }
};
