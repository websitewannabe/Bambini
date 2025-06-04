import { Helmet } from "react-helmet";
import Hero from "@/components/hero";
import ProductCategories from "@/components/product-categories";
import CustomerReviews from "@/components/customer-reviews";
import SpecialOccasions from "@/components/special-occasions";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://bambinisworld.com/" />
        <title>Bambini's World | Children's Boutique in Warrington, PA</title>
        <meta
          name="description"
          content="Bambini's World is a charming children’s boutique offering clothing, gifts, shoes, and accessories for babies and toddlers in Warrington, PA."
        />
        <meta
          name="keywords"
          content="children’s boutique, baby clothing, toddler outfits, baptism dresses, kids shoes, Warrington baby store, gift boutique"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Bambini's World | Children's Boutique in Warrington, PA"
        />
        <meta
          property="og:description"
          content="Shop infant and toddler clothing, gifts, and special occasion wear at Bambini's World in Warrington, PA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bambinisworld.com/" />
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
            url: "https://bambinisworld.com",
            image: "https://bambinisworld.netlify.app/images/bambiniShop.webp",
            description:
              "Bambini's World is a children's boutique offering baby and toddler apparel, footwear, gifts, and special occasion wear in Warrington, PA.",
            telephone: "+1-215-230-4572",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1589 N Main Street",
              addressLocality: "Warrington",
              addressRegion: "PA",
              postalCode: "18976",
              addressCountry: "US",
            },
            openingHours: "Mo-Fr 10:00-18:00, Sa 10:00-17:00",
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
              name: "Bambini's World Product Categories",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Boys Clothing",
                    description: "Infant, baby, and toddler clothing for boys.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Girls Clothing",
                    description: "Infant, baby, and toddler outfits for girls.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Baptism & Communion Dresses",
                    description:
                      "Special occasion dresses for baptisms and communions.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Accessories & Gifts",
                    description:
                      "Boutique gift items and accessories for children.",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <Hero />
      <ProductCategories />
      <CustomerReviews />
      <SpecialOccasions />
      <FAQ />
    </div>
  );
}
