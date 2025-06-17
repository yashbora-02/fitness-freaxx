import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Dumbbell, Phone, Mail, MapPin } from 'lucide-react';
import contactBackground from '../assets/contact b1.jpg';



const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-sm border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-black text-white">FITNESS FREAXX</span>
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Header Section with background image */}
        <section
          className="py-20 bg-cover bg-center text-white"
          style={{
            backgroundColor: "#1f2937"
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 bg-black/60 rounded-lg py-10">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              GET IN <span className="text-red-600">TOUCH</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to start your fitness journey? Contact us today and let's unleash your potential together.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="text-gray-300">
                      123 Fitness Street
                      <br />
                      Muscle City, MC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-gray-300">+91 7830356468</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-gray-300">Mukulchavariya.14@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <p className="text-gray-300">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>

            {/* CTA with background */}
            <div
              className="rounded-lg p-10 flex flex-col justify-center items-center text-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${contactBackground})`,
                backgroundColor: "#111827"
              }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Want to Join Our Training Program?</h2>
              <p className="text-gray-200 mb-8">
                Contact us directly via phone or email to discuss your fitness goals and find the right plan for you!
              </p>
              <a
                href="tel:+917830356468"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold mb-4 inline-flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:Mukulchavariya.14@gmail.com"
                className="text-red-400 underline hover:text-red-300"
              >
                Or drop us an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
