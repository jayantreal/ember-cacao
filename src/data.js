export const CONTACT = { brand: "Ember & Cacao", whatsapp: "918076840559", phone: "+91 80768 40559", email: "drvector72@gmail.com", instagram: "@embercacao" };
export const CATEGORIES = ["All", "Dark", "Milk", "Pralines", "Gifting Boxes"];
export const fmt = (n) => "₹" + n.toLocaleString("en-IN");
// c = chocolate colour, bg = tile backdrop (stand-ins until real photos are added)
export const PRODUCTS = [
  { id: "dss", name: "Dark Sea Salt", cat: "Dark", price: 450, weight: "80 g bar", tags: ["70% cocoa", "Sea salt", "Red berry"], c: "#3b2022", bg: "#5a3a3d", desc: "Single-origin dark chocolate with a clean snap, finished with flaked sea salt." },
  { id: "esp", name: "Espresso Truffle Bar", cat: "Dark", price: 520, weight: "90 g bar", tags: ["64% cocoa", "Espresso", "Roasted"], c: "#2a1417", bg: "#4a2a2c", desc: "A cocoa shell around a silky espresso truffle centre." },
  { id: "hzp", name: "Hazelnut Praline", cat: "Pralines", price: 750, weight: "Box of 12", tags: ["Hazelnut", "Toasted", "Vanilla"], c: "#5a3520", bg: "#7a4c30", desc: "Hazelnuts roasted in-house and stone-ground into a smooth praline." },
  { id: "rrb", name: "Ruby Raspberry", cat: "Milk", price: 600, weight: "80 g bar", tags: ["Ruby cocoa", "Raspberry", "Tart"], c: "#a4505f", bg: "#7a3344", desc: "Naturally pink ruby chocolate with freeze-dried raspberry." },
  { id: "mcs", name: "Milk Caramel Squares", cat: "Milk", price: 480, weight: "Box of 12", tags: ["45% milk", "Caramel", "Creamy"], c: "#6a3d24", bg: "#8a5a3a", desc: "Soft salted caramel inside a creamy milk chocolate shell." },
  { id: "gbx", name: "Signature Gift Box", cat: "Gifting Boxes", price: 1800, weight: "Box of 16", tags: ["Assorted", "Handwritten card", "Keepsake box"], c: "#D4AF37", bg: "#4a3a1a", desc: "Sixteen of our favourites in a keepsake box with a handwritten card." },
];
