import Hero from "@/components/hero";
import ProductCategories from "@/components/product-categories";
import CustomerReviews from "@/components/customer-reviews";
import SpecialOccasions from "@/components/special-occasions";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <CustomerReviews />
      <SpecialOccasions />
      <FAQ />
    </div>
  );
}
