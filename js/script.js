/* ===================================
INICIALIZAR AOS
=================================== */

AOS.init({

    duration: 1200,
    once: true,
    offset: 100

});

/* ===================================
NAVBAR DINAMICO
=================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar-custom");

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-scroll");

    } else {

        navbar.classList.remove("navbar-scroll");

    }

});

/* ===================================
CONTADORES ANIMADOS
=================================== */

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = parseInt(counter.getAttribute("data-target"));

    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {

        if (current < target) {

            current += increment;

            counter.innerText = Math.ceil(current);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    observer.observe(counter);

});

/* ===================================
CARRUSEL HERO
=================================== */

const heroCarousel = document.querySelector('#heroCarousel');

if(heroCarousel){

    new bootstrap.Carousel(heroCarousel,{

        interval:5000,
        ride:'carousel',
        pause:false,
        wrap:true

    });

}

/* ===================================
CARRUSEL TESTIMONIOS
=================================== */

const testimonialCarousel =
document.querySelector('#testimonialCarousel');

if(testimonialCarousel){

    new bootstrap.Carousel(testimonialCarousel,{

        interval:4000,
        ride:'carousel',
        pause:false,
        wrap:true

    });

}

/* ===================================
SCROLL SUAVE
=================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth',
                block:'start'

            });

        }

    });

});

/* ===================================
VALIDACION FORMULARIO
=================================== */

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const inputs =
        form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input=>{

            if(input.value.trim()===""){

                valid = false;

                input.style.border =
                "2px solid red";

            }else{

                input.style.border =
                "1px solid #ced4da";

            }

        });

        if(valid){

        /*    alert(
            "Do you want to send us the email?"
            );

            form.reset();
            */

        }else{

            alert(
            "You must fill in all the fields, please!"
            );

        }

    });

}

/* ===================================
EFECTO APARICION SUAVE
=================================== */

const fadeElements =
document.querySelectorAll(
'.service-card, .gallery-img, .process-box'
);

const fadeObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.2
});

fadeElements.forEach(el=>{

    el.style.opacity = "0";

    el.style.transform =
    "translateY(50px)";

    el.style.transition =
    "all .8s ease";

    fadeObserver.observe(el);

});

/* ===================================
EFECTO PARALLAX SUAVE
=================================== */

window.addEventListener("scroll",()=>{

    const parallax =
    document.querySelector(".parallax");

    if(parallax){

        let offset =
        window.pageYOffset;

        parallax.style.backgroundPositionY =
        offset * 0.4 + "px";

    }

});

/* ===================================
BOTON WHATSAPP
=================================== */

const whatsapp =
document.querySelector(".whatsapp-btn");

if(whatsapp){

    whatsapp.addEventListener("mouseenter",()=>{

        whatsapp.style.transform =
        "scale(1.15)";

    });

    whatsapp.addEventListener("mouseleave",()=>{

        whatsapp.style.transform =
        "scale(1)";

    });

}

/* ===================================
PRELOADER OPCIONAL
=================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* ===================================
CONSOLA
=================================== */

console.log(
"🌿 Green Garden Landing Page cargada correctamente."
);