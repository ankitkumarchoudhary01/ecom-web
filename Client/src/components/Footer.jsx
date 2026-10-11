import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#102A43] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="/" className="inline-block">
              <img
                src="/main-logo.png"
                alt="Prowrrap"
                className="h-12 w-auto brightness-0 invert"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
              Reliable and sustainable packaging solutions designed to support
              businesses at every stage.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#F5A800] hover:bg-[#F5A800] hover:text-white"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#F5A800] hover:bg-[#F5A800] hover:text-white"
              >
                <FiLinkedin size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#F5A800] hover:bg-[#F5A800] hover:text-white"
              >
                <FiFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5A800]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5A800]">
              Products
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/products/valmo-meesho"
                  className="flex items-center gap-1 text-sm text-white/65 transition hover:text-white"
                >
                  Valmo (Meesho)
                  <FiArrowUpRight size={14} />
                </a>
              </li>

              <li>
                <a
                  href="/products/valmo-sustainable"
                  className="flex items-center gap-1 text-sm text-white/65 transition hover:text-white"
                >
                  Valmo (Sustainable)
                  <FiArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5A800]">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">
              {/* Location */}
              <div className="flex gap-3">
                <FiMapPin className="mt-1 shrink-0 text-[#F5A800]" size={18} />

                <p className="text-sm leading-6 text-white/65">India</p>
              </div>

              {/* Phone */}
              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-sm text-white/65 transition hover:text-white"
              >
                <FiPhone className="shrink-0 text-[#F5A800]" size={18} />
                +91 XXXXX XXXXX
              </a>

              {/* Email */}
              <a
                href="mailto:info@prowrrap.com"
                className="flex items-center gap-3 text-sm text-white/65 transition hover:text-white"
              >
                <FiMail className="shrink-0 text-[#F5A800]" size={18} />
                info@prowrrap.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left lg:px-12">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Prowrrap Packaging Pvt. Ltd. All rights
            reserved.
          </p>

          <div className="flex justify-center gap-5">
            <a
              href="/privacy-policy"
              className="text-xs text-white/50 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-xs text-white/50 transition hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
