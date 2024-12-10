// Skapa en egen Promise
const myPromise1 = new Promise((resolve, reject) => {
    if(true) { // Allt funkar
        resolve("Success!");    
    } else { // Något gick fel
        reject("Error!");
    }
});

// Använd Promise med Promise-chaining
myPromise1.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

const myPromise2 = new Promise((resolve, reject) => {
    if(true) { // Allt funkar
        resolve("Success!");    
    } else { // Något gick fel
        reject("Error!");
    }
});

// Använda egen Promise med async/await
async function myAsyncFunction() {
    const result = await myPromise2;
    console.log(result);
}

myAsyncFunction();


// const flipACoin = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//     if (randomNumber > 0.5) {
//         resolve("Krona");
//     } else {
//         reject("Klave");
//     }
// });

// // async function flipCoin() {
// //     try {
// //         const result = await flipACoin;
// //         console.log(result);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// flipACoin.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// //flipCoin();