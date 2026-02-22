const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500 mt-2 flex-grow">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-bold">{price}</span>
          <button className="bg-primary text-white px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-600 transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
