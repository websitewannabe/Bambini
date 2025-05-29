import { Button } from "@/components/ui/button";

export default function SpecialOccasions() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span style={{ color: "#F8B4BE" }}>A Dress For That</span>
              <br />
              <span className="text-blue-600">Special Occasion</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From first communions to baptisms, we understand the importance of
              these precious moments. Our collection features the finest fabrics
              and most beautiful designs to make your little one feel special on
              their big day.
            </p>
            <Button className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3">
              Shop Now
            </Button>
          </div>
          <div>
            <img
              src="assets/images/dressImage.webp"
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
                src="assets/images/zebra.jpeg"
                alt="Zebra plush toy"
                className="rounded-lg shadow-md"
                style={{ border: "3px dotted #FFB85C" }}
              />
              <img
                src="/assets/images/babybling.webp"
                alt="Baby bling accessories"
                className="rounded-lg shadow-md"
                style={{ border: "3px dotted #FFB85C" }}
              />
              <img
                src="assets/images/lion.jpeg"
                alt="Lion plush toy"
                className="rounded-lg shadow-md"
                style={{ border: "3px dotted #FFB85C" }}
              />
              <img
                src="assets/images/book.webp"
                alt="Children's book"
                className="rounded-lg shadow-md"
                style={{ border: "3px dotted #FFB85C" }}
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-navy mb-4">
              <span className="text-warm-orange">Accessories</span>
              <br />& Gifts
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              What children’s boutique would be complete without those perfect
              gifts for your loved ones? Bambini’s World carries an
              ever-changing variety of must-have gifts and accessories for any
              child.
            </p>
            <Button className="bg-warm-orange hover:bg-orange-600 text-white px-8 py-3">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Boys Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Your Little Man
              <br />
              Will Look Great
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Girls can’t have all the fun! We have sleepwear, outfits,
              outerwear, toys, gifts and so much more for your little boy to
              look his best. Search our store for all our boy merchandise by
              clicking the button below
            </p>
            <Button className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3">
              Shop Boys
            </Button>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="assets/images/boy.webp"
                alt="Boys formal outfit"
                className="rounded-lg shadow-md"
              />
              <img
                src="assets/images/boyclothes.webp"
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
