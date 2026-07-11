import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";


const appSettings = {
    databaseURL: "https://myapp-62c90-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);

console.log(app);

const button = document.getElementById("add-button");
const itemValue = document.getElementById("input-field");

button.addEventListener("click", function () {
    let item = itemValue.value;
    console.log(item);
});
