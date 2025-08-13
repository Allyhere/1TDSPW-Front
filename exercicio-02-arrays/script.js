const nameForm = document.querySelector("[data-js=name-form]");
let nameList = document.querySelector("[data-js=name-list]");
const nameOrder = document.querySelector("[data-js=name-order]");
const nameInvert = document.querySelector("[data-js=name-invert]");
const nameDelete = document.querySelector("[data-js=name-delete]");

const createUpdatedList = (nameValue) => {
  const newListItem = document.createElement("li");
  newListItem.innerText = nameValue;
  nameList.appendChild(newListItem);

  return nameList;
};

const applyUpdatedList = (newList) => {
  nameList.replaceWith(newList);
  nameList = newList;
};

const returnListAsValues = () => {
  const listChildren = nameList.children;
  const listValues = [];

  for (let item of listChildren) listValues.push(item.innerText);

  return listValues;
};

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameField = event.target.elements.name;
  const nameValue = nameField.value;

  if (!nameValue) return;

  const updatedList = createUpdatedList(nameValue);
  console.log(updatedList);

  applyUpdatedList(updatedList);

  event.target.reset();
});

nameOrder.addEventListener("click", () => {
  const newList = document.createElement("ul");
  const listValues = returnListAsValues();

  listValues.sort();
  for (let sortedItem of listValues) {
    const listItem = document.createElement("li");
    listItem.innerText = sortedItem;
    newList.appendChild(listItem);
  }

  applyUpdatedList(newList);
});

nameInvert.addEventListener("click", () => {
  const newList = document.createElement("ul");
  const listValues = returnListAsValues();

  listValues.reverse();

  for (let reversedItem of listValues) {
    const listItem = document.createElement("li");
    listItem.innerText = reversedItem;
    newList.appendChild(listItem);
  }

  applyUpdatedList(newList);
});

nameDelete.addEventListener("click", () => {
  const newList = document.createElement("ul");
  const nameItem = nameForm.elements.name.value;
  const listValues = returnListAsValues();
  const listIndex = listValues.indexOf(nameItem);

  if (listIndex < 0) return;
  listValues.splice(listIndex, 1);

  for (let reversedItem of listValues) {
    const listItem = document.createElement("li");
    listItem.innerText = reversedItem;
    newList.appendChild(listItem);
  }

  applyUpdatedList(newList);
});
