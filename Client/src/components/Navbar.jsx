import { useState } from "react";
import { FiChevronDown, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://prowrrap.com/wp-content/uploads/2025/04/main-logo.png"
            alt="Prowrrap Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {/* Home */}
          <a
            href="/"
            className="text-sm font-medium text-[#173B61] transition hover:text-[#F5A800]"
          >
            Home
          </a>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-[#173B61] transition hover:text-[#F5A800]"
            >
              Products
              <FiChevronDown
                size={17}
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {productsOpen && (
              <div className="absolute left-0 top-full mt-4 w-64 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-100">
                <a
                  href="/products/valmo-meesho"
                  className="block px-5 py-4 text-sm text-[#173B61] transition hover:bg-orange-50 hover:text-[#F5A800]"
                >
                  Valmo (Meesho) Product
                </a>

                <a
                  href="/products/valmo-sustainable"
                  className="block px-5 py-4 text-sm text-[#173B61] transition hover:bg-orange-50 hover:text-[#F5A800]"
                >
                  Valmo (Sustainable) Product
                </a>
              </div>
            )}
          </div>

          {/* About Us */}
          <a
            href="/about"
            className="text-sm font-medium text-[#173B61] transition hover:text-[#F5A800]"
          >
            About Us
          </a>

          {/* Cart */}
          <a
            href="/cart"
            className="flex items-center gap-2 text-sm font-medium text-[#173B61] transition hover:text-[#F5A800]"
          >
            <FiShoppingCart size={21} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#173B61]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="/"
              className="text-sm font-medium text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>

            {/* Mobile Products */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex w-full items-center justify-between text-sm font-medium text-[#173B61]"
              >
                Products
                <FiChevronDown
                  size={17}
                  className={`transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-4 border-l border-gray-200 pl-4">
                  <a
                    href="/products/valmo-meesho"
                    className="text-sm text-gray-600 hover:text-[#F5A800]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Valmo (Meesho) Product
                  </a>

                  <a
                    href="/products/valmo-sustainable"
                    className="text-sm text-[#173B61] hover:text-[#F5A800]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Valmo (Sustainable) Product
                  </a>
                </div>
              )}
            </div>

            <a
              href="/about"
              className="text-sm font-medium text-[#173B61]"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </a>

            <a
              href="/cart"
              className="flex items-center gap-2 text-sm font-medium text-[#173B61]"
              onClick={() => setMobileOpen(false)}
            >
              <FiShoppingCart size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
