import { Plus } from "lucide-react";
import Tile from "./Tile";
import { fmt } from "../data";
export default function ProductCard({ p, onAdd, onView }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-[#FDFBF7] text-stone-900 shadow-lg">
      <button onClick={() => onView(p)} aria-label={"Quick view: " + p.name} className="block aspect-[4/3] w-full"><Tile p={p} className="h-full w-full" /></button>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-serif text-xl font-semibold">{p.name}</h3>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => <span key={t} className="rounded-full border border-amber-500/60 px-2.5 py-0.5 text-xs text-amber-800">{t}</span>)}
        </div>
        <p className="text-sm text-stone-500">{p.weight}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-lg font-medium">{fmt(p.price)}</span>
          <button onClick={() => onAdd(p.id)} className="flex items-center gap-1.5 rounded-sm bg-stone-900 px-3.5 py-2 text-sm text-stone-100 transition hover:bg-amber-600 active:scale-95"><Plus size={16} />Add to inquiry list</button>
        </div>
      </div>
    </article>
  );
}
