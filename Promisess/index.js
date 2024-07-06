var promise = new Promise(function (resolve, reject) {
    console.log("i am a promise");
    resolve("Success");
    reject("Some Error");
});
// // Promise have 3 states 
// // Pending
// //Fullfiled[Resolve]
// //Rejected
function getData(data1, nextData) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(data1);
            resolve("Success");
          // reject("error");
            if (nextData) {
                nextData();
            }
            ;
        }, 5000);
    });
}
;

console.log("Fecthing Data.....1")
let result = getData(23);
result.then(function (res) {
    console.log("Promise Fulfilled" + res);
});


result.catch(function (rej) {
    console.log("Error Occured" + rej);
});


console.log("Fecthing Data.....1")
result = getData(43);
result.then(function (res) {
    console.log("Promise Fulfilled" + res);
});


// Promise Chaining;

console.log("Fecthing Data.....1");
getData(34).then((res) => {
    console.log(res);
    console.log("Fecthing Data.....2")
    getData(45).then((res) => {
        console.log(res);
    })
})

// Promise Chaining in a Different Way;

getData(4)
.then((res) => {
    return getData(5);
})
.then((res) => {
    return getData(6);
})
.then((res) => {
    console.log(res);
})
















