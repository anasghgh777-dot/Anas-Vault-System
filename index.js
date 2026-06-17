const { Telegraf } = require('telegraf');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// إعداد البوت (ضع الـ Token الخاص بك هنا)
const bot = new Telegraf('YOUR_BOT_TOKEN_HERE');

// إعدادات العفريت (قاعدة بيانات المواقع)
const scrapers = {
    'sham': { url: 'https://shamcash.com', selector: 'body' },
    'github': { url: 'https://github.com/trending', selector: '.Box-row' },
    'trendyol': { url: 'https://www.trendyol.com/sr?q=jeep', selector: '.p-card-wrppr' },
    'alibaba': { url: 'https://www.alibaba.com/trade/search?SearchText=tech', selector: '.list-no-v2-outter' }
};

// محرك القشط الذكي (العفريت الأكبر)
async function greatScraper(target) {
    const config = scrapers[target];
    if (!config) return "هذا الموقع غير مبرمج في العفريت.";

    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(config.url, { waitUntil: 'networkidle2' });
    
    const data = await page.evaluate((sel) => {
        const elements = document.querySelectorAll(sel);
        return Array.from(elements).map(el => el.innerText).slice(0, 5).join('\n---\n');
    }, config.selector);

    await browser.close();
    return data || "لم يتم العثور على بيانات.";
}

// أمر القشط مع حماية القناة
bot.command('scrape', async (ctx) => {
    try {
        // 1. التحقق من الاشتراك
        const chatMember = await ctx.telegram.getChatMember('@HermesDevs', ctx.from.id);
        const isMember = ['member', 'administrator', 'creator'].includes(chatMember.status);

        if (!isMember) {
            return ctx.reply("🚀 أهلاً بك في نظام Hermes Devs! يرجى الانضمام لقناتنا أولاً لاستخدام العفريت: https://t.me/HermesDevs");
        }

        // 2. معالجة الطلب
        const args = ctx.message.text.split(' ');
        if (args.length < 2) return ctx.reply("استخدم الأمر: /scrape [sham / github / trendyol / alibaba]");

        ctx.reply(`👿 العفريت الأكبر يبدأ القشط من: ${args[1]}...`);
        const result = await greatScraper(args[1]);
        ctx.reply(`✅ *النتائج:* \n\n\`\`\`text\n${result.substring(0, 3000)}\n\`\`\``, { parse_mode: 'Markdown' });
        
    } catch (error) {
        console.error(error);
        ctx.reply("⚠️ حدث خطأ تقني. تأكد أن البوت مشرف في القناة وأن الرابط صحيح.");
    }
});

bot.launch();
console.log("نظام Hermes Devs يعمل الآن...");
