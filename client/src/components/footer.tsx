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
                <span>123 Main Street</span>
              </div>
              <p className="ml-6">Philadelphia, PA 19123</p>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(215) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@bambinisworld.com</span>
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
              <li><a href="#" className="hover:text-blue-300 transition-colors">Newborn (0-6 mo)</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Baby (6-24 mo)</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Toddler (2T-5T)</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Boys (0-8 yrs)</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Girls (0-8 yrs)</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Communion</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Baptism</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Our Store</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Programs & Events</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Accessories and Gifts</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Store Location</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Website Accessibility</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <form className="space-y-3">
              <Input
                type="text"
                placeholder="Name"
                className="bg-white text-gray-900 text-sm"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-white text-gray-900 text-sm"
              />
              <Textarea
                placeholder="Message"
                rows={3}
                className="bg-white text-gray-900 text-sm"
              />
              <Button className="bg-warm-orange hover:bg-orange-600 w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Bambini's World. All rights reserved. Website designed with care for families.</p>
        </div>
      </div>
    </footer>
  );
}
