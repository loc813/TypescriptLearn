"use strict";
class Todo {
    constructor(id, content, status = false) {
        this._id = id;
        this._content = content;
        this._status = status;
    }
    get id() {
        return this._id;
    }
    get content() {
        return this._content;
    }
    get status() {
        return this._status;
    }
}
class TodoListManager {
    constructor() {
        this._todos = [];
    }
    addTodo(content) {
        let id = Math.random();
        let newTodo = new Todo(id, content);
        this._todos.push(newTodo);
        this.listTodos();
    }
    removeTodo(index) {
        this._todos.splice(index - 1, 1);
    }
    updateTodo(index, content) {
    }
    sortTodo() {
    }
    findTodo(content) {
        return -1;
    }
    listTodos() {
        console.log("*******************************");
        if (this._todos.length === 0) {
            console.log("Chưa có bất kỳ công việc nào cả !!!");
        }
        else {
            this._todos.forEach(function (element, index) {
                console.log(`${index + 1}. ${element.content} - ${element.status ? "Hoàn thành" : "Chưa hoàn thành"}`);
            });
        }
        console.log("*******************************");
    }
    getTodoLength() {
        return this._todos.length;
    }
}
class MainApp {
    constructor() {
        this._todoManager = new TodoListManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Menu chức năng:");
            console.log("1. In ra danh sách công việc.");
            console.log("2. Thêm công việc vào cuối danh sách.");
            console.log("3. Xóa công việc tại vị trí bất kỳ");
            console.log("4. Sửa nội dung công việc tại vị trí bất kỳ");
            console.log("5. Sắp xếp và in ra nội dung công việc");
            console.log("6. Tìm kiếm todo");
            console.log("7. Dừng chương trình.");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1-7) để điều khiển chương trình:");
            switch (choice) {
                case "1":
                    this._todoManager.listTodos();
                    break;
                case "2":
                    let content = prompt("Mời bạn nhập vào công việc");
                    if (!content) {
                        console.log("Công việc thêm mới không hợp lệ !");
                    }
                    else {
                        this._todoManager.addTodo(content);
                    }
                    break;
                case "3":
                    let input = prompt("Mời bạn nhập vào vị trí của công việc muốn xoá");
                    if (!input) {
                        console.log("Vị trí cần xoá không hợp lệ");
                    }
                    else {
                        let deleteIndex = +input;
                        if (Number.isNaN(deleteIndex) ||
                            deleteIndex < 0 ||
                            deleteIndex > this._todoManager.getTodoLength()) {
                            console.log("Vị trí cần xoá không hợp lệ");
                        }
                        else {
                            this._todoManager.removeTodo(deleteIndex);
                            this._todoManager.listTodos();
                        }
                    }
                    break;
                case "4":
                    break;
                case "5":
                    break;
                case "6":
                    break;
                case "7":
                    console.log("Cảm ơn, hẹn gặp lại !!!!");
                    loop = false;
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ !!!");
                    break;
            }
        }
    }
}
const Mainapp = new Main();
app.bootstrap();
