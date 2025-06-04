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

const baptismProducts = [
  {
    id: 1,
    name: "Piccolo Bacio",
    description:
      "Piccolo Bacio is a couture brand by Josephine Zecca, that has been on the market since 2001. Every item in our store is also available online and vice versa.  We can place special orders for sizing or fabric choice (depending on availability)",
    image: "/images/piccolo.webp",
    buttonColor: "bg-warm-orange",
  },
  {
    id: 2,
    name: "Lito",
    description:
      "Lito Children’s Wear began in 1973 as a children’s special occasion apparel boutique based in Long Beach, California. We have a special selection available for special order in store, stop in or call us for more information.",
    image: "/images/lito.webp",
    buttonColor: "bg-soft-pink",
  },
  {
    id: 3,
    name: "Teter Warm",
    description:
      "Founded in 2023 in Richmond Hill, Teter Warm understands that clothing is more than just a necessity; it is a form of self-expression. Every item in our store is also available online and vice versa.  If you see the item within our online store, you can come see it in the store as well. Special orders available upon request and availability.",
    image: "/images/teterwarm.webp",
    buttonColor: "bg-light-blue",
  },
  {
    id: 4,
    name: "Christl Helen",
    description:
      "Baptism, First Holy Communion and Confirmation are collectively known as The Sacrament of Initiation into The Catholic Church. Christi Helen brings these Sacraments to life with their beautiful designs. If you see the item within our online store, you can come see it in the store as well. ",
    image: "/images/christi.webp",
    buttonColor: "bg-soft-pink",
  },
];

const popularDresses = [
  {
    id: 1,
    name: "Vanina",
    price: "$390.00",
    image: "/images/vanina.jpg",
    storeUrl: "/store#!/Vanina/p/580065611/",
  },
  {
    id: 2,
    name: "Magdalena",
    price: "$390.00",
    image: "/images/magdalena.jpg",
    storeUrl: "store#!/Magdalena/p/580049386",
  },
  {
    id: 3,
    name: "Blue Willie",
    price: "$365.00",
    image: "/images/blue.jpg",
    storeUrl: "/store#!/Blue-Willie/p/580096272",
  },
];

export default function Baptism() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="canonical" href="https://bambinisworld.com/baptism" />
        <title>Baptism Outfits & Christening Gowns | Bambini's World</title>
        <meta
          name="description"
          content="Explore our collection of elegant baptism gowns, christening suits, and accessories for infants and toddlers. Featuring Piccolo Bacio, Lito, and more."
        />
        <meta
          name="keywords"
          content="baptism dresses, christening gowns, baby blessing outfits, Piccolo Bacio, Lito baptism, Teter Warm, Christil Helen, Warrington PA boutique"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Baptism Outfits & Christening Gowns | Bambini's World"
        />
        <meta
          property="og:description"
          content="Shop timeless baptism and christening outfits for babies at Bambini’s World, including exclusive gowns and suits by top designers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bambinisworld.com/baptism" />
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
            url: "https://bambinisworld.com/baptism",
            image: "https://bambinisworld.netlify.app/images/bambiniShop.webp",
            description:
              "Bambini's World offers exquisite baptism dresses and christening outfits for boys and girls from top brands like Piccolo Bacio, Lito, and Teter Warm.",
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
              name: "Baptism & Christening Collection",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Piccolo Bacio Gowns",
                    description:
                      "Luxury baptism gowns designed by Josephine Zecca.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Lito Baptism Wear",
                    description:
                      "Classic children’s special occasion apparel including gowns and suits.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Teter Warm Outfits",
                    description:
                      "High-end handcrafted baptism garments with heirloom quality.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Christil Helen Dresses",
                    description:
                      "Beautiful designs symbolizing the Sacrament of Initiation.",
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
                BAPTISM
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Baptism can symbolize a child’s new beginnings, innocence, and
                spiritual journey. A baptism gown or suit can become a family
                heirloom that connects the memories of each child’s christening.
                Explore our selection for both boys and girls.
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
                src="/images/baptismDress.jpg"
                alt="Baptism dress"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {baptismProducts.map((product, index) => (
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
                  <h2 className="text-3xl font-bold text-warm-orange mb-4">
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

      {/* Popular Christening Dresses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Popular{" "}
              <span className="text-soft-pink">Christening Dresses</span>
            </h2>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {popularDresses.map((dress) => (
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
    </div>
  );
}
