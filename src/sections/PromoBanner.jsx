import Container from "../components/layout/Container";

const PromoBanner = () => {
  return (
    <section
      className="relative h-[400px] md:h-[500px] flex items-center"
      style={{
        backgroundImage:
          "url('src/assets/f30e8a349d6f6f58f96aab7669df30176ece420c.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <Container>
        <div className="relative text-white max-w-2xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Introducing Our New Menu Additions!
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-200">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>

          <button className="mt-6 bg-primary px-6 py-3 rounded-md font-medium bg-orange-600 hover:bg-orange-600 transition">
            Discover what's new
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PromoBanner;
