import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Store() {
  useEffect(() => {
    // Load the store script
    const script = document.createElement("script");
    script.src =
      "https://app.business.shop/script.js?90737576&data_platform=code&data_date=2025-05-29";
    script.charset = "utf-8";
    script.setAttribute("data-cfasync", "false");
    document.head.appendChild(script);

    // Initialize the product browser after script loads
    script.onload = () => {
      if (window.xProductBrowser) {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-store-90737576",
        );
      }
    };

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="canonical" href="https://bambinisworld.com/store" />
        <title>Shop Premium Children's Clothing & Gifts | Bambini's World Online Store</title>
        <meta
          name="description"
          content="Shop Bambini's World online store for premium baby and toddler clothes, baptism dresses, communion gowns, shoes, and accessories. Featuring Piccolo Bacio, Lito, Teter Warm, and Christil Helen. Free shipping available."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Shop Premium Children's Clothing & Gifts | Bambini's World Online Store"
        />
        <meta
          property="og:description"
          content="Explore our complete collection of designer children's clothing, baptism dresses, communion gowns, and special occasion wear. Premium brands for infants and toddlers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bambinisworld.com/store" />
        <meta property="og:site_name" content="Bambini's World" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://bambinisworld.com/images/bambiniShop.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bambini's World online store featuring children's clothing and gifts" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop Premium Children's Clothing | Bambini's World Store" />
        <meta name="twitter:description" content="Designer children's clothing, baptism dresses, and special occasion wear from top brands. Shop online or visit our Warrington, PA store." />
        <meta name="twitter:image" content="https://bambinisworld.com/images/bambiniShop.webp" />
        <meta name="twitter:image:alt" content="Bambini's World online store collection" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bambini's World",
            url: "https://bambinisworld.com/store",
            image: "https://bambinisworld.com/images/bambiniShop.webp",
            description:
              "Bambini's World offers a complete selection of children’s apparel, baptism and communion wear, gifts, shoes, and accessories for infants and toddlers.",
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
              name: "Bambini's World Store Categories",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Christening Outfits",
                    description:
                      "Beautiful gowns and suits for baptisms and christenings.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Communion Dresses",
                    description: "Elegant communion gowns for girls.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Infant & Toddler Apparel",
                    description: "Clothing for newborns, babies, and toddlers.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Gifts & Accessories",
                    description:
                      "Toys, socks, jewelry, and seasonal gifts for children.",
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy mb-6">Our Store</h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our complete collection of children's apparel, communion
              and baptism dresses, accessories, and gifts. Find the perfect
              outfit for your little one's special occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Store Integration */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div id="my-store-90737576"></div>
        </div>
      </section>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    xProductBrowser: (...args: string[]) => void;
  }
}
