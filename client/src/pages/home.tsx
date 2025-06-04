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
        <title>Bambini's World - Children's Apparel & Gift Boutique</title>
        <meta name="description" content="Discover beautiful children's apparel, baptism dresses, communion outfits, and gifts at Bambini's World. Located in Warrington, PA - your trusted children's boutique." />
        <meta name="keywords" content="children's clothing, baptism dresses, communion dresses, kids fashion, children's boutique, Warrington PA" />
      </Helmet>
      <Hero />
      <ProductCategories />
      <CustomerReviews />
      <SpecialOccasions />
      <FAQ />
    </div>
  );
}
