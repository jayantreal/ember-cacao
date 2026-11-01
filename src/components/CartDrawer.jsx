import { X } from "lucide-react";
import Qty from "./Qty";
import { fmt } from "../data";
export default function CartDrawer({ open, onClose, lines, total, setQty }) {
  return (
    <div className={"fixed inset-0 z-50 " + (open ? "" : "pointer-events-none")} aria-hidden={!open}>
      <div onClick={onClose} className={"absolute inset-0 bg-black/60 transition-opacity " + (open ? "opacity-100" : "opacity-0")} />
      <aside className={"absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#FDFBF7] text-stone-900 shadow-2xl transition-transform duration-300 " + (open ? "translate-x-0" : "translate-x-full")}>
        <div className="flex items-center justify-between border-b border-stone-200 p-5">
          <h2 className="font-serif text-2xl font-semibold">Your inquiry list</h2>
          <button onClick={onClose} aria-label="Close"><X /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {!lines.length && <p className="text-stone-500">Nothing here yet. Add chocolates from the shop.</p>}
          {lines.map(({ p, q }) => (
            <div key={p.id} className="flex items-center justify-between gap-3 border-b border-stone-200 py-4">
              <div><p className="font-medium">{p.name}</p><p className="text-sm text-stone-500">{fmt(p.price)} · {p.weight}</p></div>
              <Qty q={q} name={p.name} onChange={(n) => setQty(p.id, n)} />
            </div>
          ))}
        </div>
        <div className="border-t border-stone-200 p-5">
          <p className="mb-4 flex justify-between font-medium"><span>Estimated total</span><span>{fmt(total)}</span></p>
          <a href="#/enquiry" onClick={onClose} className="block rounded-sm bg-amber-500 px-6 py-3 text-center font-medium text-stone-900 transition hover:bg-amber-400">Continue to enquiry</a>
        </div>
      </aside>
    </div>
  );
}
