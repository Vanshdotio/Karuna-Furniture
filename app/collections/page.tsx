import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const collections = [
  {
    id: "living-room",
    name: "Living Room",
    description: "Create a welcoming space with our curated living room collection.",
    image: "/hero.jpg",
    productCount: 24,
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Transform your bedroom into a peaceful sanctuary.",
    image: "/featured.jpg",
    productCount: 18,
  },
  {
    id: "dining",
    name: "Dining",
    description: "Gather around beautiful tables designed for connection.",
    image: "/products/dining-table.jpg",
    productCount: 12,
  },
  {
    id: "office",
    name: "Home Office",
    description: "Work from home in style with functional, beautiful furniture.",
    image: "/products/bookshelf.jpg",
    productCount: 8,
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground">
              Collections
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Explore our thoughtfully curated collections, each designed to bring 
              Scandinavian elegance to every room in your home.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/shop?category=${collection.id}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="text-sm text-primary-foreground/80">
                      {collection.productCount} Products
                    </span>
                    <h2 className="mt-1 font-serif text-2xl lg:text-3xl font-semibold text-primary-foreground">
                      {collection.name}
                    </h2>
                    <p className="mt-2 text-primary-foreground/90 max-w-md">
                      {collection.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
