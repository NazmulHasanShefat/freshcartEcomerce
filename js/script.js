let navtoggler = document.querySelector("#nav-toggler");
let top_last_navigation = document.querySelector(".top_last_navigation");
navtoggler.addEventListener("click",()=>{
    top_last_navigation.classList.toggle("open-mobilesidenav");
})
document.querySelector(".m_close_btn").addEventListener("click",()=>{
    top_last_navigation.classList.remove("open-mobilesidenav");
})