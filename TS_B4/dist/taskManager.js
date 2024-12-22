"use strict";
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Task {
    constructor(id, title, deadline, isCompleted = false) {
        this.id = id;
        this.title = title;
        this.deadline = deadline;
        this.isCompleted = isCompleted;
    }
}
class Assignment {
    constructor(employee, task) {
        this.employee = employee;
        this.task = task;
    }
}
class TasksManager {
    constructor(employees = [], tasks = [], assignment = []) {
        this.employees = [],
            this.tasks = [],
            this.assignments = [];
    }
    addEmployee(name) {
        let id = Math.random();
        let newEmployee = new Employee(id, name);
        this.employees.push(newEmployee);
    }
    addTask(title, deadline) {
        let id = Math.random();
        let newTask = new Task(id, title, new Date(deadline));
        this.tasks.push(newTask);
        this.listTasks();
    }
    assignTask(employeeId, taskId) {
        const employee = this.employees.find(emp => emp.id === employeeId);
        const task = this.tasks.find(task => task.id === taskId);
        if (employee && task) {
            let newAssignment = new Assignment(employee, task);
            this.assignments.push(newAssignment);
            console.log("Task assigned success!!!");
        }
        else {
            console.log("Task assigned failed!!!");
        }
    }
    completeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.isCompleted = true;
            console.log("Task was completed !!!");
        }
        else {
            console.log("Task not completed !!!");
        }
    }
    listTasks() {
        if (this.listTasks.length === 0) {
            console.log("Not have task completed !!!");
        }
        else {
            this.tasks.forEach(task => {
                console.log(`ID: ${task.id}  , Deadline: ${task.deadline} , Status: ${task.isCompleted}`);
            });
        }
    }
}
class Main {
    constructor() {
        this.Manager = new TasksManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Menu chức năng:");
            console.log("1. Thêm nhân viên mới.");
            console.log("2. Thêm task mới.");
            console.log("3. Gán task cho nhân viên.");
            console.log("4. Đánh dấu task hoàn thành.");
            console.log("5. Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có).");
            console.log("6. Dừng chương trình.");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1-6) để điều khiển chương trình:");
            switch (choice) {
                case "1":
                    const name = String(prompt("Enter Name of Employee !!!"));
                    this.Manager.addEmployee(name);
                    break;
                case "2":
                    let title = String(prompt("Enter title: "));
                    let deadline = String(prompt("Enter deadline: "));
                    if (!title && !deadline) {
                        console.log("Not valid!!");
                    }
                    else {
                        this.Manager.addTask(title, deadline);
                    }
                    break;
                case "3":
                    let taskId = Number(prompt("Enter taskID: "));
                    let employeeId = Number(prompt("Enter employeeID: "));
                    if (!taskId && !employeeId) {
                        console.log("Invalid!!!");
                    }
                    else {
                        this.Manager.assignTask(employeeId, taskId);
                    }
                    break;
                case "4":
                    let takId = Number(prompt("Enter taskID: "));
                    if (!takId) {
                        console.log("Invalid!!!");
                    }
                    else {
                        this.Manager.completeTask(takId);
                    }
                    break;
                case "5":
                    this.Manager.listTasks();
                    break;
                case "6":
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ !!!");
                    break;
            }
        }
    }
}
const app = new Main();
app.bootstrap();
