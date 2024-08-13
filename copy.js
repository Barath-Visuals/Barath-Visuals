document.addEventListener('contextmenu', function(event) {event.preventDefault();});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})
sr.reveal('.centertxt',{delay:400, origin:'bottom'});
sr.reveal('.logopack',{delay:400, origin:'top'});
sr.reveal('.navigation',{delay:400, origin:'top'});
sr.reveal('.servicedetail',{delay:600, origin:'bottom'});
sr.reveal('.WID',{delay:600, origin:'bottom'});
sr.reveal('.myservice',{delay:600, origin:'bottom'});
sr.reveal('.profilepic',{delay:600, origin:'bottom'});
sr.reveal('.headingphoto',{delay:600, origin:'bottom'});
sr.reveal('.imageontainer',{delay:600, origin:'bottom'});
sr.reveal('.cgmain',{delay:600, origin:'bottom'});
sr.reveal('.cgbreif',{delay:600, origin:'bottom'});
sr.reveal('.filmlink',{delay:600, origin:'bottom'});
sr.reveal('.shvideo',{delay:600, origin:'bottom'});
sr.reveal('.blenderheading',{delay:600, origin:'bottom'});
sr.reveal('.blenderbreif',{delay:600, origin:'bottom'});
sr.reveal('.b-videobox',{delay:600, origin:'bottom'});

const imagecontainers = document.querySelectorAll(".imagecontainer");

if (!window.matchMedia("(perfers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    imagecontainers.forEach((imagecontainer) => {
        imagecontainer.setAttribute("data-animated", true);

        const photoRows = imagecontainer.querySelectorAll(".photo-row.row-1, .photo-row.row-2");

        if (photoRows.length === 0) {
            console.warn("No .photo-row.row-1 or .photo-row.row-2 elements found in this .imagecontainer.");
        }

        photoRows.forEach(photoRow => {

            const picturescontent = Array.from(photoRow.children);

            picturescontent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                console.log(duplicatedItem);

                duplicatedItem.setAttribute("aria-hidden", true);
                photoRow.appendChild(duplicatedItem);
            })
        });
    });
}
const sections = document.querySelectorAll("section");

sections.forEach((section) => {

    window.addEventListener("load", eventListener);
    window.addEventListener("scroll", eventListener);

    function eventListener(){
        let windowHeight = window.innerHeight;
        let sectionRectTop = section.getBoundingClientRect().top;

        console.log("window Height: " + windowHeight);
        console.log("section RectTop: " + sectionRectTop);

        if(sectionRectTop < windowHeight){
            section.classList.add("active");
        }
    }
})