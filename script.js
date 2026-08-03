// ==========================
// HAMBURGER MENU
// ==========================


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            if (window.innerWidth <= 900) {
                navLinks.classList.remove("active");

                const icon = menuBtn.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });
}







// ==========================
// RUNNING COUNTER
// ==========================


const counters = document.querySelectorAll(".counter");


const startCounter = (counter)=>{


    const target = +counter.getAttribute("data-target");


    let count = 0;


    const speed = target / 100;


    const updateCounter = ()=>{


        count += speed;


        if(count < target){

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(updateCounter);

        }
        else{

            counter.innerText = target + "+";

        }


    };


    updateCounter();


};





// ==========================
// COUNTER ON SCROLL
// ==========================


let counterStarted = false;


window.addEventListener("scroll",()=>{


    const counterSection = document.querySelector(".counter-section");


    const sectionPosition = counterSection.getBoundingClientRect().top;


    const screenPosition = window.innerHeight;



    if(sectionPosition < screenPosition && !counterStarted){


        counters.forEach(counter=>{

            startCounter(counter);

        });


        counterStarted = true;


    }


});






// ==========================
// SIMPLE SCROLL ANIMATION
// ==========================


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position = section.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }


    });


});




// INITIAL SECTION STYLE


sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s ease";

});
