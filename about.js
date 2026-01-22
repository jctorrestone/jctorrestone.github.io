class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = `
            <div>Lorem Ipsum</div>
            <div>
                Nunc et nulla nec magna viverra pellentesque. Sed sit amet ex sit amet eros tristique mollis. Sed finibus eleifend lacus, non imperdiet arcu pharetra et.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
            <div>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-solid fa-at"></i>
            </div>
        `;
    }
}

customElements.define("about-page", About);