gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray("section");
const lastIndex = sections.length - 1;
sections.forEach((section, i)=>{
    section._bg = section.querySelector(".bg");
    section._h1 = section.querySelector("h1");
    section._h3 = section.querySelector("h3");
    section._h4 = section.querySelector("h4");
    //   section._car = section.getElementById("car");
    // Give the backgrounds some random images
    //   section._bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight*2}?random=${i})`;
    // Create a standalone ST instance, and use the progress value (0 - 1) to tween the timeline's progress
    ScrollTrigger.create({
        trigger: section,
        start: ()=>i == 0 ? "top top" : "top bottom",
        end: ()=>i == lastIndex ? "top top" : "bottom top",
        onRefresh: (self)=>{
            section._tl = gsap.timeline({
                paused: true,
                defaults: {
                    ease: "none",
                    overwrite: "auto"
                }
            }).fromTo(section._h1, {
                y: ()=>i == 0 ? 0 : innerHeight / 2 * 1.25
            }, {
                y: ()=>i == lastIndex ? 0 : -innerHeight / 2 * 1.5
            }, 0).fromTo(section._h3, {
                x: ()=>i == 0 ? 0 : innerHeight / 2 * 1.5
            }, {
                x: ()=>i == lastIndex ? 0 : -innerHeight / 2 * 1.5
            }, 0).fromTo(section._h4, {
                y: ()=>i == 0 ? 0 : innerHeight / 2 * 2
            }, {
                y: ()=>i == lastIndex ? 0 : -innerHeight / 2 * 1.5
            }, 0).fromTo(section._bg, {
                y: ()=>i == 0 ? -innerHeight / 2 : 0
            }, {
                y: ()=>i == lastIndex ? -innerHeight / 2 : -innerHeight
            }, 0).progress(self.progress); //use progress to position the timeline correctly      
        },
        onUpdate: (self)=>{
            gsap.to(section._tl, {
                duration: 0.75,
                progress: self.progress
            });
        }
    });
});
Vue.createApp({
    data () {
        return {
            name: "Adel",
            age: 51
        };
    },
    methods: {}
}).mount("#cost-calculation");
gsap.to(".App-logo", {
    duration: 5,
    y: 30,
    ease: "bounce"
});
// const carDimentionsHover = document.getElementById('car-image')
// carDimentionsHover.addEventListener('mouseover', () => {
//     gsap.to('#car-dimentions', {
//         autoAlpha: 1
//     })
// })
// carDimentionsHover.addEventListener('mouseleave', () => {
//     gsap.to('#car-dimentions', {
//         autoAlpha: 0
//     })
// })
// 
gsap.to("#sfcar", {
    scrollTrigger: "#sfcar",
    duration: 5,
    // ease: 'bounce',
    x: -innerWidth,
    repeat: -1,
    repeatDelay: 2
});
const tl = gsap.timeline();
tl.to("#car1", {
    duration: 1,
    x: document.documentElement.clientWidth / 2 - 200,
    ease: "circ"
})// insert 1 second after end of timeline
.to("#car2", {
    duration: 1,
    x: document.documentElement.clientWidth / 2 - 200
}, "+=1")// insert 1 second after end of timeline
.to("#car3", {
    duration: 1,
    x: document.documentElement.clientWidth / 2 - 200
}, "+=1").to("#car4", {
    duration: 1,
    x: document.documentElement.clientWidth / 2 - 200
}, "+=1").to("#car5", {
    duration: 1,
    x: document.documentElement.clientWidth / 2 - 200
}, "+=1").to("#car6", {
    duration: 1,
    x: document.documentElement.clientWidth / 2 - 200
}, "+=1").to("#car7", {
    duration: 1,
    x: document.documentElement.clientWidth / 2 - 200
}, "+=1");
tl.repeat(-1);
gsap.to("#white-logo", 2, {
    rotation: 360,
    repeat: -1
});

//# sourceMappingURL=index.c36f364e.js.map
