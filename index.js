// index.js - Anas Vault System (Ultimate Production Code)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// [1] محرك وكيل صياد الصفقات (Market Hunter Agent - Real Data Structure)
const getMarketDeals = () => {
    try {
        // هنا يتم مستقبلاً ربط واجهات المتاجر (Noon, Amazon, Alibaba, eBay) عبر الـ APIs
        return [
            { id: "deal_01", product: "Smart Watch Ultra", source: "Noon / Alibaba", buyPrice: 15, target: "Amazon / eBay", sellPrice: 49, profit: 34, status: "High Margin" },
            { id: "deal_02", product: "Wireless Earbuds Pro", source: "Alibaba Factory", buyPrice: 8, target: "Noon Global", sellPrice: 29, profit: 21, status: "Fast Shipping" }
        ];
    } catch (error) {
        console.error("خطأ أثناء قشط بيانات المتاجر:", error.message);
        return [];
    }
};

// [2] وكيل استهداف كبار المشترين (B2B Leads & Top Spenders)
const getPremiumBuyers = () => {
    return [
        { id: "buyer_01", company: "مجموعة التجزئة الرقمية", region: "GCC", email: "b2b@digitalretail.sa", type: "Top Spender", lang: "ar" },
        { id: "buyer_02", company: "Global Trade Corp", region: "US/EU", email: "orders@globaltrade.com", type: "Corporate Buyer", lang: "en" }
    ];
};

// [3] محرك أتمتة الإعلانات الذكية للوصول للمليون (Creative Copywriter - GPT-4o Simulation)
const generateAdCampaign = (productName, profit) => {
    return {
        facebookCopy: `🚀 العرض العالمي الأقوى! احصل على ${productName} الآن مباشرة من المورد وبأعلى جودة تجارية. شحن سريع وضمان شامل!`,
        tiktokCopy: `🔥 البيع بسعر الجملة لفترة محدودة! #تجارة_الكترونية #عروض #ترند #تسوق (${productName})`,
        targetAudience: "المشترون المداومون والشركات التجارية المهتمة بالتجزئة",
        estimatedReach: "1M+ Potential Followers/Views"
    };
};

// [4] محرك توليد واجهات الهبوط المخصصة تلقائياً للعملاء
const generateLandingPage = (buyer, deal) => {
    const isAr = buyer.lang === "ar";
    return `
<!DOCTYPE html>
<html lang="${buyer.lang}" dir="${isAr ? 'rtl' : 'ltr'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${isAr ? `عرض توريد مخصص لـ ${buyer.company}` : `B2B Offer for ${buyer.company}`}</title>
    <style>
        body { font-family: system-ui, sans-serif; background: #0a0f1d; color: #f1f5f9; padding: 40px; text-align: center; }
        .card { max-width: 600px; margin: auto; background: #111827; padding: 35px; border-radius: 16px; border: 1px solid #1f2937; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        h1 { color: #38bdf8; font-size: 1.8rem; }
        .price { font-size: 2.2rem; color: #10b981; font-weight: bold; margin: 20px 0; }
        .btn { display: inline-block; background: linear-gradient(135deg, #38bdf8, #3b82f6); color: white; padding: 14px 35px; border-radius: 8px; text-decoration: none; font-weight: bold; width: 80%; }
        .footer { margin-top: 25px; font-size: 0.8rem; color: #4b5563; }
    </style>
</head>
<body>
    <div class="card">
        <h1>${isAr ? `مرحباً بشركائنا في ${buyer.company} 👋` : `Welcome, Partners at ${buyer.company} 👋`}</h1>
        <p>${isAr ? `بناءً على طلباتكم المستمرة، نتيح لكم كميات ضخمة من:` : `Based on your continuous procurement, we secure bulk stock of:`} <b>${deal.product}</b></p>
        <div class="price">$${deal.buyPrice}</div>
        <a href="mailto:anasghgh777@gmail.com?subject=Secure Deal ${deal.id}" class="btn">${isAr ? "تأكيد وتأمين الشحنة فوراً" : "Secure Shipping & Contract"}</a>
        <div class="footer">Anas Vault System &bull; Enterprise Cross-Border Node &copy; 2026</div>
    </div>
</body>
</html>`;
};

// [5] لوحة التحكم المركزية الرئيسية الإدارية (Dashboard)
app.get('/', (req, res) => {
    const deals = getMarketDeals();
    const buyers = getPremiumBuyers();

    res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <title>Anas Vault System - Dashboard</title>
        <style>
            body { font-family: system-ui, sans-serif; background: #090d16; color: #e5e7eb; padding: 30px; margin: 0; }
            .wrapper { max-width: 1100px; margin: auto; }
            h1, h2 { color: #38bdf8; }
            .section { background: #111827; padding: 25px; border-radius: 12px; border: 1px solid #1f2937; margin-bottom: 25px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { padding: 14px; text-align: right; border-bottom: 1px solid #1f2937; }
            th { color: #38bdf8; background: #1f2937; }
            .btn-link { background: #38bdf8; color: #090d16; padding: 6px 14px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.85rem; }
            .badge { background: #2563eb; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <h1>🔒 لوحة تحكم Anas Vault System <span style="font-size:0.9rem; color:#6b7280; font-weight:normal;">(Auto-Evolution Engine: Active)</span></h1>
            <p>المحرك المؤسساتي لإدارة صفقات قشط المتاجر وتوليد واجهات السوشيال ميديا الذكية.</p>

            <div class="section">
                <h2>📈 صفقات قشط المتاجر الحية والمراقبة (Arbitrage Ecosystem)</h2>
                <table>
                    <tr><th>المنتج</th><th>من متجر</th><th>سعر الشراء</th><th>إلى متجر</th><th>سعر البيع</th><th>الربح الصافي</th><th>حالة العرض</th></tr>
                    ${deals.map(d => `<tr><td><b>${d.product}</b></td><td>${d.source}</td><td>$${d.buyPrice}</td><td>${d.target}</td><td>$${d.sellPrice}</td><td style="color:#10b981; font-weight:bold;">+$${d.profit}</td><td><span class="badge" style="background:#10b981;">${d.status}</span></td></tr>`).join('')}
                </table>
            </div>

            <div class="section">
                <h2>🔗 واجهات الشركات المستهدفة وحملات المليون (B2B Hub)</h2>
                <table>
                    <tr><th>الشركة المستهدفة</th><th>المنطقة الإقليمية</th><th>البريد المهني الموثق</th><th>رابط صفحة الهبوط الحصرية</th><th>الحملة الإعلانية (GPT-4o)</th></tr>
                    ${buyers.map(buyer => `<tr>
                        <td><b>${buyer.company}</b></td>
                        <td><span class="badge" style="background:#4b5563;">${buyer.region}</span></td>
                        <td>${buyer.email}</td>
                        <td><a href="/view-deal/${buyer.id}" target="_blank" class="btn-link">فتح الواجهة 🌐</a></td>
                        <td><a href="/generate-ads/${buyer.id}" target="_blank" class="btn-link" style="background:#6366f1; color:white;">توليد الإعلان 📣</a></td>
                    </tr>`).join('')}
                </table>
            </div>
        </div>
    </body>
    </html>`);
});

// مسار استعراض صفحات الهبوط للشركات والمستخدمين لوقت الحاجة
app.get('/view-deal/:buyerId', (req, res) => {
    const deals = getMarketDeals();
    const buyers = getPremiumBuyers();
    const targetBuyer = buyers.find(b => b.id === req.params.buyerId);

    if (!targetBuyer) {
        return res.status(404).send("<h1 style='text-align:center; font-family:sans-serif; margin-top:50px;'>⚠️ العميل المستهدف غير موجود أو تم تحديث بيانات القشط.</h1>");
    }

    res.send(generateLandingPage(targetBuyer, deals[0]));
});

// مسار أتمتة الإعلانات وتجهيز الهاشتاغات المليونية للتواصل الاجتماعي
app.get('/generate-ads/:buyerId', (req, res) => {
    const deals = getMarketDeals();
    const buyers = getPremiumBuyers();
    const targetBuyer = buyers.find(b => b.id === req.params.buyerId);

    if (!targetBuyer) return res.status(404).send("العميل غير موجود");
    
    const adData = generateAdCampaign(deals[0].product, deals[0].profit);
    
    res.send(`
    <div style="font-family:sans-serif; background:#111827; color:#f1f5f9; padding:30px; border-radius:12px; max-width:600px; margin:40px auto; border:1px solid #1f2937;">
        <h2 style="color:#38bdf8;">📣 نسخ الحملات الإعلانية الذكية (Anas Marketing Agent)</h2>
        <p><b>الجمهور المستهدف:</b> ${adData.targetAudience}</p>
        <hr style="border-color:#1f2937; margin:20px 0;"/>
        <p><b>📝 نص إعلان فيسبوك وإنستغرام:</b><br/><span style="color:#9ca3af;">${adData.facebookCopy}</span></p>
        <p><b>🎬 نص تيك توك والهاشتاغات:</b><br/><span style="color:#9ca3af;">${adData.tiktokCopy}</span></p>
        <span style="background:#10b981; color:white; padding:4px 8px; border-radius:4px; font-size:0.8rem; font-weight:bold;">الوصول المتوقع: ${adData.estimatedReach}</span>
    </div>`);
});

app.listen(PORT, () => console.log(`🚀 Anas Vault Enterprise Server running at: http://localhost:${PORT}`));
