import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { Story, Tasting } from "./components/Story";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import QuickView from "./components/QuickView";
import { PRODUCTS } from "./data";

const getRoute = () => location.hash.replace("#/", "") || "home";
function useRoute() {
  const [r, setR] = useState(getRoute);
  useEffect(() => {
    const f = () => { setR(getRoute()); scrollTo(0, 0); };
    addEventListener("hashchange", f);
    return () => removeEventListener("hashchange", f);
  }, []);
  return r;
}

export default function App() {
  const route = useRoute();
  const [cart, setCart] = useState({});
  const [drawer, setDrawer] = useState(false);
  const [view, setView] = useState(null);
  const setQty = (id, q) => setCart((c) => { const n = { ...c }; q > 0 ? (n[id] = q) : delete n[id]; return n; });
  const add = (id) => setQty(id, (cart[id] || 0) + 1);
  const lines = Object.entries(cart).map(([id, q]) => ({ p: PRODUCTS.find((x) => x.id === id), q }));
  const total = lines.reduce((s, l) => s + l.p.price * l.q, 0);
  const count = lines.reduce((s, l) => s + l.q, 0);
  const page = { shop: <Shop onAdd={add} onView={setView} />, story: <Story />, tasting: <Tasting />,
    enquiry: <Enquiry lines={lines} total={total} setQty={setQty} clear={() => setCart({})} /> }[route]
    || <Home onAdd={add} onView={setView} />;
  return (
    <div className="min-h-screen text-stone-100">
      <Header count={count} onCart={() => setDrawer(true)} route={route} />
      <main>{page}</main>
      <Footer />
      <CartDrawer open={drawer} onClose={() => setDrawer(false)} lines={lines} total={total} setQty={setQty} />
      {view && <QuickView p={view} onClose={() => setView(null)} onAdd={add} />}
    </div>
  );
}
