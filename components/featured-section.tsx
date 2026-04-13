import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedSection() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large Featured Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:row-span-2 overflow-hidden rounded-lg">
            <Image
              src="/featured.jpg"
              alt="Featured bedroom collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
                Featured Collection
              </span>
              <h3 className="mt-2 font-serif text-2xl lg:text-3xl font-semibold text-primary-foreground">
                Bedroom Essentials
              </h3>
              <p className="mt-2 text-primary-foreground/90 max-w-md">
                Create your peaceful sanctuary with our curated bedroom collection.
              </p>
              <Button variant="secondary" className="mt-4" asChild>
                <Link href="/collections/bedroom">Shop Now</Link>
              </Button>
            </div>
          </div>

          {/* Smaller Cards */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/hero.jpg"
              alt="Living room collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                Living Room
              </h3>
              <Link
                href="/collections/living-room"
                className="mt-2 inline-block text-sm text-primary-foreground/90 hover:text-primary-foreground underline"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary flex items-center justify-center">
            <div className="text-center p-6">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Coming Soon
              </span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                Outdoor Collection
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Scandinavian design meets outdoor living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
