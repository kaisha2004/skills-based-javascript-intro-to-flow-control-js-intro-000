function basicTeenager(age) {
  if (13 <= age && age <= 19) {
    return ('You are a teenager!')

}
console.log(basicTeenager(16));

function teenager(age) {
  if (13 <= age <= 19) {
    return ('You are a teenager!')}
  else {'You are not a teenager'}
}

function ageChecker(age) {
  if (13 <= age <= 19) {
    return ('You are a teenager!')}
  else if (age <= 12) {
    return ('You are a kid')}
  else {"You are a grownup"}

}

function ternaryTeenager(age) {
  return conditionToTest ?
  "You are a teenager":"You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case "13":
      console.log("You are a teenager")
      break;
    case "14":
      console.log("You are a teenager")
      break;
    case "15"
      console.log("You are a teenager")
      break;
    case "16"
      console.log("You are a teenager")
      break;
    case "17"
      console.log("You are a teenager")
      break;
    case "18"
      console.log("You are a teenager")
      break;
    case "19"
    console.log("You are a teenager")
    break;
    default:
    return "You are not a teenager"
  }
}
