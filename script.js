  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true
  });

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".animation");

    if (container) {

      const animation = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "video/video.json"
      });

      animation.addEventListener("DOMLoaded", function () {

        let playhead = { frame: 0 };

        gsap.to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          },
          onUpdate: () => {
            animation.goToAndStop(playhead.frame, true);
          }
        });

      });
    }
    

gsap.from(".logo",{
  opacity:0,
  duration:1,
  y:-20,
  
})
gsap.from(".hero-text",{
  opacity:0,
  duration:1,
  y:20,
  filter:"blur(10px)"
})
gsap.from(".lottie-container",{
  opacity:0,
  duration:2 ,
  y:20,
  filter:"blur(20px)"
})

})

  const prime = document.querySelector(".prime");
  const reaver = document.querySelector(".reaver");
  const website = document.querySelector(".website-content");
  const site = document.querySelector(".website-content");
  const kanjis = document.querySelectorAll(".kanji");
  reaver.addEventListener("click", () => {
if(prime && reaver){

  reaver.addEventListener("click", () => {

    kanjis.forEach((k, i) => {
      setTimeout(() => {
        k.classList.add("reaverDash");
      }, i * 120);
    });

    document.body.classList.remove("prime-theme");
    document.body.classList.add("reaver-theme");

  });

  prime.addEventListener("click", () => {

    document.body.classList.remove("reaver-theme");
    document.body.classList.add("prime-theme");

  });

}

    kanjis.forEach((k, i) => {

      setTimeout(() => {
        k.classList.add("reaverDash");
      }, i * 120); 

    });

  });
  prime.addEventListener("click", () => {
    document.body.classList.remove("reaver-theme");
    document.body.classList.add("prime-theme");
  });

  reaver.addEventListener("click", () => {
    document.body.classList.remove("prime-theme");
    document.body.classList.add("reaver-theme");
  });

  function changeBackground(newClass){

    site.classList.add("bg-transition");

    setTimeout(() => {

      site.classList.remove("prime-bg","reaver-bg");
      site.classList.add(newClass);

      site.classList.remove("bg-transition");

    },300);

  }
  prime.addEventListener("click", () => {

    prime.classList.add("active");
    prime.classList.remove("left");

    reaver.classList.remove("active");

    website.classList.remove("reaver-bg");
    website.classList.add("prime-bg");

  });

  reaver.addEventListener("click", () => {

    reaver.classList.add("active");
    prime.classList.remove("active");
    prime.classList.add("left");

    website.classList.remove("prime-bg");
    website.classList.add("reaver-bg");

  });


  const primeInfo = document.querySelector(".prime-info");
  const reaverInfo = document.querySelector(".reaver-info");

  prime.addEventListener("click", () => {

    primeInfo.classList.add("active");
    reaverInfo.classList.remove("active");

  });

  reaver.addEventListener("click", () => {

    reaverInfo.classList.add("active");
    primeInfo.classList.remove("active");
  })

  gsap.from(".kanji",{
    opacity:0,
    duration:1,
    x:60,
      ease: "power2.out",
     scrollTrigger: {
      trigger: ".website-content",
      start: "top 60%",
     scrub:1,
  }
});

  gsap.from(".weapon-info",{
    opacity:0,
    duration:1,
    y:60,
      ease: "power2.out",
     scrollTrigger: {
      trigger: ".website-content",
      start: "top 60%",
        scrub:1,
  }
});

gsap.from(".weapon",{
    opacity:0,
    duration:1,
    y:-60,
      ease: "power2.out",
     scrollTrigger: {
      trigger: ".website-content",
      start: "top 60%",
      scrub:1,
  }
});

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#final",
      start:"top top",
      end:"+=150%",
      scrub:2,
      pin:true
    }
  });

  tl.to(".fundo1 img",{
    scale:4,
    filter:"blur(10px)",
    ease:"none"
  })

  .to(".fundo1",{
    opacity:0,
    ease:"none"
  }, "-=0.3")

  .to(".fundo2",{
    opacity:1,
    ease:"none"
  }, "-=0.3");
  tl.fromTo(".fundo2",
  {
    scale:1
  },
  {
    scale:1.5
  },0);


  gsap.set([".pilar2",], {
    y: 400,          
    rotation: 90,    
    opacity: 0,
    transformOrigin: "bottom center"
  });
  gsap.set([".pilar1",], {
    y: 400,       
    rotation: -90,  
    opacity: 0,
    transformOrigin: "bottom center"
  });

  gsap.set([".pilar4",], {
    y: 400,          
    rotation: 20,   
    opacity: 0,
    transformOrigin: "bottom center"
  });
  gsap.set([".pilar3",], {
    y: 400,          
    rotation: -90,   
    opacity: 0,
    transformOrigin: "bottom center"
  });

  gsap.to(".pilar1", {
    y: 0,
    rotation: -22,
    opacity: 1,
    duration: 1.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".outros",
      start: "50%",
          scale: 1.05,
            scrub: 2,
    }
  });

  gsap.to(".pilar2", {
    y: 0,
    rotation: 6,
    opacity: 1,
    duration: 1.4,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".outros",
      start: "50%",
      scale: 1.05,
      scrub: 2,
    }
  })

  gsap.to(".pilar3", {
    y: 0,
    rotation: -10,
    opacity: 1,
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".outros",
      start: "50%",
      scale: 1.05,
        scrub: 2,
    }
  })

  gsap.to(".pilar4", {
    y: 0,
    rotation: -20,
    opacity: 1,
    duration: 3,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".outros",
      start: "50%",
      scale: 1.05,
        scrub: 2,
    }
  })



  gsap.to(".tituend",{
    opacity:1,
    y:0,
    duration:1.2,
    ease:"power3.out",
    scrollTrigger:{
      trigger:".outros",
      start:"50%",
      scrub: 2,
    }
  });

  gsap.to(".textend",{
    opacity:1,
    y:0,
    duration:1.2,
    ease:"power3.out",
    scrollTrigger:{
      trigger:".outros",
      start:"50%",
      scrub: 2,
    }
  });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    600 / 600,
    0.1,
    1000
  );

  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(600, 600);

  document.getElementById("objeto3d").appendChild(renderer.domElement);

  // luz
  const light = new THREE.AmbientLight(0xffffff, 1.5);
  scene.add(light);

  // loader
  const loader = new THREE.GLTFLoader();

  let modelo;

  loader.load("video/modelo.glb", function(gltf){

    modelo = gltf.scene;
    modelo.scale.set(2,2,2);

    scene.add(modelo);

  });

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (event)=>{

    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;

  });
function animate(){

  requestAnimationFrame(animate);

  if(modelo){

    const targetY = mouseX * 0.6;
    const targetX = mouseY * 0.3;

    modelo.rotation.y += (targetY - modelo.rotation.y) * 0.08;
    modelo.rotation.x += (targetX - modelo.rotation.x) * 0.08;

  }

  renderer.render(scene, camera);
}
  animate();

  let mouse = { x: 0, y: 0 };

  window.addEventListener("mousemove", (e) => {

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  });



  gsap.to("#objeto3d",{
    opacity:1,
    y:0,
    duration:3,
    ease:"power3.out",
    scrollTrigger:{
      trigger:".outros",
      start:"80%",
      scrub: 2,
    }
  });
gsap.to(".bg-gradient", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".outros",
    start: "top bottom",
    end: "top center",
    scrub: true
  }
});