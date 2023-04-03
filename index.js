function scuberGreetingForFeet(num){
  if(num <= 400){
  return 'This one is on me!';
  }else if(num <= 2000){
    return 'That will be twenty bucks.';
  }else if(num <= 2500){
    return 'I will gladly take your thirty bucks.';  
    }else return 'No can do.';
  // Write your code here!
}

function ternaryCheckCity(cityName){
  if(cityName=='NYC')return 'Ok, sounds good.'
  else return 'No go.';
  // Write your code here!
}

function switchOnCharmFromTip(tips){
  if(tips=='generous')return "Thank you so much.";
  else if(tips=='not as generous')return 'Thank you.';
  else return 'Bye.';
  // Write your code here!
}