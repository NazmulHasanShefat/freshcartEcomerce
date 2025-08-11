document.body.addEventListener("click", (event) => {
    const targetId = event.target.getAttribute("data-bs-toggler-custom");
    const targetId2 = event.target.getAttribute("data-target-sub-item");

    if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.toggle("open-mobilesidenav");
        }
    }

     if (targetId2) {
        const targetElement2 = document.getElementById(targetId2);
        if (targetElement2) {
            targetElement2.classList.toggle("activeHeight");
            if(targetElement2.classList.contains("activeHeight")){
                 targetElement2.style.maxHeight = targetElement2.scrollHeight + "px";
            }else{
                targetElement2.style.maxHeight = "0";
            }
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