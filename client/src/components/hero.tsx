import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section 
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/assets/images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Bambini's<br />World
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              Bringing beauty to your special moments with exquisite children's formal wear and everyday essentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3">
                Shop Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 bg-white/10 backdrop-blur-sm">
                Visit Our Store
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Content area - you can add additional content here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
