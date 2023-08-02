var bmiResultsel = document.getElementById("bmiResults")

document.getElementById("myForm").addEventListener("submit", async function (event) {
	event.preventDefault(); // Prevent form submission

	// Get the values from the input fields
	const height = document.getElementById("heightFeet").value;
	const weight = document.getElementById("weight").value;
	const gender = document.getElementById("gender").value;

	// Display the collected data
	alert("Height: " + height + " cm\nWeight: " + weight + " kg\nGender: " + gender);
	var storeBmi = JSON.parse(await bmiRequest(weight, height * 12))
	console.log(storeBmi)
	bmiResultsel.innerHTML = `<p> ${storeBmi.bmi} </p>`
	exerciseRequest()
	localStorage.setItem("pastBmi", JSON.stringify(storeBmi))
});



var bmiRequest = async function (weight, height) {
	const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${weight}&height=${height}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3c8416fb24msh5c310a41db76d13p16c570jsnc83bfc85258f',
			'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
		return result
	} catch (error) {
		console.error(error);
	}

}



var exerciseRequest = async function () {


	const url = 'https://workout-planner1.p.rapidapi.com/customized?time=30&equipment=dumbbells&muscle=biceps&fitness_level=beginner&fitness_goals=strength';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3c8416fb24msh5c310a41db76d13p16c570jsnc83bfc85258f',
			'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}

}

exerciseRequest()





