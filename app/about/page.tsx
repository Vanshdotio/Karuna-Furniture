import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle } from "lucide-react";

const values = [
  {
    title: "Quality Craftsmanship",
    description: "Every piece is crafted with attention to detail using premium materials that stand the test of time.",
  },
  {
    title: "Sustainable Sourcing",
    description: "We partner with responsible suppliers and use sustainably sourced wood and eco-friendly materials.",
  },
  {
    title: "Timeless Design",
    description: "Our Scandinavian-inspired designs transcend trends, creating furniture that remains beautiful for years.",
  },
  {
    title: "Customer First",
    description: "From design to delivery, we prioritize your experience with responsive support and care.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-accent-foreground uppercase tracking-wider">
                Our Story
              </span>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-foreground text-balance">
                Bringing Scandinavian Design to Your Home
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Founded with a passion for minimalist design and quality craftsmanship, 
                Nordic Living brings the best of Scandinavian furniture traditions to 
                homes around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Image + Story */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/founder.jpg"
                  alt="Our workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                  A Legacy of Excellence
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  What started as a small workshop in Portland has grown into a 
                  beloved furniture brand trusted by thousands of homeowners. Our 
                  journey began with a simple belief: that beautiful, well-made 
                  furniture should be accessible to everyone.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Today, we continue to honor that founding principle by carefully 
                  designing each piece to bring comfort, functionality, and timeless 
                  beauty to your living spaces. Every chair, table, and sofa tells 
                  a story of dedication to craft and respect for materials.
                </p>
                <div className="mt-8 flex items-center gap-8">
                  <div>
                    <p className="text-3xl font-semibold text-foreground">10K+</p>
                    <p className="text-sm text-muted-foreground">Happy Homes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-foreground">15+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-foreground">150+</p>
                    <p className="text-sm text-muted-foreground">Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                Our Values
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do, from design to delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-secondary mb-4">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our collection and find the perfect pieces to create 
              your dream home.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
