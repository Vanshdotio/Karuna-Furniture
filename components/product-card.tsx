"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/types";
import { useCart } from "@/components/cart-provider";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-0 bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/shop/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.isNewArrival && (
            <span className="absolute left-3 top-3 bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
              New
            </span>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/shop/${product.id}`}>
          <h3 className="font-medium text-foreground transition-colors hover:text-muted-foreground">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">
          ${product.price.toLocaleString()}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-3 w-full gap-2"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
