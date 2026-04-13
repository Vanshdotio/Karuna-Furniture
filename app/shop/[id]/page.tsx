"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
import { getProductById, products } from "@/lib/data";
import { Minus, Plus, ShoppingBag, Truck, RotateCcw, Shield } from "lucide-react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-foreground">
                Shop
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.isNewArrival && (
                  <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                    New
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                  {product.name}
                </h1>
                <p className="mt-4 text-2xl font-medium text-foreground">
                  ${product.price.toLocaleString()}
                </p>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Stock Status */}
                <div className="mt-6">
                  {product.stock > 0 ? (
                    <span className="text-sm text-accent-foreground">
                      In Stock ({product.stock} available)
                    </span>
                  ) : (
                    <span className="text-sm text-destructive">Out of Stock</span>
                  )}
                </div>

                {/* Quantity & Add to Cart */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    size="lg"
                    className="flex-1 gap-2"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Free shipping over $500
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <RotateCcw className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        30-day returns
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        5-year warranty
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Details Accordion could go here */}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-secondary/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
