let x; // 'x' is declared here, but its value is undefined.

fetch_request()
.then(products_data => {
    const products = products_data.products;
    product_container.innerHTML = products.map((product, index) => {
        return `
            <div class="product_wraper col-12 col-lg-3">
                </div>
        `;
    }).join("");

    x = document.querySelectorAll(".product_wraper");

    // All code that needs to use 'x' should be here,
    // or inside a function called from here.
    handleProducts(x); // <--- Call a function to handle the 'x' variable
})
.catch(error => {
    console.error('Error fetching products:', error);
});

// Define the function that uses the 'x' variable
function handleProducts(productWrappers) {
    console.log(productWrappers); // Now 'x' (passed as 'productWrappers') is defined and ready to use
    // Add other logic here, like attaching event listeners
    productWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            console.log('A product wrapper was clicked!');
        });
    });
}