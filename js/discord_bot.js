const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["Guilds", "GuildMessages"] })
const prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", async interaction => {
	console.log(`${Message.author}!`)
	// if (message.author.bot) return;
	// if(!message.content.startsWith(prefix)) return;
	// if (interaction.commandName === 'ping') {
	// 	await interaction.reply('Pong!');
	// }
	// const commandBody = message.content.slice(prefix.length);
  	// const args = commandBody.split(' ');
  	// const command = args.shift().toLowerCase();

	// if (command === "ping"){
	// 	const timeTaken = Date.now() - message.createdTimestamp;
   	// 	message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
	// }
})

// client.login(process.env.TOKEN);
client.login('TOK')

