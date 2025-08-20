
const numbers = [175, 550, 25, 32, 59, 50];

console.log(numbers.reduce(myFunc));

function myFunc(accumulator, nextElement) {
  return accumulator + nextElement;
}
// array.reduce(callback_function) চায় এই ফাংশন এ কিছু paramiter thake 
// এই দুই paramiter accumulator and nextElement প্রত্যেকটা itaretion এ একটি কে দিয়ে আর একটিকে যেকোন
// কিছু করানো যায় । 
// function er modde zodi return করা থাকে accumulator + nextElement তাহলে array এর প্রথন ইন্ডেক্স secend
// index er মধ্য যোগ হবে এবং যে যোগফল আসবে সেটা দিয়ে পরের index কে যোগ করা হবে
// যেমন প্রথম itaration e 
// 175 + 550 = 750
// secend itaretion e
// 750 + 25 = 775
// next itaretion
// 775 + 32 = 807
// এভাবে চলতেই থাকবে যতক্ষন না array শেষ হবে । ................
console.log(29.97 + 44.97);


// get and send params 

// step 1 
// Example: Sending parameters
const param1 = "value1";
const param2 = "anotherValue";
const url = `https://example.com/page.html?key1=${param1}&key2=${param2}`;

// You can then navigate to this URL
window.location.href = url;


// step 2
// Example: Using URLSearchParams to construct a URL
const url = new URL("https://example.com/page.html");
url.searchParams.append("key1", "value1");
url.searchParams.append("key2", "anotherValue");

// You can then navigate to this URL
window.location.href = url.toString();



// step 3 
// Example: Receiving parameters
const urlParams = new URLSearchParams(window.location.search);

// Get a specific parameter's value
const param1Value = urlParams.get("key1");
console.log(`Value of key1: ${param1Value}`);

// Iterate over all parameters
for (const [key, value] of urlParams.entries()) {
    console.log(`${key}: ${value}`);
}