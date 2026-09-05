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

    const smtpHost = process.env.SMTP_SERVER || 'smtp.zoho.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USERNAME || 'support@tasktuntas.com';
    const smtpPass = process.env.SMTP_PASSWORD || 'A7CcHk2dSPMS';
    const targetEmail = process.env.CONTACT_TARGET_EMAIL || 'taraalsyah45@gmail.com';

    // Create Nodemailer transport for Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // false for 587 (STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Portofolio - ${name}" <${smtpUser}>`,
      replyTo: email,
      to: targetEmail,
      subject: `[Pesan Portofolio Baru] dari ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #18181b; max-width: 600px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #09090b; margin-top: 0; border-bottom: 2px solid #18181b; padding-bottom: 12px;">Pesan Kontak Portofolio Baru</h2>
          <p style="margin: 8px 0;"><strong>Nama Pengirim:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email Pengirim:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <div style="margin-top: 16px;">
            <strong>Isi Pesan:</strong>
            <div style="background-color: #f4f4f5; padding: 16px; border-radius: 8px; margin-top: 8px; white-space: pre-wrap; font-size: 14px; color: #27272a; border: 1px solid #e4e4e7;">${message}</div>
          </div>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #e4e4e7;" />
          <p style="font-size: 12px; color: #71717a; margin-bottom: 0;">Dikirim otomatis via Zoho SMTP (support@tasktuntas.com) ke ${targetEmail}.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: `Pesan berhasil dikirim ke ${targetEmail}!`,
    });
  } catch (error: any) {
    console.error('Zoho SMTP Error:', error);
    return NextResponse.json(
      { error: 'Gagal mengirim email via SMTP Zoho. Silakan periksa koneksi atau kredensial.' },
      { status: 500 }
    );
  }
}
