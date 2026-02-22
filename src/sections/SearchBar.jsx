const SearchBar = () => {
  return (
    <div className="relative -mt-8 z-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
          <input
            type="text"
            placeholder="What are you craving for today?"
            className="w-full outline-none text-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
