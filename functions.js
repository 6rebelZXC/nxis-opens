const fs = require("fs"); //Adding file reader
const chalk = require('chalk') // adding Chalk
const Discord = require('discord.js') // [index.js]

module.exports = (client) => {


    fs.readdir("./events/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("There are no events to load...");
        console.log(chalk.bgWhite(chalk.black(`Loaded ${jsfiles.length} events...`)));
        jsfiles.forEach((f, i) => {
            require(`./events/${f}`);
        });
    });

    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");

        if (jsfiles.length <= 0) return console.log("There are no commands to load...");

        console.log(chalk.bgWhite(chalk.black(`Loaded ${jsfiles.length} commands...`)));
        jsfiles.forEach((f, i) => {
            let props = require(`./commands/${f}`);
            client.commands.set(props.help.name, props);
            props.help.aliases.forEach(alias => {
                client.aliases.set(alias, props.help.name);
            })
        });
    })
}