const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Prodige')
            .setTitle('Prodige **bonjour**')
            .setDescription('[Recherche Google](https://google.fr) **bonjour**')
            .setColor('RANDOM')
            .addField('Champ 1 **bonjour**', 'Bonjour c\'est moi **bonjour**', true)
            .addField('Champ 2', 'Blabla', true)
            .setAuthor('Moussa **bonjour**', 'https://cdn.discordapp.com/attachments/851197036208193596/854302858340728832/d5484f103deec4337249bd1654ef4c43.gif', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/851197036208193596/854302858340728832/d5484f103deec4337249bd1654ef4c43.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/851197036208193596/854302858340728832/d5484f103deec4337249bd1654ef4c43.gif')
            .setFooter('bot de Moussa **bonjour**', 'https://cdn.discordapp.com/attachments/851197036208193596/854302858340728832/d5484f103deec4337249bd1654ef4c43.gif')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}