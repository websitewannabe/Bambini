import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
              Bambini's<br />World
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Bringing beauty to your special moments with exquisite children's formal wear and everyday essentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3">
                Shop Now
              </Button>
              <Button variant="outline" className="border-light-blue text-light-blue hover:bg-light-blue hover:text-white px-8 py-3">
                Visit Our Store
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/images/hero.png"
              alt="Bambini's World storefront"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
