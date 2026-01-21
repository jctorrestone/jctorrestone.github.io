class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        return `
            <h1> HELLO WORLD </h1>
        `
    }
}

customElements.define("about-page", About);