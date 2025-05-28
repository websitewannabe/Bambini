import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Review } from "@shared/schema";

export default function CustomerReviews() {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
    queryFn: async () => {
      const response = await fetch("/api/reviews");
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !reviews) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">
              Unable to load reviews at this time.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img
              src="assets/images/googleReviews.svg"
              alt="Google reviews"
              className="w-16 h-16 object-contain mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy">Our Reviews</h2>
              <p className="text-gray-600">See What Our Customers Are Saying</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.slice(0, 4).map((review) => (
            <Card key={review.id} className="bg-gray-50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 text-sm line-clamp-4">
                  {review.content}
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-light-blue rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{review.author}</p>
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
