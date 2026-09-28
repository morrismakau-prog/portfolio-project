const skills = ["HTML5", "CSS", "JavaScrpt", "Git & GitHub"];
const skillslist = document.getElementById("skills-list");

skills.forEach(skillName => {
const li = document.createElement("li");
li.textContent = skillName
skillslist.appendChild(li);
});

const projects = [
    {
    title: "Interactive Quiz App",
    description: "A dynamic quiz engine that tracks user scores, evaluates answers, and updates the results on the screen using javascrpit logic",
    tech: "javascript, HTML, CSS"
    },
    {
        title:"Task Tracker Dashboard",
        description:"A productivity application where users can add, complete, and filter daily dynamically thhrough interactive lists.",
        tech:"JavaScript, HTML, CSS"
    }
];
const projectsContainer = document.getElementById("projects-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = 
    '<h3>' + project.title + '</h3>' +
    '<p>' + project.description + '</p>' +
    '<span class="tech.tag">' + project.tech + '</span>';
    
    projectsContainer.appendChild(card);
});



