import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, phone, message } = body as Record<string, string>;

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ error: "Chybí povinná pole." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { error } = await resend.emails.send({
    from: "Poptávka <onboarding@resend.dev>",
    to: ["zizalajan@atlas.cz"],
    replyTo: undefined,
    subject: `Nová poptávka — ${name.trim()}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="margin-bottom:16px">Nová poptávka z webu</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr>
            <td style="padding:8px 0;font-weight:bold;width:100px">Jméno:</td>
            <td style="padding:8px 0">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:bold">Telefon:</td>
            <td style="padding:8px 0">${phone.trim()}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:bold;vertical-align:top">Zpráva:</td>
            <td style="padding:8px 0;white-space:pre-wrap">${message.trim()}</td>
          </tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ error: "Nepodařilo se odeslat zprávu. Zkuste to znovu." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export const config = { runtime: "edge" };
