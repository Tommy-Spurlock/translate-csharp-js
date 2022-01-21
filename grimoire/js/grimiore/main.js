// Put your code here

function GetAllSpells() {
    const allSpells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ];

    return allSpells;
}


function MakeEvilSpellBook(dsfallSpells)
{
    const evilBook = {};
    evilBook.Title = "Evil Book";
    evilBook.Spells = allSpells.filter(spell => spell.IsEvil);

    return evilBook;
}


function MakeGoodSpellBook(allSpells)
{
    const goodBook = {};
    goodBook.Title = "Good Book";
    goodBook.Spells = allSpells.filter(spell => !spell.IsEvil);

    return goodBook;
}



const allSpells = GetAllSpells();
const goodBook = MakeGoodSpellBook(allSpells);
const evilBook = MakeEvilSpellBook(allSpells);

function DisplaySpellBook(book)
{
    console.log(book.Title);
    for (let aSpell of book.Spells)
    {
        console.log(`${aSpell.Name}`);
    }
}








console.log("Do you believe in magic?");
console.log("------------------------");



DisplaySpellBook(goodBook);
console.log();
DisplaySpellBook(evilBook);

