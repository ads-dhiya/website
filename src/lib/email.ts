/** Branded HTML emails for /api/contact. Table layout + inline styles so Gmail, Outlook and Apple Mail render them the same. */
import { site } from "../data/site";

const C = { chalk: "#F7F0ED", card: "#FFFFFF", ink: "#221A21", sub: "#654B75", lilac: "#EAE0F0", soft: "#C8B1D6", plum: "#250B1E", plumText: "#FFF9FE", accent: "#9B5DE5" };
const FONT = `'Hanken Grotesk',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif`;
const MONO = `'IBM Plex Mono',Menlo,Consolas,monospace`;
const LOGO = `${site.url}/media/email-logo.png`;

const LABELS: Record<string, string> = {
  name: "Name", email: "Email", company: "Company", role: "Role", segment: "They run", capacity: "Capacity",
  firm: "Firm", stage: "They back", message: "Message", page: "Sent from",
};
export const label = (k: string) => LABELS[k] ?? k[0].toUpperCase() + k.slice(1);

export const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const nl2br = (s: string) => esc(s).replace(/\n/g, "<br>");

export type Field = [key: string, value: string];

function shell(preheader: string, body: string) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light">
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet"><title>${esc(site.name)}</title></head>
<body style="margin:0;padding:0;background:${C.chalk};-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.chalk}"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px">
  <tr><td style="padding:0 4px 20px"><a href="${site.url}" style="text-decoration:none"><img src="${LOGO}" width="120" height="49" alt="Dhiya" style="display:block;border:0;width:120px;height:auto"></a></td></tr>
  <tr><td style="background:${C.card};border:1px solid ${C.lilac};border-radius:8px;overflow:hidden">
    <div style="height:4px;line-height:4px;font-size:0;background:${C.plum}">&nbsp;</div>
    <div style="padding:32px 32px 28px;font-family:${FONT};color:${C.ink}">${body}</div>
  </td></tr>
  <tr><td style="padding:22px 4px 0;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.sub}">
    ${esc(site.legal.entity)} · <a href="${site.url}" style="color:${C.sub}">dhiya.ai</a> · <a href="${site.url}/privacy" style="color:${C.sub}">Privacy</a>
  </td></tr>
</table></td></tr></table></body></html>`;
}

const eyebrow = (t: string) => `<p style="margin:0 0 10px;font-family:${MONO};font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:${C.sub}">${esc(t)}</p>`;
const h1 = (t: string) => `<h1 style="margin:0 0 14px;font-family:${FONT};font-size:24px;line-height:1.25;font-weight:700;color:${C.ink}">${esc(t)}</h1>`;
const p = (html: string) => `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${C.ink}">${html}</p>`;
const button = (href: string, text: string) => `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 4px"><tr><td style="background:${C.plum};border-radius:6px"><a href="${href}" style="display:inline-block;padding:12px 20px;font-family:${FONT};font-size:14px;font-weight:600;color:${C.plumText};text-decoration:none">${esc(text)}</a></td></tr></table>`;

function fieldTable(fields: Field[]) {
  const rows = fields.map(([k, v], i) => `<tr><td style="padding:12px 0;${i ? `border-top:1px solid ${C.lilac};` : ""}vertical-align:top">
    <div style="font-family:${MONO};font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:${C.sub};padding-bottom:3px">${esc(label(k))}</div>
    <div style="font-family:${FONT};font-size:15px;line-height:1.5;color:${C.ink};word-break:break-word">${k === "email" ? `<a href="mailto:${esc(v)}" style="color:${C.ink}">${esc(v)}</a>` : nl2br(v)}</div>
  </td></tr>`).join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 22px;border-top:1px solid ${C.soft};border-bottom:1px solid ${C.soft}">${rows}</table>`;
}

const textTable = (fields: Field[]) => fields.map(([k, v]) => `${label(k)}: ${v}`).join("\n");

/** Notification to our inbox. */
export function notifyEmail(kind: "partner" | "investor", fields: Field[]) {
  const get = (k: string) => fields.find(f => f[0] === k)?.[1] ?? "";
  const name = get("name"), org = get("company") || get("firm");
  const title = kind === "investor" ? "New investor intro" : "New design partner enquiry";
  const subject = `${kind === "investor" ? "Investor intro" : "Design partner enquiry"} · ${org || name}`;
  const html = shell(`${name}${org ? ` from ${org}` : ""} wrote in through the website.`,
    eyebrow(kind === "investor" ? "Investors" : "Design partners") +
    h1(title) +
    p(`<b>${esc(name)}</b>${org ? ` from <b>${esc(org)}</b>` : ""} filled in the form on dhiya.ai. Hit reply to answer them directly.`) +
    fieldTable(fields) +
    button(`mailto:${encodeURIComponent(get("email"))}?subject=${encodeURIComponent("Re: " + subject)}`, `Reply to ${name.split(" ")[0] || "them"} →`));
  const text = `${title}\n\n${textTable(fields)}\n\nReply to this email to answer ${name}.`;
  return { subject, html, text };
}

/** Acknowledgement to the person who filled in the form. Only echoes the short, structured fields — never the free-text message — so the form can't be used to send arbitrary text to strangers. */
export function confirmEmail(kind: "partner" | "investor", fields: Field[]) {
  const first = (fields.find(f => f[0] === "name")?.[1] ?? "").split(/\s+/)[0].slice(0, 40);
  const safe = fields.filter(([k]) => k !== "message" && k !== "page" && k !== "email").map(([k, v]) => [k, v.slice(0, 80)] as Field);
  const who = kind === "investor" ? "the founders" : "our team";
  const subject = kind === "investor" ? "Thanks for reaching out to Dhiya" : "Thanks for your interest in Dhiya";
  const html = shell(`We've got your note. ${kind === "investor" ? "The founders" : "Someone from our team"} will write back within two working days.`,
    eyebrow("Message received") +
    h1(first ? `Thanks, ${first}.` : "Thanks for getting in touch.") +
    p(`We've got your details and passed them to ${who}. A real person will write back within two working days. Nothing goes on a mailing list.`) +
    p(`Here's what you sent us:`) +
    fieldTable(safe) +
    p(`Want to add something? Just reply to this email.`) +
    `<p style="margin:22px 0 0;font-size:15px;line-height:1.6;color:${C.ink}">— The ${esc(site.legal.entity)} team</p>`);
  const text = `${first ? `Thanks, ${first}.` : "Thanks for getting in touch."}\n\nWe've got your details and passed them to ${who}. A real person will write back within two working days.\n\nHere's what you sent us:\n${textTable(safe)}\n\nWant to add something? Just reply to this email.\n\n— The ${site.legal.entity} team\n${site.url}`;
  return { subject, html, text };
}
