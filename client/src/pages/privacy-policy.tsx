` tags, ensuring that all necessary changes are included and the code is complete and correct.

```
<replit_final_file>
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-navy mb-6">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
              <li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
              <li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
              <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
              <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
              <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
              <li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
            </ul>

            <p className="mb-6">
              We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.
            </p>

            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
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