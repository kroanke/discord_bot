const { Client, Collection, DiscordAPIError } = require("discord.js");
const { config } = require("dotenv");
const Discord = require("discord.js");



const client = new Client({
    disableEveryone: true,
//     partials: ["MESSAGE", "CHANNEL", "REACTION"]
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    client.user.setUsername("Kroanke");
    console.log(`Hi, ${client.user.username} is now online!`);
    client.user.setPresence({
        status: "online",
        activity: {
            name: "twitch.tv/kroanke",
            type: "WATCHING",
            url: "https://www.twitch.tv/kroanke"
        }
    }); 
})

client.on("guildMemberAdd", member =>{
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.type === 'text');
    welcomeChannel.send(`${member} hosgeldin yarram`);
})

client.on("guildMemberRemove", member =>{
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.type === 'text');
    welcomeChannel.send(`${member} siktirdi gitti`);
})

client.on("message", async message => {
    const prefix = ".";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
//     if (cmd === '${prefix}roles') 
//         command.run(client, message, args);

//         if (message.author.bot) return false;

//         // Getting the role by ID.
//         const fortnite_role = message.guild.roles.cache.get("783464224969195530");
//         const among_us_role = message.guild.roles.cache.get("783464224969195530");
//         const metin2_role = message.guild.roles.cache.get("783464224969195530");
//         const Role1 = message.guild.roles.cache.get("783464224969195530");
//         const Role1 = message.guild.roles.cache.get("783464224969195530");
//         const Role1 = message.guild.roles.cache.get("783464224969195530");
//         const Role1 = message.guild.roles.cache.get("783464224969195530");
//         const Role1 = message.guild.roles.cache.get("783464224969195530");

    
//         // Creating a filter.
//         const Filter = (reaction, user) => user.id == message.author.id;

//             const fortnite_emoji = client.emojis.cache.get("783371272079802389");
//             const amongus_emoji = client.emojis.cache.get("783371272079802389");
//             const metin2_emoji = client.emojis.cache.get("783371272079802389");
//             const minecraft_emoji = client.emojis.cache.get("783371272079802389");
//             const rpg_emoji = client.emojis.cache.get("783371272079802389");
//             const valorant_emoji = client.emojis.cache.get("783371272079802389");
//             const csgo_emoji = client.emojis.cache.get("783371272079802389");
//             const lol_emoji = client.emojis.cache.get("783371272079802389");

            


//         // Creating the embed message.
//         const Embed = new Discord.MessageEmbed()
//             // .setDescription(`Choose a role: ${Role1.name}`)
//             .setDescription(`Role Menu: Games\n
//             React to give yourself a role.\n
//             ${fortnite_emoji} : ${Role1.name}\n
//             ${amongus_emoji} : ${Role1.name}\n
//             ${metin2_emoji} : ${Role1.name}\n
//             ${minecraft_emoji} : ${Role1.name}\n
//             ${rpg_emoji} : ${Role1.name}\n
//             ${valorant_emoji} : ${Role1.name}\n
//             ${csgo_emoji} : ${Role1.name}\n
//             ${lol_emoji} : ${Role1.name}\n`)
        
//         // Awaiting for the embed message to be sent.
//         const reactionMessage = await message.channel.send(Embed);
    
//         // Reacting to the embed message.
//         await reactionMessage.react("😎");
    
//         // Awaiting a reaction to the embed message. Time is measured in ms. (30000 ms - 30 seconds)
//         reactionMessage.awaitReactions(Filter, {max: 1, time: 30000, errors: ["time"]}).then(collected => {
//             // Getting the first reaction in the collection.
//             const reaction = collected.first();
            
//             // Creating a switch statement for reaction.emoji.name.
//             switch (reaction.emoji.name) {
//                 case "😎":
//                     // Checking if the member already has the role.
//                     if (message.member.roles.cache.has(Role1.id)) {return message.channel.send("You already have the role.")};
//                     // Adding the role.
//                     message.member.roles.add(Role1).then(message.channel.send("Role added!"));
//                     // Breaking the switch statement to make sure no other cases are executed.
//                     break
//             }
//         })
});


client.login(process.env.TOKEN);
