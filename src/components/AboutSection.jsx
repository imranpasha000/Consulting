import React from "react";

const AboutSection = ({
  title,
  subtitle,
  description,
  experienceYears,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image + Badge */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-gradient-to-r from-green-600 to-blue-900 text-white px-6 py-4 rounded-lg shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold">{experienceYears}+</h3>
            <p className="text-sm md:text-base">Years Experience</p>
          </div>
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">{subtitle}</p>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          {/* Button */}
          <a
            href={buttonLink}
            className="inline-block bg-gradient-to-r from-green-600 to-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            {buttonText} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
