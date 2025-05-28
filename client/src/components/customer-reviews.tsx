import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    author: "Alexandra",
    content: "The selection and quality of baby clothing at this store is excellent!",
    rating: 5,
    date: "6/07/2022",
    initial: "A"
  },
  {
    id: 2,
    author: "Patricia",
    content: "Beautiful store with exquisite clothing for children! The owners are extremely helpful and kind.",
    rating: 5,
    date: "6/07/2016",
    initial: "P"
  },
  {
    id: 3,
    author: "Sal",
    content: "Grace is terrific! I had to find a baby gift for a very good friend first granddaughter. I had little free time; I searched baby clothes near me, found Bambino's World. She was so kind and helpful.",
    rating: 5,
    date: "4/10/2025",
    initial: "S"
  },
  {
    id: 4,
    author: "Karan",
    content: "Great selection, always something different and unique, very helpful staff. Beautiful wrapping if you need it, very personal and welcoming. I've been shopping with them for years and will continue to.",
    rating: 5,
    date: "6/07/2022",
    initial: "K"
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=80"
              alt="Google reviews"
              className="w-20 h-16 object-cover rounded mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy">Our Reviews</h2>
              <p className="text-gray-600">See What Our Customers Are Saying</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-gray-50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 text-sm">{review.content}</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-light-blue rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
