let cart_product_list = document.querySelector(".cart_product_list");
let shoping_cart = JSON.parse(localStorage.getItem("cart")) || [];

function getCartItem() {
    cart_product_list.innerHTML = "";
    shoping_cart.forEach(item => {
        let list_container = document.createElement("ol");
        list_container.classList.add("list-group", "list-none");
        list_container.innerHTML = `
             <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="cart-image"><img src="${item.p_image}" height="70" width="70" alt=""></div>
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">${item.p_title}</div>
                        Content for list item
                    </div>
                    <div class="quantity_controls d-flex justify-content-center align-items-center mx-4">
                        <button dec-id=${item.p_id} class="btn btn-sm mx-2 dec_button">-</button>
                        <div style="border: 1px solid #7c7c7c60" class="px-2">${item.p_Quantity}</div>
                        <button  class="btn btn-sm mx-2 inc_button" inc-Id=${item.p_id}>+</button>
                    </div>
                    <div class="mx-3"><strong>$<span>${item.p_total}</span></strong></div>
                 <a href="../product_page/productpage.html?name=${item.p_title}" class="btn btn-success btn-sm" style="font-size: .6rem">
                    Vew product
                 </a>
                 <a href="#" pro_id=${item.p_id} style="text-decoration:none;" class="px-3 delete_btn">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B12C00" class="bi bi-trash3-fill pe-none" viewBox="0 0 16 16">
                     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                   </svg>
                 </a>
                </li>
                
            `;
        cart_product_list.appendChild(list_container);

        let delete_item = document.querySelectorAll(".delete_btn");
        delete_item.forEach(delete_btn => {
            delete_btn.addEventListener("click", delete_cartItem);
        })
        let inc_button = document.querySelectorAll(".inc_button").forEach(inc_btn => inc_btn.addEventListener("click", cart_inc_quantity));
        let dec_button = document.querySelectorAll(".dec_button").forEach(dec_btn => dec_btn.addEventListener("click", cart_dec_quantity))

    })
}
getCartItem();

function delete_cartItem(e) {
    const deleteId = parseInt(e.target.getAttribute("pro_id"));
    const delete_cartItem = shoping_cart.findIndex(item => item.p_id === deleteId);

    if (delete_cartItem > -1) {
        shoping_cart.splice(delete_cartItem, 1);
        updateAll();
    }
}
function cart_inc_quantity(e) {
    const inc_id = parseInt(e.target.getAttribute("inc-Id"));
    console.log(inc_id)
    const inc_Item = shoping_cart.find(item => item.p_id === inc_id);
    if (inc_Item) {
        inc_Item.p_Quantity++;
        updateAll();
    }
}
function cart_dec_quantity(e) {
    const dec_id = parseInt(e.target.getAttribute("dec-Id"));
    console.log(dec_id);
    const dec_Item = shoping_cart.find(item => item.p_id === dec_id);
    if (dec_Item) {
        dec_Item.p_Quantity--;
        updateAll();
    }
}
function calculateAll() {
    let sub_total = document.getElementById("sub_total");
    const dec_total = document.getElementById("dec_total");
    let cart_total = document.querySelector("#cart_total");

    let Subtotal = shoping_cart.reduce((sum, item) => sum + eval(item.p_total), 0).toFixed(2);
    let dec_t;
    let totalParsentage = 5;
    dec_t = Subtotal * totalParsentage / 100;
    dec_total.innerText = dec_t.toFixed(2);
    cart_total.innerText = Subtotal;
    with_deccount_subtotal = Subtotal -= dec_t;
    sub_total.innerText = with_deccount_subtotal.toFixed(2);
    // updateAll();
}

function updateAll() {
    updateLS();
    getCartItem();
    calculateAll();
}
calculateAll();
function updateLS() {
    localStorage.setItem("cart", JSON.stringify(shoping_cart));
}