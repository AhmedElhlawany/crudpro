var employeeName = document.getElementById("name");
var employeeId = document.getElementById("id");
var employeeAge = document.getElementById("age");
var employeeSalary = document.getElementById("salary");
var employeeDepartment = document.getElementById("departmentSelect");
var employeeProject = document.getElementById("projectSelect");
var employeePerformance = document.getElementById("performance");
let employeeSkills = document.getElementById("skills");
var employeeGender = document.getElementsByName("gender");
var employeeStatus = document.getElementsByName("status");
let employees = [];

if (localStorage.getItem("employees")) {
  employees = JSON.parse(localStorage.getItem("employees"));
  displayEmployees(employees);
}

var projects = [
  {
    name: "front",
    id: 1,
    numberOfHourse: 5,
    location: "alex",
  },
];

function addEmployee() {
  for (let i = 0; i < employeeGender.length; i++) {
    if (employeeGender[i].checked) {
      gender = employeeGender[i].value;
    }
  }

  for (let i = 0; i < employeeStatus.length; i++) {
    if (employeeStatus[i].checked) {
      status = employeeStatus[i].value;
    }
  }
  var employeeSkillss = employeeSkills.value;
  var skillsArray = employeeSkillss.split(",");
  skillsArray = skillsArray.map((skill) => skill.trim());

  let employee = {
    name: employeeName.value,
    id: employeeId.value,
    age: employeeAge.value,
    salary: employeeSalary.value,
    performance: employeePerformance.value,
    department: employeeDepartment.value,
    project: employeeProject.value, 
    skills: skillsArray,
    gender: gender,
    status: status,
  };
  employees.push(employee);
  displayEmployees(employees);
  clearInputs();
  localStorage.setItem("employees", JSON.stringify(employees));

}

function displayEmployees(employees) {
  var cartona = "";
  for (let i = 0; i < employees.length; i++) {
    cartona +=  
    `<tr>
        <td> ${i + 1} </td>
        <td>${employees[i].newName ? employees[i].newName :employees[i].name}</td>
        <td>${employees[i].id}</td>
        <td>${employees[i].age}</td>
        <td>${employees[i].salary}</td>
        <td>${employees[i].department}</td>
        <td>${employees[i].project}</td>
        <td>${employees[i].performance}</td>
        <td>${employees[i].skills}</td>
        <td>${employees[i].gender}</td>
        <td>${employees[i].status}</td>
        <td>
            <a  data-bs-toggle="modal"
                  data-bs-target="#modal-employee" id="editEmployeeBtn"   onclick="openUpdateEmployeeModal(${i})" class="edit" type="button" ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" id="deleteEmployee" onclick="deleteEmployee(${i})"  class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>  
        </td>
      </tr>`
  }

  document.getElementById("employeeTableBody").innerHTML = cartona;
}

function clearInputs() {
  employeeName.value = "";
  employeeId.value = "";
  employeeAge.value = "";
  employeeSalary.value = "";
  employeeDepartment.value = "";
  employeeProject.value = "";
  employeePerformance.value = "";
  employeeSkills.value = "";
  gender = "";
  status = "";
}

function editEmployee(index) {
  employeeName.value = employees[index].name;
  employeeId.value = employees[index].id;
  employeeAge.value = employees[index].age;
  employeeSalary.value = employees[index].salary;
  employeeDepartment.value = employees[index].department;
  employeeProject.value = employees[index].project;
  employeePerformance.value = employees[index].performance;
  employeeSkills.value = employees[index].skills.join(",");
  for (let i = 0; i < employeeGender.length; i++) {
    if (employeeGender[i].value == employees[index].gender) {
      employeeGender[i].checked = true;
    }
  }
  for (let i = 0; i < employeeStatus.length; i++) {
    if (employeeStatus[i].value == employees[index].status) {
      employeeStatus[i].checked = true;
    }
  }
}

function updateEmployee(index) {
  for (let i = 0; i < employeeGender.length; i++) {
    if (employeeGender[i].checked) {
      gender = employeeGender[i].value;
    }
  }

  for (let i = 0; i < employeeStatus.length; i++) {
    if (employeeStatus[i].checked) {
      status = employeeStatus[i].value;
    }
  }
  var employeeSkillss = employeeSkills.value;
  var skillsArray = employeeSkillss.split(",");

  let employee = {
    name: employeeName.value,
    id: employeeId.value,
    age: employeeAge.value,
    salary: employeeSalary.value,
    performance: employeePerformance.value,
    department: employeeDepartment.value,
    project: employeeProject.value,  
    skills: skillsArray,
    gender: gender,
    status: status,
  };
  employees[index] = employee;
  displayEmployees(employees);
  clearInputs();
  localStorage.setItem("employees", JSON.stringify(employees));
  var modal = new bootstrap.Modal(document.getElementById("modal-employee"));
  modal.hide();
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  displayEmployees(employees);
  localStorage.setItem("employees", JSON.stringify(employees));

}



if (localStorage.getItem("departments")) {
  departments = JSON.parse(localStorage.getItem("departments"));
  var optionnn = "";
  for (var i = 0; i < departments.length; i++) {
    optionnn += `
   
  <option value="${departments[i].name}">${departments[i].name}</option>
  `;
  }

  document.getElementById(
    "departmentSelect"
  ).innerHTML = `${optionnn}`;
}

if (localStorage.getItem("projects")) {
  projects = JSON.parse(localStorage.getItem("projects"));
  var optionnn = "";
  for (var i = 0; i < projects.length; i++) {
    optionnn += `
   
  <option value="${projects[i].name}">${projects[i].name}</option>
  `;
  }

  document.getElementById(
    "projectSelect"
  ).innerHTML = `${optionnn}`;
}

function search(searchValue) {
  var searchItem = []
  for (var i = 0; i < employees.length; i++) {
      var item = employees[i];
      if (item.name.includes(searchValue)) {
        item.newName = item.name.toLowerCase().replace(searchValue.toLowerCase(),`<span class="text-danger fs-5">${searchValue}</span>`)
          searchItem.push(item)
      }
      displayEmployees(searchItem)
      console.log(searchItem);
  }
  
  
}

// function\\\

function openAddEmployeeModal(){
  document.getElementById("employeeModalLabel").textContent = "Add Employee";
  clearInputs();
  document.getElementById("modalButton").textContent = "Add Employee";
  document.getElementById("modalButton").onclick = function () {
    addEmployee();
  };

//   var modal = new bootstrap.Modal(document.getElementById("modal-employee"));
//  modal.show();
}


function openUpdateEmployeeModal(index){
  document.getElementById("employeeModalLabel").textContent = "Update Employee";
  document.getElementById("modalButton").textContent = "Update Employee";
  console.log(index);

  editEmployee(index);
  document.getElementById("modalButton").onclick = function () {
    updateEmployee(index);
  };

//   var modal = new bootstrap.Modal(document.getElementById("modal-employee"));
//  modal.show();

}