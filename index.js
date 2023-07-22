function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
console.log(scuberGreetingForFeet(300));   
console.log(scuberGreetingForFeet(1500));  
console.log(scuberGreetingForFeet(2300));
console.log(scuberGreetingForFeet(2600)); 


function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
console.log(ternaryCheckCity("NYC"));  
console.log(ternaryCheckCity("LA"));    
console.log(ternaryCheckCity("London")); 



function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
console.log(switchOnCharmFromTip("generous"));         // Output: "Thank you so much."
console.log(switchOnCharmFromTip("not as generous"));  // Output: "Thank you."
console.log(switchOnCharmFromTip("average"));          // Output: "Bye."
console.log(switchOnCharmFromTip("good"));             // Output: "Bye."
