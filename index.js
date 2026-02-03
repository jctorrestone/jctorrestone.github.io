window.onload = () => {
    const lis = document.querySelectorAll("li");
    lis.forEach(li => li.onclick = () => renderComponent(li.getAttribute("component")));
}

function renderComponent(component) {
    const side = document.querySelector("aside");

    if(side.lastChild) {
        side.lastChild.remove();
    }

    const ctor = customElements.get(component);

    if(ctor) {
        side.appendChild(new ctor());
        side.style.visibility = "visible";
    }
}