/* CREATION CLASSE */
class Fraction{
    constructor(num, denom){
        this.numerateur = num;
        this.denominateur = denom;
    }
    afficher(){
        let fraction = this.numerateur + "/" + this.denominateur;
        alert(fraction);
    }
    setnumerateur(num){
        this.numerateur = num;
    }
    setdenominateur(denom){
        this.denominateur = denom;
    }
    addition(fraction){
        var num = (this.numerateur*fraction.denominateur) + (this.denominateur*fraction.numerateur);
        var denom = (this.denominateur*fraction.denominateur);
        alert("L'addition donne" + num + "/" + denom);
    }
    soustration(fraction){
        var num = (this.numerateur*fraction.denominateur) - (this.denominateur*fraction.numerateur);
        var denom = (this.denominateur*fraction.denominateur);
        alert("La soustration donne " + num + "/" + denom);
    }
    division(fraction){
        var num = (this.numerateur*fraction.denominateur);
        var denom = (this.denominateur*fraction.numerateur);
        alert("La divsion donne " + num + "/" + denom);
    }
    multiplication(fraction){
        var num = (this.numerateur*fraction.numerateur);
        var denom = (this.denominateur*fraction.denominateur);
        alert("La multiplication donne " + num + "/" + denom);
    }
}

/* HERITAGE */
class Rationnel_Normalise extends Fraction {
    #nom;
    nom;
    constructor(num, denom, is_rationnel){
        super(num, denom); /* Passer les parametres recu au constructeur de la classe Fraction */
        this.is_rationnel = is_rationnel;
    }

}

/* POLYMORPHISME */


/* Creation d'un objet  de la classe */
let num1 = prompt("Donner le numerateur de la fraction 1");
let denom1 = prompt("Donner le denominateur de la fraction 1");

let fraction = new Fraction(parseInt(num1), parseInt(denom1));

let num2 = prompt("Donner le numerateur de la fraction 2");
let denom2 = prompt("Donner le denominateur de la fraction 2");

let rationnel = new Rationnel_Normalise(parseInt(num2), parseInt(denom2), true);

fraction.afficher();
rationnel.afficher();

rationnel.addition(fraction);
rationnel.multiplication(fraction);
rationnel.division(fraction);
rationnel.soustration(fraction);

