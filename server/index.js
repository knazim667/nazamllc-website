require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, company, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  const mailOptions = {
    from: `"Nazam LLC Website" <${process.env.SMTP_USER}>`,
    to: 'admin@nazamllc.com',
    replyTo: email,
    subject: `New Contact Form Submission — ${service || 'General Inquiry'}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #06060e; border-bottom: 2px solid #22d3ee; padding-bottom: 12px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #555; width: 120px;"><strong>Name:</strong></td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Company:</strong></td><td style="padding: 8px 0;">${company || 'N/A'}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Service:</strong></td><td style="padding: 8px 0;">${service || 'Not specified'}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #22d3ee;">
          <strong style="color: #555;">Message:</strong>
          <p style="margin-top: 8px; white-space: pre-wrap; color: #333;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">Sent from nazamllc.com contact form</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message received. We will be in touch within one business day.' });
  } catch (err) {
    console.error('Email send error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to send message. Please email admin@nazamllc.com directly.' });
  }
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages array.' });
  }

  const systemPrompt = {
    role: 'system',
    content: 'You are a friendly assistant for Nazam LLC. Help visitors learn about our services: AI automation and n8n workflows, Amazon and Walmart full account management including suspended account recovery and PPC, custom app and web development, and stock market financial education. If someone is interested or ready to talk, encourage them to book a meeting at https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad or email admin@nazamllc.com. Keep answers short, helpful, and professional.',
  };

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://nazamllc.com',
        'X-Title': 'Nazam LLC',
      },
      body: JSON.stringify({
        model: 'minimax/minimax-m2.5:free',
        messages: [systemPrompt, ...messages],
        max_tokens: 512,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('OpenRouter error:', err);
      return res.status(502).json({ error: 'AI service unavailable.' });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
    res.json({ reply });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`Nazam LLC server running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\nPort ${PORT} is already in use.\nRun with a different port: PORT=3001 npm start\n`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
