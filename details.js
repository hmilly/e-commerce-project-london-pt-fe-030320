var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
let plusSlides = (n) => showSlides(slideIndex += n);

// Thumbnail image controls
let currentSlide = (n) => showSlides(slideIndex = n);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


let add = document.querySelector(".add")
add.addEventListener("click", () => {
    add.innerText = "GO TO CHECKOUT"
    add.style.backgroundColor = "rgb(90, 195, 90)"
})



let deats = document.querySelector(".deats")
let deat = document.querySelector(".deat")
let angle = document.querySelector(".fa-angle-down")

deats.addEventListener("click", () => {
    if (deat.style.display === "none") {
        deat.style.display = "block";
        angle.className = "fa fa-angle-up"
    } else {
        deat.style.display = "none";
        angle.className = "fa fa-angle-down"
    }
})


/*

- Clicking the "Add to basket" button will update the cart
icon in the top right of the page to show the number
of products in the cart

- Products in the cart are stored and remembered by the
browser using localStorage

*/


let name = [];
let type = [];
let price = [];
let colors = [];
let materials = [];
let filling_materials = [];
let dimensions = [];
let seat_dimensions = [];
let description = [];
let weight = [];
let comfort_level = [];

for (let i in PRODUCTS) {
    name.push(PRODUCTS[i].name)
    type.push(PRODUCTS[i].type)
    price.push(PRODUCTS[i].price)
    colors.push(PRODUCTS[i].colors)
    materials.push(PRODUCTS[i].materials)
    filling_materials.push(PRODUCTS[i].filling_materials)
    dimensions.push(PRODUCTS[i].dimensions)
    seat_dimensions.push(PRODUCTS[i].seat_dimensions)
    description.push(PRODUCTS[i].description)
    weight.push(PRODUCTS[i].weight)
    comfort_level.push(PRODUCTS[i].comfort_level)
}
