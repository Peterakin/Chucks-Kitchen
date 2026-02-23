import { Utensils, Truck, Store } from "lucide-react";
import Footer from "../components/layout/Footer";

const Welcome = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* MAIN CONTENT */}
        <div className="flex flex-1">
          {/* LEFT IMAGE */}
          <div className="hidden lg:block w-1/2">
            <img
              src="src/assets/b34e6c700df600b228e2ab2504fc9bbf7815c2ed.png"
              alt="Food"
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col justify-between px-8 py-10">
            {/* Top Bar */}
            <div className="flex justify-between items-center">
              <h1 className="text-primary text-xl font-semibold">
                Chuks Kitchen
              </h1>

              <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded-md hover:bg-blue-50 transition">
                Sign In
              </button>
            </div>

            {/* Center Content */}
            <div className="max-w-md mx-auto mt-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Your Authentic Taste of Nigeria
              </h2>

              <p className="text-gray-600 mb-8">
                Experience homemade flavors delivered fresh to your desk or
                home. We bring the rich culinary heritage of Nigeria right to
                your doorstep.
              </p>

              {/* Features */}
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Utensils size={18} className="text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Freshly Prepared
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Store size={18} className="text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Support Local Business
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Truck size={18} className="text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Fast & Reliable Delivery
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <button className="w-full bg-primary text-white py-3 rounded-md font-medium bg-orange-600 transition mb-4">
                Start Your Order
              </button>

              <button className="w-full border border-blue-500 text-blue-500 py-3 rounded-md hover:bg-blue-50 transition">
                Learn More About Us
              </button>
            </div>

            {/* Bottom Note */}
            <div className="text-center text-sm text-gray-500 mt-10">
              © 2024 Chuks Kitchen.
              <span className="ml-3 text-blue-500 cursor-pointer">
                Privacy Policy
              </span>
              <span className="ml-3 text-blue-500 cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
