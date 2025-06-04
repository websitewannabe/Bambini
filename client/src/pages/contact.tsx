import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <link rel="canonical" href="https://bambinisworld.com/contact" />
        <title>Contact Bambini's World | Visit or Send Us a Message</title>
        <meta
          name="description"
          content="Have a question or need assistance? Contact Bambini's World in Warrington, PA via phone, email, or our contact form. We’re here to help."
        />
        <meta
          name="keywords"
          content="contact Bambini's World, baby boutique contact, Warrington PA store, customer service, kids clothing store contact"
        />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Contact Bambini's World | Visit or Send Us a Message"
        />
        <meta
          property="og:description"
          content="Reach out to Bambini's World for help with your order or visit us in-store in Warrington, PA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bambinisworld.com/contact" />
        <meta
          property="og:image"
          content="https://bambinisworld.netlify.app/images/bambiniShop.webp"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Bambini's World",
            url: "https://bambinisworld.com/contact",
            description:
              "Contact Bambini's World for customer support, store hours, or general inquiries. Located in Warrington, PA, we offer multiple ways to get in touch.",
            contactOption: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+1-215-230-4572",
                email: "bambinisworld.info@gmail.com",
                availableLanguage: ["English"],
              },
            ],
            publisher: {
              "@type": "Organization",
              name: "Bambini's World",
              url: "https://bambinisworld.com",
              logo: "https://bambinisworld.netlify.app/images/bambiniShop.webp",
            },
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300">
              We'd love to hear from you! Get in touch with any questions or
              visit our store.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-light-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy mb-2">
                          Visit Our Store
                        </h3>
                        <p className="text-gray-600">
                          1589 N Main Street
                          <br />
                          Warrington, PA 18976
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-light-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy mb-2">
                          Call Us
                        </h3>
                        <p className="text-gray-600">(215) 230-4572</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-light-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy mb-2">
                          Email Us
                        </h3>
                        <p className="text-gray-600">
                          bambinisworld.info@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-light-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy mb-2">
                          Store Hours
                        </h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Saturday: 11:00 AM – 6:00 PM</p>
                          <p>Sunday: 12:00 PM – 4:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button
                className="bg-light-blue hover:bg-blue-600 text-white px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir/?api=1&destination=1589+N+Main+Street+Warrington%2C+PA+18976",
                    "_blank",
                  )
                }
              >
                Get Directions
              </Button>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-navy">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    className="space-y-6"
                  >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <Label htmlFor="bot-field">
                        Don't fill this out if you're human:
                      </Label>
                      <Input name="bot-field" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          className="mt-1"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          className="mt-1"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-1"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="mt-1"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        className="mt-1"
                        rows={5}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>* Required fields</p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-soft-pink hover:bg-pink-600 text-white py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
