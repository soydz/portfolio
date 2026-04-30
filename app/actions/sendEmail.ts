'use server'

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function sendEmail(formdata: FormData) {
    // se obtienen los datos del formulario
    const email = formdata.get("email") as string;
    const message = formdata.get("message") as string;

    // validación de datos nulos
    if (!email || !message) {
        return {
            success: false,
            error: "MISSING_DATA"
        }
    }

    try {
        // uso de resend para enviar el correo
        await resend.emails.send({
            from: 'Portfolio <contacto@soydz.com>',
            to: `${toEmail}`,
            subject: `New Transmission: ${email}`,
            html: `
              <div style="font-family: monospace; color: #333;">
                <p style="color: #FF5C4F; font-weight: bold;">[ NEW MESSAGE RECEIVED ]</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p><strong>SENDER:</strong> ${email}</p>
                <p><strong>MESSAGE:</strong></p>
                <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #FF5C4F;">
                  ${message}
                </p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="font-size: 10px; color: #999;">Sent via Transmission_Protocol / Next.js Server Action</p>
              </div>
            `,
        });
        return {
            success: true
        }

    } catch {
        return { success: false, error: 'SERVER_ERROR' };
    }

}