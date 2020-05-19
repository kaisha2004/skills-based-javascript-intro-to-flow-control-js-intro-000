function basicTeenager(age) {
  if (13 <= age && age <= 19) {
    return ("You are a teenager!");
}
}
basicTeenager(15)

function teenager(age) {
  if (13 <= age && age <= 19) {
    return ('You are a teenager!');}
  else {return ('You are not a teenager!');}
}
teenager(25)

function ageChecker(age) {
  if (13 <= age && age <= 19) {
    return ('You are a teenager!');}
  else if (age <= 12) {
    return ('You are a kid');}
  else {return("You are a grownup");}

}

ageChecker(25)

function ternaryTeenager(age) {
  return (13 <= age && age <= 19)?
  "You are a teenager":"You are not a teenager"
}
ternaryTeenager(14)

function switchAge(age) {
  switch(age) {
    case 13:
      console.log("You are a teenager")
      break;
    case 14:
      console.log("You are a teenager")
      break;
    case 15:
      console.log("You are a teenager")
      break;
    case 16:
      console.log("You are a teenager")
      break;
    case 17:
      console.log("You are a teenager")
      break;
    case 18:
      console.log("You are a teenager")
      break;
    case 19:
    console.log("You are a teenager")
    break;
    default:
    return "You are not a teenager"
  }
}
switchAge(25)
