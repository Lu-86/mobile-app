const button = document.getElementById("add-button");
const itemValue = document.getElementById("input-field");

button.addEventListener("click", function () {
    let item = itemValue.value;
    console.log(item);
});
