import { useEffect, useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";

const Hero = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowSearch(false);
      } else {
        // Scrolling up
        setShowSearch(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden">
      {/* YouTube Background Video */}
      <iframe
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.15]"
        src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=y2O9iogTi5Ba-6eC?autoplay=1&mute=1&loop=1&playlist=a3ICNMQW7Ok"
        title="Prowrrap Hero Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      {/* Overall Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#102A43]/90 via-[#102A43]/55 to-transparent" />

      {/* Floating Search Bar */}
      <div
        className={`absolute left-1/2 top-7 z-20 w-[88%] max-w-5xl -translate-x-1/2 transition-all duration-500 ease-in-out ${
          showSearch ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
      >
        <div className="flex h-12 items-center overflow-hidden rounded-full border border-white/40 bg-white/15 shadow-lg backdrop-blur-md sm:h-14">
          {/* Search Icon */}
          <div className="pl-5 text-white/80 sm:pl-6">
            <FiSearch size={20} />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search for packaging products..."
            className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/75 sm:text-base"
          />

          {/* Search Button */}
          <button
            type="button"
            className="mr-1 h-10 rounded-full bg-[#F5A800] px-5 text-sm font-semibold text-white transition hover:bg-[#D99100] sm:h-12 sm:px-7"
          >
            Search
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center pt-16 sm:pt-20">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Packaging Made
              <span className="block text-[#F5A800]">For Progress.</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white/85 sm:text-lg">
              Reliable and sustainable packaging solutions designed to move your
              business forward.
            </p>

            <a
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#F5A800] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#D99100] hover:shadow-xl"
            >
              Read More
              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
