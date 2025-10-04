import React from "react";
import {
  ArrowRight,
  Building2,
  Users,
  Calculator,
  FileText,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CarouselHero from "@/components/CarouselBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSlider from "@/components/BlogSlider";
import AboutSection from "@/components/AboutSection";
import WhyWeAreBest from "@/components/WhyWeAreBest";
import QuickLinks from "@/components/QuickLinks";
import QuoteForm from "@/components/QuoteForm";
import FaqAccordion from "@/components/FaqAccordion";

const services = [
  {
    icon: Building2,
    title: "Company Registration",
    description:
      "There are many types of company registration in India. What type of company registration is best, in your case, is one of the most important.",
  },
  {
    icon: Calculator,
    title: "GST Registration",
    description:
      "GST (Goods & Services Tax) Registration is required in India for selling most of the goods and services in India.",
  },
  {
    icon: FileText,
    title: "ITR Filing",
    description:
      "ITR filing is mandatory if your income is above the threshold limit in India. ITR Filing for Salary Income, Business Income, Capital Gain, Interest Income etc.",
  },
  {
    icon: Shield,
    title: "Trademark Registration",
    description:
      "Trademark Registration is the best way to protect your brand name and logo in India.",
  },
  {
    icon: Users,
    title: "Accounting Services",
    description:
      "Accounting is the backbone of business. It is highly recommended for every business.",
  },
  {
    icon: Clock,
    title: "Auditing Services",
    description:
      "There are various types of audit applicability in India like Statutory Audit, Tax Audit, GST Audit etc.",
  },
];

const faqData = [
  {
    question: "What does the Standards e-Pedia subscription include?",
    answer: "It provides access to all the latest standards in one platform with regular updates."
  },
  {
    question: "Can multiple users access the subscription within our organization?",
    answer: "Yes, we offer multi-user access with role-based permissions."
  },
  {
    question: "Is it possible to customize the subscription?",
    answer: "Absolutely, you can tailor your subscription to include only the standards you need."
  },
  {
    question: "How does the cost compare to purchasing individually?",
    answer: "Subscriptions are more cost-effective than buying standards one by one."
  },
  {
    question: "How often are new standards added or updated?",
    answer: "New standards are added and existing ones updated monthly."
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel Banner */}
      <section className="w-full pt-16">
        <CarouselHero />
      </section>

      {/* Services Overview */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete business solutions under one roof
          </p>
        </div>

        <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <AboutSection
            title="About HindFilings"
            subtitle="Running a successful business requires expert guidance, especially when it comes to navigating complex financial matters."
            description="At our firm in Noida, our Chartered Accountants (CAs) are dedicated to providing comprehensive services that include Company Registration, GST Registration, and ITR Filing. As one of the leading CA firms in Noida, we take pride in upholding the highest ethical standards, ensuring transparency in all our dealings."
            experienceYears="10"
            image="/Images/1.webp"
            buttonText="READ MORE"
            buttonLink="/about"
          />
        </section>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border hover:shadow-xl transition duration-300 w-full"
            >
              <service.icon className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8 bg-gradient-to-r from-blue-900 to-green-600 text-white py-12 sm:py-16 md:py-20 mb-8 mt-8 overflow-hidden">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Your Business Growth Partner
          </h2>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto px-2">
            HindFilings provides comprehensive business solutions from company registration to ongoing compliance
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
            <Button
              href="/company-registration"
              className="w-full sm:w-auto bg-green-600 border-2 border-white text-white hover:bg-blue-800 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Start Your Business
            </Button>

            <Button
              href="/contact"
              className="w-full sm:w-auto border-2 border-white text-blue-900 bg-white hover:text-white hover:bg-blue-800 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <WhyWeAreBest />
      </section>

      {/* Payroll Services Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
        {/* First Payroll Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-pink-500">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                </div>
                {/* Abstract business silhouettes */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <div className="flex space-x-4">
                    <div className="w-8 h-16 bg-black/50 rounded-t-full"></div>
                    <div className="w-8 h-16 bg-black/50 rounded-t-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Company Name is licensed in VT and specializes in Payroll.
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                When it comes to paying employees, laws and the IRS have made
                the payroll function a time consuming nightmare for the small
                business owner.
              </p>
              <Button
                href="/services/payroll"
                className="inline-flex items-center bg-white hover:bg-blue-900 border-2 border-green-600  text-blue-900 hover:text-white font-semibold text-lg transition-colors duration-300"
              >
                Payroll Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Second Payroll Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Simplify your payroll.
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Small business owners spend an average of eight hours a month
                performing payroll functions. That&apos;s 12 full days a year
                that could be spent generating sales, prospecting new business
                opportunities, improving products or services, or servicing
                customers.
              </p>
              <Button
                href="/services/payroll"
                className="inline-flex items-center bg-white hover:bg-blue-900 border-2 border-green-600  text-blue-900 hover:text-white font-semibold text-lg transition-colors duration-300"
              >
                Payroll Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-64 lg:h-auto order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-600">
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Tech/Digital theme */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                      <Calculator className="w-12 h-12 text-white" />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-white/30 rounded-full animate-pulse delay-75"></div>
                    <div className="absolute top-8 -left-8 w-8 h-8 bg-white/20 rounded-lg animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
        <TestimonialsSection />
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
        <QuickLinks />
      </section>

      {/* Blog Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
        <BlogSlider />
      </section>

      <section className="max-w-screen-2xl mx-auto w-full py-16 sm:py-20 bg-gray-50 px-2 sm:px-4 lg:px-8">
        <QuoteForm />
      </section>

      {/* Call to Action Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-green-600 text-white py-16 sm:py-20 mb-8 mt-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get expert guidance and comprehensive solutions for all your
            business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              className="bg-green-600 text-white hover:bg-white border-2 hover:text-blue-900 border-green-600 hover:border-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Free Consultation
            </Button>

            <Button
              href="/services"
              className="border-2 border-white text-blue-900 bg-white hover:bg-blue-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
        <FaqAccordion title="Frequently Asked Questions" faqs={faqData} />
      </section>
    </div>
  );
};

export default HomePage;
