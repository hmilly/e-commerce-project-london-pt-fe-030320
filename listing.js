var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


/*
- Color, category and price range filters must update the list of products in real time

- Products can be sorted three ways: Default, Price: highest first, Price: lowest first. Selecting a sort option must update the list of products in real time

- Clicking the "Add to basket" button will update the cart icon in the top right of the page to show the number of products in the cart

- Products in the cart are stored and remembered by the browser using localStorage
*/