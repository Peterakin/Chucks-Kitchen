import { useState } from "react";
import { meals } from "../data/meals";
import MealCard from "../components/MealCard";
import CategorySidebar from "../components/CategorySidebar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const filteredMeals = meals.filter(
    (meal) => meal.category === selectedCategory,
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {/* HERO */}
      <div className="relative h-150">
        <img
          src="src/assets/ac04492104ce9181b9d37ce45eedfae9f04020a7.png"
          alt="Food"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-3xl font-bold">Chuks Kitchen</h1>
            <p className="mt-2 text-sm">
              Chuks Kitchen Nigerian Home Cooking 4.8★ (1.2k)
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-4 gap-8">
        {/* SIDEBAR */}
        <div className="lg:col-span-1">
          <CategorySidebar
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
        </div>

        {/* MEALS */}
        <div className="lg:col-span-3">
          <h2 className="text-xl font-semibold mb-6">{selectedCategory}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Explore;
