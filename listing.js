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



// All gallery items (20)
let list_item = [];
let galleryImage = document.querySelectorAll(".gallery")
for (let i = 0; i < galleryImage.length; i++) {
  list_item.push(galleryImage[i])
}

// ALL page checkboxes (col and cat)
let allCheckboxes = document.querySelectorAll("input[type=checkbox]");
let allCheckboxesArr = [];
allCheckboxes.forEach(box => allCheckboxesArr.push(box))


// category functionality //
let textCatagory = document.querySelector(".cat")
let categorys = document.querySelector(".categorys")
let angle2 = document.querySelector(".down2")

let checkboxForCategorys = allCheckboxesArr.slice(11, 15)
// if 'category' text clicked, gallery cleared until filter picked.
// else all gallery shown
textCatagory.addEventListener("click", () => {
  if (categorys.style.display === "none") {
    categorys.style.display = "block";
    angle2.className = "fa fa-angle-up down2"
    list_item.forEach(i => i.style.display = "none")
    checkboxForCategorys.forEach(i => i.checked = false)
  } else {
    categorys.style.display = "none";
    angle2.className = "fa fa-angle-down down2";
    list_item.forEach(i => i.style.display = "block")
  }
})



// if each tickbox ticked, show gallery image
let secondPitemFromImg = document.querySelectorAll(".name-type p:nth-child(2)")
secondPitemFromImg.forEach(imageCat => {

  checkboxForCategorys[0].addEventListener("change", () => {
    if (checkboxForCategorys[0].checked === true && imageCat.innerText == "CHAIR") {
      imageCat.parentElement.parentElement.parentElement.style.display = "block"
    } else if (checkboxForCategorys[0].checked === false && imageCat.innerText == "CHAIR") {
      imageCat.parentElement.parentElement.parentElement.style.display = "none"
    }
  })
  checkboxForCategorys[1].addEventListener("change", () => {
    if (checkboxForCategorys[1].checked === true && imageCat.innerText == "TABLE") {
      imageCat.parentElement.parentElement.parentElement.style.display = "block"
    } else if (checkboxForCategorys[1].checked === false && imageCat.innerText == "TABLE") {
      imageCat.parentElement.parentElement.parentElement.style.display = "none"
    }
  })
  checkboxForCategorys[2].addEventListener("change", () => {
    if (checkboxForCategorys[2].checked === true && imageCat.innerText == "BED") {
      imageCat.parentElement.parentElement.parentElement.style.display = "block"
    } else if (checkboxForCategorys[2].checked === false && imageCat.innerText == "BED") {
      imageCat.parentElement.parentElement.parentElement.style.display = "none"
    }
  })
  checkboxForCategorys[3].addEventListener("change", () => {
    if (checkboxForCategorys[3].checked === true && imageCat.innerText == "SOFA") {
      imageCat.parentElement.parentElement.parentElement.style.display = "block"
    } else if (checkboxForCategorys[3].checked === false && imageCat.innerText == "SOFA") {
      imageCat.parentElement.parentElement.parentElement.style.display = "none"
    }
  })
})



// price range filters working!
let priceRange = [];
var priceRangeS = document.querySelectorAll(".slidecontainer input")
priceRangeS.forEach(p => priceRange.push(p))

let priceFromImgDiv = document.querySelectorAll(".price p:nth-child(1)")
priceFromImgDiv.forEach(productPrice => {

  priceRange.forEach(p => p.addEventListener("change", () => {
    if (Number(productPrice.innerText.slice(1)) >= Number(priceRange[0].value) 
    && Number(productPrice.innerText.slice(1)) <= Number(priceRange[1].value)) {
      productPrice.parentElement.parentElement.parentElement.style.display = "block"
    } else {
      productPrice.parentElement.parentElement.parentElement.style.display = "none"
    }
  }))
})



//bestmatch div clicked to open panel
let bestmatch = document.querySelector(".bestmatch")
let bestmatchs = document.querySelector(".bestmatchs");
let bmdown = document.querySelector(".bmdown")

bestmatch.addEventListener("click", () => {
  if (bestmatchs.style.display === "none") {
    bestmatchs.style.display = "block"
    bmdown.className = "fa fa-angle-up bmdown"
  } else {
    bestmatchs.style.display = "none"
    bmdown.className = "fa fa-angle-down bmdown"
  }
});


let defa = document.querySelector(".default")
let low = document.querySelector(".low");
let high = document.querySelector(".high")


console.log(list_item)
defa.addEventListener("click", () => {
  list_item.forEach(item => item.style.display = "block")
})
low.addEventListener("click", () => {
  priceFromImgDiv.forEach(productPrice => {
    console.log(productPrice)
    productPrice.sort((a,b)=> b-a)
  })
})
high.addEventListener("click", () => {
  priceFromImgDiv.forEach(productPrice => {
    productPrice.sort((a,b)=> a-b)
  })
})








// item splits to 6 over 4 pages but doesn't display properLy. No idea how to do this.

// list_item = each galley image item

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




// working here on how to display gallery items selected in the listings (type)
let colourArr = allCheckboxesArr.slice(0, 11)

console.log(colors)

galleryImage.forEach(tick => {

  colourArr[0].addEventListener("change", () => {
    if (colourArr[0].checked === true) {
      tick.style.display = "none"
    } else {
      tick.style.display = "block"
    }
  })



})

let checkb = []
let cb = document.querySelectorAll(".checkmark")

cb.forEach(i => checkb.push(i))
console.log(checkb)

if (checkb[0].checked === true) {
  console.log("hello")
}

















