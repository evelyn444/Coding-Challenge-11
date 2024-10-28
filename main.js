//Task 1: Setup HTML Structure for Order Form
const productSelector = document.getElementByID ('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

//Task 2: Add Event Listener for Product Selection
productSelector.addEventListener('change', calculateTotalPrice);
quantityInput.addEventListener('input', calculateTotalPrice);