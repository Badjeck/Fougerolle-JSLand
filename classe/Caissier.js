const Personne = require('./Personne.js')

class Caissier extends Personne{
    constructor(prenom, nom){
        super(prenom, nom);
    }

    passPlace(placeMax , prix){
        this.place = placeMax;
        this.placeMax = placeMax;
        this.prix = prix;
    }
    
    recupClient(listeParticipant, budjet, client, attraction){
        var cout = listeParticipant.length * this.prix;
        if(cout <= budjet){
            this.gererPlace(listeParticipant.length, cout, client, attraction)
        } else {
            console.log("T'as pas assez de tune clodo");
        }
    }

    gererPlace(nbparticipant, cout, client, attraction){
        if(this.place >= nbparticipant){
            this.place -= nbparticipant;
            console.log("Pour participer tu doit payer " + cout + "€.");
            client.paye(attraction, cout);
            client.samuse();
        } else {
            console.log("il n'y as plus assez de place, vou devrez attendre le prochain tour")
            this.place = this.placeMax;
        }
    }

}

module.exports = Caissier;