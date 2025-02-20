//   api call with fetch example
const API_URL = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(API_URL)
//   .then((response) => response.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

async function fetchData() {
  try {
    const res = await fetch(API_URL);
    if (res.statusText !== "OK") {
      throw new Error(`An error occurred ${res.statusText}`);
    }
    const jsonRes = await res.json();
    console.log(jsonRes);
  } catch (err) {
    console.log(err);
  }
}

// const fetchData2 = async () => {
//   const res = await fetch(API_URL);
//   const jsonRes = await res.json();
//   console.log(jsonRes);
// };

fetchData();
