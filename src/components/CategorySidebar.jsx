const categories = [
  "Popular",
  "Jollof Rice & Entrees",
  "Swallow & Soups",
  "Grills & sides",
  "Beverages",
  "Desserts",
];

const CategorySidebar = ({ selected, setSelected }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
      <h3 className="font-semibold mb-4">Menu Categories</h3>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setSelected(cat)}
            className={`cursor-pointer px-3 py-2 rounded-md transition ${
              selected === cat
                ? "bg-orange-100 text-primary font-medium border-l-4 border-primary"
                : "hover:bg-gray-100"
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
