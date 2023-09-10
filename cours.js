/* Variable */
let n = 0; //declaration et initialisation
let enfant = ["Ella", "Romaric"];
enfant.push("Rifiene");//Ajouter a la fin
enfant.unshift("Rifiene");//Ajouter au debut
enfant.pop(); //supprimer  a la fin
enfant.shift(); //supprimer  debut
enfant.length; //Taille du tableau (nombre d'element)

/*Utilisation de confirm, prompt, alert */
let confirmation = confirm("Monsieur Romaric");

if (confirmation.valueOf()) {
    alert("Bienvenue Monsieur Romaric!")
} else {
    alert("Bienvenue Monsieur" + prompt("Quel est votre nom alors ?"));
}

/*Separer les mots d'un string */
var pharse = " je suis un professionnel";
    pharse.split(" ");

/* Gerer les exeptions */ 
try {
    
} catch (error) {
    alert(error.getMessage());
}

/* Verifier l'existence d'une variable */
alert(typeof nom_de_la_variable);
 
/* Convertir une chaine de caratere en un entier */
parseInt(nom_de_la_variable);

/* Selecteur de selecteur CSS  */
var query = document.querySelector('#menu .item span');
var queryAll = document.querySelectorAll('#menu .item span');

/* Cibler un attribut d'une balise HTML */
var link = document.getElementById('myLink');
var href = link.href;

/* Bloquer l'action par defaut d'un element HTML apres le lancement d'un evenement */
onclick="return false;";

/* L'OBJET Event e: Donne des informations sur l'evenement actuel declenche */
e.type //type de l'evenement declenche ::: element | 
e.target //cibler l'element qui a declenche l'evenement ::: element | 
e.clientX //position horizontale du curseur  ::: document | mousemove
e.clientY //position verticale du curseur    ::: document | mousemove
e.relatedTarget //dire l'element quitter avant ::: element | 
String.fromCharCode(e.keyCode) //le code de la touche cliquer au clavier  ::: document || String.fromCharCode(); Pour transformer le code en Caratere
e.preventDefault(); //bloquer l'action par defaut d'un evenement ::: element | 

/* Formulaire */ 
//<input type="text" disabled="disabled" />
//value
e.target.value
// disabled, checked, readonly 
//<input id="text" type="text" disabled ="disabled">
//var text = document.getElementById('text');
//text.disabled = true;

//select
//selectedIndex, qui nous donne l'index (l'identifiant) de la valeur sélectionnée, et options qui liste dans un
//tableau les éléments <option> de notre liste déroulante.
list.options[list.selectedIndex].innerHTML

//Gerer  le focus
//focus() et blur(), permettant respectivement de donner et retirer le focus à un élément




