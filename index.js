const express = require('express');
const { Telegraf } = require('telegraf');
const app = express();
app.use(express.json());

// توكن بوت البوابة الخاص بك
const bot = new Telegraf('8711000162:AAGfBDQgt-NyFhIAR1ZQv-8Q-X4wAY5sMRs');

app.post('/webhook', (req, res) => {
  bot.handleUpdate(req.body);
  res.sendStatus(200);
});

bot.start((ctx) => ctx.reply('🛡️ القائد أنس.. نظام Anas Vault متصل بالروث وجاهز للسيطرة!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running...'));
