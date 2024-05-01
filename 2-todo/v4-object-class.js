// Version 4 - Avec une classe d'objet

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
}

let todo1 = new todo;
todo1.display();
todo1.add('item1');
todo1.add('item2');
todo1.add('item3');

todo1.change(0, 'item1 est changé');

todo1.remove(1);


let todo2 = new todo('My todo list 2', ['item4', 'item5', 'item6']);
todo2.display();

