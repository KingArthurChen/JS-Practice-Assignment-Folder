/* Values and Variables Lecture */
const country = "Isle Of Man";
const continent = "Europe";
let population = 85000;

console.log(country + " " + continent + " " + population);

/* Datatypes Lecture */
const isIsland = true;
let language;

console.log(isIsland + ", " + population + ", " + country + ", " + language);

/* Let, Const, and Var Lecture */
language = "English";

/* Basic Operators */
let halfCountryPopulation = population / 2;
let populationPlusOne = population + 1;
const FINLAND_POPULATION = 6000000;
const AVG_POPULATION_SIZE = 33000000;
let description = "The Isle Of Man is in Europe, and its 80 thousand people speak english."

console.log("Population if country was split in half: " + halfCountryPopulation);
console.log("Population of country + 1: " + populationPlusOne);
console.log("The statement whether my country's population is bigger than Finland's is: " + population > FINLAND_POPULATION);
console.log("The statement whether my country's population is larger than the average population size is: " + population > AVG_POPULATION_SIZE);

/* Strings and Template Literals */
description = "The " + country + " is in " + continent + ", and its " + population + " people speak " + language + ".";

console.log(description);

/* if/else Statements */
let populationDifference = AVG_POPULATION_SIZE - population;

if (population > AVG_POPULATION_SIZE)
{
    console.log(country + "'s population is above average");
}
else
{
    console.log(country + "'s population is " + populationDifference + " below average");
}

population = 13;

if (population > AVG_POPULATION_SIZE)
{
    console.log(country + "'s population is above average");
}
else
{
    console.log(country + "'s population is " + populationDifference + " below average");
}

population = 130000000;

if (population > AVG_POPULATION_SIZE)
{
    console.log(country + "'s population is above average");
}
else
{
    console.log(country + "'s population is " + populationDifference + " below average");
}

population = 85000;


/* Type Conversion and Coercion */
console.log('9' - '5') /* I predict the answer will be '4' */
console.log('19' - '13' + '17') /* I predict the answer will be '23' */
console.log('19' - '13' + 17) /* I predict the answer will be 23 */
console.log('123' < 57) /* I predict the answer will be False */
console.log(5 + 6 + '4' + 9 - 4 - 2) /* I predict the answer will be 30 */
