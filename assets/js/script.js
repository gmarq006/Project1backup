var heightFeetInput = document.getElementById('fname');
var lNameInput = document.getElementById('lname');
var genderInput = document.getElementById('gender');
var submitInput = document.getElementById('');

function handleHeightInput(){
	var heightFeet = heightFeetInput.value
	console.log("height (feet): " + heightFeet);
}

function handleLastNameInput(){
	var lastName = lNameInput.value
	console.log("Last Name: " + lastName);
}

function handleGenderInput(){
	var gender = genderInput.value
	console.log("Gender: " + gender);
}

heightFeetInput.addEventListener('input', handleHeightInput);
        lNameInput.addEventListener('input', handleLastNameInput);
        genderInput.addEventListener('input', handleGenderInput);

var url = 'https://exerciseapi3.p.rapidapi.com/exercise/name/push%20up';
var option1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '13c980233cmsh892799e9e812b94p101186jsn0eaeebfc61b9',
		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
	}
};

try {
	var response1 = await fetch(url1, options1);
	var result1 = await response1.text();
	console.log(result1);
} catch (error) {
	console.error(error);
}

var url = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=19.2';
var options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '13c980233cmsh892799e9e812b94p101186jsn0eaeebfc61b9',
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

var form = document.getElementById('myForm');

form.addEventListener("submit",handleSubmit);
