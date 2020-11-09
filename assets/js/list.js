const shoppingList = document.querySelector("#shoppingList");
const listItems = document.querySelector("#listItems");


shoppingList.addEventListener("submit", function (e) {
    e.preventDefault();
    const userInput = this.elements.userInput;
    newListitem(userInput.value);
    userInput.value = "";
});

const newListitem = (userInput) => {
    const newListItem = document.createElement("li");
    const delBtn = document.createElement("BUTTON");
    delBtn.innerHTML = "Delete";
    delBtn.className = "delBtn";
    newListItem.append(delBtn);
    newListItem.append(`${userInput}`);
    listItems.append(newListItem);
}

$(document).on("click", ".delBtn", function () {
    $(this).parent().remove();
});