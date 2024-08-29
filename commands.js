const { REST, Routes } = require('discord.js');
const commands = [
    {
      name: 'create',
      description: 'Create short url',
    },
  ];
const SECRET_KEY="MTI3ODM3ODM1NjgwMjMyMjQ0Mg.Gt-SOT.0dY5ITK8JP-G5kB82T9j-6LR07GN5x2ahSHzMg";
  const rest = new REST({ version: '10' }).setToken(SECRET_KEY);

  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1278378356802322442'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }