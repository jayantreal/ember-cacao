import { Minus, Plus } from "lucide-react";
const b = "grid h-8 w-8 place-items-center rounded-sm border border-stone-300 text-stone-800 transition hover:border-amber-500 hover:text-amber-600";
export default function Qty({ q, onChange, name }) {
  return (
    <div className="flex items-center gap-1.5">
      <button type="button" className={b} aria-label={"Remove one " + name} onClick={() => onChange(q - 1)}><Minus size={14} /></button>
      <input type="number" min="0" value={q} aria-label={"Quantity of " + name} onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))} className="h-8 w-12 rounded-sm border border-stone-300 bg-white text-center text-sm text-stone-900" />
      <button type="button" className={b} aria-label={"Add one " + name} onClick={() => onChange(q + 1)}><Plus size={14} /></button>
    </div>
  );
}
