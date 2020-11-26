const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "twitch",
    category: "moderation",
    description: "Twitch link",
    run: (client, message, args) => {
       

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        
            const embed = new MessageEmbed()
                .setColor(roleColor)
                .setAuthor('Kroanke','https://imgur.com/Y5UqtHC.jpg' ,'https://www.twitch.tv/kroanke');
            message.channel.send(embed)
        

        
    }
}
