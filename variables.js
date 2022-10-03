// variables

/* 
    Containers that store data in memory
    - declaration
        *allows memory space to be reserved 
        *declarations start with let, var, or const
        *declarations cannot start with a number or most characters other than $ or _
        *if no value is assigned its undefined
    - initialization
        *data value that is given to a variable declaration
        *assigning it a value
        *can be any value or data type
        *can be reassigned (excpet for const)
*/

let firstName;
console.log(firstName);

let lastName = "Reagan";
console.log(lastName);

let age = 21;
console.log(age);

console.log("-------------------");
console.log("Value of firstName before reassignment " + firstName);

// Reassignment 
firstName = "Mary";
console.log(`value of firstName after reassignment ${firstName}`);


//(a) (b) (c)  (d)
var address = "123 Main St, Salem, MA";
console.log(address);
//(a) - Keyword
//(b) - variable identifier
//(a) & (b) - variable declaration
//(c) - assignment operator
//(d) - value or initializer

const className = "SDB September 2022";
console.log(className);

// className = "New class"  // TypeError: const cannot be reassigned

//Below code console.logs ONLY what address would look like with .toUpperCasemethod returns when it acts on address value
console.log(`This is uppercase version of ${address.toUpperCase()}`);

//below code reassigns the value of address variable to what .toUpperCase methong returns when it acts on address value
address = address.toUpperCase();
console.log(address);

//Reassignment doesn't have to happen on original variable. what if we wanted a new variable that's a copy of the original variable but all uppercase?



let addressUC = address.toUpperCase();

console.log(addressUC);

//Coding Practices for Variables
/* 
    * be concise (ex: firstName instead of usersFirstName)
    * be specific (ex: getValue instead of i)
    * Utilize camelCase, snake_case, PascalCase, or skewer-case
    * You can also ultilize nocase or SCREAMING_CASE
*/
let fName = "Mary";
let lName = "Reagan";
let houseNumber = 3113
let street = "Sheffield pl"
let city = "Nashville"
let state = "Tennessee"
let postCode = 37067
console.log(fName, lName, houseNumber, street, city, state, postCode)
let addressStamp = (`My home address is ${houseNumber}, ${street}, ${city}, ${state}, ${postCode}`)

console.log(addressStamp)