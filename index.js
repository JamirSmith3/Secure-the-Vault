//STEPS TO COMPLETE
//1. Define the intro string
//2. Calculate each number(s) in the combination using diffrent arithmetic operators
//3. Construct the full message with the combination
//4. Display the message in a alert box

//STEP 1: making a Vairbale for the Message that the user will see
const Message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "


//STEP 2
const FirstNum = 15 - 5;  // Subtracting 15 & 5 equals to 10
const SeconNum = 8 * 5;   // Multiplying 8 & 5 equals to 40
const ThirdNum = 72 / 2;  // Dividing 78 & 2 equals to 39


//STEP 3: Putting it all together the message and numbers
const fullMessage = Message + FirstNum + " - " + SeconNum + " - " + ThirdNum;

//STEP 4: Displaying the message the alert box
alert(fullMessage);