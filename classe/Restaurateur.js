const Personne = require('./Personne.js')

class Restaurateur extends Personne{
    constructor(prenom, nom){
        super(prenom,nom);
    }

    tuBosseIci(restau){
        this.restau = restau;
    }

    recoit(client){
        var readline = require('readline-sync');
        var nbClient = false;
        console.log("Ah bonjour !");
        while(Number.isInteger(nbClient) == false){
            nbClient = parseInt(readline.question("Combien êtes vous ?\n"));
        }
        
        var commande = false;
        while(Number.isInteger(commande) == false){
            nbClient = parseInt(readline.question("Très bien vous êtes donc " + nbClient + " Combien y aura t'il de " + this.restau.getmenu1() + " ? Et combien y aura t'il de " + this.restau.getmenu2() + " ?"));
        }
    }
}

module.exports = Restaurateur;