// Write a script that prints two arguments passed to it, in the following format: “ is ”

// You must use console.log(...) to print all output
// You are not allowed to use var

if (process.argv.length < 4) {
    console.log("Insufficient argument");
} else if (process.argv[2] === undefined || process.argv[3] === undefined) {
    console.log(`${process.argv[2]}, ${process.argv[3]} is undefined`);
} else {
    console.log(process.argv[2] + " is " + process.argv[3]);
}