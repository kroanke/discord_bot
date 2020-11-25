const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        if(message.deletable) message.delete();

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        if(args[0].toLowerCase() === "embed"){
            const embed = new MessageEmbed()
                .setColor(roleColor)
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send(embed);
        }
        else if(args[0].toLowerCase() === "twitch"){
            const embed = new MessageEmbed()
                .setColor(roleColor)
                .setAuthor('Kroanke','https://imgur.com/ykybn9P.jpg' ,'https://www.twitch.tv/kroanke');
            message.channel.send(embed)
        }

        else{
            message.channel.send(args.join(" "));
        }
    }
}
