const Config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready');
});

client.login(Config.token);

client.on('message', message => {
  console.log("Channel: " + message.channel.name);
  console.log("User: " + message.author.username);
  console.log("Message: " + message.content);
});