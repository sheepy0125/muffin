let hover = document.querySelector("#hover");
let hover_container = document.querySelector("#hover-container");

document.onmousemove = (event) => {
    hover.style.transform = (`
        translateX(${event.x}px) \
        translateY(${event.y}px)
    `);
};

document.onmouseup = (event) => {
    hover_container.appendChild(hover.cloneNode(false));
}