const Config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  client.user.setPresence({
    activity: { name: 'Listening to DM'},
    status: 'online'
  }).catch(console.error);
  
  console.log('Bot Online');
});

client.login(Config.token);

client.on('message', message => {
  console.log('Author: ', message.author.username);
  console.log('Channel: ', message.channel.name || 'dm');
  console.log('Message: ', message.content);

  client.channels.cache.map(channel => {
    if (
        (channel.type === 'text' && channel.name === 'bot-message-watcher-inbox')
        && (message.author.id !== client.user.id)
    ) {
      channel.send(
        `Sender: \`${message.author.username}\`\rMessage:\r\`\`\`${message.content}\`\`\``
        ).catch(console.error);
    }
  });
});