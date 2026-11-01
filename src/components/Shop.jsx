import { useState } from "react";
import ProductCard from "./ProductCard";
import { CATEGORIES, PRODUCTS } from "../data";
export default function Shop({ onAdd, onView }) {
  const [cat, setCat] = useState("All");
  const list = PRODUCTS.filter((p) => cat === "All" || p.cat === cat);
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-serif text-5xl text-stone-100">The collection</h1>
      <div className="my-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {CATEGORIES.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={"rounded-full border px-4 py-1.5 text-sm transition " + (cat === c ? "border-amber-500 bg-amber-500 text-stone-900" : "border-amber-500/50 text-stone-300 hover:border-amber-500")}>{c}</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <ProductCard key={p.id} p={p} onAdd={onAdd} onView={onView} />)}
      </div>
      {!list.length && <p className="text-stone-400">Nothing in this category yet.</p>}
    </section>
  );
}
