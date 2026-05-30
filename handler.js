// handler.js - معالج الأوامر والطلب للـ Proxy
const axios = require('axios');

async function handleCodeGeneration(prompt, options = {}) {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.DEFAULT_MODEL || 'deepseek/deepseek-r1-distill-llama-70b';

    if (!apiKey) {
        throw new Error('خطأ: مفتاح API غير معرف في ملف الـ .env');
    }

    try {
        console.log(`[Proxy] جاري المعالجة بنموذج: ${model}`);
        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
            model: model,
            messages: [
                { role: 'system', content: 'أنت مساعد برمجى محترف داخل بيئة VS Code.' },
                { role: 'user', content: prompt }
            ],
            temperature: options.temperature || 0.2
        }, {
            headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' }
        });

        return { success: true, code: response.data.choices[0].message.content, model };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

module.exports = { handleCodeGeneration };
