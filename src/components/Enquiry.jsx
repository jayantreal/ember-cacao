import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Qty from "./Qty";
import { CONTACT, fmt } from "../data";

// Enquiries are emailed here through FormSubmit (no key needed)
const SEND_TO = "drvector72@gmail.com";

const empty = { name: "", phone: "", email: "", street: "", city: "", postal: "", notes: "" };
const inp = "w-full rounded-sm border border-stone-300 bg-white px-3.5 py-2.5 text-stone-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30";

function validate(f, n) {
  const e = {};
  if (!n) e.items = "Add at least one item from the shop.";
  if (f.name.trim().length < 2) e.name = "Enter your full name.";
  if (!/^\+?[\d\s-]{8,15}$/.test(f.phone.trim())) e.phone = "Enter a phone number we can reach you on.";
  if (f.email.trim() && !/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (!f.street.trim()) e.street = "Enter your street address.";
  if (!f.city.trim()) e.city = "Enter your city.";
  if (!/^[\w\s-]{4,10}$/.test(f.postal.trim())) e.postal = "Enter a valid postal code.";
  return e;
}

const Field = ({ label, error, children }) => (
  <label className="grid gap-1.5 text-sm font-medium">{label}{children}{error && <span role="alert" className="font-normal text-red-700">{error}</span>}</label>
);

export default function Enquiry({ lines, total, setQty, clear }) {
  const [f, setF] = useState(empty), [err, setErr] = useState({}), [sent, setSent] = useState(null);
  const [busy, setBusy] = useState(false), [fail, setFail] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const er = validate(f, lines.length);
    setErr(er);
    if (Object.keys(er).length) return;

    const msg = ["Chocolate order enquiry", "", ...lines.map(({ p, q }) => `${q} x ${p.name} (${fmt(p.price * q)})`), "", "Estimated total: " + fmt(total), "",
      "Name: " + f.name, "Phone: " + f.phone, ...(f.email ? ["Email: " + f.email] : []), `Address: ${f.street}, ${f.city}, ${f.postal}`, ...(f.notes ? ["Notes: " + f.notes] : [])].join("\n");

    setBusy(true);
    setFail("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/" + SEND_TO, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New chocolate order enquiry from " + f.name,
          name: f.name,
          phone: f.phone,
          email: f.email.trim() || undefined,
          message: msg,
        }),
      });
      const data = await res.json();
      if (String(data.success) !== "true") throw new Error(data.message || "Send failed");
      setSent(msg);
      clear();
    } catch (err) {
      console.error(err);
      setFail("We couldn’t send your enquiry (" + err.message + "). Please try again, or message us on WhatsApp.");
    }
    setBusy(false);
  };

  if (sent) return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <div className="rounded-sm bg-[#FDFBF7] p-8 text-stone-900">
        <CheckCircle2 className="text-amber-600" size={36} />
        <h1 className="mt-3 font-serif text-3xl font-semibold">Thank you!</h1>
        <p className="mt-3">Your chocolate order enquiry has been received. Our concierge team will call/message your phone number shortly to confirm payment and dispatch.</p>
        <p className="mt-4 text-sm text-stone-500">Prefer WhatsApp? You can also send the details there:</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a target="_blank" rel="noopener" href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(sent)}`} className="rounded-sm bg-stone-900 px-5 py-2.5 text-stone-100 transition hover:bg-amber-600">Send on WhatsApp</a>
        </div>
      </div>
    </section>
  );

  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-serif text-5xl text-stone-100">Concierge enquiry</h1>
      <p className="mb-8 mt-3 text-stone-400">No online payment. Tell us what you’d like and where to send it, and we’ll confirm the details with you.</p>
      <form onSubmit={submit} noValidate className="grid gap-5 rounded-sm bg-[#FDFBF7] p-6 text-stone-900 md:p-8">
        <div>
          <p className="mb-2 text-sm font-medium">Your selection</p>
          {!lines.length && <p className="text-sm text-stone-500">Nothing selected. <a href="#/shop" className="text-amber-700 underline">Browse the shop</a></p>}
          {lines.map(({ p, q }) => (
            <div key={p.id} className="flex items-center justify-between gap-3 border-b border-stone-200 py-3">
              <span>{p.name} <span className="text-sm text-stone-500">· {fmt(p.price)}</span></span>
              <Qty q={q} name={p.name} onChange={(n) => setQty(p.id, n)} />
            </div>
          ))}
          {lines.length > 0 && <p className="mt-3 flex justify-between font-medium"><span>Estimated total</span><span>{fmt(total)}</span></p>}
          {err.items && <p role="alert" className="mt-2 text-sm text-red-700">{err.items}</p>}
        </div>
        <Field label="Full name" error={err.name}><input className={inp} value={f.name} onChange={set("name")} autoComplete="name" /></Field>
        <Field label="Phone number" error={err.phone}><input className={inp} type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91 98765 43210" /></Field>
        <Field label="Email (optional)" error={err.email}><input className={inp} type="email" value={f.email} onChange={set("email")} autoComplete="email" placeholder="you@example.com" /></Field>
        <Field label="Street address" error={err.street}><input className={inp} value={f.street} onChange={set("street")} autoComplete="street-address" /></Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="City" error={err.city}><input className={inp} value={f.city} onChange={set("city")} autoComplete="address-level2" /></Field>
          <Field label="Postal code" error={err.postal}><input className={inp} value={f.postal} onChange={set("postal")} autoComplete="postal-code" /></Field>
        </div>
        <Field label="Notes: gift message or delivery instructions"><textarea className={inp} rows="3" value={f.notes} onChange={set("notes")} /></Field>
        {fail && <p role="alert" className="text-sm text-red-700">{fail}</p>}
        <button disabled={busy} className="rounded-sm bg-amber-500 px-6 py-3.5 font-medium text-stone-900 transition hover:bg-amber-400 active:scale-[.98] disabled:opacity-60">
          {busy ? "Sending…" : "Submit concierge enquiry"}
        </button>
      </form>
    </section>
  );
}
