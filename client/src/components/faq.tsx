import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    id: 1,
    question: "What Are Your Store Hours & Location?",
    answer:
      "Yes, we offer personalized fitting appointments to ensure the perfect fit for your child's special occasion outfit. Please call us to schedule an appointment.",
  },
  {
    id: 2,
    question: "How far in advance should I order my child's communion dress?",
    answer:
      "We recommend ordering communion dresses at least 2-3 months in advance to allow time for any necessary alterations and to ensure availability.",
  },
  {
    id: 3,
    question: "Do you offer alterations for communion dresses?",
    answer:
      "Yes, we provide professional alteration services to ensure your child's dress fits perfectly for their special day.",
  },
  {
    id: 4,
    question: "What should I bring for my child's fitting?",
    answer:
      "Please bring the shoes your child will wear with the outfit and any special undergarments. This helps ensure the most accurate fit.",
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
