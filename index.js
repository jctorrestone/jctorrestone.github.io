window.onload = () => {
    const lis = document.querySelectorAll("li");
    lis[0].onclick = () => renderComponent("projects-page");
    lis[1].onclick = () => renderComponent("about-page");
}

function renderComponent(component, attrs=null) {
    const aside = document.querySelector("aside");

    if(aside.lastChild) {
        aside.lastChild.remove();
    }

    const ctor = customElements.get(component);

    if(ctor) {
        attrs? aside.appendChild(new ctor(attrs)) : aside.appendChild(new ctor());
        aside.style.visibility = "visible";
    }
}