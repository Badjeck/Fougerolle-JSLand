class Personne {
    constructor(prenom, nom){
        this.nom = nom;
        this.prenom = prenom;
    }

    getname(){
        return this.prenom;
    }
    ditbonjour(){
        console.log("bonjour je m'appelle " + this.prenom + " " + this.nom);
    }
}

module.exports = Personne;
