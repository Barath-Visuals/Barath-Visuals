document.addEventListener('contextmenu', function(event) {event.preventDefault();});


window.addEventListener("load", () => {
    console.log("sucks");
});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})
sr.reveal('.centertxt',{delay:400, origin:'bottom'});
sr.reveal('.logopack',{delay:400, origin:'top'});
sr.reveal('.navigation',{delay:400, origin:'top'});

const imagecontainers = document.querySelectorAll(".imagecontainer");

if (!window.matchMedia("(perfers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    imagecontainers.forEach(imagecontainer => {
        imagecontainer.setAttribute("data-animated",true);
    })
}