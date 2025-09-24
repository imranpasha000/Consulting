
import { FaUserTie, FaHandsHelping, FaMapMarkedAlt } from "react-icons/fa";

export default function WhyWeAreBest() {
  return (
    <section className="bg-gray-100 rounded-lg text-gray-900 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-green-500 font-semibold uppercase tracking-wide">
            Choose Us
          </p>
          <h2 className="text-4xl font-bold mt-2 mb-8">Why We Are Best</h2>

          {/* Card 1 */}
          <div className="bg-blue-600 rounded-2xl shadow-md p-6 mb-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-3xl">
                <FaUserTie />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-white">
                  Expertise and Professionalism
                </h3>
                <p className="text-gray-300">
                  Our team comprises highly qualified Chartered Accountants,
                  Company Secretaries, and Advocates, ensuring you receive
                  top-notch professional services.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 rounded-2xl shadow-md p-6 mb-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-3xl">
                <FaHandsHelping />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-white">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-300">
                  At CharteredHelp, our clients are our priority. We are
                  committed to providing exceptional customer service and
                  fostering long-term relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-600 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-3xl">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-white">Local Expertise</h3>
                <p className="text-gray-300">
                  Located in Sector-18, Noida, Uttar Pradesh, we have a deep
                  understanding of the local business environment and regulatory
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="/Images/meeting.webp"
            alt="Business meeting"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
