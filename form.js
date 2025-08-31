const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

// Load students from localStorage on page load
document.addEventListener("DOMContentLoaded", loadStudents);

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const studentClass = document.getElementById("studentClass").value;
  const dob = document.getElementById("dob").value;
  const doj = document.getElementById("doj").value;

  const student = { fullName, email, studentClass, dob, doj };

  // Save to localStorage
  saveStudent(student);

  // Add to table
  addStudentToTable(student);

  studentForm.reset();
  alert("Student added successfully!");
});

// Save student in localStorage
function saveStudent(student) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
}

// Load students from localStorage
function loadStudents() {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.forEach((student) => {
    addStudentToTable(student);
  });
}

// Add a student row to the table
function addStudentToTable(student) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td class="p-2 border">${student.fullName}</td>
    <td class="p-2 border">${student.email}</td>
    <td class="p-2 border">${student.studentClass}</td>
    <td class="p-2 border">${student.dob}</td>
    <td class="p-2 border">${student.doj}</td>
  `;
  studentTableBody.appendChild(newRow);
}
