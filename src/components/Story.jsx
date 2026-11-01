import { PRODUCTS } from "../data";
export function Story() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-stone-300">
      <h1 className="font-serif text-5xl text-stone-100">Our story</h1>
      <p className="mt-6 text-lg">Ember &amp; Cacao started with one question: why does most chocolate taste the same? We began roasting beans in a small kitchen and kept the batches small so we could keep tasting every one.</p>
      <p className="mt-4 text-lg">Today we still buy from a handful of farms we know by name, roast, grind and temper in-house, and pack every order by hand. Replace this text with your own story.</p>
    </section>
  );
}
export function Tasting() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-serif text-5xl text-stone-100">Tasting notes</h1>
      <div className="mt-8 divide-y divide-amber-500/20">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="py-5">
            <h2 className="font-serif text-2xl text-amber-500">{p.name}</h2>
            <p className="mt-1 text-stone-400">{p.tags.join(" · ")}</p>
            <p className="mt-2 text-stone-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
