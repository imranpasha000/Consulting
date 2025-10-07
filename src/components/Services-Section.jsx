import { Building2, Calculator, FileText, Shield, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Company Registration",
    description: "There are many types of company registration in India. What type of company registration is best, in your case, is one of the most important.",
  },
  {
    icon: Calculator,
    title: "GST Registration",
    description: "GST (Goods & Services Tax) Registration is required in India for selling most of the goods and services in India.",
  },
  {
    icon: FileText,
    title: "ITR Filing",
    description: "ITR filing is mandatory if your income is above the threshold limit in India. ITR Filing for Salary Income, Business Income, Capital Gain, Interest Income etc.",
  },
  {
    icon: Shield,
    title: "Trademark Registration",
    description: "Trademark Registration is the best way to protect your brand name and logo in India.",
  },
  {
    icon: Users,
    title: "Accounting Services",
    description: "Accounting is the backbone of business. It is highly recommended for every business.",
  },
  {
    icon: Clock,
    title: "Auditing Services",
    description: "There are various types of audit applicability in India like Statutory Audit, Tax Audit, GST Audit etc.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete business solutions under one roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-700" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover Line Effect */}
              <div className="w-0 group-hover:w-16 h-0.5 bg-blue-600 mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}