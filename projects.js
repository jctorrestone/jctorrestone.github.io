class Projects extends HTMLElement {
    constructor() {
        super();
    }

    async fetchProjects() {
        const response = await fetch("data.json");
        const json = await response.json();
        return json;
    }

    async connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});
        const projectsLink = document.createElement("link");
        
        projectsLink.rel = "stylesheet";
        projectsLink.href = "projects.css";

        const data = await this.fetchProjects();

        shadow.appendChild(projectsLink);
        shadow.innerHTML += `
            <ul>
                ${
                    data.map(project => `
                        <li component="project-page">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                        </li>
                    `).join("")
                }
            </ul>
        `;

        //REMOVE THESE LINES
        const lis = shadow.querySelectorAll("li");
        lis.forEach(li => li.onclick = () => renderComponent(li.getAttribute("component")));
    }
}

customElements.define("projects-page", Projects);