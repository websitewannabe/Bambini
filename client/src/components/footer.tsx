import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Visit Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Visit Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>1589 N Main Street</span>
              </div>
              <p className="ml-6">Warrington, PA 18976</p>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(215) 230-4572</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>bambinisworld.info@gmail.com</span>
              </div>

              {/* Open Hours */}
              <div className="mt-4 pt-2 border-t border-gray-600">
                <h4 className="font-semibold mb-2">Open Hours</h4>
                <div className="space-y-1 text-xs">
                  <p>Mon-Sat: 11:00 AM – 6:00 PM</p>
                  <p>Sun: 12:00 PM – 4:00 PM</p>
                </div>
              </div>

              <div className="flex space-x-3 mt-4">
                <Facebook className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/store#!/Newborn-Boy-0-to-18m/c/154614761"
                  className="hover:text-blue-300 transition-colors"
                >
                  Newborn Boy (0-18 mo)
                </a>
              </li>
              <li>
                <a
                  href="/store#!/Newborn-Girl-0-to-18m/c/154620008"
                  className="hover:text-blue-300 transition-colors"
                >
                  Newborn Girl (0-18 mo)
                </a>
              </li>
              <li>
                <a
                  href="/store#!/Baby-girl-6-to-36m/c/154631503"
                  className="hover:text-blue-300 transition-colors"
                >
                  Baby Girl (6-36 mo)
                </a>
              </li>
              <li>
                <a
                  href="/store#!/Boy-2-to-8-years/c/154620007"
                  className="hover:text-blue-300 transition-colors"
                >
                  Boys (2-8 yrs)
                </a>
              </li>
              <li>
                <a
                  href="/store#!/Girl-2-to-8-years/c/154631504"
                  className="hover:text-blue-300 transition-colors"
                >
                  Girls (2-8 yrs)
                </a>
              </li>
              <li>
                <a
                  href="/store#!/Gender-Neutral/c/154631509"
                  className="hover:text-blue-300 transition-colors"
                >
                  Gender Neutral
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/store#!/Accessories-and-Gifts/c/154623510"
                  className="hover:text-blue-300 transition-colors"
                >
                  Accessories and Gifts
                </a>
              </li>
              <li>
                <a
                  href="/baptism"
                  className="hover:text-blue-300 transition-colors"
                >
                  Baptism
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Blog Articles
                </a>
              </li>
              <li>
                <a
                  href="/communion"
                  className="hover:text-blue-300 transition-colors"
                >
                  Communion Dresses
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-300 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="store"
                  className="hover:text-blue-300 transition-colors"
                >
                  Our Store
                </a>
              </li>
              <li>
                <a
                  href="store"
                  className="hover:text-blue-300 transition-colors"
                >
                  Product Search
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; 2025 Bambini's World. All rights reserved. Website designed
            with care for families.
          </p>
        </div>
      </div>
    </footer>
  );
}
