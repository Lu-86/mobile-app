import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://myapp-62c90-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const moviesInDB = ref(database, "movies")

const itemValue = document.getElementById("input-field");
const button = document.getElementById("add-button");

button.addEventListener("click", function () {
    let item = itemValue.value.trim();

    if (item !== "") {
        push(moviesInDB, item);
        itemValue.value = "";
    }
});

onValue(moviesInDB, function (snapshot) {
    const data = (snapshot.val());
    console.log(data);
});
