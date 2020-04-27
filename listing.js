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


// colourDiv functionality //
let colourDiv = document.querySelector(".colour")
let coloursDiv = document.querySelector(".colours")
let angle = document.querySelector(".down")

colourDiv.addEventListener("click", () => {
  if (coloursDiv.style.display === "none") {
    coloursDiv.style.display = "block";
    angle.className = "fa fa-angle-up down"
  } else {
    coloursDiv.style.display = "none";
    angle.className = "fa fa-angle-down down"
  }
})

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



let galleryItem = document.querySelectorAll(".gallery")
let ifchecked = document.querySelectorAll("input[type=checkbox]")

ifchecked.forEach(tick => {
  tick.addEventListener("change", () => {
    galleryItem.forEach(imageDiv => {

      let name = imageDiv.querySelectorAll("p")[0].innerText
      let type = imageDiv.querySelectorAll("p")[1].innerText.toLowerCase()
      let price = imageDiv.querySelectorAll("p")[2].innerText

      
      console.log(`container ${type}`)
      console.log(tick.parentElement.className)
      console.log(imageDiv)

      let cont = []
    if(tick.checked && `container ${type}` !== tick.parentElement.className) {
      imageDiv.style.display = "none";
    } else {
      imageDiv.style.display = "block";
    }

    })
  })
})





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




let cul = [];
colors.forEach(item => item.forEach(x => cul.push(x)))
let unique = [...new Set(cul)];

let unique2 = [...new Set(type)];


console.log(unique2)
/*
- Color, category and price range filters must update the list of products in real time

- Products can be sorted three ways: Default, Price: highest first, Price: lowest first. Selecting a sort option must update the list of products in real time

- Clicking the "Add to basket" button will update the cart icon in the top right of the page to show the number of products in the cart

- Products in the cart are stored and remembered by the browser using localStorage
*/




console.log(name)
































