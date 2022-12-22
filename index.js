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
    Promise((resolve) => {
        if (studentDistracted) {
            reject (new Error('Coding stopped - Student is distracted'));
        }
        return 'We are coding!';
    })


practiceCoding
    .then((result) => console.log(result))
    .catch((err) => console.error('Promise rejected:', 'Error: ' + err));