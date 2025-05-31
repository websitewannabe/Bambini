import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Bambini's
              <br />
              World
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              Children's Apparel & Gift Boutique
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 bg-white/10 backdrop-blur-sm"
                onClick={() => window.location.href = "/store"}
              >
                Shop Now
              </Button>
              <Button 
                className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3"
                onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=1589+N+Main+Street+Warrington%2C+PA+18976", "_blank")}
              >
                Visit Our Store
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/bambiniShop.webp"
              alt="Bambini's World Shop"
              className="rounded-xl shadow-lg w-full h-auto border-4 border-light-blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}