import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nama, email, dan pesan wajib diisi.' },
        { status: 400 }
      );
    }

    const targetEmail = 'taraalsyah45@gmail.com';

    // 1. Check for Gmail / SMTP environment credentials
    const smtpUser = process.env.GMAIL_USER || process.env.SMTP_USER;
    const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${smtpUser}>`,
        replyTo: email,
        to: targetEmail,
        subject: `[Portofolio] Pesan Baru dari ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #09090b; border-bottom: 2px solid #27272a; padding-bottom: 10px;">Pesan Baru dari Portofolio</h2>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email Pengirim:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Pesan:</strong></p>
            <div style="background-color: #f4f4f5; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
            <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #71717a;">Email ini dikirim otomatis dari formulir kontak portofolio Tara Alsyah.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({
        success: true,
        message: `Pesan berhasil dikirim ke ${targetEmail}!`,
      });
    }

    // 2. Check for Web3Forms API Key
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key,
          name: name,
          email: email,
          message: message,
          subject: `[Portofolio] Pesan Baru dari ${name}`,
          to: targetEmail,
        }),
      });

      const data = await response.json();
      if (data.success) {
        return NextResponse.json({
          success: true,
          message: `Pesan berhasil dikirim ke ${targetEmail}!`,
        });
      }
    }

    // 3. Fallback: Log payload & instruct env setup
    console.log(`[Formulir Kontak] Pesan untuk ${targetEmail}:`, { name, email, message });

    return NextResponse.json({
      success: true,
      message: `Pesan berhasil diterima untuk ${targetEmail}! (Konfigurasikan GMAIL_USER & GMAIL_APP_PASSWORD di .env untuk pengiriman email langsung)`,
    });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
