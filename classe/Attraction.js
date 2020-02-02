const Batiment = require("./Batiment.js");
const Caissier = require("./Caissier.js");

class Attraction extends Batiment{
    constructor(nom, employe, placesMax, prix){
        super(nom,employe);
        this.placesMax = placesMax;
        this.prix = prix;
        this.employe.passPlace(placesMax, this.prix);
    }

    callEmploye(listepaticipant, budjet, client){
        this.employe.recupClient(listepaticipant, budjet, client , this);
    }
    
    getname(){
        return this.nom;
    }

    getemploye(){
        return this.employe;
    }

}

module.exports = Attraction;