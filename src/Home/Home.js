import React from 'react';
import { ArrowRight, Building2, Users, Calculator, FileText, Shield, Clock } from 'lucide-react';
import CarouselBanner from '@/components/CarouselBanner';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Featured Carousel */}
      <section className="py-4 bg-white">
        <CarouselBanner />
      </section>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Business Growth Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              CharteredHelp provides comprehensive business solutions from company registration to ongoing compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/company-registration" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Start Your Business
              </Button>
              <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete business solutions under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Company Registration",
                description: "Register your company with expert guidance and hassle-free process"
              },
              {
                icon: Calculator,
                title: "GST Services",
                description: "Complete GST registration, filing, and compliance management"
              },
              {
                icon: FileText,
                title: "ITR Filing",
                description: "Professional tax return filing and planning services"
              },
              {
                icon: Shield,
                title: "Trademark & IP",
                description: "Protect your brand with trademark and intellectual property services"
              },
              {
                icon: Users,
                title: "Payroll Services",
                description: "Streamline your payroll process with our expert solutions"
              },
              {
                icon: Clock,
                title: "Compliance",
                description: "Stay compliant with all regulatory requirements"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payroll Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Payroll Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500">
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
                  When it comes to paying employees, laws and the IRS have made the payroll function a time consuming nightmare for the small business owner.
                </p>
                <Button
                  href="/services/payroll"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors duration-300"
                >
                  Payroll Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Second Payroll Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Simplify your payroll.
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Small business owners spend an average of eight hours a month performing payroll functions. That&apos;s 12 full days a year that could be spent generating sales, prospecting new business opportunities, improving products or services, or servicing customers.
                </p>
                <Button
                  href="/services/payroll"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors duration-300"
                >
                  Payroll Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600">
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Get expert guidance and comprehensive solutions for all your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Free Consultation
            </Button>
            <Button href="/services" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Companies Registered" },
              { number: "500+", label: "Happy Clients" },
              { number: "50+", label: "Expert Team" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;