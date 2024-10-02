var departmentName = document.getElementById("dep-name");
var departmentId = document.getElementById("dep-id");
var departmentLocation = document.getElementById("dep-location");
var departmentStartingDate = document.getElementById("dep-date");
var departmentProjects = document.getElementById("dep-projets");
let departments = []

if (localStorage.getItem("departments")) {
    departments = JSON.parse(localStorage.getItem("departments")) ;
    displayDepartments(departments)
}

function addDepartment() {
  let department = {
    name: departmentName.value,
    id: departmentId.value,
    location: departmentLocation.value,
    startingDate: departmentStartingDate.value,
    projects: departmentProjects.value
  };
  departments.push(department);
  displayDepartments(departments);
  clearInputss()
  localStorage.setItem("departments", JSON.stringify(departments));
}

function displayDepartments(departments) {
  var cartona = "";
  for (let i = 0; i < departments.length; i++) {
    cartona += `
    <tr> 
        <td> ${i+1} </td>
        <td>${departments[i].newName ? departments[i].newName :departments[i].name}</td>
        <td>${departments[i].id}</td>
        <td>${departments[i].location}</td>
        <td>${departments[i].startingDate}</td>
        <td>${departments[i].projects}</td>
           <td>
            <a  data-bs-toggle="modal" data-bs-target="#modal-Department" id="editDepartmentBtn" onclick="openEditDepartmentModal(${i})" class="edit" type="button" ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" onclick="deleteDepartment(${i})"  class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>  
    </tr>
    `;
  } 
document.getElementById("departmentTableBody").innerHTML = cartona;
}

function editDepartment(index) {
  departmentName.value = departments[index].name;
  departmentId.value = departments[index].id;
  departmentLocation.value = departments[index].location;
  departmentStartingDate.value = departments[index].startingDate;
  departmentProjects.value = departments[index].projects;
}

function updateDepartment(index) {
  let department = {
    name: departmentName.value,
    id: departmentId.value,
    location: departmentLocation.value,
    startingDate: departmentStartingDate.value,
    projects: departmentProjects.value
  };
  departments[index] = department;
  displayDepartments(departments);
  clearInputss()
  localStorage.setItem("departments", JSON.stringify(departments));
}

function clearInputss() {    
  departmentName.value = "";        
  departmentId.value = "";        
  departmentLocation.value = "";        
  departmentStartingDate.value = "";  
  departmentProjects.value = "";      
}

function deleteDepartment(index) {
  departments.splice(index, 1);
  displayDepartments(departments);
  localStorage.setItem("departments", JSON.stringify(departments));
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
    "dep-projets"
  ).innerHTML = `<option selected> Department Projects...</option> ${optionnn}`;
}


function openAddDepartmentModal() {
  document.getElementById("departmentModalLabel").textContent = "Add Department";
  clearInputss();
  document.getElementById("modalButton").textContent = "Add Department";
  document.getElementById("modalButton").onclick = function () {
  addDepartment()
  };

// var modal = new bootstrap.Modal(document.getElementById("modal-Department"));
// modal.show();
}

function openEditDepartmentModal(index) {
  document.getElementById("departmentModalLabel").textContent = "Edit Department";
  editDepartment(index);
  document.getElementById("modalButton").textContent = "Update Department";
  document.getElementById("modalButton").onclick = function () {
    updateDepartment(index)
  };

// var modal = new bootstrap.Modal(document.getElementById("modal-Department"));
// modal.show();
}



function searchDep(searchValue) {
  var searchDep = []
  for (var i = 0; i < departments.length; i++) {
      var depitem = departments[i];
      if (depitem.name.includes(searchValue)) {
        depitem.newName = depitem.name.toLowerCase().replace(searchValue.toLowerCase(),`<span class="text-danger fs-5">${searchValue}</span>`)

        searchDep.push(depitem)
      }
      displayDepartments(searchDep)
  }
  
  
}

