// let navtoggler = document.querySelector("#nav-toggler");
// let top_last_navigation = document.querySelector(".top_last_navigation");
// navtoggler.addEventListener("click",()=>{
//     top_last_navigation.classList.toggle("open-mobilesidenav");
// })
// document.querySelector(".m_close_btn").addEventListener("click",()=>{
//     top_last_navigation.classList.remove("open-mobilesidenav");
// })
document.body.addEventListener("click", (event) => {
    const targetId = event.target.getAttribute("data-bs-toggler-custom");
    const targetId2 = event.target.getAttribute("data-target-sub-item");
    
    if(targetId2){
        const targetElement2 = document.getElementById(targetId2);
        if(targetElement2){
            // console.log(targetElement2.scrollHeight);
        }
    }

    if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.toggle("open-mobilesidenav");
        }
    }
})


document.body.addEventListener("click", (e) => {
    const targetId_close = e.target.getAttribute("data-toggle-closeer");
    if (targetId_close) {
        const targetElement_close = document.getElementById(targetId_close);
        if (targetElement_close) {
            targetElement_close.classList.remove("open-mobilesidenav")
        }
    }
})

// with animation 
// let myli = document.querySelectorAll("ul");

// myli.forEach(allList => {
//     allList.addEventListener("click", (e) => {
//         const targetId = e.target.getAttribute("data-target-sub-item");
//         if (targetId) {
//             const targetElement = document.getElementById(targetId);
//             if (targetElement) {
//                 console.log(targetElement.scrollHeight);
//             }
//         }
//     })
// });
