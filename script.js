// array random number
const arrayRandomNum = [];

// generation 5 random number
for (let i = 0; i < 5; i++) {
    // call function
    randomNum = randomNumbMinMax(1, 100);
    // console.log(randomNum);

    //push randomNum nell'array
    arrayRandomNum.push(randomNum);

}

// selection element
const containerRandomNumber = document.querySelector(".number");

// show on screen
containerRandomNumber.innerHTML = arrayRandomNum;













// Functions

// Random number between min and max (both included) 
function randomNumbMinMax (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}














//general instructions

//generation 5 random number OK
// creazione di un array con quei 5 numeri OK
// mostrare in display array random OK