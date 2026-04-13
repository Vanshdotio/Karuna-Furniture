import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/types";

interface ProductsSectionProps {
  title: string;
  description?: string;
  products: Product[];
  viewAllLink?: string;
}

export function ProductsSection({
  title,
  description,
  products,
  viewAllLink,
}: ProductsSectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
            {description && (
              <p className="mt-2 text-muted-foreground max-w-2xl">
                {description}
              </p>
            )}
          </div>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
