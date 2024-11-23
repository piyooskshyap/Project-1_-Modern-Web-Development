const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})
function mousefollower() {
    window.addEventListener("mousemove", (e) => {
        const miniCircle = document.querySelector("#minicircle");
        if (e.y < 20) {
            miniCircle.style.width = "5px";
            miniCircle.style.height = "5px";
            miniCircle.style.transform = `translate(${e.x}px, ${e.y - 20}px)`;
        }
        else if (e.y > 580) {
            miniCircle.style.width = "5px";
            miniCircle.style.height = "5px";
            miniCircle.style.transform = `translate(${e.x}px, ${e.y + 20}px)`;

        }
        else {
            miniCircle.style.width = "20px";
            miniCircle.style.height = "20px";
            miniCircle.style.display = "block";
            miniCircle.style.transform = `translate(${e.x - 10}px, ${e.y - 10}px)`;
        }
    });
}
mousefollower();