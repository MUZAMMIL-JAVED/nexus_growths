import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  message: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const handler: Handler = async (event: HandlerEvent) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // ── Validate environment ──────────────────────────────────────────
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env variables");
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Server email configuration error" }),
    };
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || gmailUser;

  // Diagnostic log (safe — only shows lengths, not actual values)
  console.log("ENV check:", {
    GMAIL_USER: gmailUser ? `${gmailUser.substring(0, 3)}...@... (len: ${gmailUser.length})` : "MISSING",
    GMAIL_APP_PASSWORD: gmailPass ? `****** (len: ${gmailPass.length})` : "MISSING",
    RECIPIENT_EMAIL: recipientEmail ? `${recipientEmail.substring(0, 3)}... (len: ${recipientEmail.length})` : "MISSING",
  });

  // ── Parse & validate body ─────────────────────────────────────────
  let payload: unknown;
  try {
    payload = JSON.parse(event.body || "");
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  if (!isValidPayload(payload)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: "Missing required fields: name, email, and message",
      }),
    };
  }

  const { name, email, company, message } = payload;

  // ── Build email ───────────────────────────────────────────────────
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: #2dd4bf; margin: 0; font-size: 22px;">New Audit Request</h1>
        <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Submitted via nexusgrowths.tech</p>
      </div>
      <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 120px;">Full Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Work Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">
              <a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 500;">${company || "—"}</td>
          </tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Operational Challenge</p>
          <div style="background: #f8fafc; border-left: 3px solid #2dd4bf; padding: 16px; border-radius: 0 8px 8px 0;">
            <p style="color: #334155; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">This email was sent from the Nexus Growths contact form.</p>
        </div>
      </div>
    </div>
  `;

  const textBody = [
    "NEW AUDIT REQUEST — Nexus Growths",
    "─".repeat(40),
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company || "—"}`,
    "",
    "Operational Challenge:",
    message,
    "",
    "─".repeat(40),
    "Sent from nexusgrowths.tech contact form",
  ].join("\n");

  // ── Send email ────────────────────────────────────────────────────
  try {
    await transporter.sendMail({
      from: `"Nexus Growths Website" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Audit Request from ${name}${company ? ` — ${company}` : ""}`,
      text: textBody,
      html: htmlBody,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "Email sent successfully" }),
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Failed to send email:", errorMessage);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to send email. Please try again later.",
        debug: errorMessage,
      }),
    };
  }
};

export { handler };
