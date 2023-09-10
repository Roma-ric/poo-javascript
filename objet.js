/* OBJET: Pour transférer des données vers une base de données. */

var personne = {
    nom: {
        nom_famille: "AKODJENOU", 
        prenom: "Romaric",
    },
    age: 19,
    date_naissance: "2003-09-07",
    sexe: "masculin",
    centre_interet: ["musique", "programmation"],
    statut: "Etudiant",
    libre: false,
    dire_bonjour: function () {
        alert("Bonjour");
    },
    se_presenter: function () {
        this.dire_bonjour();
        alert("Je m'appelle " + this.nom.nom_famille + " " + this.nom.prenom + ". Je suis ne le " + this.date_naissance + 
                    " et j'ai " + this.age + "ans. Je suis de sexe " + this.sexe + " Je suis un " + this.statut +
                    ". Mes centres d'interets sont: la " + this.centre_interet[0] + " et la " + this.centre_interet[1] + ".");   
    }
}

//Appel methode d'un objet
personne.se_presenter();

//Ajouter de nouveau attribut et methode
personne["Celibataire"] = "100%";
personne["au_revoir"] = function () {
    alert("Bye Bye Ohhh!");
};

alert("Je suis celibataire a " + personne.Celibataire);
personne.au_revoir();


//Objet avec Constructeur
function Personne(nom, prenom, age, date_naissance, sexe, statut, libre, centre_interet) {
    this.nom = {
        nom_famille: nom,
        prenom: prenom
    };
    this.age = age;
    this.date_naissance = date_naissance;
    this.sexe =  sexe;
    this.centre_interet = [centre_interet[0], centre_interet[1]];
    this.statut = statut;
    this.libre = libre;
    this.dire_bonjour = function () {
        alert("Bonjour");
    },
    this.se_presenter =function () {
        this.dire_bonjour();
        alert("Je m'appelle " + this.nom.nom_famille + " " + this.nom.prenom + ". Je suis ne le " + this.date_naissance + 
                    " et j'ai " + this.age + "ans. Je suis de sexe " + this.sexe + " Je suis un " + this.statut +
                    ". Mes centres d'interets sont: la " + this.centre_interet[0] + " et la " + this.centre_interet[1] + ".");   
    }
}

// Personne.prototype

var personne = new Personne("AKODJENOU", "Romaric", 19, "07-09-2003", "Masculin", "Etudiant", false,  ["Musique", "Programmation"]);

    personne.se_presenter();
