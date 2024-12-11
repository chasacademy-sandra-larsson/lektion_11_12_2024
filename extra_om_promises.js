// Promise.all() - praktiskt exempel som visar hur man kan hämta data från tre olika API:er samtidigt
// och påbörja nästa steg när alla tre har svarat


// async function fetchData(url) {
//     const response = await fetch(url);
//     return response.json();
// }

// const urls = ['https://jsonplaceholder.typicode.com/users', 
//   'https://jsonplaceholder.typicode.com/posts', 
//   'https://jsonplaceholder.typicode.com/comments'];

// async function fetchAllData() {
//     try {
//         const usersPromise = fetchData(urls[0]);
//         const postsPromise = fetchData(urls[1]);
//         const commentsPromise = fetchData(urls[2]);
        
//         const [users, posts, comments] = await Promise.all([
//             usersPromise,
//             postsPromise,
//             commentsPromise
//         ]);
        
//         console.log([users, posts, comments]);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchAllData();

// Promise.race() - Promise.race är en metod som låter dig köra flera Promises parallellt och returnerar resultatet från den första Promise som antingen uppfylls (resolved) eller avvisas (rejected)
// Det används ofta när du behöver en snabb respons eller vill införa tidsbegränsningar för asynkrona operationer.

async function fetchWithTimeout(url, timeout) {

    const fetchPromise = fetch(url);
    
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), timeout)
    );
    
    try {
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        const data = await response.json();
        console.log("Data fetched:", data);
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 5000);