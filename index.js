const asianCities = ["Singapur", "HongKong", "Tokio", "Kathmandu"];
const euroCities = ["Berlin", "Paris", "London", "Barcelona", ...asianCities];

const result = [...euroCities, ...asianCities];

console.log(euroCities);