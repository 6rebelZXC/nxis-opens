const Discord = require('discord.js'); // connectiong Discord.Js [NPM I DISCORD.JS]
const client = new Discord.Client();
const prefix = require("./config.json").auth.prefix; // Linking to the auth directory of the config.json
const token = require("./config.json").auth.token;
const ytdl = require('ytdl-core') // connecting bot to the ytdl core to create music commands [optional]
require("./functions.js")(client);
client.commands = new Discord.Collection;
client.aliases = new Discord.Collection;
// TODO: Do comments

client.login(token);
module.exports = {
	client:client
}