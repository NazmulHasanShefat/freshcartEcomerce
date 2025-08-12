let set_btn = document.querySelector("#set_btn");
let offerTime = document.querySelector("#offerTime");

offerTime.addEventListener("input",()=>{
    // let cd_value = current_date.value ;
    let c_offer_value = offerTime.value ;
    if(c_offer_value){
        let offerDate = c_offer_value;
        let t = new Date();
        let dd = t.getDate();
        let mm = t.getMonth() + 1;
        let yy = t.getFullYear();
        let chusen = new Date(offerDate);
        let totaldeff = chusen - t;
        // we comverted milisec to sec
        let sec = Math.floor(totaldeff / 1000);
        // convert sec to minit 60sec = 1min becous we
        // devite 60 with total min
        let min = Math.floor(sec / 60);
        let hour = Math.floor(min / 60);
        // 24 hour = 1 day
        let day = Math.floor(hour / 24)
        console.log(day);
    }else{
        alert("please enter date")
    }
})