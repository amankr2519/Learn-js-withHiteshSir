const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure

  if (success) {
      resolve("Data fetched successfully!");
  } else {
      reject("Error fetching data.");
  }
});

// console.log(myPromise)

async function getData() {
  try {
      const response = await myPromise; // Waits for the promise to resolve
      console.log(response); // Output: "Data fetched successfully!"
  } catch (error) {
      console.error(error); // Output: "Error fetching data."
  }
}

getData();

