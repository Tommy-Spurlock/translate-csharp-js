// Put your code here

const names = [ "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]



    for( let name of names){
        console.log(name)
    }


    theNames = names.filter(n => n.startsWith("The"))

    console.log("-------------------------------------")

    for( let name of theNames){
        console.log(name)
    }