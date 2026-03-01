import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1
            className="font-logo text-3xl text-orange-600"
            style={{ fontFamily: "Island Moments" }}
          >
            Chuks Kitchen
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-20 text-gray-600">
            <Link
              className="text-primary font-medium hover:text-orange-600"
              to="/"
            >
              Home
            </Link>
            <Link className=" hover:text-orange-600" to="/explore">
              Explore
            </Link>
            <Link className=" hover:text-orange-600" to="/">
              My Orders
            </Link>
            <Link className=" hover:text-orange-600" to="/">
              Account
            </Link>
          </nav>

          {/* Login Button */}
          <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-600 transition">
            <Link to="/signin">Login</Link>
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">☰</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
