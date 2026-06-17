const puppeteer = require('puppeteer');

async function scrapeShamCash() {
    console.log("🚀 هيرمس: بدء عملية القشط...");
    
    // تشغيل المتصفح في الخلفية
    const browser = await puppeteer.launch({ 
        headless: true, 
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    
    const page = await browser.newPage();
    
    // التوجه لرابط الموقع
    await page.goto('https://shamcash.com', { waitUntil: 'networkidle2' });

    // استخراج النصوص من الموقع
    const data = await page.evaluate(() => {
        return document.body.innerText; 
    });

    console.log("✅ البيانات المستخرجة:", data);
    
    await browser.close();
}

scrapeShamCash();
