class Batiment {
    constructor(nom, employe){
        this.nom = nom;
        this.employe = employe;
    }

    getname(){
        return this.nom
    }
}

module.exports = Batiment;