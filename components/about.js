class About extends HTMLElement {
    constructor() {
        super();
    }

    async copyEmail() {
        await navigator.clipboard.writeText("jc95lb@gmail.com");
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});

        const fontLink = document.createElement("link");
        fontLink.rel = "stylesheet";
        fontLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css";

        const aboutLink = document.createElement("link");
        aboutLink.rel = "stylesheet";
        aboutLink.href = "./styles/about.css";
        
        shadow.appendChild(fontLink);
        shadow.appendChild(aboutLink);
        shadow.innerHTML += `
            <div class="about-title">
                <h2>Hello, I'm José</h2>
            </div>
            <div class="about-description">
                <p>
                    I am a junior software developer with previous experience in backend development with technologies like: .NET, Node, Flask and SQL;
                    and some experience in frontend development with technologies like: React and Bootstrap.
                </p>
                <p>
                    I love learning new skills and never give up when I get stuck at coding (I always find the solution).
                </p>
                <p>
                    Currently I'm looking forward to improving my programming skills in both areas (Frontend and Backend). 
                    You can check some of my previous personal projects in this portfolio.
                </p>
                <p>
                    In my spare time I go swimming at least 3 times a week, read books, watch movies and go out with friends.
                </p>
            </div>
            <div class="about-network">
                <a href="https://github.com/jctorrestone"><i class="fa-brands fa-github fa-2xl"></i></a>
                <a href="https://x.com/JCTorresTone"><i class="fa-brands fa-x-twitter fa-2xl"></i></a>
                <a href="https://www.linkedin.com/in/jctorrestone/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                <span id="email"><i class="fa-solid fa-at fa-2xl"></i></span>
            </div>
        `;

        const email = shadow.getElementById("email");
        email.onclick = this.copyEmail;
    }
}

customElements.define("about-page", About);