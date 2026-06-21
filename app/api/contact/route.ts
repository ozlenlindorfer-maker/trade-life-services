import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, jobType, timeframe, description } = body as {
      name: string;
      phone: string;
      email: string;
      jobType: string;
      timeframe?: string;
      description?: string;
    };

    if (!name?.trim() || !phone?.trim() || !email?.trim() || !jobType?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Trade Life Services <noreply@ozllen.com>",
      to: process.env.NOTIFY_EMAIL!,
      replyTo: email,
      subject: `New Quote Request — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 8px;">
          <div style="background: #2e6da4; padding: 16px 24px; border-radius: 6px 6px 0 0;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">New Quote Request — Trade Life Services</h2>
          </div>
          <div style="background: #fff; padding: 24px; border-radius: 0 0 6px 6px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; width: 160px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #111827;">${escapeHtml(name)}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #111827;">
                  <a href="tel:${escapeHtml(phone)}" style="color: #2e6da4;">${escapeHtml(phone)}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; color: #111827;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #2e6da4;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Type of Job</td>
                <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${escapeHtml(jobType)}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Timeframe</td>
                <td style="padding: 10px 0; color: #111827;">${escapeHtml(timeframe || "Not specified")}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Description</td>
                <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${escapeHtml(description || "Not provided")}</td>
              </tr>
            </table>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
            Trade Life Services — Knoxville, TN
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
