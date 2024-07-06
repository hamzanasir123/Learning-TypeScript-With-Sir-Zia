// // Onsite Lectures With  Sir Ameen Alam

// // Transpilation(ts ko js me convert karna)
// //Interpreter(How To Run The Code)

// // Global Execution Context Variables Or Functions Ko Call Stack Se Bula Kar Hoist Karega 
// //Uske Baad Line By Line Code run Karega

// // Lemda function (Arrow Function)
// let someThing = () => {

// }

// // Synchronus  (Blocking) (linear) => Ek Time Pr Ek Kaam Ho Raha Ho Line By Line
// //  Asynchronus (Non_Blocking) (cunCurruncy) => Ek Hi Time Pr 2 Ya US Se Zyada Kaam Ho Raha Ho 

// // Promise
// //new Means Instance(Copy) Create KArna 


// let promise = new Promise ((resolve, reject) => {
//     // let result =  true;
//     // reject("Error");
//     resolve("Success")
//     // if(result === true){
//     //     console.log(resolve("Success"));
        
//     // }else{
//     //     console.log(reject("Error"));
        
//     // }
// }) 

// promise.then((response) => {
//     console.log(response);
    
// })
// .catch((error) => {
//     console.log(error); 
// }
// )
 function result (){
    console.log("1");
    console.log("2");
    console.log("3");
    setTimeout(() => {
        console.log("4")
    }, 5000)
   console.log("5");
    console.log("6");
    console.log("7");
    console.log("8");
    console.log("9");
    
}

result()

























