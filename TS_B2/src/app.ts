console.log(
    "Hello world!!!"
)

let arr: string[] = ["Making my way" , "Faded", "PickerBall" , "Happy"];
let arr1: number[] = [666, 677,888 , 999];

for(let i : number = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}


// ham xay dung san thao tac voi mang 
// - C2: Sử dụng vòng lặp for...of 
// -> Lấy ra toàn bộ phần tử có trong mảng (Không quan tâm đến chỉ số
// của những phần tử có trong mảng)

let numbers: number;
for(let numbers of arr1){
    console.log(numbers);
}   

// - C3: Sử dụng vòng lặp for...in
// -> Lấy ra toàn bộ phần tử có trong mảng (Làm việc được với toàn bộ
// chỉ số của các phần tử có trong mảng)

let index: string;
for(let index in arr){
    console.log(index, arr[index]);
}


arr.push("The Liems");
console.log(arr);

arr.pop(); // LAY PHAN TU DAU TIEN TRONG MANG
arr.shift(); // LAY PHAN TU CUOI CUNG TRONG MANG
arr.splice(2,1); // DUNG DE XOA CAC PHAN TU TRONG MANG 


console.log(arr.shift());

// kieu du lieu dai dien
let phoneList: Array<string>;

phoneList = ["09341413149"];


// object 

let person: { name: string , age: number , hobbies: string[] , gender: boolean} = {
    name : " nguyen van an",
    age: 20,
    hobbies: ["picker ball", "films"],
    gender: true
};


// list object 
let students: {id: number , name: string , age: number}[] = [
    {
        id: 1,
        name: "nguyen van b",
        age: 10
    },
    {
        id: 2,
        name: "nguyen van c",
        age: 15
    }

]

//tuple 
let roles: [string, string , string];
roles : ["admin" , "moderator" , "user"];


// console.log(roles[i]);

// for(let role of roles){
//     console.log(role);
// }

// enum

enum Role {
    ADMIN = 10,
    USER,
    MODERATOR,
}

console.log(Role.ADMIN);
console.log(Role.USER);
console.log(Role.MODERATOR);

let role = {
    ADMIN: 0,
    MODERATOR: 1,
    USER: 2,
}

// da ngon gnu 

enum langueges {
    Hello = "Bonjour!!!",
    langueges = "Phap",
};

console.log(langueges);


// union
/// type alias 

type RandomValueType  =  string | number | boolean;
let randomValue: RandomValueType;


randomValue = "HELLO WORLD";
randomValue = 100;
randomValue = false;


let num: number[]  = [ 10 , 11 ,12 ,14 ,14 , 18];

let newArr: number[] = num.map(function(element , index) {
    return element*element;
});


console.log(newArr);


function map(
    arr: number[],
    fn: (element: number, index: number) => number
  ): number[] {
    let result: number[] = [];
    for (let i in arr) {
      let mapElement: number = fn(arr[i], +i);
      result.push(mapElement);
    }
    return result;
  }
  
  let resultArr = map([3, 5, 7, 9, 11], function (element, index) {
    return element * element;
  });
  
  console.log(resultArr);