import { products, loadProducts } from "../data/products.js";
import { renderProductsGrid } from "./amazon.js";

loadProducts(loadPageBar);

// Creating a global variable
let userQuery;

function loadPageBar() {
  // Function to handle search input and update the URL
  function searchInput() {
    const input = document.querySelector('.search-bar').value; // Get input value
    const url = new URL(window.location.href); // Create a new URL object
    url.searchParams.set("search", input); // Update the search parameter

    // Update the browser's address bar without reloading the page
    window.history.pushState({}, "", url);

    if (!input.trim()) {
      alert("Please enter a valid search query.");
      return;
    }    

    return input; // Return the input value
  }

// Function to check if the parameter exists in the URL and match products
  function checkParameter(userQuery) {
    const url = new URL(window.location.href);
    let productsHTML = "";
    let count = 0;
  
    // Check if the search parameter exists in the URL
    if (url.searchParams.has('search')) {
      const parameter = url.searchParams.get('search');
      console.log(`Parameter from URL: ${parameter}`);
  
      // Filter and render products matching the search query
      products.forEach(product => {
        if (product.name.toLowerCase().includes(parameter.toLowerCase())) {
          count++;
          productsHTML += `
            <div class="product-container">
              <div class="product-image-container">
                <img class="product-image" src="${product.image}">
              </div>
    
              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>
    
              <div class="product-rating-container">
                <img class="product-rating-stars" src="${product.getStarsUrl()}">
                <div class="product-rating-count link-primary">
                  ${product.rating.count}
                </div>
              </div>
    
              <div class="product-price">
                ${product.getPrice()}
              </div>
    
              <div class="product-quantity-container">
                <select>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
    
              ${product.extraInfoHTML()}
    
              <div class="product-spacer"></div>
    
              <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
              </div>
    
              <button class="add-to-cart-button button-primary js-add-to-cart"
              data-product-id="${product.id}">
                Add to Cart
              </button>
            </div>
          `;
        }
      });
  
      // Render filtered products or display a "No results found" message
      if (count > 0) {
        document.querySelector('.js-products-grid').innerHTML = productsHTML;
      } else {
        document.querySelector('.js-products-grid').innerHTML = `
          <p>No products found matching your search query.</p>
        `;
      }
    } else {
      // Render all products if no search parameter exists
      products.forEach(product => {
        productsHTML += `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image" src="${product.image}">
            </div>
    
            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>
    
            <div class="product-rating-container">
              <img class="product-rating-stars" src="${product.getStarsUrl()}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>
    
            <div class="product-price">
              ${product.getPrice()}
            </div>
    
            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
    
            ${product.extraInfoHTML()}
    
            <div class="product-spacer"></div>
    
            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>
    
            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>
        `;
      });
  
      // Update the DOM with all products
      document.querySelector('.js-products-grid').innerHTML = productsHTML;
    }
  }  

  // Add an event listener to the search button
  document.querySelector('.search-button').addEventListener('click', () => {
    // Update the global userQuery with the search input value
    userQuery = searchInput();

    // Call checkParameter with the updated userQuery
    checkParameter(userQuery);
  });
}