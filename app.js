const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.nav-link');
// console.log(navlink);

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
