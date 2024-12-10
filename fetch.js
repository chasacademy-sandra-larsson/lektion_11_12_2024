
// Använda fetch med Promise chaining
//fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((error) => console.error(error));

// Använda fetch med async/await
async function fetchData() {
    try {
        //const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // if (!response.ok) {
        //     throw new Error("Network response was not ok");
        // }
        // const data = await response.json();
        // console.log(data);

        let response = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 3000);
          });

        const message = await response;
        console.log(message);

        
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Fetching data completed");
    }
}

fetchData();