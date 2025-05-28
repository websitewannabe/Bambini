import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const baptismProducts = [
  {
    id: 1,
    name: "Piccolo Bacio",
    description: "Perfect Outfit for Christening Parties. Our best seller and for the mother of one. For boys and girls for spring or before christening or confirmed.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    buttonColor: "bg-warm-orange"
  },
  {
    id: 2,
    name: "Lite",
    description: "Our Collection was hand-picked on LITERS in a childrens special occasion apparel boutique based in Long Beach, California. We have a special selection available for special order to be.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    buttonColor: "bg-soft-pink"
  },
  {
    id: 3,
    name: "Teter Warm",
    description: "Launching in 2021 in Richmond hill, Teter Warm revolutionised baby clothing in front of old a Tashkent, it is a fusion of old generation. Event lined by small boys in daily, available online and in be a full of us and we are about and us at any social week out.",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    buttonColor: "bg-light-blue"
  },
  {
    id: 4,
    name: "Christl Helen",
    description: "Christl Helen has become a trusted name for special occasion children wear. Over 30 years together one The Catholic Church. Christ vision brings Great Development to the well make. beautiful designer it just one of fun within only online each and us set these at it be plus us very.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    buttonColor: "bg-soft-pink"
  }
];

const popularDresses = [
  {
    id: 1,
    name: "Valentina",
    price: "$240.00",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
  },
  {
    id: 2,
    name: "Teter Warm",
    price: "$189.00",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
  },
  {
    id: 3,
    name: "Angel",
    price: "$420.00",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
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
              <h1 className="text-4xl font-bold text-soft-pink mb-6">BAPTISM</h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Baptism can symbolize a baby's new beginning, therefore, 
                baptisms are among the most religious and spiritual ceremonies a 
                family celebrates that celebrates the conclusion of your child's 
                baptising. Choose your precious file from a host to find a gift 
                for any child that represents their spiritual beginning.
              </p>
              <Button className="bg-soft-pink hover:bg-pink-600 text-white px-8 py-3">
                Shop Now
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
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
              <div key={product.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-warm-orange mb-4">{product.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <Button className={`${product.buttonColor} hover:opacity-90 text-white px-8 py-3`}>
                    Shop Collection
                  </Button>
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
              Popular <span className="text-soft-pink">Christening Dresses</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {popularDresses.map((dress) => (
              <Card key={dress.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={dress.image}
                    alt={dress.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-navy mb-2">{dress.name}</h3>
                  <p className="text-lg font-bold text-gray-900">{dress.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
