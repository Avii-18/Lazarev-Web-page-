function locomativeAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function navAnimation() {
    var nav = document.querySelector("nav");

    // Single timeline instance banayein taaki fast hover/unhover par glitch na ho
    var tl = gsap.timeline({ paused: true });

    // Complete animation timeline define karein
    tl.to("#nav-bottom", {
        height: "24vh",
        duration: 0.5,
        ease: "power2.out"
    });

    tl.set(".nav-part2 h5", {
        display: "block"
    }, "-=0.3"); // Pehle hi display block kar dein background open hone ke saath

    tl.to(".nav-part2 h5 span", {
        y: 0,
        opacity: 1,
        duration: 0.2,
        stagger: {
            amount: 0.2 // Total time span across all elements
        },
        ease: "power2.out"
    }, "-=0.2"); // Background complete hone se pehle text aana shuru ho jaye

    // Hover Event Listeners
    nav.addEventListener("mouseenter", function () {
        tl.play(); // Play timeline forward
    });

    nav.addEventListener("mouseleave", function () {
        tl.reverse(); // Reverse timeline smoothly backward!
    });

}
function Page3Animation() {
    var page3animation = document.querySelector(".page3-center");
    var video = document.querySelector("#page3 video");

    page3animation.addEventListener("click", function () {
        video.play();

        gsap.to(video, {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            borderRadius: 0,
            duration: 0.6,
            ease: "power2.inOut"
        });
    });

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            scaleX: 0.7,
            scaleY: 0,
            opacity: 0,
            borderRadius: "30px",
            duration: 0.6,
            ease: "power2.inOut"
        });
    })
}

function page2Animation() {
    var rightElem = document.querySelectorAll(".right-elem")
    rightElem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 70,
                y: dets.y - elem.getBoundingClientRect().y - 170
            })
        })
    })
}

var section = document.querySelectorAll(".section")
section.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        let video = elem.querySelector("video");

        video.style.opacity = 1;
        video.play();
    });

    elem.addEventListener("mouseleave", function () {
        let video = elem.querySelector("video");

        video.style.opacity = 0;
        video.pause();
    });
});

function CardAnimations() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            const title = card.querySelector("h2").innerText;

            console.log("Selected expertise:", title);
        });
    });
}
function page9bottomanimation(){
    gsap.to("#btm9-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#btm9-part2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 10%",
        scrub: true
    }
});
}
function loadingAnimation(){
    var tl = gsap.timeline();

tl.from("#page1", {
    opacity: 0,
    duration: 0.5,
    delay: 0.2
});

tl.from("#page1", {
    scaleX: 0.7,
    scaleY: 0.2,
    y: 150,
    borderRadius: "50px",
    duration: 1.5,
    ease: "power4.out"
});

tl.from("nav", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

tl.from("#page1 h1, #page1 p, #page1 div", {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out"
});
}



locomativeAnimation()
navAnimation()
Page3Animation()
page2Animation()
CardAnimations()
page9bottomanimation()
loadingAnimation()


