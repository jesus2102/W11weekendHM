document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector("#student-list");



  const form = document.querySelector("#new-student-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentList = document.createElement("div");
    studentList.className = "row";

    const firstName = event.target.firstName.value;
    console.log(firstName);
    const lastName = event.target.lastName.value;
    const cohort = event.target.cohort.value;

    const firstNameCell = document.createElement("div");
    firstNameCell.className = "cel1";
    const lastNameCell = document.createElement("div");
    lastNameCell.className = "cel2";
    const cohortCell = document.createElement("div");
    cohortCell.className = "cel3";

    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    cohortCell.textContent = cohort;

    studentList.appendChild(firstNameCell);
    studentList.appendChild(lastNameCell);
    studentList.appendChild(cohortCell);

    listContainer.appendChild(studentList);

    document.querySelector("#new-student-form").reset();
  })
});
