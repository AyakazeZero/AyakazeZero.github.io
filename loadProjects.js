document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { title: "Project 1", file: "projects/project1.html", description: "Brief description of Project 1." },
        { title: "Project 2", file: "projects/project2.html", description: "Brief description of Project 2." },
        { title: "IED Project", file: "project/IED_Project.html", description: "Brief description of Project 3." },
        // Add more projects as needed
    ];

    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'col-md-4 portfolio-item';
        projectItem.innerHTML = `
            <a href="${project.file}">
                <img src="images/${project.file.split('/').pop().replace('.html', '.jpg')}" alt="${project.title}" class="img-fluid">
                <h3>${project.title}</h3>
            </a>
            <p>${project.description}</p>
        `;
        projectContainer.appendChild(projectItem);
    });
});
