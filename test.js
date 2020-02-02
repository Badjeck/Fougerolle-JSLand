var readline = require('readline-sync');


var nbcom = [false,false]

while(Number.isInteger(nbcom[0]) == false){
    var commande = readline.question("commande \n");
    var nbcom = commande.split(" ");
    for(i = 0; i <= nbcom.length; i++){
        nbcom[i] = parseInt(nbcom[i]);
    }
    console.log("putain")
}
console.log("ok")
