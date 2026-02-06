function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback(null, { id: 1, name: "Aom" });
  }, 2000);
}

fetchDataWithCallback((err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Callback data:", data);
  }
});
