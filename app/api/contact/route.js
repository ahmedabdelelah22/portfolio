export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const telegramMessage = `
New Contact Form Message:
Name: ${name}
Email: ${email}
Message: ${message}
    `;

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const body = {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: telegramMessage,
    };

    async function sendTelegram(attempt = 1) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      } catch (err) {
        if (attempt < 3) return sendTelegram(attempt + 1);
        else throw err;
      }
    }

    await sendTelegram();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Telegram error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
