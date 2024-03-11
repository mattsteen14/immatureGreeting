const generateRandomNumber = num => {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

// Arrays stored in object.
const immatureChoices = {
    greetings: ['Hello', 'Hi', 'Oi', 'You there', 'Alright', 'Come here', 'Go away', 'Hiya', 'Oh, it\'s you again'],
    mPronouns: ['Mister', 'Master', 'King', 'Prince', 'boy', 'Sir', 'little boy', 'senor'],
    fPronouns: ['Mrs', 'Miss', 'Queen', 'Princess', 'Ms', 'girly', 'senora', 'senorita', 'little miss'],
    pronouns: ['you', 'Doctor', 'Professor', 'Captain', 'President', 'General'],
    adjectives: ['smelly', 'stinky', 'ugly', 'poo poo', 'bum', 'bum bum', 'crazy', 'stupid', 'disgusting', 'fart', 'farty', 'silly', 'sweaty', 'slippery'],
    nouns: ['head', 'monkey', 'face', 'bum', 'legs', 'idiot', 'alien', 'monster', 'sausage', 'nugget', 'pants'],
}

let neutralGreeting = [];
for (let prop in immatureChoices) {
    let optionIdx = generateRandomNumber(immatureChoices[prop].length)

    // use the object's properties to customize the message being added to immatureGreeting  
    switch (prop) {
        case 'greetings':
            neutralGreeting.push(`Need an immature greeting for your child at school pick up? How about... \n"${immatureChoices[prop][optionIdx]},`)
            break
        case 'mPronouns':
            break
        case 'fPronouns':
            break
        case 'pronouns':
            neutralGreeting.push(`${immatureChoices[prop][optionIdx]}`)
            break
        case 'adjectives':
            neutralGreeting.push(`${immatureChoices[prop][optionIdx]}`)
            break
        case 'nouns':
            neutralGreeting.push(`${immatureChoices[prop][optionIdx]}!"`)
            break
        default:
            neutralGreeting.push('There is not enough info.')
    }
}

let maleGreeting = [];
for (let prop in immatureChoices) {
    let optionIdx = generateRandomNumber(immatureChoices[prop].length)

    // use the object's properties to customize the message being added to immatureGreeting  
    switch (prop) {
        case 'greetings':
            maleGreeting.push(`Need an immature greeting for your son at school pick up? How about... \n"${immatureChoices[prop][optionIdx]},`)
            break
        case 'mPronouns':
            maleGreeting.push(`${immatureChoices[prop][optionIdx]}`)
            break
        case 'fPronouns':
            break
        case 'pronouns':
            break
        case 'adjectives':
            maleGreeting.push(`${immatureChoices[prop][optionIdx]}`)
            break
        case 'nouns':
            maleGreeting.push(`${immatureChoices[prop][optionIdx]}!"`)
            break
        default:
            maleGreeting.push('There is not enough info.')
    }
}

let femaleGreeting = [];
for (let prop in immatureChoices) {
    let optionIdx = generateRandomNumber(immatureChoices[prop].length)

    // use the object's properties to customize the message being added to immatureGreeting  
    switch (prop) {
        case 'greetings':
            femaleGreeting.push(`Need an immature greeting for your daughter at school pick up? How about... \n"${immatureChoices[prop][optionIdx]},`)
            break
        case 'mPronouns':
            break
        case 'fPronouns':
            femaleGreeting.push(`${immatureChoices[prop][optionIdx]}`)
            break
        case 'pronouns':
            break
        case 'adjectives':
            femaleGreeting.push(`${immatureChoices[prop][optionIdx]}`)
            break
        case 'nouns':
            femaleGreeting.push(`${immatureChoices[prop][optionIdx]}!"`)
            break
        default:
            femaleGreeting.push('There is not enough info.')
    }
}

const immatureGreeting = greeting => {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = greeting.join(' ')
    console.log(formatted)
}

immatureGreeting(neutralGreeting);
immatureGreeting(maleGreeting);
immatureGreeting(femaleGreeting);