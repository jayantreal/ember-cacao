import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CONTACT } from "../data";
const LINKS = [["Shop", "shop"], ["Our Story", "story"], ["Tasting Notes", "tasting"], ["Enquiry / Custom Order", "enquiry"]];
export default function Header({ count, onCart, route }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#1c1214]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#/" className="font-serif text-2xl font-bold text-amber-500">{CONTACT.brand}</a>
        <nav className="hidden gap-7 md:flex" aria-label="Main">
          {LINKS.map(([t, r]) => <a key={r} href={"#/" + r} className={"text-sm transition hover:text-amber-500 " + (route === r ? "text-amber-500" : "text-stone-300")}>{t}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onCart} aria-label="Open inquiry list" className="relative p-2 text-stone-200 transition hover:text-amber-500">
            <ShoppingBag size={22} />
            {count > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-amber-500 px-1 text-xs font-semibold text-stone-900">{count}</span>}
          </button>
          <button className="p-2 text-stone-200 md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-amber-500/20 px-5 py-4 md:hidden" aria-label="Mobile">
          {LINKS.map(([t, r]) => <a key={r} href={"#/" + r} onClick={() => setOpen(false)} className="text-stone-200">{t}</a>)}
        </nav>
      )}
    </header>
  );
}
