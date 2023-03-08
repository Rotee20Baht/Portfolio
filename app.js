const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.nav-link');
const skillbars = document.querySelectorAll(".skill-level-bar");
const fadeTops = document.querySelectorAll(".fade-top");
const fadeLefts = document.querySelectorAll(".fade-left");
const fadeRights = document.querySelectorAll(".fade-right");
const fadeBottom = document.querySelectorAll(".fade-bottom");


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.isIntersecting ? entry.target.classList.add('active') : entry.target.classList.remove('active');
    })
})

fadeTops.forEach(item => observer.observe(item))
fadeLefts.forEach(item => observer.observe(item))
fadeRights.forEach(item => observer.observe(item))
fadeBottom.forEach(item => observer.observe(item))
skillbars.forEach(bar => observer.observe(bar))

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

for(var i = 0; i < navlink.length; ++i){
    console.log("time ",i);
    navlink[i].addEventListener('click', () => {
        if(navbar.classList.contains('active')){
            hamburger.classList.remove('active');
            navbar.classList.remove('active')
        }
    })
}
