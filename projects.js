class Projects extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = `
            <div>PROJECTS</div>
        `;
    }
}

customElements.define("projects-page", Projects);