//The Island Text Adventure Phase 1
//variable declarations
const userVal = document.getElementById("input");
const outputVal = document.getElementById("output");

userVal.focus();
userVal.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const userCommand = userVal.value;
        navigation(userCommand);
        userVal.value = "";
    }
});

var currentLoc = "land";
var westcount = 0;
var northcount = 0;
var backpack = [];
var suitcase2 = 0;
var itemcounter = 0;
//scenes and sections definitions
var scenes = {
    land: {
        desc: "You are on a dark beach. To the north you see a jungle with a small path.  The beach stretches to the west.  There are 2 suitcases half burried at the waters edge.",
        path: {north: "jungle", west: "beach"},
    },
    jungle: {
        desc: "As you walk down the path, it splits two ways.  You can go further north or east towards a darker part of the jungle.  The beach is south.",
        path: {south: "land", east: "cave", north: "beach2"},
    },
    cave: {
        desc: "You've reached a dark cave.  This will work for shelter.",
        path: {west: "jungle"},
    },
    beach: {
        desc: "You walk along the beach until you find wreckage from the plane.",
        path: {east: "land"},
    },
    beach2: {
        desc: "You've walked through the jungle completely and pass by a small box, emerging on the other side of the island to a small rocky beach.  You can only go back south.  You may want to search that box.",
        path: {south: "jungle"},
    }
};
//items and definitions
var items = [
{
  "item": "dry matches",
  "descr": "sealed container with dry matches inside",
},
{
  "item": "food",
  "descr": "beef jerky and two cans of beans",
},
{
  "item": "thin blanket",
  "descr": "thin safety blanket.  May be enough to keep warm.",
}
];
//main navigation function for game
function navigation(userCommand) {
    var output = "";
    
    switch(userCommand) {
        case "view area":
            output = scenes[currentLoc].desc;
            break;
           
        case "search suitcase 1":
            output = "There's nothing useful in this one.";
            break;
            
        case "search suitcase 2":
          if(suitcase2 < 1) {
            backpack[2] = "thin blanket";
            output = "You found a " + items[2]["descr"] + ".  Item has been added to your backpack.";
            itemcounter++;            
          } else { 
              output = "There's nothing useful in this one.";
          } suitcase2++;
            break;
            
        case "check backpack":
          output = backpack + " - " + itemcounter + " items.";
            break;
            
        case "build shelter":
        if(itemcounter > 2) {
          output = "You collected the 3 items needed to survive the night and build a shelter.  You are now able to eat, build a fire, cover up with a blanket, and hope that help comes soon." + "Thank you for playing.  Feel free to roam about the island.";
        } else { 
            output = "It looks like you do not have the necessary items to build a shelter.";
        }
        break;
            
        case "search box":
           if(northcount < 3) {
            backpack[1] = "food";
            output = "You found a " + items[1]["descr"] + ".  Item has been added to your backpack.";
            itemcounter++;
          } else { 
              output = "There is nothing in the box";
          }
            break;
        
        case "go north":
            if(scenes[currentLoc].path.north) {
                currentLoc = scenes[currentLoc].path.north;
                output = scenes[currentLoc].desc;
                northcount++;
            } else {
                output = "You cannot go any further in this direction.";
            }
            break;

        case "go south":
            if(scenes[currentLoc].path.south) {
                currentLoc = scenes[currentLoc].path.south;
                output = scenes[currentLoc].desc;
            } else {
                output = "You cannot go any further in this direction.";
            }
            break;

        case "go east":
            if(scenes[currentLoc].path.east) {
                currentLoc = scenes[currentLoc].path.east;
                output = scenes[currentLoc].desc;
            } else {
                output = "You cannot go any further in this direction.";
            }
            break;

        case "go west":
            if(scenes[currentLoc].path.west) {
                currentLoc = scenes[currentLoc].path.west;
                outputVal.innerHTML += scenes[currentLoc].desc;
                while(westcount < 1){
                search = confirm("You walk along the beach until you find wreckage from the plane.  There may be something useful here.  Would you like to search the wreckage?");
                  if (search==true) {
                    backpack[0] = "dry matches";
                    output += "You found a " + items[0]["descr"] + ".  Item has been added to your backpack.";
                    westcount++;
                    itemcounter++;
                  } else {
                    output = "You did not search the wreckage";
                  }
                }
            } else {
              output = "You cannot go any further in this direction.";
            } westcount++;
            break;
            
        default:
            output = "Input Not recognized: " + userCommand;
    }
//display user intput and function output
    outputVal.innerHTML += `<div class="display"></div><div>>>${userCommand}</div><div>${output}</div>`;
}


//opening
outputVal.innerHTML += `<div class="display"></div><div>You wake up to the sounds of waves crashing against the shore..</div><div>${scenes[currentLoc].desc}</div>`;
