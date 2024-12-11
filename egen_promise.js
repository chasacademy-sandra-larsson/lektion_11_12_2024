
// Skapa egen promise
// const myPromise = new Promise((resolve, reject) => {
//     if(true) {
//         resolve("Success");
//     } else {
//         reject("Error");
//     }
// });

//console.log(myPromise);

// async function myAsyncFunction() {
//     try {
//         const result = await myPromise;
//         console.log(result);
//     } catch(error) {
//         console.log(error);
//     }
// }

//myAsyncFunction();

// Egen Promise som simulerar en server respons

const serverResponse = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    // Server svarar
    if(randomNumber > 0.5) {
        resolve("Server response: Success");
    }
    // Server inte svarar 
    else {
        reject("Server response: Failed");
    }
});

console.log(serverResponse); // Denna returner bar ett Promise


// Använd Promise med async/await
async function serverResponseFn() {
    try {
        const result = await serverResponse;
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

serverResponseFn();







