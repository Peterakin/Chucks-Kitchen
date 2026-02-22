import ProductCard from "../components/ui/ProductCard";
import Container from "../components/layout/Container";
import image1 from "../assets/Image (5).png";
import image2 from "../assets/56d3b68d583b6c8efdc0afccfcb9264f1c04aec4.png";
import image3 from "../assets/Image (6).png";
import image4 from "../assets/Image (7).png";

const Specials = () => {
  const products = [
    {
      title: "Spicy Tilapia Pepper Soup",
      description: "A comforting and spicy soup with tender tilapia fish.",
      price: "₦3,500",
      image: image1,
    },
    {
      title: "Jollof Rice & Fried Chicken",
      description: "Our signature Jollof rice, cooked to perfection.",
      price: "₦3,500",
      image: image2,
    },
    {
      title: "Egusi Soup & Pounded Yam",
      description: "Rich and savory Egusi soup with assorted meats.",
      price: "₦3,500",
      image: image2,
    },
    {
      title: "Spicy Tilapia Pepper Soup",
      description: "A comforting and spicy soup with tender tilapia fish.",
      price: "₦3,500",
      image: image2,
    },
    {
      title: "Jollof Rice & Fried Chicken",
      description: "Our signature Jollof rice, cooked to perfection.",
      price: "₦3,500",
      image: image3,
    },
    {
      title: "Egusi Soup & Pounded Yam",
      description: "Rich and savory Egusi soup with assorted meats.",
      price: "₦3,500",
      image: image4,
    },
  ];

  return (
    <section className="bg-lightGray py-20">
      <Container>
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark mb-14">
          Chef's Specials
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Specials;
