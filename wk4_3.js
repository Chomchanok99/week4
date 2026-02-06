function simulateAsyncOperation(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeout >= 1000) {
        resolve(`Finished in ${timeout} ms`);
      } else {
        reject("Timeout too short!");
      }
    }, timeout);
  });
}
async function performAsyncTask(timeout) {
  try {
    const result = await simulateAsyncOperation(timeout);
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}
performAsyncTask(1500);
performAsyncTask(500);
