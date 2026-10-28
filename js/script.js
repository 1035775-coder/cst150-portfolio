const projectsData = [
    {
       title: "Personal Portfolio",
        description: "A responsive, data-driven personal website designed with a dark mode color palette.",
        techStack: "HTML, CSS, JavaScript"
    },
    {
        title: "A full-stack shopping style website (upcoming)",
        description: "A secure, responsive full-stack website.",
        techStack: "HTML, CSS, JavaScript"
    }
];

// Function to render projects to the DOM (Document Object Model)
function displayProjects() {
    // 1. Get the HTML element where we want to put the projects
    const projectListElement = document.getElementById("project-list");

    // 2. Clear any existing content just in case
    projectListElement.innerHTML = "";

    // 3. Loop through our data array
    projectsData.forEach(project => {
        // Create a new div element for the card
        const card = document.createElement("div");
        card.className = "project-card"; // Assign the CSS class for styling

        // Construct the inner HTML for the card using template literals
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <br>
            <p><strong>Tech Stack:</strong> ${project.techStack}</p>
        `;

        // 4. Append the newly created card to the main list
        projectListElement.appendChild(card);
    });
}

// Call the function when the script loads to populate the page
displayProjects();