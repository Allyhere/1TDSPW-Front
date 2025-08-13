const taskForm = document.querySelector("[data-js=task-form]");
const taskTable = document.querySelector("[data-js=task-table]");
const taskDelete = document.querySelector("[data-js=task-delete]");
const taskConfig = document.querySelector("[data-js=task-config]");

const CONFIG_ELEMENTS = {
  "enable-value": document.querySelectorAll("[data-row='enable-value']"),
  "enable-duration": document.querySelectorAll("[data-row='enable-duration']"),
};

const updateElementsByRowName = (rowName) => {
  CONFIG_ELEMENTS[rowName].forEach((row) => {
    const datasetValue = row.dataset.js === "enable" ? "disable" : "enable";

    row.dataset.js = datasetValue;
  });
};

const createTaskEntry = (formData) => {
  const row = document.createElement("tr");
  for (value of formData) {
    const data = document.createElement("td");
    data.innerText = value.at(1);
    row.appendChild(data);
  }

  row.appendChild(createTaskDelete());

  return row;
};

const createTaskDelete = () => {
  const labelEl = document.createElement("label");
  labelEl.setAttribute("for", "task-delete");
  labelEl.innerHTML = "Deletar task";

  const inputEl = document.createElement("input");
  inputEl.setAttribute("type", "checkbox");
  inputEl.setAttribute("name", "task-delete");
  labelEl.appendChild(inputEl);

  const rowContainerEl = document.createElement("td");
  rowContainerEl.appendChild(labelEl);

  return rowContainerEl;
};

const addTaskEntry = (template) => {
  const lastNode = taskForm.querySelector("tbody tr:last-child");
  const parentElement = lastNode.parentElement;
  parentElement.insertBefore(template, lastNode);
};

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskData = new FormData(event.target);
  const generateTaskTemplate = createTaskEntry(taskData);

  addTaskEntry(generateTaskTemplate);
  event.target.reset();
});

Array.from(taskConfig.querySelectorAll("input")).forEach((input) => {
  input.addEventListener("click", ({ target }) => {
    const rowName = target.name;
    updateElementsByRowName(rowName);
  });
});
