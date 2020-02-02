const Batiment = require('./Batiment.js');

class Restaurant extends Batiment{
    constructor(nom, employe, menu1, menu2, prix1, prix2){
        super(nom,employe);
        this.menu1 = menu1;
        this.menu2 = menu2;
        this.prix1 = prix1;
        this.prix2 = prix2;
        this.employe = employe;
        employe.tuBosseIci(this);
    }

    veuxmanger(client){
        this.employe.recoit(client);
    }
    
    getmenu1(){
        return this.menu1
    }

    getmenu2(){
        return this.menu2
    }
}

module.exports = Restaurant;