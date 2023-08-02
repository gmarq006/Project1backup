var bmiResultsel = document.getElementById("bmiResults");
var myGoalInputel = document.getElementById("myGoalinput");
// the variables to be called when pulled from user input from HTML.
document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission


    // Get the values from the input fields
    const feet = document.getElementById("heightFeet").value;

    const inches = document.getElementById("heightInches").value;

    const height = parseInt(feet) * 12 + parseInt(inches);
    console.log(height);
    console.log(inches);
    console.log(feet);
    const weight = document.getElementById("weight").value;
    const gender = document.getElementById("gender").value;
// if statements within the function the user input is with valid height and weight to calculate the bmi.
    if (isNaN(height)) {
      bmiResultsel.innerHTML = "Provide a valid height";
      alert("Please enter a valid height")
    } else if (isNaN(weight)) {
      bmiResultsel.innerHTML = "Provide a valid weight";
      alert("Please enter a valid weight")
    // if both the input is valid we will calculate the BMI value
    } else {
      
      let bmi =  weight / (height * height) * 703

      console.log(height)
      console.log(bmi)
      // rounding up bmi to the nearest decimal places(2)
      if (bmi < 18.6) {
        bmiResultsel.innerHTML = "Under Weight " + bmi;
      } else if (bmi > 18.6) {
        bmiResultsel.innerHTML === "Normal Weight " + bmi;
      }else if (bmi >= 18.6 && bmi <= 24.9) {
      bmiResultsel.innerHTML = "Over Weight " + bmi
      }
    }  
    

    // we should add an event listener to the buttons
    // Display the collected data
    alert(
      "Height: " + height + " in\nWeight: " + weight + " lbs\nGender: " + gender
    );
    var storeBmi = JSON.parse(await bmiRequest(weight, height * 12));
    console.log(storeBmi);
    bmiResultsel.innerHTML = `<p> ${storeBmi.bmi} </p>`;
    exerciseRequest();
    localStorage.setItem("pastBmi", JSON.stringify(storeBmi));
  });


  async function displayGoal() {
    var storemyGoalInput = await goalRequest();
    console.log(storemyGoalInput);
    myGoalInputel.innerHTML += `<p> ${storemyGoalInput.goalRequest} </p>`;
    localStorage.setItem("goal", JSON.stringify(storemyGoalInput));
  }
// api request for bmi
    var bmiRequest = async function (weight, height) {
    const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${weight}&height=${height}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3c8416fb24msh5c310a41db76d13p16c570jsnc83bfc85258f",
        "X-RapidAPI-Host": "body-mass-index-bmi-calculator.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
};
// api request for workout planner.
var goalRequest = async function () {
  const url =
    "https://workout-planner1.p.rapidapi.com/customized?time=30&equipment=dumbbells&muscle=biceps&fitness_level=beginner&fitness_goals=strength";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "02c1bf1c50msha479b0dca5111dbp133b1djsn8872783a0a2e",
      "X-RapidAPI-Host": "workout-planner1.p.rapidapi.com",
    },
  };
  // Workout Planner API Key
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

displayGoal();

