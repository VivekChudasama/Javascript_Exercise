// hold cart items in form of object
let cart = [];

// DOM Elements
const cartItemsContainer = document.getElementById("cart-items-container");
const cartCountElement = document.getElementById("cart-count");
const totalPriceElement = document.getElementById("total-price");
const totalItemsElement = document.getElementById("total-items");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const liveToast = document.getElementById("liveToast");
const deleteConfirmBtn = document.getElementById("confirmContentDelete");
let itemToDeleteId = null;

//  Event Listeners
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = {
      id: event.target.dataset.id,
      name: event.target.dataset.name,
      price: parseInt(event.target.dataset.price),
      quantity: 1,
    };
    addItemToCart(product);

    // Show Toast
    tost = document.getElementById("tostitem")
    tost.innerHTML=product.name
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToast);
    toastBootstrap.show();
  });
});

checkoutBtn.addEventListener("click", () => {
    cart = [];
    updateCartUI();
});

// Delete Confirm Listener
deleteConfirmBtn.addEventListener("click", () => {
  if (itemToDeleteId) {
    removeItemFromCart(itemToDeleteId);
    // Hide modal
    const deleteModalEl = document.getElementById("deleteConfirmModal");
    const modal = bootstrap.Modal.getInstance(deleteModalEl);
    modal.hide();
    itemToDeleteId = null;
  }
});

function addItemToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(product);
  }
  updateCartUI();
}

function removeItemFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
}

function updateItemQuantity(productId, newQuantity) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = parseInt(newQuantity);
    if (item.quantity <= 0) {
      removeItemFromCart(productId);
    } else {
      updateCartUI();
    }
  }
}

function updateCartUI() {
  renderCartItems();
  updateTotals();
}

function renderCartItems() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<tr><td colspan="5" class="text-center py-3 text-muted">Your cart is empty</td></tr>';
    updateTotals();
    return;
  }

  cart.forEach((item) => {
    const totalItemPrice = item.price * item.quantity;

    const tr = document.createElement("tr");
    tr.innerHTML = `
                <td>
                    <div class="d-flex align-items-center">
                        <span class="fw-medium">${item.name}</span>
                    </div>
                </td>
                <td>Rs ${item.price}</td>
                <td>
                    <div class="input-group input-group-sm" style="width: 110px;">
                        <button class="btn  btn-outline-danger btn-minus " type="button" data-id="${item.id}">-</button>
                        <input type="text" class="form-control text-center quantity-value" value="${item.quantity}" readonly>
                        <button class="btn btn-outline-primary btn-plus" type="button" data-id="${item.id}">+</button>
                    </div>
                </td>
                <td>Rs ${totalItemPrice}</td>
                <td>
                    <button class="btn btn-sm btn-outline-danger remove-btn" data-id="${item.id}" data-bs-toggle="modal" data-bs-target="#deleteConfirmModal">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `;
    cartItemsContainer.appendChild(tr);
  });

  attachCartEventListeners();
}

function updateTotals() {
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity,0);

  cartCountElement.innerText = totalQty;
  totalItemsElement.innerText = totalQty;
  totalPriceElement.innerText = "Rs " + totalPrice;

  // Disable/Enable Checkout Button
  if (cart.length === 0) {
    checkoutBtn.disabled = true;
  } else {
    checkoutBtn.disabled = false;
  }
}

function attachCartEventListeners() {
  // Remove buttons
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      itemToDeleteId = button.dataset.id;
    });
  });

  // Plus buttons
  const plusButtons = document.querySelectorAll(".btn-plus");
  plusButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const item = cart.find((item) => item.id === id);
      if (item) {
        updateItemQuantity(id, item.quantity + 1);
      }
    });
  });

  // Minus buttons
  const minusButtons = document.querySelectorAll(".btn-minus");
  minusButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const item = cart.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        updateItemQuantity(id, item.quantity - 1);
      }
    });
  });
}
