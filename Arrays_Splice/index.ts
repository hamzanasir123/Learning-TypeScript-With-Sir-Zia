let names = ["Hamza","Nasir","Khan"];

names.splice(1,0,"King","Ali");

console.log(names);

type Cars = [string,string,string];

let cars : Cars = ["Elantra","Civic","City"];

let mobiles = [
    [
        "iPhone","Samsung"
    ]
]

console.log(mobiles[0][1]);

let nums: (number | string [])[]= [1,2,3,4,5,["hamza"]]

console.log(nums[5][1]);

type Intersection = {
    name:string;
    class:string
}
type Intersection2 = {
    dob:number
}

let intersec : Intersection & Intersection2 = {
    name:"Hamza",
    class:"Thursday",
    dob:10/11/2000
}

let userName:string = "Hamza";
let userName1 = "Hamza" as string // as type casting operator

let num1 = 1 as number | string


































