
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const studentClass = document.getElementById('studentClass').value;
    const dob = document.getElementById('dob').value;
    const doj = document.getElementById('doj').value;


    alert("Full Name: " + fullName + "\n" +
          "Email: " + email + "\n" +
          "Class: " + studentClass + "\n" +
          "Date of Birth: " + dob + "\n" +
          "Date of Joining: " + doj);

    console.log(`Full Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Class: ${studentClass}`);
    console.log(`Date of Birth: ${dob}`);
    console.log(`Date of Joining: ${doj}`);

    
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = fullName;
    nameCell.classList.add("p-2", "border");

    const emailCell = document.createElement('td');
    emailCell.textContent = email;
    emailCell.classList.add("p-2", "border");

    const classCell = document.createElement('td');
    classCell.textContent = studentClass;
    classCell.classList.add("p-2", "border");

    const dobCell = document.createElement('td');
    dobCell.textContent = dob;
    dobCell.classList.add("p-2", "border");

    const dojCell = document.createElement('td');
    dojCell.textContent = doj;
    dojCell.classList.add("p-2", "border");


    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(classCell);
    newRow.appendChild(dobCell);
    newRow.appendChild(dojCell);


   document.getElementById('studentTableBody').appendChild(newRow);



    document.getElementById('studentForm').reset();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('studentForm').reset();
});
