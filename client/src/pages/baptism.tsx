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
    image: "assets/images/piccolo.webp",
    buttonColor: "bg-warm-orange",
  },
  {
    id: 2,
    name: "Lito",
    description:
      "Lito Children’s Wear began in 1973 as a children’s special occasion apparel boutique based in Long Beach, California. We have a special selection available for special order in store, stop in or call us for more information.",
    image: "assets/images/lito.webp",
    buttonColor: "bg-soft-pink",
  },
  {
    id: 3,
    name: "Teter Warm",
    description:
      "Founded in 2023 in Richmond Hill, Teter Warm understands that clothing is more than just a necessity; it is a form of self-expression. Every item in our store is also available online and vice versa.  If you see the item within our online store, you can come see it in the store as well. Special orders available upon request and availability.",
    image: "assets/images/teterwarm.webp",
    buttonColor: "bg-light-blue",
  },
  {
    id: 4,
    name: "Christl Helen",
    description:
      "Baptism, First Holy Communion and Confirmation are collectively known as The Sacrament of Initiation into The Catholic Church. Christi Helen brings these Sacraments to life with their beautiful designs. If you see the item within our online store, you can come see it in the store as well. ",
    image: "assets/images/christi.webp",
    buttonColor: "bg-soft-pink",
  },
];

const popularDresses = [
  {
    id: 1,
    name: "Valentina",
    price: "$240.00",
    image: "/images/baptism.webp",
    storeUrl: "/store#category=baptism&search=valentina"
  },
  {
    id: 2,
    name: "Teter Warm",
    price: "$189.00",
    image: "/images/teterwarm.webp",
    storeUrl: "/store#category=baptism&search=teter"
  },
  {
    id: 3,
    name: "Angel",
    price: "$420.00",
    image: "/images/baptismDress.jpg",
    storeUrl: "/store#category=baptism&search=angel"
  },
  {
    id: 4,
    name: "Grace",
    price: "$295.00",
    image: "/images/christi.webp",
    storeUrl: "/store#category=baptism&search=grace"
  }
];

export default function Baptism() {
  return (
    <div className="min-h-screen bg-white">
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
              <Button className="bg-soft-pink hover:bg-pink-600 text-white px-8 py-3">
                Shop Now
              </Button>
            </div>
            <div>
              <img
                src="assets/images/baptismDress.jpg"
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
                <CarouselItem key={dress.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.location.href = dress.storeUrl}
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