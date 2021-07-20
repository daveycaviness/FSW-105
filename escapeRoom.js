var escapeRoom = require('readline-sync');
var contestant = escapeRoom.question("What is your name? ");
console.log (contestant + " welcome to the Escape Room" );

//booleans
var isAlive = true
var hasFoundKey = false

///while loop
while (isAlive == true){
    const optionId = escapeRoom.keyIn("Press 1 to open Door 1 \n Press 2 to find the key \n Press 3 to open door 2" , {limit:"$<1-3>"});//limit
        if(optionId == 1){
            console.log ("YOU DIE!");
            isAlive = false;
         }
         
        else if (optionId == 2){
            console.log ("You Found The Key!");
           if  (hasFoundKey == true){
                console.log (" Now go and open the correct door!");
            }
                hasFoundKey = true;
        }
        
        else if (optionId == 3){
           if  (hasFoundKey == true){
                console.log (" You have succesfully escaped the Escape Room!");
                break; //break the while loop
            }
            else {
                console.log ("Go find the Key First!");
            }
         }
}





///const readline = require("readline-sync");
///const name = readline.question("What is your name? ");               