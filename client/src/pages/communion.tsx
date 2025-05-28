import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const communionProducts = [
  {
    id: 1,
    name: "First Communion Collection",
    description: "Celebrate your child's First Holy Communion with our exquisite collection of traditional and modern communion dresses. Each dress is carefully crafted with attention to detail.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    buttonColor: "bg-soft-pink"
  },
  {
    id: 2,
    name: "Traditional Veils & Accessories",
    description: "Complete your communion look with our beautiful veils, gloves, and accessories. We offer a wide selection to match any communion dress perfectly.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    buttonColor: "bg-light-blue"
  },
  {
    id: 3,
    name: "Boys Communion Suits",
    description: "Handsome suits and formal wear for boys making their First Holy Communion. Our collection includes traditional white suits and modern navy options.",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    buttonColor: "bg-navy"
  }
];

const featuredDresses = [
  {
    id: 1,
    name: "Grace",
    price: "$320.00",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
  },
  {
    id: 2,
    name: "Angelica",
    price: "$275.00",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
  },
  {
    id: 3,
    name: "Isabella",
    price: "$295.00",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
  },
  {
    id: 4,
    name: "Victoria",
    price: "$350.00",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400"
  }
];

export default function Communion() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">First Holy Communion</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your child's First Holy Communion a memorable occasion with our beautiful collection 
              of communion dresses, suits, and accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {communionProducts.map((product, index) => (
              <div key={product.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-navy mb-4">{product.name}</h2>
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

      {/* Featured Communion Dresses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Featured <span className="text-soft-pink">Communion Dresses</span>
            </h2>
            <p className="text-gray-600">Discover our most popular communion dresses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDresses.map((dress) => (
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Bambini's World</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Expert Fitting</h3>
              <p className="text-gray-600">Our experienced staff ensures the perfect fit for your child's special day.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Quality Fabrics</h3>
              <p className="text-gray-600">We use only the finest materials to create dresses that will last.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Personal Service</h3>
              <p className="text-gray-600">We provide personalized attention to make your experience special.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
