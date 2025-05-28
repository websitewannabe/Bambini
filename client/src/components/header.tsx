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
              <div>
                <h1 className="text-xl font-bold text-gray-900">Bambini's World</h1>
              </div>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-navy transition-colors font-medium">Shop</a>
            </Link>
            <Link href="/baptism">
              <a className="text-gray-700 hover:text-navy transition-colors font-medium">Baptism</a>
            </Link>
            <Link href="/communion">
              <a className="text-gray-700 hover:text-navy transition-colors font-medium">Communion</a>
            </Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
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
