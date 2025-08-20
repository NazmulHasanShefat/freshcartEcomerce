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
                    <button class="btn btn-sm mx-2">-</button>
                    <div style="border: 1px solid #7c7c7c60" class="px-2">${item.p_Quantity}</div>
                    <button  class="btn btn-sm mx-2">+</button>
                </div>
                <div class="mx-3"><strong>$<span>${item.p_total}</span></strong></div>
             <a href="../product_page/productpage.html?name=${item.p_title}" class="btn btn-success btn-sm" style="font-size: .6rem">
                Vew product
             </a>
            </li>
            
        `;
        cart_product_list.appendChild(list_container);
        let sub_total = document.getElementById("sub_total");
        let total = shoping_cart.reduce((sum,item)=> sum + eval(item.p_total),0);
        sub_total.innerText = total;
        const dec_total = document.getElementById("dec_total");
        let totalParsentage = 5;
        let dec_t = total * totalParsentage / 100;
        dec_total.innerText = dec_t.toFixed(2);
    })
}
getCartItem()