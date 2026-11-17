export const prerender = false;
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { site } from "../../data/site";
import { notifyEmail, confirmEmail, logoAttachment, type Field } from "../../lib/email";

/** POST /api/contact — JSON from forms.js. Emails the submission to INBOX and sends the visitor a branded acknowledgement, over SMTP (SMTP_* env vars). */
const INBOX = "dhiya@dhiya.ai";
const ORDER = ["name", "email", "company", "firm", "role", "segment", "capacity", "stage", "message", "page"];

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
const clean = (v: unknown) => String(v ?? "").trim().slice(0, 1000);
const env = (k: string) => process.env[k] ?? import.meta.env[k];

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try { data = await request.json(); } catch { return json({ ok: false, error: "bad json" }, 400); }
  if (clean(data.website)) return json({ ok: true });                       // honeypot
  const kind = data.kind === "investor" ? "investor" : "partner";
  const name = clean(data.name), email = clean(data.email);
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ ok: false, error: "missing" }, 400);

  const keys = [...ORDER, ...Object.keys(data).filter(k => !ORDER.includes(k))].filter(k => k !== "kind" && k !== "website");
  const fields: Field[] = keys.map(k => [k, clean(data[k])] as Field).filter(([, v]) => v)
    .map(([k, v]) => [k, k === "page" && v.startsWith("/") ? site.url + v : v] as Field);

  const host = env("SMTP_HOST"), user = env("SMTP_USER"), pass = env("SMTP_PASS");
  if (!host || !user || !pass) {
    console.error(`[contact] SMTP not configured — not sent\n${fields.map(f => f.join(": ")).join("\n")}`);
    return json({ ok: false, error: "mail not configured" }, 500);
  }
  const port = Number(env("SMTP_PORT") || 465);
  const from = env("MAIL_FROM") || `Dhiya Labs <${user}>`;
  const smtp = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });

  try {
    await smtp.sendMail({ from, to: INBOX, replyTo: `${name.replace(/["<>]/g, "")} <${email}>`, ...notifyEmail(kind, fields), attachments: [logoAttachment()] });
  } catch (e) {
    console.error("[contact] SMTP send failed", e);
    return json({ ok: false, error: "mail" }, 502);
  }
  // Best effort: our inbox already has the enquiry, so a failed acknowledgement shouldn't show the visitor an error.
  try { await smtp.sendMail({ from, to: email, replyTo: INBOX, ...confirmEmail(kind, fields), attachments: [logoAttachment()] }); }
  catch (e) { console.error("[contact] confirmation send failed", e); }
  return json({ ok: true });
};
