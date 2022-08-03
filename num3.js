let cities = [101, 500, 200000, 52323, 890];
for (let i = 0; i < cities.length; i++) {
	if (cities[i] > 10000)
	console.log(cities[i]);
}


const region = cities.filter((city) => {
	return city > 10000;
});
console.log(region)


//This returns as a boolean
const reg = cities.filter((city) => {
	console.log(city > 10000)
});