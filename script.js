
function offer1() {
    document.getElementById('offer').remove()
}


const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const success = "Add to cart successfully!"

const cart_btn = document.getElementById('cart_btn')

fetch('product.json')
    .then(res => res.json())
    .then(data => {
        const product = data.find(p => p.id === productId);
        if (product) {
            document.getElementById("product-name").innerText = product.name;
            document.getElementById("product-price").innerText = product.price;
            document.getElementById("product-img").src = product.img;
            cart_btn.setAttribute("data-name", product.name);
            cart_btn.setAttribute("data-price", product.price);
            cart_btn.setAttribute("data-image", product.img);
        } 
    });

    
    cart_btn.addEventListener("click", () => {

    let cart = JSON.parse(localStorage.getItem("cartData")) || [];

    const name = cart_btn.getAttribute("data-name");
    const price = parseInt(cart_btn.getAttribute("data-price"));
    const image = cart_btn.getAttribute("data-image");

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ name, price, image, qty: 1 });
    }

    alert(success)

    localStorage.setItem("cartData", JSON.stringify(cart));

    console.log(cart);
}) 

