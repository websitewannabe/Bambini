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
        <title>Bambini's World | Premier Children's Boutique in Warrington, PA</title>
        <meta
          name="description"
          content="Discover Bambini's World, Warrington PA's premier children's boutique featuring baptism dresses, communion gowns, baby clothes, toddler outfits, and special occasion wear. Visit our store at 1589 N Main Street or shop online."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Bambini's World | Premier Children's Boutique in Warrington, PA"
        />
        <meta
          property="og:description"
          content="Shop premium infant and toddler clothing, baptism dresses, communion gowns, and special occasion wear at Bambini's World in Warrington, PA. Featuring top brands like Piccolo Bacio, Lito, and Teter Warm."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bambinisworld.com/" />
        <meta property="og:site_name" content="Bambini's World" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://bambinisworld.com/images/bambiniShop.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bambini's World children's boutique storefront in Warrington, PA" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bambini's World | Premier Children's Boutique in Warrington, PA" />
        <meta name="twitter:description" content="Shop premium children's clothing, baptism dresses, and communion gowns at Warrington PA's finest children's boutique." />
        <meta name="twitter:image" content="https://bambinisworld.com/images/bambiniShop.webp" />
        <meta name="twitter:image:alt" content="Bambini's World children's boutique storefront" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bambini's World",
            url: "https://bambinisworld.com",
            image: "https://bambinisworld.com/images/bambiniShop.webp",
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

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What Are Your Store Hours & Location?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Open Hours: Mon-Sat 11:00 AM – 6:00 PM, Sun 12:00 PM – 4:00 PM. Address: 1589 N Main Street Warrington, PA 18976"
                }
              },
              {
                "@type": "Question",
                name: "Can I Place An Order Over The Phone?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can place an order over the phone or from our online store. Give us a call during our open hours and we can help you at 215-230-4572."
                }
              },
              {
                "@type": "Question",
                name: "Which Items Do You Carry In-Store?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every Item in our store is also available online and vice versa. If you see the item within our online store, you can come see it in the store as well. (Depending on Stock Levels)."
                }
              },
              {
                "@type": "Question",
                name: "Do You Have Changing Rooms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we have changing rooms available for your children to try on items as necessary."
                }
              },
              {
                "@type": "Question",
                name: "Do You Offer Gift Wrapping?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gift wrapping is offered all year. Give us a call during our open hours and we can help you at 215-230-4572."
                }
              },
              {
                "@type": "Question",
                name: "What Is Your Return Policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Item(s) must be returned within 30 days of receiving it. To exchange an item, contact bambinisworld.info@gmail.com with your order #, name, and the item you wish to exchange. All items must be returned with all tags still attached."
                }
              }
            ]
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
