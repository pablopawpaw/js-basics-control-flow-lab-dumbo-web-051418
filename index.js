// Write your code in this file!
function scuberGreetingForFeet(feetDistance) {
  if(feetDistance > 2500) {
    return `No can do.`;
  } else if(feetDistance > 2000) {
    return `I will gladly take your thirty bucks.`;
  } else if(feetDistance <= 400) {
    return `This one is on me!`;
  }
};

function ternaryCheckCity(city) {
  let result;
  city === `NYC` ? result = `Ok, sounds good.` : result = `No go.`;
  return result;
};

function switchOnCharmFromTip(word) {
  let result;
  switch(word) {
    case `generous`:
      result = `Thank you so much.`
      break;
    case `not as generous`:
      result = `Thank you.`
      break;
    default:
      result = `Bye.`;
  };
  return result
};
