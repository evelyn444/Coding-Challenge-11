//Task 1: Setup HTML Structure for Order Form
const productSelector = document.getElementById ('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

//Task 2: Add Event Listener for Product Selection
productSelector.addEventListener('change', calculateTotalPrice);
quantityInput.addEventListener('input', calculateTotalPrice);

//Task 3: Calculate Total Price Dynamically
function calculateTotalPrice(){
    const productPrice =parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity; // price changes based on the quantity selected
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input',updateTotalPrice);

//Task 4: Handle Order Submission
placeOrderButton.addEventListener('click', function(){ //place order button when clicked
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    orderSummary.textContent = `You have ordered ${quantity} of ${selectedProduct} for $${totalPrice}`; //displays order summary
});