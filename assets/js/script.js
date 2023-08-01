var heightFeetInput = document.getElementById('fname');
var lNameInput = document.getElementById('lname');
var genderInput = document.getElementById('gender');
var submitInput = document.getElementById('');


// WE STILL NEED TO FIND AND ADD OUR API KEYS, AS WELL AS A FUNCTION TO MAKE SURE THAT THE ZIPCODE ISNT BLANK ALSO LINK TO LOCAL STORAGE

var url = 'https://exerciseapi3.p.rapidapi.com/exercise/name/push%20up';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '13c980233cmsh892799e9e812b94p101186jsn0eaeebfc61b9',
		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
	}
};

try {
	var response = await fetch(url, options);
	var result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

var url = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=19.2';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
	}
};

try {
	var response = await fetch(url, options);
	var result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

