
// JQUERY>>>
function hideAllSections() {
  $(".bestEmployee, .maleEmployees, .averageSalary, .inactiveEmployees, .codingEmployees, .totalSalary, .projectWithMinimumHours, .hireManager").fadeOut(0);
}
hideAllSections()
$('.best-employy').on('click', function() {
  hideAllSections();
  $(".bestEmployee").fadeIn(1000);
});

$('.total-salary').on('click', function() {
  hideAllSections();
  $(".totalSalary").fadeIn(1000);
});

$('.manager').on('click', function() {
  hideAllSections();
  $(".hireManager").fadeIn(1000);
});

$('.coding').on('click', function() {
  hideAllSections();
  $(".codingEmployees").fadeIn(1000);
});

$('.male').on('click', function() {
  hideAllSections();
  $(".maleEmployees").fadeIn(1000);
});

$('.high-salary').on('click', function() {
  hideAllSections();
  $(".averageSalary").fadeIn(1000);
});

$('.inactive').on('click', function() {
  hideAllSections();
  $(".inactiveEmployees").fadeIn(1000);
});










// employees = JSON.parse(localStorage.getItem("employees"));

// departments = JSON.parse(localStorage.getItem("departments")) ;
Projects = JSON.parse(localStorage.getItem("projects")) ;
let employees = JSON.parse(localStorage.getItem("employees")) || [];
        let departments = JSON.parse(localStorage.getItem("departments")) || [];

// best employee
function getBestEmployee() {
  let bestEmployee = employees[0];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary < bestEmployee.salary) {
      bestEmployee = employees[i];
    }
  }
  return bestEmployee;
}

function displayBestEmployee() {
  document.getElementById("bestEmployeeName").innerHTML =  ` Name: ${getBestEmployee().name}`;
  document.getElementById("bestEmployeeSalary").innerHTML = `Salary: ${getBestEmployee().salary}`;
  document.getElementById("bestEmployeeDepartment").innerHTML = `Department: ${getBestEmployee().department}`;
  document.getElementById("bestEmployeeSkills").innerHTML = `Skills: ${getBestEmployee().skills.join(", ")}`;
  // document.getElementById("bestEmployeeProjects").innerHTML = getBestEmployee().projects.join(", ");
  document.getElementById("bestEmployeeAge").innerHTML = `Age: ${getBestEmployee().age}`;
  document.getElementById("bestEmployeeId").innerHTML = `Id: ${getBestEmployee().id}`;
}

displayBestEmployee();

// getAllEmployeesWhereGenderIsMale
function getAllEmployeesWhereGenderIsMale() {
  let maleEmployees = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].gender === "male") {
      maleEmployees.push(employees[i]);
    }
  }
  return maleEmployees;
}

function displayMaleEmployees() {
  let maleEmployees = getAllEmployeesWhereGenderIsMale();
  var cartona = "";
  for (let i = 0; i < maleEmployees.length; i++) {
    cartona +=  
    `<tr>
        <td> ${i + 1} </td>
        <td>${maleEmployees[i].name}</td>
        <td>${maleEmployees[i].age}</td>
        <td>${maleEmployees[i].id}</td>
        <td>${maleEmployees[i].salary}</td>
        <td>${maleEmployees[i].department}</td>
        <td>${maleEmployees[i].skills}</td> 
        </td>
      </tr>`
  }

  document.getElementById("maleEmployeesTableBody").innerHTML = cartona;
}

displayMaleEmployees();







// getAllEmployeesWhoseSalaryGreaterThanAerageSalary
function getAverageSalary() {
  let sumOfSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    sumOfSalary += Number(employees[i].salary);
  }
  return sumOfSalary / employees.length;
}

function getAllEmployeesWhoseSalaryGreaterThanAerageSalary() {  
  let highPaidEmployees = [];
  for (let i = 0; i < employees.length; i++) {
    if (Number(employees[i].salary) >= getAverageSalary()) {
      highPaidEmployees.push(employees[i]);
    }
  }
  return highPaidEmployees;
}

function displayAllEmployeesWhoseSalaryGreaterThanAerageSalary() {
  let highPaidEmployees = getAllEmployeesWhoseSalaryGreaterThanAerageSalary();
  var cartona = "";
  for (let i = 0; i < highPaidEmployees.length; i++) {
    cartona +=  
    `<tr>
        <td> ${i + 1} </td>
        <td>${highPaidEmployees[i].name}</td>
        <td>${highPaidEmployees[i].age}</td>
        <td>${highPaidEmployees[i].id}</td>
        <td>${highPaidEmployees[i].salary}</td>
        <td>${highPaidEmployees[i].department}</td>
        <td>${highPaidEmployees[i].skills}</td> 
        </td>
      </tr>`
  }

  document.getElementById("averageSalaryEmployeesTableBody").innerHTML = cartona;
}

displayAllEmployeesWhoseSalaryGreaterThanAerageSalary();







// getAllEmployeesWithInactiveStatus
function getAllEmployeesWithInactiveStatus() {
  let inactiveEmployees = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].status === "inactive") {
      inactiveEmployees.push(employees[i]);
    }
  }
  return inactiveEmployees;
}

function displayInactiveEmployees() {
  let inactiveEmployees = getAllEmployeesWithInactiveStatus();
  var cartona = "";
  for (let i = 0; i < inactiveEmployees.length; i++) {
    cartona +=  
    `<tr>
        <td> ${i + 1} </td>
        <td>${inactiveEmployees[i].name}</td>
        <td>${inactiveEmployees[i].age}</td>
        <td>${inactiveEmployees[i].id}</td>
        <td>${inactiveEmployees[i].salary}</td>
        <td>${inactiveEmployees[i].department}</td>
        <td>${inactiveEmployees[i].skills}</td> 
        </td>
      </tr>`
  }

  document.getElementById("inactiveEmployeesTableBody").innerHTML = cartona;
}

displayInactiveEmployees();

// getAllEmployeesWithCodingSkills

function getAllEmployeesWithCodingSkills() {
  let codingEmployees = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].skills.includes("coding")) {
      codingEmployees.push(employees[i]);
    }
  } 
  return codingEmployees;
}

function displayCodingEmployees() {
  let codingEmployees = getAllEmployeesWithCodingSkills();
  var cartona = "";
  for (let i = 0; i < codingEmployees.length; i++) {
    cartona +=  
    `<tr>
        <td> ${i + 1} </td>
        <td>${codingEmployees[i].name}</td>
        <td>${codingEmployees[i].age}</td>
        <td>${codingEmployees[i].id}</td>
        <td>${codingEmployees[i].salary}</td>
        <td>${codingEmployees[i].department}</td>
        <td>${codingEmployees[i].skills}</td> 
        </td>
      </tr>`
  }

  document.getElementById("codingEmployeesTableBody").innerHTML = cartona;
}

displayCodingEmployees();



// getTotalSalariesWithSpecificDepartment
function getTotalSalariesWithSpecificDepartment(department) {
  let totalSalaries = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === department) {
      totalSalaries += Number(employees[i].salary);
    }
  }
  return totalSalaries;
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
  ).innerHTML = `<option selected> select Your Department</option> ${optionnn}`;
}

function displayTotalSalariesWithSpecificDepartment() {
  let department = document.getElementById("departmentSelect").value;
  let totalSalaries = getTotalSalariesWithSpecificDepartment(department);
  document.getElementById("totalSalaryInDepartment").innerHTML = `Total Salaries of ${department} Department: ${totalSalaries}`;
}

// ============================================== PROJECTS =============================================

function getProjectWithMinimumHours() {
    let minProject = Projects[0]
    for (let i = 0; i < Projects.length; i++) {
        if (Number(Projects[i].hours) < Number(minProject.hours ) ){
            minProject = Projects[i]
        }   
        
    }

    return minProject;
}   

function displayProjectWithMinimumHours() {
    let minProject = getProjectWithMinimumHours()
    document.getElementById("projectWithMinimumHours").innerHTML = `Project with minimum hours: ${minProject.name}`;
}

displayProjectWithMinimumHours();



        // Function to populate the department dropdown dynamically
        function populateDepartmentSelect() {
            let departmentSelect = document.getElementById("departmentSelectForHigherManager");
            departments.forEach(department => {
                let option = document.createElement("option");
                option.value = department.name;
                option.textContent = department.name;
                departmentSelect.appendChild(option);
            });
        }

        // Call the function to populate the dropdown on page load
        window.onload = populateDepartmentSelect;

        // Function to find the highest-paid manager in a department
        function HireManagerForDepartment(department) {
            let hiredManager = null;

            for (let i = 0; i < employees.length; i++) {
                if (employees[i].department === department) {
                    if (!hiredManager || Number(employees[i].salary) > Number(hiredManager.salary)) {
                        hiredManager = employees[i];
                    }
                }
            }

            return hiredManager;
        }

        // Function to display the highest-paid manager in the selected department
        function displayHigherManagerForADepartment() {
            let department = document.getElementById("departmentSelectForHigherManager").value;
            let Manager = HireManagerForDepartment(department);

            if (Manager) {
                document.getElementById("higherManagerForDepartment").innerHTML = 
                    `Higher Manager for ${department} Department: ${Manager.name}`;
            } else {
                document.getElementById("higherManagerForDepartment").innerHTML = 
                    `No manager found for the ${department} department.`;
            }
        }








