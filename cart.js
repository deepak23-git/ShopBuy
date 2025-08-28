let cart = JSON.parse(localStorage.getItem("cartData")) || [];

const price_detaile = document.getElementById('price_deatail')
const order_place = document.getElementById('order_place')


function renderCart() {
    if (cart.length === 0) {
        document.getElementById("cartItems").innerHTML = "<p class='text-center fs-3'>No items in cart</p>";
        document.getElementById("totalAmount").textContent = "0";
        price_detaile.style.display = 'none'
        order_place.style.display = 'none'
        return;
    }

    let total = 0;
    document.getElementById("cartItems").innerHTML = cart.map(item => {
        total += item.price * item.qty;
        price_detaile.style.display = 'block'
        order_place.style.display = 'block'
        document.getElementById('act').textContent = total;
        return `
<div class="row carts">
    <div class="col-lg-7 col-12">
        <div class="items" id="items">
            <div class="row bg-light cart-item mb-2" id="p1">
                <div class="col-5 bor">
                    <img style="width: 100%;" src="${item.image}" alt="">
                </div>
                <div class="col-6 d-flex flex-column justify-content-center ms-2 my-2">
                    <div class="row mt-lg-2">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="row mt-lg-2">
                        <h6>&#8377; ${item.price}</h6>
                    </div>
                    <div class="row mt-lg-2">
                        <div class="d-flex gap-2 align-items-center">
                            <button class="btn btn-sm btn-outline-secondary"
                                onclick="decreaseQty('${item.name}')">-</button>
                            <span>${item.qty}</span>
                            <button class="btn btn-sm btn-outline-secondary"
                                onclick="increaseQty('${item.name}')">+</button>
                        </div>
                    </div>
                    <div class="row w-lg-50 mt-lg-3 mt-3">
                        <button class="btn w-50 bg-dark text-light remove" onclick="removeItem('${item.name}')">
                            <i class="fa-regular fa-trash-can me-1"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `;
    }).join("");

    document.getElementById("totalAmount").textContent = total + 40;
}

// 👉 Important: Attach functions to window!

window.increaseQty = function (name) {
    cart = cart.map(item => {
        if (item.name === name) {
            return { ...item, qty: item.qty + 1 };
        }
        return item;
    });
    localStorage.setItem("cartData", JSON.stringify(cart));
    renderCart();
}

window.decreaseQty = function (name) {
    cart = cart.map(item => {
        if (item.name === name && item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
        }
        return item;
    });
    localStorage.setItem("cartData", JSON.stringify(cart));
    renderCart();
}

window.removeItem = function (name) {
    cart = cart.filter(i => i.name !== name);
    localStorage.setItem("cartData", JSON.stringify(cart));
    renderCart();
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const customerName = prompt("Enter your name:");
    const customerEmail = prompt("Enter your email:");
    const customerAddress = prompt("Enter your Address:");

    if (!customerName || !customerEmail) {
        alert("Please provide your name and email!");
        return;
    }

    const orderSummaryItems = cart.map(item => `
      <p>${item.name} (₹${item.price}) × ${item.qty} = ₹${item.price * item.qty}</p>
    `).join("");

    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    document.getElementById("orderSummaryItems").innerHTML = orderSummaryItems;
    document.getElementById("orderSummaryTotal").textContent = totalAmount;
    document.getElementById("customerName").textContent = `Name: ${customerName}`;
    document.getElementById("customerEmail").textContent = `Email: ${customerEmail}`;
    document.getElementById("customerAddress").textContent = `Address: ${customerAddress}`;

    const orderSummaryModal = new bootstrap.Modal(document.getElementById('orderSummaryModal'));
    orderSummaryModal.show();


});

document.getElementById('Confirm').addEventListener('click', () => {

    cart = [];
    localStorage.removeItem("cartData");
    renderCart();

})

renderCart();

