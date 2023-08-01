var heightFeetInput = document.getElementById('fname');
var lNameInput = document.getElementById('lname');
var genderInput = document.getElementById('gender');
var submitInput = document.getElementById('');

async function handleSubmit(event){
	event.preventDefault();

	var heightFeetInput = document.getElementById('fname').value;
	var lNameInput = document.getElementById('lname').value;
	var genderInput = document.getElementById('gender').value;

}



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
