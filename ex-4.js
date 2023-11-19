// Exercise #4: E-commerce logic bug
// Close Quokka before do this!

let numberOfSoldProduct = 12000;
let numberOfProductInStock = undefined;

console.log((numberOfSoldProduct / numberOfProductInStock) * 100);

/* 
ใน console จะแสดง NaN ออกมา
เนื่องจาก numberOfProductInStock มีค่าเป็น undefined ซึ่งไม่สามารถถูกดำเนินการทางคณิตศาตร์ได้
ดังนั้นเมื่อใช้ตัวดำเนินการทางคณิตศาสตร์จึงขึ้น NaN ซึ่งหมายถึง 
Not a Number 
*/
