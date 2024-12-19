
class ToDo {
    public id: number;
    public content: string;
    public status: boolean;

    constructor(id: number, name: string, status: boolean = false) {
        this.id = id;
        this.content = name;
        this.status = status;
    }

    getStatus(): boolean {
        return this.status;
    }

    setStatus(status: boolean){
        this.status = status;
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string){
        this.content = content;
    }
}

const todo1 = new ToDo(1, 'Complete the project'); 
const todo2 = new ToDo(2, 'Review the code', true);

class ToDoListManager{
    private toDos: ToDo[] = [];
    
    addTodo(content: string):void{
        const id = this.toDos.length + 1; 
        const newTodo = new ToDo(id, content);
         this.toDos.push(newTodo);
    }

    removeToDo(id: number){
        this.toDos = this.toDos.filter(todo => todo.id != id);
    }

    updateToDo(id: number , content: string){
        const todo = this.toDos.find(todo => todo.id === id);
        if(todo){
            todo.content === content;
            todo.setContent(content);
        }
    }

    sortToDo(){
        this.toDos.sort((a , b) => a.content.localeCompare(b.content));
        this.listToDos();
    }

    findToDo(content: string){
        const todo = this.toDos.find(todo => todo.content === content);
        if(todo){
            console.log(`Location: ${todo.id}`);
        }else{
            console.log("Not Found!!!");
        }
    }

    listToDos(){
        this.toDos.forEach(todo => {
            console.log(`ID: ${todo.id} , Content: ${todo.content} , Status: ${todo.getStatus}`)
        });
    }
}

enum Input { 
    print = 'print', 
    add = 'add', 
    delete = 'delete', 
    edit = 'edit', 
    sort = 'sort', 
    search = 'search', 
    end = 'end', 
} 

class Main { 
    run(): void { 
        const manager = new ToDoListManager(); 
        let input: string; 
        do { 
            input = String(prompt( 
                'Manage todo list:\n\n' + 
                `${Input.print}: Print the todo list.\n` + 
                `${Input.add}: Add a task to the end of the list.\n` + 
                `${Input.delete}: Delete a task at any position.\n` + 
                `${Input.edit}: Edit the content of a task at any position.\n` + 
                `${Input.sort}: Sort and print the task content.\n` + 
                `${Input.search}: Search for a todo.\n` + 
                `${Input.end}: Stop the program.`, 
            )); 
            let resStr: string = '', resNum: number = -1; 
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