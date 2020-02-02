var readline = require('readline-sync');



while(Number.isInteger(nbcom[]) == false){
    var commande = readline.question("commande \n");
    var nbcom = commande.split(" ");
    for(i = 0; i <= nbcom.length; i++){
        nbcom[i] = parseInt(nbcom[i]);
    }
    console.log("putain")
}
console.log("ok")
