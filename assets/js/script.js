var zipcodeInput = document.getElementById('age');
var itemInput = document.getElementById('item');


function handleSubmit(event) {
    event.preventDefault();
    var zipcode = zipcodeInput.value;
    var item = itemInput.value;
}

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


// WE STILL NEED TO FIND AND ADD OUR API KEYS, AS WELL AS A FUNCTION TO MAKE SURE THAT THE ZIPCODE ISNT BLANK ALSO LINK TO LOCAL STORAGE

var url = 'https://fitness-calculator.p.rapidapi.com/burnedcalorie?activityid=bi_1&activitymin=25&weight=75';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b717f999dmshcf3f7738a0d374ep188399jsn58bf32e76f17',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

try {
	var response = await fetch(url, options);
	var result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// second api as comments

// const url = 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=%3CREQUIRED%3E&nutrition-type=cooking';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '02c1bf1c50msha479b0dca5111dbp133b1djsn8872783a0a2e',
// 		'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }