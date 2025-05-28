import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Boys Clothing",
    description:
      "Explore Our Lines of Infant, Baby, & Toddler Clothing for boys",
    image: "/images/boysClothing.jpg",
    buttonClass: "bg-light-blue hover:bg-blue-600",
  },
  {
    id: 2,
    name: "Girls Clothing",
    description:
      "Explore Our Lines of Infant, Baby, & Toddler Clothing for girls",
    image: "/images/girlsClothing.webp",
    buttonClass: "bg-soft-pink hover:bg-pink-600",
  },
  {
    id: 3,
    name: "Footwear",
    description:
      "Explore Our girls and boys footwear for Infant, Baby, & Toddler",
    image: "/images/footwear.webp",
    buttonClass: "bg-gray-800 hover:bg-gray-700",
  },
  {
    id: 4,
    name: "Communion",
    description:
      "Explore Our Communion Dresses for Infant, Baby, Toddler, and Girls.",
    image: "/images/communion.webp",
    buttonClass: "bg-soft-pink hover:bg-pink-600",
  },
  {
    id: 5,
    name: "Accessories & Gifts",
    description:
      "Explore Our Variety of Infant, Baby, & Toddler Gifts for boys and girls",
    image: "/images/accessories.webp",
    buttonClass: "bg-warm-orange hover:bg-orange-600",
  },
  {
    id: 6,
    name: "Baptism",
    description:
      "Explore Our Christening Dresses for Infant, Baby, & Toddlers.",
    image: "/images/baptism.webp",
    buttonClass: "bg-soft-pink hover:bg-pink-600",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50" id="shop">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Explore <span className="text-soft-pink">Our Products</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.slice(0, 3).map((category) => (
            <Card
              key={category.id}
              className="overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button className={`${category.buttonClass} text-white w-full`}>
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.slice(3).map((category) => (
            <Card
              key={category.id}
              className="overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button className={`${category.buttonClass} text-white w-full`}>
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
