

class Client extends Personne{
    constructor(name,surname) {
        super();
        super.name = name;
        super.surname = surname;
        this.budjet = Math.floor(Math.random() * 100) + 11; //Budjet entre 11 et 110
    }

    DitBonjour() {
        console.log("Bonjour je suis " + this.surname + " " + this.name + " et j'ai  " + this.budjet)
    }
}

let Bobby = new Client("by","Bobby");
Bobby.DitBonjour();