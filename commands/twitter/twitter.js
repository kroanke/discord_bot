const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "twitter",
    category: "moderation",
    description: "Twitter link",
    run: (client, message, args) => {
       

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        
            const embed = new MessageEmbed()
                .setColor(roleColor)
                .setAuthor('Kroanke','https://imgur.com/nRUWtSz.jpg' ,'https://twitter.com/kroankee');
            message.channel.send(embed)
        

        
    }
}
