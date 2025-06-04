
import { Helmet } from "react-helmet";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Return & Exchange Policy - Bambini's World</title>
        <meta name="description" content="Learn about Bambini's World return and exchange policy for online and in-store purchases." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-navy mb-6">Return & Exchange Policy</h1>
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Return & Exchange Policy (ONLINE)</h2>
            <p className="mb-4">
              If your order does not meet your expectations, you may exchange your order or receive store credit. You must send back your item(s) within 30 days from receiving it. To exchange an item, contact bambinisworld.info@gmail.com with your order #, name, and item you wish to exchange. All items must be returned with all tags still attached. Any shipping charges will be customers responsibility.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Return & Exchange Policy (IN STORE)</h2>
            <p className="mb-4">
              If your purchase does not meet your expectations, you may exchange your items or receive store credit. You must bring back your item(s) within 30 days from purchasing it. All items must be returned with all tags still attached, in good wearing condition, and a receipt must be present at the time of exchange.
            </p>
           
            <div className="bg-gray-50 p-4 rounded-lg mt-8">
              <p className="mb-2">
                <strong>Bambini's World</strong><br />
                1589 N Main Street<br />
                Warrington, PA 18976<br />
                Phone: <a href="tel:2152304572" className="text-navy hover:underline">(215) 230-4572</a><br />
                Email: <a href="mailto:bambinisworld.info@gmail.com" className="text-navy hover:underline">bambinisworld.info@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
