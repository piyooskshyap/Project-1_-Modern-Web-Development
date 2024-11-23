const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})


// https://youtu.be/InvSEpJUXu4?t=5866
// when mouse is moving i will get pressed or mouse ko chapta kar ne wala hu 
/* let timeout;
function circlechapta() {
    const miniCircle = document.querySelector("#minicircle");
    let xscale = 1;
    let yscale = 1;


    let xprevious = 0;
    let yprevious = 0;
    window.addEventListener("mousemove", (e) => {
        clearTimeout(timeout)
        xscale = gsap.utils.clamp(.8, 1.2, e.clientX - xprevious);
        yscale = gsap.utils.clamp(.8, 1.2, e.clientY - yprevious);

        xprevious = e.clientX;
        yprevious = e.clientY;

        mousefollower(e, xscale, yscale);
        timeout = setTimeout(() => {
            console.log("ok");
            miniCircle.style.transform = `translate(${e.x - 10}px, ${e.y - 10}px) scale(1,1)`;
        }, 100);
    })
}
circlechapta() 
function mousefollower(e, xscale, yscale) {*/


function mousefollower(e) {
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

            miniCircle.style.width = "15px";
            miniCircle.style.height = "15px";
            miniCircle.style.transform = `translate(${e.x - 10}px, ${e.y - 10}px)`;
        }
    });
}
mousefollower();


/* animation start from here */
/* using gsap */
function firstpageanim() {
    let timeline = gsap.timeline()
    timeline.from("#nav", {
        y: '-10',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1
    })

        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}
firstpageanim()



// image floating function written by self through understanding

// 1st
/*document.querySelectorAll(".elem").forEach((elem) => {
    let rotate = 0
    let diffrot = 0
    elem.addEventListener("mousemove", (e) => {
        elem.querySelector("img").style.opacity = 1
        let diff = e.clientY = elem.getBoundingClientRect().top;
        diffrot = e.clientX - rotate;
        rotate = e.clientX;
        elem.querySelector("img").style.transform = `translate(${e.clientX - 10}px,${e.clientY - diff - 50}px) rotate(${gsap.utils.clamp(-20, 20, diffrot)}deg)`
    })
    elem.addEventListener("mouseleave", (e) => {
        elem.querySelector("img").style.opacity = 0
    })
}) */


// 2nd
/* 
document.querySelectorAll(".elem").forEach((elem) => {
    let rotate = 0
    let diff = 0
    elem.addEventListener("mousemove", (e) => {
        diff = e.clientY - elem.getBoundingClientRect().top - 100;
        let diffrot = e.clientX - rotate;
        rotate = e.clientX;
        gsap.to(elem.querySelector(".elemimg"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: e.clientX - 100,
            rotate: gsap.utils.clamp(-20, 20, diffrot)
        })
    })
    elem.addEventListener("mouseleave", (e) => {
        gsap.to(elem.querySelector(".elemimg"), {
            opacity: 0,
            ease: Power1,
            duration: 0.5,
        })
    })
})
 */
document.querySelectorAll(".elem")
    .forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const img = e.currentTarget.querySelector(".elemimg");
            gsap.to(img, {
                opacity: 1, ease: Power3, x: gsap.utils.mapRange(0, window.innerWidth, 50, 1000, e.clientX)
                , duration: .5
            });
        });
        el.addEventListener("mouseleave", (e) => {
            const img = e.currentTarget.querySelector(".elemimg");
            gsap.to(img, { opacity: 0, ease: Power3, duration: .5 });
        });
    }); 