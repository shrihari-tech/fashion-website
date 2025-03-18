// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Select all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get product data from data attributes
        const product = {
          name: button.getAttribute('data-name'),
          price: button.getAttribute('data-price'),
          img: button.getAttribute('data-img'),
          quantity: 1
        };
  
        // Retrieve current cart from localStorage (or initialize as empty array)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
        // Check if product already exists in the cart
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
          // Increase quantity if product is already in the cart
          existingProduct.quantity += 1;
        } else {
          // Add new product to cart
          cart.push(product);
        }
  
        // Save updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
  
        // Provide feedback to the user
        alert('${Your product} has been added to your cart.');
      });
    });
  });