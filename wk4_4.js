function fetchDataFromServer1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server1 ✅ data (2s)"), 2000);
  });
}

function fetchDataFromServer2() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Server2 ❌ error (1s)"), 1000);
  });
}

function fetchDataFromServer3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Server3 ✅ data (3s)"), 3000);
  });
}
 
//กรณีที่ 1
Promise.any([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3()
])
  .then((result) => console.log("Case 1 (First Success):", result))
  .catch((err) => console.log("Case 1 Error:", err));
 
//กรณีที่ 2
Promise.allSettled([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3()
]).then((results) => {
  const formatted = results.map((r, i) => ({
    server: `server${i + 1}`,
    status: r.status,
    value: r.status === "fulfilled" ? r.value : null,
    reason: r.status === "rejected" ? r.reason : null
  }));

  console.log("Case 2 (All Settled Results):", formatted);
});
