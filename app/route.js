import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, service, message } = await req.json();

  try {
    await resend.emails.send({
      from:    "Paul Stuart AV <contact@paulstuartav.com>",
      to:      "paul@paulstuartav.com",
      subject: `New inquiry from ${name} — ${service}`,
      replyTo: email,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#3d6b60;margin-bottom:24px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;width:120px;">Name</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Service</td><td style="padding:8px 0;">${service || "Not specified"}</td></tr>
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #ddd;" />
          <p style="font-weight:600;margin-bottom:8px;">Message</p>
          <p style="line-height:1.7;color:#333;">${message}</p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #ddd;" />
          <p style="font-size:12px;color:#999;">Sent from paulstuartav.com contact form</p>
        </div>
      `,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
