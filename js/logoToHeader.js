gsap.registerPlugin(ScrollTrigger);

/* 처음 Fade in 효과 */
gsap.fromTo(
  ".mainHeader",
  {
    opacity: 0,
    yPercent: 50,
  },
  {
    yPercent: 0,
    opacity: 1,
    duration: 3,
    ease: "power3.out",
  }
);

/* Logo to header animation ScrollTrigger*/
let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".tmp",
    start: 0, //모르겠음
    end: () => window.innerHeight * 0.5, //커질수록 늦게 올라감
    scrub: 2, //커질수록 반응속도 느려짐
  },
});
let logoT = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainTxt",
    start: 0, //모르겠음
    end: () => window.innerHeight * 0.5, //커질수록 늦게 올라감
    scrub: 2, //커질수록 반응속도 느려짐
  },
});
let slogoTl = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: 0, //모르겠음
    end: () => window.innerHeight * 0.5, //커질수록 늦게 올라감
    scrub: 2, //커질수록 반응속도 느려짐
  },
});

let typedT2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainPageSection2",
    start: "top center",
    end: "center center",
    scrub: 3,
  }
  
})
let typedT = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainPageSection2",
    start: "center 40%",
    end: "center center",
    scrub: 3,
  },
});


/* mainlogo to header */
logoT.fromTo(
  ".mainLogo",
  {
    x: 0,
    y: 250,
    top: "50vh",
    yPercent: 0,
    opacity: 1,
    scale: 1,
    textShadow: "0 0 2px rgba(0,0,0,0.3)",
  },
  {
    x: 0,
    y: 250,
    opacity: 0,
    yPercent: 0,
    scale: 1,
    textShadow: "0 0 2px rgba(0,0,0,0)",
    duration: 0.3,
  }
);
slogoTl.fromTo(
  ".mainLogoTxt",
  {
    x: 0,
    y: 250,
    top: 0,
    yPercent: 0,
    scale: 1.5,
    textShadow: "0 0 2px rgba(0,0,0,0.3)",
  },
  {
    x: 0,
    y: -140,
    top: 0,
    yPercent: 50,
    scale: 1,
    textShadow: "0 0 2px rgba(0,0,0,0)",
    duration: 0.8,
  }
);
logoTl.fromTo(
  ".mainLogoSubTxt",
  {
    x: 0,
    y: 250,
    top: 0,
    opacity: 1,
    yPercent: 0,
    scale: 1.5,
    textShadow: "0 0 2px rgba(0,0,0,0.3)",
  },
  {
    x: 0,
    y: 250,
    top: 0,
    opacity: 0,
    yPercent: 0,
    scale: 1.5,
    textShadow: "0 0 2px rgba(0,0,0,0)",
    duration: 0.8,
  }
);
// Typed Animation scroll trigger
typedT.fromTo(
  ".ExplainTyped",
  {
    x: 0,
    y: 0,
    top: 0,
    yPercent: 0,
    opacity: 1,
    scale: 1,
    textShadow: "0 0 2px rgba(0,0,0,0.3)",
  },
  {
    x: 0,
    y: 0,
    opacity: 0,
    yPercent: 0,
    scale: 1,
    textShadow: "0 0 2px rgba(0,0,0,0)",
    duration: 0.1,
  }
);

typedT2.fromTo(
  ".ExplainTyped",
  {
    x: 0,
    y: 0,
    top: 0,
    yPercent: 0,
    opacity: 0,
    scale: 1,
    textShadow: "0 0 2px rgba(0,0,0,0.3)",
  },
  {
    x: 0,
    y: 0,
    opacity: 1,
    yPercent: 0,
    scale: 1,
    textShadow: "0 0 2px rgba(0,0,0,0)",
    duration: 5,
  }
);