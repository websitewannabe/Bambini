
import { useEffect } from "react";

export default function Search() {
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="app.business.shop/script.js"]');
    
    if (existingScript) {
      // Script already exists, just initialize
      if (window.xSearch) {
        window.xSearch("id=my-search-90737576");
      }
      return;
    }

    // Load the store script
    const script = document.createElement('script');
    script.src = 'https://app.business.shop/script.js?90737576&data_platform=code&data_date=2025-05-29';
    script.charset = 'utf-8';
    script.setAttribute('data-cfasync', 'false');
    script.type = 'text/javascript';
    
    // Initialize the search after script loads
    script.onload = () => {
      // Add a small delay to ensure the script is fully loaded
      setTimeout(() => {
        if (window.xSearch) {
          window.xSearch("id=my-search-90737576");
        }
      }, 100);
    };

    script.onerror = () => {
      console.error('Failed to load business.shop search script');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy mb-6">
              Search Our Products
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find exactly what you're looking for in our complete collection of children's apparel, 
              communion and baptism dresses, accessories, and gifts.
            </p>
          </div>
        </div>
      </section>

      {/* Search Integration */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div id="my-search-90737576"></div>
        </div>
      </section>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    xSearch: (config: string) => void;
  }
}
