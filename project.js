class Project extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});
        const fontLink = document.createElement("link");
        const projectLink = document.createElement("link");

        fontLink.rel = "stylesheet";
        fontLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css";
        
        projectLink.rel = "stylesheet";
        projectLink.href = "project.css";

        shadow.appendChild(fontLink);
        shadow.appendChild(projectLink);
        shadow.innerHTML += `
            <div class="project-title">
                <i component="projects-page" class="fa-solid fa-angle-left fa-2xl"></i>
                <h2>Project A</h2>
            </div>
            <div class="project-preview">
                <img src="placeholder.png" alt="project">
            </div>
            <div class="project-description">
                <p>Sed sit amet ex sit amet eros tristique mollis. Sed finibus eleifend lacus, non imperdiet arcu pharetra et. </p>
                <p>
                    Sed sit amet ex sit amet eros tristique mollis. Sed finibus eleifend lacus, non imperdiet arcu pharetra et.
                    Sed sit amet ex sit amet eros tristique mollis. Sed finibus eleifend lacus, non imperdiet arcu pharetra et.
                </p>
            </div>
            <div class="project-info">
                <div class="project-technologies">
                    <h3>Technologies used:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>JS</li>
                        <li>CSS</li>
                        <li>Python</li>
                        <li>React</li>
                    </ul>
                </div>
                <div class="project-repository">
                    <h3>Repository:</h3>
                    <a href="#"><i class="fa-brands fa-github fa-2xl"></i></a>
                </div>
            </div>
        `;

        const i = shadow.querySelector("i");
        i.onclick = () => renderComponent(i.getAttribute("component"));
    }
}

customElements.define("project-page", Project);