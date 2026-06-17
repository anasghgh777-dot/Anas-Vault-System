// handler.js - المحرك الخلفي لنظام أنس
const puppeteer = require('puppeteer');

async function scrapeData() {
    console.log("🚀 هيرمس: بدء عملية القشط...");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // التوجه لرابط شام كاش
    await page.goto('https://shamcash.com', { waitUntil: 'networkidle2' });

    // استخراج البيانات (هنا نضع الكود الذي يجلب الأسعار)
    const content = await page.evaluate(() => {
        return document.body.innerText; // أو نحدد الـ Class الخاص بالسعر
    });

    console.log("✅ البيانات المستخرجة:", content);
    await browser.close();
}

module.exports = { scrapeData };
