
export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-navy mb-6">Refund Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Return Period</h2>
            <p className="mb-4">
              You have 30 days from the date of purchase to return items for a full refund. Items must be returned in their original condition with tags attached and in original packaging.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Eligible Items</h2>
            <p className="mb-4">
              The following items are eligible for return:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Clothing items in original condition</li>
              <li>Accessories that have not been worn</li>
              <li>Gifts and toys in original packaging</li>
              <li>Shoes that have not been worn outdoors</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Non-Returnable Items</h2>
            <p className="mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom or personalized items</li>
              <li>Items damaged by misuse</li>
              <li>Undergarments for hygiene reasons</li>
              <li>Items returned after 30 days</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Return Process</h2>
            <p className="mb-4">
              To initiate a return:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Contact us at (215) 230-4572 or bambinisworld.info@gmail.com</li>
              <li>Provide your order number and reason for return</li>
              <li>We will provide return shipping instructions</li>
              <li>Package items securely and ship to our store</li>
            </ol>
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Refund Processing</h2>
            <p className="mb-4">
              Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund. If approved, your refund will be processed and applied to your original method of payment within 5-10 business days.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Exchanges</h2>
            <p className="mb-4">
              We offer exchanges for different sizes or colors when available. Exchange requests must be made within the 30-day return period.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Shipping Costs</h2>
            <p className="mb-4">
              Original shipping costs are non-refundable. Return shipping costs are the responsibility of the customer unless the return is due to our error.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-6 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our refund policy, please contact us:
            </p>
            <p className="mb-2">
              <strong>Bambini's World</strong><br />
              1589 N Main Street<br />
              Warrington, PA 18976<br />
              Phone: (215) 230-4572<br />
              Email: bambinisworld.info@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
