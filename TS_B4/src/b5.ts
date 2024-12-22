class Student {
    public id: number;
    public name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}


class Course {
    public id: number;
    public name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}


class Enrollment {
    student: Student;
    course: Course;
    scheduleTime: string;

    constructor(student: Student, cousre: Course, scheduleTime: string){
        this.student = student;
        this.course = cousre;
        this.scheduleTime = scheduleTime;
    }
}

class StudyManager {
    private students: Student[];
    private courses: Course[];
    private enrollments: Enrollment[];

    constructor(students: Student[] = [] , courses: Course[] = [], enrollments: Enrollment[] = []){
        this.students = [];
        this.courses = [];
        this.enrollments = [];
    }

    addStudent(name: string): void{
        const id = this.students.length + 1;
        let newStudent = new Student(id, name);
        this.students.push(newStudent);
        console.log("Them hoc sinh moi thanh cong");
    }

    addCourse(title: string):void{
        const id = this.courses.length + 1; 
        let newCourse = new Course(id,title);
        this.courses.push(newCourse);
        console.log("Them khoa hoc moi thanh cong");
    }

    enrollStudent(StudentId: number , courseId: number , scheduleTime: string):void{
        const idStudent = this.students.find(student => student.id === StudentId);
        const idCourse = this.courses.find(course => course.id === courseId);
        if(idCourse && idStudent){
            let newEnrollment = new Enrollment(idStudent, idCourse, scheduleTime);
            this.enrollments.push(newEnrollment);
            console.log("Dang ky khoa hoc thanh cong!!!");
        }else{
            console.log("Id hoc sinh hoac Id khoa hoc khong hop le!!!");
        }
    }

    listEnrollment():void{
        this.enrollments.forEach(enroll => {
            console.log(`Student: ${enroll.student}, Course: ${enroll.course} , ScheduleTime: ${enroll.scheduleTime}`);
        })
    }

}

class MainStudyManager {
    private studyMag: StudyManager;

    constructor(){
        this.studyMag = new StudyManager();
    }

    run():void{
        let loop: boolean = true;
        while(loop){
            console.log("Menu chuc nang: ");
            console.log("====================================");
            console.log("1.Them sinh vien moi.");
            console.log("2.Them khoa hoc moi.");
            console.log("3.Dang ky khoa hoc cho sinh vien");
            console.log("4.Hien thi thoi khoa bieu hoc tap");
            console.log("5.Dung chuong trinh");
            console.log("====================================");

            let choice = Number(prompt("Nhap lua chon chay truong chinh 1-5: "));

            switch(choice){
                case 1: 
                    let name = String(prompt("Nhap ten sinh vien: "));
                    this.studyMag.addStudent(name);
                    break;
                case 2: 
                    let course = String(prompt("Nhap ten khoa hoc: "));
                    this.studyMag.addCourse(course);
                    break;
                case 3:
                    let idStudent = Number(prompt("Nhap ma hoc sinh dang ky: "));
                    let idCourse = Number(prompt("Nhap ma khoa hoc hoc sinh dang ky"));
                    let timeEnroll = String(prompt("Nhap thoi gian dang ky: "));
                    this.studyMag.enrollStudent(idStudent, idCourse, timeEnroll);
                    break;
                case 4: 
                    this.studyMag.listEnrollment();
                    break;
                case 5:
                    break;
                default:
                    console.log("khong hop le");
                    break;
            }
        }
    }

}


