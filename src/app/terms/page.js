import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 sm:p-10 lg:p-12 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-gray-700 text-base leading-relaxed">
          <p>
            These Terms and Conditions ("Terms") govern your access to and use of the website operated by 
            <span className="font-semibold text-blue-800"> Dr. Jagdish Singh Charan</span>   
            . By using our website, you agree to be bound by these Terms.
          </p>

          {/* 1. Medical Information Disclaimer */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">1. Medical Information Disclaimer</h2>
            <p>
              The content provided on this website is for informational purposes only and does not constitute medical advice. You should consult with a qualified healthcare professional for diagnosis or treatment of any medical condition.
            </p>
          </div>

          {/* 2. Appointments and Communication */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">2. Appointments and Communication</h2>
            <p>
              By submitting an appointment request through our website, you consent to be contacted via the details provided. We are not responsible for delays or unavailability caused by technical issues or incorrect information.
            </p>
          </div>

          {/* 3. User Conduct */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">3. User Conduct</h2>
            <p>
              You agree not to misuse this website or engage in unlawful behavior including, but not limited to, unauthorized access, data mining, or distributing malicious software.
            </p>
          </div>

          {/* 4. Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">4. Intellectual Property</h2>
            <p>
              All content on this website including text, graphics, and branding is the property of Dr. Jagdish Singh Charan unless otherwise stated. Reproduction without permission is strictly prohibited.
            </p>
          </div>

          {/* 5. Third-Party Links */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">5. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the content or practices of any third-party websites.
            </p>
          </div>

          {/* 6. Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">6. Limitation of Liability</h2>
            <p>
              We are not liable for any direct or indirect damages resulting from the use of our website. All access is at your own risk.
            </p>
          </div>

          {/* 7. Changes to Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">7. Changes to Terms</h2>
            <p>
              We reserve the right to update or change these Terms at any time without notice. It is your responsibility to review this page periodically for updates.
            </p>
          </div>

          {/* 8. Governing Law */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of India.
            </p>
          </div>

          {/* 9. Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, feel free to contact us at:
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

export default TermsAndConditions;
