// Online Lectures

let promise1 = new Promise((resolve,reject) => {
    console.log("i am a promise");
    resolve("Success");
    reject("Some Error")
})
// Promise have 3 states 
// Pending
//Fullfiled[Resolve]
//Rejected


function getData(data1:any,nextData?:any){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log(data1);
            resolve("Success")
            if(nextData){
                nextData();
            };
        },5000)
    })
};

let result = getData(23);

result.then(() => {
    console.log("Promise Fulfilled");
    
})
result.catch(() => {
    console.log("Error Occured");
    
})













































