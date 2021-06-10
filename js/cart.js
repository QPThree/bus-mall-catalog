/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// Done: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

}

// Done: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // Done: Find the table body
  let tbody = document.querySelector('tbody');
  console.log(tbody);
  // Done: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // Done: Create a TR
    let tr = document.createElement('tr');
    tr.id = `tr${i}`;
    // Done: Create a TD for the delete link, quantity,  and the item
    let td0 = document.createElement('td');
    td0.textContent = 'X';
    td0.id = `item${i}`;
    td0.addEventListener('click', removeItemFromCart);
    let td1 = document.createElement('td');
    td1.textContent = cart.items[i].quantity;
    let td2 = document.createElement('td');
    td2.textContent = cart.items[i].product;
    // Done: Add the TR to the TBODY and each of the TD's to the TR
    tbody.appendChild(tr);
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    console.log(cart.items[i]);
  }

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let row = document.getElementById(event.target.id);
  console.log(row);
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}


// This will initialize the page and draw the cart on screen
renderCart();
