// generation 5 random number
for (let i = 0; i < 5; i++) {
    // call function
    const randomNum = randomNumbMinMax(1, 100);
    // console.log(randomNum);
}







// Functions

// Random number between min and max (both included) 
function randomNumbMinMax (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}














//general instructions

//generation 5 random number
// mostrare questi numeri in console