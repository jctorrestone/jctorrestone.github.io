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
        projectsLink.href = "./styles/projects.css";
        
        const ul = document.createElement("ul");
        const data = await this.fetchProjects();
        data.forEach(project => {
            const li = document.createElement("li");
            li.onclick = () => renderComponent("project-page", project);
            li.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.desc}</p>
            `;
            ul.appendChild(li);
        });

        shadow.appendChild(projectsLink);
        shadow.appendChild(ul);
    }
}

customElements.define("projects-page", Projects);