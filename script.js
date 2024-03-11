const greetings = ['Hello', 'Hi', 'Oi', 'You there', 'Alright', 'Come here', 'Go away', 'Hiya'];
const mPronouns = ['Mister', 'Master', 'you', 'Doctor', 'Professor', 'Captain', 'President', 'General', 'King', 'Prince'];
const fPronouns = ['Mrs', 'Miss', 'you', 'Doctor', 'Professor', 'Captain', 'President', 'General', 'Queen', 'Princess'];
const adjectives = ['smelly', 'stinky', 'ugly', 'poo poo', 'bum', 'bum bum', 'crazy', 'stupid', 'disgusting', 'fart', 'farty', 'silly'];
const mNouns = ['head', 'man', 'boy', 'monkey', 'face', 'bum', 'legs', 'idiot', 'alien', 'monster'];
const fNouns = ['head', 'woman', 'girl', 'monkey', 'face', 'bum', 'legs', 'idiot', 'alien', 'monster'];


let randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

let greeting = "";
switch (randomNumber(greetings)) {
    case 0:
        greeting = greetings[0];
        break;
    case 1:
        greeting = greetings[1];
        break;
    case 2:
        greeting = greetings[2];
        break;
    case 3:
        greeting = greetings[3];
        break;
    case 4:
        greeting = greetings[4];
        break;
    case 5:
        greeting = greetings[5];
        break;
    case 6:
        greeting = greetings[6];
        break;
    case 7:
        greeting = greetings[7];
        break;
    default:
        greeting = greetings[0];
        break;
}

let mPronoun = "";
switch (randomNumber(mPronouns)) {
    case 0:
        mPronoun = mPronouns[0];
        break;
    case 1:
        mPronoun = mPronouns[1];
        break;
    case 2:
        mPronoun = mPronouns[2];
        break;
    case 3:
        mPronoun = mPronouns[3];
        break;
    case 4:
        mPronoun = mPronouns[4];
        break;
    case 5:
        mPronoun = mPronouns[5];
        break;
    case 6:
        mPronoun = mPronouns[6];
        break;
    case 7:
        mPronoun = mPronouns[7];
        break;
    case 8:
        mPronoun = mPronouns[8];
        break;
    case 9:
        mPronoun = mPronouns[9];
        break;
    case 10:
        mPronoun = mPronouns[10];
        break;
    default: 
        mPronoun = mPronouns[0];
        break;
}

let fPronoun = "";
switch (randomNumber(fPronouns)) {
    case 0:
        fPronoun = fPronouns[0];
        break;
    case 1:
        fPronoun = fPronouns[1];
        break;
    case 2:
        fPronoun = fPronouns[2];
        break;
    case 3:
        fPronoun = fPronouns[3];
        break;
    case 4:
        fPronoun = fPronouns[4];
        break;
    case 5:
        fPronoun = fPronouns[5];
        break;
    case 6:
        fPronoun = fPronouns[6];
        break;
    case 7:
        fPronoun = fPronouns[7];
        break;
    case 8:
        fPronoun = fPronouns[8];
        break;
    case 9:
        fPronoun = fPronouns[9];
        break;
    case 10:
        fPronoun = fPronouns[10];
        break;
    default: 
        fPronoun = fPronouns[0];
        break;
}

let adjective = "";
switch (randomNumber(adjectives)) {
    case 0:
        adjective = adjectives[0];
        break;
    case 1:
        adjective = adjectives[1];
        break;
    case 2:
        adjective = adjectives[2];
        break;
    case 3:
        adjective = adjectives[3];
        break;
    case 4:
        adjective = adjectives[4];
        break;
    case 5:
        adjective = adjectives[5];
        break;
    case 6:
        adjective = adjectives[6];
        break;
    case 7:
        adjective = adjectives[7];
        break;
    case 8:
        adjective = adjectives[8];
        break;
    case 9:
        adjective = adjectives[9];
        break;
    case 10:
        adjective = adjectives[10];
        break;
    case 11:
        adjective = adjectives[11];
        break;
    default: 
        adjective = adjectives[0];
        break;
}

let mNoun = "";
switch (randomNumber(mNouns)) {
    case 0:
        mNoun = mNouns[0];
        break;
        case 1:
        mNoun = mNouns[1];
        break;
        case 2:
        mNoun = mNouns[2];
        break;
        case 3:
        mNoun = mNouns[3];
        break;
        case 4:
        mNoun = mNouns[4];
        break;
        case 5:
        mNoun = mNouns[5];
        break;
        case 6:
        mNoun = mNouns[6];
        break;
        case 7:
        mNoun = mNouns[7];
        break;
        case 8:
        mNoun = mNouns[8];
        break;
        case 9:
        mNoun = mNouns[9];
        break;
}

let fNoun = "";
switch (randomNumber(fNouns)) {
    case 0:
        fNoun = fNouns[0];
        break;
        case 1:
        fNoun = fNouns[1];
        break;
        case 2:
        fNoun = fNouns[2];
        break;
        case 3:
        fNoun = fNouns[3];
        break;
        case 4:
        fNoun = fNouns[4];
        break;
        case 5:
        fNoun = fNouns[5];
        break;
        case 6:
        fNoun = fNouns[6];
        break;
        case 7:
        fNoun = fNouns[7];
        break;
        case 8:
        fNoun = fNouns[8];
        break;
        case 9:
        fNoun = fNouns[9];
        break;
}

console.log(`To my son I say: ${greeting} ${mPronoun} ${adjective} ${mNoun}!`);
console.log(`To my daughter I say: ${greeting} ${fPronoun} ${adjective} ${fNoun}!`);