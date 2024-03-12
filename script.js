const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
};

// Arrays stored in object.
const immatureChoices = {
    greetings: ['Hello', 'Hi', 'Oi', 'You there', 'Alright', 'Come here', 'Go away', 'Hiya', 'Oh, it\'s you again', 'Hey', 'How do', 'How do you do', 'Bonjour', 'Hola', 'Ciao'],
    mPronouns: ['Mister', 'Master', 'King', 'Prince', 'boy', 'Sir', 'little boy', 'Senor', 'Monsieur'],
    fPronouns: ['Mrs', 'Miss', 'Queen', 'Princess', 'Ms', 'girly', 'Senora', 'Senorita', 'little miss', 'Mademoiselle'],
    pronouns: ['you', 'Doctor', 'Professor', 'Captain', 'President', 'General', 'Director', 'Officer', 'Admiral', 'Detective'],
    adjectives: ['smelly', 'stinky', 'ugly', 'poo poo', 'bum', 'bum bum', 'crazy', 'stupid', 'disgusting', 'fart', 'farty', 'silly', 'sweaty', 'slippery'],
    nouns: ['head', 'monkey', 'face', 'bum', 'legs', 'idiot', 'alien', 'monster', 'sausage', 'nugget', 'pants'],
};

//Greeting #1.
let neutralGreeting = [];
for (let prop in immatureChoices) {
    let randChoice = generateRandomNumber(immatureChoices[prop].length)
    // use the object's properties to customize the message being added to immatureGreeting  
    switch (prop) {
        case 'greetings':
            neutralGreeting.push(`Need an immature greeting for your child at school pick up? How about... \n"${immatureChoices[prop][randChoice]},`)
            break
        case 'mPronouns':
//This is how I discovered I could skip a case.
            break
        case 'fPronouns':
            break
        case 'pronouns':
            neutralGreeting.push(`${immatureChoices[prop][randChoice]}`)
            break
        case 'adjectives':
            neutralGreeting.push(`${immatureChoices[prop][randChoice]}`)
            break
        case 'nouns':
            neutralGreeting.push(`${immatureChoices[prop][randChoice]}!" \n`)
            break
        default:
            neutralGreeting.push(`${immatureChoices[prop][randChoice]}`)
    }
};

// Greeting #2.
let maleGreeting = [];
for (let prop in immatureChoices) {
    let randChoice = generateRandomNumber(immatureChoices[prop].length)
    switch (prop) {
        case 'greetings':
            maleGreeting.push(`Need an immature greeting for your son at school pick up? How about... \n"${immatureChoices[prop][randChoice]},`)
            break
        case 'mPronouns':
            maleGreeting.push(`${immatureChoices[prop][randChoice]}`)
            break
        case 'fPronouns':
            break
        case 'pronouns':
            break
        case 'adjectives':
            maleGreeting.push(`${immatureChoices[prop][randChoice]}`)
            break
        case 'nouns':
            maleGreeting.push(`${immatureChoices[prop][randChoice]}!" \n`)
            break
        default:
            maleGreeting.push(`${immatureChoices[prop][randChoice]}`)
    }
};

// Greeting #3.
let femaleGreeting = [];
for (let prop in immatureChoices) {
    let randChoice = generateRandomNumber(immatureChoices[prop].length)
    switch (prop) {
        case 'greetings':
            femaleGreeting.push(`Need an immature greeting for your daughter at school pick up? How about... \n"${immatureChoices[prop][randChoice]},`)
            break
        case 'mPronouns':
            break
        case 'fPronouns':
            femaleGreeting.push(`${immatureChoices[prop][randChoice]}`)
            break
        case 'pronouns':
            break
        case 'adjectives':
            femaleGreeting.push(`${immatureChoices[prop][randChoice]}`)
            break
        case 'nouns':
            femaleGreeting.push(`${immatureChoices[prop][randChoice]}!" \n`)
            break
        default:
            femaleGreeting.push(`${immatureChoices[prop][randChoice]}`)
    }
};

const immatureGreeting = greeting => {
    const formatGreeting = greeting.join(' ')
    console.log(formatGreeting)
};

immatureGreeting(neutralGreeting);
immatureGreeting(maleGreeting);
immatureGreeting(femaleGreeting);