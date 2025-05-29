import { Link } from "wouter";
import { User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
