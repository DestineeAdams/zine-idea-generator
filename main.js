
function generate() {
    let list = {
        nature: [
            "parks you have been to",
            "beaches you have been to",
            "trees",
            "animals",
            "fall",
            "winter",
            "summer",
            "spring",
            "your favorite season"
        ],
    
        thing: [
            "photos",
            "drawings",
            "poem",
            "maps"
        ],
    
        experience: [
            "experience",
            "feelings",
            "day"
        ],
    
        page: [
            "four",
            "two",
            "ten",
            "eight",
            "fourteen",
            "twelve",
            "sixteen"
        ]
    }
    
    let pages,nature,thing1, thing2,experience = null;
    
    
    pages = list.page[getRandInt(list.page)];
    nature = list.nature[getRandInt(list.nature)];
    thing1 = list.thing[getRandInt(list.thing)];
    thing2 = list.thing[getRandInt(list.thing)];
    experience = list.experience[getRandInt(list.experience)];
    
    

    var element = document.getElementById("idea");
    element.innerHTML =  `Make a  ${pages} page zine about ${nature} with ${thing1} and ${thing2} to capture the ${experience} you had.`;
    
    
}





function getRandInt(listName) {
    let num = Math.floor(Math.random() * listName.length);
    return num;
}