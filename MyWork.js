document.addEventListener("DOMContentLoaded", function(){

    const downArrow = document.getElementById("down-arrow");
    const targetSection = document.getElementById("shortfilm");

     if(downArrow && targetSection) {
        downArrow.addEventListener("click", function(){
            targetSection.scrollIntoView({ behavior: "smooth"});
        });
     }
     const myWorks = document.getElementById("scroll-mywork");
     const topSection = document.getElementById("section-heading");

     if(myWorks && topSection) {
        myWorks.addEventListener("click", function(){
            topSection.scrollIntoView({ behavior: "smooth"});
        });
     }

});
