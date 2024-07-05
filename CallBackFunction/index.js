// Simple Callback Function
function mavi123(a, b) {
    return a + b;
}
function tanzeel456(a, b, callback) {
    console.log(callback(a, b));
}
// tanzeel456(4,5,mavi123)
// Callback function with settimeout
function getData(data1, nextData) {
    setTimeout(function () {
        console.log(data1);
        if (nextData) {
            nextData;
        }
    }, 2000);
}
getData(54, function () {
    getData(2, function () {
        getData(3, 6);
    });
});
