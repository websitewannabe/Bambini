import { Button } from "@/components/ui/button";

export default function SpecialOccasions() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span style={{ color: '#F8B4BE' }}>A Dress For That</span><br />
              <span className="text-blue-600">Special Occasion</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From first communions to baptisms, we understand the importance of these precious moments. 
              Our collection features the finest fabrics and most beautiful designs to make your little one 
              feel special on their big day.
            </p>
            <Button className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3">
              View Collection
            </Button>
          </div>
          <div>
            <img
              src="/images/dressImage.webp"
              alt="Special occasion dresses"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Accessories Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/zebra.jpeg"
                alt="Zebra plush toy"
                className="rounded-lg shadow-md"
              />
              <img
                src="/images/babybling.webp"
                alt="Baby bling accessories"
                className="rounded-lg shadow-md"
              />
              <img
                src="/images/lion.jpeg"
                alt="Lion plush toy"
                className="rounded-lg shadow-md"
              />
              <img
                src="/images/book.webp"
                alt="Children's book"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-navy mb-4">
              <span className="text-warm-orange">Accessories</span><br />
              & Gifts
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Complete the perfect look with our carefully curated selection of accessories. 
              From delicate headbands to formal shoes, we have everything you need to make 
              your little one's outfit absolutely perfect.
            </p>
            <Button className="bg-warm-orange hover:bg-orange-600 text-white px-8 py-3">
              Shop Accessories
            </Button>
          </div>
        </div>

        {/* Boys Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Your Little Man<br />
              Will Look Great
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From everyday casual wear to special occasion outfits, our boys' collection offers style and comfort. 
              Find the perfect outfit for your little gentleman with our premium selection of clothing.
            </p>
            <Button className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3">
              Shop Boys
            </Button>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
                alt="Boys formal outfit"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
                alt="Boys casual outfit"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
