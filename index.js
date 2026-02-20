const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // If message has an image
  if (message.attachments.size > 0) {
    const attachment = message.attachments.first();
    await message.channel.send({
      content: "I copied your photo 😈",
      files: [attachment.url]
    });
  }
});

client.login(process.env.TOKEN);
