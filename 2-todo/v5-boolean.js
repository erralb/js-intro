// Version 5 - Avec des booléens

class item {

    constructor(name, done = false) {
        this.name = name;
        this.done = done;
    }

    display() {
        console.log('Item:', this.name, 'Done:', this.done);
    }

}


class todo {

    constructor(name = 'My todo list', items = []) {
        this.name = name;
        this.items = items;
    }

    display() {
        console.log(this.name, this.items);
        console.log('Items number: ', this.items.length, '\n');
    }

    add(item) {
        this.items.push(item);
        console.log('Item added: ', item);
        this.display();
    }

    change(index, newItem) {
        console.log('Item changed from: "', this.items[index], '" to: "', newItem, '"');
        this.items[index] = newItem;
        this.display();
    }

    remove(index) {
        console.log('Item removed: ', this.items[index]);
        this.items.splice(index, 1);
        this.display();
    }

    toggleCompleted(index) {
        this.items[index].done = !this.items[index].done;
        this.display();
    }
}

let myTodo = new todo('My todo', [new item('item1'), new item('item2'), new item('item3')]);
myTodo.display();
myTodo.toggleCompleted(1);
