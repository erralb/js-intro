// Version 2 - Avec des fonctions

let todo = ["item1", "item2", "item3"]; //Pour cet exemple, on va utiliser une variable globale, mais ce n'est pas une bonne pratique !

// On devrait pouvoir afficher les todo (avec une fonction)
function display(todo) {
    console.log('My todo list:', todo);
}
display(todo);


// On devrait pouvoir ajouter des todo (avec une fonction)
function add(todo, item) {
    todo.push(item);
}
add(todo, "Ma nouvelle todo");
display(todo);


// On devrait pouvoir changer des todo (avec une fonction)
function change(todo, index, newItem) {
    todo[index] = newItem;
    return todo;
}
change(todo, 2, "Ma nouvelle valeur"); //va changer l’item à la position 2
display(todo);


// On devrait pouvoir effacer des todo (avec une fonction)
function remove(todo, index) {
    todo.splice(index, 1);
}
remove(todo, 0); //va effacer le todo à la position 0
display(todo);

