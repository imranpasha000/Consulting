"use client";
import { useState } from "react";

export default function FaqAccordion({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-8">
      {title && (
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          {title}
        </h2>
      )}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-900/20 rounded-lg shadow-sm"
          >
            {/* Question */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-blue-900/10 hover:bg-green-600/10 transition-colors rounded-lg"
            >
              <span className="text-gray-900 font-medium">
                Q: {faq.question}
              </span>
              <span className="text-blue-900 font-bold text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 py-3 text-sm text-gray-700 bg-white border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
