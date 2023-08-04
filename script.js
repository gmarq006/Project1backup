var bmiResultsel = document.getElementById("bmiResults")
var myGoalInputel = document.getElementById("myGoalinput")
var workoutBtn = document.querySelector(".workoutBtn")
var myBMIinputEl = document.getElementById("myBMIinput")
workoutBtn.addEventListener("click", async function (event) {
	displayGoal()
})

document.getElementById("myForm").addEventListener("submit", async function (event) {
	event.preventDefault(); // Prevent form submission

	// Get the values from the input fields
	const height = document.getElementById("heightFeet").value;
	const weight = document.getElementById("weight").value;
	const gender = document.getElementById("gender").value;

	// Display the collected data
	alert("Height: " + height + " in\nWeight: " + weight + " lbs\nGender: " + gender);
	var storeBmi = await bmiRequest(weight, height * 12)
	console.log(storeBmi)

	var bmi = storeBmi.bmi

	if (bmi < 17) {
		workoutPlan = 'bicepts';
	} else if (bmi >= 17.1 && bmi <= 25) {
		workoutPlan = 'tricepts'
	}
	else {
		workoutPlan = 'other'
	}

	bmiResultsel.innerHTML = `<p class= "is-size-1 has-text-link has-text-centered"> ${storeBmi.bmi} ${workoutPlan}</p>`
	localStorage.setItem("pastBmi", JSON.stringify(storeBmi))
});

async function displayGoal() {
	var storemyGoalInput = await goalRequest()
	console.log(storemyGoalInput)

	myGoalInputel.innerHTML += `<p class= "is-size-1 has-text-link has-text-centered"> ${storemyGoalInput.goalRequest} </p>`




	localStorage.setItem("goal", JSON.stringify(storemyGoalInput))
}



var bmiRequest = async function (weight, height) {
	const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${weight}&height=${height}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7c1de5a4afmsh77fd29a73019c30p17d739jsn8ec1baf1a4bf',
			'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		return result
	} catch (error) {
		console.error(error);
	}

}


async function displayBMI(workout) {
	var storePlanner = JSON.parse(await bmiRequest(workout))
	console.log(storePlanner)
	bmiResultsel.innerHTML = `<p> ${storePlanner.planner} </p>`
	bmiRequest()
	localStorage.setItem("pastBmi", JSON.stringify(storePlanner))
}



var goalRequest = async function () {

	var bmiNumber = document.getElementById("bmiNumber")

	const url = 'https://workout-planner1.p.rapidapi.com/customized?time=30&equipment=dumbbells&muscle=' + bmiNumber.value + '&fitness_level=beginner&fitness_goals=strength';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '5b717f999dmshcf3f7738a0d374ep188399jsn58bf32e76f17',
			'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
		}
	};



	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}

}



let bmiResults;



bmiRequest()
