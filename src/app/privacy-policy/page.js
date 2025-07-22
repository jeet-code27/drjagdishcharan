import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 sm:p-10 lg:p-12 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
           <span className="font-semibold text-blue-800">Dr. Jagdish Singh Charan</span>, we are committed to protecting your privacy and the confidentiality of your personal information.
        </p>

        <div className="space-y-8 text-gray-700 text-base leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Name, email, and phone number (via contact form)</li>
              <li>Appointment details (if applicable)</li>
              <li>Usage data (e.g., pages visited, time spent on the site)</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to your inquiries and appointment requests</li>
              <li>To improve our website’s functionality and user experience</li>
              <li>To ensure patient care and communication</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">3. Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or destruction.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">4. Sharing of Information</h2>
            <p>
              We do not share, sell, or rent your personal information to third parties. Your data is only used internally for providing medical services and improving patient experience.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">5. Third-Party Services</h2>
            <p>
              Our website may use Google Analytics or similar tools to collect anonymous usage statistics. These services may set cookies to collect data such as IP addresses and browser type.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any time by contacting us.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">7. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with the revised date.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">8. Contact Us</h2>
            <p>
              If you have any questions about this policy or how we handle your information, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:jaggi.spine1104@gmail.com"
                className="text-blue-600 hover:underline"
              >
                jaggi.spine1104@gmail.com
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+918003474733"
                className="text-blue-600 hover:underline"
              >
                +91-8003474733
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
