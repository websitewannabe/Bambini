import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    id: 1,
    question: "What Are Your Store Hours & Location?",
    answer:
      "Open Hours: Mon-Sat 11:00 AM – 6:00 PM, Sun 12:00 PM – 4:00 PM. Address: 1589 N Main Street Warrington, PA 18976",
  },
  {
    id: 2,
    question: "Can I Place An Order Over The Phone?",
    answer:
      "You can place an order over the phone or from our online store.  Give us a call during our open hours and we can help you at 215-230-4572.",
  },
  {
    id: 3,
    question: "Which Items Do You Carry In-Store?",
    answer:
      "Every Item in our store is also available online and vice versa.  If you see the item within our online store, you can come see it in the store as well. (Depending on Stock Levels).",
  },
  {
    id: 4,
    question: "Do You Have Changing Rooms?",
    answer:
      "Yes, we changing rooms available for your children to try on items as necessary.",
  },
  {
    id: 5,
    question: "Do You Offer Gift Wrapping?",
    answer:
      "Gift wrapping is offered all year.  Give us a call during our open hours and we can help you at 215-230-4572.",
  },
  {
    id: 6,
    question: "What Is Your Return Policy?",
    answer:
      " Item(s) must be turned within 30 days of receiving it. To exchange an item, contact bambinisworld.info@gmail.com with your order #, name, and the item you wish to exchange. All items must be returned with all tags still attached. You can view our full return policy.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Our Most <span className="text-warm-orange">Asked Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.id} className="border border-gray-200">
              <CardContent className="p-0">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className="font-medium text-navy">{faq.question}</span>
                  {openId === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
