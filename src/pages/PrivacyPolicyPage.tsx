import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-cyan-50 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-10">
            <Link to="/" className="text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors">
              ← Back to Home
            </Link>
            <h1 className="mt-4 text-4xl font-extrabold text-sky-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sky-600 text-sm">
              Last updated: July 15, 2026
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-cyan-100 p-8 space-y-8 text-sky-800">

            {/* Intro */}
            <section>
              <p className="text-sky-700 leading-relaxed">
                Innovate Wave ("we", "us", or "our") operates the website{' '}
                <a href="https://innovatewave.online" className="text-cyan-600 hover:underline">
                  innovatewave.online
                </a>{' '}
                and associated Facebook lead generation forms. This Privacy Policy explains how we collect,
                use, and protect your personal information when you interact with our services.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">1. Information We Collect</h2>
              <p className="text-sky-700 leading-relaxed mb-3">
                We collect information you voluntarily provide through our contact forms and Facebook lead forms, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sky-700 ml-2">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Business type or industry</li>
                <li>Any additional details you provide in messages</li>
              </ul>
              <p className="mt-3 text-sky-700 leading-relaxed">
                We may also collect non-personal data automatically through cookies and analytics tools,
                such as browser type, pages visited, and time spent on the site.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">2. How We Use Your Information</h2>
              <p className="text-sky-700 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sky-700 ml-2">
                <li>Contact you regarding your website inquiry or consultation request</li>
                <li>Provide quotes, proposals, and project information</li>
                <li>Respond to your questions and support requests</li>
                <li>Improve our services and website experience</li>
                <li>Send relevant service updates (only with your consent)</li>
              </ul>
              <p className="mt-3 text-sky-700 leading-relaxed">
                We do <strong>not</strong> sell, rent, or share your personal information with third
                parties for marketing purposes.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">3. Facebook Lead Forms</h2>
              <p className="text-sky-700 leading-relaxed">
                When you submit information through our Facebook or Instagram lead ads, that data is
                collected by Meta Platforms, Inc. and shared with us under Meta's Data Policy. By
                submitting a lead form, you agree to both this Privacy Policy and{' '}
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline"
                >
                  Meta's Privacy Policy
                </a>
                . We access your submitted data solely to follow up on your inquiry.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">4. Data Retention</h2>
              <p className="text-sky-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the
                purpose it was collected for — typically the duration of our business relationship
                or inquiry process. You may request deletion of your data at any time by contacting
                us directly.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">5. Cookies</h2>
              <p className="text-sky-700 leading-relaxed">
                Our website may use cookies to improve user experience and analyze site traffic via
                tools such as Google Analytics or Meta Pixel. You can disable cookies through your
                browser settings at any time. Disabling cookies may affect some functionality of
                the website.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">6. Data Security</h2>
              <p className="text-sky-700 leading-relaxed">
                We take reasonable technical and organizational measures to protect your personal
                information from unauthorized access, loss, or misuse. However, no method of
                internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">7. Your Rights</h2>
              <p className="text-sky-700 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-sky-700 ml-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for future communications at any time</li>
              </ul>
              <p className="mt-3 text-sky-700 leading-relaxed">
                To exercise any of these rights, contact us using the details below.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">8. Third-Party Links</h2>
              <p className="text-sky-700 leading-relaxed">
                Our website may contain links to external websites. We are not responsible for the
                privacy practices or content of those sites. We encourage you to review the privacy
                policy of any third-party site you visit.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">9. Changes to This Policy</h2>
              <p className="text-sky-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated effective date. We encourage you to review this page
                periodically.
              </p>
            </section>

            <hr className="border-cyan-100" />

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-sky-900 mb-3">10. Contact Us</h2>
              <p className="text-sky-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your data,
                please contact us:
              </p>
              <div className="bg-cyan-50 rounded-xl p-5 space-y-2 border border-cyan-100">
                <p className="font-bold text-sky-900">Innovate Wave</p>
                <p className="text-sky-700">📧 Email: <a href="mailto:hello@innovatewave.online" className="text-cyan-600 hover:underline">hello@innovatewave.online</a></p>
                <p className="text-sky-700">📞 Phone: <a href="tel:+8801886675596" className="text-cyan-600 hover:underline">01886675596</a></p>
                <p className="text-sky-700">🌐 Website: <a href="https://innovatewave.online" className="text-cyan-600 hover:underline">innovatewave.online</a></p>
                <p className="text-sky-700">📍 Bangladesh</p>
              </div>
            </section>

          </div>

          {/* Footer note */}
          <p className="mt-8 text-center text-sky-500 text-sm">
            © {new Date().getFullYear()} Innovate Wave. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
