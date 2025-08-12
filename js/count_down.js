let set_btn = document.querySelector("#set_btn");
let offerTime = document.querySelector("#offerTime");
let dayNumber = document.querySelector(".dayNumber");
let H_Number = document.querySelector(".H_Number");
let Min_Number = document.querySelector(".M_Number");
let Sec_Number = document.querySelector(".S_Number");

function updateDateTime(){
    // let cd_value = current_date.value ;
    let c_offer_value = offerTime.value ;
    let offerDate = c_offer_value;
    let t = new Date();
    let myd = new Date(`${c_offer_value}`)
    let dd = t.getDate();
    let mm = t.getMonth() + 1;
    let yy = t.getFullYear();
    let chusen = new Date(offerDate);
    let totaldeff = myd - t;
    // we comverted milisec to sec
    let sec = Math.floor((totaldeff / 1000)); //total secend
    // convert sec to minit 60sec = 1min becous we
    // devite 60 with total min
    let min = Math.floor(sec / 60);
    let hour = Math.floor(min / 60);
    // 24 hour = 1 day
    let day = Math.floor(hour / 24)
    let hours = hour % 24;
    let minit = min % 60;
    let secend = sec % 60;
    // console.log(`toal days:${day} | total hours: ${hour} | total min: ${min} | total sec:${sec}`);
    // console.log(chusen)
    dayNumber.innerText = day;
    H_Number.innerText = String(hours).padStart(2,'0');
    Min_Number.innerText = String(minit).padStart(2,'0');
    Sec_Number.innerText = String(secend).padStart(2,'0');
}

offerTime.addEventListener("input",updateDateTime)

setInterval(updateDateTime ,1000)