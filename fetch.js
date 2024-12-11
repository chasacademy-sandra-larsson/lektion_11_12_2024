
// Använda fetch med async/await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;

        // I den inbygga funktionen fetch finns en Promise som resolvar (fick data) elle reject (fick inte data, fel uppstod)
        // let response = new Promise((resolve, reject) => {
        //     setTimeout(() => resolve("done!"), 3000);
        //   });

        // const message = await response;
        // console.log(message);

        
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Fetching data completed");
    }
}

fetchData();


// Använda fetch med Promise chaining
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
