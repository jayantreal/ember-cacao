import { CONTACT } from "../data";
export default function Footer() {
  return (
    <footer className="border-t border-amber-500/20 px-5 py-12 text-sm text-stone-400">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div><p className="font-serif text-xl text-amber-500">{CONTACT.brand}</p><p className="mt-2 max-w-xs">Small-batch, bean-to-bar chocolate made by hand and sent with care.</p></div>
        <nav className="flex flex-col gap-2" aria-label="Footer">
          <a href="#/shop" className="hover:text-amber-500">Shop</a><a href="#/story" className="hover:text-amber-500">Our story</a>
          <a href="#/tasting" className="hover:text-amber-500">Tasting notes</a><a href="#/enquiry" className="hover:text-amber-500">Enquiry</a>
        </nav>
        <div className="flex flex-col gap-2">
          <a href={"tel:" + CONTACT.phone.replace(/\s/g, "")} className="hover:text-amber-500">{CONTACT.phone}</a>
          <a href={"mailto:" + CONTACT.email} className="hover:text-amber-500">{CONTACT.email}</a>
          <span>Instagram {CONTACT.instagram}</span>
        </div>
      </div>
    </footer>
  );
}
