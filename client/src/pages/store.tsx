
import { useEffect } from "react";

export default function Store() {
  useEffect(() => {
    // Load the store script
    const script = document.createElement('script');
    script.src = 'https://app.business.shop/script.js?90737576&data_platform=code&data_date=2025-05-29';
    script.charset = 'utf-8';
    script.setAttribute('data-cfasync', 'false');
    document.head.appendChild(script);

    // Initialize the product browser after script loads
    script.onload = () => {
      if (window.xProductBrowser) {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-store-90737576"
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
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy mb-6">
              Our Store
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our complete collection of children's apparel, communion and baptism dresses, 
              accessories, and gifts. Find the perfect outfit for your little one's special occasion.
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
