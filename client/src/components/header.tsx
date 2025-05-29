import { Link } from "wouter";
import { User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Check if Ecwid script is already loaded
    const existingScript = document.querySelector('script[src*="app.business.shop/script.js"]');
    
    if (!existingScript) {
      // Load the business.shop script
      const script = document.createElement('script');
      script.src = 'https://app.business.shop/script.js?90737576&data_platform=code&data_date=2025-05-29';
      script.charset = 'utf-8';
      script.setAttribute('data-cfasync', 'false');
      script.type = 'text/javascript';
      
      script.onload = () => {
        // Initialize Ecwid after script loads
        if (window.Ecwid) {
          window.Ecwid.init();
        }
      };

      document.head.appendChild(script);
    } else {
      // Script already exists, just initialize
      if (window.Ecwid) {
        window.Ecwid.init();
      }
    }
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/images/bambiniLogo.png"
                alt="Bambini's World Logo"
                className="h-12 w-auto"
              />
              <div></div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-navy transition-colors font-medium">
              Home
            </Link>
            <Link href="/store" className="text-gray-700 hover:text-navy transition-colors font-medium">
              Store
            </Link>
            <Link href="/baptism" className="text-gray-700 hover:text-navy transition-colors font-medium">
              Baptism
            </Link>
            <Link href="/communion" className="text-gray-700 hover:text-navy transition-colors font-medium">
              Communion
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-navy transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.location.href = "/search"}
            >
              <Search className="h-5 w-5" />
            </Button>
            <div className="ec-cart-widget"></div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Ecwid: {
      init: () => void;
    };
  }
}
