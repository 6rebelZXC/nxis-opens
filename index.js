const Discord = require('discord.js'); // connectiong Discord.Js [NPM I DISCORD.JS]
const client = new Discord.Client();
const prefix = require("./config.json").auth.prefix; // Linking to the auth directory of the config.json
const token = require("./config.json").auth.token;
require("./functions.js")(client);
client.commands = new Discord.Collection;
client.aliases = new Discord.Collection;

client.login(token);
module.exports = {
	client:client
}