const Discord = require("discord.js");
const bot = new Discord.Client;


bot.on("ready", () => {
    bot.user.setActivity(`Tapez "+help" pour activer le menu d'aide`, {type: `PLAYING`});
    console.log(`${bot.user.tag} est en ligne !`)
    });
   
bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(`name`, "réception")
    if(!bvn) return;
    var embed = new Discord.RichEmbed()
            .setAuthor("E-Mungnus#4009", bot.user.avatarURL)
            .setTitle(`${member.user.tag} arrival on the server`)
            .addField(`Welcome to our company !`,"Toute l'administration d'E-Mungnus vous souhaite la bienvenue ! \nAll the administration of E-Mungnus welcomes you! \nВся администрация E-Mungnus приветствует вас!", true)
            .setColor("0fc0000")
        bvn.send(embed)
    
})
bot.on("guildMemberRemove", member => {
    const bvn = member.guild.channels.find(`name`, "réception")
    if(!bvn) return;
    var embed = new Discord.RichEmbed()
            .setAuthor("L.G.G.#1073", bot.user.avatarURL)
            .setTitle(`${member.user.tag} departure from the server`)
            .addField(`Good continuation`, `Bonne continuation \nХорошее продолжение`, true)
            .setColor("0fc0000")
        bvn.send(embed)
    
})
bot.on(`guildMemberAdd`, member => {
    if(!member.guild.id === "498588289679491072") return
        var role = member.guild.roles.find(`name`, `Employé`);
        member.addRole(role)
})



bot.on ("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = "+";
    let messageArray = message.content.split(" ");
    let cnd = messageArray[0];
    let args = messageArray.slice(1);

    
    
    
                                                    //Commandes
    
    

    
    


})

bot.login(process.env.TOKEN);
