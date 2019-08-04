const containers = document.querySelectorAll(".container-toggle");

function resize() {
    containers.forEach(container => {
        if (window.innerWidth <= 767) container.classList.remove("container");
        else container.classList.add("container");
    });
};

window.onload = resize;
window.onresize = resize;