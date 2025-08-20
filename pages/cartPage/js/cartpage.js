let cart_product_list = document.querySelector(".cart_product_list");
let shoping_cart = JSON.parse(localStorage.getItem("cart")) || [];

function getCartItem(){
    shoping_cart.forEach(item =>{
        let list_container = document.createElement("ol");
        list_container.classList.add("list-group","list-none");
        list_container.innerHTML = `
         <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="cart-image"><img src="${item.p_image}" height="70" width="70" alt=""></div>
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.p_title}</div>
                    Content for list item
                </div>
                <div class="quantity_controls d-flex justify-content-center align-items-center mx-4">
                    <button class="btn btn-sm fs-3">-</button>
                    <div>${item.p_Quantity}</div>
                    <button class="btn btn-sm fs-3">+</button>
                </div>
            <a href="../product_page/productpage.html?name=${item.p_title}" class="btn btn-secondary">Vew_product</a>
            </li>
            
        `;
        cart_product_list.appendChild(list_container);
    })
}
getCartItem()