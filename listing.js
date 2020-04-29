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

<<<<<<< HEAD
=======

>>>>>>> f6f5b0ca8d73870b44842bc496003bbdf6a3a0b7
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


// working here on how to display gallery items selected in the listings (type)
let allCheckboxes = document.querySelectorAll("input[type=checkbox]");
let allCheckboxesArr = [];
allCheckboxes.forEach(box => allCheckboxesArr.push(box))

<<<<<<< HEAD
let catArr = allCheckboxesArr.slice(11, 15)

let secondPitemFromImg = document.querySelectorAll(".name-type p:nth-child(2)")

secondPitemFromImg.forEach(tick => {
  catArr[0].addEventListener("change", () => {
    if (catArr[0].checked === true && tick.innerText !== "CHAIR") {
      tick.parentElement.parentElement.parentElement.style.display = "none"
    } else {
      tick.parentElement.parentElement.parentElement.style.display = "block"
    }
  })
  catArr[1].addEventListener("change", () => {
    if (catArr[1].checked === true && tick.innerText !== "TABLE") {
      tick.parentElement.parentElement.parentElement.style.display = "none"
    } else {
      tick.parentElement.parentElement.parentElement.style.display = "block"
    }
  })
  catArr[2].addEventListener("change", () => {
    if (catArr[2].checked === true && tick.innerText !== "BED") {
      tick.parentElement.parentElement.parentElement.style.display = "none"
    } else {
      tick.parentElement.parentElement.parentElement.style.display = "block"
    }
  })
  catArr[3].addEventListener("change", () => {
    if (catArr[3].checked === true && tick.innerText !== "SOFA") {
      tick.parentElement.parentElement.parentElement.style.display = "none"
    } else {
      tick.parentElement.parentElement.parentElement.style.display = "block"
    }
  })
})

=======
// working here on how to display gallery items selected in the listings (colour/price/type)
let allCheckboxes = document.querySelectorAll("input[type=checkbox]");


let allCheckboxesArr = [];
allCheckboxes.forEach(box => allCheckboxesArr.push(box))

let colourArr = allCheckboxesArr.slice(0, 11)
let catArr = allCheckboxesArr.slice(11, 15)

let item = document.querySelectorAll(".name-type p:nth-child(2)")
>>>>>>> f6f5b0ca8d73870b44842bc496003bbdf6a3a0b7

item.forEach(tick => {
  catArr[0].addEventListener("change", () => {
    console.log(tick)
    if (catArr[0].checked === true && tick.innerText == "CHAIR") {
      tick.parentElement.parentElement.parentElement.style.display = "none"
    } else {
      tick.parentElement.parentElement.parentElement.style.display = "block"
    }
  })

<<<<<<< HEAD
=======
  catArr[1].addEventListener("change", () => {
    if (catArr[1].checked === true && tick.innerText == "TABLE") {
      tick.parentElement.parentElement.parentElement.style.display = "none"
    } else {
      tick.parentElement.parentElement.parentElement.style.display = "block"
    }
  })

  catArr[2].addEventListener("change", () => {
    if (catArr[2].checked === true && tick.innerText == "BED") {
      tick.parentElement.parentElement.parentElement.style.display = "none"
    } else {
      tick.parentElement.parentElement.parentElement.style.display = "block"
    }
  })

  catArr[3].addEventListener("change", () => {
    if (catArr[3].checked === true && tick.innerText == "SOFA") {
      tick.parentElement.parentElement.parentElement.style.display = "none"
    } else {
      tick.parentElement.parentElement.parentElement.style.display = "block"
    }
  })

})



>>>>>>> f6f5b0ca8d73870b44842bc496003bbdf6a3a0b7




// who knows what the hell is going on here, I'm tired.
var low = document.querySelector(".one")
var high = document.querySelector(".two")
let price = [];

low.addEventListener("change", (l) => {

  if (price.forEach(i => i <= l)) {
    console.log(i)
  }
})

high.addEventListener("change", (h) => {

  if (price.forEach(i => i >= h)) {
    console.log(i)
<<<<<<< HEAD

  }
})


=======
>>>>>>> f6f5b0ca8d73870b44842bc496003bbdf6a3a0b7

  }
})


// all gallery items (20)
let list_item = [];
let list_items = document.getElementsByClassName("gallery")
for (let i = 0; i < list_items.length; i++) {
  list_item.push(list_items[i])
}
// gallery div
let list_element = document.getElementsByClassName("img-div")

// page number )(4 divs)
let pageDivs = []
let pageNum = document.getElementsByClassName("page")
for (let i = 0; i < pageNum.length; i++) {
  pageDivs.push(pageNum[i])
}

let currentP = 1;
let itemNums = 6;


function displayList(items, wrapper, itemspp, page) {
  wrapper.innerText = "";
  page--;

  //        20
  let start = itemspp * page;
  let end = start + itemspp;
  let pagi = items.slice(start, end)

  for (let i = 0; i < pagi.length; i++) {
    let item = pagi[i]
  }
}

//             (20,       image_div,      6,        4)
displayList(list_item, list_element, itemNums, currentP);




/*
page = 1;
quantity = 6
 
have a startIndex = pageNumber * quantityPerPage
2. have renderProducts function wich takes an array of products and render them
3. every time you switch a page you update startIndex , and call renderProducts 
with spliced array [startIndex, startIndex + quantityPerPage
 
 
 
 
let renderProd = (listIarr, )
 
 
 
*/

// item splits to 6 over 4 pages but doesn't display properLy. No idea how to do this.
let list_item = [];
let galleryImage = document.querySelectorAll(".gallery")
for (let i = 0; i < galleryImage.length; i++) {
  list_item.push(galleryImage[i])
}

let list_element = document.getElementsByClassName("img-div")


let pageDivs = []
let pageNum = document.getElementsByClassName("page")
for (let i = 0; i < pageNum.length; i++) {
  pageDivs.push(pageNum[i])
}

let currentP = 1;
let itemNums = 6;


function displayList(items, wrapper, itemspp, page) {
  wrapper.innerText = "";
  page--;

  //        20
  let start = itemspp * page;
  let end = start + itemspp;
  let pagi = items.slice(start, end)

  for (let i = 0; i < pagi.length; i++) {
    console.log(pagi[i])
  }
}

//             (20,       image_div,      6,        4)
displayList(list_item, list_element, itemNums, currentP);





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


<<<<<<< HEAD



// working here on how to display gallery items selected in the listings (type)
let colourArr = allCheckboxesArr.slice(0, 11)

console.log(colors)


galleryImage.forEach(tick => {

  colourArr[0].addEventListener("change", () => {
    if (colourArr[0].checked === true ) {
      tick.style.display = "none"
    } else {
      tick.style.display = "block"
    }
  })






















  
  })

























=======
>>>>>>> f6f5b0ca8d73870b44842bc496003bbdf6a3a0b7

