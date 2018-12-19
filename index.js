const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})


bot.on('message', message => {
  if (message.content === 'Bière !') {
    message.reply('Et voici :beer: !')
  }
})

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply(" Pong ! J'ai gagné :innocent: ")
  }
})

bot.on('message', message => {
  if (message.content === '🦊') {
    message.reply("Cet animal ressemble étrangement à moi :thinking: !")
  }
})
bot.login(process.env.BOT_TOKEN);
