class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});
        const fontLink = document.createElement("link");
        const aboutLink = document.createElement("link");

        fontLink.rel = "stylesheet";
        fontLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css";

        aboutLink.rel = "stylesheet";
        aboutLink.href = "about.css";
        
        shadow.appendChild(fontLink);
        shadow.appendChild(aboutLink);
        shadow.innerHTML += `
            <div class="about-title">
                <h2>Lorem Ipsum</h2>
            </div>
            <div class="about-description">
                <p>
                    Nunc et nulla nec magna viverra pellentesque. Sed sit amet ex sit amet eros tristique mollis. Sed finibus eleifend lacus, non imperdiet arcu pharetra et.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                    Nunc et nulla nec magna viverra pellentesque. Sed sit amet ex sit amet eros tristique mollis. Sed finibus eleifend lacus, non imperdiet arcu pharetra et.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                    Nunc et nulla nec magna viverra pellentesque. Sed sit amet ex sit amet eros tristique mollis. Sed finibus eleifend lacus, non imperdiet arcu pharetra et.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class="about-network">
                <a href="https://github.com/jctorrestone"><i class="fa-brands fa-github fa-2xl"></i></a>
                <a href="https://x.com/JCTorresTone"><i class="fa-brands fa-x-twitter fa-2xl"></i></a>
                <a href="https://www.linkedin.com/in/jctorrestone/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                <a href="#"><i class="fa-solid fa-at fa-2xl"></i></a>
            </div>
        `;
    }
}

customElements.define("about-page", About);