export default function Tile({ p, className = "" }) {
  return (
    <div className={"grid place-items-center overflow-hidden " + className} style={{ background: p.bg }}>
      <div className="grid aspect-[3/2] w-3/5 grid-cols-4 grid-rows-3 gap-1 rounded bg-black/30 p-1.5 shadow-xl transition-transform duration-500 group-hover:scale-110">
        {Array.from({ length: 12 }, (_, i) => <i key={i} className="rounded-sm shadow-inner" style={{ background: p.c }} />)}
      </div>
    </div>
  );
}
