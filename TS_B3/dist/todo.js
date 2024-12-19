"use strict";
class ToDo {
    constructor(id, name, status = false) {
        this.id = id;
        this.content = name;
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
}
const todo1 = new ToDo(1, 'Complete the project');
const todo2 = new ToDo(2, 'Review the code', true);
class ToDoListManager {
    constructor() {
        this.toDos = [];
    }
    addTodo(content) {
        const id = this.toDos.length + 1;
        const newTodo = new ToDo(id, content);
        this.toDos.push(newTodo);
    }
    removeToDo(id) {
        this.toDos = this.toDos.filter(todo => todo.id != id);
    }
    updateToDo(id, content) {
        const todo = this.toDos.find(todo => todo.id === id);
        if (todo) {
            todo.content === content;
            todo.setContent(content);
        }
    }
    sortToDo() {
        this.toDos.sort((a, b) => a.content.localeCompare(b.content));
        this.listToDos();
    }
    findToDo(content) {
        const todo = this.toDos.find(todo => todo.content === content);
        if (todo) {
            console.log(`Location: ${todo.id}`);
        }
        else {
            console.log("Not Found!!!");
        }
    }
    listToDos() {
        this.toDos.forEach(todo => {
            console.log(`ID: ${todo.id} , Content: ${todo.content} , Status: ${todo.getStatus}`);
        });
    }
}
var Input;
(function (Input) {
    Input["print"] = "print";
    Input["add"] = "add";
    Input["delete"] = "delete";
    Input["edit"] = "edit";
    Input["sort"] = "sort";
    Input["search"] = "search";
    Input["end"] = "end";
})(Input || (Input = {}));
class Main {
    run() {
        const manager = new ToDoListManager();
        let input;
        do {
            input = String(prompt('Manage todo list:\n\n' +
                `${Input.print}: Print the todo list.\n` +
                `${Input.add}: Add a task to the end of the list.\n` +
                `${Input.delete}: Delete a task at any position.\n` +
                `${Input.edit}: Edit the content of a task at any position.\n` +
                `${Input.sort}: Sort and print the task content.\n` +
                `${Input.search}: Search for a todo.\n` +
                `${Input.end}: Stop the program.`));
            let resStr = '', resNum = -1;
            switch (input) {
                case Input.print:
                    manager.listToDos();
                    break;
                case Input.add:
                    resStr = String(prompt('Enter content:'));
                    manager.addTodo(resStr);
                    manager.listToDos();
                    break;
                case Input.delete:
                    resNum = Number(prompt('Enter id:'));
                    manager.removeToDo(resNum);
                    manager.listToDos();
                    break;
                case Input.edit:
                    resNum = Number(prompt('Enter id:'));
                    resStr = String(prompt('Enter new content:'));
                    manager.updateToDo(resNum, resStr);
                    manager.listToDos();
                    break;
                case Input.sort:
                    manager.sortToDo();
                    break;
                case Input.search:
                    resStr = String(prompt('Enter content:'));
                    manager.findToDo(resStr);
                    break;
                case Input.end:
                    return;
            }
        } while (input !== Input.end);
    }
}
new Main().run();
