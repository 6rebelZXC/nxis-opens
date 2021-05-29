/* Example of the file in ./events/ */
const Discord = require('discord.js') // Require Discord.js
var {client} = require('../index.js')//Getting client
const chalk = require('chalk') //OPTIONALLY: Download chalk (npm i chalk) for better console.log
client.on("ready", async () => { // creating event
    console.log(chalk.blueBright('{Event:start} Ready')) // console log of event
    setTimeout(() => {
        client.user.setPresence({ status: "idle", activity: { name: "Made by UAV#2529", type: "WATCHING"}})
    }, 1000)
}); 
