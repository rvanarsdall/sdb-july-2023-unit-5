// TODO: Grab the id from the query string
let queryParams = new URLSearchParams(window.location.search);
let id = queryParams.get("id");
console.log(id);

let dateApplied = document.getElementById("dateApplied");
let companyName = document.getElementById("companyName");
let jobTitle = document.getElementById("jobTitle");
let contact = document.getElementById("contact");

let status = document.getElementById("status");
// TODO: Call the fetch function
getJobById(id);
// TODO: Fetch the job by id
async function getJobById(id) {
  let url = `http://localhost:4000/job/get-by-id/${id}`;
  let response = await fetch(url);
  let data = await response.json();
  populateForm(data.job);
}
// TODO: Populate the form with the job data
function populateForm(job) {
  dateApplied.value = job.dateApplied;
  companyName.value = job.companyName;
  jobTitle.value = job.jobTitle;
  contact.value = job.contact;
  status.value = job.status;
}

// TODO: Add an event listener to the form
let form = document.querySelector("form");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let job = {
    dateApplied: dateApplied.value,
    companyName: companyName.value,
    jobTitle: jobTitle.value,
    contact: contact.value,
    status: status.value,
  };
  await updateJob(job);
  window.location.href = "./index.html";
});
// TODO: Update the job
async function updateJob(job) {
  let url = `http://localhost:4000/job/update/?id=${id}`;

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify(job),
  };

  let response = await fetch(url, requestOptions);
  let data = await response.json();
}
