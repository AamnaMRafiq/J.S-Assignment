//Day 1 chapter 1-9 date 6-4-23
//alert("Thanks for your input")
//var username="Aamna";
//username="Rafiq"
//var nationality;
//nationality="u.s";
//var floogle="mark";
//var name="mark";
//var lessonauthor= Mark;
//var x="Mark"
//var weight=100;
//weight+25;
//var originalnum=27;
//var newnum=originalnum+5;
//var num=23;
//var Tobeadded=7;
//var newnum= num + Tobeadded;
//var realnum=22;
//realnum=realnum+10
//var popularNumber = 4; //But you can also write this. 
//var popularNumber = 2 + 2;// You can also write: 
//alert(2 + 2);
//var popularNumber = 12 - 24; //This one assigns the product of 3 times 12, 36, to the variable. 
//var popularNumber = 3 * 12;
//var num = 10;  
//var popularNumber = num + 200; //You can also use nothing but variables. 
//var num = 10;  
//var anotherNum = 1; 
//var popularNumber = num + anotherNum; 
//var num = 1; 2 var newNum = ++num; 
//var num = 1; 2 var newNum = num--;// num is decremented to 0, and newNum gets the original value of num, 1. But if you put the minuses before the variable, newNum is assigned the decremented, not the original, value. Both num and newNum wind up with a value of 0. 
//var num = 1;
//var newNum = --num; 
//var totalCost = 1 + 3 * 4; 
//var totalCost = (1 + 3) * 4; //Here's another example. 
//var resultOfComputation = (2 * 4) * 4 + 2; 
//alert("Thanks, " + userName + "!"); 
//var message = "Thanks, "; 
//var banger = "!"; 
//alert(message + userName + banger); 
//var message = "Thanks, "; 
//var userName = "Susan"; 
//var banger = "!"; 
//var customMess = message + userName + banger; 
//alert(customMess);
//alert("2" + "2");
//alert("2 plus 2 equals " + 2 + 2);
//var spec = prompt("Your species?", "human"); 
//var question = "Your species?"; 
//var defaultAnswer = "human";
//var spec = prompt(question, defaultAnswer); 
//var numberOfCats = prompt("How many cats?"); 
//var tooManyCats = numberOfCats + 1;
// Task 1
//Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".
// var zakat_percentage = 0.025
// var user_asset= + prompt ("Asset value")
// var result = zakat_percentage*user_asset
//alert("Your Zakat="+result)
// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.
// var fitrahvalue;
//  var Numoffamilymember = prompt("Enter your family member")
//  var fitrahmethod = prompt("Choose a fitrah method wheat, kishmis, jaon")
//   if (fitrahmethod == "wheat") {
//      var wheat = 300;
//      fitrahvalue = wheat * Numoffamilymember
//       alert("Your fitrahvalue=" + fitrahvalue)
//   }
//   else if (fitrahmethod == "kishmish") {
//       var kishmish = 2500;
//       fitrahvalue = kishmish * Numoffamilymember
//       alert("Your fitrahvalue=" + fitrahvalue)
//   }
//   else if (fitrahmethod == "jaon") {
//       var jaon = 450;
//       fitrahvalue = jaon * Numoffamilymember
//       alert("Your fitrahvalue=" + fitrahvalue)
//   }


// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.
//  var secretNumber = prompt("Guess a secrete number");
//  var secretNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// if (secretNumber >= "1"||secretNumber <= "10") {
//      alert("Congratulations!You guessed the secret number")
// }
// else { 
// alert("Sorry! guess again please")
//  }
// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var username = "Aamna"
// var username = prompt("Enter a name(Make your name in capitalized case)")
// console.log(username.toUpperCase())
//  alert(username.toUpperCase())

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.
 var contactNames = prompt('Enter a contact name ')
 var contactNumbers = prompt ('Enter a contact number')
 console.log(contactname + + contactNumbers)
// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.
//  var items = ['Cake', 'pepsi', 'pizza', 'dairy milk', 'Oats', 'Bun']
//  var userinput = prompt('Give the 1st position of that element Cake, pepsi,pizza,dairy milk,Oats ,Bun')
//  items.shift('userinput')
//   alert(userinput+","+ items)

// Task 7:
//Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.
// var nationality = prompt("Your Nationality Please")
// var gender = prompt("Your gender Please")
// var age = +prompt("Your age Please")
// if (nationality == 'Pakistani' || nationality == 'pakistani' || nationality == 'Indian' || nationality == 'indian' && gender == 'male' || gender == 'Male' && age >= 18) {
//      alert('You are eligible to vote')
// }
// else {
//      alert('You are not eligible to vote')
// }
// if (nationality == 'Pakistani' || nationality == 'pakistani' || nationality== 'indian' || nationality== 'India' && gender =='female'|| gender == 'Female' && age >= 18) {
//     var gender = prompt("Are you married or unmarried?")
//     if (gender == 'married') {
//         alert('you are eligible to vote')

//     }
//     else { (gender=='unmarried')
//           alert("you are not eligible to vote" )

//     }
// }
// else {

//}

// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)
// var players = ['Shadab', 'Naseem','Shaheen Afridi','Shahid afridi','Sarfraz', 'Babar azam' , 'Rizwan' , 'Hassan' ,'Wahab','hafeez' ,'Shohaib malik', 'umer gul', 'misbah' ]
// players.splice(4,3,2,"Rizwan")
//  alert(players)
