var readLineSync=require("readline-sync");
var chalk=require("chalk");
var log=console.log;
var error=chalk.bgRed.bold;
var leap=chalk.bgGreen.bold;
var nonLeap=chalk.bgCyan.bold;
var regex=/[0-9]{4}/g

var answer=readLineSync.question("Please enter your name: ");
var birthYear=readLineSync.question("Hi "+answer+"! Want to know if you were born in a leap year? Please enter your birth year in yyyy format: ");

if (regex.test(birthYear)===true){
  if (birthYear%4===0){
  if (birthYear%100!==0 || birthYear%400===0){
    log(leap("Hurray!! You were born in a leap year."));
    }
  }else {
    log(nonLeap("Oh No..You were not born in a leap year."));
  }
}else {
  console.log(error("Error! Invalid year format."));
}

