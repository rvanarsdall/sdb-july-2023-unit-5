console.log("it works");
let jobAddForm = document.getElementById("job-add-form");
let removeForm = document.getElementById("remove");

let dateApplied = document.getElementById("dateApplied");

let companyName = document.getElementById("companyName");

let jobTitle = document.getElementById("jobTitle");

let contact = document.getElementById("contact");

let status = document.getElementById("status");

/* 
Server Endpoints:
*/

let endpoint = {
  getAllJobs: "http://localhost:4000/job/all",
  addJob: "http://localhost:4000/job/add",
  delete: "http://localhost:4000/job/delete/",
};

/* 
getAllJobs()
purpose: to fetch the data and pass the jobs on to a function that will display them.
note: make sure that the function is async
*/
async function getAllJobs() {
  try {
    //  response and data to conduct the fetch
    const response = await fetch(endpoint.getAllJobs);
    const data = await response.json();
    displayJobs(data.jobs);
    populateJobDropDown(data.jobs);
  } catch (error) {
    console.error(error);
  }
}

function populateJobDropDown(jobs) {
  // Fishing for the
  let removeJobSelect = document.getElementById("remove-job");
  let removeOptions = ``;
  // Loop through jobs
  for (let i = 0; i < jobs.length; i++) {
    let optionText = jobs[i].companyName + " - " + jobs[i].jobTitle;
    let newOptions = ` <option value="${jobs[i].id}">${optionText}</option>`;
    removeOptions = removeOptions + newOptions;
  }
  // Display the new options in the innerHTML
  removeJobSelect.innerHTML = removeOptions;
}

function displayJobs(jobs) {
  // Fishing for the Table Body
  let tableBody = document.querySelector("tbody");
  let tableRows = ``;

  // Loop through our Job Array and Build out the Table Rows
  for (let i = 0; i < jobs.length; i++) {
    let newRows = ` 
            <tr>
            <td>${i + 1}</td>
            <td>${jobs[i].dateApplied}</td>
            <td>${jobs[i].companyName}</td>
            <td>${jobs[i].jobTitle}</td>
            <td>${jobs[i].contact}</td>
            <td>${jobs[i].status}</td>
            <td><button>Edit</button></td>
            </tr>`;

    tableRows = tableRows + newRows;
  }
  // Display the Table Row of Information about the Job (JobDetail)
  tableBody.innerHTML = tableRows;
}

getAllJobs();

jobAddForm.addEventListener("submit", addNewJob);

async function addNewJob(event) {
  //1. Stop the page from reloading using a preventDefault()
  event.preventDefault();
  // 2. Make sure we are an async function
  try {
    // 3. Prepare the Request
    // - Headers
    // - Create Payload - Request Options
    // Header Build
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");
    // Payload Build

    let bodyObject = {
      dateApplied: dateApplied.value,
      companyName: companyName.value,
      jobTitle: jobTitle.value,
      contact: contact.value,
      status: status.value,
    };

    let requestOptions = {
      method: "POST",
      body: JSON.stringify(bodyObject),
      headers: myHeader,
    };
    //  Conduct the fetch
    let response = await fetch(endpoint.addJob, requestOptions);
    let data = await response.json();
    console.log(data);
    // 4. Refresh the table
    getAllJobs();
  } catch (error) {
    console.error(error);
  }
}

// Delete Functions

removeForm.addEventListener("submit", removeJob);

async function removeJob(event) {
  event.preventDefault();
  //   No headers are needed because we are not sending a body of data

  try {
    let removeJobSelect = document.getElementById("remove-job");

    let requestOptions = {
      method: "DELETE",
    };

    const response = await fetch(
      endpoint.delete + removeJobSelect.value,
      requestOptions
    );
    const data = await response.json();

    console.log(data);

    getAllJobs();
  } catch (error) {
    console.error(error);
  }
}
