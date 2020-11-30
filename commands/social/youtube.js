const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "youtube",
    category: "moderation",
    description: "Youtube link",
    run: (client, message, args) => {
       

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        
            const embed = new MessageEmbed()
                .setColor(roleColor)
                .setAuthor('Kroanke','https://imgur.com/7c9qQmj.jpg' ,'https://www.youtube.com/channel/UC33i1HOasdwShTBeFM35aYA?');
            message.channel.send(embed)
        

        
    }
}
