const Personne = require("./Personne");
const Attraction = require("./Attraction");

class Manager extends Personne{
    constructor(prenom, nom, employeAcharge){
        super(prenom, nom);
        this.listeEmploye = employeAcharge;
    }

    plainte(attraction, prix){
        console.log("Quoi ?! Votre derniere expérience au" + attraction.getname() + " avec " + this.getemploye() + " ne vous a pas convaincu ?? Laissez moi vous dédommager. Tenez voilà " + prix + "€");
    }    
}

module.exports = Manager;