//navbar scrolling
window.onscroll = function() {scrollFunction()};


const humburger = document.querySelector(".navbar-toggler");
const mainNav = document.getElementById("mainNav")

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mainNav.classList.add('navbar-reduce');
    } else {
        mainNav.classList.remove('navbar-reduce');
    }
  }

// navbar button
humburger.addEventListener("click", function(){
        if(!mainNav.classList.contains('navbar-reduce')){
            mainNav.classList.add('navbar-reduce');
        } else{
            mainNav.classList.remove('navbar-reduce');
        }
});

// typing text animation script
 

var typed = new Typed('.typing',{
    strings:["Developer", "Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed = new Typed('.typing-2',{
    strings:["Developer",  "Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true

});

 

