import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function OneStopSolution() {
  return (
    <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-200 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - One Stop Solution */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo/1.png"
              alt="CharteredHelp Logo"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              ONE STOP SOLUTION
            </h1>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
              CONTAINING REGISTRATION
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "GST REGISTRATION",
              "TRADEMARK REGISTRATION",
              "TAX AUDITING",
              "ITR FILING",
              "TAX SECRETS",
              "ACCOUNTING",
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover:bg-blue-900 transition-colors duration-300"></div>
                <span className="text-gray-700 font-medium group-hover:text-blue-900 transition-colors duration-300">
                  {service}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-300 pt-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Contact Us
            </h3>
            <div className="w-16 h-1 bg-green-500 mb-6"></div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Address</p>
                  <p className="text-gray-600 text-sm">
                    112, Vishal Chamber's Opp. GIP Mall
                    <br />
                    Sector-18, Noida
                    <br />
                    Gautam Buddha Nagar, U.P. 201301
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Phone</p>
                  <a
                    href="tel:7303595050"
                    className="text-gray-600 text-sm hover:text-green-500 transition-colors"
                  >
                    +91 7303595050
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium">Email</p>
                  <a
                    href="mailto:info@hindfilings.com"
                    className="text-gray-600 text-sm hover:text-green-500 transition-colors"
                  >
                    info@hindfilings.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - CA Firm Description */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Best CA Firm in Noida, Sector - 18
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Are you looking for a reliable{" "}
            <strong className="text-green-500">
              Chartered Accountant in Noida?
            </strong>{" "}
            Look no further than CharteredHelp. We are easily accessible and
            strategically positioned to serve businesses across Noida and the
            surrounding areas.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            We offer a wide range of services designed to support your business
            at every stage of its growth. Our office in{" "}
            <strong className="text-green-500">Noida Sector-18</strong> is
            conveniently located to serve you. Contact us today to schedule a
            consultation and discover how we can help you achieve your financial
            goals.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to CharteredHelp, your trusted partner for all your
            financial, auditing, and compliance needs. As a leading{" "}
            <strong className="text-green-500">
              Chartered Accountant in Noida
            </strong>
            , we offer a comprehensive range of services tailored to meet the
            unique requirements of businesses, startups, and individuals.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our expertise in the field and commitment to excellence make us the
            go-to <strong className="text-green-500">CA Firm in Noida</strong>{" "}
            for all your accounting and financial management needs. At
            CharteredHelp, we understand the complexities of the financial world
            and the importance of accurate, timely, and reliable accounting
            services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="tel:7303595050"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Call Now
            </a>
            <a
              href="mailto:info@hindfilings.com"
              className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
