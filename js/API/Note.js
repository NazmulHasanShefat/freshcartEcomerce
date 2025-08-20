
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
console.log(9.99 + 19.99 + 14.99);