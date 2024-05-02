// Version 7 - Avec le DOM

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

class ToDoDom {

    constructor(todo) {
        this.todo = todo;
    }

    getHTML() {
        let container = document.createElement('div');
        container.innerHTML = '<h2>' + this.todo.name + '</h2>';

        let ul = document.createElement('ul');

        this.todo.items.forEach((item, index) => {
            let li = document.createElement('li');
            li.textContent = item.done ? '(X) ' + item.name : '( ) ' + item.name;
            ul.appendChild(li);
        });

        container.appendChild(ul);

        return container;
    }
}

function createList() {
    let todo = new ToDo('My todo', [new Item('item1'), new Item('item2'), new Item('item3')]);
    let todoList = new ToDoDom(todo);
    let listContainer = document.getElementById('lists-container');
    listContainer.append(todoList.getHTML());
}