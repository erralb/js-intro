// Version 3 - Avec un objet

let todo = {
    name: 'My todo list',
    items: [],
    display: function () {
        console.log(this.name, this.items);
        console.log('Items number: ', this.items.length, '\n');
    },
    add: function (item) {
        this.items.push(item);
        console.log('Item added: ', item);
        this.display();
    },
    change: function (index, newItem) {
        console.log('Item changed from: "', this.items[index], '" to: "', newItem, '"');
        this.items[index] = newItem;
        this.display();
    },
    remove: function (index) {
        console.log('Item removed: ', this.items[index]);
        this.items.splice(index, 1);
        this.display();
    }
}

todo;
todo.display();
todo.add('item1');
todo.add('item2');
todo.add('item3');

todo.change(0, 'item1 est changé');

todo.remove(1);