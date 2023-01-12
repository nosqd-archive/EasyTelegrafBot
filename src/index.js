const {
    Telegraf, session, Scenes: { Stage }
} = require("telegraf");
require('dotenv').config();
const setupStartCommand = require("./commands/start");

const bot = new Telegraf(process.env.BOT_TOKEN);
const stage = new Stage([
    // Register scenes here
]);

bot.use(Telegraf.log((update) => console.log("New update: ", update)));
bot.use(session());
bot.use(stage.middleware());

setupStartCommand(bot);

bot.launch();