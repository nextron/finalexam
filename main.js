//Section ID's

var skillSection = document.getElementById("skills");
var educationSection = document.getElementById("education");
var experienceSection = document.getElementById("experience");
var contactMeSection = document.getElementById("contactMe");

function showSkills() {
    console.log("skills");
    //skillSection.style.display = "block";
    educationSection.style.display = "none";
    experienceSection.style.display = "none";
    contactMeSection.style.display = "none";
}

function showExperience() {
    console.log("Experience");
}

function showEducation() {
    console.log("Education");
}

function showContactMe() {
    console.log("ContactMe");
}
