import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-lg">
            <Image
              src="/founder.jpg"
              alt="Founder in workshop"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-sm font-medium text-accent-foreground uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Meet the Founder
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our furniture is crafted with simplicity, premium materials, and timeless 
              Scandinavian design. Every piece is created to bring warmth and harmony 
              into your home.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe that great design should be accessible to everyone. That&apos;s why 
              we focus on creating pieces that are both beautiful and functional, 
              designed to last for generations.
            </p>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Trusted by 10,000+ happy homes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Sustainably sourced materials
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Handcrafted with care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
