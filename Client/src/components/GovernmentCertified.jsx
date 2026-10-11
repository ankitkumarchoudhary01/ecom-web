import { FiShield, FiCheckCircle, FiAward } from "react-icons/fi";

const certifications = [
  {
    icon: FiShield,
    title: "Government Certified",
    description: "Recognized and compliant with applicable standards.",
  },
  {
    icon: FiCheckCircle,
    title: "Quality Assured",
    description: "Committed to consistent quality across our products.",
  },
  {
    icon: FiAward,
    title: "Trusted Standards",
    description: "Following industry standards for reliable packaging.",
  },
];

const GovernmentCertified = () => {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">
            Trusted & Certified
          </p>

          <h2 className="text-3xl font-bold text-[#173B61] sm:text-4xl">
            Quality You Can Trust
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            Our commitment to quality, compliance and responsible packaging is
            reflected in the standards we follow.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {certifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF4D6] text-[#F5A800] transition duration-300 group-hover:bg-[#F5A800] group-hover:text-white">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-[#173B61]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GovernmentCertified;
