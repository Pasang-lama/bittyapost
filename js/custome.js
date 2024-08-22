var nabbar = document.getElementById("nav-bar")
window.addEventListener("scroll", function () {
    if (this.window.scrollY > 400) {
        nabbar.classList.add("sticky")
    } else {
        nabbar.classList.remove("sticky")
    }
})

// js can change the sytle 
var openbtn = document.getElementById("sidenav-open-btn") 
var sidenav = document.getElementById("side-nav") 
var closeBtn = document.getElementById("close-btn") 

openbtn.addEventListener("click", function(){
    sidenav.style.left="0%"
})

closeBtn.addEventListener("click", function(){
    sidenav.style.left="-100%"
})