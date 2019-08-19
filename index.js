const Discord = requires('discord.js');
const client = new Discord.Client();
const PREFIX = "$"

client.on("ready", function() {
             bot.user.setActivity("$help for commands")
});

client.on("message", (message) -> (
   if(message.content.startsWith(PREFIX + ping")){
              message.channel.send("PONG!");
}});

client.login(procces.env.token);
