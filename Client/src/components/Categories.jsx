import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Valmo (Meesho) Products",
    description:
      "Reliable packaging solutions designed for efficient e-commerce deliveries.",
    image: "https://res.cloudinary.com/dx6whhivt/image/upload/v1791484518/images.jpg", // Add image path later
    link: "/productlist?category=Valmo",
  },
  {
    title: "Valmo (Sustainable) Products",
    description:
      "Eco-conscious packaging solutions designed for a more sustainable future.",
    image: "https://res.cloudinary.com/dx6whhivt/image/upload/v1791484518/images.jpg", // Add image path later
    link: "/productlist?category=Valmo%20Sustainable",
  },
];

const Categories = () => {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">
              Explore Our Products 
              
            </p>

            <h2 className="text-3xl font-bold text-[#173B61] sm:text-4xl lg:text-5xl">
              Packaging Solutions
            </h2>
          </div>

          <Link to="/productlist" className="text-black p-2 border border-black hover:text-[#D99100]">
                View All Products
              </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative min-h-[320px] overflow-hidden rounded-2xl bg-[#F3F6F8]"
            >
              {/* Image */}
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#E9EFF4]">
                  <span className="text-sm text-[#173B61]/40">
                    Product Image
                  </span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/95 via-[#102A43]/45 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/75">
                      {category.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5A800] text-white transition duration-300 group-hover:rotate-45 group-hover:bg-[#D99100]">
                    <FiArrowUpRight size={21} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
