import { HeartHandshake, Leaf, Package } from "lucide-react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data";
const PROMISES = [
  [HeartHandshake, "Ethically sourced", "We buy directly from small farms and pay above fair-trade prices."],
  [Leaf, "Organic ingredients", "Organic cocoa, real vanilla and fruit. No palm oil, no artificial flavours."],
  [Package, "Small batch", "Poured weekly in small runs, so it reaches you fresh."],
];
export default function Home({ onAdd, onView }) {
  return (
    <>
      <section className="px-5 pb-24 pt-16 text-stone-100">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">Crafted for the senses</h1>
            <p className="mt-6 max-w-md text-lg text-stone-300">Bean-to-bar chocolate, roasted, ground and tempered in small batches, so every piece tastes of where it grew.</p>
            <a href="#/shop" className="mt-8 inline-block rounded-sm bg-amber-500 px-8 py-3.5 font-medium text-stone-900 transition hover:bg-amber-400 active:scale-95">Explore collection</a>
          </div>
          <svg viewBox="0 0 400 300" role="img" aria-label="A chocolate bar snapped in two" className="mx-auto w-full max-w-sm">
            <rect x="30" y="70" width="168" height="170" rx="8" fill="#4a2a2c" />
            <path d="M206 70h156a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8H206l-8-22 9-26-9-30 8-28-8-26z" fill="#3b2022" transform="rotate(5 300 160)" />
            <path d="M198 70l8 26-8 28 9 30-9 26 8 22" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </section>
      <section className="bg-stone-950/60 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-serif text-4xl text-stone-100">Signature pieces</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} onAdd={onAdd} onView={onView} />)}
          </div>
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {PROMISES.map(([Icon, t, d]) => (
            <div key={t} className="border-t-2 border-amber-500 pt-5 text-stone-200">
              <Icon className="mb-3 text-amber-500" />
              <h3 className="font-serif text-xl text-stone-100">{t}</h3>
              <p className="mt-2 text-stone-400">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
