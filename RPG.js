
const readLine = require('readLine-sync');
const playerName = readLine.question(`Welcome Player Number one. What is your name?:` );
console.log(`Thanks for playing "RESIDENT-CODE EVIL" ${playerName}! How long can you survive in this haunted town? `);//template literal

const start = readLine.keyIn(`${playerName} Please press Start.`, {limit: `$<1>`});
let pressStart = false;
if (start == 1)
{
    console.log("You have been pulled into a time vortex that has taken you to a different dimension of the dead. Stay alive as long as you can.");
     pressStart = true;
}

const enemies = ["molded", "C- Virus zombie", "T-Virus zombie", "Las Plagas", "Afflicted", "Ooze"];
const medallions = ["Medallion of Life", "Soul Medallion", "Earth Medallion", "Medallion of Inner Peace"];
let inventory = [];
let userHealth = 100;
let hasHealed = false;

function game()
{
    while (start == true && userHealth > 0)// active game conditions
    {
        let pickUp = medallions[Math.floor(Math.random() * medallions.length)];//local variables that defines my functions that only exist locally
        let zombieHealth = Math.floor(Math.random() * 150);
        const attackPower = Math.floor(Math.random() * (20 + 15 - 5) + 25);
        const zombie = enemies[Math.floor(Math.random() * enemies.length)];
        const zombiePower = Math.floor (Math.random() * (15 + 15 - 2) + 10);
        const heal = Math.floor(Math.random() * 60);

        const perform = readLine.keyIn("So what would you like to do? \nPress 'w' to walk. \nPress 'd' to heal. \nPress 's' for your Health. \nPress 'x' to exit.", {limit: '$<w, d, s, x>'});

        if (perform == 'x')
        {
            return(userHealth = 0);
        }
        else if (perform == 's')
        {
            console.log(`Name: ${playerName} \nHealth: ${userHealth} \nItems: ${inventory}`);
        }
        else if (perform == 'd')
            {
                if (userHealth < 100 && hasHealed == false)
                {
                    userHealth += heal;
                    console.log(`You healed for ${heal} hit points!`);
                    hasHealed = true;
                    if (userHealth > 100)
                    {
                        userHealth = 100;
                    }
                }
                else if (userHealth < 100 && hasHealed == true)
                {
                    console.log(`You already healed! - health: ${userHealth}`)
                }
                else if (userHealth >= 100)
                {
                    console.log(`You already at full health! - Health: ${userHealth}`)
                }
            }
            else if (perform == 'w')
            {
                hasHealed = false;
                let randomize = Math.random();
                if (randomize >= 0.26)
                {
                    console.log("You are exploring the wierd dimension...");
                }
                else if (randomize <= 0.25)
                {
                    console.log(`Ooops! You have approached a ${zombie}!`);
                    while (userHealth > 0 && zombieHealth > 0)
                    {
                        const actions = readLine.keyIn("what would you like to do? \nPress 'r' to run away. \nPress 'a' to attack.", {limit: '$<r, a>'});
                            if (actions == 'r')
                        {
                            const run = Math.random();
                            if(run <= 0.5)
                            {
                                console.log(`You couldnt get away! The ${zombie}attacks you for ${zombiePower} damage!`);
                                userHealth -= zombiePower;
                                if (userHealth <= 0)
                                {
                                    console.log(`The ${zombie} has slain you! ${playerName} has turned into a Zombie!`);
                                    break;
                                }
                            }
                            else if (run >= 0.51)
                            {
                                console.log("You got away from the zombie.")
                                break;
                            }
                        }
                        else if (actions == 'a')
                        {
                            zombieHealth -= attackPower;
                            console.log(`You attacked the ${zombie} for ${attackPower} damage!`);
                            userHealth -= zombiePower;
                            console.log(`The ${zombie} attacked you for ${zombiePower} damage!`);
                            if (zombieHealth <= 0)
                            {
                                console.log(`You successfully killed the ${zombie}!`);
                                let dropLoot = Math.random();
                                if (dropLoot <= 0.25)
                                {
                                    console.log(`You found a ${pickUp} on the dead ${zombie}!`);
                                    inventory.push(" " + pickUp);
                                }
                            }
                            if (userHealth <= 0)
                            {
                                console.log(`The ${zombie} has killed you! ${playerName} is Dead!`);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }  
    game(); //call for the game to start in the function.
    

