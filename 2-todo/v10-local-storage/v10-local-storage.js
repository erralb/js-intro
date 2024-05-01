// Version 10 - Avec local storage

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

    factory(obj) {
        Object.assign(this, obj)
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

    static count = 0;

    static lists = [];

    constructor(todo) {
        this.id = todoDom.count++;

        this.todo = todo;

        this.ul = document.createElement('ul');

        this.input = document.createElement('input');

        this.button = document.createElement('button');
        this.button.textContent = 'Ajouter une tâche';
        this.button.addEventListener('click', () => this.add(this.input.value));

        todoDom.lists.push(this.todo);

        this.save();
    }

    save() {
        localStorage.setItem("lists", JSON.stringify(todoDom.lists));
    }

    add(itemText) {
        let newItem = new item(itemText);
        this.todo.add(newItem);
        this.input.value = '';
        this.ul.appendChild(this.createLi(newItem));
        this.save();
    }

    createLi(item, id = null) {
        if(id === null) { id = this.todo.items.length - 1; }
        let li = document.createElement('li');
        let itemId = id;
        li.dataset.ulId = this.id;
        li.dataset.itemId = itemId;

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.addEventListener('click', () => this.toggle(itemId));
        checkbox.checked = item.done;
        li.appendChild(checkbox);

        if (item.done) {
            li.classList.add('done');
        }
        else {
            li.classList.remove('done');
        }

        let span = document.createElement('span');
        span.textContent = item.name;
        li.appendChild(span);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            this.todo.remove(itemId);
            li.remove();
            this.save();
        });
        li.appendChild(removeButton);

        return li;
    }

    toggle(id) {
        this.todo.toggleCompleted(id);
        let li = document.querySelector('li[data-ul-id="' + this.id + '"][data-item-id="' + id + '"]');
        let checkbox = li.getElementsByTagName('input')[0];
        checkbox.checked = this.todo.items[id].done;
        if (this.todo.items[id].done) {
            li.classList.add('done');
        }
        else {
            li.classList.remove('done');
        }
    }

    getHTML() {
        let container = document.createElement('div');
        container.innerHTML = '<h2>' + this.todo.name + '</h2>';
        let controls = document.createElement('div');
        controls.appendChild(this.input);
        controls.appendChild(this.button);
        container.appendChild(controls);

        this.todo.items.forEach((item, index) => {
            this.ul.appendChild(this.createLi(item, index));
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

console.log(localStorage);
// localStorage.clear();

if (localStorage.getItem("lists")) {
    let lists = JSON.parse(localStorage.getItem("lists") || "[]");
    lists.forEach((list) => {
        let newTodo = Object.assign(new todo, list);
        let todoList = new todoDom(newTodo);
        let container = document.getElementById('lists-container');
        container.append(todoList.getHTML());
    });
}