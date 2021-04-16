const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = require("./config.json").auth.prefix;
const token = require("./config.json").auth.token;
const ytdl = require('ytdl-core')
require("./functions.js")(client);
client.commands = new Discord.Collection;
client.aliases = new Discord.Collection;


client.login(token);
module.exports = {
	client:client
}