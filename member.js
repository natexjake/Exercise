function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var aboutButton = document.getElementById("aboutButton");
    var contactButton = document.getElementById("contactButton");
    member.style.display = "block";
    skills.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    memberButton.style.backgroundColor = "#4CAF50";
    skillsButton.style.backgroundColor = "#333";
    aboutButton.style.backgroundColor = "#333";
    contactButton.style.backgroundColor = "#333";
}