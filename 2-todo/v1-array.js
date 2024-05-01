// Version 1 de la todo liste - Simple, avec un tableau (Array)

// 1 - On devrait pouvoir stocker nos Todos:
let todo = ["item1", "item2", "item3"];


// 2 - On devrait pouvoir afficher nos Todos:
console.log("Ma liste de todos:", todo);


// 3 - On devrait pouvoir ajouter des Todos:
todo.push("Mon nouvel item");

// 4 - On devrait pouvoir changer un todo
todo[2] = "item 3 est changé!"; //Attention les machines comptent à partir de 0 !

// 5 - On devrait pouvoir effacer un todo
todo.splice(2, 1); //va supprimer item3

