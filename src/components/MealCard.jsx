import { Plus } from "lucide-react";

const MealCard = ({ meal }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Image */}
      <img
        src={meal.image}
        alt={meal.name}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1">{meal.name}</h3>

        <p className="text-sm text-gray-500 mb-3">{meal.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold text-orange-600">
            ₦{meal.price.toLocaleString()}
          </span>

          <button className="bg-primary text-white p-2 rounded-full bg-orange-600 transition">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
