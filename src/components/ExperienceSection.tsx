import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  brands?: string[];
  delay: number;
}

const ExperienceCard = ({
  company,
  position,
  period,
  description,
  brands,
  delay,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className="card mb-8 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="border-l-4 border-primary-500 pl-5 ml-1">
        <h3 className="text-xl font-semibold text-gray-800">{position}</h3>
        <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
          <span className="text-primary-600 font-medium">{company}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="text-gray-500">{period}</span>
        </div>

        <ul className="space-y-2 mb-4">
          {description.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: delay + index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 mr-2 mt-1">•</span>
              {item}
            </motion.li>
          ))}
        </ul>

        {brands && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-500 mb-2">
              Brands worked with:
            </h4>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand, index) => (
                <motion.span
                  key={index}
                  className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-refined text-sm"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: delay + 0.2 + index * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    backgroundColor: "#e0f2fe",
                    scale: 1.03,
                  }}
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "NewFold Digital",
      position: "Senior Software Engineer",
      period: "Aug 2016 - Present, Mumbai",
      description: [
        "Frontend development for multiple web hosting brands using React, Bootstrap, and jQuery.",
        "Implement SEO strategies, A/B testing methodologies, and Google Analytics integrations to optimize user experience.",
        "Collaborate with cross-functional teams to design and develop responsive, user-friendly interfaces.",
        "Participate in code reviews, and mentor junior developers to maintain high-quality coding standards.",
        "Analyze and improve website performance by optimizing code and implementing best practices.",
      ],
      brands: [
        "BigRock",
        "HostGator India",
        "Bluehost India",
        "ResellerClub India",
      ],
    },
    {
      company: "Infonius Solutions",
      position: "Web Developer",
      period: "Aug 2014 - Aug 2016",
      description: [
        "Worked as a front end developer, integrated apis with UI.",
        "Worked as a front end developer for the above Wordpress sites. Used various themes for the wordPress sites.",
        "Implemented and tested responsive websites using HTML5, CSS3, Bootstrap, JavaScript, jQuery and WordPressSkills",
        "Developed multiple mobile applications using the Ionic Framework and AngularJS (v1), including Reckrut, AH Ventures, and GaneshBhakti.",
      ],
      brands: ["whoisxmlapi", "lrnr", "squareonekidsacademy", "gbcaindia"],
    },
    // Additional experiences can be added here when available
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Work Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional journey and the impactful projects I've contributed
            to over the years.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${index}`}
              company={exp.company}
              position={exp.position}
              period={exp.period}
              description={exp.description}
              brands={exp.brands}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
