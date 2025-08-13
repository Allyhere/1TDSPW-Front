let salaryList = document.querySelector("[data-js=salary-list]");
const salaryGenerate = document.querySelector("[data-js=salary-generate]");
const salaryOutput = document.querySelector("[data-js=salary-output]");

const SALARIES = [
  1250.5, 3400.0, 875.99, 4500.75, 2150.25, 5000.0, 1890.4, 3125.8, 950.0,
  2780.66,
];
const CEIL = 2000;
const MAXIMUM = 2500;

const formatSalary = (salary) => {
  return new Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(salary);
};

salaryGenerate.addEventListener("click", () => {
  const newList = document.createElement("ul");
  newList.dataset.js = "salary-list";

  const updatedSalaries = SALARIES.map((salary) => {
    if (salary <= CEIL) return salary * 1.15;
    if (salary > CEIL) return salary * 1.1;
  });

  const filteredSalaries = updatedSalaries.filter((salary) => salary > MAXIMUM);
  const reducedSalary = filteredSalaries.reduce(
    (acc, curr) => (acc += curr),
    0
  );

  salaryOutput.innerText = `Total: ${formatSalary(reducedSalary)}`;

  filteredSalaries.forEach((salary) => {
    const listItem = document.createElement("li");
    listItem.innerText = formatSalary(salary);

    newList.appendChild(listItem);
  });

  salaryList.replaceWith(newList);
  newList = salaryList;
});
