var projectName = document.getElementById("project-name");
var projectId = document.getElementById("project-id");
var projectLocation = document.getElementById("project-location");
var projectHours = document.getElementById("project-hours");
let Projects = []

if (localStorage.getItem("projects")) {
    Projects = JSON.parse(localStorage.getItem("projects")) ;
    displayProjects(Projects)
}

function addProject() {
    let project = {
        name: projectName.value,
        id: projectId.value,        
        location: projectLocation.value,
        hours: projectHours.value
    }
    Projects.push(project)
    localStorage.setItem("projects", JSON.stringify(Projects))
    displayProjects(Projects)
}

function clearInputs() {
    projectName.value = ""
    projectId.value = ""
    projectLocation.value = ""
    projectHours.value = ""
}

function displayProjects(Projects) {    
   var cartona = ""
   for (var i = 0; i < Projects.length; i++) {
    cartona += `
    <tr>
     <td>${i+1}</td>
        <td>${Projects[i].id}</td>
        <td>${Projects[i].newName ? Projects[i].newName :Projects[i].name}</td>
        <td>${Projects[i].location}</td>
        <td>${Projects[i].hours}</td>
          <td>
            <a  data-bs-toggle="modal" data-bs-target="#modal-Project" onclick="openEditProjectModal('${Projects[i].id}')" class="edit" type="button" ><i class="material-icons" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" onclick="deleteProject('${Projects[i].id}')" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td> 
    </tr>
    `
   }
   document.getElementById("project-table").innerHTML = cartona
}   

function deleteProject(index) {
    departments.splice(index, 1);
  
            localStorage.setItem("projects", JSON.stringify(Projects))
            displayProjects(Projects)
           
        
    }
     

   

function editProject(id) {
    for (let i = 0; i < Projects.length; i++) {
        if (Projects[i].id == id) {
            projectName.value = Projects[i].name
            projectId.value = Projects[i].id
            projectLocation.value = Projects[i].location
            projectHours.value = Projects[i].hours
            return
        }
    }   
}

function updateProject(id) {
   let newProject = {
    name: projectName.value,
    id: projectId.value,        
    location: projectLocation.value,
    hours: projectHours.value
   }
   for (let i = 0; i < Projects.length; i++) {
    if (Projects[i].id == id) {
        Projects[i] = newProject
        localStorage.setItem("projects", JSON.stringify(Projects))
        displayProjects(Projects)
        clearInputs()
        break
    }
   }
  
   
}   
// modal functions
function openAddProjectModal() {
    document.getElementById("projectModalLabel").textContent = "Add Project";
    clearInputs();
    document.getElementById("modalButton").textContent = "Add Project";
    document.getElementById("modalButton").onclick = function () {
        addProject()
        
    };
  
//     var modal = new bootstrap.Modal(document.getElementById("modal-Project"));
//    modal.show();
   
}

function openEditProjectModal(index) {
    document.getElementById("projectModalLabel").textContent = "Edit Project";
    document.getElementById("modalButton").textContent = "Update Project";
    document.getElementById("modalButton").addEventListener("click", function () {
        updateProject(id)
       
    });
    editProject(index);
    // var modal = new bootstrap.Modal(document.getElementById("modal-Project"));
    // modal.show();
}



function searchProj(searchValue) {
    var searchProject = []
    for (var i = 0; i < Projects.length; i++) {
        var projectitem = Projects[i];
        if (projectitem.name.includes(searchValue)) {
            projectitem.newName = projectitem.name.toLowerCase().replace(searchValue.toLowerCase(),`<span class="text-danger fs-5">${searchValue}</span>`)

            searchProject.push(projectitem)
        }
        displayProjects(searchProject)
        console.log(searchProject);
    }
    
    
  }
