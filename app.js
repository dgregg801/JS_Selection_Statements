console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

/* Exercise 1 */
let favoriteNumber= 11;

let answer = prompt("Input a number");

if (answer<favoriteNumber) {
  console.log("too low");
}
else if (answer>favoriteNumber){
  console.log("too high");
}

else{
  console.log("Congratulations");
}

/* Exercise 2 */
let birthMonth = prompt("What is your birth month?")

switch (birthMonth) {
  case "September":
  case "October":
  case "November":
      console.log("Born in Autumn");
       break;
  case "December":
  case "January":
  case "February":
      console.log("Born in Winter");
      break;
  case "March":
  case "April":
  case "May": 
      console.log("Born in Spring");
      break;
  case "June":
  case "July":
  case "August":
        console.log("Born in Summer");
      break;
  default:   
        console.log("You weren't born");
}

  //Exercise 3
let sizeId = prompt("What size shirt would you like?")

switch (sizeId) {
    case "Small":
      console.log("S");
      break;
    case "Medium":  
      console.log("M");
      break;
    case "Large":
      console.log("L");
      break;
    case "Extra Large":
      console.log("XL");
      break;
    default:
      console.log("One Size Fits All");
    }

let colorId = prompt("What color would you like?")

switch (colorId) {
      case "Black":
        console.log("BK");
        break;
      case "Blue":
        console.log("BL");
        break;
      case "Red":
        console.log("R");
        break;
      case "Purple":
        console.log("PU");
        break;
      default:
        console.log("White");      
}

let typeId = prompt("What type of shirt would you like?");

  switch (typeId) {
      case "Tank top":
        console.log("01");
        break;
      case "T Shirt":
        console.log("02");
        break;
      case "Long Sleeve":
        console.log("03");
        break;
      case "Sweat Shirt":
        console.log("04");
      default:
        console.log("Other");      
  }


  


  










