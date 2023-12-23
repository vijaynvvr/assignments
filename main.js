const axios = require('axios');

axios.post(
    "http://localhost:5001/api/auth/login",
    { email: "test@123", password: "test@123" },
)
.then((data) => {
    console.log(data.data);
})
.catch((err) => {
    console.log(err);
});

// fetch("http://localhost:5001/api/auth/login", {
//     body: JSON.stringify({ email: "test@123", password: "test@123" }),
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
// .then((data) => {
//     return data.json()
// })
// .then(jsonData => {
//     console.log(jsonData);
// })
// .catch((err) => {
//     console.log(err);
// });
