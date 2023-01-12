const {
    Telegraf
} = require("telegraf");
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(Telegraf.reply("Hello World!"));

bot.launch();