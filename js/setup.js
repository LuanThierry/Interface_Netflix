$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:3.5
        },
        600:{
            items:7.5
        },
        1000:{
            items:10.5
        }
    }
})


let input = document.querySelector(".ahh")
let search = document.querySelector(".fa-search")
search.addEventListener("click", function() {
    input.classList.add(".searchBox")
})
let playDiv  = document.querySelector(".um")
let info = document.querySelector(".info")
info.addEventListener("click", function () {
    displayOn.style.display="flex"
    playDiv.classList.add("displayOn")
})