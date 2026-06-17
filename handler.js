const puppeteer = require('puppeteer');

async function scrapeShamCash() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // التوجه لرابط شام كاش (أو الصفحة المحددة للتحديثات)
    await page.goto('رابط_صفحة_التحديثات_في_شام_كاش', { waitUntil: 'networkidle2' });

    // قشط البيانات المطلوبة (مثلاً سعر أو إشعار)
    const data = await page.evaluate(() => {
        return document.querySelector('.selector-class-name').innerText; // هنا نضع كلاس العنصر المطلوب
    });

    await browser.close();
    return data;
}
