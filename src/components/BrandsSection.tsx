import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Brand {
  name: string;
  logo: string;
  url: string;
}

const brands: Brand[] = [
  {
    name: "BigRock",
    logo: "/images/brands/bigrock-logo.svg",
    url: "https://www.bigrock.in/",
  },
  {
    name: "HostGator India",
    logo: "/images/brands/hostgator-logo.svg",
    url: "https://www.hostgator.in/",
  },
  {
    name: "Bluehost India",
    logo: "/images/brands/bluehost-logo.svg",
    url: "https://www.bluehost.in/",
  },
  {
    name: "ResellerClub India",
    logo: "/images/brands/resellerclub-logo.png",
    url: "https://india.resellerclub.com/",
  },
  {
    name: "whoisxmlapi",
    logo: "/images/brands/whoisxmlapi-h-notag.svg",
    url: "https://www.whoisxmlapi.com/",
  },
  {
    name: "lrnr",
    logo: "/images/brands/logo-1.svg",
    url: "https://lrnr.us/",
  },
  {
    name: "square one kids academy",
    logo: "/images/brands/Website-Logo-Wide-2.png",
    url: "https://squareonekidsacademy.com/",
  },
  {
    name: "gbcaindia",
    logo: "/images/brands/gbc-llp-logo.png",
    url: "https://https://gbcaindia.com/",
  },
];
const VISIBLE_COUNT = 5;

const getVisibleBrands = (start: number) => {
  const end = start + VISIBLE_COUNT;
  if (end <= brands.length) {
    return brands.slice(start, end);
  }
  // Wrap around if at the end
  return [...brands.slice(start), ...brands.slice(0, end - brands.length)];
};
const BrandsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === brands.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const visibleBrands = getVisibleBrands(currentIndex);

  return (
    <section id="brands" className="section bg-gray-50 mb-[70px]">
      <div className="container mx-auto px-4">
        {/* ...existing heading code... */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-8 py-8">
            {visibleBrands.map((brand, index) => (
              <motion.a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: index === 2 ? 1.1 : 0.9, // Center logo is highlighted
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
