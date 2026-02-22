import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-primary font-bold text-xl">Chuks Kitchen</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-20 text-gray-600">
            <a href="#" className="text-primary font-medium">
              Home
            </a>
            <a href="#">Explore</a>
            <a href="#">My Orders</a>
            <a href="#">Account</a>
          </nav>

          {/* Login Button */}
          <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-600 transition">
            Login
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">☰</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
