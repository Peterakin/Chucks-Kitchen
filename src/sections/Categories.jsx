import CategoryCard from "../components/ui/CategoryCard";
import Container from "../components/layout/Container";
import img from "../assets/56d3b68d583b6c8efdc0afccfcb9264f1c04aec4.png";
import img1 from "../assets/Image.png";
import img2 from "../assets/Image (1).png";
import img3 from "../assets/Image (2).png";
import img4 from "../assets/Image.png";
import img5 from "../assets/Image (1).png";
const Categories = () => {
  const categories = [
    {
      title: "Jollof Delights",
      image: img,
    },
    {
      title: "Swallow & Soups",
      image: img1,
    },
    {
      title: "Grills & BBQ",
      image: img2,
    },
    {
      title: "Sweet Treats",
      image: img3,
    },
    {
      title: "Grills & BBQ",
      image: img4,
    },
    {
      title: "Sweet Treats",
      image: img5,
    },
  ];

  return (
    <section className="bg-lightGray py-16">
      <Container>
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark mb-12">
          Popular Categories
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
