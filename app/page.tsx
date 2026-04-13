import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { FounderSection } from "@/components/founder-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FeaturedSection } from "@/components/featured-section";
import { Footer } from "@/components/footer";
import { getNewArrivals, getTopProducts, getFeaturedProducts } from "@/lib/data";

export default function HomePage() {
  const newArrivals = getNewArrivals();
  const topProducts = getTopProducts();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* New Arrivals */}
        <ProductsSection
          title="New Arrivals"
          description="Discover our latest additions, designed with the same commitment to quality and craftsmanship."
          products={newArrivals}
          viewAllLink="/shop?filter=new"
        />

        {/* Top Products */}
        <div className="bg-secondary/30">
          <ProductsSection
            title="Best Sellers"
            description="Our most loved pieces, chosen by thousands of happy homes."
            products={topProducts}
            viewAllLink="/shop?sort=popular"
          />
        </div>

        {/* Founder Section */}
        <FounderSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Featured Collection */}
        <FeaturedSection />

        {/* Most Purchased */}
        <ProductsSection
          title="Most Popular"
          description="Top picks from our customers this season."
          products={featuredProducts}
          viewAllLink="/shop"
        />
      </main>

      <Footer />
    </div>
  );
}
