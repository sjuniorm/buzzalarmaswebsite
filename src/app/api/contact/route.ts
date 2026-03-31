import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, location, message } = await req.json();

    if (!name || !email || !location || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Buzz Alarmas Website <noreply@buzzalarmas.com>",
      to: ["hola@buzzalarmas.com"],
      replyTo: email,
      subject: `New enquiry from ${name} — ${location}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #ff914d; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Website Enquiry</h1>
          </div>
          <div style="background: #1e1e1e; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 14px; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #fff; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #ff914d; font-size: 14px;"><a href="mailto:${email}" style="color: #ff914d;">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Phone</td><td style="padding: 8px 0; color: #fff; font-size: 14px;">${phone}</td></tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 14px;">Location</td>
                <td style="padding: 8px 0; color: #fff; font-size: 14px;">${location}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #333; margin: 16px 0;" />
            <p style="color: #888; font-size: 14px; margin: 0 0 8px 0;">Message</p>
            <p style="color: #fff; font-size: 15px; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
