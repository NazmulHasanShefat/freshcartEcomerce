// const params = new URLSearchParams(window.location.search);
// const params_value = params.get("name");
// document.querySelector("#product_title").innerHTML = params_value;

// js toast
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

const cart_product = JSON.parse(localStorage.getItem("cart")) || [];
const url_params = new URLSearchParams(window.location.search)
const url_product = url_params.get("name");
console.log(url_product);
const my_product = cart_product.find(item => item.p_title === url_product);

if(my_product){
    
}
