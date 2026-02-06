function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 2, name: "ce385" });
    }, 2000);
  });
}

fetchDataWithPromise()
  .then(data => console.log("Promise data:", data))
  .catch(err => console.log("Error:", err));
