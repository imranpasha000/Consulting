import AboutSection from "@/components/AboutSection";
import BlogSlider from "@/components/BlogSlider";
import CarouselHero from "@/components/CarouselBanner";
import FaqAccordion from "@/components/FaqAccordion";
import QuickLinks from "@/components/QuickLinks";
import QuoteForm from "@/components/QuoteForm";
import ServicesSection from "@/components/Services-Section";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import WhyWeAreBest from "@/components/WhyWeAreBest";
import { ArrowRight, Calculator, Users } from "lucide-react";

const faqData = [
  {
    question: "What does the Standards e-Pedia subscription include?",
    answer:
      "It provides access to all the latest standards in one platform with regular updates.",
  },
  {
    question:
      "Can multiple users access the subscription within our organization?",
    answer: "Yes, we offer multi-user access with role-based permissions.",
  },
  {
    question: "Is it possible to customize the subscription?",
    answer:
      "Absolutely, you can tailor your subscription to include only the standards you need.",
  },
  {
    question: "How does the cost compare to purchasing individually?",
    answer:
      "Subscriptions are more cost-effective than buying standards one by one.",
  },
  {
    question: "How often are new standards added or updated?",
    answer: "New standards are added and existing ones updated monthly.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel Banner */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20">
        <CarouselHero />
      </section>

      {/* Services Overview */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20">
        <ServicesSection />
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-green-500 rounded-2xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help you with all your business registration and compliance
              needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white bg-blue-900 hover:bg-green-500 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20 bg-white">
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

      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20">
        <div className="bg-gradient-to-r from-blue-900 to-green-500 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Your Business Growth Partner
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            HindFilings provides comprehensive business solutions from company
            registration to ongoing compliance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/company-registration"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Business
            </Button>
            <Button
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why We Are Best */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20 bg-gray-50">
        <WhyWeAreBest />
      </section>

      {/* Payroll Services Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20 bg-white">
        {/* First Payroll Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-green-500">
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
                className="inline-flex items-center bg-white hover:bg-green-500 border-2 border-green-500 text-green-500 hover:text-white font-semibold text-lg transition-colors duration-300"
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
                className="inline-flex items-center bg-white hover:bg-green-500 border-2 border-green-500 text-green-500 hover:text-white font-semibold text-lg transition-colors duration-300"
              >
                Payroll Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-64 lg:h-auto order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-green-500">
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

      {/* Testimonials */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20 bg-gray-50">
        <TestimonialsSection />
      </section>

      {/* Quick Links */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20 bg-white">
        <QuickLinks />
      </section>

      {/* Blog Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20 bg-gray-50">
        <BlogSlider />
      </section>

      {/* Quote Form */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20 bg-white">
        <QuoteForm />
      </section>

      {/* Final CTA Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20">
        <div className="bg-gradient-to-r from-blue-900 to-green-500 rounded-2xl p-8 sm:p-12 text-white text-center">
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
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Button>
            <Button
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-20 bg-gray-50">
        <FaqAccordion title="Frequently Asked Questions" faqs={faqData} />
      </section>
    </div>
  );
};

export default HomePage;
