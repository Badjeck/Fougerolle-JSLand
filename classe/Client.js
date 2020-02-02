const Personne = require("./Personne.js");

class Client extends Personne {
    constructor(prenom, nom){
        super(prenom, nom);
        this.budjet = Math.floor(Math.random() * 100) + 11; //Budjet entre 11 et 110
    }

    veuxFaireUnTour(attraction){
        var listeParticipants = [];
        var readline = require('readline-sync');
        var participant = readline.question("Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membresde ma famille. Il  y a :\n");
        listeParticipants = participant.split(" ");
        listeParticipants.push(this.prenom);
        attraction.callEmploye(listeParticipants, this.budjet, this);
    }

    manger(restau){
        console.log("Bonjour, je mangerai dans ce restaurant, " + restau.getname());
        restau.veuxmanger(this);
    }


    paye(lieu, prix){
        this.dernierLieux = lieu;
        this.dernierTrans = prix;
        this.budjet -= prix;
    }

    samuse(){
        console.log("houlala moi est ma famille nous amusons beaucoup dans cette attraction ")
    }

    getClient(){
        return this
    }

    getname(){
        return this.prenom;
    }
}

module.exports = Client;