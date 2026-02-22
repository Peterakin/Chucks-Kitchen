const CategoryCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4 text-center font-medium text-gray-700">{title}</div>
    </div>
  );
};

export default CategoryCard;
