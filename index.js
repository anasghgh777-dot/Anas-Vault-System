bot.command('scrape', async (ctx) => {
    try {
        // 1. التحقق من اشتراك المستخدم في القناة
        const chatMember = await ctx.telegram.getChatMember('@HermesDevs', ctx.from.id);
        
        // 2. التحقق من الحالة (عضو، مشرف، أو مالك)
        if (chatMember.status === 'left' || chatMember.status === 'kicked') {
            return ctx.reply("🚀 أهلاً بك في نظام Hermes Devs!\n\nللاستفادة من خدمة القشط، يرجى الانضمام إلى قناتنا الرسمية أولاً:\nhttps://t.me/HermesDevs");
        }

        // 3. إذا كان مشتركاً، نبدأ عملية القشط
        ctx.reply("جاري البدء بعملية القشط، يرجى الانتظار...");
        const result = await scrapeShamCash(); // استدعاء الدالة التي تظهر في ملف 150088.jpg
        ctx.reply(`تمت عملية القشط بنجاح!\n\nالنتائج:\n${result.substring(0, 4000)}`); // إرسال النتائج
        
    } catch (error) {
        console.error(error);
        ctx.reply("حدث خطأ أثناء الاتصال بالقناة أو عملية القشط. تأكد من أن البوت مشرف في القناة.");
    }
});
