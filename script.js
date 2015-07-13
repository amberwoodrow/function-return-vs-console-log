function howManyApples(numApples) {
  if (numApples === 1) {
    return("only 1 apple");
  } else {
    return('number of apples is ' + numApples);
  }
}
console.log(howManyApples(1));
console.log(howManyApples(5));
console.log(howManyApples(10));

numApples = prompt('How many apples do you have');

if (numApples === 1) {
  console.log("only 1 apple");
} else {
  console.log('number of apples is ' + numApples);
}
