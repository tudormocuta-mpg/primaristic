import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const TO_EMAIL = "tudor.mocuta@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nume, email, telefon, mesaj } = body;

    // Validate required fields
    if (!nume || !email || !mesaj) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const htmlContent = `
      <h2>Mesaj nou de contact — PRIMARISTICA&reg;</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr>
          <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Nume:</td>
          <td style="padding:8px 12px;">${escapeHtml(nume)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Email:</td>
          <td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        ${
          telefon
            ? `<tr>
          <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Telefon:</td>
          <td style="padding:8px 12px;">${escapeHtml(telefon)}</td>
        </tr>`
            : ""
        }
        <tr>
          <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Mesaj:</td>
          <td style="padding:8px 12px;white-space:pre-wrap;">${escapeHtml(mesaj)}</td>
        </tr>
      </table>
    `;

    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "PRIMARISTICA® Contact <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject: `Mesaj nou de contact de la ${nume}`,
        reply_to: email,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/** Escape HTML special characters to prevent XSS in email content */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
