// Simple Object
let product = {
    title:"iMac",
    description:"it's a very smooth laptop",
    amount: 40000,
    isAwailible:true
}


// Specific type
type Products = {
    title:string,
    description:string,
    amount: number,
    isAwailible:boolean
}

// Object With types givin
let product1 : {
    title:string,
    description:string,
    amount: number,
    isAwailible:boolean
} = {
    title:"iMac",
    description:"it's a very smooth laptop",
    amount: 40000,
    isAwailible:true
};
// Object With Specific Type Given
let product2 : Products = {
    title:"iMac",
    description:"it's a very smooth laptop",
    amount: 40000,
    isAwailible:true
};
//  Object with Nested Object
let student = {
    name:"Hamza Nasir",
    gender:"male",
    address : {
        street:"street 1",
        postelCode:25700,
        city:"City Of Lights"
    },
    myLaptop: {
        title:"iMac",
        description:"it's a very smooth laptop",
        amount: 400000
    }

};
// Object
const product3 = {
    title:"Shirt",
    description:"it's very smooth",
    amount: 4000,
    additionalInfo : {
        colour:"White",
        size:"M",
        quantity:1
    }
}

//console.table(product3);

type Students = {
    name:string,
    gender:string,
    dob: number,
    department: {
        depName:string,
        faculty: "B.com" | "Bscs" | "Ba"
    }
};

const studentInfo : Students = {
    name:"Hamza Nasir",
    gender: "Male",
    dob:10112000,
    department:{
        depName:"Electrical",
        faculty:"B.com"
    }
}
//console.log(Object.keys(studentInfo.department.faculty));
//console.log(Object.values(studentInfo.department.faculty));
//console.log(Object.entries(studentInfo.department.faculty));


// Methods
const car = {
    name:"Elantra",
    colour:"Black",
    amount:500000,
    buyer: function(){
        console.log("Welcome")
    }
}
car.buyer()











































