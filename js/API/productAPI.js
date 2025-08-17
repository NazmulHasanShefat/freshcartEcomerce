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
let cart = JSON.parse(localStorage.getItem("cart")) || [];
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
    })
    alertAdded_to_cart("Added to cart");
  }
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