// Write a script that prints a square

// The first argument is the size of the square
// If the first argument can’t be converted to an integer, print “Missing size”
// You must use the character X to print the square
// You must use console.log(...) to print all output
// You are not allowed to use var
// You must use a loop (while, for, etc.)

const size = parseInt(process.argv[2]);

if (isNaN(size)) {console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        let line = "";
        for (let j = 0; j < size; j++) {
            line += "X";
        }
        console.log(line);
    }
}