const puppeteer = require('puppeteer');

async function scrapeShamCash() {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    console.log("جاري الاتصال بـ شام كاش...");
    await page.goto('https://shamcash.com', { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
        // هنا سنضع "الكلاس" الخاص بالبيانات التي تريد قشطها
        return document.body.innerText; 
    });

    console.log("تم جلب البيانات:", data);
    await browser.close();
    return data;
}

scrapeShamCash();
