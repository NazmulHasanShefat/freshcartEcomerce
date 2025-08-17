async function fetch_request() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error(`HTTP Error Status: ${res.status}`);
    }
    const product_data = res.json();
    return product_data;
  } catch (error) {
    console.error("Faild to fetch product data", error);
    return error;
  }
}
let product_container = document.querySelector(".allproduct-container");
let x;
fetch_request()
.then(
    products_data => {
      const products = products_data.products;
      product_container.innerHTML = products.map((product, index) => {
        return `
               <div class="product_wraper col-12 col-lg-3">
                <div class="product px-3 py-2" style="width: 97%;">
                  <div class="product-image d-flex justify-content-center align-items-center">
                    <img src="${product.images}" height="150" id="product_img" width="150" alt="">
                  </div>
                  
                  <div class="product_all_details">
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
                    <button class="add_to_cart_btn1">Add to cart</button>
                  </div>
                </div>
              </div>
              </div>
            `
    }).join("");
    x = product_container.querySelectorAll(".product_wraper");
    handleProducts(x)
  })


function handleProducts(mydata){
    mydata.forEach(values =>{
      console.log(values);
    })
}