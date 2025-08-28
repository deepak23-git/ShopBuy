const product = [
    {
        id: "p1",
        product_name: "Black Shirt",
        img: "img/products/n8.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p2",
        product_name: "Printed Shirt",
        img: "img/products/f1.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p3",
        product_name: "Formal Blue Shirt",
        img: "img/products/n1.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p4",
        product_name: "Double Pocket Shirt",
        img: "img/products/n7.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p5",
        product_name: "White Shirt",
        img: "img/products/n3.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p6",
        product_name: "Printed Flower Shirt",
        img: "img/products/f2.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p7",
        product_name: "Printed Shirt",
        img: "img/products/n4.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p8",
        product_name: "Checked Shirt",
        img: "img/products/n2.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p9",
        product_name: "Over Sized Pant",
        img: "img/products/f7.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p10",
        product_name: "Half Trouser",
        img: "img/products/n6.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p11",
        product_name: "Slim Fit Casuals",
        img: "img/pants/p3.jfif",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p12",
        product_name: "Slim Fit Casuals Black",
        img: "img/pants/p2.jfif",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p13",
        product_name: "Casual Olive Green",
        img: "img/pants/p4.jfif",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p14",
        product_name: "Baggy Carogo Pant",
        img: "img/pants/p6.jfif",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p15",
        product_name: "Jogers",
        img: "img/pants/p7.jfif",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p16",
        product_name: "Jeans Pant",
        img: "img/pants/p8.jfif",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p17",
        product_name: "Brown Leather Watch",
        img: "img/watchs/w1.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p18",
        product_name: "Mechanical Watch",
        img: "img/watchs/w2.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p19",
        product_name: "Clasical Watch",
        img: "img/watchs/w3.jpg",
        price: 499,
        act: 999,
        dis: 500
    },
    {
        id: "p20",
        product_name: "Leather Watch",
        img: "img/watchs/w4.jpg",
        price: 499,
        act: 999
    },
    {
        id: "p21",
        product_name: "Analog Watch",
        img: "img/watchs/w5.jpg",
        price: 499,
        act: 999
    },
    {
        id: "p22",
        product_name: "Casio Watch",
        img: "img/watchs/w6.jpg",
        price: 399,
        act: 449
    },
    {
        id: "p23",
        product_name: "Titan Watch",
        img: "img/watchs/1728373423978lkfxuozn.png",
        price: 499,
        act: 849
    },
    {
        id: "p24",
        product_name: "Timex Watch",
        img: "img/watchs/1728373428937nn0xef4r.png",
        price: 299,
        act: 499
    },
    {
        id: "p25",
        product_name: "Sport Shoes",
        img: "img/shoes/s1.jfif",
        price: 849,
        act: 1099
    },
    {
        id: "p26",
        product_name: "Casual White Shoe",
        img: "img/shoes/s2.jfif",
        price: 499,
        act: 599
    },
    {
        id: "p27",
        product_name: "Walking Sneakers",
        img: "img/shoes/s3.jfif",
        price: 499,
        act: 699
    },
    {
        id: "p28",
        product_name: "Sports Nike Shoe",
        img: "img/shoes/s4.jfif",
        price: 499,
        act: 899
    },
    {
        id: "p29",
        product_name: "Casual Shoe",
        img: "img/shoes/s11.jfif",
        price: 549,
        act: 999
    },
    {
        id: "p30",
        product_name: "Formal Brown Shoe",
        img: "img/shoes/s6.jfif",
        price: 499,
        act: 999
    },
    {
        id: "p31",
        product_name: "White Shoe",
        img: "img/shoes/s7.jfif",
        price: 499,
        act: 1199
    },
    {
        id: "p32",
        product_name: "Vintage White Shoe",
        img: "img/shoes/s8.jfif",
        price: 649,
        act: 1299
    }
]
var productContainer = document.getElementById("related_container");
var searchInput = document.getElementById("searchInput");


function showProducts(filter = "") {
    productContainer.innerHTML = "";

    const filteredProducts = product.filter(products => 
        products.product_name.toUpperCase().includes(filter.toUpperCase())
    );

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = "<h5>No Products Found</h5>";
        return;
    }

    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = "related-item";

        div.innerHTML = `
            <img src="${product.img}" alt="${product.product_name}" class="img-fluid mb-2">
            <h5>${product.product_name}</h5>
            <p>From ${product.price}</p>
            <a href="#" class="btn" onclick="viewProduct('${product.id}')">View</a>
        `;

        productContainer.appendChild(div);
    });
}

showProducts(); // initial load all products

searchInput.addEventListener("keyup", (e) => {
    const searchValue = e.target.value;
    showProducts(searchValue);
});
