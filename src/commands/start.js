const { Telegraf } = require("telegraf")

module.exports = (bot) => {
    bot.start(Telegraf.reply("Hello, world!"))
}