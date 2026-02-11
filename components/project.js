class Project extends HTMLElement {
    constructor({title, full_desc, preview, techs, repo}) {
        super();
        this.title = title;
        this.full_desc = full_desc;
        this.preview = preview;
        this.techs = techs;
        this.repo = repo;
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});

        const fontLink = document.createElement("link");
        fontLink.rel = "stylesheet";
        fontLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css";

        const projectLink = document.createElement("link");
        projectLink.rel = "stylesheet";
        projectLink.href = "./styles/project.css";

        shadow.appendChild(fontLink);
        shadow.appendChild(projectLink);
        shadow.innerHTML += `
            <div class="project-title">
                <i class="fa-solid fa-angle-left fa-2xl"></i>
                <h2>${this.title}</h2>
            </div>
            <div class="project-preview">
                <iframe src="${this.preview}" title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
            <div class="project-description">
                <h3>Description:</h3>
                ${
                    this.full_desc.map(p => `
                        <p>${p}</p>
                    `).join("")
                }
            </div>
            <div class="project-info">
                <div class="project-technologies">
                    <h3>Technologies used:</h3>
                    <ul>
                        ${
                            this.techs.map(tech => `
                                <li>${tech}</li>
                            `).join("")
                        }
                    </ul>
                </div>
                <div class="project-repository">
                    <h3>Repository:</h3>
                    ${
                        this.repo? 
                        `<a href="${this.repo}"><i class="fa-brands fa-github fa-2xl"></i></a>` : 
                        `<p>Contact me for the code</p>`
                    } 
                </div>
            </div>
        `;

        const i = shadow.querySelector("i");
        i.onclick = () => renderComponent("projects-page");
    }
}

customElements.define("project-page", Project);