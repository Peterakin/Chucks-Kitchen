import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage:
          "url('/src/assets/ac04492104ce9181b9d37ce45eedfae9f04020a7.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      //<div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl md:text-5xl font-bold max-w-xl">
          The Heart of Nigerian Home Cooking
        </h2>

        <p className="mt-4 text-lg max-w-md">
          Handcrafted with passion, delivered with care.
        </p>

        <button className="mt-6 bg-primary px-6 py-3 rounded-md font-medium bg-orange-600 hover:bg-orange-600 transition">
          Discover what's new
        </button>
      </div>
    </section>
  );
};

export default Hero;
