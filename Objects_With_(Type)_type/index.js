// Simple Object
var product = {
    title: "iMac",
    description: "it's a very smooth laptop",
    amount: 40000,
    isAwailible: true
};
// Object With types givin
var product1 = {
    title: "iMac",
    description: "it's a very smooth laptop",
    amount: 40000,
    isAwailible: true
};
// Object With Specific Type Given
var product2 = {
    title: "iMac",
    description: "it's a very smooth laptop",
    amount: 40000,
    isAwailible: true
};
//  Object with Nested Object
var student = {
    name: "Hamza Nasir",
    gender: "male",
    address: {
        street: "street 1",
        postelCode: 25700,
        city: "City Of Lights"
    },
    myLaptop: {
        title: "iMac",
        description: "it's a very smooth laptop",
        amount: 400000
    }
};
// Object
var product3 = {
    title: "Shirt",
    description: "it's very smooth",
    amount: 4000,
    additionalInfo: {
        colour: "White",
        size: "M",
        quantity: 1
    }
};
console.table(product3);
var studentInfo = {
    name: "Hamza Nasir",
    gender: "Male",
    dob: 10112000,
    department: {
        depName: "Electrical",
        faculty: "B.com"
    }
};
//console.log(Object.keys(studentInfo.department.faculty));
//console.log(Object.values(studentInfo.department.faculty));
//console.log(Object.entries(studentInfo.department.faculty));
// Methods
var car = {
    name: "Elantra",
    colour: "Black",
    amount: 500000,
    buyer: function () {
        console.log("Welcome");
    }
};
car.buyer();
