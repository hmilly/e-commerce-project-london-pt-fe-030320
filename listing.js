

// Slider functionality //
function getVals() {
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
  var slide1 = parseFloat(slides[0].value);
  var slide2 = parseFloat(slides[1].value);
  if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }

  var displayElement = parent.getElementsByClassName("price-range")[0];
  var displayE = parent.getElementsByClassName("price-range")[1];
  displayElement.innerHTML = slide1;
  displayE.innerHTML = slide2;
}

window.onload = function () {
  var sliderSections = document.getElementsByClassName("slidecontainer");
  for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        sliders[y].oninput();
      }
    }
  }
}


//when showing under 414px ,click angle to open up filters menu
let mediaAngle = document.querySelector(".fdown")
let collection = document.querySelector(".collection");
let colour = document.querySelector(".colour");
let h3 = document.querySelector("h3");
let slide = document.querySelector(".slidecontainer");

mediaAngle.addEventListener("click", () => {
  console.log("click")
  if (slide.style.display === "none") {
    collection.style.display = "block";
    colour.style.display = "block";
    category.style.display = "block";
    h3.style.display = "block";
    slide.style.display = "block";
  } else {
    collection.style.display = "none";
    colour.style.display = "none";
    category.style.display = "none";
    h3.style.display = "none";
    slide.style.display = "none";
  }
});




// colourDiv functionality //
let coloursDiv = document.querySelector(".colours");
let angle = document.querySelector(".down");

colour.addEventListener("click", () => {
  if (coloursDiv.style.display === "none") {
    coloursDiv.style.display = "block";
    angle.className = "fa fa-angle-up down";
  } else {
    coloursDiv.style.display = "none";
    angle.className = "fa fa-angle-down down";
  }
});


// category functionality //
let category = document.querySelector(".category")
let categorys = document.querySelector(".categorys")
let angle2 = document.querySelector(".down2")

category.addEventListener("click", () => {
  if (categorys.style.display === "none") {
    categorys.style.display = "block";
    angle2.className = "fa fa-angle-up down2"
  } else {
    categorys.style.display = "none";
    angle2.className = "fa fa-angle-down down2"
  }
})



// working here on how to display gallery items selected in the listings (colour/price/type)
let galleryItem = document.querySelectorAll(".gallery");
galleryItem.forEach((imageDiv) => {
  let type = imageDiv.querySelectorAll("p")[1].innerText.toLowerCase();
})


let ifchecked = document.querySelectorAll("input[type=checkbox]");
ifchecked.forEach(tick => {
  tick.addEventListener("change", () => {


    let item = document.querySelectorAll(".name-type p:nth-child(2)")

    console.log(tick.className)
    console.log(tick.checked)


    console.log(tick.parentElement)

    if (item.forEach(x => x.innerText === tick.className && tick.checked === true)) {
      console.log(tick)
      console.log("hi")
      console.log(tick.className)

    }
  });
});




// who knows what the hell is going on here, I'm tired.
var low = document.querySelector(".one")
var high = document.querySelector(".two")

let price = [];


   
low.addEventListener("change", (l) => {
 
    if (price.forEach(i => i <= l)) {
      console.log(i)
  }})


high.addEventListener("change", (h) => {

  if (price.forEach(i => i >= h)) {
    console.log(i)
    
    }})






// arrays of items from products doc

let name = [];
let type = [];

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




let cul = [];
colors.forEach(item => item.forEach(x => cul.push(x)))
let unique = [...new Set(cul)];

let unique2 = [...new Set(type)];


/*
- Color, category and price range filters must update the list of products in real time

- Products can be sorted three ways: Default, Price: highest first, Price: lowest first. Selecting a sort option must update the list of products in real time

- Clicking the "Add to basket" button will update the cart icon in the top right of the page to show the number of products in the cart

- Products in the cart are stored and remembered by the browser using localStorage
*/


































