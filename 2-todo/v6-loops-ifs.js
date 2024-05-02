// Version 6 - Boucles et conditions

class Item {

    constructor(name, done = false) {
        this.name = name;
        this.done = done;
    }

    display() {
        console.log('Item:', this.name, 'Done:', this.done);
    }

    toggle() {
        this.done = !this.done;
    }

}


class ToDo {

    constructor(name = 'My todo list', items = []) {
        this.name = name;
        this.items = items;
    }

    display() {

        if (this.items.length === 0) {
            console.log("Nothing to do! Free time!");
        }
        else {
            console.log('\n', this.name);
            
            // // Version 1, it's fine...
            // for (let i = 0; i < this.items.length; i++) {
            //     if (this.items[i].done) {
            //         console.log('(X)', i + 1, this.items[i].name);
            //     }
            //     else {
            //         console.log('( )', i + 1, this.items[i].name);
            //     }
            // }
            
            // // Version 2, it's better
            // for (let i = 0; i < this.items.length; i++) {
            //     console.log(this.items[i].done ? '(X)' : '( )', i + 1, this.items[i].name);
            // }

            // // Version 3, that's good !
            this.items.forEach((item, index) => {
                console.log(item.done ? '(X)' : '( )', index + 1, item.name);
            });
        }

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
        this.items[index].toggle();
        this.display();
    }

    toggleAll() {
        let totalItems = this.items.length;
        let completedItems = 0;

        this.items.forEach((item) => {
            if (item.done) {
                completedItems++;
            }
        });

        this.items.forEach((item) => {
            if (completedItems === totalItems) {
                item.done = false;
            }
            else {
                item.done = true;
            }
        });

        this.display();
    }
}

let myTodo = new ToDo('My todo', [new Item('item1'), new Item('item2'), new Item('item3')]);
myTodo.display();
myTodo.toggleAll();
