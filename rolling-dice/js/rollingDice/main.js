// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Roll()
{

    let die = getRandomInt(1,6);
    return die;
}

function ToString(number)
{
    let dieString = "Unknown";

    // This "switch" statement behaves like a series of "if/else if" statements.
    //  We compare the numeric Value of the current object accross different "cases".
    //  When we find a matching case we return a string that represents an image of a die
    // Did you kow that JavaScript also has "switch" statements?
    switch (number)
    {
        /* "case 1:" is like the following "if" statement
        if (this.Value == 1) {
            dieString = "\u2680";
        }
        */
        case 1:
            dieString = "\u2680"; // These \uXXXX values are fancy unicode characters
            break;
        case 2:
            dieString = "\u2681";
            break;
        case 3:
            dieString = "\u2682";
            break;
        case 4:
            dieString = "\u2683";
            break;
        case 5:
            dieString = "\u2684";
            break;
        case 6:
            dieString = "\u2685";
            break;
    }

    return dieString;
}

for (let i = 0; i < 10; i++)
{
    let die1 = Roll();
    let die2 = Roll();

    let message = `${ToString(die1)} + ${ToString(die2)} == ${die1 + die2}`;
    if (die1 == die2)
    {
        message += " DOUBLES!";
    }

    console.log(message);
}