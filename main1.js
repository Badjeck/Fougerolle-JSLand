const Client = require("./classe/Client.js");
const Attraction = require("./classe/Attraction.js");
const Caissier = require("./classe/Caissier.js");
const Restaurateur = require("./classe/Restaurateur.js");
const Restaurant = require("./classe/Restaurant.js");
const Manager = require("./classe/Manager")

let Billy = new Client("Billy", "bo");
let Baptiste = new Caissier("Jean", "Eude");
let Ratatouille = new Restaurateur("Ratatouille", "LeRat");
let Poireau = new Attraction("Poireau", Baptiste , 12, 5);
let Grec = new Restaurant("Grec",Ratatouille, "Kebab", "Americain", 5, 6);
let Edgard = new Manager("Edgard","Delor",[Baptiste,Ratatouille]);

// Billy.veuxFaireUnTour(Poireau);

// Billy.manger(Grec);

Billy.sePlaindre(Edgard);