import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Scandinavian living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance leading-tight">
            Scandinavian-Inspired Furniture for a Clutter-Free Home
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl">
            Timeless furniture crafted for comfort, simplicity, and modern living. 
            Each piece is designed to bring warmth and harmony into your space.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/shop">Shop Collection</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/collections">Explore Designs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
