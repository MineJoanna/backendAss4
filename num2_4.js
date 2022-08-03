let number = 2342;
let myArr = String(number).split(" ").map((number) => {
	return Number(number)
})
console.log(myArr);


const num = 2342;
const numsArr = Array.from(String(num), Number);
console.log(numsArr);