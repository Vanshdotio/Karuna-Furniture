import { Product, Testimonial } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Oslo Lounge Chair",
    description: "A beautifully crafted lounge chair with oak legs and premium wool upholstery. Perfect for creating a cozy reading corner.",
    price: 1299,
    category: "chairs",
    image: "/products/lounge-chair.jpg",
    stock: 15,
    featured: true,
    isNewArrival: true,
    purchaseCount: 234,
  },
  {
    id: "2",
    name: "Bergen Dining Table",
    description: "Solid oak dining table with clean lines and natural finish. Seats 6-8 people comfortably.",
    price: 1899,
    category: "tables",
    image: "/products/dining-table.jpg",
    stock: 8,
    featured: true,
    isNewArrival: false,
    purchaseCount: 456,
  },
  {
    id: "3",
    name: "Stockholm Sofa",
    description: "Three-seater sofa in premium linen fabric with solid ash wood frame. Scandinavian elegance at its finest.",
    price: 2499,
    category: "sofas",
    image: "/products/sofa.jpg",
    stock: 12,
    featured: true,
    isNewArrival: true,
    purchaseCount: 189,
  },
  {
    id: "4",
    name: "Copenhagen Bookshelf",
    description: "Minimalist bookshelf with adjustable shelves in light oak. Perfect for displaying books and décor.",
    price: 899,
    category: "storage",
    image: "/products/bookshelf.jpg",
    stock: 20,
    featured: false,
    isNewArrival: true,
    purchaseCount: 312,
  },
  {
    id: "5",
    name: "Malmö Side Table",
    description: "Compact side table with tapered legs and natural wood grain. An essential accent piece.",
    price: 349,
    category: "tables",
    image: "/products/side-table.jpg",
    stock: 30,
    featured: false,
    isNewArrival: true,
    purchaseCount: 567,
  },
  {
    id: "6",
    name: "Helsinki Bed Frame",
    description: "Platform bed frame in solid walnut with integrated headboard. Queen size, minimalist design.",
    price: 1799,
    category: "beds",
    image: "/products/bed-frame.jpg",
    stock: 10,
    featured: true,
    isNewArrival: false,
    purchaseCount: 278,
  },
  {
    id: "7",
    name: "Aarhus Armchair",
    description: "Compact armchair with curved backrest and oak legs. Upholstered in soft bouclé fabric.",
    price: 899,
    category: "chairs",
    image: "/products/armchair.jpg",
    stock: 18,
    featured: false,
    isNewArrival: true,
    purchaseCount: 145,
  },
  {
    id: "8",
    name: "Gothenburg Coffee Table",
    description: "Round coffee table with solid oak top and powder-coated steel legs. Timeless Scandinavian design.",
    price: 649,
    category: "tables",
    image: "/products/coffee-table.jpg",
    stock: 25,
    featured: true,
    isNewArrival: false,
    purchaseCount: 423,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Anderson",
    image: "/testimonials/person-1.jpg",
    rating: 5,
    text: "This furniture completely transformed my living room. The quality and craftsmanship are outstanding. Every piece feels like it was made just for my home.",
  },
  {
    id: "2",
    name: "Michael Chen",
    image: "/testimonials/person-2.jpg",
    rating: 5,
    text: "I've never experienced such attention to detail. The Oslo chair is now my favorite spot in the house. Worth every penny.",
  },
  {
    id: "3",
    name: "Emma Williams",
    image: "/testimonials/person-3.jpg",
    rating: 5,
    text: "Finally found furniture that matches my minimalist aesthetic. The natural materials and timeless design are exactly what I was looking for.",
  },
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "chairs", name: "Chairs" },
  { id: "tables", name: "Tables" },
  { id: "sofas", name: "Sofas" },
  { id: "beds", name: "Beds" },
  { id: "storage", name: "Storage" },
];

export function getNewArrivals() {
  return products.filter((p) => p.isNewArrival);
}

export function getTopProducts() {
  return [...products].sort((a, b) => (b.purchaseCount || 0) - (a.purchaseCount || 0)).slice(0, 4);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string) {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
