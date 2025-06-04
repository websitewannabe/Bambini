import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const communionProducts = [
  {
    id: 1,
    name: "Macis Design",
    description:
      "Macis Design is committed to designing and manufacturing gowns of high quality, unique design and lots of detail. The company’s private owned factory allows them to ensure one of a kind design. For special orders or sizing guides stop in our store or give us a call.",
    image: "/images/macis.webp",
    buttonColor: "bg-soft-pink",
  },
  {
    id: 2,
    name: "Joan Calabrese",
    description:
      "In August of 2021 Macis Designs began a partnership with the Calabrese family to continue producing the Joan Calabrese line under the name Joan Calabrese for Macis Design. For special orders or sizing guides stop in our store or give us a call.",
    image: "/images/calabrese.webp",
    buttonColor: "bg-light-blue",
  },
  {
    id: 3,
    name: "Teter Warm",
    description:
      "Founded in 2023 in Richmond Hill, Teter Warm understands that clothing is more than just a necessity; it is a form of self-expression. Every item in our store is also available online and vice versa.  If you see the item within our online store, you can come see it in the store as well. Special orders available upon request and availability.",
    image: "/images/teter2.webp",
    buttonColor: "bg-navy",
  },
];

const featuredDresses = [
  {
    id: 1,
    name: "121307 Joan Calabrese",
    price: "$329.00",
    image: "/images/121307.jpg",
    storeUrl: "/store#!/121307-Joan-Calabrese/p/585758401",
  },
  {
    id: 2,
    name: "Maci's Design 121306",
    price: "$350.00",
    image: "/images/121306.jpg",
    storeUrl: "/store#!/Macis-design-121306/p/583923812",
  },
];

export default function Communion() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="canonical" href="https://bambinisworld.com/communion" />
        <title>
          First Communion Dresses | Elegant Gowns by Bambini's World
        </title>
        <meta
          name="description"
          content="Shop First Communion dresses for girls from Macis Design, Teter Warm, and more. Elegant, timeless gowns for this special faith milestone."
        />
        <meta
          name="keywords"
          content="First Communion dresses, white communion gowns, Macis Design, Teter Warm, communion veils, Warrington PA children’s boutique"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="First Communion Dresses | Elegant Gowns by Bambini's World"
        />
        <meta
          property="og:description"
          content="Explore premium First Communion dresses for girls at Bambini’s World. Featuring Macis Design, Teter Warm, and other top brands."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bambinisworld.com/communion" />
        <meta
          property="og:image"
          content="https://bambinisworld.netlify.app/images/bambiniShop.webp"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bambini's World",
            url: "https://bambinisworld.com/communion",
            image: "https://bambinisworld.netlify.app/images/bambiniShop.webp",
            description:
              "Bambini's World offers beautiful First Communion dresses and accessories from Macis Design, Teter Warm, and more. Elegant styles for this sacred occasion.",
            telephone: "+1-215-230-4572",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1589 N Main Street",
              addressLocality: "Warrington",
              addressRegion: "PA",
              postalCode: "18976",
              addressCountry: "US",
            },
            openingHours: "Mo-Sa 10:00-18:00, Su 12:00-16:00",
            areaServed: {
              "@type": "Place",
              name: [
                "Warrington",
                "Doylestown",
                "Warminster",
                "Chalfont",
                "Newtown",
                "Buckingham",
              ],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "First Communion Dresses",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Macis Design Communion Gowns",
                    description:
                      "Luxurious custom-designed dresses with unique detailing.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Teter Warm Communion Dresses",
                    description:
                      "Heirloom-quality dresses designed with timeless elegance.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Veils & Accessories",
                    description:
                      "Beautiful veils, gloves, and more for the perfect First Communion look.",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-soft-pink mb-6">
                Communion
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A child’s First Communion dress or suit is a symbol of their
                commitment to their faith. Explore our collection of dresses,
                suits and accessories.
              </p>
              <Button
                className="bg-soft-pink hover:bg-pink-600 text-white px-8 py-3"
                onClick={() => (window.location.href = "/store")}
              >
                Shop Now
              </Button>
            </div>
            <div>
              <img
                src="/images/stairs.webp"
                alt="First Holy Communion dress"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {communionProducts.map((product, index) => (
              <div
                key={product.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-3xl font-bold text-navy mb-4">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Communion Dresses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Featured <span className="text-soft-pink">Communion Dresses</span>
            </h2>
            <p className="text-gray-600">
              Discover our most popular communion dresses
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredDresses.map((dress) => (
                <CarouselItem
                  key={dress.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => (window.location.href = dress.storeUrl)}
                  >
                    <div className="relative">
                      <img
                        src={dress.image}
                        alt={dress.name}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-navy mb-2">
                        {dress.name}
                      </h3>
                      <p className="text-lg font-bold text-gray-900">
                        {dress.price}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Why Choose Bambini's World
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Expert Fitting
              </h3>
              <p className="text-gray-600">
                Our experienced staff ensures the perfect fit for your child's
                special day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Quality Fabrics
              </h3>
              <p className="text-gray-600">
                We use only the finest materials to create dresses that will
                last.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Personal Service
              </h3>
              <p className="text-gray-600">
                We provide personalized attention to make your experience
                special.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
