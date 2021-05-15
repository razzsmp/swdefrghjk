const node = require('nodeactyl');
const Application = node.Application;

Application.login('HOST', 'lOtgI2CeV8ozghn5MK3SJZ4OtUbCqkACjUXZcItqE1GC2iab', (logged_in, err) => {
    console.log(logged_in);
    /** If you want call the function in here, 
     * But we prefer you do have Application.login() at the top of your
     * project and use the following syntax:
     */
});


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'createserver') {
    const args = message.content.trim().split(/ +/g);
    Application.createServer("latest", "[PaperMC]", args[1], "5", "19", "1000", "500", "1000", "IO", "1", "0", "1")}
});

client.login('ODQyNzc5MjI0NjQwNzE2ODIw.YJ6RUQ.nYfy5nVwfnOEGcRJdjuqYjbyQKo');