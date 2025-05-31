
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Essential Tips for Choosing Your Baby's First Outfit",
    excerpt: "Discover the key factors to consider when selecting comfortable, safe, and stylish clothing for your newborn. From fabric choices to sizing, we'll guide you through everything you need to know.",
    image: "/images/boy.webp",
    author: "Sarah Johnson",
    date: "January 25, 2025",
    readTime: "5 min read",
    slug: "essential-tips-choosing-baby-first-outfit"
  },
  {
    id: 2,
    title: "Baptism Dress Traditions: A Guide to Sacred Celebrations",
    excerpt: "Explore the beautiful traditions behind baptism dresses and christening gowns. Learn about different styles, symbolic meanings, and how to choose the perfect dress for your little one's special day.",
    image: "/images/baptismDress.jpg",
    author: "Maria Rodriguez",
    date: "January 20, 2025",
    readTime: "7 min read",
    slug: "baptism-dress-traditions-guide"
  },
  {
    id: 3,
    title: "Seasonal Children's Fashion: Styling Your Little One Year-Round",
    excerpt: "From cozy winter layers to breezy summer outfits, discover how to keep your child comfortable and fashionable throughout every season while maintaining their unique style.",
    image: "/images/girlsClothing.webp",
    author: "Emily Chen",
    date: "January 15, 2025",
    readTime: "6 min read",
    slug: "seasonal-childrens-fashion-styling"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-light-blue py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Bambini's <span className="text-soft-pink">Blog</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Expert advice, styling tips, and heartwarming stories about children's fashion and special occasions
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-soft-pink transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-navy hover:text-soft-pink hover:bg-soft-pink/10"
                      onClick={() => window.location.href = `/blog/${post.slug}`}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Stay Updated with Our Latest <span className="text-soft-pink">Stories</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest parenting tips, fashion trends, and special occasion guides delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-pink"
              />
              <Button className="bg-navy hover:bg-light-blue text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
