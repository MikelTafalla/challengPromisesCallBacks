const userInput = process.argv[2];
console.log('Current user activity:', userInput);

if (!userInput) {
    console.error(
        '\nPlease enter your current activity\nUsage:`node index.js <activity>`'
    );
    process.exit();
}

const studentDistracted = userInput !== 'coding';
// Fix bug in code below
const practiceCoding = () => 
    new Promise((resolve, reject) => { //BUG 2 Missing 'new' to define Promise and missing 'reject' argument
        if (studentDistracted) {
            reject (new Error('Coding stopped - Student is distracted'));
        }
        resolve ('We are coding!'); //BUG 3 change return for resolve
    })


practiceCoding() //BUG 1 Missing parenthesis so we know it is a function
    .then((result) => console.log(result))
    .catch((err) => console.error('Promise rejected:', 'Error: ' + err));