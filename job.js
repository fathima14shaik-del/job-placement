const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const icon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });

});

const jobs = document.querySelectorAll(".job-card");

const search = document.getElementById("searchInput");

const locationFilter = document.getElementById("locationFilter");

const experienceFilter = document.getElementById("experienceFilter");

const typeFilter = document.getElementById("typeFilter");

const salaryFilter = document.getElementById("salaryFilter");

const resultCount = document.getElementById("resultCount");

const clearBtn = document.getElementById("clearBtn");

function filterJobs(){

let visible = 0;

jobs.forEach(job=>{

const title = job.dataset.title.toLowerCase();

const company = job.dataset.company.toLowerCase();

const location = job.dataset.location;

const experience = job.dataset.experience;

const type = job.dataset.type;

const salary = parseInt(job.dataset.salary);

const keyword = search.value.toLowerCase();

const salaryValue = salaryFilter.value;

const searchMatch =
title.includes(keyword) ||
company.includes(keyword);

const locationMatch =
locationFilter.value==="" ||
location===locationFilter.value;

const experienceMatch =
experienceFilter.value==="" ||
experience===experienceFilter.value;

const typeMatch =
typeFilter.value==="" ||
type===typeFilter.value;

const salaryMatch =
salaryValue==="" ||
salary>=salaryValue;

if(
searchMatch &&
locationMatch &&
experienceMatch &&
typeMatch &&
salaryMatch
){

job.style.display="block";

visible++;

}else{

job.style.display="none";

}

});

resultCount.innerHTML=visible;

}

search.addEventListener("keyup",filterJobs);

locationFilter.addEventListener("change",filterJobs);

experienceFilter.addEventListener("change",filterJobs);

typeFilter.addEventListener("change",filterJobs);

salaryFilter.addEventListener("change",filterJobs);

clearBtn.addEventListener("click",()=>{

search.value="";

locationFilter.value="";

experienceFilter.value="";

typeFilter.value="";

salaryFilter.value="";

filterJobs();

});

filterJobs();

/* Save Job */

document.querySelectorAll(".save-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.classList.toggle("saved");

if(btn.classList.contains("saved")){

btn.innerHTML="❤ Saved";

}else{

btn.innerHTML="♡ Save";

}

});

});

/* Apply */

document.querySelectorAll(".apply-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Application Submitted Successfully!");

});

});