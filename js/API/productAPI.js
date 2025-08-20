// createting request
async function send_request() {
  const res = await fetch("https://dummyjson.com/products");
  try {
    if (!res.ok) {
      throw new Error(`HTTP ERROR STATUS: ${res.status}`);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error(`Faild to fetch data`, error);
    return error;
  }
}

let product_container = document.querySelector(".allproduct-container");
function get_product() {
  send_request()
    .then(product_data => {
      const products = product_data.products;
      console.log(products);
      product_container.innerHTML = products.map((product, index) => {
        return `
         <div class="product_wraper col-12 col-lg-3">
                <div class="product px-3 py-2" style="width: 97%;">
                  <div class="product-image d-flex justify-content-center align-items-center">
                    <img src="${product.images}" height="150" id="product_img" width="150" alt="">
                  </div>
                  
                  <div class="product_all_details">
                  <div class="d-none">${product.id}</div>
                  <div class="product-title">${product.title}</div>
                  <div class="product_price">
                    <span class="price_sell"><span>$</span><span id="pro_price">${product.price}</span></span>
                    <span class="price_old"><span>$</span><span>40</span></span>
                  </div>
                  <div class="product_rating d-flex justify-content-between">
                    <div class="rating_pro_stars_div">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"
                        class="bi bi-star-fill text-warning">
                        <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"
                        class="bi bi-star-fill text-warning">
                        <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"
                        class="bi bi-star-fill text-warning">
                        <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"
                        class="bi bi-star-fill text-warning">
                        <path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"
                        class="bi bi-star-half text-warning">
                        <path
                          d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z">
                        </path>
                      </svg>
                    </div>
                    <div class="rating_point">4.3</div>
                  </div>
                  <div class="controls_btn text-center py-2">
                    <button class="add_to_cart_btn">Add to cart</button>
                  </div>
                </div>
              </div>
              </div>
      `
      }).join("")
      let product_component = document.querySelectorAll(".product_wraper");
      // console.log(product_component);
      handle_products(product_component);
    })
}
get_product();
// handle add to cart btn click event
function handle_products(Product_elem) {
  Product_elem.forEach(productElem => {
    let add_to_cart_btn = productElem.firstElementChild.lastElementChild.lastElementChild.firstElementChild;
    add_to_cart_btn.addEventListener("click", () => {
      let p_id = add_to_cart_btn.parentElement.parentElement.firstElementChild.innerText;
      product_add_to_cart(p_id, add_to_cart_btn);
    })
  })
}
// store cart products in cart variable
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// rander cart product
function rander_cart_product() {
  let cart_product_container = document.querySelector(".wrap_cart_products");

  cart_product_container.innerHTML = "";
  cart.forEach(cartItem => {
    let div_cart = document.createElement("div");
    div_cart.innerHTML = `
     <div class="cart-item row align-items-center px-3 px-lg-0">
        <div class="cart-sections cart-image col-2 ml-0">
        <img src="${cartItem.p_image}" alt="">
        </div>
        <div class="cart-sections col-lg-5 col-10">
        <div class="d-none">${cartItem.p_id}</div>
        <div class="cart-name" style="font-size: 16px;"><strong>${cartItem.p_title}</strong></div>
        <div class="cart_remove_btn_container">
        <a href="#" class="remove_btn" data-myId="${cartItem.p_id}" style="font-size: 12px;">
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px"
        height="18px" viewBox="0 0 24 24" version="1.1">
        <title>delete_2_line</title>
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="System" transform="translate(-576.000000, -192.000000)" fill-rule="nonzero">
        <g id="delete_2_line" transform="translate(576.000000, 192.000000)">
        <path
        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
        id="MingCute" fill-rule="nonzero">
        </path>
        <path
        d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z"
        id="形状" fill="#118111">
        </path>
        </g>
        </g>
        </g>
        </svg>
        </span>
        remove
        </a>
        </div>
        </div>
        
        <div class="cart-sections col-6 col-lg-3 px-5 py-2">
        <div class="cart-quantity d-flex align-items-center justify-content-start">
        <button type="button" class="btn_minus">-</button>
        <div class="inc_dec_value">${cartItem.p_Quantity}</div>
        <button type="button" class="btn_plus">+</button>
        </div>
        </div>
        
        <div class="cart-sections col-6 col-lg-2 d-lg-block py-2 d-flex px-3 justify-content-end">
        <div class="total-amount"><strong>$${cartItem.p_total}</strong></div>
        </div>
        
        </div>  
    `;
    cart_product_container.appendChild(div_cart);
    updateLocal();
  })
  // remove button action 
  // ================================ remove cartItem  =======================================
  let remove_btn = document.querySelectorAll(".remove_btn");
  remove_btn.forEach(cart_rm_btn => {
    cart_rm_btn.addEventListener("click", delete_cart_item)
  })
  // ============================ increase and decrease buttons =========================
  let increase_btn = document.querySelectorAll(".btn_plus");
  increase_quantity(increase_btn);
  let decrease_btn = document.querySelectorAll(".btn_minus");
  decrease_quantity(decrease_btn);
}


// add to cart functionality
function product_add_to_cart(pro_id, this_btn) {
  let cart_product_title = this_btn.parentElement.parentElement.children[1].innerText;
  let cart_product_image = this_btn.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.src;
  let cart_product_price = this_btn.parentElement.parentElement.children[2].firstElementChild.lastElementChild.innerText;
  // console.log(cart_product_image);
  // same product is exist
  const productExist = cart.find(item => item.p_title === cart_product_title);
  if (productExist) {
    productExist.p_Quantity++;
    alertAdded_to_cart("Product updated to cart!");
  } else {
    cart.push({
      p_title: cart_product_title,
      p_image: cart_product_image,
      p_price: cart_product_price,
      p_Quantity: 1,
      p_id: cart.length,
      p_total: cart_product_price,
    })
    alertAdded_to_cart("Added to cart");
    // rander_cart_product();
  }
  update_product();
}
update_product();

// ================================ remove cartItem  =======================================
function delete_cart_item(event){
  const cart_product_id = parseInt(event.target.getAttribute("data-myId"));
  const ItemIndex = cart.findIndex(item => item.p_id === cart_product_id);
  if(ItemIndex > -1){
    // const Item_to_remove = cart[ItemIndex];
    // console.log(Item_to_remove);
    cart.splice(ItemIndex,1);
    update_product();
  }
  update_product();
}
// increase cart item quantity
function increase_quantity(elem){
  elem.forEach(elem_btn =>{
    // let inc_total_elem = elem_btn.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild;
    let inc_id = parseInt(elem_btn.parentElement.parentElement.parentElement.children[1].firstElementChild.innerText);
    elem_btn.addEventListener("click",()=>{
      const inc_product_id = cart.find(inc_item => inc_item.p_id === inc_id)
      if(inc_product_id){
        inc_product_id.p_Quantity++;
        let x = inc_product_id.p_Quantity;
        calculate_total(inc_product_id.p_Quantity,inc_product_id.p_price)
      }
      update_product();
    })
  })
}

// let current_inc_dec_value;
function decrease_quantity(elem_dec){
  elem_dec.forEach(elem_dec_btn =>{
    let dec_id = parseInt(elem_dec_btn.parentElement.parentElement.parentElement.children[1].firstElementChild.innerText);
    elem_dec_btn.addEventListener("click",()=>{
      const dec_product_id = cart.find(dec_item => dec_item.p_id === dec_id);
      if(dec_product_id){
         if(dec_product_id.p_Quantity > 1){
            dec_product_id.p_Quantity--;
          }
          calculate_total(dec_product_id.p_Quantity,dec_product_id.p_price);
        }
        update_product();
    })
  })
}

// single total ============================================================
function calculate_total(cal_Q,cal_price,cal_product_id){
  let single_total = parseFloat(cal_price) * parseInt(cal_Q);
  const single_total_item = cart.find(item => item.p_price === cal_price);
  if(single_total_item){
    single_total_item.p_total = single_total.toFixed(2);
  }
}
// sub total calculation
function subTotal(){
  let cart_subtotal = document.querySelector(".cart_subtotalText");
  let cart_sub_total = cart.reduce((sum, item) => sum + eval(item.p_total),0);
  let c_s_t = cart_sub_total.toFixed(2);
  cart_subtotal.innerText = c_s_t;

}


// cart notification
function update_notification(){
  let cart_badge_text = document.querySelector(".cart_badge_text");  
  let cart_item_quantity = cart.length
  cart_badge_text.innerText = cart_item_quantity;
}


// update all
function update_product(){
  rander_cart_product();
  updateLocal();
  update_notification();
  subTotal();
}
function updateLocal() {
  localStorage.setItem("cart", JSON.stringify(cart))
}




// ================================= add to cart alert ==============================================================
function alertAdded_to_cart(massage) {
  let alert_div = document.createElement("section");// create alert container
  alert_div.classList.add("cart_alert_div")  // adding class
  let alert_box = document.querySelectorAll(".cart_alert_div");
  // console.log(alert_box.length);
  alert_div.style.opacity = "0";
  alert_div.style.transform = `translateY(-${alert_box.length * 50}%)`;
  // alert_div.style.transform = `scale(0)`;
  alert_div.style.marginTop = "20px";
  alert_div.innerHTML = `<p> 
    <span><img src="https://cdn-icons-png.flaticon.com/512/14090/14090371.png" height="20" width="20"></span> <span class="ml-2">${massage}</span></p>`
  document.body.appendChild(alert_div);
  setTimeout(() => {
    alert_div.style.opacity = "1";
    alert_div.style.transform = `translateY(-${alert_box.length * 150}%)`;
  }, 100);
  setTimeout(() => {
    alert_div.style.transform = `translateY(-${alert_box.length * 100}%)`;
    alert_div.style.opacity = "0";
  }, 4799);

  setTimeout(() => {
    // alert_div.style.transform = `translateY(-${alert_box.length*100}%)`;
    alert_div.remove();
  }, 5000);
}
// ================================= add to cart alert ==============================================================