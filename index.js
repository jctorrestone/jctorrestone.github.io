function renderComponent(component) {
    const side = document.getElementById("side");

    ctor = customElements.get("about-page")
    side.appendChild(ctor());
}