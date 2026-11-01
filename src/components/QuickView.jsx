import { useEffect } from "react";
import { X } from "lucide-react";
import Tile from "./Tile";
import { fmt } from "../data";
export default function QuickView({ p, onClose, onAdd }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.name}>
      <div className="group relative grid w-full max-w-3xl overflow-hidden rounded-sm bg-[#FDFBF7] text-stone-900 md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-1.5"><X size={18} /></button>
        <Tile p={p} className="min-h-64" />
        <div className="flex flex-col gap-3 p-7">
          <h3 className="font-serif text-3xl font-semibold">{p.name}</h3>
          <p className="text-sm text-stone-500">{p.weight} · {p.tags.join(", ")}</p>
          <p>{p.desc}</p>
          <p className="text-xl font-medium">{fmt(p.price)}</p>
          <button onClick={() => { onAdd(p.id); onClose(); }} className="mt-auto rounded-sm bg-stone-900 px-6 py-3 text-stone-100 transition hover:bg-amber-600">Add to inquiry list</button>
        </div>
      </div>
    </div>
  );
}
