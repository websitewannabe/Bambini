
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

const blogPostsData = {
  "essential-tips-choosing-baby-first-outfit": {
    id: 1,
    title: "Essential Tips for Choosing Your Baby's First Outfit",
    content: `
      <p>Welcoming a new baby is one of life's most precious moments, and choosing their first outfit is an exciting milestone for any parent. From hospital going-home outfits to everyday essentials, selecting the right clothing for your little one involves more than just picking something cute.</p>

      <h2>Prioritize Comfort and Safety</h2>
      <p>Your baby's comfort should always come first. Look for clothing made from soft, breathable fabrics like organic cotton or bamboo. These materials are gentle on sensitive skin and help regulate body temperature. Avoid items with small buttons, beads, or decorative elements that could pose a choking hazard.</p>

      <h2>Consider Easy Access for Diaper Changes</h2>
      <p>Practical design features make life easier for both you and your baby. Snap closures at the crotch, envelope necklines, and front-opening onesies allow for quick diaper changes without completely undressing your little one. This is especially important during those frequent nighttime changes.</p>

      <h2>Size Matters: Room to Grow</h2>
      <p>Babies grow incredibly fast, so don't be afraid to size up. A slightly loose outfit is more comfortable than something too tight. Many parents make the mistake of buying too much in newborn size – consider purchasing a variety of sizes from 0-3 months up to 6-9 months.</p>

      <h2>Fabric Choice Guide</h2>
      <ul>
        <li><strong>Organic Cotton:</strong> Soft, breathable, and hypoallergenic</li>
        <li><strong>Bamboo:</strong> Naturally antibacterial and temperature-regulating</li>
        <li><strong>Merino Wool:</strong> Perfect for layering and temperature control</li>
        <li><strong>Avoid:</strong> Synthetic materials that don't breathe well</li>
      </ul>

      <p>Remember, the most beautiful outfit is one that keeps your baby comfortable, safe, and happy. At Bambini's World, we carefully curate our collection with these principles in mind, ensuring every piece meets the highest standards for your precious little one.</p>
    `,
    image: "/images/boy.webp",
    author: "Sarah Johnson",
    date: "January 25, 2025",
    readTime: "5 min read"
  },
  "baptism-dress-traditions-guide": {
    id: 2,
    title: "Baptism Dress Traditions: A Guide to Sacred Celebrations",
    content: `
      <p>Baptism is one of the most significant moments in a child's spiritual journey, and the traditional baptism dress plays a beautiful role in this sacred ceremony. Understanding the history and meaning behind these special garments can help you choose the perfect dress for your little one's big day.</p>

      <h2>The History of Baptism Dresses</h2>
      <p>The tradition of white baptism dresses dates back centuries, symbolizing purity, new beginnings, and the washing away of original sin. Originally, both boys and girls wore long white gowns, a practice that continued well into the 20th century. Today, while boys often wear baptism suits or rompers, the white dress remains a cherished tradition for girls.</p>

      <h2>Symbolic Elements in Baptism Dresses</h2>
      <p>Every detail of a baptism dress carries meaning:</p>
      <ul>
        <li><strong>White Color:</strong> Represents purity, innocence, and rebirth</li>
        <li><strong>Long Length:</strong> Traditionally symbolizes the long life ahead</li>
        <li><strong>Delicate Lace:</strong> Often represents the delicate care of divine love</li>
        <li><strong>Cross Embellishments:</strong> Direct symbol of Christian faith</li>
      </ul>

      <h2>Choosing the Perfect Baptism Dress</h2>
      <p>When selecting a baptism dress, consider the season, venue, and family traditions. Summer ceremonies might call for lighter fabrics like cotton or linen, while winter baptisms benefit from warmer materials. Many families choose to use a family heirloom dress, creating a beautiful connection across generations.</p>

      <h2>Modern Baptism Dress Styles</h2>
      <p>Today's baptism dresses range from simple, elegant designs to elaborate gowns with intricate embroidery. Popular styles include:</p>
      <ul>
        <li>Classic A-line dresses with delicate lace trim</li>
        <li>Vintage-inspired gowns with pearl or satin details</li>
        <li>Modern minimalist designs for contemporary families</li>
        <li>Traditional long christening gowns for formal ceremonies</li>
      </ul>

      <p>At Bambini's World, we understand the importance of this special day. Our collection of baptism dresses honors tradition while offering modern comfort and style, ensuring your little angel looks perfect for their sacred celebration.</p>
    `,
    image: "/images/baptismDress.jpg",
    author: "Maria Rodriguez",
    date: "January 20, 2025",
    readTime: "7 min read"
  },
  "seasonal-childrens-fashion-styling": {
    id: 3,
    title: "Seasonal Children's Fashion: Styling Your Little One Year-Round",
    content: `
      <p>Dressing children for different seasons requires a balance of style, comfort, and practicality. As the weather changes throughout the year, so should your little one's wardrobe. Here's your comprehensive guide to seasonal children's fashion that keeps your child looking adorable while staying comfortable in any weather.</p>

      <h2>Spring: Fresh Starts and Light Layers</h2>
      <p>Spring is all about transition and renewal. As temperatures begin to warm, it's time to pack away heavy winter clothes and embrace lighter, more colorful options. Key pieces for spring include:</p>
      <ul>
        <li>Light cardigans and zip-up hoodies for unpredictable weather</li>
        <li>Comfortable jeans or leggings paired with cute tops</li>
        <li>Waterproof jackets for April showers</li>
        <li>Closed-toe shoes that can handle puddles</li>
      </ul>

      <h2>Summer: Cool and Comfortable</h2>
      <p>Summer fashion for children should prioritize breathability and sun protection. Natural fabrics like cotton and linen are your best friends during hot weather. Essential summer pieces include:</p>
      <ul>
        <li>Lightweight dresses and rompers</li>
        <li>Breathable shorts and t-shirts</li>
        <li>Sun hats and UV-protective clothing</li>
        <li>Comfortable sandals and breathable sneakers</li>
      </ul>

      <h2>Fall: Cozy Layers and Rich Colors</h2>
      <p>Fall fashion allows for beautiful layering and rich, warm colors. This season is perfect for mixing textures and creating stylish, comfortable outfits. Must-have fall pieces include:</p>
      <ul>
        <li>Cozy sweaters and fleece jackets</li>
        <li>Comfortable jeans and corduroys</li>
        <li>Warm but not heavy jackets</li>
        <li>Closed-toe shoes and small boots</li>
      </ul>

      <h2>Winter: Warmth Without Compromise</h2>
      <p>Winter fashion for children needs to prioritize warmth while maintaining mobility and style. Look for pieces that layer well and provide adequate protection from cold weather:</p>
      <ul>
        <li>Insulated coats and snow suits</li>
        <li>Warm sweaters and thermal underlayers</li>
        <li>Waterproof boots with good traction</li>
        <li>Hats, mittens, and scarves for complete protection</li>
      </ul>

      <h2>Year-Round Styling Tips</h2>
      <p>Regardless of the season, always prioritize comfort and allow for movement. Children are active, and their clothing should support their natural energy and curiosity. Invest in quality basics that can be mixed and matched, and don't forget that the best-dressed child is a happy, comfortable child.</p>

      <p>At Bambini's World, our seasonal collections are designed with both style and practicality in mind, ensuring your little one looks fashionable while feeling comfortable throughout every season of the year.</p>
    `,
    image: "/images/girlsClothing.webp",
    author: "Emily Chen",
    date: "January 15, 2025",
    readTime: "6 min read"
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-navy hover:bg-light-blue text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-navy hover:text-soft-pink mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
              <span className="mx-2">•</span>
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8 font-serif leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">
              Related <span className="text-soft-pink">Articles</span>
            </h2>
            <div className="text-center">
              <Link to="/blog">
                <Button className="bg-navy hover:bg-light-blue text-white">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
