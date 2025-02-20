// -> wake up, brush up, scrum meeting, training meeting, work
const promiseMorningRoutine = new Promise((resolve, reject) => {
  resolve("wake up");
});

promiseMorningRoutine
  .then((res) => console.log(res))
  .then(() => {
    console.log("HI");
    setTimeout(() => {
      console.log("Brush up");
    }, 1000);
  }).then(() => {
    console.log("Hello")
  })

// pending -> resolve, reject
const legalAgePromise = new Promise((resolve, reject) => {
  const age = 50;

  if (age >= 18) {
    setTimeout(() => {
      resolve("Legal age found");
    }, 2000);
  } else {
    reject("No legal age found");
  }
});
// try, catch, finally
legalAgePromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log("execution finished"));

// api example
const callApiPromise = (API_URL) => {
  return new Promise((resolve, reject) => {
    const isAuthToken = "adjhasjkdhjasdhk";
    if (isAuthToken) {
      resolve([
        {
          name: "arbaz",
          role: "react dev",
        },
        {
          name: "aman",
          role: "frontend dev",
        },
        {
          name: "aditya",
          role: "software dev",
        },
      ]);
    } else {
      reject("401 unauthorized");
    }
  });
};
const API_URL = "https:example.com/fetch-user-data";
callApiPromise(API_URL)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));


//   api call with fetch example
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err))