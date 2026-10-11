const brands = [
  {
    name: "Meesho",
    logo: "", // Add logo path
  },
  {
    name: "Valmo",
    logo: "", // Add logo path
  },
  {
    name: "Brand Partner",
    logo: "", // Add logo path
  },
  {
    name: "Partner Brand",
    logo: "", // Add logo path
  },
  {
    name: "Business Partner",
    logo: "", // Add logo path
  },
];

const PartnerBrands = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center sm:mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">
          Our Network
        </p>

        <h2 className="text-3xl font-bold text-[#173B61] sm:text-4xl">
          Our Partner Brands
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Trusted partnerships that help us deliver reliable packaging solutions
          at scale.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#F7F9FB] to-transparent sm:w-32" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#F7F9FB] to-transparent sm:w-32" />

        {/* Moving Track */}
        <div className="flex w-max animate-[slide_25s_linear_infinite] hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex items-center gap-6 px-3 sm:gap-10 sm:px-5">
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex h-24 w-40 items-center justify-center rounded-xl border border-gray-100 bg-white px-6 shadow-sm transition duration-300 hover:shadow-md sm:h-28 sm:w-48"
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-14 max-w-[130px] object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-[#173B61]/40">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Duplicate Set for Infinite Loop */}
          <div className="flex items-center gap-6 px-3 sm:gap-10 sm:px-5">
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex h-24 w-40 items-center justify-center rounded-xl border border-gray-100 bg-white px-6 shadow-sm transition duration-300 hover:shadow-md sm:h-28 sm:w-48"
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-14 max-w-[130px] object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-[#173B61]/40">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
