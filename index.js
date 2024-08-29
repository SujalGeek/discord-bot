const { REST, Routes } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Define your commands
const commands = [
  {
    name: 'create',
    description: 'Create short url',
  },
];

// Replace with your actual bot token
const SECRET_KEY = "MTI3ODM3ODM1NjgwMjMyMjQ0Mg.Gt-SOT.0dY5ITK8JP-G5kB82T9j-6LR07GN5x2ahSHzMg";

// Create a new REST instance and set the token
const rest = new REST({ version: '10' }).setToken(SECRET_KEY);

// Function to refresh the commands
async function refreshCommands() {
  try {
    console.log('Started refreshing application (/) commands.');
    
    await rest.put(Routes.applicationCommands('1278378356802322442'), { body: commands });
    
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

// Refresh commands on startup
refreshCommands();

// Create a new Discord client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Event listener for messages
client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  // Reply to all messages
  message.reply({
    content: "Hi from Bot!",
  });

  // Handle 'create' command
  if (message.content.startsWith('create')) {
    const url = message.content.split("create")[1]?.trim();
    return message.reply({
      content: `Generating Short ID for ${url}`,
    });
  }
});

// Event listener for interactions (e.g., slash commands)
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'create') {
    await interaction.reply('Pong!');
  }
});

// Login to Discord with your bot's token
client.login(SECRET_KEY);
