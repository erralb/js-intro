// Version 8 - Avec des inputs

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
        this.items[index].done = !this.items[index].done;
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

class todoDom {

    constructor(todo) {
        this.todo = todo;
        this.ul = document.createElement('ul');
        this.todoInput = document.createElement('input');
        this.todoButton = document.createElement('button');
        this.todoButton.textContent = 'Ajouter une tâche';
        this.todoButton.addEventListener('click', () => this.add(this.todoInput.value));
    }

    add(item) {
        this.todo.add(item);
        this.todoInput.value = '';
        this.ul.appendChild(this.createLi(item));
    }

    createLi(item) {
        let li = document.createElement('li');
        li.textContent = '( ) ' + item;
        return li;
    }

    getHTML() {
        let container = document.createElement('div');
        container.innerHTML = '<h2>' + this.todo.name + '</h2>';
        let controls = document.createElement('div');
        controls.appendChild(this.todoInput);
        controls.appendChild(this.todoButton);
        container.appendChild(controls);

        this.todo.items.forEach((item, index) => {
            let li = document.createElement('li');
            li.textContent = item.done ? '(X) ' + item.name : '( ) ' + item.name;
            this.ul.appendChild(li);
        });

        container.appendChild(this.ul);

        return container;
    }
}

function createList() {
    let listName = document.getElementById('list-name').value;
    let todoList = new todoDom(new todo(listName));
    let container = document.getElementById('lists-container');
    container.append(todoList.getHTML());
}