// Promise.all() - praktiskt exempel som visar hur man kan hämta data från tre olika API:er samtidigt
// och påbörja nästa steg när alla tre har svarat

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const url = ["https://jsonplaceholder.typicode.com/users?_limit=2", "https://jsonplaceholder.typicode.com/posts?_limit=2", "https://jsonplaceholder.typicode.com/comments?_limit=2"];

async function fetchAllData() {
    try {
        const userPromise = fetchData(url[0]);
        const postPromise = fetchData(url[1]);
        const commentsPromise = fetchData(url[2]);

        // Fånga uppp alla promises med Promise.all
       const [users, posts, comments] =  await Promise.all([userPromise, postPromise, commentsPromise]);
       console.log(users, posts, comments);

    } catch(error) {
        console.log("Error", error)
    }
}

fetchAllData()

// Promise.race() - Promise.race är en metod som låter dig köra flera Promises parallellt och returnerar resultatet från den första Promise som antingen uppfylls (resolved) eller avvisas (rejected)
// Det används ofta när du behöver en snabb respons eller vill införa tidsbegränsningar för asynkrona operationer.

// Lämnar för den intresserade!

// async function fetchTimeout(url, timeout) {

//   const fetchPromise = fetch(url);

//   const timeoutPromse = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject("Request timed out");
//     }, timeout);
//   });

//   try {
//     const raceResponse = await Promise.race([timeoutPromse, fetchPromise]);
//     const result = await raceResponse.json();
//     console.log("Data received within timeout: ", result);
//   } catch (error) {
//     console.log("Error. Too long time", error);
//   }
// }

// fetchTimeout("https://jsonplaceholder.typicode.com/users", 110);
