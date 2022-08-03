let cgpaPoint = 3.98;
let classOfDegree;
if (cgpaPoint > 4.49 && cgpaPoint <= 5.00) {
	classOfDegree = '1st class';
} else if (cgpaPoint > 3.49 && cgpaPoint < 4.50) {
	classOfDegree = '2nd class upper';
} else if (cgpaPoint > 2.39 && cgpaPoint < 3.50) {
	classOfDegree = '2nd class lower';
} else if (cgpaPoint > 1.49 && cgpaPoint < 2.40) {
	classOfDegree = '3rd class';
} else if (cgpaPoint >= 1.00 && cgpaPoint < 1.50) {
	classOfDegree = 'pass';
} else {
	classOfDegree = 'fail';
}
console.log(classOfDegree);