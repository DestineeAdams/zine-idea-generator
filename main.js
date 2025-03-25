var clickSound = new Audio('./mouse-click-290204.mp3');

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
        "your favorite season",
        "wildlife you've seen in your area",
        "cloud shapes you've seen",
        "the climate in your regions"

    ],

    thing: [
        "photos",
        "drawings",
        "poem(s)",
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
    ],
    
    getContent: () => {
        pages = list.page[getRandInt(list.page)];
        nature = list.nature[getRandInt(list.nature)];
        thing1 = list.thing[getRandInt(list.thing)];
        thing2 = list.thing[getRandInt(list.thing)];
        experience = list.experience[getRandInt(list.experience)];
        
        return `Make a  ${pages} page zine about ${nature} with ${thing1} and ${thing2} to capture the ${experience} you had.`;
    }  
}


function getRandInt(listName) {
    let num = Math.floor(Math.random() * listName.length);
    return num;
}



document.querySelector('button').addEventListener('click', () => {
    document.querySelector("p").innerText = list.getContent();
    console.log("test");
    clickSound.play();
    
});