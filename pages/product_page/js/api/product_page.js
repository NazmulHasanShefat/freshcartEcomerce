// js toast
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

let product_title = document.querySelector("#product_title");

// get product title use urlparams
const url_params = new URLSearchParams(window.location.search)
const url_product = url_params.get("name");
console.log(url_product);


// send request from api for fetch product
async function send_request(){
    const res = await fetch("https://dummyjson.com/products");
    try {
        if(!res.ok){
            throw new Error(`http error status: ${res.status}`)
        }
        const data = res.json();
        return data;
    } catch (error) {
        console.error(`faild to fetch daata:`,error);
        return error;
    }
}

function get_product(){
    send_request()
     .then(product_data =>{
        const product = product_data.products;
        const product_container = document.querySelector("#product-container");
        const current_product = product.find(item => item.title === url_product);
        console.log(current_product);
        product_container.innerHTML = `
        
           <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <!-- Product Card -->
                <div class="card product-card">
                    <div class="row g-4">
                        <!-- Product Image Column -->
                        <div class="col-md-6 d-flex align-items-center justify-content-center">
                            <div class="product-image-container">
                                <img src="${current_product.images}" class="img-fluid product-image" alt="Product Image">
                            </div>
                        </div>
                        <!-- Product Details Column -->
                        <div class="col-md-6 d-flex flex-column justify-content-center p-md-5">
                            <h1 class="display-5 fw-bold mb-2">${current_product.title}</h1>
                            <p class="h3 mb-3 fw-bold">$${current_product.price}</p>
                            <p class="lead lead-text mb-4">
                              ${current_product.description}
                            </p>
                            <div class="row gap-2">
                              <button class="btn btn-add-cart col-5 btn-sm">Add to Cart</button>
                              <button class="btn btn-add-cart col-5 btn-sm">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        `;
        current_Product_details(current_product);
     })
}
get_product();

const nav_link = document.querySelectorAll(".nav-links");
nav_link.forEach(tabLinks => {
    tabLinks.addEventListener("click",(e)=>{
     nav_link.forEach(otherLinks=>{
            if(otherLinks.classList.contains("active")){
                otherLinks.classList.remove("active");  
            }
        })
        tabLinks.classList.add("active");
        show_product_content(e);
    })
})

function show_product_content(e){
    const tab_content = document.querySelector(".tab_content");
    console.log(e.target.getAttribute("data-content"));
    const data_product_content = e.target.getAttribute("data-content");

    if(data_product_content === "data-description"){
       console.log(tab_content)
    }else if(data_product_content === "data-details"){
        tab_content.innerHTML = `
          <table class="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </table>
        `
    }else if(data_product_content === "data-revew"){
        tab_content.innerHTML = `
              <section class="py-5">
        <div class="container">
            <h2 class="text-start mb-5">Customer Reviews </h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col">
                    <div class="card h-100 review-card">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">John Doe</h5>
                            <h6 class="card-subtitle mb-2 text-muted">★★★★★</h6>
                            <p class="card-text">"This product exceeded my expectations. The quality is outstanding and the delivery was incredibly fast!"</p>
                            <p class="mt-auto text-muted"><small>Reviewed on August 29, 2025</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `
    }
}
