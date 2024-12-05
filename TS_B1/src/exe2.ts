

// bai 3 
let firstName : string;
let lastName: string;
let surName: string;

firstName = "bui";
lastName = "loc";
surName = "dinh";

function upperCase(fullName:string){
    if(fullName.length === 0){
        return fullName;
    }
    return fullName.charAt(0).toUpperCase() + fullName.slice(1);
}; 

upperCase(firstName);
upperCase(lastName);
upperCase(surName);


function connectString(str1: string , str2: string , str3: string){
    return str1 + " " + str3 + " " + str2;
}

console.log(connectString(upperCase(firstName),upperCase(lastName), upperCase(surName))); 