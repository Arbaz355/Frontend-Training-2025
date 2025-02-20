const arr = [1, 2, 3, 5, 6]; // map, find, filter, reduce, some, every - higher order functions
const result = arr.map((item) => item * 2);

// -> wake up, brush up, scrum meeting, training meeting, work
const printMyDailyRoutine = () => {
  console.log("wake up");

  setTimeout(() => {
    console.log("brush up");

    setTimeout(() => {
      console.log("scrum meeting");

      setTimeout(() => {
        console.log("training meeting");

        setTimeout(() => {
          console.log("work");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

printMyDailyRoutine();